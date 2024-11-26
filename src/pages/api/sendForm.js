import nodemailer from "nodemailer";

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, telefono, message } = req.body;

    // Configura tu transporte de correo (aquí usamos Gmail como ejemplo)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alejandro.arafi@gmail.com", // Reemplaza con tu correo de Gmail
        pass: "idilia22", // Reemplaza con tu contraseña de app
      },
    });

    const mailOptions = {
      from: email, // Usa el email ingresado como el remitente
      to: "tu-correo@ejemplo.com", // Asegúrate de poner el correo al que deseas enviar el mensaje
      subject: "Nuevo mensaje de formulario",
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).send("Formulario enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).send("Hubo un error al enviar el correo");
    }
  } else {
    return res.status(405).send("Método no permitido");
  }
};
