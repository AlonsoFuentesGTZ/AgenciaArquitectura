const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const streamBuffers = require('stream-buffers');

router.post('/contact', async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log('Faltan campos obligatorios');
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    console.log('Creando PDF...');
    const doc = new PDFDocument();
    const writableBuffer = new streamBuffers.WritableStreamBuffer();

    doc.pipe(writableBuffer);

    doc.fontSize(20).text('Nuevo mensaje de contacto', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Nombre: ${name}`);
    doc.text(`Correo: ${email}`);
    doc.moveDown();
    doc.text('Mensaje:');
    doc.text(message);
    doc.end();

    await new Promise((resolve) => writableBuffer.on('finish', resolve));

    const pdfBuffer = writableBuffer.getContents();
    console.log('PDF generado, tamaño en bytes:', pdfBuffer.length);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pokecuentafuentes@gmail.com',
        pass: 'pokecuentaparapokemon', // ¡Usa tu contraseña de aplicación aquí!
      },
    });

    console.log('Enviando correo...');
    await transporter.sendMail({
      from: '"Página Contacto" <pokecuentafuentes@gmail.com>',
      to: 'fuentesalonso193@gmail.com',
      subject: 'Nuevo mensaje desde formulario de contacto',
      text: `Mensaje de ${name} (${email})`,
      attachments: [
        {
          filename: 'mensaje.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });
    console.log('Correo enviado exitosamente');

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    res.status(500).json({ message: 'Error enviando el correo', error: error.toString() });
  }
});

// Dentro de routes/contactRoutes.js
router.get('/contact', (req, res) => {
  res.status(200).json({
    message: 'Ruta GET /api/contact funcionando correctamente'
  });
});

module.exports = router;
