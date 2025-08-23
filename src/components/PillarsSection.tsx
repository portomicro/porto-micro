import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import integrationIcon from "@/assets/integration-icon.png";
import centralizationIcon from "@/assets/centralization-icon.png";
import reportsIcon from "@/assets/reports-icon.png";
import historyIcon from "@/assets/history-icon.png";
import scalabilityIcon from "@/assets/scalability-icon.png";

const pillars = [
  {
    title: "Integração e Automação Total",
    description: "API completa e amigável que permite controle total para manipular contatos, criar mensagens e gerenciar conversas. Integre com n8n e outras plataformas de automação.",
    icon: integrationIcon,
    features: ["API REST completa", "Webhooks em tempo real", "Integração com n8n", "Fluxos personalizados"]
  },
  {
    title: "Centralização do Atendimento",
    description: "O cliente é da empresa, não do vendedor. Qualquer membro da equipe pode assumir conversas instantaneamente, com acesso completo ao histórico.",
    icon: centralizationIcon,
    features: ["Fim das esperas", "Continuidade total", "Histórico unificado", "Equipe colaborativa"]
  },
  {
    title: "Relatórios e Dados Estratégicos",
    description: "Métricas essenciais para otimizar sua operação: clientes atendidos, tempo de resposta, taxa de satisfação e performance individual dos agentes.",
    icon: reportsIcon,
    features: ["Dashboard em tempo real", "Métricas de performance", "Taxa de conversão", "Análise de satisfação"]
  },
  {
    title: "Histórico Unificado e Personalização",
    description: "Acesso instantâneo ao histórico completo de interações. Tags e atributos customizáveis para segmentar e entender cada cliente.",
    icon: historyIcon,
    features: ["Histórico completo", "Tags personalizadas", "Segmentação avançada", "Atendimento contextual"]
  },
  {
    title: "Escalabilidade e Eficiência",
    description: "Projetado para crescer com seu negócio. Combine automação com IA e agentes humanos de forma fluida, garantindo agilidade em larga escala.",
    icon: scalabilityIcon,
    features: ["Crescimento ilimitado", "IA + Humano", "Auto-escalabilidade", "Performance otimizada"]
  }
];

const PillarsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Os <span className="gradient-text">5 Pilares</span> para um
            <br />
            Atendimento Excepcional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra os motivos fundamentais pelos quais o Porto Micro se destaca como 
            a ferramenta definitiva para a gestão de comunicação da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="card-floating bg-card/80 backdrop-blur-sm border-border/50 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src={pillar.icon} alt={pillar.title} className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;