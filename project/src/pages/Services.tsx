import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Globe, 
  Database, 
  Smartphone, 
  Code, 
  BarChart3, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning Projects',
      description: 'Custom AI solutions, chatbots, recommendation systems, and data analysis tools',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Custom Models'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'Complete web applications with modern frameworks, databases, and cloud deployment',
      features: ['React/Next.js Frontend', 'Node.js/Python Backend', 'Database Design', 'Cloud Deployment'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Responsive websites, e-commerce platforms, and progressive web applications',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
      gradient: 'from-teal-500 to-green-500',
    },
    {
      icon: Database,
      title: 'Data Structures & Algorithms',
      description: 'Academic projects, coding assignments, and algorithm optimization solutions',
      features: ['Algorithm Implementation', 'Code Optimization', 'Academic Projects', 'Performance Analysis'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and modern frameworks',
      features: ['React Native', 'Cross-platform', 'Native Performance', 'App Store Deployment'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Visualization',
      description: 'Transform your data into actionable insights with custom analytics solutions',
      features: ['Data Processing', 'Interactive Dashboards', 'Statistical Analysis', 'Custom Reports'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
              {' '}Services
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical solutions tailored to your specific needs. 
            From AI implementations to full-stack applications, we deliver professional results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-cyan-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A structured approach ensuring quality delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your requirements and create a detailed project plan with timelines and deliverables.',
              },
              {
                step: '02',
                title: 'Development & Testing',
                description: 'Our team builds your solution using best practices, with regular updates and thorough testing.',
              },
              {
                step: '03',
                title: 'Delivery & Support',
                description: 'We deliver your completed project with documentation and provide ongoing support as needed.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Tell us about your project and let's discuss how we can help bring it to life.
          </p>
          <Link
            to="/request"
            className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center group"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;