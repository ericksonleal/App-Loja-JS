import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getProdutos } from "../services/produtos"; // ajuste o caminho
import { getProdutosPorCategoria } from "../services/produtos"; // novo import


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-size: cover;           
    background-image: linear-gradient(90deg, rgba(23, 236, 236, 0.8), rgb(126, 211, 200));
    background-attachment: fixed;
    min-height: 81.8svh;
`

const SectionProdutosContainer = styled.section`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1.5rem;



    .resultados-pesquisa {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #021a2bff;
        box-shadow: 0 15px 30px #0c495cff;
        padding: 1rem 0.5rem 2rem 0.5rem;
        border-radius: 10px;

        max-width: 15rem;
        max-height: 20rem;
        margin: 1rem 0 0 0;
        backdrop-filter: blur(50px);                /*Efeito de blur/fosco*/

        transition: all 0.3s ease;
    }
    .resultados-pesquisa:hover {

        scale: 101%;
        background-color: #073657ff;
        box-shadow: 5px 15px 25px #070d1fff;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    
    }

    .titulo-produto {    
        width: 100%;
        margin: 0.3rem 0;
        justify-content: center;
        color: #e5ebf0ff;
        font-size: 18px;
        user-select: none;
    }

      .descricao-produto {
        margin: 0;
        width: 100%;
        color: #e5ebf0ff;
        font-size: 15px;

        user-select: none;
        padding: 0;

    }
    .preco-pesquisa {
        margin: 0;
        width: 100%;
        padding: 0;
        font-size: 16px;
        color: #0d7515ff;
        font-weight: bold;
        user-select: none;
    }

    .img-capa {
        border: 3px solid #195aa3ad;
        display: static;
        justify-content: center;
        align-items: center;
        width: 13.5rem;
        height: 15rem;
        max-width: 300px;
        max-height: 250px;
        border-radius: 5px;
        margin-top: 0.2rem;
        user-select: none;
    }

    @media (max-width: 1460px) {
        display: flex;
        gap: 0.5rem;
        scale: 0.99;
        margin-top: 0;

        .resultados-pesquisa {
            margin: 0.5rem;
            gap: 0.5rem;
            width: 15rem;
            max-width: 80%;
            max-height: 80%;
            font-size: 18px;
        }

    .resultados-pesquisa:hover {
        scale: 101%;
    }

        .img-capa {
            width: 20rem;
            height: 25rem;
        }
    }
    @media (max-width: 1208px) {
        display: flex;
        scale: 0.98;
        margin-top: 0;

        .resultados-pesquisa {

            gap: 0.5rem;
            margin: 0.5rem;
            max-width: 80%;
            max-height: 80%;

        }

        .resultados-pesquisa:hover {

    }

    }

    @media (max-width: 720px) {
      gap: 1rem;
      padding: 10px 20px;


      .resultados-pesquisa {
        scale: 0.98;
        max-width: 100%;   /* não limita a 80% pra não quebrar o layout */
      }

      .resultados-pesquisa:hover {
        scale: 0.98;
      }
    }


    @media (max-width: 640px) {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 colunas iguais */
            column-gap: 0.2rem;
            padding: 0.5rem 0rem;
            box-sizing: border-box;          /* faz com que o padding seja contado na largura */
            overflow: none;
            width: 100%;
            
          .resultados-pesquisa {
            display: flex;
            align-items: center;
            margin: 0 auto;
            width: 90%;
            box-sizing: border-box;
            height: 25rem; /* altura fixa padrão */
            max-height: 25rem;                
            background: #a0c5d4ec;
            padding: 0.4rem 0.5rem;
            border-radius: 10px;
            box-shadow: 0 15px 30px #0c495cff;
            transform: scale(0.95);
            transition: transform 0.3s ease, height 0.2s ease;

          }

          .resultados-pesquisa:hover {
            transform: scale(1);
            max-height: 26rem; 
            
          }

          .titulo-produto {
            margin: 0;
            padding: 0 0.5rem;
            width: 100%;
            max-width: 150%;
            text-align: center;
            overflow: hidden; 
            font-size: 16px;
            white-space: pre-wrap;
            text-align: start;
            
          }



          /* Gênero e preço continuam normais */
          .descricao-produto {
            margin: 0;
            width: 100%;
            text-align: center;
            font-size: 14px;
            white-space: normal;
          }

          .preco-pesquisa {
            margin: 0 0 0.5rem 0;
            font-weight: bold;
            color: #0a8f32;
          }

          .img-capa {   
              user-select: none;
  

              max-width: 14rem;
              max-height: 17rem;
              margin: 0.1rem 0 0 0;
          }
    }

    @media (max-width: 360px) {
        transform: scale(0.9);

        .resultados-pesquisa:hover {
        transform: scale(0.91);
        }
    }
    
`
const SectionAvisoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #0c495cff;
    font-style: italic;


    @media (max-width: 1208px) {
        scale: 0.9;
    }`

function PesquisaPage() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();

  const [produtos, setProdutos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function fetchProdutos() {
      const produtosDaAPI = await getProdutos();

      //const produtosFiltrados = await getProdutosPorCategoria("RPG"); <-- Exemplo de uso da nova função
      // PARA SER USADO NO FILTRO DE CATEGORIA - PRECISO IDEALIZAR A PÁGINA DE CATEGORIAS PRIMEIRO
      setProdutos(produtosDaAPI);
    }
    fetchProdutos();
  }, []);

const produtosPesquisados = useMemo(() => {
  if (!q) return [];

  return produtos.filter((produto) =>
    (produto.nome && produto.nome.toLowerCase().includes(q)) ||
    (produto.categoria && produto.categoria.toLowerCase().includes(q)) ||
    (Array.isArray(produto.termoBusca) &&
      produto.termoBusca.some((termo) =>
        String(termo).toLowerCase().includes(q)
      ))
  );
}, [q, produtos]);

  useEffect(() => {
    if (!params.get("q")) setStatus("idle");
    else if (!q) setStatus("empty");
    else setStatus(produtosPesquisados.length ? "ok" : "no-results");
  }, [q, params, produtosPesquisados.length]);

  return (
    <PageContainer>
      {/* Mensagens */}
        <SectionAvisoPesquisa>
            {status === "empty" && <p className="hint">Digite algo para pesquisar.</p>}
            {status === "no-results" && <p className="hint">Nenhum resultado para sua pesquisa.</p>}
            {status === "ok" && ( <p className="hint">
                Encontramos <strong>{produtosPesquisados.length} resultado(s)</strong> para sua pesquisa:
                </p>
            )}
        </SectionAvisoPesquisa>

      {/* Lista */}
      <SectionProdutosContainer>
        {status === "ok" &&
          produtosPesquisados.map((produto) => (
            <Link
              key={produto.id}
              to={`/produto/${produto.id}`}
              className="resultados-pesquisa"
            >
              <img className="img-capa" src={produto.src} alt={produto.nome} />
              <p className="titulo-produto">{produto.nome}</p>
              <p className="descricao-produto">Gênero: {produto.categoria}</p>
              <p className="preco-pesquisa">{produto.preco}</p>
            </Link>
          ))}
      </SectionProdutosContainer>
    </PageContainer>
  );
}


export default PesquisaPage;