import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-retro text-red-500 glitch" data-text="Husets Biograf">
          🎞 Husets Biograf
        </Link>

        <ul className="flex space-x-6 text-sm md:text-base">
          <li>
            <Link to="/" className="hover:text-pink-400 transition duration-200">Now Showing</Link>
          </li>
          <li>
            <Link to="/programme" className="hover:text-yellow-400 transition duration-200">Programme</Link>
          </li>
          <li>
            <Link to="/vault" className="hover:text-green-400 transition duration-200">The Vault</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition duration-200">Wanna Hang?</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
