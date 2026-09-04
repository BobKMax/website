# Maxime Kreiter Architecte — Design System

A minimal, print-derived system for a small Paris architecture practice. It exists to produce three things: **project layouts** (dossiers, fiches), **notes** (comptes rendus, relevés) and a **website**. Everything else is out of scope.

The register is that of French architectural publishing: warm grey paper, black ink, hairline rules, mono uppercase metadata, factual captions, no ornament. Nothing is rounded, nothing floats, nothing animates except a colour change.

## Sources given

| Source | What it was | Status |
| --- | --- | --- |
| `uploads/Capture d’écran 2026-09-02 à 15.28.35.png` | Photograph of *L'Architecture d'Aujourd'hui — Hors-série N°34, "Bruxelles, en capitales"* (Bouwmeester Maître Architecte). Cream stock, heavy display mark, serif titling, EN/FR ovals. | Read — used as a **reference for editorial density and metadata treatment only**. Not the practice's own material. |
| `uploads/Capture d’écran 2026-09-02 à 15.29.10.png` | Photograph of a project booklet, *"4 rue Deguerry"* — pale blue stock, heavy grotesque caps, monospace address in a ruled box, small circular stamp, kraft envelope. | Read — the **primary layout reference**. The cover sheet, the blueprint tint and the mono address box come directly from it. |
| https://www.virtuell-studio.com | Reference site (visualisation studio, Paris). Full-bleed imagery, all-lowercase micro-nav, captions as metadata lists, extreme whitespace. | Read via the live site. |
| https://bau-kunst.eu/fr | Reference site (BAUKUNST, Brussels / Lausanne). Neutral grotesque at small sizes, a single ×-dismissed overlay, address and team as plain lines, no cards, no shadows. | Read via the live site. |

No codebase, Figma file, logo, typeface binary or photography was supplied. **The brief asked for a sans-serif** rather than the serif titling of the AA reference, and that instruction governs.

Both uploads are photographs of printed matter by other practices. They informed structure and rhythm; none of their marks, typefaces or images were reproduced.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `layout.css`, `motion.css`, `base.css` |
| `components/core/` | Button, IconButton, Tag, Badge, Card |
| `components/forms/` | Field, Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/navigation/` | Tabs, IndexRow, SiteHeader, SiteFooter |
| `components/editorial/` | Wordmark, MetaList, Caption, ImageFrame, SectionHeading |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `ui_kits/website/` | Four click-through screens: index des projets, fiche projet, agence, contact |
| `ui_kits/documents/` | Three A4 sheets: couverture, fiche projet, compte rendu de chantier |
| `templates/dossier-projet/` | Design Component template: 3-page A4 dossier (couverture, fiche projet, compte rendu) — the entry consuming projects copy |
| `guidelines/` | 21 specimen cards (Brand, Type, Colors, Spacing) |
| `assets/` | **Empty** — see `assets/README.md` for why and what to drop in |
| `SKILL.md` | Agent-Skills front matter for use outside this project |

### Components (24)

Badge, Button, Caption, Card, Checkbox, Dialog, Field, IconButton, ImageFrame, IndexRow, Input, MetaList, Radio, SectionHeading, Select, SiteFooter, SiteHeader, Switch, Tabs, Tag, Textarea, Toast, Tooltip, Wordmark.

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage, variants). One `@dsCard` HTML per directory shows the states.

**Intentional additions.** No source defined a component inventory, so the standard primitive set was authored. Five additions are specific to this practice and carry the brand's real work: `Wordmark` (there is no logo, so the mark must be a component), `MetaList` (the fiche technique is the most-repeated element in the practice's output), `Caption`, `ImageFrame` (ratio lock + the placeholder convention), `SectionHeading`, plus `SiteHeader` / `SiteFooter` / `IndexRow` which the website kit needs and which are pure brand chrome.

---

## Content fundamentals

**Language.** French first. English is a secondary column (`FR`/`EN` toggle in the header), never a mix inside one line. Typographic French: apostrophes ’, non-breaking space before `:` `;` `?` `!` and inside `1,15 M€`, `412 m²`, `9 h 30`, ordinals as `XVIIIᵉ`, arrondissements in Roman numerals (`Paris XI`).

**Voice.** Third person or no person at all. The practice writes *"Le projet rétablit cette traversée"*, not *"nous avons rétabli"* and never *"vous"*. The building is the subject; the architect is a line in the fiche technique.

**Register.** Declarative present tense, one fact per sentence, no adjectives of praise. Materials, dimensions and decisions carry the interest.

> La halle est vidée de ses adjonctions successives. Une boîte technique autonome est posée à l’intérieur, laissant lire la charpente sur toute sa longueur.

Not: *"Un projet ambitieux qui révèle toute la magie de ce lieu unique."*

**Casing.** Three registers only:
- Sentence case for prose, titles, captions, values.
- `UPPERCASE` + mono + 0.08em for labels, navigation, numbers, status — anything that is data about the content rather than content.
- Medium-weight uppercase sans for the project title on covers and project openers. The practice found bold too hard; 500 is the ceiling.

Never Title Case. Never all-caps prose. The wordmark is the one exception to sentence case: it is set entirely lowercase.

**Metadata style.** Labels are one or two words, no colon (`Maîtrise d’ouvrage`, `Surface`, `Statut`). Values are unhedged: `412 m² SDP`, `1,15 M€ HT`, `Livré 2025`, `Second prix`. Absent information is written `—`, never omitted and never softened.

**Captions.** `Fig. 0X` + what is shown + `— Photo : Nom`. Descriptive, positional, never interpretive: *"Cour intérieure depuis le passage"*.

**Numbers.** Projects carry a zero-padded reference (`01`, `02`) used in the index, on covers and in section headings. Dates in documents are `14.05.2026`; in prose, `14 mai 2026`.

**Emoji: never.** Not in UI, not in documents, not in the website. The same applies to exclamation marks and rhetorical questions.

**Vibe.** A dossier that arrives in a kraft envelope. Quiet, exact, slightly austere; interested in construction rather than in itself.

---

## Visual foundations

### Colour
Ink on warm grey paper, one accent, and a blueprint blue for technical matter.

- **Paper** `--paper-100 #EDEDE9` is the default page. `--paper-050` for cards, `--paper-000` for dialogs and A4 sheets, `--paper-200` as the ground behind images.
- **Ink** `--ink-900 #111110` for all primary text; `--ink-700` metadata, `--ink-500` secondary, `--ink-400` muted. Text is never pure black or pure grey-blue.
- **Blueprint tint** `--tint-100 #D9E4E9` (from the "4 rue Deguerry" booklet) marks technical content: dossier covers, fiche blocks, plan grounds, image placeholders.
- **Sage** `--sage-500 #7A8B6F` is the only accent. Its darkest step `--sage-700` is the link hover. One accent moment per view.
- **Status** is muted and earthy — `#4F6B4A`, `#9A7B32`, `#8C3A24` — used only in `Badge` and form errors.
- **Maximum two grounds per document.** Paper + tint, or paper + ink. Never three.
- No gradients. Anywhere. Ever.

### Type
Two families, no third.

- **Fustat** — the grotesque doing all the reading work, including project titles on covers. Medium (500) uppercase at −0.03em for display titles; Medium at −0.015em for section titles; Regular 15px/1.55 for body, measure capped at 62ch.
- **Space Mono** — uppercase, 0.08em tracked, 10–12px, for everything that is *data*: labels, nav, page numbers, references, status, credits. It is what makes the system read as technical rather than corporate.
- Twelve-step scale, 10 → 112px (`--text-3xs` … `--text-display`). Nothing between the steps.
- Italics are unused. Small caps are unused. Letterspacing on lowercase is unused.

**Both are Google Fonts substitutions** — see caveats.

### Layout
- 12 columns, 24px gutters, page margin `clamp(16px, 3.5vw, 56px)`.
- Text and image sit on the same left edge. Asymmetric two-column splits (1.4fr / 1fr) — content left, fiche technique right.
- The only fixed element on the website is the 52px `SiteHeader`, sticky, with one hairline below. No fixed footers, no floating buttons, no back-to-top.
- A4 sheets are 794 × 1123px with 64px margins, a running ink-ruled header and a hairline footer carrying `1 / 3`.
- Vertical rhythm comes from `--s-9` (96px) and `--s-10` (128px) section gaps. Whitespace is the layout device; if a section feels thin, it needs more air, not more content.

### Rules, borders, corners
- **Radius is 0.** `--radius-pill` exists for exactly one element, the `Radio` dot.
- Rules sit close to their text: 8px above a `SectionHeading` title, 8px between a `MetaList` label and its hairline, 4px under a caption. Three line weights: hairline `#D5D4CE` separates rows, fields and index lines; 1px ink opens a section (`SectionHeading`); 2px marks a `Toast` tone.
- Borders do the work shadows would do elsewhere.

### Shadows
`--shadow-none` is the default for every surface. `--shadow-overlay: 0 1px 48px rgba(17,17,16,.12)` exists solely for `Dialog`. A card with a shadow is a bug.

### Backgrounds & imagery
- Flat colour only — no textures, no patterns, no paper grain, no illustration.
- Imagery is full-bleed or ratio-locked (`3/2`, `4/5`, `1/1`, `16/9`), square-cornered, never a rounded thumbnail, never overlaid with text except the wordmark in `tone="inverse"`.
- Intended colour of photography: cool, even, overcast daylight; no warm grading, no vignette, no filter. Plans and drawings sit on `--tint-050` with a `--tint-200` hairline.
- **No photography was supplied.** Until it is, `ImageFrame` renders a blueprint-tint block with a mono label saying what belongs there — a visible gap, not a decorative filler.

### Transparency & blur
Used once: the `Dialog` scrim, `rgba(17,17,16,.28)` with `backdrop-filter: blur(2px)`. No frosted panels, no translucent headers, no protection gradients — captions sit *below* images rather than on them, which is why no scrim is needed.

### Motion
- Colour and opacity only. Nothing moves, scales, bounces or springs.
- 140ms `ease-out` for hover colour, 240ms for opacity fades, 520ms reserved for page-level transitions.
- The one exception is the `Switch` knob sliding 34px in 140ms.
- `prefers-reduced-motion` collapses all of it in `base.css`.

### States
- **Hover, link:** ink → `--sage-700`. The underline is always present, so nothing appears or disappears.
- **Hover, outline button:** full inversion — ink fill, paper text.
- **Hover, solid button:** ink → sage-700 fill.
- **Hover, row / card:** ground tints to `--paper-050`, or the hairline darkens to ink. Never both.
- **Press:** no transform, no shrink, no shadow. The hover colour simply holds.
- **Focus:** 1px solid ink outline, 2px offset, on every focusable element.
- **Disabled:** `opacity: .32`, cursor default, no colour change.
- **Selected:** ink fill with inverted label (`Tag active`), or a 1px ink underline (`Tabs`).

### Cards
Flat. `--surface-card` ground, hairline border, square corners, no shadow, 24px padding. `surface="tint"` for technical blocks. A card is a boundary, not an object.

---

## Iconography

**There is no icon set, and one should not be added.** The practice supplied no icon font, no sprite, no SVGs. Both reference sites use typographic characters where other sites use icons, and this system follows them.

- **Unicode glyphs only**, set in the sans or mono at text size: `→` next / project link, `←` previous, `↑ ↓` sort and the `Select` indicator, `×` close and the `Checkbox` mark, `+` enlarge, `—` em dash for credits and absent values, `·` for separating metadata.
- `IconButton` takes a `glyph` prop precisely so glyphs stay text — they inherit colour, weight and hover behaviour from type.
- Pair a glyph with `Tooltip` when it is ambiguous; the tooltip label is mono uppercase.
- **No hand-drawn SVG icons, no icon library, no emoji.** If a future need genuinely cannot be met by a glyph, the substitution to flag would be a hairline 1px stroke set (Lucide at `stroke-width: 1`), loaded from CDN and documented here first.
- Social links in the footer are words — `Instagram`, `LinkedIn` — not marks.
- **No logo exists.** Wherever a mark would go, the `Wordmark` component sets the name in type. Do not draw, reconstruct or approximate one.

---

## Caveats

1. **Fonts are substitutions.** Fustat (a contemporary open grotesque — the practice rejected Instrument Sans as too angular) and Space Mono (technical monospace) are loaded from Google Fonts in `tokens/fonts.css`. If the practice licenses real typefaces, drop the binaries in `assets/`, replace that file's `@import` with `@font-face` rules and keep the `--font-sans` / `--font-mono` names.
2. **No photography, no logo, no icons** were supplied — see `assets/README.md`.
3. **All project content is invented** (four projects, addresses, costs, comptes rendus) to demonstrate register and density. Replace before anything goes out.
4. The two uploads are photographs of **other practices'** printed matter, used as layout references only.
