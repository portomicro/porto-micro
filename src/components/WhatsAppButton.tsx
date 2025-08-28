import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 rounded-full w-14 h-14 p-0 glow-effect shadow-lg"
    >
      <a
        href="https://wa.me/5573988247095?text=Ol%C3%A1%21%20Estou%20pronto%20para%20transformar%20meu%20atendimento%20com%20a%20plataforma%20%23PortoMicro%20%F0%9F%9A%80%20Gostaria%20de%20saber%20mais."
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