import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'dl-wedding-app-598yl.ondigitalocean.app',
      'rowsalie.com',
      'www.rowsalie.com'
    ]
  }
});
