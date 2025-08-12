import React, { useState } from 'react';
import { Music, Building, User, Mail, Phone, Globe, Users, Calendar, ArrowLeft, GraduationCap } from 'lucide-react';

export default function PartnerSchoolPage() {
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
    alert('Thank you for your partnership application! We will review your submission and contact you within 7-10 business days to discuss next steps.');
    console.log('Partner School Application:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Music className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">MUSICA UNIVERSALIS</span>
            </div>
            <button
              onClick={() => window.close()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Join Our Movement</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner School Application</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us to bring comprehensive music education programs to your students. 
            Together, we can create lasting impact through music.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Organization Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Organization Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Goals */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Goals</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">What do you hope to achieve through this partnership? *</label>
              <textarea
                name="partnershipGoals"
                value={formData.partnershipGoals}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Describe your goals, expected outcomes, and how this partnership would benefit your students..."
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Submit Partnership Application
            </button>
            <p className="text-sm text-gray-500 mt-4">
              We'll review your application and contact you to discuss next steps.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}