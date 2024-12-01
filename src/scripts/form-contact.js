import emailjs from '@emailjs/browser';

// Lógica principal para manejar el formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtenemos los valores de los campos
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message,
      };

      // Envío con EmailJS
      emailjs
        .send(
          "service_udlojh6", // Service ID
          "template_s9pfams", // Template ID
          templateParams, // Parámetros del formulario
          "YT3E1nQa1n65085WQ", // Public Key (User ID)
        )
        .then(
          function () {
            alert("¡Mensaje enviado exitosamente!");
            form.reset(); // Limpiar el formulario
          },
          function (error) {
            alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
            console.error("Error:", error);
          },
        );
    });
  } else {
    console.warn("No se encontró el formulario con el ID 'formulario'.");
  }
});
