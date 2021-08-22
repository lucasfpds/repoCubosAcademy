const { query } = require("express");
const instaciaAxios = require("../services/api");
const fs = require("fs");

const consultar = async (req, res) => {
  try {
    let arr = JSON.parse(fs.readFileSync("dados.json").toString());
    // arr.push(fs.readFileSync('dados.json').toString())
    // arr[0] = JSON.parse(arr[0])
    console.log(arr);

    const pedido = await instaciaAxios.get();
    const result = pedido.data;

    if (result.name) {
      // // console.log(pedido.data);
      res.send(result);
      arr.push(result);
      arr = JSON.stringify(arr, null, 2);
      // console.log(arr);
      fs.writeFileSync("dados.json", arr);
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  consultar,
};
