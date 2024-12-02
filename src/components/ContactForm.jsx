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
        templateParams, // Los parámetros a enviar en el correo
        "YT3E1nQa1n65085WQ", // Reemplaza con tu user_id
      );
      alert("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  // Estilos en objeto
  const styles = {
    formContainer: {
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    formGroup: {
      marginBottom: "20px",
    },
    formLabel: {
      display: "block",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "5px",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
      color: "#333",
    },
    formInputFocus: {
      borderColor: "#4CAF50",
      outline: "none",
    },
    formTextarea: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#fff",
      color: "#333",
      minHeight: "150px",
      resize: "vertical",
    },
    formButton: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "12px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
    },
    formButtonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <form onSubmit={submitForm} style={styles.formContainer}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.formLabel}>
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.formInput}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.formLabel}>
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.formInput}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="phone" style={styles.formLabel}>
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.formInput}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="message" style={styles.formLabel}>
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.formTextarea}
          required
        ></textarea>
      </div>
      <button type="submit" style={styles.formButton}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
