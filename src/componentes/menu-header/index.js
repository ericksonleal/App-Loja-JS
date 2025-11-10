import './style.css';


const textoMenu = ['Início', 'Jogos de Ação', 'Jogos de Aventura', 'Jogos de Estratégia'];

function MenuHeader() {
    return (
        <ul className='menuJS'>
          {textoMenu.map((texto) => (
            <li className='itens-menuJS'><p>{texto}</p></li>
          ))}
        </ul>
    );
}

export default MenuHeader;