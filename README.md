# Joel Fonseca — Portfólio (React)

Versão **React + TypeScript** do portfólio, construída em **Vite** com **Framer Motion** e **Lenis** (smooth scroll).

> A versão estática original está em `../Portfolio`.

## Stack

- **React 19 + TypeScript** (Vite 6)
- **Framer Motion** — animações de reveal, stagger, layout, tilt 3D, carousel e modais
- **Lenis** — smooth scroll no page inteiro
- Design system próprio em CSS (`src/index.css`) com tema **dark/light** persistido

## Funcionalidades

- Scroll suave com Lenis + barra de progresso de scroll
- Navbar com scrollspy (pill animada com `layoutId`) e deteção de secção ativa
- Hero com typewriter, contadores animados, parallax das orbs e chips flutuantes
- Marquee infinito de tecnologias
- Timeline de experiência com linha animada
- **Cards em destaque**: DoutorVida (terminal mono animado + stats) e Bora (mockup de telemóvel com carousel de screenshots reais + vídeo em modal)
- Grelha de 15 projetos com **filtros animados** (AnimatePresence + layout) e **tilt 3D** com glare a seguir o rato
- Modal de vídeo com play/pause automático
- Back-to-top, tema dark/light, responsivo e `prefers-reduced-motion`

## Correr local

```bash
npm install
npm run dev        # desenvolvimento (Vite)
npm run build      # typecheck + produção em dist/
npm run preview    # pré-visualiza produção
```

## Deploy

1. `npm run build`
2. Envia a pasta `dist/` (Vercel → framework **Vite**; GitHub Pages → subpath também funciona porque `base` é `./`).

Os assets (`fotos`, `video`, `CV`) ficam em `public/assets/` e são resolvidos respeitando o `base` (`src/lib/assets.ts`).

## Estrutura

```
src/
├── App.tsx                     # composição + progress de scroll + back-to-top
├── index.css                   # design system completo
├── data.ts                     # projetos, skills, experiência, certificados
├── hooks.tsx                   # typewriter, theme, count-up, tilt
├── lib/
│   ├── assets.ts               # resolução de assets (subpath-safe)
│   └── scroll.ts               # singleton Lenis + scrollToId/scrollTop
└── components/
    ├── Navbar / Hero / Marquee / About / Skills / Experience
    ├── Projects (+ ProjectCard, filtros)
    ├── FeaturedCards           # DoutorVida + Bora (carousel)
    ├── VideoModal / Certifications / Contact / Footer
    ├── Reveal.tsx              # SectionHead + Reveal helpers
    └── icons.tsx               # conjunto de ícones SVG
```