import Router from "express";
import { LogsRepository } from "./repository/LogsRepository.js";

const logRoute = Router();

const logsRepository = new LogsRepository();

logRoute.post("/", (request, response) => {
  const { status, tipo_extracao } = request.body;

  logsRepository.create({ status, tipo_extracao });

  return response.status(201).send();
});

logRoute.get("/", (request, response) => {
  const allLogs = logsRepository.list();
  return response.status(201).json(allLogs);
});

logRoute.get("/:id", (request, response) => {
  const { id } = request.params;

  const log = logsRepository.findById({ id });

  return response.status(201).json(log);
});

export { logRoute };
