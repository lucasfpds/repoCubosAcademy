import anna from "./assets/anna-bia.png";
import charles from "./assets/charles-santos.png";
import kelvin from "./assets/kelvin-costa.png";
import mario from "./assets/mario-hisashi.png";

function Cards({srcImg, type, arroba, seguidores, seguindo}) {
  return (
    <div className="card" >
      <img src={srcImg} alt={`Imagem ${type}`} />
      <p className="nome">{type}</p>
      <h1 className="arroba">{arroba}</h1>
      <p className="seguidores">{seguidores}</p>
      <p className="seguindo">{seguindo}</p>
    </div>
  );
}

function App() {

  const users = [
    {
      srcImg:kelvin,
      type:'Kelvin Costa',
      arroba:'@costa',
      seguidores:'140 seguidores',
      seguindo:'207 seguindo',
    },
    {
      srcImg:charles,
      type:'Charles Santos',
      arroba:'@charles.santos',
      seguidores:'302 seguidores',
      seguindo:'419 seguindo'
    },
    {
      srcImg: anna,
      type: 'Anna Bia',
      arroba: '@anab',
      seguidores: '842 seguidores',
      seguindo: '150 seguindo'
    },
    {
      srcImg: mario,
      type: 'Mario Hisashi',
      arroba: '@hisashi',
      seguidores: '22 seguidores',
      seguindo: '17 seguindo'
    },
  ]

    return (
      users.map((user)=>{
        
        return (
          <div className="App">
            <Cards
            srcImg={user.srcImg}
            type={user.type}
            key={user.type}
            arroba={user.arroba}
            seguidore={user.seguidores}
            seguindo={user.seguindo}
            />             
          </div>
        )
      })
        
      );
};


export default App;
