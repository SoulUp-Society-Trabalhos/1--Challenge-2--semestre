const api_url = "http://localhost:8080";

export async function api(
    endpoint: string,
    options: RequestInit = {}
) {
    const resposta = await fetch(
        `${api_url}${endpoint}`,
        {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            }
        }
    );

    if (!resposta.ok) {
        throw new Error("Erro na requisição");
    }

    return resposta;
}