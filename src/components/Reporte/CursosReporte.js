// CursosReporte.js

import jsPDF from 'jspdf';
import logo from "/img/logo/logo.webp"

const reporteCursos = (cursoDataFiltered, nombreCreador) => {
  // Verificar que cursoDataFiltered tenga datos antes de proceder
  if (!cursoDataFiltered || cursoDataFiltered.length === 0) {
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
  doc.text('Reporte de Cursos', 105, 20, { align: 'center' });

  // Agregar hora actual
  const horaActual = new Date().toLocaleTimeString();
  doc.text(`Hora: ${horaActual}`, 105, 40, { align: 'center' });

  // Separador
  doc.setLineWidth(0.5);
  doc.line(10, 50, 200, 50);

  // Contenido de los cursos
  cursoDataFiltered.forEach((curso, index) => {
    const y = 60 + index * 30; // Ajusta el espacio vertical entre cursos

    doc.setFontSize(14);
    doc.text(`Curso ${index + 1}: ${curso.titulo}`, 15, y);

    doc.setFontSize(12);
    const descriptionLines = doc.splitTextToSize(curso.descripcion, 180);
    doc.text(descriptionLines, 15, y + 10);

    // Añadir línea separadora entre cursos
    if (index < cursoDataFiltered.length - 1) {
      doc.setLineWidth(0.2);
      doc.line(10, y + 25, 200, y + 25);
    }
  });

  // Agregar logo al final de la página
  addLogo();

  // Guardar el PDF
  doc.save('reporte-cursos.pdf');
};

export default reporteCursos;
