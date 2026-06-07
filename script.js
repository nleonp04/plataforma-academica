function saludar() {
  var nombre = document.getElementById("nombre").value;
  if (nombre == "") {
    document.getElementById("mensaje").innerText = "Por favor ingresa tu nombre.";
  } else {
    document.getElementById("mensaje").innerText = "Bienvenido, " + nombre + "!";
  }
}
