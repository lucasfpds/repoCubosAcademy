const aws = require('../servicos/aws');

const upload = async (req, res) => {
    const {imagem,nome}=req.body;

    const buffer = Buffer.from(imagem, 'base64');

    try {
        await aws.enviarImagem(nome, buffer);

        const resposta = {
            imagem: nome,
            urlImagem: aws.urlCompleta(nome)
        }

        return res.status(200).json(resposta)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

module.exports={
    upload
}