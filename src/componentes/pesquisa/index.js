import styled from "styled-components";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useState } from "react";
import { jogos } from "./dadosPesquisa";

const BarraPesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: clamp(56px, 10svh, 120px);
    margin: 0;
    margin-top: 2rem;


    .form-pesquisa {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .barra-pesquisa {
        width: 300px;
        background-color: #ffffffff;
        /* box-shadow: 0 20px 50px #0c495cff; */
        max-width: 300px;
        height: 50px;
        border-radius: 15px;
        border: none;
        padding: 0 20px;}

        .barra-pesquisa:focus {
            outline: none;
        }

        .barra-pesquisa::placeholder {
            color: #0c495cff;
            font-size: 16px;
            font-style: italic;
        }



    .botao-pesquisa {
        display: flex;
        margin: 0;
        background-color: #0c495c9d;
        border: none;
        padding: 15px;
        font-size: 22px;
        border-radius: 15px;
        color: #e5e9ebff;
        cursor: pointer;
        margin-left: 10px;
    }

    .botao-pesquisa:hover {
        background-color: #0c495cff;
        scale: 105%;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1208px) {
        scale: 0.9;
    }

    @media (max-width: 640px) {
        scale: 0.8;
    }

    @media (max-width: 360px) {
        scale: 0.7;
    }

`
const SectionJogosContainer = styled.section`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 2rem;
        margin: 0 auto;
        gap: 2rem;
        padding: 20px 40px;



    .resultados-pesquisa {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        background-color: #fffefeff;
        box-shadow: 0 15px 30px #0c495cff;
        padding: 15px;
        border-radius: 10px;
        align-items: center;
        height: auto;
        width: 15rem;
        transition: all 0.3s ease;

    }
    .resultados-pesquisa:hover {
        scale: 101%;
        background-color: #ffffff;
        box-shadow: 0 10px 30px #0c495cff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .descricao-jogo {
        display: flex;
        margin: auto;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: 15rem;
        font-size: 18px;
        font-weight: bold;
        user-select: none;

    }
    .preco-pesquisa {
        display: flex;
        flex-wrap: wrap;
        margin: 0.3rem;
        font-size: 16px;
        color: #0d7515ff;
        margin-top: 0.4rem;
        font-weight: bold;
        user-select: none;
    }

    .img-pesquisa {
        border: 3px solid #0c495cff;
        display: static;
        justify-content: center;
        align-items: center;
        width: 12rem;
        height: 15rem;
        max-width: 200px;
        max-height: 250px;
        border-radius: 5px;
        margin-top: 0.2rem;
        user-select: none;
    }

    @media (max-width: 1460px) {
        display: flex;
        gap: 0.5rem;
        scale: 0.99;
        margin-top: 0;

        .resultados-pesquisa {
            margin: 0.5rem;
            gap: 0.5rem;
            width: 15rem;
            max-width: 80%;
            max-height: 80%;
            font-size: 18px;
        }

    .resultados-pesquisa:hover {
        scale: 101%;
    }

        .img-pesquisa {
            width: 20rem;
            height: 25rem;
        }
    }
    @media (max-width: 1208px) {
        display: flex;
        scale: 0.98;
        margin-top: 0;

        .resultados-pesquisa {

            gap: 0.5rem;
            margin: 0.5rem;
            max-width: 80%;
            max-height: 80%;

        }

        .resultados-pesquisa:hover {

    }

        .img-pesquisa {
            width: 15rem;
            height: 20rem;
        }
    }

    @media (max-width: 720px) {
        display: flex;
        flex-wrap: wrap;
        gap: 0;
        padding: 0%;


      .resultados-pesquisa {
          scale: 0.96;
          gap: 0rem;
          max-width: 80%;
          max-height: 80%;
  

        }


      .resultados-pesquisa:hover {
          scale: 97%;
    }

    @media (max-width: 640px) {
        display: flex;
        flex-wrap: wrap;
        
        gap: 0;
        padding: 0%;

    }
        .resultados-pesquisa {


        }
    }

    @media (max-width: 590px) {
            display: grid;
            grid-template-columns: auto auto;

            margin-left: 20px;



            
            


        .resultados-pesquisa {
          background-color: #87f190ff;  /*A partir daqui muda a coluna*/
          transform: scale(0.95);
          padding: 1.5rem 0.5rem;

        }
    }

    @media (max-width: 360px) {
        transform: scale(0.9);

        .resultados-pesquisa:hover {
        transform: scale(0.91);
    }
    
`
const SectionAvisoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    font-size: 20px;
    color: #0c495cff;
    font-style: italic;


    @media (max-width: 1208px) {
        scale: 0.9;
    }`


function Pesquisa() {
  const [q, setQ] = useState(""); // q = query (consulta)
  const [jogosPesquisados, setJogosPesquisados] = useState({}); // resultados da pesquisa
  const [status, setStatus] = useState("idle"); // idle(sem pesquisa ainda) | empty | ok | no-results | 

  const handleSubmit = (evento) => { // e = evento. O handleSubmit recebe um evento
    evento.preventDefault(); // prevenir reload da página

    const textoDigitado = q.trim().toLowerCase(); // o trim é para tirar os espaços em branco 
    if (!textoDigitado) { // o "!" funciona como "se não houver texto"
      setJogosPesquisados([]);
      setStatus("empty");            // nada digitado
      return;
    }

    const filtroJogos = jogos.filter((jogo) =>
      (jogo.nome && jogo.nome.toLowerCase().includes(textoDigitado)) ||
      (jogo.categoria && jogo.categoria.toLowerCase().includes(textoDigitado)) ||
      (jogo.nomePopular && jogo.nomePopular.toLowerCase().includes(textoDigitado))
    );

    setJogosPesquisados(filtroJogos);
    setStatus(filtroJogos.length ? "ok" : "no-results");
  };
  
  return ( // o onSubmit faz com que a função handleSubmit seja executada ao enviar o formulário
    <div className="section-pesquisa">
      <BarraPesquisaContainer> 
        <form onSubmit={handleSubmit} className="form-pesquisa"> 
          <input
            className="barra-pesquisa"
            type="text"
            placeholder="Pesquise na loja"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button type="submit" className="botao-pesquisa" aria-label="Buscar">
            <PiMagnifyingGlassBold />
          </button>
        </form>
      {/* Mensagens de feedback */}
        <SectionAvisoPesquisa>
          {status === "empty" && (
            <p className="hint">
              Digite algo para pesquisar.
            </p>
          )}
          {status === "no-results" && (
            <p className="hint">
              Nenhum resultado para sua pesquisa.
            </p>
          )}
          {status === "ok" && (
            <p className="hint">
              Encontramos <strong>{jogosPesquisados.length} resultado(s)</strong> para sua pesquisa:
            </p>
          )}
        </SectionAvisoPesquisa>
      </BarraPesquisaContainer>

      <SectionJogosContainer>
        {status === "ok" && jogosPesquisados.map((jogo) => (
          <div className="resultados-pesquisa" key={jogo.id}>
            <img className="img-pesquisa" src={jogo.src} alt={jogo.nome} width={100} />
            <p className="descricao-jogo" style={{ marginTop: '0.1rem' }}>{jogo.nome}</p>
            <p className="descricao-jogo" style={{fontSize: '14px', marginTop: '0.1rem'}}>Gênero: {jogo.categoria}</p>
            <p className="preco-pesquisa">{jogo.preco}</p>
          </div>
        ))}
      </SectionJogosContainer>
    </div>
  );
}

export default Pesquisa
// export { textoDigitado };
