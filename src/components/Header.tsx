import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">PM</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Porto Micro</h1>
            <p className="text-xs text-muted-foreground">Multi-Atendimento</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solucoes" className="text-muted-foreground hover:text-foreground transition-colors">
            Soluções
          </a>
          <a href="https://portozaap-xfzk02y.gamma.site/planos" className="text-muted-foreground hover:text-foreground transition-colors">Valores Planos </a>
          <a href="https://app.portomicro.com.br/hc/Ajuda/pt_BR" className="text-muted-foreground hover:text-foreground transition-colors">
            Central de Ajuda
          </a>
          <a href="#suporte" className="text-muted-foreground hover:text-foreground transition-colors">
            Suporte
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild variant="outline" size="sm">
            <a href="https://app.portomicro.com.br" target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="https://p.portomicro.com.br/authentication/register" target="_blank" rel="noopener noreferrer">
              Começar Agora
            </a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;