import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', path: '/' },
    { label: 'Portfolio', path: '/portfolio', active: true },
    { label: 'Stack', path: '/' },
    { label: 'Team', path: '/' },
    { label: 'Contact', path: '/' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#020617]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="text-xl md:text-2xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity"
          >
            ASTRIVIX
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors ${
                  item.active
                    ? 'text-sky-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/contact')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] transition-all duration-300 hover:scale-105"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800/50">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  item.active
                    ? 'text-sky-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-base font-semibold"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;