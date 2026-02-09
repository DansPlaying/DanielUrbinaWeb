# Daniel Urbina - Personal Portfolio Website Plan

## Design Vision

A **dark-themed, modern developer portfolio** that combines:

- **Reference 1** ([Saad/Musemind Concept](https://dribbble.com/shots/16383090-Personal-Portfolio-Website-concept-design)): Bold hero section, gradient accents (purple/blue), large expressive typography, smooth scroll-based layout, project cards with hover interactions, and a clean editorial feel.
- **Reference 2** ([Programmer Portfolio](https://dribbble.com/shots/22021391-Portfolio-website-design-for-a-programmer)): Code/terminal-inspired aesthetic elements, tech-stack-focused presentation, monospace font accents, IDE-like UI details, and a developer-identity-driven layout.

**Result**: A dark portfolio with gradient accents, fluid animations, developer-themed visual elements (code snippets, terminal motifs), and bold typography that feels both creative and technical.

---

## Tech Stack

| Layer        | Technology                        | Why                                              |
| ------------ | --------------------------------- | ------------------------------------------------ |
| Framework    | **Next.js 14 (App Router)**       | SSR/SSG, performance, SEO, file-based routing    |
| Language     | **TypeScript**                    | Type safety across the project                   |
| Styling      | **Tailwind CSS**                  | Rapid utility-first styling, dark mode native    |
| Animations   | **Framer Motion**                 | Scroll-triggered animations, page transitions    |
| 3D / Effects | **Three.js (React Three Fiber)**  | Optional hero 3D element / particle background (conditional: desktop only, time-boxed) |
| Spam Protection | **Cloudflare Turnstile**       | Free, invisible captcha for contact form         |
| Email        | **Resend**                        | Contact form delivery (1,000 emails/month free)  |
| Error Tracking | **Sentry (free tier)**          | Production error monitoring                      |
| Icons        | **Lucide React**                  | Lightweight, consistent icon set                 |
| Deployment   | **Vercel**                        | Zero-config Next.js hosting, edge CDN, analytics |
| Font         | **Inter + JetBrains Mono**        | Clean sans-serif body + monospace code accents   |

---

## Color Palette

```
Background (primary):   #0A0A0F   (near-black)
Background (secondary): #12121A   (dark card surfaces)
Background (tertiary):  #1A1A2E   (elevated surfaces / hover)

Accent gradient:        #6C63FF -> #A855F7  (purple/violet gradient)
Accent secondary:       #22D3EE   (cyan - code highlights, links)

Text (primary):         #F1F1F1   (off-white)
Text (secondary):       #8B8B9E   (muted gray)
Text (highlight):       #A855F7   (accent match)

Border:                 #1E1E2E   (subtle dividers)
```

---

## Logo Concept

A custom **"DU" monogram** (Daniel Urbina) that merges:

- Geometric/angular letterforms (tech feel)
- Gradient fill using the accent colors (#6C63FF -> #A855F7)
- Works at all sizes (favicon, nav, footer)
- Optionally animated on load (SVG path draw-in)

Deliverables:
- SVG logo (primary)
- Favicon set (16x16, 32x32, 180x180 apple-touch)
- Open Graph image (1200x630) with logo + name

---

## Site Structure & Sections

### 1. Navigation (sticky)
- Logo (DU monogram) on the left
- Menu links: About / Skills / Projects / Experience / Contact
- CTA button: "Download CV"
- Mobile: hamburger menu with slide-in drawer
  - Hamburger icon animates to X on open
  - Full-screen overlay drawer (slides in from right)
  - Backdrop with 50% opacity black overlay
  - Body scroll lock when open
  - Close on: backdrop click, ESC key, nav link click
  - Smooth spring animation (Framer Motion)
- Glassmorphism background on scroll (blur + transparency)

### 2. Hero Section
- Large heading: "Hi, I'm **Daniel Urbina**"
- Animated typing subtitle: roles/specialties rotating (e.g., "Full-Stack Developer", "Problem Solver", "Creative Coder")
- Short intro paragraph (2-3 lines)
- CTA buttons: "View My Work" + "Get in Touch"
- Background: CSS/SVG gradient animation by default; Three.js particle field on desktop only (conditionally loaded)
- Profile photo or stylized avatar with gradient border ring
- Social links row (GitHub, LinkedIn, etc.)

### 3. About Me
- Two-column layout: text left, image/graphic right
- Brief personal story, passions, and what drives you
- Key stats/counters (years of experience, projects completed, technologies used)
- Terminal-style decorative element:
  ```
  > daniel.about()
  ```

### 4. Skills & Technologies
- Grid of skill cards with icons
- Organized by category: Frontend / Backend / Tools & DevOps / Other
- Each card: icon + name + proficiency bar or tag
- Hover effect: card lifts, glow border in accent color
- Optional: orbiting/floating tech logos animation

### 5. Projects / Work
- Featured project cards (3-4 highlighted)
- Each card includes:
  - Screenshot/mockup preview
  - Project name + brief description
  - Tech tags (React, Node.js, etc.)
  - Links: Live Demo | GitHub Repo
- Hover: subtle parallax tilt on card + overlay
- Filter buttons by category (optional)
- "View All Projects" link to a dedicated /projects page

### 6. Experience / Timeline
- Vertical timeline layout
- Each entry: role, company, date range, key achievements
- Alternating left/right positioning on desktop
- Scroll-triggered fade-in animations
- Dot connectors with gradient accent

### 7. Testimonials (optional)
- Carousel or grid of quotes from colleagues/clients
- Avatar, name, role, quote text
- Subtle auto-rotation

### 8. Contact Section
- Heading: "Let's Work Together"
- Contact form: Name, Email, Subject, Message
- Direct email link + social links
- Background: gradient mesh or subtle pattern
- Form validation + success/error feedback (server-side validation with Zod)
- Backend: Next.js API route with Resend for email delivery
- Spam protection: Cloudflare Turnstile (invisible captcha)
- Rate limiting: 3 submissions per IP per hour (Vercel Edge Config or Upstash Redis)
- Honeypot field: hidden `website` field (reject if filled by bots)

### 9. Footer
- Logo + tagline
- Quick nav links
- Social icons
- "Built with Next.js & deployed on Vercel" credit
- Copyright line

---

## Pages

| Route          | Description                                 |
| -------------- | ------------------------------------------- |
| `/`            | Home (all sections above in single scroll)  |
| `/projects`    | Full project gallery with filtering         |
| `/projects/[slug]` | Individual project case study           |
| `/blog` (future) | Articles & technical writing (optional)  |

---

## Animations & Interactions

| Element              | Animation                                         |
| -------------------- | ------------------------------------------------- |
| Page load            | Staggered fade-in of hero elements                |
| Scroll               | Sections fade-up / slide-in on viewport entry     |
| Navigation           | Glassmorphism appear on scroll, active link track  |
| Project cards        | 3D tilt on hover (perspective transform)          |
| Skill cards          | Lift + glow border on hover                       |
| Typing effect        | Subtitle text cycles through roles                |
| Logo                 | SVG draw-in on first load                         |
| Page transitions     | Framer Motion layout animations between routes    |
| Cursor (optional)    | Custom cursor with trailing glow effect           |
| Smooth scroll        | Native CSS `scroll-behavior: smooth`              |
| Reduced motion       | Respect `prefers-reduced-motion`: disable all animations |

All animations must respect `prefers-reduced-motion: reduce`. Add a global CSS rule to disable transitions/animations and configure Framer Motion's `reducedMotion` setting. This is required for WCAG 2.1 compliance.

---

## Performance & SEO

- **Lighthouse targets**:
  - Performance: 95+ desktop / 85+ mobile
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- Next.js `<Image>` component for all images (WebP, lazy loading, responsive)
- Font self-hosting via `next/font` (eliminates external DNS lookups)
- Dynamic imports for heavy components (Three.js — desktop only)
- Metadata API for SEO (title, description, Open Graph, Twitter cards)
- Structured data (JSON-LD for Person schema)
- Sitemap generation via `next-sitemap` (set up in Phase 1)
- Analytics: Vercel Analytics (set up in Phase 1)
- Error tracking: Sentry free tier for production monitoring
- Browser support: Evergreen browsers — Chrome, Edge, Firefox, Safari (last 2 versions)

### Image Specifications
- Format: WebP with JPEG fallback (Next.js automatic)
- Project screenshots: 1200x800px max, compressed to <150KB each
- Profile photo: 400x400px, <50KB
- OG image: 1200x630px, <200KB
- Favicon: SVG (scalable) + 32x32 PNG fallback
- Compress all images before committing

### Error Handling Strategy
- React Error Boundaries wrapping each major section (fallback to static content)
- Loading skeletons for any async/lazy-loaded content
- Progressive enhancement: core HTML/CSS content works without JavaScript
- Sentry error tracking for production monitoring
- Graceful fallback if Three.js fails to initialize (show CSS background instead)

---

## Data Models (TypeScript Interfaces)

Define these in Phase 1 before building components to lock down the data shape early.

```typescript
interface Project {
  id: string                    // Slug for URL
  title: string
  description: string           // Short (1-2 sentences)
  longDescription?: string      // For detail page
  image: string                 // Path to screenshot
  tags: string[]                // Tech stack tags
  featured: boolean             // Show on homepage
  category: 'web' | 'mobile' | 'tool' | 'other'
  links: {
    demo?: string               // Live URL
    github?: string             // Repo URL
  }
  date: string                  // "2025-01" format
}

interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'other'
  icon: string                  // Lucide icon name or custom SVG path
}

interface Experience {
  id: string
  role: string
  company: string
  location?: string
  startDate: string             // "2023-01"
  endDate: string | 'present'
  description: string
  achievements: string[]        // Bullet points
  technologies: string[]
}

interface Social {
  name: string                  // "GitHub", "LinkedIn"
  url: string
  icon: string                  // Lucide icon name
  username?: string
}
```

---

## Implementation Phases

### Phase 1 - Foundation
- [x] Create project plan (this document)
- [x] Initialize Next.js 14 project with TypeScript + Tailwind
- [x] Set up project structure (folders, components, lib)
- [x] Configure Tailwind with custom theme (colors, fonts, spacing)
- [x] Install dependencies (Framer Motion, Lucide, Resend, Cloudflare Turnstile, etc.)
- [x] Create global layout (metadata, fonts via `next/font`)
- [x] Define TypeScript interfaces for data models (Project, Skill, Experience, Social)
- [ ] Create Vercel project and link to git repo
- [ ] Set up environment variables (RESEND_API_KEY, NEXT_PUBLIC_SITE_URL, TURNSTILE_SECRET_KEY)
- [x] Set up `next-sitemap` configuration
- [ ] Add Vercel Analytics component to layout
- [x] Add `prefers-reduced-motion` global CSS rule
- [ ] Set up Sentry error tracking

### Phase 2A - Placeholder Branding (1 day, unblocks Phase 3)
- [x] Create placeholder SVG logo ("DU" text with gradient — simple `<text>` element)
- [x] Set up basic favicon from placeholder
- [x] Define all brand tokens (colors, typography scale, spacing)

### Phase 2B - Final Branding (runs in parallel with Phase 3)
- [x] Design the final "DU" monogram logo in SVG
- [x] Generate favicon set from final logo
- [x] Create OG image template (1200x630)
- [ ] Store CV as `/public/Daniel-Urbina-Resume.pdf`

### Phase 3 - Core Sections + Content
Build components with real content (not dummy data) to catch layout issues early.

- [ ] Write all copy (about text, project descriptions, experience entries)
- [x] Build Navigation component (desktop + mobile with drawer behavior)
- [x] Build Hero section with typing animation
- [x] Build About section with stats
- [x] Build Skills grid
- [x] Build Projects showcase cards
- [x] Build Experience timeline
- [x] Build Contact section with form + Turnstile + honeypot + rate limiting
- [x] Build Footer
- [x] Configure contact form backend (Resend API route)
- [x] Add React Error Boundaries around each section
- [x] Swap placeholder logo for final logo (when Phase 2B completes)

### Phase 4A - Essential Animations
- [ ] Add scroll-triggered fade-in animations (Framer Motion + Intersection Observer)
- [x] Add hover interactions on cards (lift, glow) — built into Skill/Project/Experience cards
- [ ] Add page transition animations
- [ ] SVG logo draw-in animation
- [x] Smooth scroll — enabled via `scroll-behavior: smooth` in globals.css
- [ ] Active nav link tracking (Intersection Observer)
- [ ] Verify all animations respect `prefers-reduced-motion`

### Phase 4B - Three.js Hero (optional, time-boxed to 2 days)
- [ ] Add hero background effect (particles / 3D geometry) — desktop only
- [ ] CSS/SVG fallback for mobile and unsupported browsers
- [ ] Connection-aware loading (skip on slow connections)
- [ ] If not complete in 2 days, ship with CSS-only background

### Phase 4C - Custom Cursor (optional, time-boxed to 1 day)
- [ ] Custom cursor with trailing glow effect — desktop only
- [ ] If not complete in 1 day, skip for V1

### Phase 5 - Visual Assets
- [ ] Gather/create project screenshots & mockups (follow image specs above)
- [ ] Finalize profile photo
- [ ] Compress all images before committing

### Phase 6 - Optimization & Launch
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Lighthouse audit & fixes (targets: 95+/85+ Performance, 100 A11y/BP/SEO)
- [ ] Verify SEO metadata & structured data
- [ ] Verify sitemap generation
- [ ] Custom domain configuration + DNS
- [ ] Final QA across browsers (Chrome, Edge, Firefox, Safari)
- [ ] Launch

---

## Folder Structure (Proposed)

```
DanielUrbinaWeb/
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── projects/
│   │   └── profile/
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   ├── page.tsx            # Home page (all sections)
│   │   ├── projects/
│   │   │   ├── page.tsx        # Projects gallery
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Project detail
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Contact form handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Timeline.tsx
│   │       └── TypeWriter.tsx
│   ├── data/
│   │   ├── projects.ts         # Project entries
│   │   ├── skills.ts           # Skills list
│   │   ├── experience.ts       # Work experience
│   │   └── socials.ts          # Social links
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── types.ts            # TypeScript interfaces (Project, Skill, etc.)
│   └── styles/
│       └── globals.css         # Tailwind base + custom styles
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── next-sitemap.config.js      # Sitemap generation config
├── sentry.client.config.ts     # Sentry error tracking
├── package.json
└── PLAN.md
```

---

## Key Design Principles

1. **Dark-first**: Everything designed for dark mode; light mode is optional/future
2. **Motion with purpose**: Animations enhance UX, never distract
3. **Code identity**: Terminal and code motifs reinforce the developer brand
4. **Performance**: Fast load, smooth 60fps animations, optimized assets
5. **Accessibility**: Proper contrast ratios, keyboard navigation, ARIA labels, `prefers-reduced-motion` support
6. **Content-driven**: Design serves the content, not the other way around
7. **Progressive enhancement**: Core content works without JavaScript; JS enhances the experience
8. **Ship over polish**: Time-box optional features (Three.js, custom cursor); launch > perfection
