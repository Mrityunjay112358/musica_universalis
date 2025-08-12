import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Heart, CreditCard, User, Mail, Phone, MapPin, DollarSign, Shield, ArrowLeft } from 'lucide-react';
import { formsService, type DonationData } from '../services/formsService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
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
    country: 'India',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    isAnonymous: false,
    receiveUpdates: true
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

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  ];

  const getCurrentCurrency = () => {
    return currencies.find(c => c.code === selectedCurrency) || currencies[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitDonation();
  };

  const submitDonation = async () => {
    setLoading(true);
    setError('');

    const donationData: DonationData = {
      donationType,
      amount: parseFloat(customAmount),
      currency: selectedCurrency,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      country: formData.country,
      isAnonymous: formData.isAnonymous,
      receiveUpdates: formData.receiveUpdates,
    };

    const { error: submitError } = await formsService.submitDonation(donationData);

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
                <h1 className="text-4xl font-bold text-white mb-4">Thank You for Your Donation!</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Your generous contribution of {getCurrentCurrency().symbol}{customAmount} will help us bring music education to children who need it most.
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
                src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Musica Universalis Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl font-bold text-white mb-4">Make a Donation</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your generous contribution helps us bring music education to children who need it most. 
              Every donation makes a direct impact on a child's life.
            </p>
          </ScrollReveal>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Donation Type */}
          <ScrollReveal delay={0.4}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Donation Type</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDonationType('one-time')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    donationType === 'one-time'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold mb-2">One-Time Donation</h3>
                    <p className="text-sm text-gray-600">Make a single contribution to support our mission</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType('monthly')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    donationType === 'monthly'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <Heart className="h-8 w-8 mx-auto mb-3 text-green-600" />
                    <h3 className="text-lg font-semibold mb-2">Monthly Giving</h3>
                    <p className="text-sm text-gray-600">Provide ongoing support with recurring donations</p>
                  </div>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Donation Amount */}
          <ScrollReveal delay={0.5}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Donation Amount</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-300 mb-2">Currency</label>
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.symbol} {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="text-center">
                <label className="block text-sm font-medium text-slate-300 mb-4">Enter Your Donation Amount</label>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">{getCurrentCurrency().symbol}</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-48 px-6 py-4 text-2xl text-center bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    required
                  />
                </div>
                <p className="text-sm text-slate-400">
                  Every donation, no matter the size, makes a meaningful impact on a child's musical journey.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Personal Information */}
          <ScrollReveal delay={0.6}>
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
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Payment Information */}
          <ScrollReveal delay={0.7}>
            <div className="glass-dark p-8 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Secure Payment Information</h2>
              </div>
              <p className="text-sm text-slate-400 mb-6">Your payment information is encrypted and secure.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name on Card *</label>
                  <input
                    type="text"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Card Number *</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Expiry Date *</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">CVV *</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="123"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Submit Button */}
          <ScrollReveal delay={0.8}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                <p className="text-red-400">{error}</p>
              </div>
            )}
            
            <div className="text-center">
              <button
                type="submit"
                disabled={!customAmount || parseFloat(customAmount) <= 0 || loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg neon-blue disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Processing...' : `Complete Donation of ${getCurrentCurrency().symbol}${customAmount || '0'}`}
              </button>
              <p className="text-sm text-slate-400 mt-4">
                {loading ? 'Please wait while we process your donation...' : 'By completing this donation, you agree to our terms of service and privacy policy. Your donation is secure and encrypted.'}
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