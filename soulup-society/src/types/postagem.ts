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

export interface Comentario {
  id: number;
  textoComentario: string;
  dataComentario: string;
  quantidadeCurtidas: number;
  conta: Conta;
}

//  os estados possíveis da tela
export type EstadoTela = "carregando" | "erro" | "vazio" | "ok";


export type PostagemExibida = Postagem & { dataFormatada: string };