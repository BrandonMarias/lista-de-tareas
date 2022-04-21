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
      console.log(tareas);
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

  listadoCompleto() {
    // const tareas = this.listadoArr;
    // let lista = '';

    // for (let i = 0; i< tareas.length; i++) {
    // lista += `${`${i+1}.`.green} ${tareas[i].description} :: ${tareas[i].completdoEn? `completado`.green : `incompleta`.red} \n`
    // }

    // console.log(lista)

    console.log();
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.green;
      const { description, completadoEn } = tarea;
      const estado = completadoEn ? `completada`.green : `incompleta`.red;

      console.log(`${idx} ${description} :: ${estado}`);
    });
  }
}

module.exports = Tareas;
