import eslintPluginAstro from 'eslint-plugin-astro';
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Astro
 *
 * @type {import("eslint").Linter.Config}
 * */
export const astroConfig = [
  ...baseConfig,
  ...eslintPluginAstro.configs.recommended,
];
