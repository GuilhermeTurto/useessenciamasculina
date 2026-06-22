import { useMemo, useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

const filters = ["Todos", "Azul", "Preto", "Cinza", "Bege", "Premium"] as const;

export function ProductSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleProducts = useMemo(
    () =>
      activeFilter === "Todos"
        ? products
        : products.filter((product) => product.categoria === activeFilter),
    [activeFilter],
  );

  return (
    <section id="ternos" className="bg-[#050a10] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Coleção exclusiva"
            title="Ternos que definem sua presença."
            description="Modelos selecionados para acompanhar os momentos em que cada detalhe importa."
          />
          <div className="flex max-w-full gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap border px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? "border-gold bg-gold text-ink"
                    : "border-white/15 text-white/50 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.codigo} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
