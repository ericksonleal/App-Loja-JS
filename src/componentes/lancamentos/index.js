
import { lancamentos } from "./dadosLancamentos";
import { Titulos } from '../titulos';
import styled from "styled-components";


const LancamentosContainer = styled.div`

    .titulo {
        display: flex;
        margin: auto;                  /* Centralizar o conteúdo */
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #0c495cff;
        box-shadow: 0px 0px 0px #0c495cff;
        backdrop-filter: blur(30px);
        border: 2px solid rgba(255, 255, 255, 0.18);

        
        border-radius: 10px;
        border-top-left-radius: 50px 30px;   /* Borda arredondada no canto superior esquerdo */px 0px 0px;
        
        width: 50%;
        

        font-size: clamp(24px, 4vw, 36px);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

`

const NovosLancamentos = styled.div`
        display: flex;
        background-color: #0dafd8;
        width: 100%;
        max-width: 90%;
        max-height: auto;
        gap: 2rem;
        border-radius: 10px;
        padding: 1.5rem;
        margin: 0 auto;
        margin-top: 0.5rem;
        margin-bottom: 2.5rem;
        box-shadow: 0 15px 30px #0c495cff;
        overflow-x: auto;
        overflow-y: hidden;
        transition: all 0.3s ease;


       /* &:hover > :not(:hover) {
        filter: blur(5px);
        opacity: 0.5; */

        @keyframes loop {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
        
    }

    /* Chrome, Edge e Safari */
    &::-webkit-scrollbar { /* para diminuir o tamanho da barra de rolagem use cursor */
        height: 18px;  /* horizontal */
        cursor: grab;
        border-radius: 20px;

    }
    &::-webkit-scrollbar-track { /* a parte de trás da barra de rolagem */
        background: #021a2bff;
        border-radius: 20px;


    }
    &::-webkit-scrollbar-thumb { /* a parte que se move da barra de rolagem */
        background-color: #186981ff;
        border-radius: 10px;

        border: 3px solid #021a2bff;
    }
    &::-webkit-scrollbar-thumb:hover { /* quando passar o mouse por cima da barra de rolagem */
        background-color: #1f7f9cff;
        cursor: grab; /* para fazer a animação de abrir e fechar a mão use o  */
        
    }

    .jogos-lancamentos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        background-color: #021a2bff;
        box-shadow: 0 15px 30px #0c495cff;
        padding: 10px;
        padding-bottom: 0;
        border-radius: 10px;
        align-items: center;
        height: auto;
        width: 15rem;
        margin: 0;
        margin-top: 1rem;
        
    }

    .jogos-lancamentos:hover {
        scale: 101%;
        background-color: #073657ff;
        box-shadow: 5px 15px 25px #070d1fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

 


    p {
        display: flex;
        justify-content: center;
        align-items: center;
        
        margin: 5px 0;
        font-weight: bold;
        font-size: 16px;
    }

    .jogo-lancamento {
        display: flex;
        margin: auto;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: auto;
        width: 15rem;
        color: #e5ebf0ff;
        font-size: 18px;
        user-select: none;

    }
    .preco{
        display: flex;
        flex-wrap: wrap;
        margin: 0.3rem;
        font-size: 16px;
        color: #1ab329ff;
        margin-top: 0.4rem;
        font-weight: bold;
        user-select: none;
    }

    .img-jogo {
        border: 3px solid #195aa3ad;
        display: static;
        justify-content: center;
        align-items: center;
        width: 11rem;
        height: 14rem;
        max-width: 200px;
        max-height: 250px;
        border-radius: 5px;
        margin-top: 0.2rem;
        user-select: none;
    }
    
    @media (max-width: 1268px) {
        display: flex;
        scale: 0.95;
        margin: auto;
        margin-top: 0rem;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 768px) {
        display: flex;
        scale: 0.95;
        padding: 1.5rem 1rem;
        margin: 0 auto;
        margin-top: 0rem;
        margin-bottom: 2.5rem;
    }

`
    
const SectionOpcional = styled.div`
`

function Lancamentos() {
    return (

        <LancamentosContainer>
            <Titulos className="titulo" cor="#edf2f3ff">Ultimos Lancamentos:</Titulos>
            <NovosLancamentos>
            {lancamentos.map((jogo) => (
                <div className="jogos-lancamentos" key={jogo.id}>
                    <img className="img-jogo" src={jogo.src} alt={jogo.nome} width={200} />
                    <p className="jogo-lancamento">{jogo.nome}</p>
                    <p className="jogo-lancamento">{jogo.categoria}</p>
                    <p className="preco">{jogo.preco}</p>
                </div>
            ))}
            </NovosLancamentos>
          <SectionOpcional>
            <h3>AEEE</h3>
            
          </SectionOpcional>
  
        </LancamentosContainer>
        
    )
}

export default Lancamentos;