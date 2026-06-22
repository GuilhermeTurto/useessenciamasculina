import { Award, Gem, MessageSquareText, Scissors } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const benefits = [
  {
    icon: Scissors,
    title: "Alfaiataria elegante",
    text: "Caimento preciso e design contemporâneo para valorizar sua presença.",
  },
  {
    icon: Gem,
    title: "Peças selecionadas",
    text: "Tecidos nobres, texturas refinadas e acabamento de alto padrão.",
  },
  {
    icon: Award,
    title: "Atendimento personalizado",
    text: "Orientação individual para encontrar o modelo ideal para você.",
  },
  {
    icon: MessageSquareText,
    title: "Compra rápida",
    text: "Escolha seu terno e conclua o atendimento diretamente pelo WhatsApp.",
  },
];

export function AboutSection() {
  return (
    <>
      <section id="sobre" className="relative overflow-hidden bg-ivory py-24 text-ink sm:py-32">
        <div className="absolute -right-32 top-0 font-display text-[24rem] leading-none text-navy/[0.035]">
          E
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div className="relative min-h-[500px] overflow-hidden bg-navy">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=88"
              alt="Detalhes de alfaiataria masculina"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-70 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xs border-l-2 border-gold bg-navy/90 p-6 backdrop-blur">
              <span className="font-display text-5xl text-gold">“</span>
              <p className="-mt-3 font-display text-2xl italic text-ivory">
                O bom gosto começa na escolha e se revela nos detalhes.
              </p>
            </div>
          </div>
          <div className="lg:pl-12">
            <div className="mb-5 flex items-center gap-3 text-[#9a7a12]">
              <span className="h-px w-8 bg-[#9a7a12]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em]">
                Nossa essência
              </span>
            </div>
            <h2 className="font-display text-5xl font-medium leading-[1.05] sm:text-6xl">
              Vestir bem é uma forma de dizer quem você é.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
              A Essência Masculina nasceu para vestir homens que valorizam presença,
              elegância e confiança. Cada peça combina caimento moderno, tecidos
              selecionados e acabamento refinado.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/15 pt-8">
              <div>
                <strong className="font-display text-4xl font-medium text-navy">100%</strong>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-ink/45">
                  Curadoria premium
                </span>
              </div>
              <div>
                <strong className="font-display text-4xl font-medium text-navy">Único</strong>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-ink/45">
                  Atendimento próximo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111c] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Por que escolher"
            title="Excelência em cada detalhe."
            center
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="group relative bg-[#07111c] p-7 transition hover:bg-[#0a1928] lg:p-8"
              >
                <span className="absolute right-5 top-4 font-display text-4xl text-white/[0.04]">
                  0{index + 1}
                </span>
                <Icon className="text-gold transition duration-300 group-hover:-translate-y-1" size={25} strokeWidth={1.4} />
                <h3 className="mt-7 font-display text-2xl text-ivory">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
