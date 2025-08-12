import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, User, Mail, Phone, MapPin, Calendar, Briefcase, ArrowLeft, Heart, Clock, Globe } from 'lucide-react';
import { formsService, type VolunteerApplicationData } from '../services/formsService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function VolunteerApplicationPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    dateOfBirth: '',
    occupation: '',
    volunteerType: '',
    musicalBackground: '',
    instruments: '',
    teachingExperience: '',
    timeCommitment: '',
    availability: [],
    languages: '',
    motivation: '',
    references: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'availability') {
        setFormData(prev => ({
          ...prev,
          availability: checked 
            ? [...prev.availability, value]
            : prev.availability.filter(item => item !== value)
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

    const applicationData: VolunteerApplicationData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      country: formData.country,
      dateOfBirth: formData.dateOfBirth,
      occupation: formData.occupation,
      volunteerType: formData.volunteerType,
      musicalBackground: formData.musicalBackground,
      instruments: formData.instruments,
      teachingExperience: formData.teachingExperience,
      timeCommitment: formData.timeCommitment,
      availability: formData.availability,
      languages: formData.languages,
      motivation: formData.motivation,
      references: formData.references,
    };

    const { error: submitError } = await formsService.submitVolunteerApplication(applicationData);

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
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="text-4xl font-bold text-white mb-4">Application Submitted!</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Thank you for your volunteer application! We will review your submission and contact you within 5-7 business days.
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
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
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
                src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Musica Universalis Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl font-bold text-white mb-4">Volunteer Application</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join our mission to bring music education to children who need it most. 
              Your time and talents can make a lasting difference.
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
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
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
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
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

          {/* Volunteer Details */}
          <ScrollReveal delay={0.5}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Volunteer Details</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Type of Volunteering *</label>
                <select
                  name="volunteerType"
                  value={formData.volunteerType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                >
                  <option value="">Select volunteer type</option>
                  <option value="music-instructor">Music Instructor</option>
                  <option value="assistant-teacher">Assistant Teacher</option>
                  <option value="event-coordinator">Event Coordinator</option>
                  <option value="administrative">Administrative Support</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="social-media">Social Media & Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Musical Background</label>
                <textarea
                  name="musicalBackground"
                  value={formData.musicalBackground}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={3}
                  placeholder="Describe your musical education, training, and experience..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Why do you want to volunteer with us? *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  rows={4}
                  placeholder="Tell us about your passion for music education and helping children..."
                  required
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Submit Button */}
          <ScrollReveal delay={0.6}>
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
                {loading ? 'Submitting...' : 'Submit Volunteer Application'}
              </button>
              <p className="text-sm text-slate-400 mt-4">
                We'll review your application and contact you within 5-7 business days.
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