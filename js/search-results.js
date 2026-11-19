let textoUrl = location.search
let objetoUrl = new URLSearchParams(textoUrl)
let terminoBuscado = objetoUrl.get("buscador")

let tituloBusqueda = document.querySelector(".titulobusqueda")
let mensajeSinResultados = document.querySelector(".sinresultados")
let listaResultados = document.querySelector(".listaresultados")

tituloBusqueda.innerText = "Resultados de búsqueda para: " + terminoBuscado

fetch(`https://dummyjson.com/products/search?q=${terminoBuscado}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    let productosEncontrados = data.products

    if (productosEncontrados.length == 0){
        mensajeSinResultados.innerText = "No hay resultados para el término: " + terminoBuscado
    } else {
        let articulosResultados = ""

        for (let i = 0; i < productosEncontrados.length; i++){
            articulosResultados += `
                <article class="articulos">
                    <img src="${productosEncontrados[i].thumbnail}" alt="${productosEncontrados[i].title}">
                    <p class="titulo-producto">${productosEncontrados[i].title}</p>
                    <p class="descripcion">${productosEncontrados[i].description}</p>
                    <p class="precio">$${productosEncontrados[i].price}</p>
                    <a href="./product.html?id=${productosEncontrados[i].id}">Ver detalle</a>
                </article>
            `
        }

        listaResultados.innerHTML = articulosResultados
    }
})
.catch(function(error){
    console.log('El error es: ' + error);
})