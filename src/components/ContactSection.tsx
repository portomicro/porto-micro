import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Mail, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para <span className="gradient-text">Revolucionar</span>
            <br />
            seu Atendimento?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre como o Porto Micro pode ser implementado na sua operação 
            e transformar completamente a experiência dos seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="card-floating bg-card/80 backdrop-blur-sm border-border/50 text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>Acesse o App</CardTitle>
              <CardDescription>
                Experimente nossa plataforma completa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="https://app.portomicro.com.br" target="_blank" rel="noopener noreferrer">
                  app.portomicro.com.br
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-floating bg-card/80 backdrop-blur-sm border-border/50 text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <CardTitle>Entre em Contato</CardTitle>
              <CardDescription>
                Fale diretamente com nossa equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:contato@portomicro.com.br">
                  contato@portomicro.com.br
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-floating bg-card/80 backdrop-blur-sm border-border/50 text-center">
            <CardHeader>
              <CardTitle>Siga-nos</CardTitle>
              <CardDescription>
                Acompanhe nossas novidades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.instagram.com/portomicro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href="https://www.facebook.com/portomicro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Resumo das Vantagens do Porto Micro</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Integração Total</h4>
                  <p className="text-sm text-muted-foreground">Liberdade para conectar suas ferramentas via API</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Centralizado</h4>
                  <p className="text-sm text-muted-foreground">Conversas organizadas por setores e acessíveis por toda equipe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Relatórios Completos</h4>
                  <p className="text-sm text-muted-foreground">Dados claros para uma gestão otimizada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Personalização Eficiente</h4>
                  <p className="text-sm text-muted-foreground">Histórico completo para suporte único e proativo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Escalabilidade Garantida</h4>
                  <p className="text-sm text-muted-foreground">A plataforma cresce junto com seu negócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;