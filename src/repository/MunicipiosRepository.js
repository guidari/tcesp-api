import { Municipio } from "../model/Municipio.js";

class MunicipiosRepository {
  constructor() {
    this.municipios = [];
  }

  create({ nome, url, tipo_url }) {
    const municipio = new Municipio();

    Object.assign(municipio, {
      nome,
      url,
      tipo_url,
      created_at: new Date(),
    });

    this.municipios.push(municipio);
  }

  findByName({ nome }) {
    const municipio = this.municipios.find(
      (municipio) => municipio.nome === nome
    );
    return municipio;
  }

  list() {
    return this.municipios;
  }
}

export { MunicipiosRepository };
