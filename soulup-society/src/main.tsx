import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
import Contatos from "./routes/Contatos/index.tsx";
import Faq from "./routes/Faq/index.tsx";
import Home from "./routes/Home/index.tsx";
import Integrantes from "./routes/Integrantes/index.tsx";
import Proposta from "./routes/Proposta/index.tsx";
import Proposta2 from "./routes/Proposta2/index.tsx";
import Sobre from "./routes/Sobre/index.tsx";
import Error from "./routes/Error/index.tsx";

import AuthPage from "./routes/App/AuthPage/index.tsx";
import Cadastro from "./routes/App/Cadastro/index.tsx";
import Login from "./routes/App/Login/index.tsx";
import Feed from "./routes/App/Feed/index.tsx";
import Missoes from "./routes/App/Missoes/index.tsx";
import Carteira from "./routes/App/Carteira/index.tsx";
import ItensSalvos from "./routes/App/ItensSalvos/index.tsx";
import ContaInfo from "./routes/App/ContaInfo/index.tsx";

import "./styles/globals.css";
import ProtectedRoute from "./routes/App/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contatos",
        element: <Contatos />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "integrantes",
        element: <Integrantes />,
      },
      {
        path: "proposta",
        element: <Proposta />,
      },
      {
        path: "proposta2",
        element: <Proposta2 />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "app",
        element: <AuthPage />,
      },
      {
        path: "app/login",
        element: <Login />,
      },
      {
        path: "app/cadastro",
        element: <Cadastro />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "app/feed",
            element: <Feed />,
          },
          {
            path: "app/missoes",
            element: <Missoes />,
          },
          {
            path: "app/carteira",
            element: <Carteira />,
          },
          {
            path: "app/salvos",
            element: <ItensSalvos />,
          },
          {
            path: "app/conta",
            element: <ContaInfo />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
