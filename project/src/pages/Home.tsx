import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Every project delivered with excellence and attention to detail',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Meet your deadlines with our efficient development process',
    },
    {
      icon: Users,
      title: 'Student Friendly',
      description: 'Special rates and understanding for academic projects',
    },
    {
      icon: Shield,
      title: 'Confidential',
      description: 'Your projects and data are always kept secure and private',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 to-teal-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
                Technical Freelancing
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering exceptional AI projects, full-stack development, and technical solutions 
              for students, professionals, and businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request"
                className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Cyanova Tech?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine technical expertise with professional service to deliver outstanding results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Technical Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From AI implementations to full-stack applications, we handle all your technical needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Custom AI solutions, data analysis, and intelligent automation systems',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Full Stack Development',
                description: 'Complete web applications with modern frameworks and databases',
                gradient: 'from-cyan-500 to-teal-500',
              },
              {
                title: 'Web Development',
                description: 'Responsive websites, e-commerce platforms, and web applications',
                gradient: 'from-teal-500 to-green-500',
              },
              {
                title: 'Data Structures & Algorithms',
                description: 'Academic projects, coding assignments, and algorithm optimization',
                gradient: 'from-green-500 to-emerald-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-cyan-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-300 flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join hundreds of satisfied clients who trust us with their technical needs.
          </p>
          <Link
            to="/request"
            className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;