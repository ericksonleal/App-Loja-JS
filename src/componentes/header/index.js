import Logo from '../logo';
import MenuHeader from '../menu-header';
import IconesTopo from '../icones-topo';
import SearchBar from '../pesquisa/searchBar';
import styled from 'styled-components';


const GeralContainer = styled.header`
    justify-content: center;
    align-items: center;
    
    width: 100%;

`

const HeaderContainer = styled.div`
    display:flex;
    flex-direction: row;   
    gap: 2rem;
    padding: 1rem;
    justify-items: center;




    justify-content: center;
    align-items: center;
    margin: 0;
    
    min-height:clamp(56px, 10svh, 120px);
    background-color: #0dafd8;
    box-shadow:0 20px 50px #0a778a;

    /* Tablet */
    @media (max-width:1208px){
        grid-template-columns: auto auto auto;
        gap: 5rem;


 
        min-height:clamp(56px, 10svh, 120px);   
    }
    @media (max-width:860px){
        gap: 2rem;
    }
    @media (max-width:690px){
        margin: 0;
        gap: 0rem;
        padding: 0rem;

    }        
    @media (max-width:460px){


    }

`
const InferiorContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;!important;
    align-items: center;
    item-align: center;
    width: 100%;
    height: 50px;
    background-color: #0c495cff;

    
    `

function Header() {
    return (
        <GeralContainer>
        <HeaderContainer>
            <Logo className='logo' pathname='/'/>
            <SearchBar />
            <IconesTopo className='icones-topo' />
        </HeaderContainer>
        <InferiorContainer>
            <MenuHeader className='menu-header'/>
        </InferiorContainer>
        </GeralContainer>
    );
}

export default Header;
