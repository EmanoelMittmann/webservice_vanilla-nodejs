const GetClientUseCase = require("../usecases/get-clients.usecase");
const GetByIdClientUseCase = require("../usecases/get-by-id-client.usecase");
const MESSAGES = require("../../../contants/exceptions/client.exception.json");
const DEFAULT_CONTENT_TYPE = require("../../../contants/index.contants");
const { CreateClientUseCase } = require("../usecases/create-client.usecase");
const HTTP_STATUS = require("../../../contants/http_status");

const ClientRoutes = {
  "/clients:get": async (_, res) => {
    const getClientUseCase = new GetClientUseCase();

    const data = await getClientUseCase.execute();

    res.writeHead(HTTP_STATUS.OK, DEFAULT_CONTENT_TYPE);
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
      res.writeHead(HTTP_STATUS.NOT_FOUND, DEFAULT_CONTENT_TYPE);
      return res.end(JSON.stringify({ message: MESSAGES.notFound }));
    }

    res.write(
      JSON.stringify({
        data,
      })
    );

    return res.end();
  },
  "/client:post": async (req, res) => {
    const createClientUseCase = new CreateClientUseCase();

    const data = await createClientUseCase.execute(req);

    if (data.error) {
      res.writeHead(HTTP_STATUS.BAD_REQUEST);
      res.write(JSON.stringify(data.error));
    }

    res.writeHead(HTTP_STATUS.OK, DEFAULT_CONTENT_TYPE);
    res.end(JSON.stringify({ message: MESSAGES.created }));
  },
};

module.exports = ClientRoutes;
