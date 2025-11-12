import Header from './componentes/header';
import Pesquisa from './componentes/pesquisa';
import styled from 'styled-components';

const AppContainer = styled.div`
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100svh;              /* svh lida melhor com barras do mobile */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;           /* cobre toda a área */
    /* background-attachment: fixed;  <- evite em mobile (tremedeira) */
    background-image: linear-gradient(90deg, rgba(23, 236, 236, 0.8), rgb(126, 211, 200));
  
  /* Tablet */
  @media (max-width: 768px) {
      background-attachment: fixed; 
  }
    
  /*  ---------------------  Mobile */
  @media (max-width: 480px) {
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

function App() {
  return (

 
    <AppContainer>
        <Header />
        <Pesquisa />
    </AppContainer>


  );
}

export default App
