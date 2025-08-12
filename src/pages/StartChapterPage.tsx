import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, User, Mail, Phone, MapPin, Building, ArrowLeft, GraduationCap, Heart, Clock } from 'lucide-react';
import { formsService, type ChapterApplicationData } from '../services/formsService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function StartChapterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: 'United States',
    zipCode: '',
    organizationName: '',
    organizationType: '',
    currentRole: '',
    musicalBackground: '',
    leadershipExperience: '',
    communityNeeds: '',
    targetAudience: '',
    expectedStudents: '',
    availableResources: '',
    timeCommitment: '',
    startTimeline: '',
    supportNeeded: '',
    additionalInfo: '',
    agreeToTerms: false,
    receiveTraining: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
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

    const applicationData: ChapterApplicationData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      zipCode: formData.zipCode,
      organizationName: formData.organizationName,
      organizationType: formData.organizationType,
      currentRole: formData.currentRole,
      musicalBackground: formData.musicalBackground,
      leadershipExperience: formData.leadershipExperience,
      communityNeeds: formData.communityNeeds,
      targetAudience: formData.targetAudience,
      expectedStudents: formData.expectedStudents,
      availableResources: formData.availableResources,
      timeCommitment: formData.timeCommitment,
      startTimeline: formData.startTimeline,
      supportNeeded: formData.supportNeeded,
      additionalInfo: formData.additionalInfo,
      agreeToTerms: formData.agreeToTerms,
      receiveTraining: formData.receiveTraining,
    };

    const { error: submitError } = await formsService.submitChapterApplication(applicationData);

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
                    <Globe className="h-12 w-12 text-white" />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="text-4xl font-bold text-white mb-4">Application Submitted!</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Thank you for your interest in starting a chapter! We will review your application and contact you within 7-10 business days to discuss the next steps.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link 
                  to="/"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-colors"
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
                to="/" 
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
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
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl font-bold text-white mb-4">Start a Chapter in Your City</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Bring MUSICA UNIVERSALIS to your community. We'll help you establish a local 
                chapter and train volunteers to serve children in your area.
              </p>
            </ScrollReveal>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <ScrollReveal delay={0.4}>
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                        required
                      />
                    </div>
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
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
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
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Location Information */}
            <ScrollReveal delay={0.5}>
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Chapter Location</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">State/Province *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">ZIP/Postal Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Background & Experience */}
            <ScrollReveal delay={0.6}>
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Background & Experience</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Current Role/Occupation *</label>
                  <input
                    type="text"
                    name="currentRole"
                    value={formData.currentRole}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="e.g., Teacher, Community Leader, Music Educator"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Musical Background</label>
                  <textarea
                    name="musicalBackground"
                    value={formData.musicalBackground}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    rows={3}
                    placeholder="Describe your musical education, experience, and skills..."
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Leadership Experience *</label>
                  <textarea
                    name="leadershipExperience"
                    value={formData.leadershipExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    rows={3}
                    placeholder="Describe your experience leading teams, organizations, or community initiatives..."
                    required
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Chapter Planning */}
            <ScrollReveal delay={0.7}>
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Chapter Planning</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Community Needs Assessment *</label>
                  <textarea
                    name="communityNeeds"
                    value={formData.communityNeeds}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    rows={4}
                    placeholder="Describe the music education needs in your community and the children you hope to serve..."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Expected Number of Students *</label>
                    <select
                      name="expectedStudents"
                      value={formData.expectedStudents}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      required
                    >
                      <option value="">Select expected student count</option>
                      <option value="10-25">10-25 students</option>
                      <option value="26-50">26-50 students</option>
                      <option value="51-100">51-100 students</option>
                      <option value="100+">100+ students</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Time Commitment *</label>
                    <select
                      name="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      required
                    >
                      <option value="">Select time commitment</option>
                      <option value="5-10 hours/week">5-10 hours per week</option>
                      <option value="10-20 hours/week">10-20 hours per week</option>
                      <option value="20+ hours/week">20+ hours per week</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Available Resources</label>
                  <textarea
                    name="availableResources"
                    value={formData.availableResources}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    rows={3}
                    placeholder="What resources do you have access to? (space, volunteers, instruments, funding, etc.)"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Start Timeline *</label>
                  <select
                    name="startTimeline"
                    value={formData.startTimeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3 months">Within 1-3 months</option>
                    <option value="3-6 months">Within 3-6 months</option>
                    <option value="6-12 months">Within 6-12 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>
              </div>
            </ScrollReveal>

            {/* Support & Training */}
            <ScrollReveal delay={0.8}>
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Support & Training</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">What support do you need from us? *</label>
                  <textarea
                    name="supportNeeded"
                    value={formData.supportNeeded}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    rows={3}
                    placeholder="Training, curriculum, instruments, funding, volunteer recruitment, etc."
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="receiveTraining"
                      checked={formData.receiveTraining}
                      onChange={handleInputChange}
                      className="rounded border-white/20 text-green-500 focus:ring-green-500 bg-white/5"
                    />
                    <span className="ml-2 text-slate-300">I am interested in receiving comprehensive chapter leader training</span>
                  </label>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    rows={3}
                    placeholder="Any other information you'd like us to know about your vision for the chapter..."
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="rounded border-white/20 text-green-500 focus:ring-green-500 bg-white/5 mt-1"
                      required
                    />
                    <span className="ml-2 text-slate-300 text-sm">
                      I agree to follow MUSICA UNIVERSALIS guidelines and standards for chapter operations, 
                      and commit to maintaining the quality and mission of our programs. *
                    </span>
                  </label>
                </div>
              </div>
            </ScrollReveal>

            {/* Submit Button */}
            <ScrollReveal delay={0.9}>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                  <p className="text-red-400">{error}</p>
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-xl text-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg neon-blue disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit Chapter Application'}
                </button>
                <p className="text-sm text-slate-400 mt-4">
                  We'll review your application and contact you to discuss establishing your chapter.
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