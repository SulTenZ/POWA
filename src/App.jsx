// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ScheduleDisplay from './components/ScheduleDisplay';
import { calculateSchedule } from './utils/calculations';
import { exportScheduleToPDF } from './utils/pdfExport';

export default function App() {
  // State untuk form input (1RM values)
  const [formData, setFormData] = useState({
    squat: '',
    bench: '',
    deadlift: ''
  });

  // State untuk menyimpan schedule yang sudah di-generate
  const [schedule, setSchedule] = useState(null);

  // State untuk loading animation
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value === '' || (parseFloat(value) > 0 && !isNaN(value))) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Generate training schedule berdasarkan input 1RM
  const handleGenerate = () => {
    const { squat, bench, deadlift } = formData;

    // Validasi input
    if (!squat || !bench || !deadlift) {
      alert('Mohon isi semua input 1RM!');
      return;
    }

    // Show loading
    setLoading(true);

    // Simulate API call dengan setTimeout
    setTimeout(() => {
      const scheduleData = {
        squat: calculateSchedule(parseFloat(squat), 'Squat'),
        bench: calculateSchedule(parseFloat(bench), 'Bench Press'),
        deadlift: calculateSchedule(parseFloat(deadlift), 'Deadlift'),
        orm: { squat, bench, deadlift }
      };

      setSchedule(scheduleData);
      setLoading(false);
    }, 1200);
  };

  // Export schedule ke PDF 
  const handleExportPDF = () => {
    const result = exportScheduleToPDF(schedule);
    
    if (!result.success) {
      alert('Error generating PDF: ' + result.error);
    }
  };

  // Reset schedule dan kembali ke form input
  const handleReset = () => {
    setSchedule(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header />

        {/* Input Form - tampil jika belum ada schedule */}
        {!schedule && (
          <InputForm
            formData={formData}
            onInputChange={handleInputChange}
            onGenerate={handleGenerate}
          />
        )}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner />}

        {/* Schedule Display - tampil setelah generate */}
        {schedule && !loading && (
          <ScheduleDisplay
            schedule={schedule}
            onReset={handleReset}
            onExportPDF={handleExportPDF}
          />
        )}
      </div>
    </div>
  );
}