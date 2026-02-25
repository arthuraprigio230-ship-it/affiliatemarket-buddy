# Mastery Afiliados - Landing Page

Landing page institucional da plataforma Mastery Afiliados.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Desenvolvimento

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de producao
npm run build

# Testes
npm run test
```

## Estrutura

```
src/
├── components/     # Componentes React
│   ├── ui/         # shadcn/ui components
│   └── ...         # Componentes da landing
├── pages/          # Paginas da aplicacao
├── assets/         # Imagens e assets
├── hooks/          # Custom hooks
└── lib/            # Utilitarios
```

## Paginas

| Rota | Descricao |
|------|-----------|
| `/` | Home (Hero, Features, Awards, FAQ) |
| `/about` | Sobre a empresa |
| `/terms` | Termos de uso |
| `/privacy` | Politica de privacidade |
| `/compliance` | Conformidade |
