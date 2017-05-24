function traductor() {
  //Se importan los elementos desde el DOM
  const s = document.getElementById("palabra")
  const textoTraducido = document.getElementById("textoTraducido")
  const str = (s.value).toLowerCase()
  let texto = str

  //Si la palabra es un palíndromo, no aplica alternan entre mayúsculas y minúsculas, y no aplica ninguna otra regla
  const reversa = (str) => str.toLowerCase().split('').reverse().join('')

  function minMay(str) {
    let mayuscula = true
    const longitud = str.length
    let texto = ''

    for (let i = 0; i < longitud; i++) {
      const caracter = str.charAt(i)
      texto += mayuscula ? caracter.toUpperCase() : caracter.toLowerCase()
      mayuscula = !mayuscula
    }
    return textoTraducido.innerHTML = `La palabra traducida es: <strong>${texto}</strong>`
  }

  if (str.toLowerCase() == reversa(str)) {
    return minMay(str)
  }

  //Si la palabra termina en 'ar', se le quitan esos dos caracteres
  if (str.endsWith('ar')) {
    texto = str.slice(0, -2)
  }

  //Si la palabra inicia con Z, se le añade 'pe' al final
  if (str.startsWith('z')) {
    texto += 'pe'
  }

  //Si la palabra traducida tiene más de 10 caracteres, se parte a la mitad y se une con un guión en medio

}
