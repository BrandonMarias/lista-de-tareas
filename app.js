const color = require("colors");

const Tareas = require("./models/tareas");

const { inquirerMenu, pause, leerInput} = require("./helpers/inquirer");
console.clear();

const main = async () => {
  // console.log("hola mundo");
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    // console.log({ opt });

    // const tarea = new Tarea("comprar comida");
    // const tareas = new Tareas();

    // tareas._listado[tarea.id] = tarea;

    // console.log(tareas);

    switch (opt) {
      case "1":
        const {desc} = await leerInput('descripcion')
        tareas.crearTarea(desc)
        break;

      case "2":
        console.log(tareas._listado)
        break;

      case "3":
        break;

      case "4":
        break;

      case "5":
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();
