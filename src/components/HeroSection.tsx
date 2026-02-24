import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardScreenshot from "@/assets/dashboard-screenshot.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Plataforma #1 para afiliados</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Transforme Cliques em{" "}
            <span className="text-gradient">Comissões Reais</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A Mastery Afiliados conecta você às melhores operadoras do mercado com as maiores comissões, suporte dedicado e ferramentas que realmente convertem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 py-6 glow font-heading font-semibold" asChild>
              <a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">Comece Agora <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-heading font-semibold">
              Saiba Mais
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Purple glow accents */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Notebook frame */}
          <div className="relative mx-auto">
            {/* Screen */}
            <div className="relative rounded-t-2xl overflow-hidden border-2 border-primary/30 bg-[#1a1a2e]">
              <img
                src={dashboardScreenshot}
                alt="Painel de controle Mastery Afiliados"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Notebook base */}
            <div className="relative h-4 bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] rounded-b-xl mx-[-2%] border-x-2 border-b-2 border-primary/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary/30 rounded-b-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
