import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "180k+", label: "Registros" },
  { value: "95k+", label: "FTDs" },
  { value: "86k+", label: "CPAs" },
  { value: "R$ 8.5M+", label: "Pagos em Comissões" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Sobre <span className="text-gradient">Nós</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Somos a Mastery Afiliados — uma plataforma líder em marketing de afiliados no mercado de iGaming, conectando afiliados às melhores oportunidades do setor.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <span className="block text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 space-y-6 text-muted-foreground leading-relaxed"
          >
            <h2 className="text-2xl font-heading font-semibold text-foreground">
              Nossa Missão
            </h2>
            <p>
              Nascemos com o objetivo de simplificar e potencializar os resultados de afiliados no mercado de apostas esportivas e cassino online. Com tecnologia de ponta e um time dedicado, entregamos as melhores ferramentas para que nossos parceiros alcancem resultados extraordinários.
            </p>
            <p>
              Com mais de <strong className="text-foreground">180 mil registros</strong>, <strong className="text-foreground">95 mil FTDs</strong> e <strong className="text-foreground">R$ 8.5 milhões pagos em comissões</strong>, nossa trajetória comprova o compromisso com a transparência, confiança e performance.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-foreground pt-4">
              Por Que a Mastery?
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Dashboard completo com métricas em tempo real</li>
              <li>Pagamentos rápidos e transparentes</li>
              <li>Suporte dedicado e personalizado</li>
              <li>Parceria com as maiores marcas do mercado</li>
            </ul>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
