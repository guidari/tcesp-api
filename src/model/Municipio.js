import { v4 as uuidv4 } from "uuid";

class Municipio {
  id;
  nome;
  url;
  tipo_url;
  created_at;
  updated_at;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Municipio };
