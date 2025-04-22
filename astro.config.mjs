import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import Tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanguzzo.com.ar',
  base: '/catamarcaghibli/',
  output: 'static',
  integrations: [astroImageTools, Tailwind(), icon()],
});
