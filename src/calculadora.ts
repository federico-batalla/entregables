let numero1: number = Number(prompt("ingrese 1er Numero"));
let numero2: number = Number(prompt("ingrese 2do Numero"));
let resultado: number = 0;
let opcion: number = Number(
  prompt("1-suma / 2-resta / 3-multiplicacion / 4-division")
);

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    console.log("el resultado de la suma es :", resultado);
    break;
  case 2:
    resultado = numero1 - numero2;
    console.log("el resultado de la resta es :", resultado);
    break;
  case 3:
    resultado = numero1 * numero2;
    console.log("el resultado de la multiplicacion es :", resultado);
    break;
  case 4:
    resultado = numero1 / numero2;
    console.log("el resultado de la division es :", resultado);
    break;
  default:
    console.log("ingreso un  numero invalido");
}
