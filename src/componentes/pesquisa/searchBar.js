import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import styled from "styled-components";


const BarraPesquisaContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: clamp(56px, 10svh, 120px);


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
        max-width: 250px;
        height: 40px;
        border-radius: 10px 0 0 10px;
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
        padding: 10px;
        font-size: 22px;
        border-radius: 0 10px 10px 0;
        color: #e5e9ebff;
        cursor: pointer;

    }

    .botao-pesquisa:hover {
        background-color: #0c495cff;
        scale: 101%;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 1208px) {
        scale: 0.9;
    }

    @media (max-width: 640px) {
        transform: scale(0.8);
    }

    @media (max-width: 360px) {
        transform: scale(0.6);
    }

`

export default function SearchBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const textoDigitado = q.trim();
    if (!textoDigitado) {
      // opcional: pode navegar com q vazio ou só dar um feedback local
      navigate("/pesquisa?q="); 
      return;
    }
    // manda a busca pra página de resultados
    navigate(`/pesquisa?q=${encodeURIComponent(textoDigitado)}`);
  }

  return (

        <BarraPesquisaContainer onSubmit={handleSubmit} className="form-pesquisa">
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
        </BarraPesquisaContainer>

  );
}
