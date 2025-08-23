import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
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
          <a href="#valores" className="text-muted-foreground hover:text-foreground transition-colors">
            Valores
          </a>
          <a href="#central-ajuda" className="text-muted-foreground hover:text-foreground transition-colors">
            Central de Ajuda
          </a>
          <a href="#suporte" className="text-muted-foreground hover:text-foreground transition-colors">
            Suporte
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Entrar
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;