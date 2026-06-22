import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[760px] overflow-hidden bg-hero-radial lg:min-h-screen"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute right-0 top-0 h-full w-full lg:w-[58%]">
        <img
          src="/hero-essencia.png"
          alt="Homem vestindo terno premium azul-marinho"
          className="h-full w-full object-cover object-[66%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b13] via-[#050b13]/55 to-transparent lg:from-[#061326] lg:via-[#061326]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b13] via-transparent to-[#050b13]/30" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-32 lg:min-h-screen lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-4 text-gold">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] font-bold uppercase tracking-[0.42em]">
              Use Essência Masculina
            </span>
          </div>
          <h1 className="max-w-3xl font-display text-[3.35rem] font-medium leading-[0.92] tracking-[-0.035em] text-ivory sm:text-7xl lg:text-[6.3rem]">
            Elegância sob medida para homens de{" "}
            <span className="italic text-gold">presença.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-8 text-white/65 sm:text-lg">
            Ternos masculinos premium para ocasiões especiais, negócios e alta
            performance.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#ternos"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-ink transition hover:bg-[#e2c45b]"
            >
              Ver ternos
              <ArrowDown size={15} className="transition group-hover:translate-y-1" />
            </a>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de conhecer a coleção Essência Masculina.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-white/25 bg-black/10 px-7 py-4 text-xs font-bold uppercase tracking-[0.17em] text-ivory backdrop-blur transition hover:border-gold hover:text-gold"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
              <ArrowUpRight size={14} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-14 flex gap-9 border-t border-white/15 pt-6 sm:gap-14">
            <div>
              <strong className="font-display text-3xl font-medium text-ivory">+10</strong>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-white/45">
                Anos de tradição
              </span>
            </div>
            <div>
              <strong className="font-display text-3xl font-medium text-ivory">4.9</strong>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-white/45">
                Avaliação média
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute bottom-7 right-8 hidden origin-right rotate-90 text-[8px] font-bold uppercase tracking-[0.42em] text-white/35 lg:block">
        Coleção 2026
      </span>
    </section>
  );
}
