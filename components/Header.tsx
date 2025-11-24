'use client';
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors">
            Nenyon
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/products" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>

            {session ? (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                <span className="text-sm text-gray-600">Hi, {session.user?.name?.split(' ')[0] || 'User'}</span>
                <button
                  onClick={() => signOut()}
                  className="text-sm text-gray-600 hover:text-red-600 font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="ml-4 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
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
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-gray-100 mt-4">
            <Link href="/" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/products" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            {session ? (
              <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-600">Welcome, {session.user?.name || session.user?.email}</span>
                <button
                  onClick={() => { signOut(); setMobileMenuOpen(false); }}
                  className="text-left text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => { signIn(); setMobileMenuOpen(false); }}
                className="w-full px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors text-center"
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
