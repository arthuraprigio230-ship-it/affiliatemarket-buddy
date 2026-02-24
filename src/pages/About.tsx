import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, BarChart3, DollarSign, Users, Target, Briefcase, TrendingUp, CheckCircle2, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 180000, suffix: "+", label: "Registros", prefix: "" },
  { value: 95000, suffix: "+", label: "FTDs", prefix: "" },
  { value: 86000, suffix: "+", label: "CPAs", prefix: "" },
  { value: 8500000, suffix: "+", label: "Pagos em Comissões", prefix: "R$ " },
];

const features = [
  { icon: TrendingUp, title: "Estrutura profissional e escalável", description: "Plataforma robusta projetada para operações de qualquer tamanho." },
  { icon: Shield, title: "Monitoramento antifraude avançado", description: "Proteção inteligente para garantir a qualidade do seu tráfego." },
  { icon: DollarSign, title: "Pagamentos estruturados", description: "Receba suas comissões no prazo, com total transparência." },
  { icon: Users, title: "Gestão estratégica de afiliados", description: "Suporte dedicado e gerência personalizada para cada parceiro." },
  { icon: CheckCircle2, title: "Compliance e segurança jurídica", description: "Operação em conformidade com as regulamentações do mercado." },
  { icon: UsersRound, title: "Comunidade Exclusiva", description: "Networking com os melhores afiliados e acesso a estratégias validadas." },
];
const steps = [
  { number: "01", title: "Cadastro na plataforma", description: "Crie sua conta gratuitamente em minutos." },
  { number: "02", title: "Receba seu link exclusivo", description: "Links rastreáveis e personalizados para cada operador." },
  { number: "03", title: "Gere registros e FTDs", description: "Use sua audiência e tráfego para converter." },
  { number: "04", title: "Receba suas comissões", description: "Pagamentos rápidos e recorrentes." },
];

const audiences = [
  { icon: Target, label: "Afiliados de tráfego pago" },
  { icon: MessageCircle, label: "Donos de grupos Telegram/WhatsApp" },
  { icon: BarChart3, label: "Media buyers" },
  { icon: Briefcase, label: "Operadores de performance" },
];

function formatNumber(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(".0", "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "k";
  return n.toString();
}

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 2200);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6 md:p-8"
    >
      <span className="block text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-2 whitespace-nowrap">
        {stat.prefix}{formatNumber(count)}{stat.suffix}
      </span>
      <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{stat.label}</span>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_80%_60%/0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
          >
            Mastery – A Estrutura Profissional para Afiliados de{" "}
            <span className="text-gradient">Alta Performance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Mais de 8.5 milhões pagos em comissões. Escale sua operação com segurança, compliance e estrutura.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 py-6 glow font-heading font-semibold" asChild>
              <a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">
                Quero fazer parte da Mastery <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-heading font-semibold" asChild>
              <a href="https://api.whatsapp.com/send?phone=5511947714273&text=Vim%20pelo%20site%20e%20gostaria%20de%20me%20tornar%20um%20afiliado%20da%20Mastery." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Falar com o time
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/30">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a Mastery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Por que escolher a <span className="text-gradient">Mastery?</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:glow transition-shadow duration-300">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Como <span className="text-gradient">Funciona</span>
            </h2>
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
                <div className="text-6xl font-heading font-bold text-primary/15 mb-4">{step.number}</div>
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

      {/* Para quem é */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Para quem é a <span className="text-gradient">Mastery?</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-heading font-semibold">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridade */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Uma estrutura <span className="text-gradient">consolidada</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                A Mastery não é apenas uma plataforma — é uma estrutura consolidada com histórico real de resultados e foco em crescimento sustentável. Nosso compromisso é oferecer as melhores condições, ferramentas e suporte para que cada afiliado alcance seu potencial máximo no mercado de iGaming.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl glass p-8 sm:p-12 md:p-20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
                Se você quer operar em nível profissional,{" "}
                <span className="text-gradient">seu lugar é na Mastery.</span>
              </h2>
              <Button size="lg" className="text-lg px-10 py-6 glow font-heading font-semibold" asChild>
                <a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">
                  Quero entrar agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
