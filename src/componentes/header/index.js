import Logo from '../logo';
import MenuHeader from '../menu-header';
import IconesTopo from '../icones-topo';
import './style.css';


function Header() {
    return (
        <header className='App-header'>
            <Logo className='logo' />
            <MenuHeader className='menu-header' />
            <IconesTopo className='icones-topo' />
        </header>
    );
}

export default Header;
