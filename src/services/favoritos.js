import axios from "axios";

const favoritosAPI = axios.create({
    baseURL: "http://localhost:8000/favoritos", // criei a api com axios, veja que a 
                                            // rota é /jogos
});

async function getFavoritos() {    // API fará um GET na rota /jogos 
                            // para pegar os produtos

    const resposta = await favoritosAPI.get("/"); // o await serve para aguardar
                                                //  a response/resposta da API

    return resposta.data;   // o .data vem do axios e serve para
                            //  retornar os dados da response(resposta)

}


export {
    getFavoritos
}