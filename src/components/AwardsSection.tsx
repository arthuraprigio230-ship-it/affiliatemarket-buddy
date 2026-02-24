import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import placa100k from "@/assets/awards/placa-100k.webp";
import placa500k from "@/assets/awards/placa-500k.webp";
import placa1m from "@/assets/awards/placa-1m.webp";
import pulseira from "@/assets/awards/pulseira.jpg";

const awards = [
  {
    image: placa100k,
    title: "Placa 100K",
    description: "Ao atingir R$ 100.000 faturados, você recebe a placa de reconhecimento Silver.",
    tier: "Silver",
  },
  {
    image: placa500k,
    title: "Placa 500K",
    description: "Ao atingir R$ 500.000 faturados, você recebe a placa de reconhecimento Gold.",
    tier: "Gold",
  },
  {
    image: placa1m,
    title: "Placa 1M",
    description: "Ao atingir R$ 1.000.000 faturados, você recebe a placa de reconhecimento Diamond.",
    tier: "Diamond",
  },
];

const AwardsSection = () => {
  return (
    <section id="premios" className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conquistas por <span className="text-gradient">Resultado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Na Mastery, reconhecemos os afiliados que mais se destacam. Quanto mais você fatura, maiores são suas premiações.
          </p>
        </motion.div>

        {/* Awards Grid - 2 cols mobile (includes bracelet), 4 cols desktop (plaques only, bracelet below) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-0 md:mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={award.tier}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group glass rounded-2xl p-4 md:p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 md:mb-6 aspect-[3/4] bg-background/50">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary mb-2 md:mb-3">
                {award.tier}
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-2">{award.title}</h3>
              <p className="hidden md:block text-muted-foreground text-sm">{award.description}</p>
            </motion.div>
          ))}

          {/* Bracelet card - inside grid on mobile, hidden on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="md:hidden group glass rounded-2xl p-4 text-center hover:border-primary/30 transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-background/50">
              <img
                src={pulseira}
                alt="Pulseira Mastery exclusiva"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary mb-2">
              Exclusivo
            </span>
            <h3 className="text-lg font-bold mb-2">Pulseira Mastery</h3>
          </motion.div>
        </div>

        {/* Bracelet highlight - desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block glass rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-square md:aspect-auto overflow-hidden">
              <img
                src={pulseira}
                alt="Pulseira Mastery exclusiva"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-4 w-fit">
                <Gift className="h-4 w-4 text-primary" />
                Brinde Exclusivo
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Pulseira <span className="text-gradient">Mastery</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Todo afiliado que alcança suas metas recebe a pulseira exclusiva Mastery como símbolo de conquista e pertencimento à comunidade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;