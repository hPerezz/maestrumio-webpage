# Maestrum Design System

This document describes the current Maestrum brand system as represented by the approved brand assets in `src/` and the live landing page implementation in [styles.css](/Users/perez/Documents/Code/hand-midi-controller/landing-page/maestrum/styles.css) and [index.html](/Users/perez/Documents/Code/hand-midi-controller/landing-page/maestrum/index.html).

## Brand Character

Maestrum should feel like a music performance tool, not a generic SaaS product.

- Expressive, precise, and slightly futuristic
- Minimal, but not sterile
- Physical and human: hand movement, gesture, rhythm, performance
- Technical, but still warm and artistic

The overall visual language mixes three cues:

- Editorial typography and strong layout structure
- Performance-tech indicators such as tracking labels, counters, and diagrams
- Warm orange energy against restrained neutral backgrounds

## Logo System

Primary logo assets live in `src/logo/`.

- `src/logo/logotipo.svg`: primary wordmark
- `src/logo/simbolo.svg`: symbol mark
- `src/logo/png/`: exported PNG variants

### Logo style

- The symbol is built from rounded vertical modules, echoing MIDI bars, waveform blocks, and tracked finger landmarks.
- The wordmark uses a custom geometric, modular letterform style with rounded interior cuts.
- The mark works best in black on light backgrounds, off-white on orange, or off-white on black.

### Logo usage guidance

- Prefer the full wordmark for navigation, headers, and formal brand moments.
- Use the symbol for avatars, social icons, favicons, and compact UI placements.
- Maintain generous clear space around the logo.
- Do not stretch, rotate, recolor arbitrarily, or add effects that soften the crisp geometric silhouette.

## Color Palette

The approved palette is defined in `src/colors/color-palette-v1.pdf`.

| Role | Hex | RGB | Notes |
| --- | --- | --- | --- |
| Primary orange | `#FF6724` | `255, 103, 36` | Main accent, CTA, active state, signal color |
| Black | `#000000` | `0, 0, 0` | Primary dark surface and strongest text |
| Dark gray | `#5E5E5E` | `94, 94, 94` | Secondary copy, supporting UI text |
| Off-white | `#F4F3EF` | `244, 243, 239` | Primary light background |

### Functional color usage

- Use orange for emphasis, CTAs, interactive highlights, active indicators, and selected words.
- Use black for high-contrast sections, primary headings, and anchor surfaces.
- Use dark gray for body support text, notes, metadata, and less prominent navigation.
- Use off-white as the default canvas instead of pure white.

### Gradients and image treatment

The social assets show a soft orange-to-pale wash treatment. When gradients are used, they should feel atmospheric and restrained, not glossy or neon.

- Start from the primary orange
- Fade toward pale peach or off-white
- Keep contrast soft and premium

### Implementation note

The current landing page CSS uses `#FE6825` for `--orange`. That is visually close, but the approved brand PDF specifies `#FF6724`. `DESIGN.md` should be treated as the source of truth unless the palette itself is revised.

## Typography

Typography assets live in `src/fonts/`.

### Primary brand typeface

- `Neue Haas Grotesk Display Pro`
- Web family name in the site: `NeueHaasGrotesk`
- Primary use: headlines, body copy, buttons, navigation, UI text

Weights currently loaded in the landing page:

- `300` light
- `400` regular
- `500` medium
- `700` bold
- `900` black
- italic variants for emphasis

This is the main voice of the brand: clean, modern, serious, and editorial.

### Accent / system typefaces

- `ThatThatNewPixel` (`ThatNewPixel` in CSS): small labels, overlines, tracking annotations
- `Orbitron`: numbers, counters, step markers, technical data

These fonts should be used sparingly. They add the performance-tech layer, but the brand should still read as refined rather than retro-gaming.

### Included but not active in the landing page

- `Kalipixel` exists in `src/fonts/heading/kalipixel/`

This font is part of the asset library, but it is not used in the current landing page implementation. Unless a future design explicitly adopts it, it should be treated as an optional exploration asset rather than a core brand font.

## Heading System

### H1 style

- Use `Neue Haas Grotesk` at the heaviest available weight, usually `900`
- Tight line-height, around `1.0` to `1.1`
- Tight tracking, usually negative letter-spacing around `-0.03em`
- Break lines intentionally for rhythm and impact
- Use italic emphasis selectively on one key word
- Orange emphasis is acceptable for that one key word

Example pattern:

- Bold stacked statement
- One highlighted italic word
- Short supporting paragraph below in gray

### H2 / section heading style

- `700` to `900` weight
- Tight tracking and compact line-height
- Large but controlled scale
- Often paired with a small pixel-style overline above

### Overlines / eyebrow text

- Use the pixel face
- Uppercase
- Small size: roughly `10px` to `11px`
- High tracking: around `0.12em` to `0.15em`
- Orange by default, gray when used as ambient metadata

### Body copy

- Set in `Neue Haas Grotesk`
- Typical size: `15px` to `17px`
- Line-height: `1.6` to `1.7`
- Use dark gray for supporting copy on light backgrounds
- Use softened off-white on dark backgrounds

## UI Style

### Layout

- Large vertical spacing
- Clean container widths
- Modular grid sections
- Strong alternation between light and dark bands
- Minimal border radius, mostly `3px` to `4px`

### Components

- Buttons are simple, rectangular, and dense rather than pill-shaped
- Cards are flat and structured, with subtle borders or edge accents
- Decorative effects stay low-noise and purposeful
- Lines, dots, counters, and markers should feel like performance instrumentation

### Surfaces

- Default sections sit on off-white
- Key storytelling sections can invert to black with off-white text
- Orange is not a full-page background by default, but it works well in campaign or social treatments

## Motion and Interaction

Motion should reinforce liveness and tracking, not general "startup animation."

- Subtle pulse indicators are on-brand
- Physics-driven or signal-like motion is on-brand
- Hover states should feel precise and light
- Motion should be smooth, deliberate, and technically confident

Avoid:

- Bouncy generic UI animation
- Overly soft easing everywhere
- Loud parallax or flashy neon effects

## Visual Motifs

The recurring Maestrum visual motifs are:

- Hand tracking
- Gesture paths
- Rounded modular bars
- Data points and fingertip markers
- Real-time labels such as tracking state, FPS, or control metadata

These should appear as secondary cues around the core content, not overwhelm it.

## Social and Marketing Look

The Instagram assets indicate a slightly more atmospheric expression of the brand.

- Orange can expand into large gradient fields
- Off-white logotype treatment is acceptable on orange backgrounds
- The symbol can be repeated or enlarged as a graphic pattern
- Composition should still stay clean, centered, and geometric

## Practical Rules

- Default to off-white backgrounds, black headings, gray support copy, and orange accents.
- Default to `Neue Haas Grotesk` for nearly everything.
- Reserve pixel typography for small labels and Orbitron for numeric or technical moments.
- Use orange as a signal color, not as a substitute for hierarchy.
- Keep the brand feeling musical, physical, and technically sharp.

## Source Assets

- Palette: `src/colors/color-palette-v1.pdf`
- Wordmark: `src/logo/logotipo.svg`
- Symbol: `src/logo/simbolo.svg`
- Social assets: `src/social/instagram/`
- Fonts: `src/fonts/`
