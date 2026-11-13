---
name: Dermapuritys
description: Warm editorial skin care with the established Dermapuritys identity.
colors:
  primary: "#d7b56c"
  primary-hover: "#c9a352"
  ink: "#292721"
  body-muted: "#676157"
  paper: "#ffffff"
  cream: "#f4eee3"
  hero-cream: "#f5f0e7"
  divider: "#e8e2d7"
  serif-accent: "#8a682c"
  focus: "#816025"
typography:
  display:
    fontFamily: "Regina, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(48px, 5.3vw, 76px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "normal"
  headline:
    fontFamily: "Regina, Georgia, 'Times New Roman', serif"
    fontSize: "43px"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "normal"
  title:
    fontFamily: "Nohemi, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.35
  body:
    fontFamily: "Nohemi, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.5
  label:
    fontFamily: "Nohemi, Arial, sans-serif"
    fontSize: "12px"
    lineHeight: 1.5
rounded:
  caption: "3px"
  control: "4px"
  panel: "5px"
  button: "9999px"
  media: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  gutter: "44px"
  section: "70px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "16px 24px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "16px 24px"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "9px 0"
  chip-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  chip-filter-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "#4a443a"
    rounded: "{rounded.control}"
    padding: "12px 13px"
    height: "46px"
  consultation-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.media}"
    padding: "32px"
---

# Design System: Dermapuritys

## Overview

**Creative North Star: "The Personal Care Editorial"**

The existing Dermapuritys identity is the authority: its original logo and photography, warm gold, live Nohemi font file, and serif heading rendering. The visual language is calm and editorial, with large serif statements, compact sans-serif navigation and controls, and warm tonal surfaces.

Depth comes from photography, white-on-cream panels, and fine dividers. Controls remain restrained and legible. This document records the implemented skin page; the split hero and catalogue are current surface patterns rather than mandatory compositions for every future page.

**Key Characteristics:**
- Established logo, original imagery, and warm gold identity.
- Serif display typography paired with the live Nohemi body face.
- Flat cream and white surfaces with fine warm dividers.
- Responsive catalogue and restrained, visible booking controls.

## Colors

The palette uses warm gold as its action color, cream as a tonal background, and softened dark neutrals for reading. Frontmatter names and values are normative; the stylesheet also contains local muted shades for individual captions and borders.

### Primary
- **Warm Brand Gold** (`primary`): booking buttons, selection highlighting, and card action borders.
- **Deepened Brand Gold** (`primary-hover`): primary button hover feedback.
- **Serif Gold** (`serif-accent`): italic emphasis within display headings and text-link hover feedback.
- **Focus Gold** (`focus`): the shared keyboard focus outline, distinct from the lighter button fill.

### Neutral
- **Warm Ink** (`ink`): body text, selected filters, and the footer background.
- **Quiet Stone** (`body-muted`): explanatory paragraphs, especially the introductory copy.
- **White Paper** (`paper`): the page, navigation, inputs, and form panel.
- **Consultation Cream** (`cream`): the consultation section.
- **Hero Cream** (`hero-cream`): the split hero copy surface.
- **Warm Divider** (`divider`): filter and card action separators.

**The Brand Continuity Rule.** Keep the actual Dermapuritys logo, live font asset, original service imagery, and established gold; do not substitute a new identity.

## Typography

**Display Font:** Regina, Georgia, 'Times New Roman', serif.
**Body Font:** Nohemi, Arial, sans-serif. The regular face is loaded with `font-display: swap` from `/assets/nohemi.otf`, copied from the live site.

**Character:** The serif supplies an editorial, personal voice. Nohemi provides compact navigation, service titles, descriptions, and forms without competing with the display face.

### Hierarchy
- **Display:** the frontmatter display role drives the hero; at the tablet breakpoint it becomes (60px), and on mobile (52px).
- **Headline:** catalogue headings use the frontmatter headline role; mobile catalogue and introduction headings use (34px). The consultation headline uses (52px), then (46px) at tablet and (43px) at mobile.
- **Title:** regular sans-serif service names use the title role; mobile names use (17px). Form headings use (23px), with contextual responsive overrides.
- **Body:** the frontmatter body role is the base. Hero supporting copy uses (17px, 1.7 line-height, 390px maximum width); introduction copy uses (15px, 1.8). Service descriptions use (13px, 1.7).
- **Label:** controls, field labels, counts, and breadcrumbs use compact mixed-case text. Card category labels use (10px); these are supporting annotations rather than primary reading text.

**The Honest Font Rule.** Regina is a declared family name, not a supplied font file. Preserve the Georgia fallback rendering unless a legitimate Regina asset is provided.

## Layout

The content wrapper is centered with a maximum width of (1280px), including horizontal padding of (44px). Padding steps to (30px) at tablet and (22px) on mobile. The hero is a separate full-width region capped at (1512px), split evenly between copy and the original category portrait, with a minimum desktop height of (540px).

The introduction uses two equal columns. The service catalogue uses three columns with (36px) row and (26px) column gaps. The consultation uses a (1fr / 1.15fr) split with a (95px) gap and two-column fields. Section spacing is generous; consultation and catalogue sections use the frontmatter section step, with related sections using (65px) or (75px).

At (1100px), gaps, navigation, and photography tighten. At (760px), the hero, introduction, and consultation stack; section padding becomes (42px), the catalogue becomes two columns, navigation opens as an explicit menu, and a fixed booking bar appears with safe-area bottom padding. At (370px), catalogue cards and fields become single-column and the header CTA hides. A (1512px) minimum-width rule fixes hero copy alignment at (160px) from the hero edge.

The desktop header is sticky at (96px) high; mobile uses (76px). Scroll padding accommodates it. Footer bottom padding reserves space for the mobile booking bar.

## Elevation & Depth

There are no box shadows. Cream sections frame white surfaces, dark selected filters signal state, and thin warm dividers separate navigation, catalogue controls, and card actions. Photography carries visual richness; overlays remain small and translucent. Header and mobile booking controls use explicit stacking order rather than decorative elevation.

**The Flat Surface Rule.** Use tonal contrast and dividers for depth; the current system has no box shadows.

## Shapes

Shapes are lightly rounded, never pill-shaped. The frontmatter radius scale maps small captions to gently curved controls, buttons, and image/form containers. Photo frames crop to their rounded bounds. Inputs and outlined actions use (1px) strokes; keyboard focus uses a (2px) outline with (5px) offset. Search uses its own (3px) focus offset.

## Components

### Buttons
Refined, direct actions with a small arrow.
- **Primary:** brand gold with warm dark text; minimum height is (50px), so the frontmatter height expresses its desktop minimum rather than a fixed constraint. Background hover transitions over (0.2s).
- **Outline:** transparent fill, warm gold border, and a pale cream hover background.
- **Text:** no fill, a fine gold underline, and gold hover text. Card booking actions use a compact, lightly filled outline variant.
- **Focus / Disabled:** keyboard focus remains visible; disabled buttons use (0.5) opacity and the default cursor.

### Chips
Catalogue filters use compact rectangular buttons with a light warm border. Selected chips reverse to warm ink and white text; hover uses pale cream. Their pressed state is exposed with `aria-pressed`. Category tags are smaller translucent labels over photography and are not interactive filters.

### Cards / Containers
Catalogue cards are open compositions on white: rounded service photography, a regular sans-serif title and description, then a divided action row. Photos are (210px) high on desktop, (180px) on tablet and (150px) in the mobile two-column catalogue. Hover scales photography to (1.04) over (0.4s). The single-column narrow layout restores the (210px) image height. Missing imagery has an intentional cream typographic placeholder.

The consultation form is a white rounded panel with the frontmatter padding; tablet reduces it to (26px), mobile to (24px 20px). A pale help strip supplies a quieter secondary container without a shadow.

### Inputs / Fields
White inputs use fine warm borders, subtle rounding, and a minimum height of (46px). The locked Skin category uses a pale neutral fill. Search is a single bordered group with a focus-within outline. Native required, telephone pattern, and consent validation are used; no custom error palette or bespoke error-state component is implemented.

### Navigation
The original logo appears at its preserved aspect ratio. Desktop links use (15px) Nohemi with a muted gold active/hover state. The header is white with a fine bottom border. Mobile exposes an explicit menu toggle and keeps booking available in the header or fixed bottom control.

### Skin consultation handoff
Each catalogue Book Now action preselects that treatment, scrolls to consultation, and focuses the name field. General booking actions focus the treatment selector. Category stays Skin and treatment choices stay within the skin catalogue. A visible preview note and post-validation status explain that the form is not connected to the clinic booking system.

Smooth scrolling and transitions are disabled when reduced motion is requested; the booking handler respects the same preference.

## Do's and Don'ts

### Do:
- **Do** retain the original logo proportions and use the existing category and service photographs.
- **Do** pair serif headings with Nohemi body text and controls.
- **Do** preserve visible keyboard focus and reduced-motion behavior.
- **Do** carry a card’s treatment choice into the skin-only consultation selector.
- **Do** keep the preview form’s non-submission notice visible until a real booking integration exists.

### Don't:
- **Don't** replace the incumbent logo, gold, imagery, or font with generic substitutes.
- **Don't** claim a Regina font file is loaded when the implementation supplies only Nohemi.
- **Don't** add invented clinical evidence, reviews, or treatment outcomes.
- **Don't** imply a consultation has been submitted when the preview only prepares a selection.

### Interaction polish

Preserve the established logo, gold, Nohemi, serif headings and imagery. Button press feedback scales to .97 over 140ms with cubic-bezier(.23,1,.32,1), excluding keyboard focus; precise-pointer image hover uses 220ms and a restrained 1.025 scale. Touch receives no hover animation. Reduced motion disables transforms and transitions. Booking navigation is immediate with no timer; generic booking preserves the selected treatment. Mobile menu Escape restores trigger focus.

At widths up to 540px the catalogue uses one column, 21px treatment titles and 14px descriptions. Form inputs and search use 16px below 760px, with single-column fields and minimum 44px primary touch targets. Desktop titles reserve 52px to align the catalogue rows. The placeholder tone is #756c5e. These are intentional refinements within the incumbent system; prior undocumented shade/type advisories were not used to restyle the brand.

### User-directed live-brand correction (authoritative)

The user rejected the split hero, tight serif tracking, square buttons and uncontained catalogue items. Measured the original live skin page: primary buttons are gold #d7b56c, white text, fully rounded, 16px; header CTA weight 700 and service CTA weight 500. Search is a fully rounded field with the icon on the right. Filter controls inherit that rounded button family. Cards have a 1px #ebebeb border, 16px radius, white background, 20px content padding and the live medium shadow (0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a). This explicit incumbent reference overrides the general craft preference to avoid simultaneous shadow and border.

Headings retain Regina/Georgia with normal tracking, .035em word spacing and 1.2–1.25 line height. The hero is one continuous #e3d4c2 image spread using the original photograph; copy is overlaid in the left negative space. Mobile keeps one continuous surface with the portrait below the copy. The image caption and category-image badges were removed. Button arrow ornament is removed to match the live controls. These requirements supersede earlier conflicting notes and previews in this file.

### Hero balance refinement

Desktop hero height is 560px, text width 51%, heading clamp(56px,5.1vw,72px). Original portrait is aligned right, 22px clear of the top, contained within an 85%-wide layer offset right by 12% to center the subject near 70% of the viewport. The background matches the photo’s negative space (#e3d4c0). Tablet uses 530px height with a separate portrait crop; mobile remains unchanged. These proportions supersede the previous portrait positioning.

### Silhouette alignment (supersedes percent-offset portrait rules)

The source image has approximately 24% empty space to the right of the visible shoulder. Align the silhouette, not the image element. Desktop keeps the original image at 538px high with intrinsic width and offsets its right edge by `calc(var(--hero-gutter) - 230px)`; the visible shoulder then aligns to the copy’s 44px or centered-content gutter. Tablet uses a 508px-high image and offsets by `calc(30px - 217px)` to produce a 30px visible margin. Browser geometry verified the tablet visible gutter at 30px with no horizontal document overflow. Mobile is unchanged.

### Card action hierarchy

Each service card has one primary action: Book Now, using the original gold pill button. View Details is a secondary text link with transparent background, understated underline and arrow. This supersedes the earlier rule that both actions used filled buttons.

### Card title spacing

Service titles use natural content height with a 10px bottom margin. Do not reserve two lines for one-line titles; align bottom actions using the existing flex layout instead.

### Expanded category layout

The November 13 brief moves the single category form into the hero. The hero now uses a shared warm background with a left story/portrait and a right white rounded form panel. The earlier two-element hero silhouette rules remain historical; the `.hero-with-form` rules own this composition. Desktop hero grid: flexible story plus420px form,44px gap; tablet365px form,24px gap; mobile stacked story and single-column form. Ground the original portrait on the hero bottom.

Follow with a four-item trustbar, existing treatment cards, two-column consultation content, editorial benefits, three realdoctor profiles, closingCTA and six native details/summary FAQs. Keep normal headingtracking, originalNohemi/goldpillcontrols, oneprimaryCTApercard and naturalheighttitle10pxgap. Newformheadingusesh2 with Nohemi to maintainheadinghierarchy. No offers or competitor claims were added.

### Three-element hero balance

The user rejected the small bottom portrait in the expanded hero. The current `.hero-with-form` rules replace the previous floating portrait composition. Desktop uses three grid columns: copy, a600px-tall portrait region, and the enquiry form, with24px gaps and vertically centered copy/form. The photo extends to the hero bottom while its face starts close to the form top. Source negative space may extend behind adjacent columns; text and form keep higher stacking order. Tablet uses a text/portrait row and centered full-width form below. Mobile stacks copy, a330px portrait and the form. Original brand styles remain unchanged.

On tablet only, fade the lower17% of the portrait into the shared beige background to avoid a hard torso edge above the form. Desktop retains the full portrait, grounded on the banner edge.

### Four-field contact form

The latest marketing revision supersedes earlier category/service-selector requirements. Render exactly four contact inputs in this order: Name, Email, Phone, Branch. Desktop uses a2x2 field grid; mobile uses a single column. Email uses native email validation. Retain the existing consent line and gold submit button; remove category badge and all Category/Treatment controls. Booking CTAs focus the Name input without maintaining obsolete treatment-selection state.

### Hero CTA hierarchy

The hero copy contains only the Explore treatments text link. Its redundant inline Book Now button is removed; the visible form’s submit button is the primary hero action. Retain the fixed mobile Book Now shortcut and catalogue/bottom booking actions.

### Single closing CTA section

Keep only the consultation banner before the FAQs. Remove the duplicate final booking section after the FAQs, so the FAQ section leads directly into the footer. Existing catalogue actions and the fixed mobile shortcut remain.
