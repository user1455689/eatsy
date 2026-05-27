# Eatsy Food App

A mobile-first food commerce experience built with Next.js App Router and Tailwind CSS.

## Run locally

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
