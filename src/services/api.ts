import type { LivroSalvo, NovoLivro } from "../types/book";

import axios from "axios";

const URL_BASE = import.meta.env.VITE_API_URL;

export async function listaLivros(): Promise<LivroSalvo[]> {
    const resposta = await axios.get<LivroSalvo[]>(`${URL_BASE}/livros`);  
    return resposta.data;  
}

export async function criarLivro(livro: NovoLivro): Promise<LivroSalvo> {
    const resposta = await axios.post<LivroSalvo>(`${URL_BASE}/livros`, livro);
    return resposta.data;
}

export async function removerLivro(_id: string) : Promise<void> {
    await axios.delete(`${URL_BASE}/livros/${_id}`);
}