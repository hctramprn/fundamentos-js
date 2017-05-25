function traductor() {
  //Se importan los elementos desde el DOM
  const s = document.getElementById("palabras")
  const textoTraducido = document.getElementById("textoTraducido")
  const palabras = s.value.split(' ')


  textoTraducido.innerHTML = `<strong>El texto traducido es el siguiente: </strong><br><br>`
  for (str of palabras) {

    let texto = str
    //Si la palabra es un palíndromo, no aplica alternan entre mayúsculas y minúsculas, y no aplica ninguna otra regla
    let reversa = (str) => str.toLowerCase().split('').reverse().join('')

    function minMay(str) {
      let mayuscula = true
      let longitud = str.length
      let texto = ''

      for (let i = 0; i < longitud; i++) {
        let caracter = str.charAt(i)
        texto += mayuscula ? caracter.toUpperCase() : caracter.toLowerCase()
        mayuscula = !mayuscula
      }
      textoTraducido.innerHTML += `${texto} `
    }

    if (str.toLowerCase() == reversa(str)) {
      minMay(str)
    }
    else {
      //Si la palabra termina en 'ar', se le quitan esos dos caracteres
      if (str.endsWith('ar')) {
        texto = str.slice(0, -2)
      }

      //Si la palabra inicia con Z, se le añade 'pe' al final
      if (str.startsWith('z')) {
        texto += 'pe'
      }

      //Si la palabra traducida tiene más de 10 caracteres, se parte a la mitad y se une con un guión en medio
      let long = texto.length
      if (long >= 10) {
        let primeraMitad = texto.slice(0, Math.round(long / 2))
        let segundaMitad = texto.slice(Math.round(long / 2))
        texto = `${primeraMitad}-${segundaMitad}`
      }
      textoTraducido.innerHTML += `${texto} `
    }
  }
}
