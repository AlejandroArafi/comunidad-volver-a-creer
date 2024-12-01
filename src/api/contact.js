import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZ6typiMQmHgN42fAXCiQeysMInxXUl5k",
  authDomain: "form-contact-volveeracreer.firebaseapp.com",
  projectId: "form-contact-volveeracreer",
  storageBucket: "form-contact-volveeracreer.firebasestorage.app",
  messagingSenderId: "551020646507",
  appId: "1:551020646507:web:350d4f396f30b1ab94212e",
  measurementId: "G-0KYB0NZW7N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para manejar el envío de datos a Firestore
export async function handleSubmit(formData) {
  try {
    // Accede a la colección 'contactos' de Firestore y añade un nuevo documento
    await addDoc(collection(db, "contactos"), {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error al enviar el formulario: ", error);
    throw new Error("Error al enviar el formulario a Firestore");
  }
}
