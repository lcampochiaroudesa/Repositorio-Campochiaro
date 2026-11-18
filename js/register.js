let register = document.querySelector (".caja")

let inputEmailRegister = document.querySelector ("#email")
let inputPasswordRegister = document.querySelector ("#password")
let inputRpasswordRegister = document.querySelector ("#rePassword")

let errorEmailRegister = document.querySelector (".error-emailRegister")
let errorPasswordRegister = document.querySelector (".error-passwordRegister")
let errorRpasswordRegister = document.querySelector (".error-RpasswordRegister")

register.addEventListener("submit",function(e){
e.preventDefault();

if (inputEmailRegister.value == "" ){

   errorEmailRegister.style.display = "block";
   errorEmailRegister.innerHTML = "<p> Este campo es obligatorio </p>";
   errorEmailRegister.style.color = "white"

}else if (inputPasswordRegister.value == ""){

    errorPasswordRegister.style.display = "block";
    errorPasswordRegister.innerHTML = "<p> Este campo es obligatorio </p>";
    errorPasswordRegister.style.color = "white"

} else if (inputPasswordRegister.value.length < 6){

     errorPasswordRegister.style.display = "block";
    errorPasswordRegister.innerHTML = "<p> La contraseña debe tener al menos 6 caracteres</p>";
     errorPasswordRegister.style.color = "white"

} else if (inputRpasswordRegister.value == "") {

        errorRpasswordRegister.style.display = "block";
        errorRpasswordRegister.innerHTML = "<p>Este campo es obligatorio</p>";
        errorRpasswordRegister.style.color = "white";

} else if (inputPasswordRegister.value = inputRpasswordRegister){

    errorRpasswordRegister.style.display = "block";
    errorRpasswordRegister.innerHTML = "<p> Las contraseñas no coinciden </p>";
    errorRpasswordRegister.sthyle.color = "white";

}else{

this.submit ();

}
   
})