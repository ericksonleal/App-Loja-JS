import styled from 'styled-components';
import { Link } from 'react-router-dom';



const MenuHeaderContainer = styled.ul`
    display: flex;
    gap: clamp(2rem, 2.5vw, 2.5rem);
    justify-content: center;
    margin: 0; 
    white-space: nowrap;       /* o item vai pra nova linha, não “explode” pro lado */
    justify-content: center;
    padding: 0;
    width: 100%;


  .itens-menuJS {
    font-weight: bold;
    font-size: clamp(14px, 1.5vw, 18px); /* Fonte responsiva */
    color: rgba(229, 229, 235, 1);
    list-style: none;
    cursor: pointer;
    min-width: min-content; /* Largura mínima adaptável */
    white-space: nowrap; /* Impede quebra de texto */
    transition: all 0.3s ease-in-out;
    padding: 0;
  }

  p {
    justify-content: center;
    text-align: center;
    font-size: clamp(14px, 1.5vw, 18px);
  }
  .itens-menuJS:hover {
    color: #42b7dfff;
    scale: 105%;
  }
  /* MEDIA QUERIES PARA RESPONSIVIDADE */
  @media (max-width: 1208px) {
      display: flex;

      margin: auto;
      justify-content: center;
      padding: 0 0;
      width: 50%;

    
    .itens-menuJS {
      padding: 0rem 0.4rem;
      font-size: 17px;
      padding: 0 0;
    }

    p {
      justify-content: center;
      text-align: center;
      font-size: 17px;
    }
  }

  @media (max-width: 1024px) {
      display: flex;

      margin: auto;
      justify-content: center;
      padding: 0;
      width: 50%;

    
    .itens-menuJS {
      padding: 0rem 0.4rem;
      font-size: 17px;
      min-width: min-content;
      padding: 0;
    }

    p {
      justify-content: center;
      text-align: center;
      font-size: 16px;
    }
  }

  @media (max-width: 800px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 0;
      width: 80%;

    
    .itens-menuJS {
      font-size: 16px;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 0px;
      margin: 0 auto;
      width: 100%;
      padding: 0;
    }

    p {
      justify-content: center;
      text-align: center;
    }
  }
  
  @media (max-width: 655px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      gap: 10px;
      margin: 0 0;
      padding: 0;

      width: 80%;
    
    .itens-menuJS {
      font-size: 16px;
      width: 100%;
      align-items: center;
      text-align: center;
      gap: 0px;
      padding: 0;
    }

    p {
      justify-content: center;
      text-align: center;
    }
  }
  /*  ---------------------  Mobile */
  @media (max-width: 480px) {
      order: 3;

      padding: 5px 10px;
      width: 90%;
      padding: 0;

    .itens-menuJS {
      font-size: 15px;
      padding: 0;
      }

    p {
      justify-content: center;
      text-align: center;
      font-size: 14px;

    }
  }
`

// import './style.css';

const textoMenu = ['Início', 'Ofertas', 'Categorias', 'Biblioteca'];


function MenuHeader() {
    return (
        <MenuHeaderContainer>
          {textoMenu.map((opcoesMenu) => (
            
              <Link to={`/${opcoesMenu.toLowerCase()}`} ><li key = {opcoesMenu} className='itens-menuJS'>
                <p>{opcoesMenu}</p></li>
              </Link>
              
          ))}
        </MenuHeaderContainer>
    );
}

export default MenuHeader;
