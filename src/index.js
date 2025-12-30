import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/footer';
import Header from './componentes/header';
import Home from './routes';
import Favoritos from './routes/favoritos';
import Biblioteca from './routes/biblioteca';
import Perfil from './routes/perfil';
import Sacola from './routes/sacola';
import Ofertas from './routes/ofertas';
import Categorias from './routes/categorias';
import PesquisaPage from './routes/pesquisaPage';
import ProdutoPage from './routes/produtoPage';





const GlobalStyle = createGlobalStyle`

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
  }

  a:Link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
  }

  li {
    list-style: none;
  }

  ul {
    padding: 0;
  }


`



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/início" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/pesquisa" element={<PesquisaPage />} />
        <Route path="/produto/:id" element={<ProdutoPage />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/sacola" element={<Sacola />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
