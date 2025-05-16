function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario.trim() === "" || clave.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Aquí puedes agregar lógica de autenticación si es necesario.
  alert("Inicio de sesión enviado.");
  return true; // continuar con el envío del formulario
}
