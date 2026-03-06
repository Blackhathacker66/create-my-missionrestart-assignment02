import React from 'react';
import { Twitter, Linkedin, Facebook, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 mt-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">CS — Ticket System</h3>
            <p className="text-sm leading-relaxed text-gray-500 pr-4">
              Empowering your support team with a streamlined, efficient, and intuitive ticketing system. We help you resolve customer issues faster, track progress in real-time, and deliver exceptional service every single day.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="flex items-center hover:text-white transition-colors"><Twitter className="w-4 h-4 mr-2" /> @CS — Ticket System</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors"><Linkedin className="w-4 h-4 mr-2" /> @CS — Ticket System</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors"><Facebook className="w-4 h-4 mr-2" /> @CS — Ticket System</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors"><Mail className="w-4 h-4 mr-2" /> support@cst.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center relative">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute -top-5 bg-gray-600 hover:bg-gray-500 text-white px-8 py-1 rounded-full transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500">© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
