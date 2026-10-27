import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const [autenticado, setAutenticado] = useState<boolean | null>(null);

  useEffect(() => {
    async function verificarSessao() {
      try {
        const resposta = await fetch("http://localhost:8080/auth/sessao", {
          method: "GET",
          credentials: "include",
        });

        if (resposta.ok) {
          setAutenticado(true);
        } else {
          setAutenticado(false);
        }
      } catch (erro) {
        console.error("Erro ao verificar sessão:", erro);
        setAutenticado(false);
      }
    }

    verificarSessao();
  }, []);

  if (autenticado === null) {
    return <p className="p-6 text-center">Verificando sessão...</p>;
  }

  if (!autenticado) {
    return <Navigate to="/app/login" replace />;
  }

  return <Outlet />;
}
