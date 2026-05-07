import { Link, NavLink, Outlet } from "react-router-dom";
import { Mountain, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Accueil", end: true },
  { to: "/voies", label: "Voies" },
  { to: "/guides", label: "Guides" },
  { to: "/refuges", label: "Refuges" },
  { to: "/preparation", label: "Préparation" },
  { to: "/equipement", label: "Équipement" },
  { to: "/histoire", label: "Histoire" },
  { to: "/securite", label: "Sécurité" },
  { to: "/sources", label: "Sources" },
];

const footerCols = [
  {
    title: "Voies",
    links: [
      { to: "/voies/gouter", label: "Voie normale du Goûter" },
      { to: "/voies/3-monts", label: "Traversée des Trois Monts" },
      { to: "/voies/gonella", label: "Voie italienne Gonella" },
      { to: "/voies/grands-mulets", label: "Grands Mulets" },
      { to: "/voies/miage-bionnassay", label: "Miage-Bionnassay" },
      { to: "/voies/brenva", label: "Brenva" },
      { to: "/voies/peuterey", label: "Peuterey" },
    ],
  },
  {
    title: "Préparer",
    links: [
      { to: "/preparation", label: "Préparation physique" },
      { to: "/equipement", label: "Équipement" },
      { to: "/securite", label: "Sécurité" },
      { to: "/refuges", label: "Refuges" },
    ],
  },
  {
    title: "Comprendre",
    links: [
      { to: "/histoire", label: "Histoire" },
      { to: "/faces", label: "Faces et versants" },
      { to: "/glossaire", label: "Glossaire" },
      { to: "/sources", label: "Sources" },
    ],
  },
  {
    title: "Guides",
    links: [
      { to: "/guides", label: "Annuaire des guides" },
      { to: "/guides/methodologie", label: "Méthodologie de l'annuaire" },
      { to: "/contact", label: "Signaler une correction" },
    ],
  },
];

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-wide flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-summit shadow-elegant">
              <Mountain className="h-6 w-6 text-primary-foreground" strokeWidth={1.5} />
            </div>
            <div className="leading-tight">
              <p className="font-display text-xl font-semibold text-primary">Ascension Mont Blanc</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">4 805,59 m — UIAGM</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/60"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary hover:bg-accent"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-border/60 bg-background">
            <div className="container-wide py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "text-primary bg-accent" : "text-muted-foreground hover:bg-accent/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
        <div className="container-wide py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-primary-foreground/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="container-wide py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
            <p>© {new Date().getFullYear()} Ascension Mont Blanc — Site indépendant.</p>
            <p>Site informatif. L'alpinisme comporte des risques mortels.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
