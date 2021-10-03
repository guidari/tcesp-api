import Router from "express";
import { MunicipiosRepository } from "./repository/MunicipiosRepository.js";

const municipioRoute = Router();

const municipiosRepository = new MunicipiosRepository();

municipioRoute.post("/", (request, response) => {
  const { nome, receita_url, despesa_url } = request.body;

  const municipioAlreadyExists = municipiosRepository.findByName({ nome });

  if (municipioAlreadyExists) {
    return response.status(404).json({ error: "Municipio já cadastrado" });
  }

  municipiosRepository.create({ nome, receita_url, despesa_url });

  return response.status(201).send();
});

municipioRoute.get("/", (request, response) => {
  const allMunicipios = municipiosRepository.list();
  return response.status(201).json(allMunicipios);
});

municipioRoute.get("/:nome", (request, response) => {
  const { nome } = request.params;

  const municipio = municipiosRepository.findByName({ nome });
  console.log(municipio);

  return response.status(201).json(municipio);
});

export { municipioRoute };
