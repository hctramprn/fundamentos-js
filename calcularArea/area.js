//Espera a que carguen todos los elementos del DOM
window.onload = function() {
  //Importa los inputs del HTML y los asigna a una variable
  let c = document.getElementById("radioCirculo");
  let tb = document.getElementById("baseTriangulo");
  let ta = document.getElementById("alturaTriangulo");
  let sq = document.getElementById("ladoCuadrado");

  //Importa las etiquetas p en donde irán los resultados
  let areaCirculo = document.getElementById("areaCirculo");
  let areaTriangulo = document.getElementById("areaTriangulo");
  let areaCuadrado = document.getElementById("areaCuadrado");

  //Importa los botones del HTML y los asigna a una variable
  let bC = document.getElementById("calcularCirculo");
  let bT = document.getElementById("calcularTriangulo");
  let bSq = document.getElementById("calcularCuadrado");

  //Se prepara el escuchador de eventos que dispara la función al click
  bC.addEventListener("click", calcAreaCirculo);
  bT.addEventListener("click", calcAreaTriangulo);
  bSq.addEventListener("click", calcAreaCuadrado);

  //Se guardan los valores de los inputs
  let radio = c.value;
  let base = tb.value;
  let altura = ta.value;
  let lado = sq.value;
};


//Funciones que calculan el área de cada figura
var calcAreaCirculo = function(radio) {
  var resultadoCirculo = Math.PI * Math.pow(radio, 2);
  console.log(Math.PI * Math.pow(radio, 2));
  console.log(resultadoCirculo);
  areaCirculo.innerHTML = ("El área del círculo es de " + resultadoCirculo)
};

/*
let calcAreaCirculo = (radio) => {
  let resultadoCirculo = parseInt(Math.PI * Math.pow(radio, 2));
  console.log(parseInt(Math.PI * Math.pow(radio, 2)));
  console.log(resultadoCirculo);
  areaCirculo.innerHTML = ("El área del círculo es de -" + resultadoCirculo)
};*/

let calcAreaTriangulo = (base, altura) => {
  let resultadoTriangulo = base * altura / 2;
  console.log(resultadoTriangulo);
  areaTriangulo.innerHTML = `El área del triángulo es de ${resultadoTriangulo}`
};

let calcAreaCuadrado = (lado) => {
  let resultadoCuadrado = lado * lado;
  console.log(resultadoCuadrado);
  areaCuadrado.innerHTML = `El área del cuadrado es de ${resultadoCuadrado}`
};

//Se agregan los
