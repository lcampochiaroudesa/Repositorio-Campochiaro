let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProducto = queryStringObj.get('id');

let nombreProducto = document.querySelector(".nombreproducto");
let fotoProducto = document.querySelector(".fotoproducto");
let marcaProducto = document.querySelector(".marcaproducto");
let descripcionProducto = document.querySelector(".descripcionproducto");
let precioProducto = document.querySelector(".precio");
let stockProducto = document.querySelector(".stockproducto");
let categoriaProducto = document.querySelector(".categoriaproducto");
let tagsProducto = document.querySelector(".tagsproducto");
let listaReviews = document.querySelector(".listareviews");