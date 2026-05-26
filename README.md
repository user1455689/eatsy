# Eatsy – Premium Food Commerce Platform

Modern quick-commerce starter built with **Next.js App Router + TypeScript + Tailwind** and production-ready architecture docs for **Supabase-backed scale**.

## Included
- Customer storefront: landing, catalog, product details.
- Admin dashboard shell (`/admin`) for analytics + operations.
- Supabase SQL schema with base RLS policies (`supabase/schema.sql`).
- Mobile-first minimalist UI.

## Run
```bash
npm install
npm run dev
```

## Key Routes
- `/` splash → home
- `/home` premium landing
- `/products` catalog
- `/products/[id]` product detail
- `/admin` admin control panel

## Scale Architecture Notes
- Move product/order data to Supabase tables in `supabase/schema.sql`.
- Add realtime subscription on `orders` for live tracking.
- Add storage bucket `product-images` for media.
- Add admin role checks via JWT custom claims + RLS.
