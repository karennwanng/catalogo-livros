import type { NovoLivro, BookFormProps, EventoMudanca, EventoEnvio } from "../types/book";
import { useState } from "react";


function BookForm({ aoAdicionar }: BookFormProps) {
    const [livro, setLivro] = useState<NovoLivro>({ title: "", author: "", status: "Não lido" });

    function mudarLivro(e: EventoMudanca) {
        setLivro({ ...livro, [e.target.name]: e.target.value });
    }

    function enviar(e: EventoEnvio) {
        e.preventDefault();
        aoAdicionar(livro);
        setLivro({title: "", author:"", status:"Não lido"})
    }

    return (
        <form onSubmit={enviar}>
            <input name="title" value={livro.title} onChange={mudarLivro} placeholder="Título" required />
            <select name="status" value={livro.status} onChange={mudarLivro}>
                <option value="Lido">Lido</option>
                <option value="Não lido">Não lido</option>
            </select>
            <input name="author" value={livro.author} onChange={mudarLivro} placeholder="Autor" required />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default BookForm;