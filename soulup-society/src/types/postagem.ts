export interface Conta {
  id: number;
  nomeConta: string;
}

export interface Postagem {
  id: number;
  descricaoTexto: string;
  dataPostagem: string;
  quantidadeCurtidas: number;
  conta: Conta;
}

// Union type: os estados possíveis da tela
export type EstadoTela = "carregando" | "erro" | "vazio" | "ok";

// Intersection type: a postagem da API + um campo calculado no front
export type PostagemExibida = Postagem & { dataFormatada: string };