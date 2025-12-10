import { useEffect, useState } from "react";
import api from "../services/api";

function ListaJogos() {
  const [jogos, setJogos] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarJogos() {
      try {
        const resposta = await api.get("/jogos");
        // axios já faz o JSON.parse pra você:
        setJogos(resposta.data);
      } catch (e) {
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
        <li key={jogo.id}>{jogo.nome}</li>
      ))}
    </ul>
  );
}

export default ListaJogos;