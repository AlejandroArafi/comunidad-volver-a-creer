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
          "service_udlojh6", // Service ID
          "template_s9pfams", // Template ID
          templateParams, // Los parámetros del formulario
          "YT3E1nQa1n65085WQ", // User ID (public key)
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
