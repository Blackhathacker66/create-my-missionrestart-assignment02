import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          CS — Ticket System
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Changelog</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Download</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
            <span className="mr-1">+</span> New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
}
