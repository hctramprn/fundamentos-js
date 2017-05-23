const nombrePelicula = "Django";
const edadMin = 15;

function comprobarEdad() {
  let n = document.getElementById("nombre");
  let e = document.getElementById("edad");
  let c = document.getElementById("checkbox");
  let confirmacion = document.getElementById("confirmacion");

  let nombre = n.value;
  let edad = parseInt(e.value);

  if (edad >= edadMin) {
    confirmacion.innerHTML = `<strong>${nombre} puede pasar a ver la película</strong>`;
  }
  else if (c.checked) {
    confirmacion.innerHTML = `<strong>Aunque ${nombre} no tiene la edad suficiente, puede pasar a ver la película porque está en compañía de un adulto</strong>`;
  }
  else {
    confirmacion.innerHTML = `<strong>${nombre} no puede pasar a ver la película porque no tienen la edad suficiente</strong>`;
  }

}
