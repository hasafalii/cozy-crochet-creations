import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-crochet.jpg";
import aboutImg from "@/assets/about-maker.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Instagram, Heart, Scissors, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crocherish — Handmade with love" },
      { name: "description", content: "Hand-stitched crochet wearables, accessories and plushies. Modern boho pieces made one loop at a time." },
      { property: "og:title", content: "Crocherish — Handmade with love" },
      { property: "og:description", content: "Hand-stitched crochet wearables, accessories and plushies." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 md:order-1">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Slow craft · Small batch</span>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Hand-stitched <em className="italic text-primary">with love</em>, designed for you.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              A quiet collection of crochet wearables, home pieces and plushies — each one made by hand in our small studio.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Shop new arrivals
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/custom-orders" className="text-sm uppercase tracking-[0.2em] text-foreground/80 underline-offset-8 hover:text-primary hover:underline">
                Request a custom piece
              </Link>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/40" />
            <img
              src={heroImg}
              alt="Handmade cream and terracotta crochet cardigan"
              width={1600}
              height={1200}
              className="relative aspect-[5/6] w-full rounded-[1.5rem] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/95 p-5 shadow-lg backdrop-blur md:block">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Best seller</p>
              <p className="mt-1 font-serif text-lg text-foreground">Terracotta Cardigan</p>
              <p className="text-sm text-primary">RM 148</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
          {[
            { icon: Heart, title: "Made with love", text: "Every stitch handcrafted in small batches." },
            { icon: Scissors, title: "Custom sizing", text: "Tailored to your measurements & colors." },
            { icon: Sparkles, title: "Natural fibers", text: "Soft cottons and wools you'll want to live in." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-serif text-lg text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured collection */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Featured collection</span>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">A few of our favorites</h2>
          </div>
          <Link to="/shop" className="hidden items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-primary md:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/30">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="Mehrish crocheting"
            loading="lazy"
            width={1200}
            height={1400}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-md"
          />
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Meet the maker</span>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">A studio of one, a thousand stitches.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hi, I'm Mehrish. What started as a quiet hobby has grown into a small studio devoted to slow fashion. Each piece you see here was crocheted by my own hands — no machines, no shortcuts. Just hours of looping yarn, often with a cup of chai close by.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I believe in clothes you'll keep for years, gifts that feel like a hug, and the calm of making things slowly.
            </p>
            <Link to="/custom-orders" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary hover:underline">
              Commission a piece <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">@crocherish</span>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">From the studio</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Behind-the-scenes, work in progress and tiny moments of slow craft — follow along on Instagram.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {products.concat(products).slice(0, 8).map((p, i) => (
            <a
              key={i}
              href="https://instagram.com/crocherish"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-md bg-muted"
            >
              <img src={p.image} alt="" loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-background" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Kind words</span>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Loved by our community</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { quote: "The cardigan is even more beautiful in person — you can feel the love stitched into every loop.", name: "Ayesha K." },
              { quote: "Mehrish made a custom plushie for my daughter's birthday. Truly a treasured keepsake.", name: "Sara M." },
              { quote: "Soft, well-made, and the colors are exactly as pictured. My new favorite tote.", name: "Lina R." },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-8">
                <p className="font-serif text-lg italic leading-relaxed text-foreground">"{t.quote}"</p>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
