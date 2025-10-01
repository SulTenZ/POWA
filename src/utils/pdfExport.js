// src/utils/pdfExport.js
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportScheduleToPDF = (schedule) => {
  try {
    console.log('Starting PDF generation...');
    const doc = new jsPDF();
    console.log('jsPDF initialized');

    // === HEADER SECTION ===
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('POWA!', 105, 20, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Stronger Every Week.', 105, 28, { align: 'center' });

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `1RM - Squat: ${schedule.orm.squat}kg | Bench: ${schedule.orm.bench}kg | Deadlift: ${schedule.orm.deadlift}kg`,
      105,
      36,
      { align: 'center' }
    );

    let yPos = 45;

    // === GENERATE TABLES FOR EACH LIFT ===
    ['squat', 'bench', 'deadlift'].forEach((lift, idx) => {
      const liftName =
        lift === 'squat'
          ? 'SQUAT'
          : lift === 'bench'
          ? 'BENCH PRESS'
          : 'DEADLIFT';

      // Lift name header
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(liftName, 14, yPos);
      yPos += 5;

      // Generate table untuk setiap minggu
      schedule[lift].forEach((week) => {
        const tableData = week.sets.map((set) => [
          set.setCount > 1 ? `${set.setCount} sets` : '1 set',
          set.reps,
          `${set.percentage}%`,
          `${set.weight} kg`
        ]);

        autoTable(doc, {
          startY: yPos,
          head: [[`Week ${week.week}`, 'Reps', '%', 'Weight']],
          body: tableData,
          theme: 'grid',
          headStyles: { fillColor: [15, 23, 42], fontStyle: 'bold' },
          margin: { left: 14, right: 14 },
          styles: { fontSize: 9 }
        });

        yPos = doc.lastAutoTable.finalY + 8;
      });

      yPos += 5;

      // Tambah halaman baru jika sudah mau penuh
      if (idx < 2 && yPos > 240) {
        doc.addPage();
        yPos = 20;
      }
    });

    // === SAVE PDF ===
    doc.save('POWA_Training_Schedule.pdf');
    console.log('PDF saved successfully!');
    
    return { success: true };
  } catch (error) {
    console.error('PDF Error:', error);
    return { success: false, error: error.message };
  }
};