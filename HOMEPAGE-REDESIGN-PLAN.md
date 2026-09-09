# Axeera Homepage Redesign Plan

## Objective

Transform the homepage from a mostly monochrome, text-and-card layout into a polished digital product studio homepage that communicates Axeera’s value within the first screen, uses visual proof throughout the page, and feels intentional on desktop, tablet, and mobile.

The redesign will keep the existing brand foundation—Axeera, digital products, platforms, and cloud engineering—but improve the visual hierarchy, storytelling, interaction quality, and trust signals.

## Current Problems

### Visual problems

- The page relies too heavily on black, white, and gray.
- Large areas of the page feel empty because sections lack imagery or visual anchors.
- The hero dashboard is decorative but does not clearly explain Axeera’s work.
- The page repeats the same visual language: centered headings, white cards, gray borders, and statistics.
- The featured-work experience does not currently provide enough visual case-study proof.
- Client logos and project imagery are not consistently used as visible brand assets.
- There is no strong visual transition between major sections.

### Interaction problems

- Animations can hide content when an animation wrapper fails to complete.
- Parallax and scroll-based movement are either missing or not used meaningfully.
- Hover states are inconsistent across cards and links.
- Some visual elements feel like dashboard UI without a clear user purpose.
- Mobile layouts need explicit rules for stacking, overflow, and motion reduction.

### Content problems

- Several hero metrics feel arbitrary or disconnected from the agency’s core promise.
- Trust indicators, platform metrics, and client results are mixed together without a clear story.
- The page does not consistently connect claims to real projects or outcomes.
- Some navigation and industry links require clearer destinations.

## Design Direction

### Style

Use a refined editorial technology-studio direction:

- Keep a warm off-white or white base instead of pure white everywhere.
- Use near-black typography for contrast.
- Introduce one primary accent color, recommended as electric blue, cobalt, or acid green.
- Use a secondary muted accent only for data visualization and status indicators.
- Use large typography, but improve wrapping and spacing so headings feel deliberate.
- Use soft borders, subtle grain, restrained shadows, and layered imagery instead of many identical cards.

### Visual principles

1. Every major section should have one dominant visual idea.
2. Real project imagery should carry more weight than abstract statistics.
3. Motion should reinforce hierarchy and depth, not hide content.
4. Color should identify meaning: product outcomes, technology, trust, or calls to action.
5. The page should remain understandable with animations disabled.

## Section-by-Section Changes

### 1. Navigation

Current issue:

- Navigation is clean but visually detached from the rest of the page.

Changes:

- Keep the fixed navigation structure.
- Add a subtle translucent background and blur after scrolling.
- Add an active-route indicator for the current page.
- Improve mobile menu spacing and focus states.
- Keep the primary CTA visually dominant.
- Ensure the navigation never creates horizontal overflow.

Acceptance criteria:

- Navigation remains readable over the hero.
- The mobile menu opens without shifting or clipping the page.
- Keyboard focus is visible for every navigation item.

### 2. Hero section

Current issue:

- The hero has too much mock dashboard data and previously suffered from spacing, overflow, and hidden-content problems.

Changes:

- Keep the headline and supporting paragraph as the primary message.
- Replace the generic dashboard with a focused “product impact” visual.
- Show three meaningful proof points only:
  - Faster delivery
  - Better product performance
  - Reliable scale
- Use a layered project screenshot or product interface as the main visual.
- Keep client outcome cards, but make them a clear “results” strip rather than unrelated floating widgets.
- Remove duplicate trust badges from the hero.
- Add a subtle cursor/gradient glow or controlled image movement instead of excessive floating cards.
- Add a scroll cue that does not overlap content.

Recommended hero structure:

```text
Eyebrow / announcement
Large value proposition
Short supporting paragraph
Primary CTA + secondary CTA
Three compact proof points
Large product/project visual
Three client outcome cards
```

Motion:

- Headline words fade in once.
- Product visual moves 8–16px on scroll at most.
- Result cards enter with a small stagger.
- No animation may leave content at opacity 0.
- Respect `prefers-reduced-motion`.

### 3. Trust indicators

Current issue:

- The section is mostly text and statistics.

Changes:

- Render the actual client logo assets.
- Use a horizontal logo rail on desktop and a two-column or scrollable rail on mobile.
- Move the numerical stats into a separate impact band.
- Add a short trust statement such as “Trusted by teams shipping critical digital products.”
- Use grayscale logos by default with a restrained accent hover state.

### 4. Services overview

Current issue:

- Service cards are visually repetitive and can appear blank when animation props are incomplete.

Changes:

- Use six service cards with differentiated icon treatments or accent colors.
- Add a small visual pattern, illustration, or technology cue to each category.
- Use consistent card heights and bottom-aligned “Learn more” links.
- Add a highlighted featured service card with a larger visual treatment.
- Remove unused imports and ensure every card has a working animation or no entrance animation.
- Make cards visible immediately on first render.

Suggested service groupings:

- Product strategy
- Product design
- Web and platform engineering
- Mobile engineering
- Cloud and DevOps
- AI and automation

### 5. Featured work

Current issue:

- Project imagery is not currently doing enough of the storytelling.

Changes:

- Make this one of the strongest visual sections on the page.
- Use real project hero images with consistent aspect ratios.
- Create an editorial layout with one large featured project and two supporting projects.
- Add project category, short outcome, and year without excessive metadata.
- Add image zoom or masked reveal on hover.
- Use a dark or accent-backed project feature card to break the monochrome rhythm.
- Ensure all image assets have correct file extensions and predictable loading behavior.

### 6. About preview

Current issue:

- The section is mostly paragraphs and value cards.

Changes:

- Add a team, workshop, or abstract studio image.
- Use a split composition: editorial copy on one side and a visual collage on the other.
- Keep only three core values on the homepage; move the full list to the About page.
- Add a concise proof line: team size, countries, projects delivered, or years operating.

### 7. Process

Current issue:

- Six process steps create a long, repetitive section.

Changes:

- Show the six phases as a timeline with a clear visual progression.
- Use one active/featured phase at a time on desktop.
- Use a compact accordion or stacked cards on mobile.
- Add a subtle progress line or animated marker.
- Avoid animating the entire section into invisibility.

### 8. Industries

Current issue:

- Industry cards previously rendered as broken inline fragments and their destinations were incomplete.

Changes:

- Keep the grid card layout with block-level links and equal heights.
- Add a light industry-specific accent or image texture.
- Link each industry to a valid filtered work destination or a real industry page.
- Use project counts only when they are backed by actual project data.
- Add clear hover states that do not cover the card content.

### 9. Technologies

Current issue:

- Technology chips feel like a long inventory rather than proof of capability.

Changes:

- Reduce the visible technology list to the most relevant tools.
- Group technologies around outcomes: build, scale, observe, automate.
- Replace no-op technology buttons with non-interactive tags or real detail links.
- Use subtle colored marks instead of many unrelated colors.

### 10. Testimonials

Current issue:

- The testimonial area is text-heavy and visually isolated.

Changes:

- Add real avatar or company/project imagery where available.
- Add a small project outcome beside the quote.
- Keep controls accessible and visible.
- Pause autoplay if introduced; do not rotate content without user control.

### 11. Statistics / impact band

Current issue:

- Statistics are repeated in multiple places and can feel unsubstantiated.

Changes:

- Consolidate the strongest metrics into one dark or accent-colored impact band.
- Use no more than four metrics.
- Add context under every metric.
- Avoid presenting invented operational numbers as client results.
- Use real project outcomes where available.

### 12. Final CTA

Current issue:

- The CTA is structurally correct but visually similar to other sections.

Changes:

- Give the CTA a strong background treatment or project image.
- Use one primary action and one secondary action.
- Keep supporting assurances short.
- Add a visual contact cue such as an arrow path, abstract shape, or small interface image.

## Motion and Parallax Plan

### Safe motion rules

- Content must render visible by default.
- `initial={{ opacity: 0 }}` must always have a matching `animate` or `whileInView` state.
- Shared animation components should default to visible content.
- IntersectionObserver failure must not hide content.
- Avoid `Math.random()` keys and components created during render.
- Do not animate layout-critical dimensions.

### Parallax rules

- Use small distances: 8–24px.
- Apply parallax only to decorative imagery, gradients, or background shapes.
- Never apply parallax to body copy, buttons, or navigation.
- Disable parallax for reduced-motion users and touch-first layouts.
- Use CSS transforms only and avoid causing horizontal overflow.

### Suggested motion map

| Area | Motion | Amount |
| --- | --- | --- |
| Hero headline | Word fade/slide | 300–600ms |
| Hero visual | Scroll parallax | 8–16px |
| Result cards | Staggered entrance | 80–120ms |
| Logos | Soft fade-in | 200–400ms |
| Work imagery | Mask reveal / scale | 300–600ms |
| Process timeline | Progress marker | 300–500ms |
| CTA background | Slow decorative drift | 8–12px |

## Responsive Plan

### Desktop

- Two-column hero with balanced visual weight.
- Featured work uses editorial asymmetry.
- Process uses a central timeline.
- Industry grid uses five columns only when cards remain readable.

### Tablet

- Collapse the hero visual below or beside the copy based on available width.
- Use two-column cards for services and industries.
- Reduce heading size and decorative offsets.

### Mobile

- Stack all hero content in a deliberate order.
- Keep the product visual full width and remove floating elements that can overflow.
- Use one-column service and work cards.
- Convert process to a compact vertical timeline or accordion.
- Keep CTA buttons full-width where necessary.
- Avoid horizontal scrolling at every breakpoint.
- Verify navigation, cards, images, and text at 320px, 375px, and 430px widths.

## Content and Data Cleanup

- Replace arbitrary hero metrics with clear, contextual outcomes.
- Confirm every client result has a source or mark it as illustrative.
- Use actual image assets with correct MIME-compatible extensions.
- Ensure all internal links resolve to existing routes.
- Remove no-op buttons or give them real behavior.
- Remove unused imports and dead data from homepage components.
- Add meaningful `alt` text to informative images and empty alt text to decorative images.

## Implementation Order

1. Stabilize rendering and remove any content-hiding animation failures.
2. Fix global overflow, typography, spacing, and navigation behavior.
3. Redesign the hero visual and content hierarchy.
4. Rebuild trust indicators with real logos.
5. Rework services and featured work visual systems.
6. Add imagery and visual anchors to About, Industries, and CTA sections.
7. Simplify Process, Technologies, Testimonials, and Statistics.
8. Add restrained parallax and section transitions.
9. Verify desktop, tablet, and mobile layouts.
10. Run typecheck, lint, production build, and interaction QA.

## Quality Checklist

### Visual

- [ ] Hero communicates Axeera’s value within five seconds.
- [ ] Every major section has a visual anchor.
- [ ] No section is an uninterrupted wall of white space.
- [ ] Accent color is used consistently and sparingly.
- [ ] Project imagery is visible and correctly cropped.
- [ ] Cards have consistent heights, spacing, and hover behavior.

### Responsive

- [ ] No horizontal overflow at 320px, 375px, 768px, 1024px, and 1440px.
- [ ] Navigation works on mobile and desktop.
- [ ] Hero content does not overlap or clip.
- [ ] Floating elements are removed or repositioned on small screens.
- [ ] Images preserve their aspect ratio.

### Accessibility

- [ ] All interactive elements have visible focus states.
- [ ] All informative images have useful alt text.
- [ ] Motion respects `prefers-reduced-motion`.
- [ ] Buttons and links have descriptive labels.
- [ ] Color is not the only way meaning is communicated.
- [ ] Heading hierarchy remains valid.

### Engineering

- [ ] `npx tsc --noEmit` passes.
- [ ] ESLint has zero errors.
- [ ] `next build --webpack` passes.
- [ ] No hydration mismatch appears in a clean browser session.
- [ ] No image optimizer or MIME-type errors appear in the dev server logs.
- [ ] Every homepage route and CTA destination exists.

## Definition of Done

The redesign is complete when the homepage looks visually intentional without relying on animation, uses real imagery and contextual proof, works cleanly across breakpoints, has no blank animated sections, and passes the quality checklist above.
