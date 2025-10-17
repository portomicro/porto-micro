import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 440,00",
    users: "3 Usuários",
    features: [
      "Chatbot",
      "Atendimentos Ilimitados",
      "Mensagens Ilimitadas",
      "Departamentos/Filas",
      "Geração de Protocolo",
      "Chat para Atendimento Humano",
      "Dashboard de Atendimentos",
      "API de Integração",
      "1 Número de WhatsApp",
      "Agendamentos Com Lembretes automático no WhatsApp",
      "Chat Interno",
      "Transcrição e Resumo de Áudio",
      "Agente IA Responde Duvidas no Instagram da Sua Empresa"
    ]
  },
  {
    name: "Plus",
    price: "R$ 510,00",
    users: "7 Usuários",
    popular: true,
    features: [
      "Chatbot",
      "Atendimentos Ilimitados",
      "Mensagens Ilimitadas",
      "Departamentos/Filas",
      "Geração de Protocolo",
      "Chat para Atendimento Humano",
      "Dashboard de Atendimentos",
      "API de Integração",
      "1 Número de WhatsApp",
      "Agendamentos Com Lembretes automático no WhatsApp",
      "Chat Interno",
      "Transcrição e Resumo de Áudio",
      "Agente IA Responde Duvidas no Instagram da Sua Empresa"
    ]
  },
  {
    name: "Super",
    price: "R$ 600,00",
    users: "30 Usuários",
    features: [
      "Chatbot",
      "Atendimentos Ilimitados",
      "Mensagens Ilimitadas",
      "Departamentos/Filas",
      "Geração de Protocolo",
      "Chat para Atendimento Humano",
      "Dashboard de Atendimentos",
      "API de Integração",
      "1 Número de WhatsApp",
      "Agendamentos Com Lembretes automático no WhatsApp",
      "Chat Interno",
      "Transcrição e Resumo de Áudio",
      "Agente IA Responde Duvidas no Instagram da Sua Empresa"
    ]
  },
  {
    name: "Enterprise",
    price: "R$ 800,00",
    users: "50 Usuários",
    category: "Personalizados",
    features: [
      "Chatbot",
      "Atendimentos Ilimitados",
      "Mensagens Ilimitadas",
      "Departamentos/Filas",
      "Geração de Protocolo",
      "Chat para Atendimento Humano",
      "Dashboard de Atendimentos",
      "API de Integração",
      "2 Números de WhatsApp",
      "Agendamentos Com Lembretes automático no WhatsApp",
      "Chat Interno",
      "Transcrição e Resumo de Áudio",
      "Avaliação de Atendimento",
      "Agente IA Responde Duvidas no Instagram da Sua Empresa"
    ]
  },
  {
    name: "Corporation",
    price: "R$ 1.650,00",
    users: "100 Usuários",
    category: "Personalizados",
    premium: true,
    features: [
      "Chatbot",
      "Agente IA Responde Duvidas no Instagram da Sua Empresa",
      "Atendimentos Ilimitados",
      "Mensagens Ilimitadas",
      "Departamentos/Filas",
      "Geração de Protocolo",
      "Chat para Atendimento Humano",
      "Dashboard de Atendimentos",
      "API de Integração",
      "3 Números de WhatsApp",
      "Campanha/Lista de Transmissão",
      "Agendamento Pessoal Inteligente para consultas e reuniões",
      "Faz Agendamento, Consulta Agenda, Cancela Agendamentos Via WhatsApp",
      "Reconhece texto e áudio",
      "Converta áudios em texto no WhatsApp, Chat ou Instagram",
      "Resumo automático da transcrição",
      "Gerencie Agendamentos, Reagendamentos e cancelamentos",
      "Lembretes automático 1 hora antes no WhatsApp"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Planos <span className="gradient-text">Flexíveis</span>
            <br />
            para sua Empresa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidades do seu negócio.
            Todos os planos incluem recursos avançados de automação e IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`card-floating h-full relative ${
              plan.popular ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-transparent' : 
              plan.premium ? 'border-accent/50 bg-gradient-to-b from-accent/5 to-transparent' : 
              'bg-card/80 backdrop-blur-sm'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                </div>
              )}
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Premium
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                {plan.category && (
                  <div className="text-sm text-muted-foreground mb-2">
                    {plan.category}
                  </div>
                )}
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-4">{plan.price}</div>
                <CardDescription className="flex items-center justify-center gap-2 text-base">
                  <Users className="w-4 h-4" />
                  {plan.users}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <a 
                    href="https://wa.me/557399345401?text=Ola%20Estou%20pronto%20para%20registrar%20na%20Plataforma%20%23PortoMicro"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300"
                  >
                    Começar Agora
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <a 
            href="https://www.instagram.com/direct/t/107861590614958/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;