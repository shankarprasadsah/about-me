import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				auth: {
					primary: 'hsl(var(--auth-primary))',
					'primary-hover': 'hsl(var(--auth-primary-hover))',
					container: 'hsl(var(--auth-container))',
					input: 'hsl(var(--auth-input))',
					'input-focus': 'hsl(var(--auth-input-focus))',
					social: 'hsl(var(--auth-social))',
					'social-hover': 'hsl(var(--auth-social-hover))',
					text: 'hsl(var(--auth-text))',
					'text-light': 'hsl(var(--auth-text-light))',
				},
				gradient: {
					start: 'hsl(var(--gradient-start))',
					end: 'hsl(var(--gradient-end))',
				},
				about: {
					primary: 'hsl(var(--about-primary))',
					secondary: 'hsl(var(--about-secondary))',
					accent: 'hsl(var(--about-accent))',
					success: 'hsl(var(--about-success))',
					warning: 'hsl(var(--about-warning))',
					info: 'hsl(var(--about-info))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				"gradient-hero": "var(--gradient-hero)",
				"gradient-section": "var(--gradient-section)",
				"gradient-skills": "var(--gradient-skills)",
				"gradient-contact": "var(--gradient-contact)",
			},
			boxShadow: {
				soft: "var(--shadow-soft)",
				colorful: "var(--shadow-colorful)",
				glow: "var(--shadow-glow)",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
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
				},
				'slide-in-right': {
					'0%': { 
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				"slide-up": {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
				"bounce-soft": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				"slide-up": "slide-up 0.8s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse-soft": "pulse-soft 2s ease-in-out infinite",
				"bounce-soft": "bounce-soft 2s ease-in-out infinite",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
