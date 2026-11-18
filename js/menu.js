let listaCategorias = document.querySelector(".lista-categorias");

fetch('https://dummyjson.com/products/categories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let contenido = "";

        for (let i = 0; i < data.length; i++) {
            contenido += `<li><a href="./category.html?categoria=${data[i].slug}">${data[i].name}</a></li>`;
        }

        listaCategorias.innerHTML = contenido;
    })
    .catch(function(error){
        console.log('El error es: ' + error);
    });


let formulario = document.querySelector (".busqueda")
let inputBuscador = document.querySelector ("#buscador")
let errorBuscador = document.querySelector (".error-buscador")

formulario.addEventListener("submit",function(e){
e.preventDefault();

if (inputBuscador.value == "" ){
    errorBuscador.style.display = "block";
    errorBuscador.innerHTML = "<p>Que el campo de búsqueda no esté vacío</p>";
    errorBuscador.style.color = "yellow";
}
    else if (inputBuscador.value.length < 3){
        errorBuscador.style.display = "block";
        errorBuscador.innerHTML = "<p> La búsqueda debe tener al menos 3 caracteres</p>";
        errorBuscador.style.color = "yellow";
    } else {
        this.submit ();
    }
})
