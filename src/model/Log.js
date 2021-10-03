import { v4 as uuidv4 } from "uuid";

class Log {
  id;
  status;
  tipo_extracao;
  created_at;
  updated_at;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Log };
