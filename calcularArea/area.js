function calcularCirculo() {
  let circulo = document.getElementById("radioCirculo");
  let areaCirculo = document.getElementById("areaCirculo");
  let radio = parseInt(circulo.value);
  let resultadoCirculo = (Math.PI * Math.pow(radio, 2)).toFixed(2);
  areaCirculo.innerHTML = `El área del círculo es <strong>${resultadoCirculo} unidades cuadradas</strong>`
}
