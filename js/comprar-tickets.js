const TICKET = 200;
const ESTUDIANTE = 0.8;
const TRAINEE = 0.5;
const JUNIOR = 0.15;
const nombre = document.querySelector("#nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const btnResumen = document.querySelector("#btnResumen");
const btnClear = document.querySelector("#btnBorrar");
let totalPago = document.querySelector("#totalPago");


btnResumen.addEventListener("click", calcularMonto);



function limpiaRegistros() {
    
     nombre.value = "";
     apellido.value = "";
     email.value = "";
     cantidad.value = "";
     categoria.value = "";
     totalPago.textContent = "";

}

function calcularMonto() {
  totalPago.textContent =
    TICKET * cantidad.value - TICKET * calcularDescuento() * cantidad.value;
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 0;
    case "1":
      return ESTUDIANTE;
    case "2":
        return TRAINEE;
    case "3":
          return JUNIOR;      
    default: 0;
      break;
  }
}

function validar() {

  /*creo una variable de tipo booleano que en principio tendrá un valor true(verdadero),
  y que se convertirá en false(falso) cuando la condición no se cumpla*/
  var todo_correcto = true;
  
  /*El primer campo a comprobar es el del nombre. Lo traemos por id y verificamos
  la condición, en este caso, por ejemplo, le decimos que tiene que tener más de dos dígitos
  para que sea un nombre válido. Si no tiene más de dos dígitos, la variable todo_correcto
  devolverá false.*/
  
  if(nombre.value.length < 2 ){
      todo_correcto = false;
  }
  
  /*Hacemos lo mismo con el campo apellido. En este caso le pediremos al usuario que
  introduzca al menos 2 caracteres.*/
  if(apellido.value.length < 2 ){
      todo_correcto = false;
  }
  
  /*Para comprobar la cantidad, utilizaremos la función isNaN(), que nos dirá si el valor
  ingresado NO es un número (NaN son las siglas de Not a Number). Si la cantidad no es un
  número, todo_correcto será false.*/
  if(isNaN(cantidadTickets.value)){
      todo_correcto = false;
  }
  
  /*Para comprobar el email haremos uso de una expresión regular. Esto es una secuencia
  de caracteres que nos dirá si el valor ingresado por el usuario tiene estructura de
  correo electrónico. Lo que hacemos es obtener el value del campo de texto destinado
  al email, y le aplicamos el método test() del objeto global RegExp(que nos permite
  trabajar con expresiones regulares).*/
  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
  
  if (!expresion.test(email)){
      todo_correcto = false;
  }
  
  /*Por último, y como aviso para el usuario, si no está todo bién, osea, si la variable
  todo_correcto ha devuelto false al menos una vez, generaremos una alerta advirtiendo
  al usuario de que algunos datos ingresados no son los que esperamos.*/
  if(!todo_correcto){
  alert('Algunos campos no están correctos, vuelva a revisarlos');
  }
  
  return todo_correcto;
  }

/*function validar () {
  let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let todoCorrecto = true

  if(nombre.value === "" || apellido.value === "" || email.value === "" || cantidad.value === "" || categoria.value === "" ){
    alert("Todos los campos son obligatorios");
    return false;
  }

 else if(nombre.length>15){
    alert("El nombre es muy largo");
    return false;
  }

 else if(apellido.length>20){
    alert("El apellido es muy largo");
    return false;
  }

 else if(correo.length>100){
    alert("El correo es muy largo");
    return false;
  }

  else if(cantidad.length>2){
    alert("La cifra no puede ser mayor a dos digitos");
    return false;
  }
  else if(isNaN(cantidad)){
    alert("Debe ingresar solo numeros");
    return false;
  }
  
  else if(!emailValido.test(email)){
    alert("El correo no es valido");
    return false;
  } 
  else{
    btnResumen.addEventListener("click", calcularMonto);
  }
  
}*/