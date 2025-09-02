import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Zap, 
  Target, 
  Code, 
  Brain, 
  Database, 
  Globe,
  GraduationCap,
  Briefcase,
  Star,
  ArrowRight,
  CheckCircle,
  Calendar,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver high-quality solutions that exceed expectations and industry standards',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to understand their unique needs and goals',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to solve complex problems efficiently',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focused on delivering tangible outcomes that drive real business success',
    },
  ];

  const expertise = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      skills: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      experience: '3+ years',
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      skills: ['React/Next.js', 'Node.js', 'TypeScript', 'Python'],
      experience: '4+ years',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: ['SQL/NoSQL', 'Data Analysis', 'ETL Pipelines', 'Cloud Databases'],
      experience: '3+ years',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['Modern Frameworks', 'Responsive Design', 'API Development', 'Cloud Deployment'],
      experience: '4+ years',
    },
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Graduated with honors in Computer Science, specializing in AI and software engineering',
      icon: GraduationCap,
    },
    {
      title: 'Professional Projects',
      description: 'Successfully delivered 150+ projects across various industries and complexity levels',
      icon: Briefcase,
    },
    {
      title: 'Client Satisfaction',
      description: 'Maintained 98% client satisfaction rate with consistent positive feedback',
      icon: Star,
    },
    {
      title: 'Continuous Learning',
      description: 'Regularly updating skills with latest technologies and industry best practices',
      icon: TrendingUp,
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24h', label: 'Average Response Time' },
    { number: '4+', label: 'Years Experience' },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Started Freelancing Journey',
      description: 'Began offering technical services to fellow students and small businesses',
    },
    {
      year: '2022',
      title: 'Specialized in AI/ML',
      description: 'Expanded expertise into artificial intelligence and machine learning projects',
    },
    {
      year: '2023',
      title: 'Full Stack Mastery',
      description: 'Developed comprehensive full-stack development capabilities',
    },
    {
      year: '2024',
      title: 'Business Growth',
      description: 'Established Cyanova Tech as a trusted technical freelancing service',
    },
    {
      year: '2025',
      title: 'Continued Innovation',
      description: 'Expanding services and embracing emerging technologies',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
                  {' '}Cyanova Tech
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I'm Rithika Joshi, a passionate software developer and technical freelancer dedicated to 
                delivering exceptional solutions that bridge the gap between complex technology and practical applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-cyan-500 text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                    <Code className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Rithika Joshi</h3>
                  <p className="text-slate-600 text-lg">Technical Freelancer & Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              My Professional Journey
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p>
                My journey in technology began with a deep curiosity about how software can solve real-world problems. 
                What started as academic interest in computer science quickly evolved into a passion for creating 
                meaningful solutions that make a difference in people's lives and businesses.
              </p>
              <p>
                Through my studies and professional experience, I've developed expertise across multiple domains - 
                from artificial intelligence and machine learning to full-stack web development. This diverse 
                skill set allows me to approach projects holistically, understanding both the technical requirements 
                and the business objectives behind them.
              </p>
              <p>
                I founded Cyanova Tech with a mission to provide accessible, high-quality technical services to 
                students, professionals, and businesses. Whether it's helping a student with a complex algorithm 
                assignment, building a custom AI solution for a startup, or developing a full-scale web application 
                for an established business, I bring the same level of dedication and expertise to every project.
              </p>
              <p>
                What sets my approach apart is the combination of technical excellence with clear communication. 
                I believe that the best solutions come from truly understanding the problem, collaborating closely 
                with clients, and delivering not just code, but comprehensive solutions that drive real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Deep knowledge across multiple technology domains with hands-on experience in real-world applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-cyan-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <area.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-900">{area.title}</h3>
                      <span className="text-sm text-cyan-600 font-medium bg-cyan-50 px-3 py-1 rounded-full">
                        {area.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full hover:bg-cyan-100 hover:text-cyan-700 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional Timeline
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Key milestones in my journey as a technical freelancer and developer.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-teal-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="h-5 w-5 text-cyan-600" />
                        <span className="text-cyan-600 font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Key Achievements
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Milestones that reflect my commitment to excellence and continuous growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-cyan-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-cyan-100">
              Measurable results that demonstrate our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
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
              Core Values & Principles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The fundamental principles that guide every project and client relationship.
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

      {/* Education & Background */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Computer Science</h3>
                  <p className="text-slate-600">Specialized in AI & Software Engineering</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Education & Background
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  My academic foundation in Computer Science provided me with a solid understanding of 
                  fundamental programming concepts, data structures, and algorithmic thinking. During my studies, 
                  I specialized in artificial intelligence and software engineering, which sparked my interest 
                  in solving complex technical challenges.
                </p>
                <p>
                  Beyond formal education, I've continuously expanded my knowledge through practical projects, 
                  online courses, and staying current with industry trends. This self-directed learning approach 
                  has allowed me to master emerging technologies and frameworks as they become relevant in the market.
                </p>
                <p>
                  My academic projects often involved real-world applications, from developing machine learning 
                  models for data analysis to creating full-stack applications for various use cases. This 
                  hands-on experience during my studies laid the groundwork for my successful freelancing career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Me?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              What makes Cyanova Tech the right choice for your technical projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Student-Friendly Approach',
                description: 'I understand academic pressures and deadlines, offering special rates and educational support for students.',
                icon: GraduationCap,
              },
              {
                title: 'Business-Ready Solutions',
                description: 'Professional-grade applications and systems that scale with your business needs and requirements.',
                icon: Briefcase,
              },
              {
                title: 'Clear Communication',
                description: 'Regular updates, transparent pricing, and clear explanations throughout the development process.',
                icon: Users,
              },
              {
                title: 'Quality Assurance',
                description: 'Thorough testing, clean code, and comprehensive documentation with every project delivery.',
                icon: CheckCircle,
              },
              {
                title: 'Timely Delivery',
                description: 'Realistic timelines with consistent progress updates and on-time project completion.',
                icon: Calendar,
              },
              {
                title: 'Ongoing Support',
                description: 'Post-delivery support to ensure your solution continues to work perfectly and meets your needs.',
                icon: Target,
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-cyan-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss your project and see how I can help bring your technical vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
