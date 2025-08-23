import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingIcons from "./FloatingIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <FloatingIcons />
      
      <div className="container mx-auto text-center z-10 relative">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-card/80 backdrop-blur-sm">
          Multi-Atendimento | Auto-Hospedado
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          A Revolução no{" "}
          <span className="gradient-text">Atendimento</span>
          <br />
          ao Cliente da sua Empresa
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A plataforma <strong>Porto Micro</strong> pode transformar completamente seu atendimento e a gestão de conversas 
          em canais essenciais como WhatsApp, Instagram, Facebook, Webchat e Telegram.
        </p>

        {/* Video Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/-qfe_whsnJM"
              title="Apresentação Porto Micro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            Começar Agora
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;