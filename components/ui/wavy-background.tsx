"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: {
    children?: any;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    [key: string]: any;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const waveColors = colors ?? [
        "#26377D", // Flumen Deep Blue
        "#00B8A9", // Aqua/Teal
        "#C2DDE5", // Light Blue
        "#4A5F9D", // Medium Blue
        "#1ECAD3", // Bright Aqua
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const noise = createNoise3D();
        const getSpeed = () => (speed === "slow" ? 0.0009 : 0.0016);

        // Respeta usuarios que prefieren menos movimiento: dibuja un frame estático.
        const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let w = 0;
        let h = 0;
        let nt = 0;
        let animationId = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        // iOS Safari ignora ctx.filter (blur) en canvas 2D, así que el difuminado
        // se aplica también por CSS sobre el <canvas>. Para que el blur por CSS no
        // deje ver bordes duros en los extremos, el canvas se dibuja con un margen
        // extra (overscan) y se posiciona ligeramente fuera del contenedor.
        const overscan = blur * 2;

        const resize = () => {
            // Usa el tamaño real del contenedor (cae al viewport si por timing aún es 0).
            const rect = canvas.getBoundingClientRect();
            const baseW = Math.max(rect.width, window.innerWidth) || window.innerWidth || 1280;
            const baseH = Math.max(rect.height, window.innerHeight) || window.innerHeight || 800;
            const cssW = baseW + overscan * 2;
            const cssH = baseH + overscan * 2;
            w = canvas.width = cssW * dpr;
            h = canvas.height = cssH * dpr;
            canvas.style.width = `${cssW}px`;
            canvas.style.height = `${cssH}px`;
            // El difuminado se aplica por CSS sobre el <canvas> (ver style), no con
            // ctx.filter, porque iOS Safari ignora ctx.filter en canvas 2D.
        };

        const drawWave = (n: number) => {
            nt += getSpeed();
            // Las ondas atraviesan la mitad inferior y se escalonan hacia abajo, creando
            // una corriente con profundidad. Cada capa fluye lateralmente (offset en nt)
            // para que se lea movimiento real, no solo ondulación en el sitio.
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.lineWidth = (waveWidth || 50) * dpr;
                ctx.strokeStyle = waveColors[i % waveColors.length];
                // capas más profundas = más abajo y con más amplitud
                const baseline = h * (0.52 + i * 0.05);
                const amplitude = (70 + i * 18) * dpr;
                const drift = nt * (1 + i * 0.15); // desplazamiento lateral por capa
                for (let x = 0; x < w; x += 5) {
                    const y = noise(x / 800 + drift, 0.35 * i, nt) * amplitude;
                    ctx.lineTo(x, y + baseline);
                }
                ctx.stroke();
                ctx.closePath();
            }
        };

        const drawFrame = () => {
            ctx.globalAlpha = 1;
            ctx.fillStyle = backgroundFill || "#1C2536";
            ctx.fillRect(0, 0, w, h);
            ctx.globalAlpha = waveOpacity;
            drawWave(7);
        };

        let running = false;
        const loop = () => {
            drawFrame();
            animationId = requestAnimationFrame(loop);
        };
        const start = () => {
            if (running || reduceMotion) return;
            running = true;
            animationId = requestAnimationFrame(loop);
        };
        const stop = () => {
            running = false;
            cancelAnimationFrame(animationId);
        };

        resize();
        drawFrame(); // primer frame siempre, incluso con reduced-motion

        // Arranca la animación de inmediato. Los navegadores ya pausan requestAnimationFrame
        // automáticamente en pestañas en segundo plano, así que no hace falta gestionarlo a mano.
        start();

        // Pausa solo cuando el hero sale del viewport (ahorra CPU al hacer scroll).
        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    start();
                } else {
                    stop();
                }
            },
            { threshold: 0 }
        );
        io.observe(canvas);

        window.addEventListener("resize", resize);

        return () => {
            stop();
            io.disconnect();
            window.removeEventListener("resize", resize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className={cn(
                "relative flex flex-col items-center justify-center overflow-hidden",
                containerClassName
            )}
        >
            <canvas
                className="absolute z-0"
                ref={canvasRef}
                aria-hidden="true"
                style={{
                    // Blur por CSS: funciona en iOS Safari (donde ctx.filter se ignora).
                    // El canvas se dibuja con overscan, por eso se posiciona con un
                    // offset negativo igual al margen extra para ocultar los bordes.
                    top: `${-blur * 2}px`,
                    left: `${-blur * 2}px`,
                    filter: `blur(${blur}px)`,
                    WebkitFilter: `blur(${blur}px)`,
                }}
            />
            {/* Scrim doble: (1) un velo vertical que oscurece la franja del título
                (centro-arriba) pero deja respirar la corriente abajo, y (2) un realce
                radial sutil detrás del texto. Garantiza contraste AA sin apagar la onda. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(15,21,36,0.78) 0%, rgba(15,21,36,0.55) 30%, rgba(15,21,36,0.15) 55%, rgba(15,21,36,0) 78%)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                    background:
                        "radial-gradient(70% 45% at 50% 40%, rgba(15,21,36,0.55) 0%, rgba(15,21,36,0) 70%)",
                }}
            />
            <div className={cn("relative z-10 w-full", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
