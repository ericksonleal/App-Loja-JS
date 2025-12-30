import axios from "axios";

const produtosAPI = axios.create({
    baseURL: "http://localhost:8000/produtos", // criei a api com axios, veja que a 
                                            // rota é /jogos
});

async function getProdutos() {    // API fará um GET na rota /jogos 
                            // para pegar os produtos

    const resposta = await produtosAPI.get("/"); // o await serve para aguardar
                                                //  a response/resposta da API

    return resposta.data;   // o .data vem do axios e serve para
                            //  retornar os dados da response(resposta)

}

async function getProdutosPorCategoria(categoria) {
  const resposta = await produtosAPI.get(`/categoria/${encodeURIComponent(categoria)}`);
  return resposta.data;
}

export {
    getProdutos,
    getProdutosPorCategoria
}