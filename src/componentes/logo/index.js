import logo from '../../imagens/reddead-loading.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    padding: 0;
    left: 2%;
    margin-right: 0;
    flex-shrink: 0; /* Impede que a logo encolha demais */

  .App-logo {
    pointer-events: none;
    width: 40px; /* Tamanho fixo para controle */
    height: 40px;
    flex-shrink: 0;
    user-select: none; /*Impede que o usuário selecione a imagem*/
  }

  @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear; /* essa animação vai ser executada 30 vezes */
  }
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .nome-logo {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: clamp(14px, 2.5vw, 24px); /* Fonte responsiva */
    color: #2e2c2c;
    user-select: none;
    margin-left: 0.2rem;
    white-space: nowrap; /* Impede quebra de linha */
  }

  /* MEDIA QUERIES PARA RESPONSIVIDADE */
  @media (max-width: 1208px) {
      width: 60px;
      font-size: 16px;
      top: 2%;
      order: 1;
     
    .nome-logo {
      font-size: 20px;
      margin-left: 0.4rem;
      flex-shrink: 0;
    }
  }
  @media (max-width: 480px) { 
      width: 60px;

    .nome-logo {
      font-size: 15px;
      margin-left: 0.3rem;
    }

  }
  @media (max-width: 360px) {
    .nome-logo {
      display: none; /* Esconde o texto da logo se não couber */
    }
  }
`
function Logo() {
  return (
    <LogoContainer>
      <img 
      src={logo} 
      className='App-logo' 
      alt='logo' 
      width={60}>

      </img>
      <p className='nome-logo'>Game<strong>Store</strong></p>
    </LogoContainer>
  );
}

export default Logo


