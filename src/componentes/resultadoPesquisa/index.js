import styled from "styled-components";
import { useState } from "react";
import { jogos } from "../pesquisa/dadosPesquisa";
import { Pesquisa } from "./pesquisa";
import { jogosPesquisados } from "./pesquisa";


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

function ListaResultados({ status, jogosPesquisados }) {
  if (status !== "ok") return null; // só mostra quando tiver resultados

  return (
    <SectionJogosContainer>
      {jogosPesquisados.map((jogo) => (
        <div className="resultados-pesquisa" key={jogo.id}>
          <img
            className="img-pesquisa"
            src={jogo.src}
            alt={jogo.nome}
            width={100}
          />
          <p className="descricao-jogo" style={{ marginTop: "0.1rem" }}>
            {jogo.nome}
          </p>
          <p
            className="descricao-jogo"
            style={{ fontSize: "14px", marginTop: "0.1rem" }}
          >
            Gênero: {jogo.categoria}
          </p>
          <p className="preco-pesquisa">{jogo.preco}</p>
        </div>
      ))}
    </SectionJogosContainer>
  );
}

export default ListaResultados;
// export { textoDigitado };
