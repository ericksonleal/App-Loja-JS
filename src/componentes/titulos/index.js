import styled from "styled-components";


export const Titulos = styled.h2`
    display: flex;
    flex-wrap: wrap;
    margin: ${props => props.margin || '0.3rem auto'};
    color: ${props => props.cor || "#0c495cff"}; 
    justify-content: ${props => props.alinhamentoConteudo || 'center'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamentoTexto || 'center'};
    align-items: ${props => props.alinhamentoItens || 'center'};
    white-space: nowrap; /* Impede quebra de Texto/ Linhas */
    

        /*justify-content: center;  Centralizar o conteúdo HORIZONTALMENTE */
        /*align-items: center;  Centralizar o conteúdo VERTICALMENTE */
        /*text-align: center;  Centralizar o texto */

    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", 
             "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif;


    
    @media (max-width: 768px) {
        transform: scale(0.8);
    }   padding: 0px %;

    @media (max-width: 640px) {
        transform: scale(0.7);
    }
       
    }
`

