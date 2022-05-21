//----------------funciones---------------------
/*recibe un arreglo de long 6 e ingresa los 6 numeros, devuelve un arreglo con
6 numeros */
function ingresarNumeros(): number[] {
  let arreglo: number[] = new Array(6);
  for (let indice = 0; indice < 6; indice++) {
    arreglo[indice] = Number(prompt("ingrese los numeros"));
  }
  return arreglo;
}
//----------------------------------------------
/*recibe dos arreglos de long 6 y decuelve la suma de los dos en
 un arreglo de long 6*/
function sumarArreglos(arreglo1: number[], arreglo2: number[]): number[] {
  let resultados: number[] = new Array(6);
  for (let indice = 0; indice < 6; indice++) {
    resultados[indice] = arreglo1[indice] + arreglo2[indice];
  }
  return resultados;
}

//----------------------------------------------
/*recibe 3 arreglos , muestra la suma de los dos primeros  y con el tercero el 
resultado de cada posicion */
function mostrarArreglos(
  arreglo1: number[],
  arreglo2: number[],
  resultados: number[]
) {
  for (let indice = 0; indice < 6; indice++) {
    console.log(
      arreglo1[indice],
      "+",
      arreglo2[indice],
      "=",
      resultados[indice]
    );
  }
}

//---------------programa principal-------------
let numeros1: number[] = new Array(6);
let numeros2: number[] = new Array(6);
let resultados: number[] = new Array(6);

numeros1 = ingresarNumeros();
numeros2 = ingresarNumeros();
resultados = sumarArreglos(numeros1, numeros2);
mostrarArreglos(numeros1, numeros2, resultados);
