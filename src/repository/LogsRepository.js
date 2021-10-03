import { Log } from "../model/Log.js";

class LogsRepository {
  constructor() {
    this.logs = [];
  }

  create({ status, tipo_extracao }) {
    const log = new Log();

    Object.assign(log, {
      status,
      tipo_extracao,
      created_at: new Date(),
    });

    this.logs.push(log);
  }

  findById({ id }) {
    const log = this.logs.find((log) => log.id === id);
    return log;
  }

  list() {
    return this.logs;
  }
}

export { LogsRepository };
