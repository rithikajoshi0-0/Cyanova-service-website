import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Cyanova Tech</span>
            </div>
            <p className="text-slate-400 text-sm leading-6">
              Professional technical freelancing services for students, professionals, and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>AI Projects</li>
              <li>Full Stack Development</li>
              <li>Web Development</li>
              <li>Data Structures</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-300">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:rithikajoshi.b@gmail.com"
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>rithikajoshi.b@gmail.com</span>
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rithika-joshi-007878368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/rithikajoshi0-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Cyanova Tech Freelance. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/faq" className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-300">
              FAQ
            </Link>
            <a href="#" className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group">
          <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
