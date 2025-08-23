import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Calendar, Clock, Users, MessageSquare, Headphones } from "lucide-react";

const features = [
  {
    title: "Transcrição de Áudio para Texto",
    description: "Converta áudios em texto diretamente no WhatsApp, Chat ou Instagram – de forma rápida e precisa!",
    icon: Volume2,
    highlights: [
      "Converta Áudios em Texto",
      "Resumo Automático",
      "Experiência Inclusiva"
    ],
    details: "Resumo automático da transcrição disponível para maior praticidade. Uma experiência inclusiva para clientes com deficiência auditiva e visual! 💙♿✨"
  },
  {
    title: "Agendamento Inteligente no WhatsApp",
    description: "Reagendamentos e cancelamentos de reuniões, compromissos e serviços, presenciais ou por videochamada.",
    icon: Calendar,
    highlights: [
      "Gerencie Agendamentos",
      "Lembretes Automáticos",
      "Avisos Automáticos"
    ],
    details: "Envie avisos automáticos diretamente no WhatsApp. Lembretes automático dos Agendados, 1 hora antes. Direto no WhatsApp, do Cliente e do Profissional Agendados."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Recursos <span className="gradient-text">Inovadores</span>
            <br />
            para Seu Atendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra funcionalidades exclusivas que tornam o Porto Micro a escolha ideal 
            para modernizar e otimizar a comunicação da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="card-floating bg-card/80 backdrop-blur-sm border-border/50 h-full">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{highlight}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 backdrop-blur-sm border border-border/50">
            <div className="flex items-center gap-2">
              <Headphones className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Acessibilidade</span>
            </div>
            <div className="w-px h-8 bg-border/50"></div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-accent" />
              <span className="font-semibold text-foreground">Automação</span>
            </div>
            <div className="w-px h-8 bg-border/50"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Eficiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;