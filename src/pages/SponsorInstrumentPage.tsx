import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Heart, CreditCard, User, Mail, Phone, Guitar, Piano, Mic, ArrowLeft, Shield, DollarSign } from 'lucide-react';
import { formsService, type InstrumentSponsorshipData } from '../services/formsService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function SponsorInstrumentPage() {
  const [selectedInstrument, setSelectedInstrument] = useState('');
  const [sponsorshipType, setSponsorshipType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
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
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    dedicateInstrument: false,
    dedicationName: '',
    dedicationMessage: '',
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

  const instruments = [
    { 
      id: 'electric-guitar', 
      name: 'Electric Guitar', 
      prices: { USD: 360, INR: 30000, EUR: 330, GBP: 280, CAD: 480, AUD: 540, JPY: 54000, CNY: 2600, BRL: 1900, MXN: 6500 },
      icon: Guitar, 
      description: 'Professional electric guitar for advanced learning' 
    },
    { 
      id: 'acoustic-guitar', 
      name: 'Acoustic Guitar', 
      prices: { USD: 130, INR: 11000, EUR: 120, GBP: 100, CAD: 175, AUD: 195, JPY: 19500, CNY: 950, BRL: 690, MXN: 2350 },
      icon: Guitar, 
      description: 'Classic acoustic guitar for beginners and professionals' 
    },
    { 
      id: 'synthesizer', 
      name: 'Synthesizer (Synth)', 
      prices: { USD: 450, INR: 37500, EUR: 410, GBP: 350, CAD: 600, AUD: 675, JPY: 67500, CNY: 3250, BRL: 2400, MXN: 8100 },
      icon: Piano, 
      description: 'Digital synthesizer for electronic music creation' 
    },
    { 
      id: 'conga', 
      name: 'Conga (Kongo)', 
      prices: { USD: 270, INR: 22500, EUR: 245, GBP: 210, CAD: 360, AUD: 405, JPY: 40500, CNY: 1950, BRL: 1440, MXN: 4860 },
      icon: Music, 
      description: 'Traditional conga drums for rhythm and percussion' 
    },
    { 
      id: 'microphones', 
      name: 'Microphones (Mics)', 
      prices: { USD: 120, INR: 10000, EUR: 110, GBP: 95, CAD: 160, AUD: 180, JPY: 18000, CNY: 870, BRL: 640, MXN: 2160 },
      icon: Mic, 
      description: 'Professional microphones for vocals and recording' 
    },
    { 
      id: 'speakers', 
      name: 'Speakers (Monitors)', 
      prices: { USD: 330, INR: 27500, EUR: 300, GBP: 255, CAD: 440, AUD: 495, JPY: 49500, CNY: 2380, BRL: 1760, MXN: 5940 },
      icon: Music, 
      description: 'Studio monitor speakers for sound amplification' 
    },
    { 
      id: 'bongo', 
      name: 'Bongo', 
      prices: { USD: 90, INR: 7500, EUR: 82, GBP: 70, CAD: 120, AUD: 135, JPY: 13500, CNY: 650, BRL: 480, MXN: 1620 },
      icon: Music, 
      description: 'Traditional bongo drums for percussion ensemble' 
    },
    { 
      id: 'xylophone', 
      name: 'Xylophone', 
      prices: { USD: 170, INR: 14000, EUR: 155, GBP: 132, CAD: 227, AUD: 255, JPY: 25500, CNY: 1225, BRL: 905, MXN: 3060 },
      icon: Music, 
      description: 'Colorful xylophone for melody and music education' 
    },
    { 
      id: 'tambourine', 
      name: 'Tambourine', 
      prices: { USD: 15, INR: 1250, EUR: 14, GBP: 12, CAD: 20, AUD: 22, JPY: 2250, CNY: 108, BRL: 80, MXN: 270 },
      icon: Music, 
      description: 'Hand percussion tambourine for rhythm and accompaniment' 
    }
  ];

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
    { code: 'BRL', symbol: 'R$', name: 'Brazilian Real' },
    { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
    { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
    { code: 'SEK', symbol: 'kr', name: 'Swedish Krona' },
    { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone' },
    { code: 'DKK', symbol: 'kr', name: 'Danish Krone' },
    { code: 'PLN', symbol: 'zł', name: 'Polish Złoty' },
    { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna' },
    { code: 'HUF', symbol: 'Ft', name: 'Hungarian Forint' },
    { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
    { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
    { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
    { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar' },
    { code: 'KRW', symbol: '₩', name: 'South Korean Won' },
    { code: 'THB', symbol: '฿', name: 'Thai Baht' },
    { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
    { code: 'PHP', symbol: '₱', name: 'Philippine Peso' },
    { code: 'IDR', symbol: 'Rp', name: 'Indonesian Rupiah' },
    { code: 'VND', symbol: '₫', name: 'Vietnamese Dong' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
    { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal' },
    { code: 'QAR', symbol: '﷼', name: 'Qatari Riyal' },
    { code: 'KWD', symbol: 'د.ك', name: 'Kuwaiti Dinar' },
    { code: 'BHD', symbol: '.د.ب', name: 'Bahraini Dinar' },
    { code: 'OMR', symbol: '﷼', name: 'Omani Rial' },
    { code: 'JOD', symbol: 'د.ا', name: 'Jordanian Dinar' },
    { code: 'LBP', symbol: '£', name: 'Lebanese Pound' },
    { code: 'EGP', symbol: '£', name: 'Egyptian Pound' },
    { code: 'ILS', symbol: '₪', name: 'Israeli Shekel' },
    { code: 'PKR', symbol: '₨', name: 'Pakistani Rupee' },
    { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
    { code: 'LKR', symbol: '₨', name: 'Sri Lankan Rupee' },
    { code: 'NPR', symbol: '₨', name: 'Nepalese Rupee' },
    { code: 'AFN', symbol: '؋', name: 'Afghan Afghani' },
    { code: 'MMK', symbol: 'K', name: 'Myanmar Kyat' },
    { code: 'KHR', symbol: '៛', name: 'Cambodian Riel' },
    { code: 'LAK', symbol: '₭', name: 'Lao Kip' },
    { code: 'BND', symbol: 'B$', name: 'Brunei Dollar' },
    { code: 'TWD', symbol: 'NT$', name: 'Taiwan Dollar' },
    { code: 'MOP', symbol: 'MOP$', name: 'Macanese Pataca' },
    { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
    { code: 'FJD', symbol: 'FJ$', name: 'Fijian Dollar' },
    { code: 'PGK', symbol: 'K', name: 'Papua New Guinea Kina' },
    { code: 'WST', symbol: 'WS$', name: 'Samoan Tala' },
    { code: 'TOP', symbol: 'T$', name: 'Tongan Paʻanga' },
    { code: 'VUV', symbol: 'VT', name: 'Vanuatu Vatu' },
    { code: 'SBD', symbol: 'SI$', name: 'Solomon Islands Dollar' },
    { code: 'NCF', symbol: '₣', name: 'CFP Franc' },
    { code: 'XPF', symbol: '₣', name: 'CFP Franc' },
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' },
    { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi' },
    { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling' },
    { code: 'UGX', symbol: 'USh', name: 'Ugandan Shilling' },
    { code: 'TZS', symbol: 'TSh', name: 'Tanzanian Shilling' },
    { code: 'ETB', symbol: 'Br', name: 'Ethiopian Birr' },
    { code: 'MAD', symbol: 'د.م.', name: 'Moroccan Dirham' },
    { code: 'TND', symbol: 'د.ت', name: 'Tunisian Dinar' },
    { code: 'DZD', symbol: 'د.ج', name: 'Algerian Dinar' },
    { code: 'LYD', symbol: 'ل.د', name: 'Libyan Dinar' },
    { code: 'XOF', symbol: 'CFA', name: 'West African CFA Franc' },
    { code: 'XAF', symbol: 'FCFA', name: 'Central African CFA Franc' },
    { code: 'BWP', symbol: 'P', name: 'Botswanan Pula' },
    { code: 'NAD', symbol: 'N$', name: 'Namibian Dollar' },
    { code: 'SZL', symbol: 'L', name: 'Swazi Lilangeni' },
    { code: 'LSL', symbol: 'L', name: 'Lesotho Loti' },
    { code: 'MWK', symbol: 'MK', name: 'Malawian Kwacha' },
    { code: 'ZMW', symbol: 'ZK', name: 'Zambian Kwacha' },
    { code: 'ZWL', symbol: 'Z$', name: 'Zimbabwean Dollar' },
    { code: 'MZN', symbol: 'MT', name: 'Mozambican Metical' },
    { code: 'AOA', symbol: 'Kz', name: 'Angolan Kwanza' },
    { code: 'MGA', symbol: 'Ar', name: 'Malagasy Ariary' },
    { code: 'MUR', symbol: '₨', name: 'Mauritian Rupee' },
    { code: 'SCR', symbol: '₨', name: 'Seychellois Rupee' },
    { code: 'ARS', symbol: '$', name: 'Argentine Peso' },
    { code: 'CLP', symbol: '$', name: 'Chilean Peso' },
    { code: 'COP', symbol: '$', name: 'Colombian Peso' },
    { code: 'PEN', symbol: 'S/', name: 'Peruvian Sol' },
    { code: 'UYU', symbol: '$U', name: 'Uruguayan Peso' },
    { code: 'PYG', symbol: '₲', name: 'Paraguayan Guaraní' },
    { code: 'BOB', symbol: 'Bs.', name: 'Bolivian Boliviano' },
    { code: 'VES', symbol: 'Bs.S', name: 'Venezuelan Bolívar Soberano' },
    { code: 'GYD', symbol: 'G$', name: 'Guyanese Dollar' },
    { code: 'SRD', symbol: '$', name: 'Surinamese Dollar' },
    { code: 'FKP', symbol: '£', name: 'Falkland Islands Pound' },
    { code: 'SHP', symbol: '£', name: 'Saint Helena Pound' },
    { code: 'BTC', symbol: '₿', name: 'Bitcoin' },
    { code: 'ETH', symbol: 'Ξ', name: 'Ethereum' }
  ];

  const getCurrentCurrency = () => {
    return currencies.find(c => c.code === selectedCurrency) || currencies[0];
  };

  const getInstrumentPrice = (instrumentId: string) => {
    const instrument = instruments.find(i => i.id === instrumentId);
    if (!instrument) return 0;
    return instrument.prices[selectedCurrency as keyof typeof instrument.prices] || instrument.prices.USD;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitSponsorship();
  };

  const submitSponsorship = async () => {
    setLoading(true);
    setError('');

    const selectedInstrumentData = instruments.find(i => i.id === selectedInstrument);
    if (!selectedInstrumentData) {
      setError('Please select an instrument to sponsor');
      setLoading(false);
      return;
    }

    const sponsorshipData: InstrumentSponsorshipData = {
      instrumentType: selectedInstrument,
      instrumentName: selectedInstrumentData.name,
      sponsorshipType,
      amount: getInstrumentPrice(selectedInstrument),
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
      dedicateInstrument: formData.dedicateInstrument,
      dedicationName: formData.dedicationName,
      dedicationMessage: formData.dedicationMessage,
      receiveUpdates: formData.receiveUpdates,
    };

    const { error: submitError } = await formsService.submitInstrumentSponsorship(sponsorshipData);

    if (submitError) {
      setError(submitError);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  if (success) {
    const selectedInstrumentData = instruments.find(i => i.id === selectedInstrument);
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
                    <Music className="h-12 w-12 text-white" />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="text-4xl font-bold text-white mb-4">Thank You for Sponsoring!</h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Your sponsorship of a {selectedInstrumentData?.name} will give a child the gift of music education. Thank you for making a difference!
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
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/logo.png";
                  }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl font-bold text-white mb-4">Sponsor an Instrument</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Give a child the gift of music by sponsoring an instrument. Your contribution 
                provides a young musician with the tools they need to learn and grow.
              </p>
            </ScrollReveal>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Instrument Selection */}
            <ScrollReveal delay={0.4}>
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Choose an Instrument</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Currency</label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white max-h-48 overflow-y-auto"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code} className="bg-gray-800 text-white">
                        {currency.code} ({currency.symbol}) - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {instruments.map((instrument) => {
                    const IconComponent = instrument.icon;
                    const price = getInstrumentPrice(instrument.id);
                    return (
                      <button
                        key={instrument.id}
                        type="button"
                        onClick={() => setSelectedInstrument(instrument.id)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          selectedInstrument === instrument.id
                            ? 'border-green-500 bg-green-500/10 text-green-300'
                            : 'border-white/20 hover:border-white/40 bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            selectedInstrument === instrument.id ? 'bg-green-500' : 'bg-blue-600'
                          }`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg">{instrument.name}</h3>
                            <p className="text-2xl font-bold text-green-400">
                              {getCurrentCurrency().symbol}{price.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-slate-300 text-sm">{instrument.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Sponsorship Type */}
            {selectedInstrument && (
              <ScrollReveal delay={0.5}>
                <div className="glass-dark p-8 rounded-xl border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Sponsorship Type</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSponsorshipType('one-time')}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        sponsorshipType === 'one-time'
                          ? 'border-green-500 bg-green-500/10 text-green-300'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className="text-center">
                        <DollarSign className="h-8 w-8 mx-auto mb-3 text-green-400" />
                        <h3 className="text-lg font-semibold mb-2 text-white">One-Time Sponsorship</h3>
                        <p className="text-sm text-slate-300">Sponsor an instrument with a single payment</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSponsorshipType('monthly')}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        sponsorshipType === 'monthly'
                          ? 'border-green-500 bg-green-500/10 text-green-300'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <div className="text-center">
                        <Heart className="h-8 w-8 mx-auto mb-3 text-green-400" />
                        <h3 className="text-lg font-semibold mb-2 text-white">Monthly Sponsorship</h3>
                        <p className="text-sm text-slate-300">Ongoing support with monthly payments</p>
                      </div>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Personal Information */}
            {selectedInstrument && (
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
            )}

            {/* Payment Information */}
            {selectedInstrument && (
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
            )}

            {/* Submit Button */}
            {selectedInstrument && (
              <ScrollReveal delay={0.8}>
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
                    {loading ? 'Processing...' : `Sponsor ${instruments.find(i => i.id === selectedInstrument)?.name} - ${getCurrentCurrency().symbol}${getInstrumentPrice(selectedInstrument).toLocaleString()}`}
                  </button>
                  <p className="text-sm text-slate-400 mt-4">
                    {loading ? 'Please wait while we process your sponsorship...' : "By sponsoring an instrument, you're giving a child the gift of music education. Your contribution is secure and encrypted."}
                  </p>
                </div>
              </ScrollReveal>
            )}
          </form>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}