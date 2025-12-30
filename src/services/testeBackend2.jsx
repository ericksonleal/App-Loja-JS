import { useEffect, useState } from "react";
import api from "../services/api";

function ListaJogos() {
  const [jogos, setJogos] = useState([]); // jogos = state. state serve para armazenar os dados
  const [erro, setErro] = useState("");

  useEffect(() => { // useEffect serve para executar uma função quando o componente for renderizado
    async function carregarJogos() { // async serve para executar uma função assíncrona
      try {
        const resposta = await api.get("/jogos");
        // axios já faz o JSON.parse pra você:
        setJogos(resposta.data);
      } catch (e) { // essa linha captura o erro
        console.error(e);
        setErro("Erro ao carregar jogos");
      }
    }

    carregarJogos();
  }, []);

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <ul>
      {jogos.map((jogo) => (
        <li key={jogo.id}>{jogo.nome} | {jogo.categoria}</li>
      ))}
    </ul>
  );
}

export default ListaJogos;