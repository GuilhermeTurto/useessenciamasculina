import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "../types";
import { getWhatsAppUrl } from "../utils/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const message = `Olá! Tenho interesse no ${product.nome} (código ${product.codigo}), no valor de ${product.preco}.`;
  const imageTreatment =
    product.categoria === "Preto"
      ? "grayscale brightness-[.72] contrast-125"
      : product.categoria === "Bege"
        ? "sepia-[.55] saturate-[.65] brightness-110"
        : "grayscale-[12%]";

  return (
    <article className="group overflow-hidden border border-gold/15 bg-[#09111b] shadow-luxe transition duration-500 hover:-translate-y-2 hover:border-gold/55 hover:shadow-gold">
      <div className="relative aspect-[4/5] overflow-hidden bg-navy">
        <img
          src={product.imagem}
          alt={product.nome}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${imageTreatment}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a10]/80 via-transparent to-transparent" />
        {product.destaque && (
          <span className="absolute left-4 top-4 border border-gold/50 bg-[#07111d]/90 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.25em] text-gold backdrop-blur">
            {product.destaque}
          </span>
        )}
        <span className="absolute bottom-4 right-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
          {product.categoria}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold/80">
              Cód. {product.codigo}
            </p>
            <h3 className="mt-2 font-display text-2xl font-medium text-ivory">
              {product.nome}
            </h3>
          </div>
        </div>
        <p className="mt-4 text-xl font-semibold tracking-tight text-ivory">{product.preco}</p>
        <p className="mt-1 text-[10px] text-white/35">ou 10x sem juros</p>
        <div className="mt-6 grid gap-2">
          <a
            href={getWhatsAppUrl(message)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold px-4 py-3.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-ink transition hover:bg-[#e2c45b]"
          >
            <MessageCircle size={14} />
            Comprar pelo WhatsApp
          </a>
          <a
            href={getWhatsAppUrl(`Olá! Poderia confirmar a disponibilidade do ${product.nome}, código ${product.codigo}?`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/15 px-4 py-3.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 transition hover:border-gold/60 hover:text-gold"
          >
            Consultar disponibilidade
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
