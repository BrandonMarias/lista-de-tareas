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

  cargarTareas(tareas = []) {
    if (tareas) {
      tareas.forEach((tarea) => {
        this._listado[tarea.id] = tarea;
      });
    }
  }

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  listarTareas(completadas = null) {
    let idx = 1;

    this.listadoArr.forEach((tarea) => {
      const { description, completadoEn } = tarea;
      const estado = completadoEn ? `completada`.green : `incompleta`.red;

      if (completadas === null) {
        //regresa listado completo
        console.log(`${idx}. ${description} :: ${estado}`);
        idx++;
      } else if (completadas && completadoEn) {
        // regresa listado de completadas
        console.log(`${idx}. ${description} :: ${completadoEn.green}`);
        idx++;
      } else if (!completadas && !completadoEn) {
        // regresa estado de incompletas
        console.log(`${idx}. ${description} :: ${estado}`);
        idx++;
      }
    });
  }

  eliminarTarea(id) {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  editarTarea(id, desc = "sol") {
    if (this._listado[id]) {
      this._listado[id].description = desc;
      console.log("tarea editada");
    }
  }

  completarTarea(ids = []) {
    ids.forEach((id) => {
      if (!this._listado[id].completadoEn) {
        this._listado[id].completadoEn = new Date().toISOString();
      }
    });

    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
