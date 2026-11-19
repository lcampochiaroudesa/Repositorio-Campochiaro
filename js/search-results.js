let textoUrl = location.search
let objetoUrl = new URLSearchParams(textoUrl)
let terminoBuscado = objetoUrl.get("buscador")

let tituloBusqueda = document.querySelector(".titulobusqueda")
let mensajeSinResultados = document.querySelector(".sinresultados")
let listaResultados = document.querySelector(".listaresultados")
