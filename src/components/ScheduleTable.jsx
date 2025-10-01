// src/components/ScheduleTable.jsx
import React from 'react';
import { Zap } from 'lucide-react';

export default function ScheduleTable({ liftData, liftName }) {
  return (
    <div className="mb-8">
      {/* Lift Name Header */}
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Zap className="w-6 h-6 text-yellow-400" />
        {liftName}
      </h3>
      
      {/* Week Tables */}
      {liftData.map(week => (
        <div 
          key={week.week} 
          className="mb-6 bg-slate-800 rounded-lg p-4 border border-slate-700"
        >
          <h4 className="text-lg font-bold text-yellow-400 mb-3">
            Week {week.week}
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-2 px-3 text-slate-300 font-semibold">
                    Sets
                  </th>
                  <th className="text-left py-2 px-3 text-slate-300 font-semibold">
                    Reps
                  </th>
                  <th className="text-left py-2 px-3 text-slate-300 font-semibold">
                    %
                  </th>
                  <th className="text-left py-2 px-3 text-slate-300 font-semibold">
                    Weight
                  </th>
                </tr>
              </thead>
              <tbody>
                {week.sets.map((set, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-slate-700/50 hover:bg-slate-700/30"
                  >
                    <td className="py-2 px-3 text-white">
                      {set.setCount > 1 ? `${set.setCount} sets` : '1 set'}
                    </td>
                    <td className="py-2 px-3 text-white">
                      {set.reps}
                    </td>
                    <td className="py-2 px-3 text-slate-300">
                      {set.percentage}%
                    </td>
                    <td className="py-2 px-3 text-yellow-400 font-bold">
                      {set.weight} kg
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}