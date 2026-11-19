import { useEffect, useState } from "react";
import { listaLivros, removerLivro } from "../services/api";
import type { LivroSalvo, BookListProps } from "../types/book";
import BookItem from "./BookItem";

function BookList({contadorAtualizado}: BookListProps) {
    const [livros, setLivros] = useState<LivroSalvo[]>([]);

    useEffect(() => {
        async function carregar() {
            try {
                const dados = await listaLivros();
                setLivros(dados);
            } catch (erro) {
                console.error("Erro ao carregar livros", erro);
            }
        }
        carregar();
    }, [contadorAtualizado]);

    async function remover(_id:string) {
        try {
            await removerLivro(_id);
            setLivros(livros.filter((l) => l._id !==_id));
        } catch (erro) {
            console.error("Erro ao remover livro", erro);
        }
    }

    return (
        <ul>
            {livros.map((livro) => (
                < BookItem key={livro._id} livro={livro} aoRemover={remover} />
            ))}
        </ul>
    );
}

export default BookList;