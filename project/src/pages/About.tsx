import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their unique needs',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to solve complex problems',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focused on delivering tangible outcomes that drive success',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Average Response Time' },
    { number: '3+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
                {' '}Cyanova Tech
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated team of technical professionals specializing in delivering 
              high-quality freelancing services to students, businesses, and professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Professional Journey
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded with a mission to bridge the gap between technical complexity and practical solutions, 
                  Cyanova Tech has grown into a trusted partner for diverse clients seeking professional development services.
                </p>
                <p>
                  Our team combines deep technical expertise with a genuine understanding of our clients' challenges. 
                  Whether you're a student working on an academic project, a professional needing custom software, 
                  or a business looking to implement AI solutions, we approach every project with the same level 
                  of dedication and professionalism.
                </p>
                <p>
                  We specialize in cutting-edge technologies including artificial intelligence, modern web frameworks, 
                  and scalable backend systems. Our commitment to staying current with industry trends ensures that 
                  our clients receive solutions built with the latest and most effective tools available.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional Team</h3>
                  <p className="text-slate-600">Experienced developers ready to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-cyan-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide every project and client relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-100 to-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center group"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;