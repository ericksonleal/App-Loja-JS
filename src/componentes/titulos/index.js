import styled from "styled-components";


export const Titulos = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: ${props => props.cor || "#0c495cff"};
    margin-top: 0;
    margin-bottom: 0.5rem;




    @media (max-width: 1208px) {
        scale: 0.9;
    }

    @media (max-width: 768px) {
        scale: 0.8;
    }
`

