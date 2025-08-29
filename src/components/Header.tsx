import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Porto Micro</h1>
              <p className="text-xs text-muted-foreground">Multi-Atendimento</p>
            </div>
          </div>
          <Button asChild variant="outline" size="sm" className="hidden md:flex">
            <a href="https://app.portomicro.com.br" target="_blank" rel="noopener noreferrer">
              Entrar
            </a>
          </Button>
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
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="#ajuda" className="text-muted-foreground hover:text-foreground transition-colors">
            Central de Ajuda
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
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
          <Button asChild variant="secondary" size="sm">
            <a href="#demonstracao" className="text-secondary-foreground">
              Agendar Demonstração
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-card z-50 transform transition-transform duration-300 md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PM</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Porto Micro</h2>
                <p className="text-xs text-muted-foreground">Multi-Atendimento</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex-1 p-6">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#recursos" 
                className="text-lg text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#planos" 
                className="text-lg text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planos
              </a>
              <a 
                href="#depoimentos" 
                className="text-lg text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-lg text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#ajuda" 
                className="text-lg text-foreground hover:text-primary transition-colors py-3 border-b border-border/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                Central de Ajuda
              </a>
            </nav>
          </div>
          
          <div className="p-6 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Button asChild variant="outline" className="w-full h-12 text-base">
                <a href="https://app.portomicro.com.br" target="_blank" rel="noopener noreferrer">
                  Entrar
                </a>
              </Button>
              <Button asChild className="w-full h-12 text-base bg-primary hover:bg-primary/90">
                <a href="https://p.portomicro.com.br/authentication/register" target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full h-12 text-base">
                <a href="#demonstracao">
                  Agendar Demonstração
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;