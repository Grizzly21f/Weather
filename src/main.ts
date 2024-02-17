import { configs } from "./configs/config";
import { weatherRouter } from "./router/weather.router";
import * as swaggerDocument from "./utils/swagger.json";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerUi = require("swagger-ui-express");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/weather", weatherRouter);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = configs.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
