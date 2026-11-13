import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  server: {
    fs: { deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/private/**', '**/Hlaing_Min_Htun_Portfolio_Blueprint.docx', '**/Hlaing_Min_Htun_Portfolio_Presentation.pptx'] },
  },
  build: { rollupOptions: { input: { main: fileURLToPath(new URL('./index.html', import.meta.url)), sample: fileURLToPath(new URL('./sample.html', import.meta.url)), notFound: fileURLToPath(new URL('./404.html', import.meta.url)) } } },
});
