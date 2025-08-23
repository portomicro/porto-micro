import { MessageCircle, Instagram, Facebook, Send } from "lucide-react";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* WhatsApp */}
      <div className="floating-icon top-1/4 left-1/4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center glow-effect">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
      
      {/* Instagram */}
      <div className="floating-icon top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center glow-effect">
        <Instagram className="w-8 h-8 text-white" />
      </div>
      
      {/* Facebook */}
      <div className="floating-icon bottom-1/3 left-1/5 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center glow-effect">
        <Facebook className="w-8 h-8 text-white" />
      </div>
      
      {/* Telegram */}
      <div className="floating-icon bottom-1/4 right-1/3 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center glow-effect">
        <Send className="w-8 h-8 text-white" />
      </div>

      {/* Additional floating elements */}
      <div className="floating-icon top-1/2 left-1/6 w-4 h-4 bg-accent/60 rounded-full"></div>
      <div className="floating-icon top-2/3 right-1/5 w-6 h-6 bg-primary/40 rounded-full"></div>
      <div className="floating-icon bottom-1/2 right-1/6 w-3 h-3 bg-purple-400/50 rounded-full"></div>
    </div>
  );
};

export default FloatingIcons;