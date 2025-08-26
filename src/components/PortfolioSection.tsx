import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Zap, Users, TrendingUp, Shield, Headphones } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Portfólio <span className="gradient-text">PortoMicro</span>
            <br />
            Central de Atendimento Omnichannel Inteligente
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Uma plataforma completa que centraliza todas as suas conversas com clientes em um único painel. 
            Transforme a comunicação e o atendimento do seu negócio com tecnologia avançada e automação inteligente.
          </p>
        </div>

        {/* Resumo Executivo */}
        <Card className="card-floating mb-12 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-primary" />
              Resumo Executivo
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              O PortoMicro é uma poderosa plataforma de atendimento omnichannel que centraliza todas as suas 
              conversas com clientes em um único painel. Baseado em tecnologia robusta, o PortoMicro integra 
              canais como WhatsApp, Instagram, chat no site, e-mail e mais, permitindo que sua equipe gerencie 
              interações de forma eficiente, profissional e organizada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com recursos de automação, inteligência artificial e relatórios detalhados, o PortoMicro não é 
              apenas uma ferramenta de chat, mas um centro de comando para o relacionamento com o cliente.
            </p>
          </CardContent>
        </Card>

        {/* O Problema e A Solução */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="card-floating bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-xl text-destructive">
                O Problema: Comunicação Descentralizada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                No mundo digital de hoje, seus clientes tentam contato por todos os lados: WhatsApp, direct do Instagram, 
                formulário no site, e-mail... Gerenciar tudo isso é um desafio. Mensagens se perdem, respostas demoram, 
                o atendimento fica inconsistente e, como resultado, vendas e a satisfação do cliente são prejudicadas.
              </p>
            </CardContent>
          </Card>

          <Card className="card-floating bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                A Solução: PortoMicro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Imagine ter todas essas conversas, de todos esses canais, em uma única tela, organizada e acessível 
                para toda a sua equipe. Isso é o PortoMicro. Nós unificamos seus canais de comunicação para uma 
                experiência completa e profissional.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefícios Principais */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            O que o PortoMicro faz pela sua empresa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Centralizar o Atendimento",
                description: "Responda a mensagens do WhatsApp, site e redes sociais sem trocar de janela."
              },
              {
                icon: Zap,
                title: "Potencializar sua Equipe",
                description: "Com IA integrada, sua equipe escreve melhor, corrige erros e ajusta o tom da conversa."
              },
              {
                icon: Users,
                title: "Automatizar Tarefas Repetitivas",
                description: "Crie respostas rápidas e encaminhe conversas automaticamente para o setor correto."
              },
              {
                icon: TrendingUp,
                title: "Gestão Completa",
                description: "Acompanhe desempenho, horários de pico e gerencie contatos como um CRM."
              }
            ].map((benefit, index) => (
              <Card key={index} className="card-floating bg-card/60 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vantagens */}
        <Card className="card-floating bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Por que escolher o PortoMicro?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Centralização Total: Chega de pular entre abas e aplicativos",
                "Eficiência Operacional: Automatize trabalho repetitivo",
                "Comunicação Profissional: IA eleva o padrão do atendimento",
                "Nunca Mais Perca uma Venda: Leads organizados e centralizados",
                "Visão 360° do Cliente: Histórico completo para atendimento personalizado",
                "Escalabilidade: Cresce com seu negócio, permite até revenda"
              ].map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm leading-relaxed font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">
                Pronto para transformar seu atendimento?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Vamos conversar sobre como o PortoMicro pode se adaptar perfeitamente às necessidades do seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5573988247095"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  WhatsApp: (73) 98824-7095
                </a>
                <a 
                  href="https://p.portomicro.com.br/appointly/appointments_public/form?col=col-md-8+col-md-offset-2"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Agendar Demonstração Gratuita
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;