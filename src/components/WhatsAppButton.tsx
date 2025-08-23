import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 rounded-full w-14 h-14 p-0 glow-effect shadow-lg"
    >
      <a
        href="https://wa.me/5511999999999"
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