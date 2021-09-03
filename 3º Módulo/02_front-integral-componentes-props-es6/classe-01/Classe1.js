import alert from "./assets/alert.svg";
import close from "./assets/close.svg";
import cookie from "./assets/cookie.svg";

function Cards({ textoLink, textoPar, srcClose, srcImg, alt, classAlternative }) {
  return (
    <div className="divPrincipal">
      <div className="btnFechar">
        <img src={srcClose} alt="fechar janela" />
      </div>
      <img src={srcImg}  alt={alt}/>
      <p>{textoPar}</p>
      <a href="#" className={classAlternative} >{textoLink}</a>
    </div>
  );
}

function App() {

    return (
        <div className="App">
            <Cards
                alt="cookie"
                srcClose={close}
                srcImg={cookie}
                textoPar="Nós utilizamos cookies para melhorar nossa UX, analytics e marketing."
                textoLink="Tudo Bem!"
                />
                <Cards
                    alt="alerta"
                    srcClose={close}
                    srcImg={alert}
                    textoPar="Você será deslogado imediatamente!"
                    textoLink="Extender Login!"
                    classAlternative="aDiv2"
                />
        </div>
      );
};


export default App;
