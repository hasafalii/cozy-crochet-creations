import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — Crocherish" },
      { name: "description", content: "Browse handmade crochet wearables, accessories and plushies. Each piece made by hand in small batches." },
      { property: "og:title", content: "Shop All — Crocherish" },
      { property: "og:description", content: "Handmade crochet wearables, accessories and plushies." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <header className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Shop</span>
        <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">The whole collection</h1>
        <p className="mt-5 text-base text-muted-foreground">
          A small, ever-changing line of pieces. Because every item is hand-made, quantities are limited.
        </p>
      </header>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}