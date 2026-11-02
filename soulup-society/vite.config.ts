import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
 
// Por padrão, em desenvolvimento o proxy "/api" usa a API publicada no Render,
// então não é necessário subir o back-end Java para rodar o front-end.
// Para usar uma API local, crie um arquivo .env.local com:
//   VITE_API_PROXY=http://localhost:8080
const API_PUBLICADA = 'https://challenge-java-2-challenge.onrender.com'
 
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const alvo = env.VITE_API_PROXY || API_PUBLICADA
 
  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: alvo,
          changeOrigin: true,
          secure: true,
          cookieDomainRewrite: '',
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
 