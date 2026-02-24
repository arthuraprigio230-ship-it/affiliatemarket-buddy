import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mastery_branca.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <img src={logo} alt="Mastery Afiliados" className="h-8" />

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#vantagens" className="text-muted-foreground hover:text-foreground transition-colors">Vantagens</a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">Como Funciona</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-heading" asChild><a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">Login</a></Button>
          <Button size="sm" className="font-heading glow" asChild><a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">Cadastrar</a></Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border/30 px-4 py-4 space-y-3">
          <a href="#vantagens" className="block text-muted-foreground hover:text-foreground">Vantagens</a>
          <a href="#como-funciona" className="block text-muted-foreground hover:text-foreground">Como Funciona</a>
          <a href="#" className="block text-muted-foreground hover:text-foreground">Contato</a>
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" className="font-heading" asChild><a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">Login</a></Button>
            <Button size="sm" className="font-heading glow" asChild><a href="https://app.masteryaf.com" target="_blank" rel="noopener noreferrer">Cadastrar</a></Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
