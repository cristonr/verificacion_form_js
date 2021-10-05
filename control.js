
var form = document.querySelector('form');
var nombre = document.getElementById('nombre');
var pwd = document.getElementById('pwd');
var submit = document.getElementById('enviar');
var alertar = document.querySelector('p');
 
form.onsubmit = function(parar) {
for(var i=0; i<= nombre.value.length; i++){if(nombre.value.includes('@')) {var real=true;}};
if (nombre.value === ''|| pwd.value === '') {
parar.preventDefault();
alertar.textContent = 'Completar todos los campos';
  }else{ 
  if (! real) {
	parar.preventDefault();
alertar.textContent = 'nombre de usuario incorrecto';
}
}

}