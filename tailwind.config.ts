import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#26377D",
                    50: "#E8EBF5",
                    100: "#D1D7EB",
                    200: "#A3AFD7",
                    300: "#7587C3",
                    400: "#475FAF",
                    500: "#26377D",
                    600: "#1E2C63",
                    700: "#17214A",
                    800: "#0F1631",
                    900: "#080B18",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#C2DDE5",
                    50: "#F7FBFC",
                    100: "#EFF7F9",
                    200: "#DFF0F3",
                    300: "#C2DDE5",
                    400: "#9FCAD7",
                    500: "#7CB7C9",
                    600: "#5A9FB5",
                    700: "#457A8C",
                    800: "#305563",
                    900: "#1B303A",
                    foreground: "#1F2937",
                },
                accent: {
                    DEFAULT: "#00B8A9",
                    50: "#E6F9F7",
                    100: "#CCF3EF",
                    200: "#99E7DF",
                    300: "#66DBCF",
                    400: "#33CFBF",
                    500: "#00B8A9",
                    600: "#009387",
                    700: "#006E65",
                    800: "#004A43",
                    900: "#002521",
                    foreground: "#FFFFFF",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "slide-up": {
                    from: { transform: "translateY(20px)", opacity: "0" },
                    to: { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.5s ease-out",
                "slide-up": "slide-up 0.5s ease-out",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
                'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
                'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
                'h3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
                'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
                'body-lg': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
                'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
