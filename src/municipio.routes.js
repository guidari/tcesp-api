import Router from "express";
import { MunicipiosRepository } from "./repository/MunicipiosRepository.js";

const municipioRoute = Router();

const municipiosRepository = new MunicipiosRepository();

municipioRoute.post("/", (request, response) => {
  const { nome, url, tipo_url, status, tipo_extracao } = request.body;

  const municipioAlreadyExists = municipiosRepository.findByName({ nome });

  if (municipioAlreadyExists) {
    return response.status(404).json({ error: "Municipio já cadastrado" });
  }

  municipiosRepository.create({ nome, url, tipo_url, status, tipo_extracao });

  return response.status(201).send();
});

municipioRoute.get("/", (request, response) => {
  const allMunicipios = municipiosRepository.list();
  return response.status(201).json(allMunicipios);
});

municipioRoute.delete("/:id", (request, response) => {
  const { id } = request.params;

  const municipio = municipiosRepository.findById({ id });

  if (!municipio) {
    return response.status(404).json({ error: "Municipio not found" });
  }

  municipiosRepository.delete({ id });

  return response.status(204).send();
});

municipioRoute.get("/:nome", (request, response) => {
  const { nome } = request.params;

  const municipio = municipiosRepository.findByName({ nome });

  return response.status(201).json(municipio);
});

export { municipioRoute };
