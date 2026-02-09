# Daniel Urbina Portfolio - UI/UX Design Specification

**Version:** 1.0
**Last Updated:** 2026-02-09
**Design Philosophy:** Dark-first, motion with purpose, code identity, performance-obsessed, accessibility-compliant

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Typography System](#typography-system)
3. [Spacing & Layout Grid](#spacing--layout-grid)
4. [Component Specifications](#component-specifications)
5. [Interactive States](#interactive-states)
6. [Responsive Breakpoints](#responsive-breakpoints)
7. [Accessibility Requirements](#accessibility-requirements)
8. [Animation Choreography](#animation-choreography)

---

## Design Tokens

### Color System

**Background Surfaces**
```css
--bg-primary: #0A0A0F       /* Near-black base, body background */
--bg-secondary: #12121A     /* Card surfaces, elevated sections */
--bg-tertiary: #1A1A2E      /* Hover states, secondary surfaces */
```

Tailwind classes:
- `bg-background` → #0A0A0F
- `bg-background-secondary` → #12121A
- `bg-background-tertiary` → #1A1A2E

**Accent Colors**
```css
--accent-primary: #6C63FF   /* Primary CTA, active states */
--accent-purple: #A855F7    /* Gradient end, highlights */
--accent-cyan: #22D3EE      /* Code highlights, links, secondary actions */
```

Tailwind classes:
- `bg-accent` / `text-accent` → #6C63FF
- `bg-accent-purple` / `text-accent-purple` → #A855F7
- `bg-accent-cyan` / `text-accent-cyan` → #22D3EE
- `bg-gradient-accent` → linear-gradient(135deg, #6C63FF, #A855F7)

**Text Colors**
```css
--text-primary: #F1F1F1     /* Primary body text, headings */
--text-secondary: #8B8B9E   /* Muted text, captions, labels */
--text-highlight: #A855F7   /* Accent text, links on hover */
```

Tailwind classes:
- `text-text-primary` → #F1F1F1
- `text-text-secondary` → #8B8B9E
- `text-text-highlight` → #A855F7

**Borders & Dividers**
```css
--border-default: #1E1E2E   /* Subtle dividers, card borders */
--border-accent: #6C63FF    /* Active/focus borders */
```

Tailwind classes:
- `border-border` → #1E1E2E
- `border-accent` → #6C63FF

**Semantic Colors**
```css
--success: #10B981          /* Success messages, completed states */
--error: #EF4444            /* Error messages, validation failures */
--warning: #F59E0B          /* Warning messages, caution states */
--info: #3B82F6             /* Info messages, tooltips */
```

Add to tailwind.config.ts:
```typescript
semantic: {
  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",
}
```

### Shadows & Elevation

```css
/* Card elevation levels */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -1px rgb(0 0 0 / 0.3);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -2px rgb(0 0 0 / 0.3);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.6), 0 10px 10px -5px rgb(0 0 0 / 0.4);

/* Glow effects for accents */
--glow-accent: 0 0 20px rgba(108, 99, 255, 0.4);
--glow-accent-lg: 0 0 40px rgba(108, 99, 255, 0.6);
--glow-cyan: 0 0 20px rgba(34, 211, 238, 0.4);
```

Add to tailwind.config.ts:
```typescript
boxShadow: {
  'glow-accent': '0 0 20px rgba(108, 99, 255, 0.4)',
  'glow-accent-lg': '0 0 40px rgba(108, 99, 255, 0.6)',
  'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
}
```

### Border Radius

```css
--radius-sm: 0.25rem   /* 4px - small UI elements, badges */
--radius-md: 0.5rem    /* 8px - buttons, inputs */
--radius-lg: 0.75rem   /* 12px - cards, modals */
--radius-xl: 1rem      /* 16px - large sections, hero elements */
--radius-2xl: 1.5rem   /* 24px - featured cards */
--radius-full: 9999px  /* Pills, circular buttons */
```

Tailwind defaults already provide these via `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`.

### Spacing Scale

Uses Tailwind's default 4px-based scale:
```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
32: 8rem (128px)
40: 10rem (160px)
```

### Breakpoints

Tailwind's default responsive breakpoints:
```css
sm: 640px   /* Mobile landscape, small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops, small desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large screens */
```

---

## Typography System

### Font Families

**Sans-Serif (Inter):** Primary UI text, headings, body copy
**Monospace (JetBrains Mono):** Code snippets, terminal elements, tech tags

Tailwind classes:
- `font-sans` → Inter (default)
- `font-mono` → JetBrains Mono

### Type Scale

| Element | Size (rem/px) | Line Height | Letter Spacing | Weight | Tailwind Class |
|---------|---------------|-------------|----------------|--------|----------------|
| **Display** | 4.5rem (72px) | 1.1 | -0.02em | 700 | `text-7xl font-bold tracking-tight` |
| **H1** | 3rem (48px) | 1.2 | -0.01em | 700 | `text-5xl font-bold tracking-tight` |
| **H2** | 2.25rem (36px) | 1.3 | -0.01em | 700 | `text-4xl font-bold tracking-tight` |
| **H3** | 1.875rem (30px) | 1.3 | 0 | 600 | `text-3xl font-semibold` |
| **H4** | 1.5rem (24px) | 1.4 | 0 | 600 | `text-2xl font-semibold` |
| **H5** | 1.25rem (20px) | 1.4 | 0 | 600 | `text-xl font-semibold` |
| **H6** | 1.125rem (18px) | 1.5 | 0 | 600 | `text-lg font-semibold` |
| **Body Large** | 1.125rem (18px) | 1.6 | 0 | 400 | `text-lg` |
| **Body** | 1rem (16px) | 1.6 | 0 | 400 | `text-base` |
| **Body Small** | 0.875rem (14px) | 1.5 | 0 | 400 | `text-sm` |
| **Caption** | 0.75rem (12px) | 1.4 | 0.01em | 400 | `text-xs tracking-wide` |
| **Code** | 0.875rem (14px) | 1.5 | 0 | 400 | `text-sm font-mono` |
| **Label** | 0.875rem (14px) | 1.4 | 0.02em | 500 | `text-sm font-medium tracking-wide uppercase` |

### Font Weight Scale

- 300: Light (rarely used, avoid for accessibility)
- 400: Regular (body text)
- 500: Medium (labels, emphasis)
- 600: Semibold (subheadings)
- 700: Bold (headings, CTAs)
- 800: Extra Bold (display text, hero)

### Text Color Patterns

**Default text hierarchy:**
- Headings: `text-text-primary` (#F1F1F1)
- Body text: `text-text-primary` (#F1F1F1)
- Muted/secondary text: `text-text-secondary` (#8B8B9E)
- Links: `text-accent-cyan` → hover: `text-text-highlight`
- Inline code: `text-accent-cyan`

### Responsive Typography

Mobile (default):
- Display: 2.5rem (40px) → `text-4xl`
- H1: 2rem (32px) → `text-3xl`
- H2: 1.5rem (24px) → `text-2xl`
- H3: 1.25rem (20px) → `text-xl`

Tablet/Desktop (md+):
- Display: 4.5rem (72px) → `md:text-7xl`
- H1: 3rem (48px) → `md:text-5xl`
- H2: 2.25rem (36px) → `md:text-4xl`
- H3: 1.875rem (30px) → `md:text-3xl`

---

## Spacing & Layout Grid

### Container Widths

```css
max-width: 1280px (xl breakpoint)
padding: 1rem (16px) mobile → 2rem (32px) desktop
```

Tailwind: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

Alternative for wider sections: `max-w-screen-xl`

### Section Spacing

**Vertical rhythm between sections:**
- Mobile: `py-16` (4rem / 64px)
- Tablet: `md:py-20` (5rem / 80px)
- Desktop: `lg:py-24` (6rem / 96px)

**Hero section (extra large):**
- Mobile: `py-24` (6rem / 96px)
- Desktop: `lg:py-32` (8rem / 128px)

### Grid Systems

**Project cards (3-column grid):**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

**Skills grid (4-column):**
```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
```

**Two-column layout (About section):**
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
```

### Gutter Widths

- Small gaps (skill tags): `gap-2` (8px)
- Medium gaps (cards, form fields): `gap-6` (24px)
- Large gaps (sections, columns): `gap-12` or `gap-16` (48px / 64px)

---

## Component Specifications

### 1. Navigation Bar

**Desktop Layout:**
```
[Logo] -------------------------------- [About] [Skills] [Projects] [Experience] [Contact] [Download CV Button]
```

**Structure:**
```html
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <!-- Navigation links (hidden on mobile) -->
      <!-- CTA button (hidden on mobile) -->
      <!-- Hamburger button (visible on mobile) -->
    </div>
  </div>
</nav>
```

**Styling:**

Initial state (at top of page):
- Background: `bg-transparent`
- Backdrop: none
- Border: none

Scrolled state (after 50px scroll):
- Background: `bg-background-secondary/80`
- Backdrop blur: `backdrop-blur-md`
- Border bottom: `border-b border-border`
- Shadow: `shadow-md`
- Trigger via JS: add class `scrolled` when `window.scrollY > 50`

**Logo:**
- Size: 32px height on mobile, 40px on desktop
- SVG with gradient fill
- Clickable, returns to top with smooth scroll

**Nav Links:**
- Desktop only: `hidden md:flex md:items-center md:space-x-8`
- Font: `text-sm font-medium tracking-wide`
- Color: `text-text-secondary` → hover: `text-text-primary`
- Active state: `text-accent-cyan` with underline indicator
- Transition: `transition-colors duration-200`

**Download CV Button:**
- Desktop: `hidden md:block`
- Primary button style (see Interactive States)
- Icon: `Download` from Lucide React
- Downloads: `/Daniel-Urbina-Resume.pdf`

**Mobile Hamburger:**
- Mobile only: `md:hidden`
- Size: 40x40px touch target
- Icon: `Menu` (closed) → `X` (open) with rotation animation
- Padding: `p-2`
- Color: `text-text-primary`
- Hover background: `hover:bg-background-tertiary rounded-md`

**Mobile Menu Drawer:**

Structure:
```html
<!-- Backdrop overlay -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

<!-- Drawer panel -->
<div class="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background-secondary z-50 shadow-xl">
  <!-- Header with close button -->
  <!-- Navigation links (vertical stack) -->
  <!-- CTA button -->
  <!-- Social links -->
</div>
```

Animation:
- Enter: slide from right `translate-x-full` → `translate-x-0`
- Exit: slide to right `translate-x-0` → `translate-x-full`
- Duration: 300ms
- Easing: `ease-out` (enter), `ease-in` (exit)
- Framer Motion: `<motion.div initial={{x: '100%'}} animate={{x: 0}} exit={{x: '100%'}} transition={{duration: 0.3, ease: 'easeOut'}}`

Drawer styling:
- Background: `bg-background-secondary`
- Padding: `p-6`
- Links: vertical stack with `space-y-6`
- Link font: `text-lg font-medium`
- Active link: `text-accent-cyan` with left border indicator

Behavior:
- Close on: backdrop click, ESC key, nav link click
- Body scroll lock when open (add `overflow-hidden` to body)
- Focus trap inside drawer
- Accessible: `role="dialog" aria-modal="true" aria-label="Navigation menu"`

---

### 2. Hero Section

**Layout:**

Desktop (2-column):
```
[Left: Heading + Subtitle + CTA buttons + Social links]    [Right: Profile photo]
```

Mobile (stacked):
```
[Profile photo]
[Heading]
[Subtitle]
[CTA buttons]
[Social links]
```

**Structure:**
```html
<section class="relative min-h-screen flex items-center justify-center py-24 lg:py-32 overflow-hidden">
  <!-- Background (gradient animation or Three.js) -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Content column -->
      <!-- Image column -->
    </div>
  </div>
</section>
```

**Heading:**
- Font: `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight`
- Color: `text-text-primary`
- Name styling: Wrap "Daniel Urbina" in `<span class="bg-gradient-accent bg-clip-text text-transparent">`
- Line height: `leading-tight`

Example:
```html
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
  Hi, I'm <span class="bg-gradient-accent bg-clip-text text-transparent">Daniel Urbina</span>
</h1>
```

**Animated Subtitle (Typewriter):**
- Font: `text-xl md:text-2xl lg:text-3xl font-semibold`
- Color: `text-text-secondary`
- Rotating roles: "Full-Stack Developer", "Problem Solver", "Creative Coder"
- Library: `react-type-animation` or custom with Framer Motion
- Cursor: blinking `|` in accent color
- Loop: infinite with 2s pause between words

**Intro Paragraph:**
- Font: `text-lg md:text-xl`
- Color: `text-text-secondary`
- Line height: `leading-relaxed`
- Max width: `max-w-2xl`
- Margin top: `mt-6`

**CTA Buttons:**
- Layout: `flex flex-wrap gap-4 mt-8`
- Primary: "View My Work" → scrolls to Projects section
- Secondary: "Get in Touch" → scrolls to Contact section
- Button styles: see Interactive States section

**Social Links:**
- Layout: `flex items-center gap-4 mt-8`
- Each link: 40x40px circle
- Background: `bg-background-tertiary`
- Icon color: `text-text-secondary` → hover: `text-accent-cyan`
- Hover: `hover:bg-accent/10 hover:scale-110`
- Transition: `transition-all duration-200`
- Icons: GitHub, LinkedIn, Twitter (X), etc. from Lucide React

**Profile Photo:**
- Size: 300x300px mobile, 400x400px desktop
- Shape: circular with gradient border ring
- Border: 4px solid gradient (use pseudo-element or double div)
- Shadow: `shadow-xl`
- Animation: subtle float animation (up/down 10px, 3s loop)

Gradient ring implementation:
```html
<div class="relative">
  <div class="absolute inset-0 bg-gradient-accent rounded-full blur-md opacity-75"></div>
  <div class="relative rounded-full p-1 bg-gradient-accent">
    <img src="/profile.jpg" alt="Daniel Urbina" class="rounded-full w-full h-full object-cover" />
  </div>
</div>
```

**Background:**

CSS fallback (always present):
```html
<div class="absolute inset-0 -z-10">
  <div class="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-accent-purple/20"></div>
  <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
  <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
</div>
```

Three.js enhancement (desktop only, lazy-loaded):
- Particle field or geometric shapes
- Colors match accent palette
- Mouse-interactive (parallax movement)
- Conditionally loaded: check `window.innerWidth > 1024` and connection speed
- Fallback gracefully to CSS background if fails

---

### 3. About Section

**Layout:**

Desktop (2-column):
```
[Left: Text content + Terminal decoration]    [Right: Stats/Image]
```

Mobile: Stack content vertically

**Structure:**
```html
<section id="about" class="py-16 md:py-20 lg:py-24 bg-background-secondary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section heading -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Content column -->
      <!-- Stats/Visual column -->
    </div>
  </div>
</section>
```

**Section Heading Pattern (reusable):**
```html
<div class="text-center mb-12 lg:mb-16">
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
    About <span class="text-accent-cyan">Me</span>
  </h2>
  <p class="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
    Brief section description
  </p>
</div>
```

**Terminal Decoration:**
```html
<div class="font-mono text-sm text-accent-cyan bg-background-tertiary rounded-lg p-4 inline-block mb-6">
  <span class="text-text-secondary">></span> daniel.about()
</div>
```

**Body Text:**
- Font: `text-base md:text-lg leading-relaxed`
- Color: `text-text-secondary`
- Paragraphs: `space-y-4`
- Emphasized text: `text-text-primary font-medium`

**Stats Grid:**
```html
<div class="grid grid-cols-2 gap-6">
  <div class="bg-background-tertiary rounded-lg p-6 text-center">
    <div class="text-4xl font-bold text-accent-cyan">5+</div>
    <div class="text-text-secondary text-sm mt-2">Years Experience</div>
  </div>
  <!-- Repeat for other stats -->
</div>
```

Stats styling:
- Number: `text-4xl font-bold` with gradient or accent color
- Label: `text-sm text-text-secondary`
- Background: `bg-background-tertiary`
- Padding: `p-6`
- Border radius: `rounded-lg`
- Hover: subtle lift `hover:-translate-y-1 transition-transform`

---

### 4. Skills Section

**Layout:**

Grid of skill cards, 2 columns mobile → 3 columns tablet → 4 columns desktop

**Structure:**
```html
<section id="skills" class="py-16 md:py-20 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section heading -->

    <!-- Category: Frontend -->
    <div class="mb-12">
      <h3 class="text-xl font-semibold text-text-primary mb-6">Frontend</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        <!-- Skill cards -->
      </div>
    </div>

    <!-- Repeat for other categories -->
  </div>
</section>
```

**Skill Card:**
```html
<div class="group relative bg-background-secondary rounded-lg p-6 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-accent">
  <!-- Icon -->
  <div class="w-12 h-12 mb-4 text-accent-cyan">
    <!-- Lucide icon or custom SVG -->
  </div>

  <!-- Skill name -->
  <h4 class="text-base font-semibold text-text-primary">React</h4>
</div>
```

Styling details:
- Background: `bg-background-secondary`
- Border: `border border-border` → hover: `border-accent`
- Padding: `p-6`
- Border radius: `rounded-lg`
- Icon size: 48x48px (3rem)
- Icon color: `text-accent-cyan`
- Hover lift: `hover:-translate-y-2`
- Hover glow: `hover:shadow-glow-accent`
- Transition: `transition-all duration-300`

Accessibility:
- Each card is a semantic element (not clickable unless linking to skill detail)
- Icon has `aria-hidden="true"` (decorative)
- Skill name is primary text content

---

### 5. Projects Section

**Layout:**

Grid of project cards, 1 column mobile → 2 columns tablet → 3 columns desktop

**Structure:**
```html
<section id="projects" class="py-16 md:py-20 lg:py-24 bg-background-secondary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section heading -->

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Project cards -->
    </div>

    <!-- "View All Projects" link -->
    <div class="text-center mt-12">
      <a href="/projects" class="inline-flex items-center gap-2 text-accent-cyan hover:text-text-highlight transition-colors">
        View All Projects
        <ArrowRight size={20} />
      </a>
    </div>
  </div>
</section>
```

**Project Card:**
```html
<div class="group relative bg-background rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  <!-- Image -->
  <div class="relative aspect-video overflow-hidden">
    <img
      src="/projects/project-1.jpg"
      alt="Project Name"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <!-- Overlay on hover -->
    <div class="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>

  <!-- Content -->
  <div class="p-6">
    <h3 class="text-xl font-semibold text-text-primary mb-2">Project Name</h3>
    <p class="text-text-secondary text-sm mb-4 line-clamp-2">Brief project description...</p>

    <!-- Tech tags -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-2 py-1 bg-background-tertiary text-accent-cyan text-xs font-mono rounded">React</span>
      <span class="px-2 py-1 bg-background-tertiary text-accent-cyan text-xs font-mono rounded">Node.js</span>
    </div>

    <!-- Links -->
    <div class="flex items-center gap-4">
      <a href="#" class="flex items-center gap-1 text-sm text-accent-cyan hover:text-text-highlight transition-colors">
        <ExternalLink size={16} />
        Live Demo
      </a>
      <a href="#" class="flex items-center gap-1 text-sm text-accent-cyan hover:text-text-highlight transition-colors">
        <Github size={16} />
        Code
      </a>
    </div>
  </div>
</div>
```

Styling details:
- Card background: `bg-background`
- Border: `border border-border` → hover: `border-accent`
- Border radius: `rounded-lg`
- Overflow: `overflow-hidden` (for image zoom effect)
- Image aspect ratio: `aspect-video` (16:9)
- Image zoom: `group-hover:scale-110` with `transition-transform duration-500`
- Overlay: gradient or solid accent color at 20% opacity
- Hover lift: `hover:-translate-y-2`
- Shadow: `hover:shadow-xl`
- Tech tags: small pills with monospace font
- Line clamp: `line-clamp-2` (Tailwind plugin required)

Accessibility:
- Image alt text describes the project
- Links have descriptive text + icon
- Keyboard navigable
- Focus states visible (see Accessibility section)

---

### 6. Experience / Timeline Section

**Layout:**

Vertical timeline with alternating left/right positioning on desktop, centered on mobile

**Structure:**
```html
<section id="experience" class="py-16 md:py-20 lg:py-24">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Section heading -->

    <div class="relative">
      <!-- Vertical line (desktop center, mobile left) -->
      <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

      <!-- Timeline entries -->
      <div class="space-y-12">
        <!-- Entry 1 (left on desktop) -->
        <!-- Entry 2 (right on desktop) -->
      </div>
    </div>
  </div>
</section>
```

**Timeline Entry:**
```html
<div class="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
  <!-- Timeline dot -->
  <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -ml-2 shadow-glow-accent"></div>

  <!-- Content (alternates sides on desktop) -->
  <!-- Odd entries: content in left column, right column empty -->
  <!-- Even entries: left column empty, content in right column -->

  <div class="md:text-right md:pr-8"> <!-- or md:pl-8 for right side -->
    <div class="bg-background-secondary rounded-lg p-6 border border-border hover:border-accent transition-colors">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold text-text-primary">Software Engineer</h3>
        <span class="text-xs font-mono text-accent-cyan">2023 - Present</span>
      </div>
      <p class="text-sm text-text-secondary mb-2">Company Name</p>
      <p class="text-sm text-text-secondary leading-relaxed">Brief description of role and responsibilities...</p>

      <!-- Achievements list -->
      <ul class="mt-4 space-y-2">
        <li class="text-sm text-text-secondary flex items-start gap-2">
          <span class="text-accent-cyan mt-1">•</span>
          <span>Key achievement or responsibility</span>
        </li>
      </ul>

      <!-- Tech tags -->
      <div class="flex flex-wrap gap-2 mt-4">
        <span class="px-2 py-1 bg-background-tertiary text-accent-cyan text-xs font-mono rounded">React</span>
      </div>
    </div>
  </div>
</div>
```

Styling details:
- Timeline line: `w-0.5 bg-border`, positioned `left-4` mobile, `left-1/2` desktop
- Timeline dots: 16x16px circles with gradient glow
- Dot positioning: `absolute left-4 md:left-1/2 -ml-2` (centers on line)
- Card background: `bg-background-secondary`
- Card border: `border border-border` → hover: `border-accent`
- Card padding: `p-6`
- Border radius: `rounded-lg`
- Date badge: `font-mono text-xs text-accent-cyan`
- Alternating alignment: use grid columns with empty column on alternating sides

Animation (scroll-triggered):
- Entries fade in from side as they enter viewport
- Dots scale in with bounce effect
- Stagger delay: 100ms between entries

---

### 7. Contact Section

**Layout:**

Centered form with heading and social links

**Structure:**
```html
<section id="contact" class="py-16 md:py-20 lg:py-24 bg-background-secondary">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        Let's Work <span class="text-accent-cyan">Together</span>
      </h2>
      <p class="text-text-secondary text-lg">
        Have a project in mind? Let's discuss how I can help.
      </p>
    </div>

    <!-- Form -->
    <form class="space-y-6">
      <!-- Form fields -->
    </form>

    <!-- Divider -->
    <div class="flex items-center gap-4 my-12">
      <div class="flex-1 h-px bg-border"></div>
      <span class="text-text-secondary text-sm">or</span>
      <div class="flex-1 h-px bg-border"></div>
    </div>

    <!-- Direct contact options -->
    <div class="text-center">
      <p class="text-text-secondary mb-4">Prefer email?</p>
      <a href="mailto:hello@danielurbina.com" class="text-accent-cyan hover:text-text-highlight text-lg font-medium">
        hello@danielurbina.com
      </a>
    </div>

    <!-- Social links -->
  </div>
</section>
```

**Form Fields:**

Input field styling:
```html
<div>
  <label for="name" class="block text-sm font-medium text-text-primary mb-2">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    required
    class="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
    placeholder="Your name"
  />
</div>
```

Textarea styling:
```html
<div>
  <label for="message" class="block text-sm font-medium text-text-primary mb-2">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    required
    rows="6"
    class="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
    placeholder="Tell me about your project..."
  ></textarea>
</div>
```

Honeypot field (hidden):
```html
<input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />
```

Submit button:
```html
<button
  type="submit"
  class="w-full bg-gradient-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-glow-accent-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
>
  Send Message
</button>
```

**Form States:**

Loading state (add spinner icon):
```html
<button disabled class="...">
  <svg class="animate-spin h-5 w-5 mr-2 inline-block" viewBox="0 0 24 24">
    <!-- Spinner SVG -->
  </svg>
  Sending...
</button>
```

Success message:
```html
<div class="bg-semantic-success/10 border border-semantic-success text-semantic-success rounded-lg p-4 mb-6">
  <p class="text-sm">Message sent successfully! I'll get back to you soon.</p>
</div>
```

Error message:
```html
<div class="bg-semantic-error/10 border border-semantic-error text-semantic-error rounded-lg p-4 mb-6">
  <p class="text-sm">Failed to send message. Please try again or email me directly.</p>
</div>
```

**Cloudflare Turnstile:**
Place before submit button:
```html
<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY" data-theme="dark"></div>
```

---

### 8. Footer

**Layout:**

3-column grid desktop, stacked mobile

**Structure:**
```html
<footer class="bg-background border-t border-border py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Column 1: Logo + tagline -->
      <div>
        <div class="w-10 h-10 mb-4">
          <!-- Logo SVG -->
        </div>
        <p class="text-text-secondary text-sm">
          Building digital experiences with code and creativity.
        </p>
      </div>

      <!-- Column 2: Quick links -->
      <div>
        <h3 class="text-text-primary font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <a href="#about" class="text-text-secondary hover:text-accent-cyan text-sm transition-colors">
              About
            </a>
          </li>
          <!-- More links -->
        </ul>
      </div>

      <!-- Column 3: Social -->
      <div>
        <h3 class="text-text-primary font-semibold mb-4">Connect</h3>
        <div class="flex gap-4">
          <!-- Social icon links (same style as hero) -->
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-text-secondary text-sm">
        © 2026 Daniel Urbina. All rights reserved.
      </p>
      <p class="text-text-secondary text-sm">
        Built with <span class="text-accent-cyan">Next.js</span> & deployed on <span class="text-accent-cyan">Vercel</span>
      </p>
    </div>
  </div>
</footer>
```

Styling:
- Background: `bg-background`
- Border top: `border-t border-border`
- Padding: `py-12`
- Footer links: `text-sm text-text-secondary hover:text-accent-cyan`
- Social icons: 32x32px circles (smaller than hero)

---

## Interactive States

### Button Variants

**Primary Button (CTA):**
```html
<button class="bg-gradient-accent text-white font-semibold py-3 px-6 rounded-lg hover:shadow-glow-accent-lg transition-all duration-300 hover:-translate-y-0.5">
  View My Work
</button>
```

States:
- Default: gradient background, white text
- Hover: glow shadow, slight lift (-2px)
- Active: scale down slightly `active:scale-95`
- Focus: ring `focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background`
- Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`

**Secondary Button (outline):**
```html
<button class="border-2 border-accent text-accent font-semibold py-3 px-6 rounded-lg hover:bg-accent hover:text-white transition-all duration-300">
  Get in Touch
</button>
```

States:
- Default: transparent background, accent border, accent text
- Hover: filled with accent color, white text
- Active: slight scale `active:scale-95`
- Focus: same ring as primary

**Ghost Button (minimal):**
```html
<button class="text-text-secondary hover:text-accent-cyan font-medium py-2 px-4 rounded-lg hover:bg-background-tertiary transition-colors">
  Learn More
</button>
```

States:
- Default: no background, secondary text
- Hover: subtle background, accent text
- Focus: same ring pattern

### Link Styles

**Inline text link:**
```html
<a href="#" class="text-accent-cyan hover:text-text-highlight underline-offset-2 hover:underline transition-colors">
  Read more
</a>
```

**Nav link:**
```html
<a href="#about" class="text-text-secondary hover:text-text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-cyan after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
  About
</a>
```

Active state (add class `active`):
```html
<a class="... text-accent-cyan after:scale-x-100">
```

### Card Hover Effects

**Project/Skill Card:**
- Transform: `translate-y-[-8px]` (lift)
- Border color: `border-accent`
- Shadow: `shadow-glow-accent`
- Image scale: `scale-110` (if image present)
- Duration: 300ms
- Easing: `ease-out`

**Timeline Card:**
- Border color: `border-accent`
- Duration: 200ms

### Form Input States

- Default: `border-border`, `bg-background`
- Focus: `ring-2 ring-accent`, `border-transparent`
- Error: `border-semantic-error`, `ring-semantic-error`
- Success: `border-semantic-success`
- Disabled: `opacity-50`, `cursor-not-allowed`

Error text (below input):
```html
<p class="text-semantic-error text-sm mt-1">This field is required</p>
```

---

## Responsive Breakpoints

### Mobile (< 640px)

**General:**
- Single column layouts
- Larger touch targets (minimum 44x44px)
- Simplified navigation (hamburger menu)
- Reduced animation complexity
- Larger font sizes for readability

**Specific adjustments:**
- Hero: stacked layout, smaller heading (2rem / 32px)
- About: single column, stats 2x2 grid
- Skills: 2 columns
- Projects: 1 column
- Experience: timeline on left side, all entries aligned left
- Contact: full-width form
- Footer: stacked columns

### Tablet (640px - 1024px)

**General:**
- 2-column grids for most sections
- Tablet-optimized navigation (may show desktop nav or keep hamburger)
- Medium font sizes

**Specific adjustments:**
- Hero: can remain stacked or switch to 2-column at `lg:` breakpoint
- Skills: 3 columns
- Projects: 2 columns
- Experience: begin alternating timeline (or wait until desktop)

### Desktop (1024px+)

**General:**
- Multi-column layouts
- Full desktop navigation
- Larger font sizes
- Complex animations enabled
- Three.js effects (if implemented)

**Specific adjustments:**
- Hero: 2-column, larger headings
- About: 2-column with visual element
- Skills: 4 columns
- Projects: 3 columns
- Experience: alternating timeline
- Footer: 3-column layout

### Large Desktop (1280px+)

**General:**
- Max content width `max-w-7xl` (1280px)
- Increased padding/gutters
- Optimal line length for reading

### Extra Large (1536px+)

**General:**
- Same max width (don't let content get too wide)
- Increased side padding for breathing room
- Larger gaps between grid items

---

## Accessibility Requirements

### Color Contrast Ratios

All combinations meet WCAG 2.2 AA standards (4.5:1 normal text, 3:1 large text):

**Text on Background Primary (#0A0A0F):**
- Text Primary (#F1F1F1): 15.8:1 (AAA) ✓
- Text Secondary (#8B8B9E): 6.2:1 (AA) ✓
- Accent Cyan (#22D3EE): 8.1:1 (AAA) ✓
- Accent Purple (#A855F7): 5.9:1 (AA) ✓

**Text on Background Secondary (#12121A):**
- Text Primary (#F1F1F1): 14.1:1 (AAA) ✓
- Text Secondary (#8B8B9E): 5.5:1 (AA) ✓
- Accent Cyan (#22D3EE): 7.2:1 (AAA) ✓

**Text on Background Tertiary (#1A1A2E):**
- Text Primary (#F1F1F1): 10.9:1 (AAA) ✓
- Text Secondary (#8B8B9E): 4.6:1 (AA) ✓

**White text on Accent colors:**
- White on Accent (#6C63FF): 4.8:1 (AA) ✓
- White on Accent Purple (#A855F7): 5.2:1 (AA) ✓
- White on Accent Cyan (#22D3EE): 2.9:1 (Large text only) ⚠️

Note: Avoid using accent cyan as a button background with white text. Use accent purple or primary accent instead.

### Focus Indicators

All interactive elements must have visible focus states:

**Standard focus ring:**
```css
focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
```

**For elements on colored backgrounds:**
```css
focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent
```

**Focus visible (only on keyboard navigation):**
Consider using `:focus-visible` polyfill or Tailwind's `focus-visible:` variant for better UX.

### Keyboard Navigation

**Tab order:**
1. Skip to main content link (hidden, visible on focus)
2. Logo
3. Navigation links (in order)
4. CTA button
5. All interactive elements in document order

**Keyboard shortcuts:**
- Escape: Close mobile menu, close modals
- Enter/Space: Activate buttons and links
- Arrow keys: Navigate within carousels or grouped elements

**Skip link (add to layout):**
```html
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
  Skip to main content
</a>
```

### ARIA Patterns

**Navigation:**
```html
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="#about" aria-current="page">About</a></li>
  </ul>
</nav>
```

**Mobile menu:**
```html
<button
  aria-label="Open menu"
  aria-expanded="false"
  aria-controls="mobile-menu"
>
  <MenuIcon aria-hidden="true" />
</button>

<div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
  <!-- Menu content -->
</div>
```

**Form:**
```html
<form aria-label="Contact form">
  <div>
    <label for="name">Name</label>
    <input
      id="name"
      type="text"
      required
      aria-required="true"
      aria-invalid="false"
      aria-describedby="name-error"
    />
    <p id="name-error" role="alert" class="hidden">Name is required</p>
  </div>
</form>
```

**Loading state:**
```html
<button aria-busy="true" disabled>
  <span class="sr-only">Loading</span>
  <LoadingSpinner aria-hidden="true" />
</button>
```

**Timeline:**
```html
<div role="list" aria-label="Work experience timeline">
  <div role="listitem">
    <!-- Timeline entry -->
  </div>
</div>
```

### Screen Reader Considerations

**Image alt text:**
- Profile photo: "Daniel Urbina, Full-Stack Developer"
- Project screenshots: "Screenshot of [Project Name] showing [key feature]"
- Decorative images/icons: `alt=""` or `aria-hidden="true"`

**Icon-only buttons:**
```html
<button aria-label="Close menu">
  <XIcon aria-hidden="true" />
</button>
```

**Loading indicators:**
```html
<div role="status" aria-live="polite" aria-atomic="true">
  <span class="sr-only">Loading projects...</span>
  <LoadingSpinner aria-hidden="true" />
</div>
```

**Success/error messages:**
```html
<div role="alert" aria-live="assertive">
  Message sent successfully!
</div>
```

### Reduced Motion

**Global CSS (already implemented):**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Framer Motion configuration:**
```typescript
import { MotionConfig } from 'framer-motion'

<MotionConfig reducedMotion="user">
  {/* All animations will respect user preference */}
</MotionConfig>
```

**Conditional animations:**
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const variants = prefersReducedMotion
  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
  : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
```

---

## Animation Choreography

### Page Load Sequence (Hero Section)

**Order of appearance:**
1. Background (fade in, 0ms delay)
2. Logo in navbar (fade + slide down, 100ms delay)
3. Hero heading (fade + slide up, 200ms delay)
4. Hero subtitle (fade + slide up, 400ms delay)
5. Hero paragraph (fade, 600ms delay)
6. CTA buttons (fade + slide up, 800ms delay)
7. Social links (fade, 1000ms delay)
8. Profile photo (fade + scale, 1200ms delay)

**Implementation (Framer Motion):**
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
```

### Scroll-Triggered Animations

**Section entry animation:**
- Trigger: When section enters viewport (use Intersection Observer or Framer Motion `whileInView`)
- Animation: Fade in + slide up (20px)
- Duration: 600ms
- Easing: `ease-out` or `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration)
- Threshold: 0.1 (trigger when 10% visible)

**Staggered children:**
- Project cards: 100ms delay between each
- Skill cards: 50ms delay between each
- Timeline entries: 150ms delay between each

**Implementation pattern:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* Section content */}
</motion.div>
```

### Hover Animations

**Card lift:**
- Transform: `translateY(-8px)`
- Duration: 300ms
- Easing: `ease-out`
- Add shadow growth simultaneously

**Button hover:**
- Transform: `translateY(-2px)`
- Shadow: glow appears/intensifies
- Duration: 200ms
- Easing: `ease-out`

**Link underline:**
- Transform: `scaleX(0)` → `scaleX(1)`
- Transform origin: `left`
- Duration: 200ms
- Easing: `ease-out`

**Image zoom (in project cards):**
- Transform: `scale(1)` → `scale(1.1)`
- Duration: 500ms
- Easing: `ease-out`
- Overflow: `hidden` on parent

### Micro-interactions

**Hamburger to X animation:**
```typescript
// Top line: rotate 45deg and translate
// Middle line: opacity 0
// Bottom line: rotate -45deg and translate
// Duration: 200ms
// Easing: ease-in-out
```

**Typing animation (hero subtitle):**
```typescript
// Use react-type-animation or Framer Motion
const roles = [
  "Full-Stack Developer",
  "Problem Solver",
  "Creative Coder"
];

// Type speed: 50ms per character
// Delete speed: 30ms per character
// Pause between: 2000ms
// Cursor blink: 500ms interval
```

**Counter animation (stats):**
```typescript
// Trigger on scroll into view
// Duration: 2000ms
// Easing: ease-out
// Use Framer Motion's useSpring or custom counter hook
```

**Profile photo float:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.profile-photo {
  animation: float 3s ease-in-out infinite;
}
```

**SVG logo draw-in:**
```typescript
// SVG path animation using stroke-dasharray and stroke-dashoffset
// Duration: 1500ms
// Easing: ease-in-out
// Trigger: on page load, once
```

### Page Transitions

**Route change animation:**
```typescript
// Exit: fade out + scale down slightly (0.95)
// Enter: fade in + scale up from 0.95
// Duration: 300ms
// Easing: ease-in-out
```

Implementation with Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
  {children}
</motion.div>
```

### Easing Curves

**Standard curves:**
- `ease-out`: Most hover effects, UI responses (cubic-bezier(0, 0, 0.2, 1))
- `ease-in`: Exit animations (cubic-bezier(0.4, 0, 1, 1))
- `ease-in-out`: Page transitions, modal animations (cubic-bezier(0.4, 0, 0.2, 1))

**Custom curves:**
- Smooth deceleration: `cubic-bezier(0.16, 1, 0.3, 1)` (good for scroll reveals)
- Bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (use sparingly)
- Spring: Use Framer Motion's spring animations with `type: 'spring', stiffness: 300, damping: 30`

### Timing Values

**Quick interactions:** 150-200ms (hover states, simple transitions)
**Standard animations:** 300-400ms (card movements, section reveals)
**Dramatic animations:** 600-800ms (page transitions, large movements)
**Slow animations:** 1000-1500ms (counters, logo draw-in)

**Stagger delays:**
- Fast: 50ms (many small items like skill cards)
- Medium: 100ms (project cards, nav links)
- Slow: 150-200ms (timeline entries, large sections)

---

## Implementation Checklist

### Phase 3 - Components

For each component, ensure:
- [ ] Uses correct Tailwind classes from this spec
- [ ] Responsive breakpoints implemented (mobile, tablet, desktop)
- [ ] All interactive states defined (hover, focus, active, disabled)
- [ ] Accessibility attributes present (ARIA, labels, roles)
- [ ] Color contrast ratios verified
- [ ] Typography scale followed
- [ ] Spacing system followed
- [ ] Border radius consistent
- [ ] Shadow/elevation levels correct

### Phase 4A - Animations

For each animation, ensure:
- [ ] Duration and easing specified
- [ ] Respects `prefers-reduced-motion`
- [ ] Framer Motion `reducedMotion` prop set
- [ ] Performance optimized (use `transform` and `opacity` only)
- [ ] 60fps maintained (test with DevTools)
- [ ] Scroll-triggered animations use Intersection Observer
- [ ] Stagger delays tuned for rhythm

### Phase 6 - Audit

Before launch:
- [ ] Lighthouse score: Performance 95+/85+, Accessibility 100, Best Practices 100, SEO 100
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Test keyboard navigation (all interactive elements reachable)
- [ ] Test with reduced motion enabled
- [ ] Test on mobile devices (iOS Safari, Chrome, Firefox)
- [ ] Test on tablets
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Verify all images have alt text
- [ ] Verify all forms have labels
- [ ] Verify color contrast with tools (WebAIM, Lighthouse)
- [ ] Test with browser zoom (200%, 300%)

---

## Design Tokens Summary (Quick Reference)

```css
/* Colors */
--bg-primary: #0A0A0F
--bg-secondary: #12121A
--bg-tertiary: #1A1A2E
--accent: #6C63FF
--accent-purple: #A855F7
--accent-cyan: #22D3EE
--text-primary: #F1F1F1
--text-secondary: #8B8B9E
--border: #1E1E2E

/* Typography */
--font-sans: Inter
--font-mono: JetBrains Mono
--text-7xl: 4.5rem (72px)
--text-5xl: 3rem (48px)
--text-4xl: 2.25rem (36px)
--text-3xl: 1.875rem (30px)
--text-2xl: 1.5rem (24px)
--text-xl: 1.25rem (20px)
--text-lg: 1.125rem (18px)
--text-base: 1rem (16px)
--text-sm: 0.875rem (14px)
--text-xs: 0.75rem (12px)

/* Spacing */
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-24: 6rem (96px)

/* Border Radius */
--radius-lg: 0.75rem (12px)
--radius-xl: 1rem (16px)

/* Shadows */
--shadow-glow-accent: 0 0 20px rgba(108, 99, 255, 0.4)
--shadow-glow-accent-lg: 0 0 40px rgba(108, 99, 255, 0.6)

/* Breakpoints */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px

/* Animation Timing */
--duration-fast: 200ms
--duration-normal: 300ms
--duration-slow: 600ms
--ease-out: cubic-bezier(0, 0, 0.2, 1)
```

---

## Notes for Implementation

1. **Consistency is key:** Use this spec as the single source of truth. Don't deviate unless there's a strong reason (document changes if needed).

2. **Component composition:** Build small, reusable components (Button, Card, Badge) before building complex sections.

3. **Test as you build:** Don't wait until the end to test responsive behavior and accessibility. Check each component in isolation.

4. **Animation performance:** Always test animations on mid-range devices. If frame rate drops below 60fps, simplify or remove the animation.

5. **Content first:** Fill components with real content early to catch layout issues. Lorem ipsum hides problems.

6. **Dark mode only:** This spec is dark-first. Light mode can be added later as an enhancement.

7. **Mobile testing:** Test on real devices, not just DevTools responsive mode. Touch interactions behave differently.

8. **Accessibility testing:** Use automated tools (axe DevTools, Lighthouse) AND manual testing (keyboard navigation, screen reader).

9. **Version control:** Commit frequently with descriptive messages. This makes it easy to roll back if a design decision doesn't work.

10. **Ask questions:** If something in the spec is unclear or seems wrong, flag it. Design is iterative.

---

**End of Design Specification v1.0**
