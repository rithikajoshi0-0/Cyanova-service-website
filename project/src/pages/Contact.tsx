import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github, Instagram } from 'lucide-react';

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
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us directly for immediate assistance',
      contact: 'Click the chat widget',
      action: '#',
    },
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a consultation to discuss your project in detail',
      contact: 'Available on request',
      action: 'mailto:rithikajoshi.b@gmail.com?subject=Schedule a Call',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rithika-joshi-007878368/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/rithikajoshi0-0', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
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
              Request Your Project
            </h2>
            <p className="text-xl text-slate-600">
              Fill out our project request form and we'll get back to you with a detailed proposal.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="scale-up" delay={300} className="card p-8 shadow-xl hover-glow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Project Request Form</h3>
              <p className="text-slate-600 mb-6">
                Please provide as much detail as possible about your project so we can give you an accurate quote.
              </p>
              
              {/* Placeholder for Google Form */}
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-dashed border-cyan-300 rounded-xl p-12">
                <MessageCircle className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Google Form Integration</h4>
                <p className="text-slate-600 mb-6">
                  Your Google Form will be embedded here. Visitors can fill out project details directly on this page.
                </p>
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hover-glow inline-flex items-center group"
                >
                  Open Project Form
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
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
