import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Cadastre-se", description: "Crie sua conta gratuitamente em menos de 2 minutos." },
  { number: "02", title: "Escolha suas ofertas", description: "Selecione as operadoras e produtos que deseja promover." },
  { number: "03", title: "Divulgue", description: "Use nossos links e materiais para divulgar nas suas redes." },
  { number: "04", title: "Lucre", description: "Acompanhe seus resultados e receba suas comissões." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative" id="como-funciona">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comece a lucrar em 4 passos simples.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="text-6xl font-heading font-bold text-primary/70 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
