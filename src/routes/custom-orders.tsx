import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/custom-orders")({
  head: () => ({
    meta: [
      { title: "Custom Orders — Crocherish" },
      { name: "description", content: "Commission a one-of-a-kind crochet piece. Choose your colors, size and style." },
      { property: "og:title", content: "Custom Orders — Crocherish" },
      { property: "og:description", content: "Commission a one-of-a-kind crochet piece." },
    ],
  }),
  component: CustomPage,
});

const colors = [
  { name: "Cream", value: "oklch(0.95 0.02 85)" },
  { name: "Terracotta", value: "oklch(0.58 0.135 40)" },
  { name: "Sage", value: "oklch(0.72 0.05 145)" },
  { name: "Sand", value: "oklch(0.78 0.04 70)" },
  { name: "Charcoal", value: "oklch(0.32 0.01 60)" },
  { name: "Rose", value: "oklch(0.72 0.09 20)" },
];

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}

function CustomPage() {
  const [selected, setSelected] = useState<string[]>(["Cream"]);
  const [sent, setSent] = useState(false);

  const toggle = (c: string) =>
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Custom orders</span>
        <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Made just for you.</h1>
        <p className="mt-5 text-base text-muted-foreground">
          Tell us what you're dreaming of — your colors, your measurements, your style. We'll reply within 2 business days with a quote and timeline.
        </p>
      </header>

      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="mt-14 space-y-10 rounded-3xl border border-border bg-card p-8 md:p-12"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Your name" required maxLength={100} />
          <Field label="Email" required type="email" maxLength={255} />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Type of piece</label>
          <select className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
            <option>Cardigan / Sweater</option>
            <option>Top / Crop</option>
            <option>Bag / Tote</option>
            <option>Plushie</option>
            <option>Home decor</option>
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Choose your colors</label>
          <div className="mt-4 flex flex-wrap gap-3">
            {colors.map((c) => {
              const active = selected.includes(c.name);
              return (
                <button
                  type="button"
                  key={c.name}
                  onClick={() => toggle(c.name)}
                  className={`flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${active ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground/70"}`}
                >
                  <span className="h-4 w-4 rounded-full border border-border/60" style={{ background: c.value }} />
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Field label="Bust (in)" maxLength={10} />
          <Field label="Waist (in)" maxLength={10} />
          <Field label="Length (in)" maxLength={10} />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us about your dream piece</label>
          <textarea
            required
            maxLength={1000}
            rows={5}
            className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
            placeholder="Inspiration, references, must-haves..."
          />
        </div>

        <button type="submit" className="w-full rounded-full bg-primary py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5">
          {sent ? "Request received — we'll be in touch soon" : "Submit custom request"}
        </button>
      </form>
    </div>
  );
}