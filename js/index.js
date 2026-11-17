let seccionDeportes = document.querySelector(".productosdeportes");
let seccionTelefonos = document.querySelector(".productostelefonos");


fetch('https://dummyjson.com/products/category/sports-accessories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let productosDeportes = data.products;
        let articulosDeportes = "";

        for (let i = 0; i < productosDeportes.length; i++) {
            articulosDeportes += `
                <article class="articulos">
                    <img src="${productosDeportes[i].thumbnail}" alt="${productosDeportes[i].title}">
                    <p class="titulo-producto">${productosDeportes[i].title}</p>
                    <p class="descripcion">${productosDeportes[i].description}</p>
                    <p class="precio">$${productosDeportes[i].price}</p>
                    <a href="./product.html?id=${productosDeportes[i].id}">Ver detalle</a>
                </article>
            `;
        }

        seccionDeportes.innerHTML = articulosDeportes;
    })