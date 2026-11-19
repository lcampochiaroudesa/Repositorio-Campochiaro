let botones = document.querySelectorAll(".botones");
let linkLogout = document.querySelector("#logout");


if (linkLogout != null) {
    linkLogout.addEventListener("click", function(evento){
        evento.preventDefault();

        localStorage.removeItem("email");
        
        botones.innerHTML = `
            <a href="../Repositorio-Campochiaro/login.html">
                <p> Iniciar Sesion </p>
            </a>
            <a href="../Repositorio-Campochiaro/register.html">
                <p>Registrarse</p>
            </a>`;
    });
}

