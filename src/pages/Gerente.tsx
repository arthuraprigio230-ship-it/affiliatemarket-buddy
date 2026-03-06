import { motion } from "framer-motion";
import { ArrowRight, Network, Users, TrendingUp, DollarSign, Headphones, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Network,
    title: "Gerencie sua Rede",
    description: "Tenha controle total sobre seus afiliados, acompanhe resultados e maximize a performance da sua rede.",
  },
  {
    icon: DollarSign,
    title: "Comissões Diferenciadas",
    description: "Ganhe overrides sobre toda a produção da sua rede com os melhores deals do mercado.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Dashboard exclusivo com métricas de performance individual e coletiva de toda sua rede.",
  },
  {
    icon: Headphones,
    title: "Suporte Prioritário",
    description: "Atendimento VIP com gerente de conta dedicado para você e toda sua rede.",
  },
  {
    icon: TrendingUp,
    title: "Escale sem Limites",
    description: "Infraestrutura robusta para você crescer sua rede sem gargalos operacionais.",
  },
  {
    icon: Users,
    title: "Recrutamento Facilitado",
    description: "Ferramentas e materiais prontos para atrair e converter novos afiliados para sua rede.",
  },
];

const steps = [
  { number: "01", title: "Cadastre-se", description: "Preencha o formulário e nossa equipe entrará em contato." },
  { number: "02", title: "Onboarding", description: "Receba acesso ao painel exclusivo e treinamento completo." },
  { number: "03", title: "Monte sua Rede", description: "Recrute afiliados e comece a gerenciar sua operação." },
  { number: "04", title: "Lucre", description: "Acompanhe seus resultados e receba suas comissões." },
];

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpn-ssUJVmWCKH_YDUaVQbvbBHy9apA1ixeM3PgwnOsLKBQg/viewform?usp=sharing&ouid=117827276254814557796";

const Gerente = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm text-muted-foreground"
          >
            <Network className="h-4 w-4 text-primary" />
            Programa de Gerentes de Rede
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Lidere uma Rede de{" "}
            <span className="text-gradient">Afiliados Campeã</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Seja um Gerente de Rede na Mastery e ganhe comissões sobre toda a produção dos seus afiliados. Ferramentas, suporte e estrutura para você escalar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="text-lg px-10 py-6 glow font-heading font-semibold" asChild>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Quero ser Gerente <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vantagens de ser <span className="text-gradient">Gerente</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo que você precisa para construir e gerenciar uma rede lucrativa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow transition-shadow duration-300">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como <span className="text-gradient">Funciona</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-6 text-center relative"
              >
                <span className="text-4xl font-bold text-primary/20 font-heading">{step.number}</span>
                <h3 className="text-lg font-heading font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto border-primary/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-gradient">Liderar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Cadastre-se agora e comece a construir sua rede de afiliados com a Mastery.
            </p>
            <Button size="lg" className="text-lg px-10 py-6 glow font-heading font-semibold" asChild>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                Cadastrar como Gerente <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gerente;
