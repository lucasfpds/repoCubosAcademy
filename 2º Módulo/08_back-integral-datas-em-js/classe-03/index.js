const {format} = require('date-fns')

function taAberto(data){
    if(data.getHours() >= 8 && data.getHours() <= 18 ){
      console.log(true)
    } else {
      console.log(false)
    }
  }
  
  
  taAberto(new Date(2015,1,1,2))