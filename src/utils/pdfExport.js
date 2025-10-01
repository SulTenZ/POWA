// src/utils/pdfExport.js
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// Fungsi untuk export schedule ke PDF
export const exportScheduleToPDF = (schedule) => {
  try {
    console.log('Starting PDF generation...');
    const doc = new jsPDF();
    console.log('jsPDF initialized');

    // === COLOR PALETTE ===
    const colors = {
      background: [15, 23, 42], 
      backgroundAlt: [20, 28, 48],
      cardBg: [30, 41, 59],
      border: [51, 65, 85],
      primary: [250, 204, 21],
      textWhite: [255, 255, 255],
      textGray: [148, 163, 184],
    };

    // Helper function untuk draw background di setiap halaman
    const drawPageBackground = () => {
      doc.setFillColor(...colors.background);
      doc.rect(0, 0, 210, 297, 'F');
    };

    // Helper function untuk draw header
    const drawHeader = () => {
      // POWA! Title
      doc.setFontSize(36);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...colors.textWhite);
      doc.text('POWA!', 105, 20, { align: 'center' });

      // Tagline
      doc.setFontSize(11);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...colors.textGray);
      doc.text('Stronger Every Week.', 105, 28, { align: 'center' });

      // Decorative line
      doc.setDrawColor(...colors.primary);
      doc.setLineWidth(1.5);
      doc.line(30, 32, 180, 32);
    };

    // === PAGE 1 - HEADER ===
    drawPageBackground();
    drawHeader();

    // 1RM Info Box
    doc.setFillColor(...colors.cardBg);
    doc.roundedRect(15, 38, 180, 14, 2, 2, 'F');
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...colors.primary);
    doc.text('YOUR 1RM', 20, 44);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.textWhite);
    doc.setFontSize(10);
    doc.text(
      `Squat: ${schedule.orm.squat}kg  |  Bench Press: ${schedule.orm.bench}kg  |  Deadlift: ${schedule.orm.deadlift}kg`,
      20,
      49
    );

    let yPos = 60;
    let currentPage = 1;

    // === GENERATE TABLES FOR EACH LIFT ===
    ['squat', 'bench', 'deadlift'].forEach((lift, liftIdx) => {
      const liftName =
        lift === 'squat'
          ? 'SQUAT'
          : lift === 'bench'
          ? 'BENCH PRESS'
          : 'DEADLIFT';

      // Cek apakah perlu halaman baru
      if (yPos > 240) {
        doc.addPage();
        currentPage++;
        drawPageBackground();
        yPos = 20;
      }

      // Lift name header dengan styling card
      doc.setFillColor(...colors.cardBg);
      doc.roundedRect(15, yPos - 4, 180, 10, 2, 2, 'F');
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...colors.primary);
      doc.text(liftName, 20, yPos + 2);
      
      yPos += 12;

      // Generate table untuk setiap minggu
      schedule[lift].forEach((week, weekIdx) => {
        // Cek jika table akan keluar dari halaman
        const estimatedTableHeight = 8 + (week.sets.length * 10);
        if (yPos + estimatedTableHeight > 270) {
          doc.addPage();
          currentPage++;
          drawPageBackground();
          yPos = 20;
        }

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
          theme: 'plain',
          
          // Header styling
          headStyles: {
            fillColor: colors.cardBg,
            textColor: colors.primary,
            fontStyle: 'bold',
            fontSize: 10,
            halign: 'left',
            cellPadding: { top: 3, bottom: 3, left: 5, right: 5 },
            lineColor: colors.border,
            lineWidth: 0.3,
          },
          
          // Body styling
          bodyStyles: {
            fillColor: colors.background,
            textColor: colors.textWhite,
            fontSize: 9,
            cellPadding: { top: 3, bottom: 3, left: 5, right: 5 },
            lineColor: colors.border,
            lineWidth: 0.3,
          },
          
          // Alternating row colors
          alternateRowStyles: {
            fillColor: colors.backgroundAlt,
          },
          
          // Column styles
          columnStyles: {
            0: { cellWidth: 50, halign: 'left' },
            1: { cellWidth: 45, halign: 'left' },
            2: { cellWidth: 35, halign: 'left' },
            3: { 
              cellWidth: 50,
              fontStyle: 'bold',
              textColor: colors.primary,
              halign: 'left'
            },
          },
          
          margin: { left: 15, right: 15 },
          
          // Table outer border
          tableLineColor: colors.border,
          tableLineWidth: 0.5,
        });

        yPos = doc.lastAutoTable.finalY + 8;
      });

      yPos += 5;
    });

    // === FOOTER untuk semua halaman ===
    const pageCount = doc.internal.getNumberOfPages();
    
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      
      // Footer line
      doc.setDrawColor(...colors.border);
      doc.setLineWidth(0.5);
      doc.line(20, 280, 190, 280);
      
      // Footer text
      doc.setFontSize(8);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...colors.textGray);
      doc.text('Made with POWA! - Stronger Every Week', 105, 285, { align: 'center' });
      
      doc.setFontSize(7);
      doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
    }

    // === SAVE PDF ===
    doc.save('POWA_Training_Schedule.pdf');
    console.log('PDF saved successfully!');
    
    return { success: true };
  } catch (error) {
    console.error('PDF Error:', error);
    return { success: false, error: error.message };
  }
};