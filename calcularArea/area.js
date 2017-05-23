function calcularCirculo() {
  let circulo = document.getElementById("radioCirculo");
  let areaCirculo = document.getElementById("areaCirculo");
  let radio = circulo.value;
  let resultadoCirculo = (Math.PI * Math.pow(radio, 2)).toFixed(2);
  areaCirculo.innerHTML = `El área del círculo es <strong>${resultadoCirculo} unidades cuadradas</strong>`
}

function calcularTriangulo() {
  let baseTriangulo = document.getElementById("baseTriangulo");
  let alturaTriangulo = document.getElementById("alturaTriangulo");
  let areaTriangulo = document.getElementById("areaTriangulo");
  let base = baseTriangulo.value;
  let altura = alturaTriangulo.value;
  let resultadoTriangulo = (base * altura / 2).toFixed(2);
  areaTriangulo.innerHTML = `El área del triángulo es <strong>${resultadoTriangulo} unidades cuadradas</strong>`
}

function calcularCuadrado() {
  let ladoCuadrado = document.getElementById("ladoCuadrado");
  let areaCuadrado = document.getElementById("areaCuadrado");
  let lado = ladoCuadrado.value;
  let resultadoCuadrado = (lado * lado).toFixed(2);
  areaCuadrado.innerHTML = `El área del cuadrado es <strong>${resultadoCuadrado} unidades cuadradas</strong>`
}
