import Pesquisa from '../componentes/pesquisa';
import styled from 'styled-components';
import Lancamentos from '../componentes/lancamentos';
import TesteBackend2 from '../services/testeBackend2';
import { getProdutos } from "../services/produtos"; // ajuste o caminho
// import { Titulos } from './componentes/titulos';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap;  Talvez seja o melhor formato*/
    flex: 1;
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 81.8svh;              /* svh lida melhor com barras do mobile */

    background-size: cover;           /* cobre toda a área */
    background-image: linear-gradient(90deg, rgba(23, 236, 236, 0.8), rgb(126, 211, 200));
  
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

function Home() {

  return (
    <AppContainer>

    </AppContainer>
  );
}

export default Home
