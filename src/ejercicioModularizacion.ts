//------------------funciones------------------------
function esMultiplo(dividendo: number, divisor: number): boolean {
  let resto: number = dividendo % divisor;
  if (resto === 0) {
    return true;
  }
  return false;
}

//--------------------------------------------------------
function cantidadDeDivisores(dividendo: number): number {
  let cantidadDivisores: number = 0;
  for (let indice = 1; indice <= dividendo; indice++) {
    if (esMultiplo(dividendo, indice)) {
      cantidadDivisores++;
    }
  }
  return cantidadDivisores;
}
//----------Programa Principal-------------------------
let numeroIngresado: number = Number(prompt("ingrese un numero"));
console.log(
  "la cantidad de divisores de ",
  numeroIngresado,
  "es",
  cantidadDeDivisores(numeroIngresado)
);
