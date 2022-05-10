let valor: number = Number(prompt("introduzca valor"));
let contador: number = 0;
let ceros: number = 0;
while (valor !== 0) {
  contador = contador + 1;

  if (valor > 0) {
    ceros = ceros + 1;
  }
  valor = Number(prompt("introduzca valor"));
}
let porcentaje: number = (ceros * 100) / contador;
console.log(
  "cantidad denumeros > 0 ingresados: ",
  ceros,
  "es el ",
  porcentaje,
  " % del total"
);
