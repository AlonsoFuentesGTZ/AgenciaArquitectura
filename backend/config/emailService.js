const nodemailer = require('nodemailer');

// Crear un transporte de correo utilizando un servicio como Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Usamos el servicio de Gmail (puedes cambiarlo a otro servicio de correo si lo prefieres)
  auth: {
    user: 'pokecuentafuentes@gmail.com',  // Tu correo electrónico de Gmail
    pass: 'pokecuentaparapokemon',  // Tu contraseña o un 'App password' si usas autenticación de dos factores
  },
});

// Función para enviar el correo
const sendEmail = (data) => {
  const { name, email, message } = data;

  const mailOptions = {
    from: email,  // El correo que envía el mensaje
    to: 'fuentesalonso193@gmail.com',  // El correo al que se enviará el mensaje (puedes cambiarlo por el correo que prefieras)
    subject: 'Contacto de la pagina Arquitectura',  // Asunto del correo
    text: `
      Remitente: ${name}
      Correo: ${email}
      Mensaje: ${message}
    `,  // El contenido del correo
  };
    // Imprimir los datos del correo en consola para depuración
    console.log('Enviando correo con los siguientes detalles:', mailOptions);

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
