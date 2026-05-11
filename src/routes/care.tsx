import { createFileRoute } from "@tanstack/react-router";
import { Droplets, Sun, Wind, Sparkles } from "lucide-react";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "Care Guide — Crocherish" },
      { name: "description", content: "How to wash, dry and store your handmade crochet pieces so they stay beautiful for years." },
      { property: "og:title", content: "Care Guide — Crocherish" },
      { property: "og:description", content: "How to wash, dry and store your handmade crochet pieces." },
    ],
  }),
  component: CarePage,
});

const steps = [
  { icon: Droplets, title: "Hand wash, gently", text: "Use cold water and a mild detergent. Swirl gently — never wring or twist the fibers." },
  { icon: Wind, title: "Lay flat to dry", text: "Reshape the piece on a clean towel and let it air dry away from direct heat." },
  { icon: Sun, title: "Avoid direct sun", text: "Long exposure to sunlight can fade natural dyes. Store in a cool, dry place." },
  { icon: Sparkles, title: "Store with care", text: "Fold (don't hang) heavier pieces to keep their shape. A muslin bag is perfect." },
];

function CarePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Care guide</span>
        <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">How to care for your crochet</h1>
        <p className="mt-5 text-base text-muted-foreground">
          Treated kindly, your handmade piece will last for years. Here's everything you need to know.
        </p>
      </header>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {steps.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-8">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-2xl text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-secondary/40 p-8">
        <h3 className="font-serif text-2xl text-foreground">A small note</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Slight pilling is natural with hand-spun yarn — gently de-pill with a fabric comb to keep your piece looking fresh. If you ever have a question about a specific item, send a message and we'll guide you through it.
        </p>
      </div>
    </div>
  );
}