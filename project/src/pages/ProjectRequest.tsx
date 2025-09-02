import React, { useState } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of projects do you accept?',
      answer: 'We accept a wide range of technical projects including AI/ML implementations, full-stack web applications, mobile apps, data analysis, and academic programming assignments. We work with students, professionals, and businesses of all sizes.',
    },
    {
      question: 'How do you handle pricing for projects?',
      answer: 'All pricing is custom and based on project complexity, timeline, and requirements. After you submit a project request, we\'ll provide a detailed quote within 24-48 hours. We offer competitive rates with special considerations for students.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Simple projects may take 1-3 days, while complex applications can take 2-4 weeks. We always provide realistic timelines upfront and keep you updated throughout the development process.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer post-delivery support to ensure everything works perfectly. This includes bug fixes, minor adjustments, and guidance on using your new solution. Extended support packages are also available.',
    },
    {
      question: 'Can you help with academic projects and assignments?',
      answer: 'Absolutely! We have extensive experience helping students with programming assignments, data structures projects, algorithm implementations, and research projects. We ensure all work is original and educational.',
    },
    {
      question: 'What technologies and frameworks do you work with?',
      answer: 'We work with modern technologies including React, Node.js, Python, TypeScript, databases (SQL/NoSQL), cloud platforms (AWS, GCP), AI/ML frameworks (TensorFlow, PyTorch), and mobile development frameworks like React Native.',
    },
    {
      question: 'How do you ensure project confidentiality?',
      answer: 'We take confidentiality seriously. All projects are covered by non-disclosure agreements, and we use secure development practices. Your code, data, and project details are never shared with third parties.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer: 'Yes, we can work with and improve existing codebases. Whether you need feature additions, bug fixes, performance optimization, or code refactoring, we can help enhance your current applications.',
    },
    {
      question: 'Do you offer consultation services?',
      answer: 'Yes, we provide technical consultation services including architecture reviews, technology stack recommendations, project planning, and development strategy. Contact us to schedule a consultation call.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, PayPal, and major credit cards. Payment terms are typically 50% upfront for larger projects, with the remainder due upon completion.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
              {' '}Questions
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and how we can help with your project.
          </p>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="card overflow-hidden hover-glow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-cyan-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-cyan-600 transform transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-cyan-600 transform transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Can't find what you're looking for? We're here to help with any questions about your project.
          </p>
          <a
            href="mailto:contact@cyanovatech.com"
            className="btn-primary px-8 py-4 text-lg hover-glow inline-flex items-center group"
          >
            Contact Us Directly
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default FAQ;
