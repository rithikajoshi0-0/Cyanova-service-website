import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'rithikajoshi.b@gmail.com',
      action: 'mailto:rithikajoshi.b@gmail.com',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      description: 'Message us on WhatsApp for quick responses',
      contact: '+91 9876543210',
      action: 'https://wa.me/919876543210',
    },
    {
      icon: MessageCircle,
      title: 'Schedule a Call',
      description: 'Book a consultation to discuss your project in detail',
      contact: 'Book via email',
      action: 'mailto:rithikajoshi.b@gmail.com?subject=Schedule a Call',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rithika-joshi-007878368/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rithikajoshi0-0', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/cyanovatech', label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
              {' '}Touch
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? We'd love to hear from you. 
            Choose your preferred way to connect and let's discuss your needs.
          </p>
        </AnimatedSection>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500 ease-out"
              >
                <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-500 hover-glow">
                  <method.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-300"
                >
                  {method.contact}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quick Contact Form
            </h2>
            <p className="text-xl text-slate-600">
              Send us a quick message and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-up" delay={300} className="card p-8 shadow-xl hover-glow">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Brief description of your inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 hover-glow inline-flex items-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-4">
                For detailed project requests, use our comprehensive project form:
              </p>
              <Link
                to="/request"
                className="btn-secondary hover-glow inline-flex items-center group"
              >
                Project Request Form
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Location</h4>
                  <p className="text-slate-600 text-sm">Bangalore, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Response Time</h4>
                  <p className="text-slate-600 text-sm">Within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Availability</h4>
                  <p className="text-slate-600 text-sm">Mon-Sat, 9 AM - 8 PM IST</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-cyan-100 to-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-cyan-600 hover:shadow-lg transition-all duration-500 transform hover:scale-110 group hover-glow"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Contact;
