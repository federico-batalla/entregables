let valorIntroducido: number = Number(prompt("introduzca valor"));
let numerosTotales: number = 0;
let numerosPositivos: number = 0;
while (valorIntroducido !== 0) {
  numerosTotales++;

  if (valorIntroducido > 0) {
    numerosPositivos++;
  }
  valorIntroducido = Number(prompt("introduzca valor"));
}
let porcentaje: number = (numerosPositivos * 100) / numerosTotales;
console.log(
  "cantidad de numeros positivos  ",
  numerosPositivos,
  "es el ",
  porcentaje,
  " % del total"
);
