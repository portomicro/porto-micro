import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between w-full">
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
          <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </a>
          <a href="#planos" className="text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
          <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-6 mt-8">
              <nav className="flex flex-col space-y-4">
                <a href="#recursos" className="text-lg text-foreground hover:text-primary transition-colors">
                  Recursos
                </a>
                <a href="#planos" className="text-lg text-foreground hover:text-primary transition-colors">
                  Planos
                </a>
                <a href="#depoimentos" className="text-lg text-foreground hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </nav>
              
              <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://app.portomicro.com.br" target="_blank" rel="noopener noreferrer">
                    Entrar
                  </a>
                </Button>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://p.portomicro.com.br/authentication/register" target="_blank" rel="noopener noreferrer">
                    Começar Agora
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;