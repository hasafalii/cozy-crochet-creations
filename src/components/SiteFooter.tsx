import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-foreground">Crocherish</h3>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Hand-stitched garments, accessories and plushies — made one loop at a time in small, mindful batches.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://instagram.com/crocherish"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> @crocherish
            </a>
            <a href="mailto:hello@crocherish.com" className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-primary">All pieces</Link></li>
            <li><Link to="/custom-orders" className="hover:text-primary">Custom orders</Link></li>
            <li><Link to="/care" className="hover:text-primary">Care guide</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><span className="text-muted-foreground">Worldwide shipping</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Crocherish. Made with love.</p>
      </div>
    </footer>
  );
}