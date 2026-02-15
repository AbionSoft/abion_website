import { ReactNode } from "react";
import OverlayNav from "./OverlayNav";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <OverlayNav />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="font-display text-xl font-bold text-foreground">
                abion<span className="text-primary">.</span>
              </span>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                Building innovative, scalable, future-focused digital products.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Pages</h4>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Services", path: "/services" },
                  { label: "Contact", path: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
              <p className="text-sm text-muted-foreground">Tokha, Kathmandu, Nepal</p>
              <p className="text-sm text-muted-foreground mt-1">+977-9868348282</p>
            </div>
          </div>
          <div className="section-divider mt-8" />
          <p className="text-xs text-muted-foreground mt-6 text-center">
            © {new Date().getFullYear()} Abion Labs Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
