
# Eatsy Food App

A mobile-first food commerce experience built with Next.js App Router and Tailwind CSS.

## Run locally
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

## Production build verification

```bash
npm run build
```

If Vercel reports parser/import errors from older commits (for example old references to `@/data/commerce`), redeploy from the latest commit on the branch where pages import from `@/data/foods`.

## Key routes
- `/home` Home screen
- `/products` Product listing
- `/products/[id]` Product detail
- `/restaurant/[id]` Restaurant detail
- `/search` Search experience
- `/offers` Offers and promotions
- `/categories` Category browsing
- `/cart` Cart
- `/checkout` Checkout
- `/order-tracking` Order tracking
- `/favorites` Favorites
- `/profile` Profile
- `/auth/sign-in` Sign in
- `/auth/sign-up` Sign up
=======
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
