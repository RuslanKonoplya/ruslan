import { defineConfig } from 'vite';
import VitePluginGhPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/ruslan/',  // Укажи имя репозитория на GitHub
  plugins: [VitePluginGhPages()],
});
