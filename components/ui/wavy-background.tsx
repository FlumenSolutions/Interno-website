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
            // El canvas es position:fixed y cubre el viewport, así que se dimensiona
            // SOLO con el tamaño del viewport — nunca con getBoundingClientRect (que
            // durante el overscroll elástico de iOS devuelve valores inflados que
            // empujaban las ondas fuera de vista). Al ser fixed, no se mueve con el
            // rebote: queda pegado a la pantalla y las ondas se mantienen en su sitio.
            const vw = window.visualViewport?.width || window.innerWidth || 1280;
            const vh = window.visualViewport?.height || window.innerHeight || 800;
            const cssW = vw + overscan * 2;
            const cssH = vh + overscan * 2;
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
                // Las ondas se anclan a una distancia FIJA desde el borde inferior del
                // canvas (no a una fracción de la altura). Así, aunque iOS cambie la
                // altura del viewport durante el overscroll, las ondas se mantienen
                // ancladas a la parte baja visible y no "se van hacia abajo".
                const baseline = h - (overscan + 90 + i * 40) * dpr;
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

        // El loop NUNCA se detiene por completo mientras la página está visible:
        // recalcula él mismo, cada pocos frames, si el hero está a la vista y solo
        // entonces dibuja. Antes se usaba un IntersectionObserver para pausar, pero
        // en iOS Safari, tras un pull-to-refresh / overscroll (rebote elástico), el
        // observer no siempre vuelve a disparar "visible" y las ondas se quedaban
        // congeladas/desaparecidas. Este enfoque es autocorrector: si el hero vuelve
        // al viewport, el siguiente chequeo lo detecta y reanuda el dibujo.
        let frame = 0;
        let onScreen = true;
        const isOnScreen = () => {
            const rect = canvas.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight;
        };
        const loop = () => {
            // Chequeo de visibilidad barato (~6 veces/seg). Cuando el hero está fuera
            // de pantalla saltamos el dibujo (el coste real: ruido + trazos), pero el
            // loop sigue vivo para reanudar al instante al volver.
            if (frame++ % 10 === 0) onScreen = isOnScreen();
            if (onScreen) drawFrame();
            animationId = requestAnimationFrame(loop);
        };

        resize();
        drawFrame(); // primer frame siempre, incluso con reduced-motion

        // Con reduced-motion dejamos solo el frame estático; sin él, arrancamos el loop.
        if (!reduceMotion) animationId = requestAnimationFrame(loop);

        // Re-sincroniza tamaño + visibilidad y dibuja. Se llama tras eventos que en
        // iOS dejan el canvas desfasado (overscroll/pull-to-refresh, cambio de la
        // barra de URL, restauración de bfcache).
        const resync = () => {
            resize();
            onScreen = isOnScreen();
            drawFrame();
        };

        // bfcache (iOS Safari): al restaurar la página el canvas puede volver en blanco.
        window.addEventListener("pageshow", resync);
        window.addEventListener("resize", resize);

        // iOS Safari: el pull-to-refresh / overscroll elástico mueve el layout y
        // cambia visualViewport sin disparar siempre un "resize" fiable; cuando el
        // rebote termina, el canvas puede quedar desplazado y las ondas "se van
        // hacia abajo" sin volver. Re-sincronizamos al terminar el scroll y ante
        // cualquier cambio de visualViewport para autocorregirlo.
        let scrollTimer: ReturnType<typeof setTimeout>;
        const onScrollEnd = () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(resync, 120);
        };
        window.addEventListener("scroll", onScrollEnd, { passive: true });
        const vv = window.visualViewport;
        vv?.addEventListener("resize", resync);
        vv?.addEventListener("scroll", onScrollEnd);

        return () => {
            cancelAnimationFrame(animationId);
            clearTimeout(scrollTimer);
            window.removeEventListener("pageshow", resync);
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", onScrollEnd);
            vv?.removeEventListener("resize", resync);
            vv?.removeEventListener("scroll", onScrollEnd);
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
            {/* Fundido inferior: las ondas se desvanecen hacia el fondo de la
                siguiente sección (#0F1524), suavizando el corte entre el hero
                y el contenido que sigue. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 md:h-40"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(15,21,36,0) 0%, rgba(15,21,36,0.7) 55%, #0F1524 100%)",
                }}
            />
            <div className={cn("relative z-10 w-full", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
