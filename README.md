# Turborepo Nextjs, Astro, shadcn/ui & tailwind css starter

This Turborepo starter is not maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
git clone git@github.com:tristanwagner/turbo-next-astro-shadcn.git
cd turbo-next-astro-shadcn
rm -rf .git
git init
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `website`: an [Astro](https://astro.dev/) app with [Tailwind CSS](https://tailwindcss.com/)
- `webapp`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/) shared by both `website` and `webapp` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: `tailwind config` used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
