const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-2xl font-heading font-bold">
              Mastery<span className="text-primary"> Afiliados</span>
            </span>
          </div>

          <nav className="flex gap-8 text-sm text-muted-foreground">
            <a href="#vantagens" className="hover:text-primary transition-colors">Vantagens</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © 2026 Mastery Afiliados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
