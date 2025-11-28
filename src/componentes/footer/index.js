import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    bottom: 0;
    width: 100%;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    background-color:  #032d4eff;
    border-top: 2px solid rgba(255, 255, 255, 0.18);

    min-height:clamp(50px, 8vh, 100px);
    p {
        color: white;
        font-size: 16px;
    }

    /* Tablet */
    @media (max-width:1208px){
        gap:10px;
        margin-top: auto;
        grid-template-columns: auto 1fr auto;
        min-height:clamp(56px, 10svh, 120px);   
    }
    @media (max-width:660px){

    }
    @media (max-width:460px){
        margin-top: auto;
    }

`
function Footer() {
    return (
        <FooterContainer>
            <p>GameStore© 2025</p>
        </FooterContainer>
    );
}

export default Footer;