// import React, { useState } from "react";
// import { handleSubmit } from "../api/contact"; // Asegúrate de que la ruta sea correcta

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();

//     try {
//       await handleSubmit(formData);
//       alert("Message sent successfully!");
//       setFormData({ name: "", email: "", phone: "", message: "" }); // Limpiar formulario
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("There was an error sending your message. Please try again.");
//     }
//   };

//   return (
//     <>
//       <div class="form-title-container">
//         <h3>Agenda una visita con nosotros</h3>
//       </div>
//       <form onSubmit={submitForm} className="formulario">
//         <div>
//           <label htmlFor="name" className="form-label">
//             Nombre
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-input"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="form-label">
//             Correo electrónico
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-input"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="form-label">
//             Teléfono
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="form-input"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="form-label">
//             Mensaje
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="form-textarea"
//             required
//           ></textarea>
//         </div>

//         <button type="submit" className="form-button">
//           Enviar
//         </button>
//       </form>

//       <style>
//         {`
//           *, *::before, *::after {
//             box-sizing: border-box;
//             margin: 0;
//             padding: 0;
//           }

//           body {
//             font-family: 'Montserrat', sans-serif;
//             color: #333;
//             background-color: #f9f9f9;
//           }

//           .formulario {
//             width: 100%;
//             max-width: 500px;
//             background: #ffffff;
//             border-radius: 12px;
//             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//             padding: 2rem;
//             margin: 0 auto;
//           }

//           .formulario .form-label {
//             color: #444;
//             font-size: 1rem;
//             margin-bottom: 0.5rem;
//             font-weight: 600;
//           }

//           .formulario .form-input,
//           .formulario .form-textarea {
//             width: 100%;
//             padding: 12px 20px;
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             background-color: #f9f9f9;
//             font-size: 1rem;
//             color: #333;
//             transition: border-color 0.3s;
//             margin-bottom: 1.5rem;
//           }

//           .formulario .form-input:focus,
//           .formulario .form-textarea:focus {
//             border-color: #8bc34a;
//             outline: none;
//           }

//           .formulario .form-textarea {
//             resize: none;
//             height: 100px;
//           }

//           .formulario .form-button {
//             width: 100%;
//             padding: 12px;
//             background-color: #8bc34a;
//             color: #ffffff;
//             font-size: 1rem;
//             font-weight: bold;
//             text-transform: uppercase;
//             border: none;
//             border-radius: 8px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           .formulario .form-button:hover {
//             background-color: #7cb342;
//             box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           }

//           @media (max-width: 768px) {
//             .formulario {
//               padding: 1.5rem;
//             }

//             .formulario .form-label {
//               font-size: 0.9rem;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// };

//  NUEVO

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
