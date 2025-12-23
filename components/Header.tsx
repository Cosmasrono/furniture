'use client';
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-white/98 via-white/95 to-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100/50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-5">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 bg-clip-text text-transparent hover:from-amber-600 hover:to-orange-600 transition-all duration-300 tracking-tight">
            Nenyon
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-sm text-gray-700 hover:text-amber-700 font-semibold transition-all duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-sm text-gray-700 hover:text-amber-700 font-semibold transition-all duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products" className="text-sm text-gray-700 hover:text-amber-700 font-semibold transition-all duration-300 relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-sm text-gray-700 hover:text-amber-700 font-semibold transition-all duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {session ? (
              <div className="flex items-center gap-4 ml-8 pl-8 border-l border-gray-200">
                <span className="text-sm text-gray-700 font-medium">Welcome, {session.user?.name?.split(' ')[0] || 'User'}</span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-gray-700 hover:text-red-600 font-semibold transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="ml-8 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-5 border-t border-gray-100/50 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <Link href="/" className="text-base text-gray-700 hover:text-blue-600 font-semibold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-base text-gray-700 hover:text-blue-600 font-semibold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/products" className="text-base text-gray-700 hover:text-blue-600 font-semibold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/contact" className="text-base text-gray-700 hover:text-blue-600 font-semibold transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            {session ? (
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-100/50">
                <span className="text-sm text-gray-700 font-semibold">Welcome, {session.user?.name || session.user?.email}</span>
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="text-left text-sm text-red-600 hover:text-red-700 font-semibold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => { signIn(); setMobileMenuOpen(false); }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center shadow-lg"
              >
                Sign In
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
