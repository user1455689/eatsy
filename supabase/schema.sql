create table if not exists public.users (
  id uuid primary key references auth.users(id),
  full_name text,
  phone text,
  created_at timestamptz default now()
);
create table if not exists public.categories (
  id bigserial primary key,
  name text unique not null,
  slug text unique not null
);
create table if not exists public.products (
  id bigserial primary key,
  name text not null,
  category_id bigint references public.categories(id),
  price numeric(10,2) not null,
  discount_percent int default 0,
  stock int default 0,
  description text,
  is_active boolean default true,
  created_at timestamptz default now()
);
create table if not exists public.orders (
  id bigserial primary key,
  user_id uuid references public.users(id),
  status text not null default 'placed',
  total numeric(10,2) not null,
  delivery_fee numeric(10,2) default 0,
  tax numeric(10,2) default 0,
  created_at timestamptz default now()
);
create table if not exists public.order_items (
  id bigserial primary key,
  order_id bigint references public.orders(id) on delete cascade,
  product_id bigint references public.products(id),
  qty int not null,
  unit_price numeric(10,2) not null
);
alter table public.users enable row level security;
alter table public.orders enable row level security;
create policy "users can read own profile" on public.users for select using (auth.uid() = id);
create policy "users can read own orders" on public.orders for select using (auth.uid() = user_id);
