// src/components/Header.jsx
import React from 'react';
import { Dumbbell } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Dumbbell className="w-12 h-12 text-yellow-400" />
        <h1 className="text-6xl font-black text-white tracking-tight">POWA!</h1>
      </div>
      <p className="text-slate-400 text-lg italic">Stronger Every Week.</p>
    </div>
  );
}