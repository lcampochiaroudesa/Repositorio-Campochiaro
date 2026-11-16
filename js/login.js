let login = document.querySelector ("cajalogin")

let inputEmail = document.querySelector ("#email")
let inputPassword = document.querySelector ("#password")


let errorEmail = document.querySelector (".error-email")
let errorPassword = document.querySelector (".error-password")

login.addEventListener("submit",function(e){
e.preventDefault();

if (inputEmail.value == "" ){
    errorEmail.style.display = "block";
    errorEmail.innerHTML = "<p>Este campo no puede estar vacío</p>";
} else if (inputPassword.value == ""){
    errorPassword.style.display = "block";
    errorPassword.innerHTML = "<p>Este campo no puede estar vacio</p>"
} else if (inputPassword.value.length < 6){
    errorPassword.style.display = "block";
    errorPassword.innerHTML = "<p> La contraseña debe tener al menos 6 caracteres</p>"
}else{

    localStorage.setItem("email",inputEmail.value)

    this.submit();
}

})

