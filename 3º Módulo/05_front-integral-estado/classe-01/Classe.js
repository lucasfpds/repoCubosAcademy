import { useState } from "react";
import close from "./assets/close.svg";
import cookie from "./assets/cookie.svg";

function FecharModal({ imagemBiscoito, imagemBotaoFechar, fechar, fecharModal }) {

  return (
    <div className={`container ${fechar}`}>
      <button className={'imagemBotaoFechar'} onClick={fecharModal}>
        <img src={imagemBotaoFechar} alt="botão fechar" />
      </button>
      <img className={'imagemBiscoito'} src={imagemBiscoito} alt="biscoito" />
      <p>
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </p>
      <button className={'fecharModal'} onClick={fecharModal}>Tudo bem!</button>
    </div>
  );
}

function App() {

  const [fechar, setFechar] = useState('');

  function fecharModal(){
    const nFechar = fechar === '' ? 'hidden' : '';
    setFechar(nFechar)
  }

  return (
    <div>
      <FecharModal imagemBotaoFechar={close} imagemBiscoito={cookie} fechar={fechar} fecharModal={fecharModal}  />
    </div>
  );
}

export default App;
