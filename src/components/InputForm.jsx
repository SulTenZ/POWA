// src/components/InputForm.jsx
import React from 'react';
import { Zap } from 'lucide-react';

export default function InputForm({ formData, onInputChange, onGenerate }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-6">Enter Your 1RM</h2>
      
      <div className="space-y-5">
        {/* Squat Input */}
        <div>
          <label className="block text-slate-300 font-semibold mb-2">
            Squat 1RM (kg)
          </label>
          <input
            type="number"
            name="squat"
            value={formData.squat}
            onChange={onInputChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="e.g. 150"
            min="0"
            step="0.5"
          />
        </div>

        {/* Bench Press Input */}
        <div>
          <label className="block text-slate-300 font-semibold mb-2">
            Bench Press 1RM (kg)
          </label>
          <input
            type="number"
            name="bench"
            value={formData.bench}
            onChange={onInputChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="e.g. 100"
            min="0"
            step="0.5"
          />
        </div>

        {/* Deadlift Input */}
        <div>
          <label className="block text-slate-300 font-semibold mb-2">
            Deadlift 1RM (kg)
          </label>
          <input
            type="number"
            name="deadlift"
            value={formData.deadlift}
            onChange={onInputChange}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            placeholder="e.g. 180"
            min="0"
            step="0.5"
          />
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={onGenerate}
        className="w-full mt-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
      >
        <Zap className="w-5 h-5" />
        Generate Schedule
      </button>
    </div>
  );
}