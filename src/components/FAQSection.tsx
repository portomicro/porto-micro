import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que é o PortoMicro?",
      answer: "PortoMicro é uma plataforma omnichannel que centraliza todos os canais de atendimento ao cliente em um só lugar, permitindo gestão unificada de WhatsApp, Facebook, Instagram, email e outros canais."
    },
    {
      question: "Como funciona a integração com WhatsApp Business?",
      answer: "Nossa plataforma se integra nativamente com a WhatsApp Business API, permitindo atendimento profissional, chatbots inteligentes, e gestão completa de conversas em escala."
    },
    {
      question: "Posso usar em múltiplas empresas?",
      answer: "Sim! O PortoMicro suporta múltiplas empresas e departamentos, com permissões personalizadas para cada usuário e relatórios separados por organização."
    },
    {
      question: "Qual o tempo de implementação?",
      answer: "A implementação básica pode ser feita em 24-48 horas. Para personalizações avançadas e integrações específicas, o prazo pode variar de 1 a 2 semanas."
    },
    {
      question: "Oferece suporte técnico?",
      answer: "Sim, oferecemos suporte técnico completo via WhatsApp, email e videochamada. Nossa equipe está disponível para ajudar na configuração e uso da plataforma."
    },
    {
      question: "Como funciona a cobrança?",
      answer: "Trabalhamos com planos mensais baseados no número de usuários e funcionalidades. Oferecemos período de teste gratuito para que você possa experimentar a plataforma."
    },
    {
      question: "É possível personalizar a plataforma?",
      answer: "Sim! A plataforma é altamente personalizável. Podemos adaptar fluxos, integrações, relatórios e interface conforme suas necessidades específicas."
    },
    {
      question: "Os dados ficam seguros?",
      answer: "Absolutamente! Utilizamos criptografia de ponta a ponta, servidores seguros no Brasil e seguimos todas as normas da LGPD para proteção de dados."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground">
            Perguntas Frequentes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre o PortoMicro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;