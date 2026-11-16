fetch('https://dummyjson.com/products')
.then(function(response){
 return response.json();
})
.then(function(data){
   
})


let formulario = document.querySelector ("form")
let inputBuscador = document.querySelector ("#buscador")
let errorBuscador = document.querySelector (".error-buscador")

formulario.addEventListener("submit",function(e){
e.preventDefault();

if (inputBuscador.value == "" ){
    errorBuscador.style.display = "block";
    errorBuscador.innerHTML = "<p>Que el campo de búsqueda no esté vacío</p>";
    errorBuscador.style.color = "white";
}
    else if (inputBuscador.value.length < 3){
        errorBuscador.style.display = "block";
        errorBuscador.innerHTML = "<p> La búsqueda debe tener al menos 3 caracteres</p>";
        errorBuscador.style.color = "white";
    } else {
        this.submit ();
    }
})
