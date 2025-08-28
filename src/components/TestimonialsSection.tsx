import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    company: "E-commerce Fashion Store",
    role: "Gerente de Atendimento",
    content: "O PortoMicro revolucionou nosso atendimento! Centralizamos WhatsApp, Instagram e chat do site em uma única plataforma. Nossa produtividade aumentou 300% e nunca mais perdemos uma mensagem de cliente.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "João Santos",
    company: "Clínica Médica Bem Estar",
    role: "Administrador",
    content: "A integração com IA é fantástica! Nossos atendentes escrevem de forma mais profissional e os agendamentos automáticos pelo WhatsApp facilitaram muito a vida dos nossos pacientes. Recomendo demais!",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    company: "Agência de Marketing Digital",
    role: "CEO",
    content: "Como agência, precisávamos de uma solução que pudéssemos oferecer aos nossos clientes. O PortoMicro com modelo SaaS nos permite revender a plataforma e gerar uma nova fonte de receita recorrente.",
    rating: 5,
    avatar: "AC"
  },
  {
    name: "Carlos Oliveira",
    company: "Loja de Eletrônicos Tech Plus",
    role: "Proprietário",
    content: "Antes usávamos WhatsApp Web e perdíamos muitas vendas. Agora com os relatórios detalhados conseguimos otimizar nossa equipe e identificar os horários de pico. Resultado: 40% mais vendas!",
    rating: 5,
    avatar: "CO"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que Nossos Usuários Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como empresas de todos os tamanhos estão transformando seu atendimento com o PortoMicro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/60 flex-shrink-0" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground/90 text-sm lg:text-base leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm lg:text-base">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground text-sm lg:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs lg:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-primary text-xs lg:text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Junte-se a centenas de empresas que já confiam no PortoMicro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9/5</span>
            </div>
            <span className="text-muted-foreground text-sm">
              Baseado em mais de 200 avaliações de clientes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;