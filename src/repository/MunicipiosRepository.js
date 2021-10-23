import { Municipio } from "../model/Municipio.js";

class MunicipiosRepository {
  constructor() {
    this.municipios = [];
  }

  create({ nome, url, tipo_url, status, tipo_extracao }) {
    const municipio = new Municipio();

    Object.assign(municipio, {
      nome,
      url,
      tipo_url,
      tipo_extracao,
      status,
      created_at: new Date(),
    });

    this.municipios.push(municipio);
  }

  delete({ id }) {
    const municipioIndex = this.municipios.findIndex(
      (municipio) => municipio.id === id
    );

    this.municipios.splice(municipioIndex, 1);
  }

  findByName({ nome }) {
    const municipio = this.municipios.find(
      (municipio) => municipio.nome === nome
    );
    return municipio;
  }

  findById({ id }) {
    const municipio = this.municipios.find((municipio) => municipio.id === id);
    return municipio;
  }

  list() {
    return this.municipios;
  }
}

export { MunicipiosRepository };
