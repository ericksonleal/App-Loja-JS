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
        margin: 1rem 0 3rem auto;
        gap: 1.5rem;



    .resultados-pesquisa {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #021a2bff;
        box-shadow: 0 15px 30px #0c495cff;
        padding: 1rem 0.5rem 2rem 0.5rem;
        border-radius: 10px;

        max-width: 15rem;
        max-height: 20rem;
        margin: 1rem 0 0 0;
        backdrop-filter: blur(50px);                /*Efeito de blur/fosco*/

        transition: all 0.3s ease;
    }
    .resultados-pesquisa:hover {

        scale: 101%;
        background-color: #073657ff;
        box-shadow: 5px 15px 25px #070d1fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    
    }

    .titulo-jogo {    
        width: 100%;
        margin: 0.3rem 0;
        justify-content: center;
        color: #e5ebf0ff;
        font-size: 18px;
        user-select: none;
    }

      .descricao-jogo {
        margin: 0;
        width: 100%;
        color: #e5ebf0ff;
        font-size: 15px;

        user-select: none;
        padding: 0;

    }
    .preco-pesquisa {
        margin: 0;
        width: 100%;
        padding: 0;
        font-size: 16px;
        color: #0d7515ff;
        font-weight: bold;
        user-select: none;
    }

    .img-capa {
        border: 3px solid #195aa3ad;
        display: static;
        justify-content: center;
        align-items: center;
        width: 13.5rem;
        height: 15rem;
        max-width: 300px;
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

        .img-capa {
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

    }

    @media (max-width: 720px) {
      gap: 1rem;
      padding: 10px 20px;


      .resultados-pesquisa {
        scale: 0.98;
        max-width: 100%;   /* não limita a 80% pra não quebrar o layout */
      }

      .resultados-pesquisa:hover {
        scale: 0.98;
      }
    }


    @media (max-width: 640px) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 colunas iguais */
            column-gap: 0.2rem;
            padding: 0.5rem 0rem;
            box-sizing: border-box;          /* faz com que o padding seja contado na largura */
            overflow: none;
            width: 100%;
            
          .resultados-pesquisa {
            display: flex;
            align-items: center;
            margin: 0 auto;
            width: 90%;
            box-sizing: border-box;
            height: 25rem; /* altura fixa padrão */
            max-height: 25rem;                
            background: #a0c5d4ec;
            padding: 0.4rem 0.5rem;
            border-radius: 10px;
            box-shadow: 0 15px 30px #0c495cff;
            transform: scale(0.95);
            transition: transform 0.3s ease, height 0.2s ease;

          }

          .resultados-pesquisa:hover {
            transform: scale(1);
            max-height: 26rem; 
            
          }

          .titulo-jogo {
            margin: 0;
            padding: 0 0.5rem;
            width: 100%;
            max-width: 150%;
            text-align: center;
            overflow: hidden; 
            font-size: 16px;
            white-space: pre-wrap;
            text-align: start;
            
          }



          /* Gênero e preço continuam normais */
          .descricao-jogo {
            margin: 0;
            width: 100%;
            text-align: center;
            font-size: 14px;
            white-space: normal;
          }

          .preco-pesquisa {
            margin: 0 0 0.5rem 0;
            font-weight: bold;
            color: #0a8f32;
          }

          .img-capa {   
              user-select: none;
  

              max-width: 14rem;
              max-height: 17rem;
              margin: 0.1rem 0 0 0;
          }
    }

    @media (max-width: 360px) {
        transform: scale(0.9);

        .resultados-pesquisa:hover {
        transform: scale(0.91);
        }
    }
    
`
const SectionAvisoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
      <img className="img-capa" src={jogo.src} alt={jogo.nome} />
      <p className="titulo-jogo">{jogo.nome}</p>
      <p className="descricao-jogo">Gênero: {jogo.categoria}</p>
      <p className="preco-pesquisa">{jogo.preco}</p>
    </div>
  ))}
</SectionJogosContainer>
    </div>
  );
}

export default Pesquisa

