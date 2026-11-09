# Barbearia Sr.N Fortaleza

Site institucional em React 19, Vite, TypeScript e Tailwind CSS 4. Estrutura compatível com Shadcn UI (`components.json`, alias `@/`, componentes em `/components/ui`), Framer Motion e Lenis.

## Desenvolvimento

Requer Node.js 22 ou 24 e npm.

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

```sh
npm run build
npm run preview
```

O CSS principal está em `styles.css`. `components/ui/zoom-parallax.tsx` é uma implementação original: os anexos recebidos não continham esse componente. O botão usa Radix Slot e o utilitário `cn` seguindo a estrutura Shadcn. Para adicionar componentes: `npx shadcn@latest add <componente>`.

## Conteúdo pendente para publicação

Confirme telefone/WhatsApp, endereço, horários, serviços e canais sociais oficiais. A consulta local apenas resume a preferência; não envia dados nem realiza reservas. Nenhum backend é necessário para executar esta versão. As fotografias são referências de banco de imagens do Unsplash, identificadas como tal, e não fotos da empresa. Substitua por imagens autorizadas do espaço quando disponíveis.

Movimentos respeitam `prefers-reduced-motion`. Navegação por teclado, menu móvel e links internos são suportados. Não há modelo 3D: a profundidade visual usa transformações CSS e Framer Motion.
