# Predict-ad-ble

Marketing site for **Predict-ad-ble**: Meta creative strategy for founder-led software teams. The landing page lives in [`src/app/page.tsx`](src/app/page.tsx) and [`src/components/landing/`](src/components/landing/).

## Booking CTA

Copy [`.env.example`](.env.example) to `.env.local` and set your scheduling link:

```bash
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-link
```

If unset, the **Book My Meta Diagnosis Call** buttons still render but link to `#` until you configure the variable.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Source copy reference: [`landing-page-copy.md`](landing-page-copy.md).
