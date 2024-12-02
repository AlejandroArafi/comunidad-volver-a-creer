import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

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
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-title-container">
        <h3>Agenda una visita con nosotros</h3>
      </div>
      <form onSubmit={submitForm} className="formulario">
        <div className="input-container">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="message" className="form-label">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
