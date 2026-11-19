import type { BookItemProps } from "../types/book";

function BookItem({ livro, aoRemover }: BookItemProps) {

    return (
        <li>
            <strong>Título: {livro.title}</strong>
            <span> Autor: {livro.author}</span>
            <span> Status: {livro.status}</span>
            <button onClick={() => aoRemover(livro._id)}> Remover </button>
        </li>
    )
}

export default BookItem;