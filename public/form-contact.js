// public/form-contact.js
import emailjs from "emailjs-com";



window.onload = function () {
  const form = document.getElementById("formulario");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Obtenemos los valores del formulario
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

      // Usamos la función de EmailJS para enviar el correo
      emailjs
        .send(
          "service_udlojh6", // tu service ID
          "template_s9pfams", // tu template ID
          "YT3E1nQa1n65085WQ", // tu user ID
        )
        .then(
          function (response) {
            alert("¡Mensaje enviado exitosamente!");
          },
          function (error) {
            alert(
              "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
            );
            console.error("Error al enviar el correo:", error);
          },
        );
    });
  }
};
