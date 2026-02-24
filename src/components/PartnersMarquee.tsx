import sportingbet from "@/assets/partners/sportingbet.png";
import geralbet from "@/assets/partners/geralbet.png";
import superbet from "@/assets/partners/superbet.png";
import betmgm from "@/assets/partners/betmgm.webp";
import stakes from "@/assets/partners/stakes.svg";
import spinbookie from "@/assets/partners/spinbookie.svg";
import jonbet from "@/assets/partners/jonbet.png";
import blaze from "@/assets/partners/blaze.png";
import betano from "@/assets/partners/betano.avif";
import zekabet from "@/assets/partners/zekabet.svg";
import verajohn from "@/assets/partners/vera-and-john.svg";

const partners = [
  { name: "Sportingbet", logo: sportingbet },
  { name: "Geralbet", logo: geralbet },
  { name: "Superbet", logo: superbet },
  { name: "BetMGM", logo: betmgm },
  { name: "Stakes", logo: stakes },
  { name: "SpinBookie", logo: spinbookie },
  { name: "JonBet", logo: jonbet },
  { name: "Blaze", logo: blaze },
  { name: "Betano", logo: betano },
  { name: "Zekabet", logo: zekabet },
  { name: "Vera&John", logo: verajohn },
];

const PartnersMarquee = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm font-heading uppercase tracking-widest">
          Parceiros e Operadoras
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="mx-8 flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
