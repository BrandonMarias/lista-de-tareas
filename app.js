require("colors");

const Tareas = require("./models/tareas");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pause,
  leerInput,
  listaBorrar,
  confirmar,
  listaCompletar
} = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";

  const tareas = new Tareas();
  tareas.cargarTareas(leerDB());

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const { desc } = await leerInput("descripcion");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listarTareas();
        break;

      case "3":
        tareas.listarTareas(true);
        break;

      case "4":
        tareas.listarTareas(false);
        break;

      case "5":
        const ids = await listaCompletar(tareas.listadoArr)
        console.log(ids)
        break;

      case "6":
        const tareaABorrra = await listaBorrar(tareas.listadoArr);
        if (tareaABorrra == "0") break;

        const { ok } = await confirmar("¿Estas Seguro?");
        if (ok) tareas.eliminarTarea(tareaABorrra);

        break;
    }

    guardarDB(tareas.listadoArr);

    await pause();
  } while (opt !== "0");
};

main();
