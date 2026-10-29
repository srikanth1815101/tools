# CSRGO Unified Brand Design System

This document provides the definitive styling rules, color codes, typography scales, and component blueprints extracted directly from the flagship **CSRGO DSA** platform (`C:\Users\csr85\OneDrive\Documents\GitHub\DSA-Combined\dsa`).

Use this guide and [csrgo-brand.css](file:///c:/Users/csr85/OneDrive/Documents/GitHub/tools/static/css/csrgo-brand.css) to build new pages and sites that maintain 100% visual consistency across the entire CSRGO ecosystem.

---

## 1. Quick Color Reference

### The Brand Triad (Exact Logo Matches)

| Color Token | Hex Code | Visual Role |
| :--- | :--- | :--- |
| **CSRGO Solar Orange** | `#FF6B35` | Primary brand accent, high-energy CTAs, badge highlights |
| **CSRGO Electric Blue** | `#4A90E2` | Brand identity, primary links, focus indicators, tech icons |
| **CSRGO Amethyst Purple** | `#9B59B6` | Modern secondary accent, terminal gradient stop |

### The Surface System

| Mode | Canvas / Background | Cards / Panels | Borders | Primary Text | Secondary Text |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Light Mode** | `#F8F9FA` | `#FFFFFF` | `rgba(229, 231, 235, 0.7)` | `#111827` (`gray-900`) | `#4B5563` (`gray-600`) |
| **Dark Mode** | `#0A0E27` (Midnight) | `#141B3D` / `#1F2937` | `rgba(75, 85, 99, 0.45)` | `#F9FAFB` (`gray-50`) | `#9CA3AF` (`gray-400`) |

---

## 2. Brand Gradients

```css
/* Core Brand Gradients */
--gradient-primary: linear-gradient(135deg, #FF6B35 0%, #4A90E2 50%, #9B59B6 100%);
--gradient-secondary: linear-gradient(135deg, #4A90E2 0%, #9B59B6 100%);
--gradient-accent: linear-gradient(90deg, #FF6B35 0%, #FF8C5A 50%, #4A90E2 100%);
--gradient-warm: linear-gradient(135deg, #FF6B35 0%, #FF7F66 100%);
--gradient-cool: linear-gradient(135deg, #4A90E2 0%, #8B5CF6 100%);

/* Brand Logo Text */
--gradient-text: linear-gradient(90deg, #9333EA 0%, #2563EB 100%);

/* Animated Hero Headline */
--gradient-hero: linear-gradient(90deg, #2563EB 0%, #9333EA 50%, #DB2777 100%);

/* Anchoring Footer Background */
--gradient-footer: linear-gradient(to top, #111827 0%, #030712 50%, #172554 100%);
```

---

## 3. Typography Stack

### Google Fonts Link
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

### Font Hierarchy
- **Body & UI**: `'Inter', system-ui, -apple-system, sans-serif`
- **Code & Numbers**: `'Fira Code', monospace`
- **Hero Title**: `text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]`
- **Section Heading**: `text-2xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white`
- **Card Heading**: `text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white`
- **Kicker / Overline**: `text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400`
- **Body Standard**: `text-base text-gray-600 dark:text-gray-400 leading-relaxed`

---

## 4. Key Component Checklist for Any CSRGO Site

1. **Floating Island Header**:
   - `fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50`
   - `bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 rounded-xl sm:rounded-2xl shadow-lg shadow-purple-500/10`
   - Brand Logo lockup: `[Logo Icon] | CSRGO [Site Name]` with text gradient `from-purple-600 to-blue-600`.
   - Active link underline indicator: `bg-gradient-to-r from-blue-600 via-fuchsia-500 to-pink-500`.

2. **Hero Ambient Glow**:
   - `w-[80vw] h-[50vh] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[120px] rounded-full pointer-events-none`
   - Headline gradient: `bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x`

3. **Interactive Bento Cards**:
   - `rounded-3xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-[#141B3D]`
   - Top accent stripe: `h-1.5 bg-gradient-to-r from-blue-500 to-purple-600`
   - Hover signature: Lift `translateY(-6px)` with triple-glow box shadow (`orange + blue + purple`).

4. **Vibrant CTAs**:
   - Primary: `bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:scale-[1.02] hover:-translate-y-1 active:scale-95`
   - Accent: `bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-xl shadow-purple-500/20`
   - Action / Download: `bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30`

5. **Cosmic Deep Footer**:
   - `bg-gradient-to-t from-gray-900 via-gray-950 to-blue-950 text-white pt-16 pb-8`
   - Inverted white brand mark (`filter brightness-0 invert`)
   - Links to CSRGO ecosystem: `csrgo.com`, `dsa.csrgo.com`, `tools.csrgo.com`, `csrgo.com/blog`.

---

## 5. CSS & Tailwind Integration

Link the shared brand stylesheet in your template `<head>`:
```html
<link rel="stylesheet" href="/css/csrgo-brand.css">
```

Or configure Tailwind using the preset defined in the [Brand Design System Artifact](file:///C:/Users/csr85/.gemini/antigravity-ide/brain/088cfcc9-423a-4184-ace1-cacdbf04b0de/brand_design_system.md).
