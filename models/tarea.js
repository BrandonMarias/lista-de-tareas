const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  description = "";
  completadoEn = null;

  constructor(description = "") {
    this.description = description;
    this.id = uuidv4();
    this.completadoEn = null;
  }
}

module.exports = Tarea;
