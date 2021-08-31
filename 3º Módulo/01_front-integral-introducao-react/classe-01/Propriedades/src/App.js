import alert from './assets/alert.svg';
import close from './assets/close.svg';
import cookie from './assets/cookie.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="divPrincipal">
        <div className="btnFechar">
          <img src={close} alt="fechar janela"/>
        </div>
        <img src={cookie} alt="cookie"/>
        <p>Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</p>
        <a href="#">Tudo Bem!</a>
      </div>
      
      <div className="divPrincipal div2">
        <div className="btnFechar">
          <img src={close} alt="fechar janela"/>
        </div>
          <img src={alert} alt="fechar janela"/>
        <p>Você será deslogado imediatamente!</p>
        <a href="#">Extender Login</a>
      </div>

    </div>
  );
}

export default App;
