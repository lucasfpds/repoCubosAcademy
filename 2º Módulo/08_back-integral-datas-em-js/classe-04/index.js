const {format} = require('date-fns')



function taAberto(data){
dataDia = format(data, 'EEE')

  if(dataDia === "Sat" || dataDia === "Sun"){
    console.log(false)
  } else {
    if(data.getHours() >= 8 && data.getHours() <=18){
    console.log(true)
  } else {
    console.log(false)
  }
  }
}

taAberto(new Date(2021,3,25,12)); // deve retornar false, pois é um domingo

taAberto(new Date(2021,3,26,12)); // deve retornar true, pois é uma segunda

taAberto(new Date(2021,3,26,7,59)); // deve retornar false, pois é muito cedo (7h59)
 