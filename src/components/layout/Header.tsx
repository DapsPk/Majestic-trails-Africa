'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent shadow-sm border-b border-white/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-white to-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
              <span className="text-blue-800 font-bold text-sm">MT</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">Majestic Trails</span>
              <div className="text-xs text-white/80 -mt-1">Tanzania Adventures</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/safari" className="text-white/90 hover:text-white transition-colors font-medium relative group">
              Safari
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/kilimanjaro" className="text-white/90 hover:text-white transition-colors font-medium relative group">
              Kilimanjaro
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/zanzibar" className="text-white/90 hover:text-white transition-colors font-medium relative group">
              Zanzibar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>

          <div className="hidden md:block">
            <Link href="/safari">
              <Button size="sm" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                Book Adventure
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20 backdrop-blur-sm bg-white/10 rounded-lg">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Home
              </Link>
              <Link href="/safari" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Safari
              </Link>
              <Link href="/kilimanjaro" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Kilimanjaro
              </Link>
              <Link href="/zanzibar" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Zanzibar
              </Link>
              <div className="pt-4">
                <Link href="/safari">
                  <Button size="sm" className="w-full border-2 border-white text-white hover:bg-white hover:bg-opacity-10">
                    Book Adventure
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}