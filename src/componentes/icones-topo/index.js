import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';
import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md"; Sacola
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { MdFavoriteBorder } from "react-icons/md";






const IconesTopoContainer = styled.ul`
    gap: clamp(10px, 2vw, 20px); /* Gap responsivo */
    font-size: clamp(25px, 1.5vw, 30px); /* o clamp vai adaptar o tamanho da fonte de acordo com o tamanho da tela */
    align-items: center;
    right: 2%;
    position: absolute;
    display: flex;

  .itens-icones-topo {
    width: clamp(1.5rem, 4vw, 2rem); /* Largura responsiva */
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .itens-icones-topo:hover {
    scale: 108%;
    color: #e7eaeb;
    shadow: 0 0 10px #e7eaeb;
  }
  /* MEDIA QUERIES PARA RESPONSIVIDADE */
  @media (max-width: 1208px) { 
      gap: 1rem;
      margin-right: 0.3rem;
      right: 10px;
      top: 1%;

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
            
            <MdFavoriteBorder className='itens-icones-topo' />
            <HiOutlineShoppingCart className='itens-icones-topo' />
            <FaRegUserCircle className='itens-icones-topo' />
        </IconesTopoContainer>
    )
}

export default IconesTopo;