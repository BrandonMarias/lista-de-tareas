require("colors");

const Tareas = require("./models/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pause, leerInput } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";

  const tareas = new Tareas();
  tareas.cargarTareas(leerDB());

  do {
    opt = await inquirerMenu();

    // console.log({ opt });

    // const tarea = new Tarea("comprar comida");
    // const tareas = new Tareas();

    // tareas._listado[tarea.id] = tarea;

    // console.log(tareas);

    switch (opt) {
      case "1":
        const { desc } = await leerInput("descripcion");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        break;

      case "4":
        break;

      case "5":
        break;
    }

    guardarDB(tareas.listadoArr);

    await pause();
  } while (opt !== "0");
};

main();
