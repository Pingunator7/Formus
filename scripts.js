document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const checkbox = document.getElementById("checkme").checked;

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    alert("Por favor, ingresa un correo válido.");
    return;
  }

  if (password === "") {
    alert("La contraseña es obligatoria.");
    return;
  }

  if (!checkbox) {
    alert("Debes marcar la casilla 'Check Me Out'.");
    return;
  }

  alert("Formulario enviado correctamente.");
});
``
