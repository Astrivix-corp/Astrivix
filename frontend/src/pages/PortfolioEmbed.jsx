import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PortfolioEmbed() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      <nav className="flex items-center justify-between px-6 py-3 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800/50 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <button
          onClick={() => navigate('/')}
          className="text-xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity"
        >
          ASTRIVIX
        </button>
        <div className="w-20" />
      </nav>
      <iframe
        src="https://astrivix-portfolio.vercel.app"
        className="flex-1 w-full border-none"
        title="Astrivix Portfolio"
        allow="fullscreen"
      />
    </div>
  );
}
