const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const { responseStandard } = require("./service/resTemp");

const chatRoutes = require("./routes/ChatRoutes");
// const validationApi = require("./app/middlewares/ApiValidation");

app.use("/", chatRoutes);

app.use((req, res, next) => {
  responseStandard(404, {}, res, "Endpoint Is Not Found");
});

app.listen(port || 4000, () => console.log(`API Running In Port ${port}`));
