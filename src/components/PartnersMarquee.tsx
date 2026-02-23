const partners = [
  "Betano", "Bet365", "Sportingbet", "Betfair", "1xBet",
  "Rivalo", "KTO", "Novibet", "Betsul", "Betsat",
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
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center min-w-[160px]"
            >
              <span className="text-2xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
