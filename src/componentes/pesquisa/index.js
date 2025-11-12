import styled from "styled-components";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useState } from "react";


const BarraPesquisaContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: clamp(56px, 10svh, 120px);

    .barra-pesquisa {
        width: 100%;
        background-color: #ffffffff;
        box-shadow: 0 20px 50px #0c495cff;
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

        .barra-pesquisa::-webkit-search-cancel-button {
            display: none;
        }

        .barra-pesquisa::-webkit-search-results-button {
            display: none;
        }

        .barra-pesquisa::-webkit-search-results-decoration {
            display: none;
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



function Pesquisa() {
    const [textoDigitado, setTextoDigitado] = useState('');

    return (
        <BarraPesquisaContainer>
            <input className="barra-pesquisa" type="text" 
            placeholder="Pesquise na loja"
            onBlur={evento => setTextoDigitado(evento.target.value)} />
            <PiMagnifyingGlassBold className="botao-pesquisa"/>
            <p>{textoDigitado}</p>

        </BarraPesquisaContainer>
    );
}

export default Pesquisa
export default textoDigitado