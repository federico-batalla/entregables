let numero1: number = Number(prompt("ingrese numero 1"));
let numero2: number = Number(prompt("ingrese numero 2"));
let suma: number = 0;

// ordeno los numero para que el primero sea el mayor siempre
if (numero2 < numero1) {
  let aux = numero1;
  numero1 = numero2;
  numero2 = aux;
}

for (let indice = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
console.log(suma);
