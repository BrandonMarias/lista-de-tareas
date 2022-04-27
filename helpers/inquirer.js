const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tarea`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Eliminar tarea`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".rainbow);
  console.log("   selecione una opción  ".white);
  console.log("==========================\n".rainbow);
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pause = async () => {
  console.log(`\n`);
  return await inquirer.prompt({
    type: "input",
    name: "pause",
    message: `presione ${"ENTER".green} para continuar`,
  });
};

const leerInput = async (message) => {
  return await inquirer.prompt({
    type: "input",
    name: "desc",
    message,
    validate(value) {
      if (value.length === 0) {
        return "ingrese un valor";
      }
      return true;
    },
  });
};

const listaBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    return {
      value: tarea.id,
      name: `${`${i + 1}.`.green} ${tarea.description}`,
    };
  });

  choices.unshift({
    value: "0",
    name: `${"0.".green} Cancelar`,
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  return await inquirer.prompt({
    type: "confirm",
    name: "ok",
    message,
  });
};

const listaCompletar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    return {
      value: tarea.id,
      name: `${`${i + 1}.`.green} ${tarea.description}`,
      checked: true
    };
  });


  const preguntas = [
    {
      type: "checkbox",
      name: "ids",
      message: "seleciones",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(preguntas);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  leerInput,
  listaBorrar,
  confirmar,
  listaCompletar,
};
