import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('');

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu CEP"
        value={input} 
        onChange={(event) => setInput(event.target.value)} 
        />
        
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 79070295</h2>

        <span>Rua: Rua da Divisão</span>
        <span>Complemento: Condomínio das Oliveiras</span>
        <span>Bairro: Jardim Colibrí</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
