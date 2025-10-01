// src/components/LoadingSpinner.jsx
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="text-center py-20">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-slate-700 border-t-yellow-400 mb-4"></div>
      <p className="text-slate-400 text-lg font-semibold">
        Generating your schedule...
      </p>
    </div>
  );
}