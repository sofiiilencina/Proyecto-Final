document.getElementById("contactFormulario").addEventListener("submit", function(e) {
  e.preventDefault();

  var nombre = document.getElementById("nombre").value.trim();
  var email = document.getElementById("correo").value.trim();
  var asunto = document.getElementById("asunto").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();
  var mensajeExito = document.getElementById("mensajeExito");

  if (!nombre || !email || !asunto || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailValido.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  mensajeExito.textContent = "¡Mensaje enviado correctamente!";
  this.reset();

  setTimeout(() => mensajeExito.textContent = "", 3000);
});


