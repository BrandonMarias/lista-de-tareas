const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  description = "";
  completdoEn = null;

  constructor(description) {
    this.description = description;
    this.id = uuidv4();
    this.completdoEn = null;
  }
}

module.exports = Tarea;
