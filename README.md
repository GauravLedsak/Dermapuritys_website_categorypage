# Dermapuritys skin category redesign

A responsive Next.js App Router implementation retaining the original Dermapuritys logo, Nohemi font, gold pill buttons and website photography.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000/category/skin/.

## Build

```sh
npm run build
```

This project uses Next.js static export. Deploy `out/` to a static host. Both `/` and `/category/skin/` render the page. Use a static server to preview `out/`; `next start` is not used for static export.

## Latest layout

The expanded marketing brief is implemented as:

1. Continuous branded hero with balanced text, a large portrait and a skin-only consultation form.
2. Immediate trust bar.
3. Searchable/filterable catalogue of all 15 skin services.
4. Category content and consultation guidance.
5. Why choose Dermapuritys.
6. Actual care-team profiles and expertise.
7. Booking CTA and clinic contact options.
8. Six skin-treatment FAQs and a final booking CTA.

The earlier refinements remain: one primary Book Now button per card, secondary View Details link, natural title height with a 10px description gap, shared booking-form focus, mobile sticky booking, keyboard focus and Escape menu dismissal.

## Production integration

The form validates locally and is explicitly a design preview. It does not save or transmit enquiries. Connect its submit handler to the clinic's approved booking/CRM endpoint before live enquiry collection, and confirm receipt only after a successful server response.

This is a standalone implementation. When integrating with the original website, retain its Next.js version and configuration, reuse its shared header/footer, and merge the stylesheet into its styling system. The stylesheet contains global rules. The root preview route is optional.

## Structure

- `app/category/skin/page.jsx`: route and metadata.
- `components/SkinCategory.jsx`: navigation, hero, catalogue and shared selection state.
- `components/ConsultationForm.jsx`: single four-field contact form.
- `components/SkinSections.jsx`: content, benefits, doctor profiles and FAQs.
- `components/Icons.jsx`: shared arrow icon.
- `services.json`: existing skin service names, links and images.
- `style.css`: responsive styling.
- `public/assets/`: original brand and doctor images.
- `CONTENT_SOURCES.md`: content provenance and brief interpretations.

## Content decisions

Checked against the public Dermapuritys homepage on 13 November 2026. The homepage publishes 29,000+ clients, which conflicts with the brief's 2 Lakhs+ patients; the page uses the published count. Doctor profiles use Dermapuritys' own names, roles and portraits. The FAQ topic is skin treatments, adapting the inconsistent bridal wording. Offers screenshots were treated as inspiration, not an explicit offers-section requirement.

## Validation

Next.js production build passed. Browser checks covered desktop, tablet and mobile widths; hero form placement; booking-form focus; invalid and valid preview submissions; filters/search/empty state; FAQ expansion; mobile keyboard focus/menu dismissal; and loaded doctor portraits. Final review marked the mobile heading spacing correction resolved.

The desktop hero uses three columns with vertically centered copy and form. Tablet places the form below a text/portrait row, and mobile stacks the elements.

The latest marketing revision limits contact inputs to Name, Email, Phone and Branch. Category and Treatment fields have been removed, including their obsolete selection state. Email is required and uses native validation. All booking CTAs focus the shared form. Privacy consent and the explicit disconnected-preview message remain.
