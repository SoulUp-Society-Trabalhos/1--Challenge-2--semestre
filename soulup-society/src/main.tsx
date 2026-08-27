import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter,RouterProvider } from 'react-router';
import Contatos from './routes/Contatos/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Home from './routes/Home/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Proposta from './routes/Proposta/index.tsx';
import Proposta2 from './routes/Proposta2/index.tsx';
import Sobre from './routes/Sobre/index.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
