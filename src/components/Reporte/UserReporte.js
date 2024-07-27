// CursosReporte.js

import jsPDF from 'jspdf';
import logo from "/img/logo/logo.webp"

const reporteUsuarios = (userDataFiltered) => {
  // Verificar que userDataFiltered tenga datos antes de proceder
  if (!userDataFiltered || userDataFiltered.length === 0) {
    console.error('No hay datos disponibles para generar el reporte.');
    return;
  }

  // Lógica para generar el PDF usando jsPDF
  const doc = new jsPDF();

  // Logo de la página
  const logoPath = logo; // Ruta de tu logo en formato webp

  // Función para agregar el logo
  const addLogo = () => {
    const logoImg = new Image();
    logoImg.src = logoPath;
    doc.addImage(logoImg, 'WEBP', 10, 10, 30, 30); // Ajusta tamaño y posición según necesites
  };

  // Agregar título del reporte
  doc.setFontSize(18);
  doc.text('Reporte de Usuarios', 105, 20, { align: 'center' });

  // Agregar hora actual
  const horaActual = new Date().toLocaleTimeString();
  doc.text(`Hora: ${horaActual}`, 105, 30, { align: 'center' });

  // Separador
  doc.setLineWidth(0.5);
  doc.line(10, 40, 200, 40);

  // Contenido de los usuarios
  userDataFiltered.forEach((user, index) => {
    const y = 50 + index * 60; // Ajusta el espacio vertical entre usuarios

    doc.setFontSize(14);
    doc.text(`Usuario ${index + 1}: ${user.nombre}`, 15, y);

    doc.setFontSize(12);
    doc.text(`Correo: ${user.correo}`, 15, y + 10);
    doc.text(`Rol: ${user.rol}`, 15, y + 20);
    doc.text(`Teléfono: ${user.telefono}`, 15, y + 30);

    // Añadir línea separadora entre usuarios
    if (index < userDataFiltered.length - 1) {
      doc.setLineWidth(0.2);
      doc.line(10, y + 45, 200, y + 45);
    }
  });

  // Agregar logo al final de la página
  addLogo();

  // Guardar el PDF
  doc.save('reporte-usuarios.pdf');
};

export default reporteUsuarios;
