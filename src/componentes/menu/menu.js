import './style.css';



function Menu() {
    return (
        <nav className='menu-itens'>
            <div className='menu-item'>Jogos de<strong>Ação</strong></div>
            <div className='menu-item'>Jogos de<strong>Aventura</strong></div>
            <div className='menu-item'>Jogos de<strong>Estratégia</strong></div>
        </nav>
    )
}

export default Menu