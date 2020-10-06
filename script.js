let boton = document.getElementById("boton"); /* guarda la etiqueta */

boton.addEventListener("click", function () {
    let libro = document.getElementById("libro").value /* guarda el texto dentro de la etiueta */
    var lista = document.getElementById("lista"); /* identificamos donde se guardan las nueas etiquetas */
    
    var etiquetaNueva = document.createElement("li")
    etiquetaNueva.textContent = libro /* Dentro de la etiqueta nueva le decimos que le vamos agregar un texto, en este caso la cancion que se inserto en el input */

    lista.appendChild(etiquetaNueva);
})

lista.addEventListener("dblclick", function (e) {
    console.log(e.target)
    let libroE=e.target
    lista.removeChild(libroE)
})

