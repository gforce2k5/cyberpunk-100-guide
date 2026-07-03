import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Change this to '/REPO_NAME/' if your GitHub repo name is different.
  base: '/cyberpunk-100-guide/'
});
