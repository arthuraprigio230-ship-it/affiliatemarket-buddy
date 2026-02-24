import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl glass p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para <span className="text-gradient">Lucrar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Junte-se a milhares de afiliados que já estão faturando com a Mastery. Cadastro rápido, gratuito e sem burocracia.
            </p>
            <Button size="lg" className="text-lg px-10 py-6 glow font-heading font-semibold" asChild>
              <a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">Começar Gratuitamente <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
