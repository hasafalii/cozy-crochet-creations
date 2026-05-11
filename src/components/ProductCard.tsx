import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const salePrice = product.salePercent
    ? Math.round(product.price * (1 - product.salePercent / 100))
    : null;
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden rounded-md bg-muted">
        {product.salePercent && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-sm">
            {product.salePercent}% Off
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <a
          href={`https://ig.me/m/crocherish?text=${encodeURIComponent(`Hi! I'd like to order the ${product.name}.`)}`}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-x-4 bottom-4 translate-y-3 rounded-full bg-foreground py-3 text-center text-xs uppercase tracking-[0.25em] text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Order now
        </a>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 font-serif text-lg text-foreground">{product.name}</h3>
        </div>
        {salePrice !== null ? (
          <span className="flex flex-col items-end leading-tight">
            <span className="font-serif text-lg text-primary">RM {salePrice}</span>
            <span className="text-xs text-muted-foreground line-through">RM {product.price}</span>
          </span>
        ) : (
          <span className="font-serif text-lg text-primary">RM {product.price}</span>
        )}
      </div>
    </div>
  );
}