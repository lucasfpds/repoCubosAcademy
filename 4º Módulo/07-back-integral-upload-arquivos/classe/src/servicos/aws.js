require("dotenv").config();

const AWS = require("aws-sdk");
const fs = require("fs"); // Needed for example below

const spacesEndpoint = new AWS.Endpoint("sfo3.digitaloceanspaces.com");
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACES_KEY,
  secretAccessKey: process.env.SPACES_SECRET,
});

// const enviarImagem = async (nome, imagem) => {
//   const params = {
//     Bucket: process.env.BUCKET,
//     Key: nome,
//     Body: imagem,
//     ACL: "public-read",
//   };

//   return await s3.putObject(params, function (err, data) {
//     if (err) {
//       console.log(err, err.stack);
//     } else {
//       console.log(data);
//     }
//   });
// };

const enviarImagem = async (nome, imagem) => {
  return await s3
    .putObject({
      Bucket: process.env.BUCKET,
      Key: nome,
      Body: imagem,
      ACL: "public-read",
    })
    .promise();
};

// const excluirImagem = async (nome) => {
//   return await s3.deleteObject({
//       Bucket: process.env.BUCKET,
//       Key: nome,
//     }).promisse();
// };

const excluirImagem = async (nome) => {
  const params = {
    Bucket: process.env.BUCKET,
    Key: nome,
  };

  s3.deleteObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
};

const urlCompleta = (nome) => {
  return `https://${process.env.BUCKET}.sfo3.digitaloceanspaces.com/${nome}`;
};

module.exports = {
  enviarImagem,
  excluirImagem,
  urlCompleta,
};
