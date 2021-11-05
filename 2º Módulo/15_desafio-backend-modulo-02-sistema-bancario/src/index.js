const app = require("./servidor");
const swaggerUi = require("swagger-ui-express");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("../swagger.json")));
app.listen(3000);
