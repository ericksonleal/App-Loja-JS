import styled from 'styled-components';
import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md"; Sacola
import { HiOutlineShoppingCart } from "react-icons/hi";
//import { FcLike } from "react-icons/fc";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';


const IconesTopoContainer = styled.ul`
    display: flex;
    justify-content: center;

    align-items: center;
    gap: clamp(10px, 2vw, 20px); /* Gap responsivo */
    font-size: clamp(25px, 1.5vw, 30px); /* o clamp vai adaptar o tamanho da fonte de acordo com o tamanho da tela */

  .itens-icones-topo {
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .itens-icones-topo:hover {
    scale: 108%;
    color: #e7eaeb;
    shadow: 0 0 10px #e7eaeb;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  /* MEDIA QUERIES PARA RESPONSIVIDADE */
  @media (max-width: 1208px) { 
      gap: 1rem;
      right: 20%;
      top: 1%;

  }

  @media (max-width: 640px) {
        transform: scale(0.9);
  }
  @media (max-width: 480px) {  
      gap: 20px;
      margin-right: 0.3rem;

    .itens-icones-topo {
      width: 1.3rem;
    }
  }
`


function IconesTopo() {
    return (
        <IconesTopoContainer>
            <Link to='/favoritos'><MdFavoriteBorder className='itens-icones-topo' /></Link>
            <Link to='/sacola'><HiOutlineShoppingCart className='itens-icones-topo' /></Link>
            <Link to='/perfil'><FaRegUserCircle className='itens-icones-topo' /></Link>
        </IconesTopoContainer>
    )
}

export default IconesTopo;