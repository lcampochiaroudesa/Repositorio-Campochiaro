let userEmail = localStorage.getItem ('email')
let saludo = document.querySelector (".navegador")

if (userEmail){
    saludo.innerHTML = ' Bienvenido '
}