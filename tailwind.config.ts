import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f97316",

          "primary-content": "#150900",

          secondary: "#d97706",

          "secondary-content": "#110500",

          accent: "#1e40af",

          "accent-content": "#ced9f2",

          neutral: "#f2f2f2",

          "neutral-content": "#141415",

          "base-100": "#ffffff",

          "base-200": "#d3d4d6",

          "base-300": "#b4b5b7",

          "base-content": "#141415",

          info: "#2563eb",

          "info-content": "#d2e2ff",

          success: "#fbbf24",

          "success-content": "#150d00",

          warning: "#92400e",

          "warning-content": "#ebd8cf",

          error: "#c2410c",

          "error-content": "#f7dad1",
        },
        dark: {
          primary: "#f97316",

          "primary-content": "#150900",

          secondary: "#d97706",

          "secondary-content": "#110500",

          accent: "#1e40af",

          "accent-content": "#ced9f2",

          neutral: "#f3f4f6",

          "neutral-content": "#141415",

          "base-100": "#111827",

          "base-200": "#0d1320",

          "base-300": "#090f1a",

          "base-content": "#c9cbcf",

          info: "#2563eb",

          "info-content": "#d2e2ff",

          success: "#fbbf24",

          "success-content": "#150d00",

          warning: "#92400e",

          "warning-content": "#ebd8cf",

          error: "#c2410c",

          "error-content": "#f7dad1",
        },
      },
    ],
  },
} satisfies Config;
