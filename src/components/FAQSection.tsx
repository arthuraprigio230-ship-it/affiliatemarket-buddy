import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o programa de afiliados Mastery?",
    answer:
      "A Mastery é uma plataforma de afiliados focada no mercado de iGaming. Conectamos afiliados às maiores operadoras do mercado, oferecendo comissões competitivas, dashboard completo e suporte dedicado. Você recebe um link exclusivo para divulgar e cada jogador que se registra através do seu link fica vinculado à sua conta e gera comissão conforme o modelo contratado (CPA, RevShare ou Híbrido).",
  },
  {
    question: "O que é considerado conversão saudável?",
    answer:
      "A média de mercado costuma variar entre 15% e 35%. Conversões muito acima desse padrão podem gerar análise manual para garantir conformidade.",
  },
  {
    question: "Posso incentivar depósito oferecendo dinheiro ao jogador?",
    answer:
      "Pode variar de acordo com sua estratégia, se o seu lead nunca mais voltar a Operadora pode classificar sua operação como fraude. E deixamos claro que qualquer forma de incentivo financeiro direto ou indireto pode gerar bloqueio na operação.",
  },
  {
    question: "Posso operar com grupo fechado (amigos, conhecidos)?",
    answer:
      "Não é recomendado. Perfis concentrados e coordenados aumentam risco de auditoria e bloqueio.",
  },
  {
    question: "O que acontece se a operadora identificar fraude?",
    answer:
      "Dependendo da gravidade: Suspensão temporária; Bloqueio de comissão; Encerramento do contrato; Cancelamento retroativo de valores.",
  },
  {
    question: "Como melhorar minha qualidade de tráfego?",
    answer:
      "Trabalhar com público real; Evitar promessa de lucro garantido; Não incentivar saque rápido; Focar em retenção; Evitar tráfego comprado não qualificado.",
  },
  {
    question: "Como funciona o pagamento das comissões?",
    answer:
      "As comissões são pagas via PIX ou Cripto a depender do seu acordo. Você acompanha todos os seus ganhos em tempo real pelo nosso dashboard. (Sua comissão está sujeita a impostos aplicáveis)",
  },
  {
    question: "Como funcionam as premiações por resultado?",
    answer:
      "Ao atingir marcos de faturamento ou de resultado, você recebe premiações exclusivas de reconhecimento e brindes. É a nossa forma de celebrar o seu sucesso.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
