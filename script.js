//alert("Hola este es mi Javascript");
//let nombre = "Martha"
//nombre = "Maria";
//nombre = "Carlos" //como la variable es tipo let esta puede cambiar a lo largo del programa

//var nombre1 = "Carlos"

//const nombre2 = "Carlos" //Como la Variable es tipo const esta no puede cambiar y se quedará fija durante todo el programa.

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".logo .fuente-")
//titulo.innerHTML = contenidoTitulo;

// CONDICIONALES

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if(textoTitulo == "Nombre"){titulo.innerHTML = "Otro"}
//else {
//console.log("no se cumple");
//}

//FUNCIONES

//let nombre1 = "Charlie";
//let ciudad = "Tabogo";
// let gusto = "Pescar";

// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto(nombre1, ciudad, gusto){
// let contenido = `Me llamo ${nombre1} Alberto González , nací en ${ciudad} Colombia. Me gusta mucho ${gusto} y compartir con mi familia y amigos`;

// return contenido;
// }

// parrafo.innerText = cambiarTexto(nombre1, ciudad, gusto); 

// FORMULARIO
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});