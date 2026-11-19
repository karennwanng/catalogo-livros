import type { ChangeEvent, SubmitEvent } from "react";

// O usuário marca o status do livro
export type StatusLivro = "Lido" | "Não lido";

// Informações do livro 
export type NovoLivro = {
    title: string;
    author: string;
    status: StatusLivro;
};

export type LivroSalvo = NovoLivro & {
    _id: string;
};

export type BookItemProps = {
    livro: LivroSalvo;
    aoRemover: (_id: string) => void;
};

export type BookFormProps = {
    aoAdicionar: (livro: NovoLivro) => void;
};

export type BookListProps = {
    contadorAtualizado: number;
};

export type EventoMudanca = ChangeEvent<HTMLInputElement | HTMLSelectElement>;
export type EventoEnvio = SubmitEvent<HTMLFormElement>;