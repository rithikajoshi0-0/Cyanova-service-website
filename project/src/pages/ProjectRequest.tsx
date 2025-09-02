import React from 'react';
import { MessageCircle, CheckCircle, Clock, Users } from 'lucide-react';

const ProjectRequest = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free Consultation',
      description: 'Initial project discussion and feasibility assessment at no cost',
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'We respond to all project requests within 24 hours',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your project gets assigned to our best-matched developers',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Request Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
              {' '}Project
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your idea to life? Fill out our project request form and we'll get back to you 
            with a detailed proposal and timeline.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <benefit.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Request Form */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-xl p-8 border border-cyan-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Tell Us About Your Project
              </h2>
              <p className="text-slate-600">
                The more details you provide, the better we can understand your needs and provide an accurate quote.
              </p>
            </div>

            {/* Google Form Placeholder */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 text-cyan-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Project Request Form
                </h3>
                <p className="text-slate-600 mb-6">
                  Your Google Form will be embedded here. Include fields for:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Project Details:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Project type and scope</li>
                      <li>• Technical requirements</li>
                      <li>• Preferred timeline</li>
                      <li>• Budget range</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Contact Info:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Name and organization</li>
                      <li>• Email and phone</li>
                      <li>• Preferred communication method</li>
                      <li>• Additional requirements</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                >
                  Open Project Request Form
                </a>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                Prefer to discuss your project directly?
              </p>
              <a
                href="mailto:contact@cyanovatech.com?subject=Project Inquiry"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300"
              >
                Send us an email instead
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectRequest;