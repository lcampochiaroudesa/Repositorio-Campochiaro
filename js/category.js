let textoUrl = location.search;
let objetoUrl = new URLSearchParams(textoUrl);
let nombreCategoria = objetoUrl.get("categoria");


console.log(nombreCategoria);

let tituloCategoria = document.querySelector(".titulocategoria");
let listaProductos = document.querySelector(".productosindex");
