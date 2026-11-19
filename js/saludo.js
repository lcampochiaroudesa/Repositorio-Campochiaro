let userEmail = localStorage.getItem('email');
let saludo = document.querySelector('.botones');


if (userEmail != null)
{saludo.innerHTML = '<p> Bienvenido ' + userEmail + '</p> <a href="#" id="logout"><p>Logout</p></a>';

}

