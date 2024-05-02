const GetClientUseCase = require("../usecases/get-clients.usecase");
const GetByIdClientUseCase = require("../usecases/get-by-id-client.usecase");
const MESSAGES = require("../../../contants/exceptions/client.exception.json");
const DEFAULT_CONTENT_TYPE = require("../../../contants/index.contants");
const Client = require("../entities/client.entity");

const ClientRoutes = {
  "/clients:get": async (_, res) => {
    const getClientUseCase = new GetClientUseCase();

    const data = await getClientUseCase.execute();

    res.write(
      JSON.stringify({
        data,
      })
    );

    return res.end();
  },
  "/client:get": async (req, res) => {
    const { id } = req.queryString;

    const getByIdClientUseCase = new GetByIdClientUseCase();
    const data = await getByIdClientUseCase.execute(id);

    if (!data) {
      res.writeHead(404, DEFAULT_CONTENT_TYPE);
      return res.end(JSON.stringify({ message: MESSAGES.notFound }));
    }

    res.write(
      JSON.stringify({
        data, 
      })
    );

    return res.end();
  },
  "/client:post": async (req,res) => {
      
  }
};

module.exports = ClientRoutes;
