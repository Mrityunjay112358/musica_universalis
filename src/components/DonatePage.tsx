import React, { useState } from 'react';
import { Music, Heart, CreditCard, User, Mail, Phone, MapPin, DollarSign, Shield, ArrowLeft } from 'lucide-react';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [donationPurpose, setDonationPurpose] = useState<'general' | 'instruments' | 'classroom' | 'therapy'>('general');
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
    receiveUpdates: true,
    dedicateGift: false,
    dedicationName: '',
    dedicationMessage: ''
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

  const getAmount = () => {
    return customAmount;
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
    alert('Thank you for your donation! This would integrate with a secure payment processor.');
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
              <span>Back to Main Site</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous contribution helps us bring music education to children who need it most. 
            Every donation makes a direct impact on a child's life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Donation Type */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Donation Type</h2>
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

          {/* Donation Amount */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Donation Amount</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="text-center">
              <label className="block text-sm font-medium text-gray-700 mb-4">Enter Your Donation Amount</label>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-700">{getCurrentCurrency().symbol}</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-48 px-6 py-4 text-2xl text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0.00"
                  min="1"
                  step="0.01"
                  required
                />
              </div>
              <p className="text-sm text-gray-600">
                Every donation, no matter the size, makes a meaningful impact on a child's musical journey.
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Secure Payment Information</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">Your payment information is encrypted and secure.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card *</label>
                <input
                  type="text"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!customAmount || parseFloat(customAmount) <= 0}
              className="bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Complete Donation of {getCurrentCurrency().symbol}{getAmount()}
            </button>
            <p className="text-sm text-gray-500 mt-4">
              By completing this donation, you agree to our terms of service and privacy policy.
              Your donation is secure and encrypted.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}