import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Crocherish" },
      { name: "description", content: "Get in touch with the studio for questions, collaborations or wholesale enquiries." },
      { property: "og:title", content: "Contact — Crocherish" },
      { property: "og:description", content: "Get in touch with the Crocherish studio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Say hello</h1>
          <p className="mt-5 text-base text-muted-foreground">
            Questions about an order, collaborations, or just want to chat about yarn? We'd love to hear from you.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <a href="mailto:hello@crocherish.com" className="flex items-center gap-3 text-foreground/80 hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> hello@crocherish.com
            </a>
            <a href="https://instagram.com/crocherish" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary">
              <Instagram className="h-4 w-4 text-primary" /> @crocherish
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Shipping worldwide from our small studio
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-5 rounded-2xl border border-border bg-card p-8"
        >
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</label>
            <input required maxLength={100} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</label>
            <input required type="email" maxLength={255} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea required maxLength={1000} rows={5} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
          </div>
          <button type="submit" className="w-full rounded-full bg-primary py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-transform hover:-translate-y-0.5">
            {sent ? "Thank you — we'll be in touch" : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}