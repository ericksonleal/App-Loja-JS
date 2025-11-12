import Logo from '../logo';
import MenuHeader from '../menu-header';
import IconesTopo from '../icones-topo';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color:#0dafd8;
    box-shadow:0 20px 50px #0a778a;
    display:grid;
    grid-template-columns:auto; /* o fr significa flex-grow que significa encolher */
    align-items:center;
    min-height:clamp(56px, 10svh, 120px);

    /* Tablet */
    @media (max-width:1208px){
        gap:10px;
        margin: 0;
        display: flex;
        grid-template-columns: auto 1fr auto;
        min-height:clamp(56px, 10svh, 120px);   
    }
    @media (max-width:660px){
        display: flex; 

    }
    @media (max-width:460px){
        margin: 0;
    }

`

function Header() {
    return (
        <HeaderContainer>
            <Logo className='logo' />
            <MenuHeader className='menu-header' />
            <IconesTopo className='icones-topo' />
        </HeaderContainer>

    );
}

export default Header;
