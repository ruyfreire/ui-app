<!-- markdownlint-disable -->
# Biblioteca de componentes 🧩

![CodeFactor](https://www.codefactor.io/repository/github/ruyfreire/ui-app/badge)

![Version](https://img.shields.io/github/package-json/v/ruyfreire/ui-app?label=Version&color=blue)
![Release Date](https://img.shields.io/github/release-date/ruyfreire/ui-app?label=Release-date&color=green&message=data)

## Descrição

Biblioteca de componentes react

## Tecnologias

- [Rollup](https://github.com/rollup/rollup)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Storybook](https://github.com/storybookjs/storybook)
- [Styled-components](https://github.com/styled-components/styled-components)
- [ESlint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Diretórios

```bash

├── .storybook # Configurações gerais storybook
├── dist # Build do projeto
├── public # Arquivos públicos do storybook
├── src
│   ├── components # Pasta de componentes
│   ├── theme # Tema do projeto
│   └── index.ts # Arquivo principal com export geral
└── stories # Storybook dos componentes do projeto
└── rollup.config.js # Configurações do Rollup
```

## Instalar

```bash
npm install
```
\* Recomendado usar npm para aproveitar o **package-lock.json**

## Rodar projeto (Storybook)

```bash
# Iniciar storybook
npm run storybook
```

## Build

```bash
# Geral pasta dist do projeto
yarn build
```

## Rodar lint

```bash
npm run lint
```
