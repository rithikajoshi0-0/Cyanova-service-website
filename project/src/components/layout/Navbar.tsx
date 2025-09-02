import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-cyan-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800 group-hover:text-cyan-600 transition-colors duration-300">
                Cyanova Tech
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  isActive(item.href)
                    ? 'text-cyan-600 bg-cyan-50 active'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-cyan-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/request"
              className="btn-primary px-6 py-2 text-sm hover-glow"
            >
              Request Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-cyan-600 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 rounded-lg mt-2 shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block nav-link text-base ${
                  isActive(item.href)
                    ? 'text-cyan-600 bg-cyan-50 active'
                    : 'text-slate-600 hover:text-cyan-600 hover:bg-cyan-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/request"
              className="block btn-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Request Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
