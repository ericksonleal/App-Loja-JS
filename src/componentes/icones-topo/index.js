import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconesTopoContainer = styled.ul`
    gap: clamp(10px, 2vw, 20px); /* Gap responsivo */
    list-style: none;
    align-items: center;
    position: absolute;
    right: 2%;
    display: flex;

  .itens-icones-topo {
    width: clamp(1.5rem, 4vw, 2rem); /* Largura responsiva */
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .itens-icones-topo:hover {
    scale: 108%;
  }
  /* MEDIA QUERIES PARA RESPONSIVIDADE */
  @media (max-width: 1208px) { 
      gap: 1rem;
      margin-right: 0.3rem;
      position: fixed;
      right: 10px;
      top: 1%;
      order: 2;
  }
  @media (max-width: 480px) {  
      gap: 20px;
      margin-right: 0.3rem;

    .itens-icones-topo {
      width: 1.3rem;
    }
  }
`

const iconesTopo = [perfil, sacola];

function IconesTopo() {
    return (
        <IconesTopoContainer>
          {iconesTopo.map((icone) => (
            <li key={icone} className='itens-icones-topo'>
              <img src={icone} alt='icone' width={30}></img>
            </li>
          ))}
        </IconesTopoContainer>
    )
}

export default IconesTopo;