import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/common/AnimatedSection';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText, 
  Users,
  Brain,
  Globe,
  Code,
  Database,
  Smartphone,
  BarChart3
} from 'lucide-react';

const ProjectRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    title: '',
    description: '',
    requirements: '',
    technologies: '',
    deliverables: '',
    additionalInfo: '',
  });

  const projectTypes = [
    { value: 'ai-ml', label: 'AI & Machine Learning', icon: Brain },
    { value: 'fullstack', label: 'Full Stack Development', icon: Globe },
    { value: 'web', label: 'Web Development', icon: Code },
    { value: 'mobile', label: 'Mobile Development', icon: Smartphone },
    { value: 'data', label: 'Data Analysis', icon: BarChart3 },
    { value: 'algorithms', label: 'Data Structures & Algorithms', icon: Database },
    { value: 'other', label: 'Other', icon: FileText },
  ];

  const budgetRanges = [
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: 'over-5000', label: 'Over $5,000' },
    { value: 'discuss', label: 'Let\'s discuss' },
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-3 days)' },
    { value: 'week', label: '1 week' },
    { value: 'two-weeks', label: '2 weeks' },
    { value: 'month', label: '1 month' },
    { value: 'flexible', label: 'Flexible timeline' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your project request! We\'ll get back to you within 24-48 hours.');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Request Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
              {' '}Project
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project requirements and we'll provide you with a detailed proposal 
            and timeline within 24-48 hours.
          </p>
        </AnimatedSection>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: FileText,
                title: 'Submit Request',
                description: 'Fill out the detailed form below with your project requirements',
              },
              {
                icon: Clock,
                title: 'Get Proposal',
                description: 'Receive a detailed proposal with timeline and pricing within 48 hours',
              },
              {
                icon: CheckCircle,
                title: 'Start Project',
                description: 'Approve the proposal and we\'ll begin working on your project',
              },
            ].map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Request Form */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="scale-up" className="card p-8 shadow-xl hover-glow">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Request Form</h2>
              <p className="text-slate-600">
                Please provide detailed information about your project to help us give you the most accurate quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-cyan-600" />
                  Contact Information
                </h3>
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
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Project Type */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-cyan-600" />
                  Project Type
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 ${
                        formData.projectType === type.value
                          ? 'border-cyan-500 bg-cyan-50'
                          : 'border-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type.value}
                        checked={formData.projectType === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <type.icon className="h-5 w-5 text-cyan-600 mr-3" />
                      <span className="text-sm font-medium text-slate-900">{type.label}</span>
                      {formData.projectType === type.value && (
                        <CheckCircle className="h-5 w-5 text-cyan-600 ml-auto" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-cyan-600" />
                    Budget Range
                  </h3>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-cyan-600" />
                    Timeline
                  </h3>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-cyan-600" />
                  Project Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Brief title for your project"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your project in detail. What problem are you trying to solve?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">
                      Specific Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="List any specific features, functionalities, or technical requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="technologies" className="block text-sm font-medium text-slate-700 mb-2">
                      Preferred Technologies (Optional)
                    </label>
                    <input
                      type="text"
                      id="technologies"
                      name="technologies"
                      value={formData.technologies}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="e.g., React, Python, TensorFlow, PostgreSQL"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="deliverables" className="block text-sm font-medium text-slate-700 mb-2">
                      Expected Deliverables
                    </label>
                    <textarea
                      id="deliverables"
                      name="deliverables"
                      rows={3}
                      value={formData.deliverables}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="What do you expect to receive? (e.g., source code, documentation, deployed application)"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Any additional details, constraints, or questions you'd like to share..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="btn-primary px-8 py-4 text-lg hover-glow inline-flex items-center group"
                >
                  Submit Project Request
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <p className="text-sm text-slate-500 mt-4">
                  We'll review your request and get back to you within 24-48 hours with a detailed proposal.
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Here's what you can expect after submitting your project request.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Request Review',
                description: 'We carefully analyze your project requirements and technical specifications.',
                time: 'Within 2 hours',
              },
              {
                step: '2',
                title: 'Proposal Creation',
                description: 'We create a detailed proposal with timeline, milestones, and pricing.',
                time: '24-48 hours',
              },
              {
                step: '3',
                title: 'Discussion & Refinement',
                description: 'We discuss the proposal with you and make any necessary adjustments.',
                time: '1-2 days',
              },
              {
                step: '4',
                title: 'Project Kickoff',
                description: 'Once approved, we begin development with regular progress updates.',
                time: 'Immediate',
              },
            ].map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 150}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm mb-2">{step.description}</p>
                <span className="text-xs text-cyan-600 font-medium bg-cyan-50 px-2 py-1 rounded-full">
                  {step.time}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-700">
        <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to Talk First?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            If you'd like to discuss your project before submitting a formal request, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rithikajoshi.b@gmail.com?subject=Project Discussion"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center group hover-glow"
            >
              Email Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center hover-glow"
            >
              Contact Page
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default ProjectRequest;
