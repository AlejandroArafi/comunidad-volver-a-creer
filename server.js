const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "https://comunidad-volver-a-creer.vercel.app", // Dominio de tu frontend
  }),
);
const app = express();
const port = 3000;

// Middleware para parsear los datos del formulario (POST)
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para recibir los datos del formulario
app.post("/api/sendForm", (req, res) => {
  const { name, email, telefono, message } = req.body;

  // Configuración de nodemailer para enviar el correo
  const transporter = nodemailer.createTransport({
    service: "gmail", // Puedes cambiar esto por otro servicio
    auth: {
      user: "tu-correo@gmail.com", // Tu correo
      pass: "tu-contraseña", // Tu contraseña o app password
    },
  });

  const mailOptions = {
    from: "tu-correo@gmail.com",
    to: "destinatario@correo.com", // Dirección de destino
    subject: "Nuevo mensaje de formulario",
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Hubo un error al enviar el correo");
    }
    res.status(200).send("Formulario enviado con éxito");
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
