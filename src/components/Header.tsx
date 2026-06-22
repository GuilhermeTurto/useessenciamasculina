import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["Início", "#inicio"],
  ["Ternos", "#ternos"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-white/10 bg-[#050b13]/95 py-3 shadow-2xl backdrop-blur-xl"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#ternos"
          className="hidden border border-gold bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-transparent hover:text-gold md:inline-flex"
        >
          Ver coleção
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-white/15 text-ivory md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-80 border-t border-white/10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 pb-5 pt-4">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-sm uppercase tracking-widest text-white/80"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
