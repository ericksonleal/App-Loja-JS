// src/services/rawgApi.js

const API_BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

// termoBusca é o texto que o usuário digitou
export async function buscarJogosRawg(termoBusca) {
  const params = new URLSearchParams({
    key: API_KEY,
    page_size: 10, // quantidade de jogos por busca
    search: termoBusca, // endpoint /games?search=...
  });

  const url = `${API_BASE_URL}/games?${params.toString()}`;

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error('Erro ao buscar jogos na RAWG');
  }

  const data = await resposta.json();

  // Adaptar o formato para bater com o que seu componente usa hoje
  const jogosAdaptados = data.results.map((game) => ({
    id: game.id,
    nome: game.name,
    nomePopular: game.name, // poderia usar game.slug se quiser mais "apelido"
    categoria: game.genres?.map((g) => g.name).join(' / ') || 'Sem categoria',
    preco: 'R$ 300,00', // placeholder por enquanto
    src: game.background_image, // imagem do jogo
  }));

  return jogosAdaptados;
}
