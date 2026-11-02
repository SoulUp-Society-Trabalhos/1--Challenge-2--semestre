import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { api } from "../../service/api";

export default function ProtectedRoute() {
  const [autenticado, setAutenticado] = useState<boolean | null>(null);

  useEffect(() => {
    api("/auth/sessao")
      .then(() => setAutenticado(true))
      .catch(() => setAutenticado(false));
  }, []);

  if (autenticado === null) {
    return <p className="p-6 text-center">Verificando sessão...</p>;
  }

  if (!autenticado) {
    return <Navigate to="/app/login" replace />;
  }

  return <Outlet />;
}