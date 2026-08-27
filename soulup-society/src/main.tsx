import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router';


import App from './App.tsx' 
import Contatos from './routes/Contatos/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Home from './routes/Home/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Proposta from './routes/Proposta/index.tsx';
import Proposta2 from './routes/Proposta2/index.tsx';
import Sobre from './routes/Sobre/index.tsx';
import Error from './routes/Error/index.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'contatos',
        element: <Contatos />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'integrantes',
        element: <Integrantes />,
      },
      {
        path: 'proposta',
        element: <Proposta />,
      },
      {
        path: 'proposta2',
        element: <Proposta2 />,
      },
      {
        path: 'sobre',
        element: <Sobre />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
