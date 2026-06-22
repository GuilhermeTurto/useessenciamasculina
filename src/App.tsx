import { ArrowUpRight } from "lucide-react";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductSection } from "./components/ProductSection";
import { getWhatsAppUrl } from "./utils/whatsapp";

function App() {
  return (
    <div className="min-h-screen bg-ink text-ivory">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <AboutSection />
        <section className="relative overflow-hidden bg-navy px-5 py-24 text-center sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.11),transparent_48%)]" />
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="relative mx-auto max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-gold">
              Seu próximo capítulo
            </span>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] sm:text-7xl">
              Vista-se com presença. Escolha seu próximo terno.
            </h2>
            <a
              href={getWhatsAppUrl("Olá! Quero atendimento para escolher meu próximo terno.")}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-ink transition hover:bg-[#e2c45b]"
            >
              Falar com atendimento
              <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
