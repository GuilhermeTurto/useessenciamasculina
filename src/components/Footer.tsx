import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { getWhatsAppUrl } from "../utils/whatsapp";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-[#03070b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
            Alfaiataria masculina contemporânea para quem entende que presença não se
            improvisa.
          </p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Navegação
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-white/50">
            <a className="transition hover:text-gold" href="#inicio">Início</a>
            <a className="transition hover:text-gold" href="#ternos">Ternos</a>
            <a className="transition hover:text-gold" href="#sobre">Sobre</a>
          </div>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">
            Atendimento
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-white/50">
            <a className="flex items-center gap-3 transition hover:text-gold" href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={16} /> @essenciamasculina
            </a>
            <a className="flex items-center gap-3 transition hover:text-gold" href={getWhatsAppUrl("Olá! Gostaria de falar com a Essência Masculina.")} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> (11) 99999-9999
            </a>
            <a className="flex items-center gap-3 transition hover:text-gold" href="mailto:contato@essenciamasculina.com.br">
              <Mail size={16} /> contato@essenciamasculina.com.br
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[9px] uppercase tracking-[0.2em] text-white/25">
        © {new Date().getFullYear()} Essência Masculina. Todos os direitos reservados.
      </div>
    </footer>
  );
}
