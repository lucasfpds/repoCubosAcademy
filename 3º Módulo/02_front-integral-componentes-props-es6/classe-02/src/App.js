function Card ({id, card}){
  
  return (
    <div className='card'>
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
      Card {card}
    </div>
  )
}

function App() {
  const cards = [
    {id:'239', texto:'1'},
    {id:'240', texto:'2'},
    {id:'241', texto:'3'},
    {id:'242', texto:'4'},
    {id:'243', texto:'5'},
  ]


  return (
    <div className="App">
      {cards.map((card)=>{
        return <Card id={card.id} key={card.id} card={card.texto} />
      })}
    </div>
  );
}

export default App;
