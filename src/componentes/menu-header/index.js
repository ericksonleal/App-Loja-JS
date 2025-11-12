import styled from 'styled-components';


const MenuHeaderContainer = styled.ul`
    gap: clamp(0.5rem, 1.5vw, 1rem);
    display: flex;
    justify-content: center;
    margin: auto; /* Centraliza o menu */
    white-space: nowrap;       /* o item vai pra nova linha, não “explode” pro lado */

  .itens-menuJS {
    font-weight: bold;
    font-size: clamp(14px, 1.5vw, 18px); /* Fonte responsiva */
    color: rgb(34, 32, 32);
    padding: 0.5rem clamp(0.5rem, 1.5vw, 1rem); /* Padding responsivo */
    list-style: none;
    cursor: pointer;
    min-width: min-content; /* Largura mínima adaptável */
    white-space: nowrap; /* Impede quebra de texto */
    transition: all 0.3s ease-in-out;
  }
  .itens-menuJS:hover {
    color: #e7eaeb;
    scale: 105%;
  }
  /* MEDIA QUERIES PARA RESPONSIVIDADE */
  @media (max-width: 1208px) {
      display: flex;
      margin: auto;
      justify-content: center;
      margin-top: 5rem;
    
    .itens-menuJS {
      padding: 0rem 0.4rem;
      font-size: 17px;
      min-width: min-content;
    }
  }
  @media (max-width: 655px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      justify-content: center;
      margin-top: 15%;
      padding: 0px 10px;
    
    .itens-menuJS {
      font-size: 16px;
    }
  }
  /*  ---------------------  Mobile */
  @media (max-width: 480px) {
      order: 3;
      padding: 5px 10px;

    .itens-menuJS {
      font-size: 15px;}
  }
  @media (max-width: 440px) {
      order: 3; 
      justify-items: center;
      align-items: center;
      padding: 10px 10px;
    
    .itens-menuJS {
      font-size: 15px;
    }
  }
  @media (max-width: 410px) {/* Telas muito pequenas (mobile landscape) */
      gap: 1px;
      order: 3; 
      padding: 10px 10px;
      justify-content: center;
    
    .itens-menuJS {

      font-size: 14px;
    }
  }
  @media (max-width: 370px) {
      gap: 1px;
      padding: 10px 10px;
      order: 3; /* Coloca o menu embaixo em telas muito pequenas */
      justify-content: center;
    
    .itens-menuJS {
      font-size: 12px;
    }
  }
  @media (max-width: 350px) {
      gap: 1px;
      order: 3; /* Coloca o menu embaixo em telas muito pequenas */
      justify-content: center;
  
    .itens-menuJS {
      font-size: 12px;
`

// import './style.css';

const textoMenu = ['Início', , 'Novidades', 'Categorias', 'Minha Biblioteca'];


function MenuHeader() {
    return (
        <MenuHeaderContainer>
          {textoMenu.map((opcoesMenu) => (
            <li key = {opcoesMenu} className='itens-menuJS'><p>{opcoesMenu}</p></li>
          ))}
        </MenuHeaderContainer>
    );
}

export default MenuHeader;
