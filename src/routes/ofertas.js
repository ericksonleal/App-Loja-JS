import styled from "styled-components";
import { Link } from "react-router-dom";
import Lancamentos from "../componentes/lancamentos";



const OfertasContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 81.8svh;

    background-size: cover;           /* cobre toda a área */
    background-image: linear-gradient(90deg, rgba(23, 236, 236, 0.8), rgb(126, 211, 200));

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        flex-direction: column;
    }

    .link2 {
        background-color: #073657ff;
        padding: 0.5rem;
        border-radius: 10px;
        width: 5rem;
        margin: 0.5rem;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;

        :hover {
            scale: 103%;
        }
    }

  
  /* Tablet */
  @media (max-width: 768px) {
      display: flex;
      background-attachment: fixed; 
  }
    
  @media (max-width: 640px) {




  }

  /*  ---------------------  Mobile */
  @media (max-width: 480px) {
      background-color: #fffefeff;
  

  }

  /* Telas muito pequenas (mobile landscape) */
  @media (max-width: 360px) {
      gap: 5px;
      order: 3; /* Coloca o menu embaixo em telas muito pequenas */
      flex-direction: column;
      justify-content: center;
      margin-top: 0.5rem;
  }
`

function Ofertas() {
    return (
        <OfertasContainer>

            <h1>OFERTAS DA SEMANA</h1>
            <Lancamentos />
            <Link to="/" className="link2">Home</Link>

        </OfertasContainer>
    )
}


export default Ofertas