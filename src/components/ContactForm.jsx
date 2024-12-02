import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_udlojh6", // Reemplaza con tu service_id
        "template_s9pfams", // Reemplaza con tu template_id
        templateParams,
        "YT3E1nQa1n65085WQ", // Reemplaza con tu user_id
      );
      alert("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  // Estilos en objeto
  const styles = {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    formTitleContainer: {
      textAlign: "center",
      margin: "4rem auto 2rem",
    },
    formTitle: {
      color: "#444",
      fontSize: "1.5rem",
      marginBottom: "1rem",
    },
    form: {
      width: "100%",
      maxWidth: "500px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1.5rem",
      position: "relative",
    },
    icon: {
      position: "absolute",
      left: "12px",
      color: "#888",
    },
    textareaIcon: {
      top: "12px",
    },
    input: {
      width: "100%",
      padding: "12px 20px",
      paddingLeft: "40px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      fontSize: "1rem",
      color: "#333",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#8bc34a",
    },
    textarea: {
      resize: "none",
      height: "100px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#8bc34a",
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#7cb342",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div style={styles.formContainer}>
      <div style={styles.formTitleContainer}>
        <h3 style={styles.formTitle}>Agenda una visita con nosotros</h3>
      </div>
      <form style={styles.form} onSubmit={submitForm}>
        <div style={styles.inputContainer}>
          <i className="fas fa-user" style={styles.icon}></i>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <i className="fas fa-envelope" style={styles.icon}></i>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <i className="fas fa-phone-alt" style={styles.icon}></i>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Teléfono de contacto"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <i
            className="fas fa-edit"
            style={{ ...styles.icon, ...styles.textareaIcon }}
          ></i>
          <textarea
            id="message"
            name="message"
            placeholder="Cuéntanos cómo podemos ayudarte"
            value={formData.message}
            onChange={handleChange}
            style={{ ...styles.input, ...styles.textarea }}
            required
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
