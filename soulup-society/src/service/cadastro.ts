
import { api } from "./api";
import type { UsuarioCadastro } from "../types/cadastro";

// Procurar usuário pelo CPF
export async function buscarUsuarioPorCpf(
  cpf: string
): Promise<UsuarioCadastro | null> {
  try {
    const resposta = await api(`/usuarios/procurarPorCpf/${cpf}`);
    return await resposta.json();
  } catch (erro) {
    // Se retornar 404, significa que o usuário não existe
    if (erro instanceof Error && erro.message.includes("(404)")) {
      return null;
    }

    throw new Error("Não foi possível consultar o CPF.");
  }
}

// Cadastrar usuário
export async function criarUsuario(
  nome: string,
  nascimento: string,
  cpf: string
): Promise<void> {
  try {
    await api("/usuarios", {
      method: "POST",
      body: JSON.stringify({
        nome: nome.trim(),
        dataNascimento: nascimento,
        numeroCpf: Number(cpf),
      }),
    });
  } catch {
    throw new Error(
      "Não foi possível cadastrar o usuário. Verifique os dados informados."
    );
  }
}

// Cadastrar conta
export async function criarConta(
  nome: string,
  email: string,
  senha: string,
  usuarioId: number
): Promise<void> {
  try {
    await api("/contas", {
      method: "POST",
      body: JSON.stringify({
        nomeConta: nome.trim(),
        email: email.trim(),
        senha,
        dataCriacao: new Date().toISOString().slice(0, 10),
        bio: "",
        tipoConta: "USUARIO",
        usuario: {
          id: usuarioId,
        },
      }),
    });
  } catch {
    throw new Error(
      "Não foi possível criar a conta. Verifique os dados e o backend."
    );
  }
}
