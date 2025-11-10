import logo from './reddead-loading.png';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React - VAMO APRENDER
        </a>
        <a
          className="teste-nova-linha" // classe para estilizar
          target='_blank' // target é para abrir em outra aba
          rel='noopener noreferrer' // rel é para segurançaa
          href='https://www.google.com' // link de destino
        >
          Vamos para outra página! Ihuuuuu!!!
        </a>
      </header>
    </div>
  );
}

function Revolver() {
  const [municoes, setMunicoes] = useState(0);
  const [estaGirando, setEstaGirando] = useState(true);
  const logoRef = useRef(null);

  const inserirMunicao = () => {
    if (municoes >= 6) return;

    // Pausa a animação
    setEstaGirando(false);
    
    // Aguarda um momento e reinicia
    setTimeout(() => {
      setEstaGirando(true);
      setMunicoes(prev => prev + 1);
    }, 500); // Tempo de pausa
  };

  return (
    <div>
      <img
        ref={logoRef}
        src="/caminho/da/imagem.png"
        className={`App-logo ${!estaGirando ? 'pausado' : ''}`}
        alt="caixa de munição"
      />
      <button onClick={inserirMunicao} disabled={municoes >= 6}>
        Inserir Munição ({municoes}/6)
      </button>
    </div>
  );
}

export default App;
