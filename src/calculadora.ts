//funcion que dibuja las lineas
function dibujarLineas() {
  let linea: string = "-";
  for (let index = 0; index < 40; index++) {
    linea = linea + "-";
  }
  console.log(linea);
}
// declaracion de variables
let numero1: number = Number(prompt("ingrese 1er Numero"));
let numero2: number = Number(prompt("ingrese 2do Numero"));
let resultado: number = 0;
let opcion: number = Number(
  prompt("1-suma / 2-resta / 3-multiplicacion / 4-division")
);

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarLineas();
    console.log("el resultado de la suma es :", resultado);
    dibujarLineas();
    break;
  case 2:
    resultado = numero1 - numero2;
    dibujarLineas();
    console.log("el resultado de la resta es :", resultado);
    dibujarLineas();
    break;
  case 3:
    resultado = numero1 * numero2;
    dibujarLineas();
    console.log("el resultado de la multiplicacion es :", resultado);
    dibujarLineas();
    break;
  case 4:
    resultado = numero1 / numero2;
    dibujarLineas();
    console.log("el resultado de la division es :", resultado);
    dibujarLineas();
    break;
  default:
    console.log("ingreso un  numero invalido");
}
