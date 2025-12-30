import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFavoritos } from "../services/favoritos"; // ajuste o caminho conforme necessário



const FavoritosContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 81.8svh;              /* svh lida melhor com barras do mobile */
    background-size: cover;           /* cobre toda a área */
    background-image: linear-gradient(90deg, rgba(23, 236, 236, 0.8), rgb(126, 211, 200));
    align-items: center;


  /* Tablet */
  @media (max-width: 768px) {
      display: flex;
      background-attachment: fixed; 
  }
    
  @media (max-width: 640px) {
  }

  /*  ---------------------  Mobile */
  @media (max-width: 480px) {
      background-color: #fffefeff;
  }

  /* Telas muito pequenas (mobile landscape) */
  @media (max-width: 360px) {
      gap: 5px;
      order: 3; /* Coloca o menu embaixo em telas muito pequenas */
      flex-direction: column;
      justify-content: center;
      margin-top: 0.5rem;
  }
`
const FavoritoCard = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        background-color: #edf3f7ff;
        box-shadow: 0 15px 30px #0c495cff;
        padding: 10px;
        padding-bottom: 0;
        border-radius: 10px;
        align-items: center;
        height: auto;
        width: 15rem;
        margin: 0;
        margin-top: 1rem;
        backdrop-filter: blur(50px);                /*Efeito de blur/fosco*/
        
        &:hover {
        scale: 101%;
        background-color: #073657ff;
        box-shadow: 5px 15px 25px #070d1fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;            
        }

        alt.img-jogo {
        display: flex;
        margin: auto;
        color: #fcfffcff;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        align-items: center;
        }

        .favorito-nome {
            display: flex;
            flex-wrap: wrap;
            margin: 0.3rem;
            font-size: 16px;
            color: #fcfffcff;
            margin-top: 0.4rem;
            font-weight: bold;
            user-select: none;
        }

`

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos() {
        const favoritosDaAPI = await getFavoritos();
        setFavoritos(favoritosDaAPI);
    }

    useEffect(() => {
        fetchFavoritos([])
    }, [])



    /*React.useEffect(() => {
        async function fetchFavoritos() {
            const favoritosData = await getFavoritos();
            setFavoritos(favoritosData);
        }
        fetchFavoritos();
    }, []);
*/
    return (
        <FavoritosContainer>
            <h1>FAVORITOS</h1>
            {
                favoritos.map((favorito) => (
                    <FavoritoCard key={favorito.id}>
                        <Link to={`/produto/${favorito.id}`}>
                            <div><img className="img-jogo" src={favorito.src} alt={favorito.nome} />
                            <p className="favorito-nome">{favorito.nome}</p>
                            
                            </div>
                        </Link>
                    </FavoritoCard>
                ))
            }
        </FavoritosContainer>
    )   
}


export default Favoritos