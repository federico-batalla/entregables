//--------------------------------------------------
function cargarAlumnos(
  nombresAlumnos: string[],
  notas1Trimestre: number[],
  notas2Trimestre: number[],
  notas3Trimestre: number[],
  promedios: number[]
): void {
  for (let i = 0; i < nombresAlumnos.length; i++) {
    nombresAlumnos[i] = prompt("ingrese nombre del alumno");
    notas1Trimestre[i] = Number(prompt("ingrese nota 1er trimestree"));
    notas2Trimestre[i] = Number(prompt("ingrese nota 2er trimestree"));
    notas3Trimestre[i] = Number(prompt("ingrese nota 3er trimestree"));
    promedios[i] =
      (notas1Trimestre[i] + notas2Trimestre[i] + notas3Trimestre[i]) / 3;
  }
}

//----------------------------------------------------
function estaAlumno(alumnoABuscar: string, nombresAlumnos: string[]): boolean {
  for (let i = 0; i < nombresAlumnos.length; i++) {
    if (nombresAlumnos[i] === alumnoABuscar) {
      return true;
    }
  }
  return false;
}
//---------------------------------------------------------------------

function mostrarAlumno(
  alumnoABuscar: string,
  nombresAlumnos: string[],
  notas1Trimestre: number[],
  notas2Trimestre: number[],
  notas3Trimestre: number[],
  promedios: number[]
): void {
  for (let i = 0; i < nombresAlumnos.length; i++) {
    if (nombresAlumnos[i] === alumnoABuscar) {
      let idAlumno: number = i;
    }
  }
  console.log("informe de notas");
  console.log("alumno", nombresAlumnos[idAlumno]);
  console.log("1 trimestre", notas1Trimestre[idAlumno]);
  console.log("2do trimestre", notas2Trimestre[idAlumno]);
  console.log("3er trimestre", notas3Trimestre[idAlumno]);
  console.log("tiene promedio", promedios[idAlumno]);
}

//------------------------------------------------------
let cantidadAlumnos: number = Number(prompt("ingrese cantidad de alumnos"));
let nombresAlumnos: String[] = new Array(cantidadAlumnos);
let notas1Trimestre: Number[] = new Array(cantidadAlumnos);
let notas2Trimestre: Number[] = new Array(cantidadAlumnos);
let notas3Trimestre: Number[] = new Array(cantidadAlumnos);
let promedios: Number[] = new Array(cantidadAlumnos);

cargarAlumnos(
  nombresAlumnos,
  notas1Trimestre,
  notas2Trimestre,
  notas3Trimestre,
  promedios
);
let alumnoABuscar: string = prompt("ingrese nombre del alumno a buscar");
if (estaAlumno(alumnoABuscar, nombresAlumnos)) {
  mostrarAlumno(
    alumnoABuscar,
    nombresAlumnos,
    notas1Trimestre,
    notas2Trimestre,
    notas3Trimestre,
    promedios
  );
} else {
  console.log("el alumno no se encuentra");
}
