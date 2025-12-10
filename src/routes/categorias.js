import styled from "styled-components";
import { Link } from "react-router-dom";



const CategoriasContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 81.8svh;
    margin: 0;
    background-size: cover;         
    background-image: linear-gradient(90deg, rgba(23, 236, 236, 0.8), rgb(126, 211, 200));
  
    h1{
        display: flex;
        padding: 0rem;
        background-color: #073657ff;
        justify-content: center;
        align-items: center;
        margin-top: 0;
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

function Categorias() {
    return (
        <CategoriasContainer>

            <h1>Categorias</h1>
            <Link to="/">Home</Link>

        </CategoriasContainer>
    )
}


export default Categorias