import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProdutos } from "../services/produtos"; // ajuste

const ProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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

function ProdutoPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function carregar() {
      const produtos = await getProdutos();
      const encontrado = produtos.find((p) => String(p.id) === String(id));
      setProduto(encontrado || null);
    }
    carregar();
  }, [id]);

  if (!produto) return <p>Produto não encontrado.</p>;

  return (
    <ProdutoContainer>
      <h1>{produto.nome}</h1>
      <img src={produto.src} alt={produto.nome} />
      <p>Categoria: {produto.categoria}</p>
      <p>Preço: {produto.preco}</p>
      {/* aqui você coloca descrição, botão comprar, etc */}
    </ProdutoContainer>
  );
}

export default ProdutoPage;