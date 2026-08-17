/**
 * Tailwind CSS Configuration
 * ---------------------------
 * Custom design tokens for the medical app:
 * - colors: Primary palette with bg, card, primary, text variants
 * - borderRadius: Modern rounded corners for cards (24px)
 * - boxShadow: Subtle shadows for depth
 * - darkMode: Class-based dark mode support
 */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        card: "var(--color-card)",
        primary: "var(--color-primary)",
        primarySoft: "var(--color-primary-soft)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        borderSoft: "var(--color-border-soft)",
      },
      borderRadius: {
        'card': "24px",
      },
      boxShadow: {
        soft: "0 4px 18px rgba(15, 23, 42, 0.08)",
      },
    },
  },
};