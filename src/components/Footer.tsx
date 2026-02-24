import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 text-center md:text-left md:flex-row md:justify-between md:items-start">
          <div>
            <span className="text-2xl font-heading font-bold">
              Mastery<span className="text-primary"> Afiliados</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 text-sm text-muted-foreground">
            <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <span className="text-foreground font-semibold text-xs uppercase tracking-wider mb-1 sm:hidden">Navegação</span>
              <a href="#vantagens" className="hover:text-primary transition-colors">Vantagens</a>
              <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
              <a href="#" className="hover:text-primary transition-colors">Contato</a>
            </nav>

            <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <span className="text-foreground font-semibold text-xs uppercase tracking-wider mb-1 sm:hidden">Legal</span>
              <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
              <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
              <Link to="/compliance" className="hover:text-primary transition-colors">Compliance</Link>
            </nav>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8 pt-6 border-t border-border/20">
          © 2026 Mastery Afiliados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
