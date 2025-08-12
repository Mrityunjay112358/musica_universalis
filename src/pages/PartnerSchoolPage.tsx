import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Building, User, Mail, Phone, Globe, Users, Calendar, ArrowLeft, GraduationCap } from 'lucide-react';
import { formsService, type PartnerSchoolApplicationData } from '../services/formsService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function PartnerSchoolPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    contactPersonName: '',
    contactPersonTitle: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    numberOfStudents: '',
    ageGroups: [],
    currentMusicPrograms: '',
    facilities: '',
    partnershipGoals: '',
    availableResources: '',
    timeline: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'ageGroups') {
        setFormData(prev => ({
          ...prev,
          ageGroups: checked 
            ? [...prev.ageGroups, value]
            : prev.ageGroups.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitApplication();
  };

  const submitApplication = async () => {
    setLoading(true);
    setError('');

    const applicationData: PartnerSchoolApplicationData = {
      organizationName: formData.organizationName,
      organizationType: formData.organizationType,
      contactPersonName: formData.contactPersonName,
      contactPersonTitle: formData.contactPersonTitle,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      country: formData.country,
      numberOfStudents: formData.numberOfStudents,
      ageGroups: formData.ageGroups,
      currentMusicPrograms: formData.currentMusicPrograms,
      facilities: formData.facilities,
      partnershipGoals: formData.partnershipGoals,
      availableResources: formData.availableResources,
      timeline: formData.timeline,
      additionalInfo: formData.additionalInfo,
    };

    const { error: submitError } = await formsService.submitPartnerSchoolApplication(applicationData);

    if (submitError) {
      setError(submitError);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <StarryBackground />
        <div className="relative z-10">
          <Header />
          
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center">
              <ScrollReveal>
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <div className="bg-green-500 rounded-full p-4">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="text-4xl font-bold text-white mb-4">Application Submitted!</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Thank you for your partnership application! We will review your submission and contact you within 7-10 business days to discuss next steps.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link 
                  to="/"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Return to Home
                </Link>
              </ScrollReveal>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <ScrollReveal>
            <Link 
              to="/join" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Join Our Movement</span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="text-center mb-12">
          <ScrollReveal>
            <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <img 
                src="/musica-universalis-logo.png"
                alt="Musica Universalis Logo"
                className="h-16 w-16 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/logo.png";
                }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl font-bold text-white mb-4">Partner School Application</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Partner with us to bring comprehensive music education programs to your students. 
              Together, we can create lasting impact through music.
            </p>
          </ScrollReveal>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Organization Information */}
          <ScrollReveal delay={0.4}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Organization Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Organization Name *</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Organization Type *</label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select organization type</option>
                    <option value="public-school">Public School</option>
                    <option value="private-school">Private School</option>
                    <option value="charter-school">Charter School</option>
                    <option value="community-center">Community Center</option>
                    <option value="nonprofit">Nonprofit Organization</option>
                    <option value="after-school-program">After-School Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="https://yourschool.edu"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Contact Person Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Contact Person Title *</label>
                  <input
                    type="text"
                    name="contactPersonTitle"
                    value={formData.contactPersonTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="e.g., Principal, Program Director, Music Teacher"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Program Details */}
          <ScrollReveal delay={0.5}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Program Details</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Students *</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <select
                    name="numberOfStudents"
                    value={formData.numberOfStudents}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select student count</option>
                    <option value="1-25">1-25 students</option>
                    <option value="26-50">26-50 students</option>
                    <option value="51-100">51-100 students</option>
                    <option value="101-250">101-250 students</option>
                    <option value="251-500">251-500 students</option>
                    <option value="500+">500+ students</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Age Groups (Select all that apply) *</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'ages-3-5', label: 'Ages 3-5 (Preschool)' },
                    { value: 'ages-6-8', label: 'Ages 6-8 (Elementary)' },
                    { value: 'ages-9-11', label: 'Ages 9-11 (Elementary)' },
                    { value: 'ages-12-14', label: 'Ages 12-14 (Middle School)' },
                    { value: 'ages-15-17', label: 'Ages 15-17 (High School)' },
                    { value: 'ages-18+', label: 'Ages 18+ (Adult)' }
                  ].map((ageGroup) => (
                    <label key={ageGroup.value} className="flex items-center">
                      <input
                        type="checkbox"
                        name="ageGroups"
                        value={ageGroup.value}
                        checked={formData.ageGroups.includes(ageGroup.value)}
                        onChange={handleInputChange}
                        className="rounded border-white/20 text-blue-600 focus:ring-blue-500 bg-white/5"
                      />
                      <span className="ml-2 text-sm text-slate-300">{ageGroup.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Current Music Programs</label>
                <textarea
                  name="currentMusicPrograms"
                  value={formData.currentMusicPrograms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={3}
                  placeholder="Describe any existing music programs, classes, or activities..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Available Facilities & Resources</label>
                <textarea
                  name="facilities"
                  value={formData.facilities}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={3}
                  placeholder="Describe available classrooms, instruments, equipment, technology, etc..."
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Partnership Goals */}
          <ScrollReveal delay={0.6}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Partnership Goals</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">What do you hope to achieve through this partnership? *</label>
                <textarea
                  name="partnershipGoals"
                  value={formData.partnershipGoals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={4}
                  placeholder="Describe your goals, expected outcomes, and how this partnership would benefit your students..."
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Resources You Can Provide</label>
                <textarea
                  name="availableResources"
                  value={formData.availableResources}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={3}
                  placeholder="What can your organization contribute? (space, staff time, equipment, funding, etc.)"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Timeline *</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Start immediately</option>
                  <option value="1-3-months">Within 1-3 months</option>
                  <option value="3-6-months">Within 3-6 months</option>
                  <option value="6-12-months">Within 6-12 months</option>
                  <option value="next-academic-year">Next academic year</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={3}
                  placeholder="Any other information you'd like us to know about your organization or partnership needs..."
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Submit Button */}
          <ScrollReveal delay={0.7}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                <p className="text-red-400">{error}</p>
              </div>
            )}
            
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg neon-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Partnership Application'}
              </button>
              <p className="text-sm text-slate-400 mt-4">
                We'll review your application and contact you to discuss next steps.
              </p>
            </div>
          </ScrollReveal>
        </form>
      </div>
      
      <Footer />
      </div>
    </div>
  );
}