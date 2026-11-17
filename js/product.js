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

fetch(`https://dummyjson.com/products/${idProducto}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    nombreProducto.innerText = data.title
    fotoProducto.src = data.thumbnail

    if (data.brand == undefined){
        marcaProducto.innerText = "Marca: Sin marca"
    } else {
        marcaProducto.innerText = "Marca: " + data.brand
    }

    descripcionProducto.innerText = data.description
    precioProducto.innerText = "$" + data.price
    stockProducto.innerText = "Stock: " + data.stock
    categoriaProducto.innerHTML = `Categoria: <a href="./category.html?categoria=${data.category}">${data.category}</a>`

    let etiquetas = ""
    for (let i = 0; i < data.tags.length; i++){
        if (i < 3){
            etiquetas += `<li>${data.tags[i]}</li>`
        }
    }
    tagsProducto.innerHTML = etiquetas

let reseñas = ""
    for (let i = 0; i < data.reviews.length; i++){
    reseñas += `<article class="reseña">
<p class="estrellas">Rating: ${data.reviews[i].rating}</p>
<p class="comentario">${data.reviews[i].comment}</p>
<p class="fecha">${data.reviews[i].date}</p>
<p class="nombre">${data.reviews[i].reviewerName}</p>
</article>`
    }
listaReviews.innerHTML = reseñas
})
.catch(function(error){
console.log('El error es: ' + error);
})