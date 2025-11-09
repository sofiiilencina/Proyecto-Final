document.getElementById("contactFormulario").addEventListener("submit", function(e) {
  e.preventDefault();

  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var asunto = document.getElementById("asunto");
  var mensaje = document.getElementById("mensaje");
  var mensajeExito = document.getElementById("mensajeExito");

  var labelNombre = document.querySelector("label[for='nombre']");
  var labelEmail = document.querySelector("label[for='email']");
  var labelAsunto = document.querySelector("label[for='asunto']");
  var labelMensaje = document.querySelector("label[for='mensaje']");

  var campos = [nombre, email, asunto, mensaje];
  for (var i = 0; i < campos.length; i++) {
    campos[i].style.border = "2px solid #c7a74f";  
    campos[i].style.backgroundColor = "#002b66";   
    campos[i].style.color = "white";
    labelNombre.style.color = "#B8860B";
    labelEmail.style.color = "#B8860B";
    labelAsunto.style.color = "#B8860B";
    labelMensaje.style.color = "#B8860B";
  }

  
  var errores = 0;
  var listaErrores = "";

 
  if (!nombre.value.trim()) {
    nombre.style.border = "2px solid red";
    nombre.style.backgroundColor = "#b70505ff";
    labelNombre.style.color = "red";
    listaErrores += "• El campo Nombre está vacío.\n";
    errores = errores + 1;
  }

  if (!email.value.trim()) {
    email.style.border = "2px solid red";
    email.style.backgroundColor = "#b70505ff";
    labelEmail.style.color = "red";
    listaErrores += "• El campo Correo Electrónico está vacío.\n";
    errores = errores + 1;
  }

  if (!asunto.value.trim()) {
    asunto.style.border = "2px solid red";
    asunto.style.backgroundColor = "#b70505ff";
    labelAsunto.style.color = "red";
    listaErrores += "• El campo Asunto está vacío.\n";
    errores = errores + 1;
  }

  if (!mensaje.value.trim()) {
    mensaje.style.border = "2px solid red";
    mensaje.style.backgroundColor = "#b70505ff";
    labelMensaje.style.color = "red";
    listaErrores += "• El campo Mensaje está vacío.\n";
    errores = errores + 1;
  }

  
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() !== "" && !emailValido.test(email.value.trim())) {
    email.style.border = "2px solid red";
    email.style.backgroundColor = "#b70505ff";
    labelEmail.style.color = "red";
    listaErrores += "• El correo electrónico no tiene un formato válido.\n";
    errores = errores + 1;
  }

  
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (nombre.value.trim() !== "" && !soloLetras.test(nombre.value.trim())) {
    nombre.style.border = "2px solid red";
    nombre.style.backgroundColor = "#b70505ff";
    labelNombre.style.color = "red";
    listaErrores += "• El nombre no puede contener números.\n";
    errores = errores + 1;
  }

  
  if (mensaje.value.trim() !== "" && mensaje.value.trim().length > 300) {
    mensaje.style.border = "2px solid red";
    mensaje.style.backgroundColor = "#b70505ff";
    labelMensaje.style.color = "red";
    listaErrores += "• El mensaje supera los 300 caracteres.\n";
    errores = errores + 1;
  }

  
  if (errores > 0) {
    alert("Por favor, corrige los siguientes errores:\n\n" + listaErrores);
    mensajeExito.textContent = "";
    return;
  }

  mensajeExito.textContent = "¡Mensaje enviado correctamente!";
  mensajeExito.style.color = "green";
  this.reset();

  setTimeout(() => mensajeExito.textContent = "", 3000);
});


