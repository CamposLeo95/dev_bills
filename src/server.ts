import "dotenv/config";
import express, { json } from "express";

import { setupMongo } from "./database";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { routes } from "./routes";

setupMongo().then(() => {
  const app = express();

  app.use(json());
  app.use(routes);
  //! Aqui colocamos o error após as rotas pois se ela der error o controller vai ativar o next e jogar para o error handler que exibirá o erro ao usuário
  app.use(errorHandler);

  app.listen(3333, () => {
    console.log("App is running on port 3333!");
  });
});
