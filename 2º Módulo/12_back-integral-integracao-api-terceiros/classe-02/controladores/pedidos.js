const { query } = require("express");
const instaciaAxios = require("../services/api");
const fs = require("fs");

const consultar = async (req, res) => {
  const ip = req.params.ip;

  try {
    instaciaAxios.defaults.params.ip_address = ip;

    // const pedido = await instaciaAxios.get(`&ip_address=${ip}`);
    // const baseUrl = await instaciaAxios.baseURL
    const pedido = await instaciaAxios.get();
    const result = pedido.data;
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  consultar,
};
