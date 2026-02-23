import { motion } from "framer-motion";
import { DollarSign, BarChart3, Headphones, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Comissões Agressivas",
    description: "As melhores taxas do mercado com pagamento rápido e transparente.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Completo",
    description: "Acompanhe seus resultados em tempo real com métricas detalhadas.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Gerente pessoal e suporte 24/7 para maximizar seus resultados.",
  },
  {
    icon: Zap,
    title: "Ferramentas de Conversão",
    description: "Links inteligentes, deeplinks e materiais criativos otimizados.",
  },
  {
    icon: Shield,
    title: "Pagamento Garantido",
    description: "Receba suas comissões no prazo, sem surpresas ou atrasos.",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Networking com os melhores afiliados e acesso a estratégias validadas.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24" id="vantagens">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher a <span className="text-gradient">Mastery?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa para escalar como afiliado profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow transition-shadow duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
