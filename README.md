# Dermapuritys category page redesign

A responsive Next.js App Router implementation of the Dermapuritys skin category page. It retains the original logo, Nohemi font, gold branding and website photography.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000/category/skin/.

## Build and deploy

```sh
npm run build
```

This project uses Next.js static export. Deploy the generated `out/` directory to a static host. Both `/` and `/category/skin/` render the category page. `next start` does not serve a static export.

## Included

- Continuous hero image spread with portrait alignment based on its visible silhouette.
- Original-brand gold pill buttons, rounded search and filters, and bordered service cards.
- Search and filters for all 15 existing skin treatments.
- One primary booking button per card, with a secondary service details link.
- Skin-only consultation form with treatment preselection and local field validation.
- Responsive layouts, keyboard focus, Escape menu dismissal and reduced-motion support.

## Production integration

The consultation form is a design preview. It does not transmit or save enquiries. Connect the submit handler to the clinic’s approved booking/CRM endpoint before using it for live enquiries, and show confirmation only after the server confirms receipt.

This is a standalone implementation, not a patch against the existing website repository. When integrating, retain the existing website’s Next.js version/configuration, reuse its shared header/footer, and merge the stylesheet into its styling system. The stylesheet contains global rules. The root preview route is optional.

## Structure

- `app/category/skin/page.jsx`: category route and metadata.
- `components/SkinCategory.jsx`: catalogue, filters and enquiry interactions.
- `services.json`: skin service names, links and images.
- `style.css`: responsive styling.
- `public/assets/`: original website brand assets.

## Validation

Next.js production build passed. Browser checks covered treatment filtering/search, booking preselection, invalid and valid preview form submissions, mobile menu keyboard behavior, and desktop/tablet/mobile layout.

Original assets and service content: https://dermapuritys.com/category/skin
