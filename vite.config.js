// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  base: '/css_in_react/',
  plugins: [react()],
});



