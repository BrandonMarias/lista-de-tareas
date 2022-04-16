const color = require("colors");
const { resolve } = require("path");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log("==========================".rainbow);
    console.log("   selecione una opción  ".rainbow);
    console.log("==========================\n".rainbow);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas pendientes`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Conteplar tareas`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Selecione una opción: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPresione ${"ENTER\n".green}`, (opt) => {
        readLine.close();
        resolve();
    });
  });
};

module.exports = { mostrarMenu, pausa };
