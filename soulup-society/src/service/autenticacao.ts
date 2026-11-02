import { api } from "./api";

export async function fazerLogin(email: string, senha: string) {
  const resposta = await api("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha
    })
  });

  return resposta;
}
