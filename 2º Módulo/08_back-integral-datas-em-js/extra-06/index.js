const {format} = require('date-fns')

function promocao (dataInicio, dataTermino){

dataMax = new Date(dataInicio.setDate(dataInicio.getDate()+1));

if(dataMax >= dataTermino){
  console.log(true)
} else {
  console.log(false)
}

};


promocao(new Date(2021,3,26,7,59),new Date(2021,3,27,7,59));