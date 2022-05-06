let sueldoActual: number = Number(prompt("ingres sueldo"));
let sueldoFinal = 0;
let aumento,
  porAumento = 0;
if (sueldoActual === 0) {
  console.log("usted no cobra nada");
} else {
  if (sueldoActual > 25000) {
    console.log("sueldo final: ", sueldoActual, "no sufre aumento");
  } else {
    if (sueldoActual >= 0 && sueldoActual <= 15000) {
      porAumento = 20;
    } else if (sueldoActual > 15000 && sueldoActual <= 20000) {
      porAumento = 10;
    } else if (sueldoActual > 20000 && sueldoActual <= 25000) {
      porAumento = 5;
    }
    aumento = (porAumento * sueldoActual) / 100;
    sueldoFinal = sueldoActual + aumento;
    console.log(
      "su sueldo es de ",
      sueldoActual,
      "sueldo final: ",
      sueldoFinal,
      "sufrio un aumento de :",
      aumento,
      " que es un ",
      porAumento,
      " %"
    );
  }
}
