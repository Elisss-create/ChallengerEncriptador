var botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();


  var form = document.querySelector("#primerCaja");
  var mensaje = form.mensaje.value;// captura lo que existe en el input
  mensaje = mensaje.toLowerCase();// si esta mayuscula lo cambia a minuscula

  var mensajeReemplazado = "";


  mensajeReemplazado = mensaje.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll(/(a)/gi, 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');


  console.log(mensajeReemplazado);
  document.querySelector("#mensajeEncriptado").value = mensajeReemplazado;
  document.querySelector("#mensaje").value="";
});

var botonDesencriptar = document.querySelector("#desencriptar");

botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  
  var formDos = document.querySelector("#segundaCaja");
  var mensajeEncriptado = formDos.mensajeEncriptado.value;
  var mensaje="";
  mensaje = mensajeEncriptado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');


  console.log(mensaje);
  document.querySelector("#mensaje").value=mensaje;
  console.log(mensaje);

  
});

var botonCopiar = document.querySelector("#copiar");
botonCopiar.addEventListener("click", function (event) {
  event.preventDefault();
  
  botonCopiar.onclick = copiarTexto;
  console.log("Click");
  
});

function copiarTexto(){
  mensajeEncriptado=document.querySelector("#mensajeEncriptado");
  var resultado = mensajeEncriptado.value;
  navigator.clipboard.writeText(resultado);
}
