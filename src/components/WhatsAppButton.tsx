import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 rounded-full w-14 h-14 p-0 glow-effect shadow-lg"
    >
      <a
        href="https://wa.me/5573988247095?text=Ola%20Estou%20Pronto%20para%20transformar%20Meu%20atendimento%20Com%20a%20Plataforma%20%23PortoMicro%20%2C%20Gostaria%20de%20Saber%20Mais."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;