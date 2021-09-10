import { props,useState } from "react";
import kelvin from "./assets/kelvin-costa.png"

function App(){

  const [seguir, setSeguir] = useState('');
  const [seguindo, setSeguindo] = useState('hidden');
  const [seguidores, setSeguidores] = useState(140);
  
  function seguirOuNão(){
  }
  function aumentarSeguidores(){
    setSeguidores(seguidores + 1)
    const nSeguir = seguir === '' ? 'hidden' : '';
    setSeguir(nSeguir)
    const nSeguindo = seguindo === 'hidden' ? '' : 'hidden';
    setSeguindo(nSeguindo)
  }

  function diminuirSeguidores(){
    setSeguidores(seguidores - 1)
    const nSeguindo = seguindo === 'hidden' ? '' : 'hidden';
    setSeguindo(nSeguindo)
    const nSeguir = seguir === '' ? 'hidden' : '';
    setSeguir(nSeguir)
  }
    

  return(
    <div>
      <div className={`container `}>
      <img src={kelvin} alt="imagem perfil" />
      <p className={`nome `}>Kelvin Costa</p>
      <p className={`arroba `}>@costa</p>
      <p className={`seguidores `}>{seguidores} seguidores</p>
      <p className={`seguindo  `}>207 seguindo</p>
      </div>
      <button onClick={ aumentarSeguidores} className={`${seguir}`}>SEGUIR</button>
      <button onClick={ diminuirSeguidores} className={`button_seguindo ${seguindo}`}>SEGUINDO</button>
    </div>
  )

}

export default App;