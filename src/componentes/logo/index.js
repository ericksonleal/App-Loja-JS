import logo from '../../imagens/reddead-loading.png';
import './style.css';



function Logo() {
  return (
    <div className="logo">
      <img src={logo} className='App-logo' alt='logo' width={60} color='red'></img>
      <p className='nome-logo'>Game<strong>Store</strong></p>
    </div>
  );
}

export default Logo


