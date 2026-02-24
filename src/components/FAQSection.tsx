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
      "A Mastery é uma plataforma de afiliados focada no mercado de iGaming. Conectamos afiliados às maiores operadoras do mercado, oferecendo comissões competitivas, dashboard completo e suporte dedicado.",
  },
  {
    question: "Preciso pagar algo para me cadastrar?",
    answer:
      "Não! O cadastro é 100% gratuito. Você não paga nada para se tornar afiliado e já pode começar a gerar receita imediatamente após a aprovação.",
  },
  {
    question: "Como funciona o pagamento das comissões?",
    answer:
      "As comissões são pagas mensalmente via PIX ou transferência bancária. Você acompanha todos os seus ganhos em tempo real pelo nosso dashboard.",
  },
  {
    question: "Quais operadoras estão disponíveis?",
    answer:
      "Trabalhamos com as maiores operadoras do mercado, incluindo Betano, Sportingbet, SuperBet, Jonbet, Blaze, entre outras. Novas parcerias são adicionadas frequentemente.",
  },
  {
    question: "Preciso ter experiência com marketing digital?",
    answer:
      "Não é necessário. Oferecemos treinamentos, materiais de apoio e suporte para que você possa começar mesmo sem experiência prévia no mercado.",
  },
  {
    question: "Como funcionam as premiações por resultado?",
    answer:
      "Ao atingir marcos de faturamento (100K, 500K, 1M), você recebe placas exclusivas de reconhecimento e brindes como a pulseira Mastery. É a nossa forma de celebrar o seu sucesso.",
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
