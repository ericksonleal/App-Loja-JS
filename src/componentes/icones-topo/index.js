import './style.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const iconesTopo = [perfil, sacola];

function IconesTopo() {
    return (
        <ul className='icones-topo'>
          {iconesTopo.map((icone) => (
            <li className='itens-icones-topo'>
              <img src={icone} alt='icone' width={30}></img>
            </li>
          ))}
        </ul>
    )
}

export default IconesTopo;