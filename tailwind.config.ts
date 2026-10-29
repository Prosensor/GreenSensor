import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: { hoverOnlyWhenSupported: true },
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			heading: ['var(--font-archivo)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			display: ['var(--font-sora)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			alt: ['var(--font-manrope)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif']
  		},
  		colors: {
  			/* Palette GreenSensor : vert forêt de la plaquette, orange réservé à la chaleur et aux actions */
  			forest: { DEFAULT: '#1b4a2a', 800: '#143a20', 950: '#0f2a18' },
  			mint: '#bfe3a8',
  			orange: { DEFAULT: '#ff6b35', cta: '#d4450f', 'cta-hover': '#b93a0b', soft: '#fff1eb' },
  			'ink-strong': '#10241a',
  			ink: '#1b2b21',
  			body: '#435247',
  			slate: '#5e6d63',
  			mute: '#93a097',
  			line: '#dce4d6',
  			surface: { DEFAULT: '#f5f8f2', 2: '#ecf1e8' },
  			moss: { 700: '#2f6f2a', 600: '#4b8b2c', 400: '#8cc26e', 100: '#dcecd0', 50: '#edf6e5' },
  			clay: { 600: '#d9822b', 50: '#fbeee1' },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			badge: '4px',
  			'btn-sm': '6px',
  			btn: '8px',
  			card: '12px',
  			panel: '16px',
  			pill: '20px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		transitionTimingFunction: {
  			'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
  			'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
  			drawer: 'cubic-bezier(0.32, 0.72, 0, 1)'
  		},
  		keyframes: {
  			'step-in': {
  				from: { opacity: '0', transform: 'translateX(12px)' },
  				to: { opacity: '1', transform: 'translateX(0)' }
  			},
  			'pop-in': {
  				from: { opacity: '0', transform: 'scale(0.96) translateY(8px)' },
  				to: { opacity: '1', transform: 'scale(1) translateY(0)' }
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'step-in': 'step-in 220ms cubic-bezier(0.23, 1, 0.32, 1) both',
  			'pop-in': 'pop-in 400ms cubic-bezier(0.23, 1, 0.32, 1) both',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
