
const fs = require("fs");

const msg = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./meuarquivo.txt", msg, () => {
    console.log('foi impresso')
});