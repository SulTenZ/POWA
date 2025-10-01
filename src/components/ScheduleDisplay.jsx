// src/components/ScheduleDisplay.jsx
import React from 'react';
import { Download } from 'lucide-react';
import ScheduleTable from './ScheduleTable';

export default function ScheduleDisplay({ schedule, onReset, onExportPDF }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Your Training Schedule
          </h2>
          <p className="text-slate-400">Based on 5/3/1 methodology</p>
        </div>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors"
        >
          New Schedule
        </button>
      </div>

      {/* Schedule Tables */}
      <ScheduleTable liftData={schedule.squat} liftName="SQUAT" />
      <ScheduleTable liftData={schedule.bench} liftName="BENCH PRESS" />
      <ScheduleTable liftData={schedule.deadlift} liftName="DEADLIFT" />

      {/* Export PDF Button */}
      <button
        onClick={onExportPDF}
        className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
      >
        <Download className="w-5 h-5" />
        Download PDF
      </button>
    </div>
  );
}