import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--gradient-hero)' }}>
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto mb-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <AlertTriangle className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        
        <Button asChild variant="hero" size="lg" className="px-8">
          <a href="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Voltar ao Início
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
