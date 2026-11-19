import { useState } from 'react';
import { criarLivro } from './services/api';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import type { NovoLivro } from './types/book';
import './App.css'

function App() {
  const [contador, setContador] = useState(0);

  async function adicionar(livro: NovoLivro) {
    try {
      await criarLivro(livro);
      setContador(contador + 1);
    } catch (erro) {
      console.error("Erro ao adicionar livro", erro);
    }
  }

  return (
    <div>
      <h1>Catálogo de livros</h1>
      <BookForm aoAdicionar={adicionar} />
      <BookList contadorAtualizado={contador} />
    </div>
  )
}

export default App;
