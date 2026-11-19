let botones = document.querySelectorAll(".botones");
let linkLogout = document.querySelector("#logout");


if (linkLogout != null) {
    linkLogout.addEventListener("click", function(evento){
        evento.preventDefault();
        localStorage.removeItem("email");
    });
}

