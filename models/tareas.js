const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea(des = "") {
    const tarea = new Tarea(des);
    this._listado[tarea.id] = tarea;
  }

  
}

module.exports = Tareas;
