import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-[#111]/90 backdrop-blur-sm text-[#f3ead3] px-6 py-4 border-b border-[#3a3a3a] font-serif shadow-[0_0_10px_rgba(0,0,0,0.4)] z-50 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest uppercase hover:text-yellow-200 transition-all">
          Husets Biograf
        </Link>

        {/* Menu */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm md:text-base tracking-widest font-mono">
          {[
            { path: '/', label: 'Now Playing' },
            { path: '/programme', label: 'Programme' },
            { path: '/vault', label: 'The Vault' },
            { path: '/contact', label: 'Red Room' },
            { path: '/volunteer', label: 'Join the Mayhem' },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:underline underline-offset-4 transition-all ${
                  pathname === path ? 'text-yellow-200' : 'hover:text-yellow-400'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
