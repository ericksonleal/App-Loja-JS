import { useEffect, useState } from "react";

function TesteBackend() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/jogos")
      .then((res) => res.text())
      .then((data) => {
        setMensagem(data);
      })
      .catch((erro) => {
        console.error("Erro ao chamar o backend:", erro);
      });
  }, []);

  return (
    <div>
      <h2>Teste de comunicação com o backend</h2>
      <p>Resposta do servidor: {mensagem}</p>
    </div>
  );
}

export default TesteBackend;
