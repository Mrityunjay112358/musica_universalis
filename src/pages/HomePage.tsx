import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Mic, Guitar, Piano, Keyboard, Mail, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <ScrollReveal>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 mb-8">
                <span className="text-sm font-medium text-purple-300">TRANSFORMING LIVES THROUGH MUSIC</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Music Education for{' '}
                <span className="gradient-text-purple">Every Child</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
                Where Every Soul Finds Its Sound
              </p>
            </ScrollReveal>
            
            {/* Program Photos Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <ScrollReveal delay={0.4}>
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/whatsapp-image-1.jpeg" 
                      alt="Music Lessons"
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-white mb-2 text-lg">Music Lessons</h4>
                    <p className="text-slate-300">Students learning instruments</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/whatsapp-image-5.jpeg" 
                      alt="Donating a Guitar"
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-white mb-2 text-lg">Donating a Guitar</h4>
                    <p className="text-slate-300">Supporting students with instruments</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.6}>
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src="/whatsapp-image-4.jpeg" 
                      alt="Music Therapy"
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-white mb-2 text-lg">Music Therapy</h4>
                    <p className="text-slate-300">Healing through music</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.7}>
              <p className="text-lg text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We believe that every child, regardless of their background, deserves access to quality music education. 
                Our mission is to bring the joy and benefits of music to underprivileged children in our community.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.8}>
              <blockquote className="text-2xl text-slate-200 italic mb-8 font-light">
                "Where Every Soul Finds Its Sound — music is not a luxury, it's a language of dignity, identity, and healing."
              </blockquote>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Programs Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 mb-6">
                  <span className="text-sm font-medium text-blue-300">OUR PROGRAMS</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 className="text-5xl font-bold text-white mb-6">
                  Comprehensive <span className="gradient-text-purple">Music Education</span>
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Transforming lives through structured programs and therapy
                </p>
              </ScrollReveal>
            </div>
            
            {/* Program Images */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <ScrollReveal delay={0.4} direction="left">
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:neon-purple transition-all duration-500">
                  <img 
                    src="/whatsapp-image-6.jpeg" 
                    alt="Program Activities"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-3">Program Activities</h4>
                    <p className="text-slate-300 leading-relaxed">Students engaged in various music learning activities and exercises</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5} direction="right">
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:neon-blue transition-all duration-500">
                  <img 
                    src="/whatsapp-image-7.jpeg" 
                    alt="Education in Action"
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-3">Education in Action</h4>
                    <p className="text-slate-300 leading-relaxed">Hands-on music education bringing joy and learning together</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Program Details */}
            <div className="space-y-8">
              <ScrollReveal delay={0.6}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 neon-purple">
                      <Mic className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-4">Foundations of Sound</h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Weekly music literacy classes for children ages 6–18. Students learn to read music, 
                        understand rhythm, and develop fundamental musical skills through engaging, 
                        age-appropriate activities.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.7}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 neon-purple">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-4">SoulCare</h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Certified music therapy sessions designed to help children process anxiety and trauma. 
                        Led by licensed therapists, these sessions use music as a healing tool to support 
                        emotional well-being and recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.8}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 neon-cyan">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-4">World Without Walls</h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Virtual cultural exchange program connecting children across different countries 
                        through online jam sessions. Students share their musical traditions and 
                        collaborate on cross-cultural compositions.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.9}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Piano className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-white mb-4">Trinity</h4>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Comprehensive preparation program for Trinity College London music examinations. 
                        Our structured curriculum guides students through graded assessments, building 
                        technical skills, musical understanding, and performance confidence. Students 
                        receive personalized coaching for practical exams, theory components, and 
                        performance pieces, ensuring they're fully prepared to achieve recognized 
                        international music qualifications.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30 mb-6">
                  <span className="text-sm font-medium text-yellow-300">RECOGNITION</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 className="text-5xl font-bold text-white mb-6">
                  Acknowledged <span className="gradient-text-purple">Impact</span>
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300">Trusted partnerships and global recognition</p>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={0.4}>
              <div className="glass-dark rounded-3xl p-12 border border-white/10 max-w-5xl mx-auto neon-blue">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 neon-purple">
                    <div className="text-4xl">🎖️</div>
                  </div>
                  <blockquote className="text-2xl text-slate-200 leading-relaxed italic mb-8 font-light">
                    "Spread music appreciation and music education to 1000+ people internationally through various events/programs and online platforms. Partnered with 5 renowned NGOs and a music conservatoire. Endorsed by the Rajasthan Govt."
                  </blockquote>
                  
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center glass rounded-2xl p-6 border border-purple-500/30">
                      <div className="text-3xl font-bold gradient-text-purple mb-2">Government</div>
                      <div className="text-slate-300">Endorsed by Rajasthan Government</div>
                    </div>
                    <div className="text-center glass rounded-2xl p-6 border border-blue-500/30">
                      <div className="text-3xl font-bold gradient-text-purple mb-2">5+</div>
                      <div className="text-slate-300 mb-2">Renowned NGO Partners</div>
                      <div className="text-xs text-slate-400">Impact, Naya Savera, Aashray</div>
                    </div>
                    <div className="text-center glass rounded-2xl p-6 border border-cyan-500/30">
                      <div className="text-3xl font-bold gradient-text-purple mb-2">1</div>
                      <div className="text-slate-300">
                        <a 
                          href="https://www.soulofsymphony.in/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                        >
                          Soul of Symphony
                        </a> Partnership
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-slate-200">Spreading music education globally</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full border border-green-500/30 mb-6">
                  <span className="text-sm font-medium text-green-300">WHAT WE DO</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 className="text-5xl font-bold text-white mb-6">
                  <span className="gradient-text-purple">Resonating Potential.</span><br />
                  Restoring Voices.
                </h3>
              </ScrollReveal>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.3}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 text-center group">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 neon-blue">
                    <Mic className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Teach</h4>
                  <p className="text-slate-300 mb-6 text-lg">Free lessons in:</p>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center justify-center gap-3">
                      <Mic className="h-5 w-5 text-green-400" />
                      <span>Vocals</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <Guitar className="h-5 w-5 text-green-400" />
                      <span>Guitar</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <Piano className="h-5 w-5 text-green-400" />
                      <span>Tabla</span>
                    </li>
                    <li className="flex items-center justify-center gap-3">
                      <Keyboard className="h-5 w-5 text-green-400" />
                      <span>Keyboard</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 text-center group">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 neon-purple">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Heal</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Music therapy programs in trauma centers, helping children process emotions and find healing through the power of music.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 text-center group">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 neon-cyan">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Expand</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Growing our impact through local and international chapters, bringing music education to communities worldwide.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How You Can Help Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-full border border-red-500/30 mb-6">
                  <span className="text-sm font-medium text-red-300">GET INVOLVED</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 className="text-5xl font-bold text-white mb-6">
                  How You Can <span className="gradient-text-purple">Help</span>
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300">Join us in bringing music to every child</p>
              </ScrollReveal>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.4}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500 text-center group">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">♪</div>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Watch Their Music</h4>
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    Experience the joy and talent of our students through performance videos and recitals. 
                    See how music transforms lives and builds confidence.
                  </p>
                  <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 neon-purple">
                    Watch Videos
                  </button>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 text-center group">
                  <div className="bg-gradient-to-r from-orange-600 to-yellow-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">♫</div>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Sponsor an Instrument</h4>
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    Provide a child with their own instrument to practice and grow. Your sponsorship 
                    gives them the tools they need to develop their musical talents.
                  </p>
                  <button className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-yellow-700 transition-all duration-300">
                    <Link to="/sponsor-instrument">Sponsor Now</Link>
                  </button>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.6}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 text-center group">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 neon-blue">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">Start a Chapter in Your City</h4>
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    Bring MUSICA UNIVERSALIS to your community. We'll help you establish a local 
                    chapter and train volunteers to serve children in your area.
                  </p>
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 neon-blue">
                    <Link to="/start-chapter">Start Chapter</Link>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30 mb-6">
                    <span className="text-sm font-medium text-indigo-300">OUR MISSION</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    Transforming Lives Through <span className="gradient-text-purple">Music</span>
                  </h3>
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    Music has the power to transform lives, build confidence, and create opportunities. 
                    Through our programs, we provide free music lessons, instruments, and performance 
                    opportunities to children who might not otherwise have access to musical education.
                  </p>
                  <div className="flex items-center gap-3 text-blue-400">
                    <Users className="h-6 w-6" />
                    <span className="font-semibold text-lg">Serving over 1000+ children annually</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:neon-blue transition-all duration-500">
                  <img 
                    src="/whatsapp-image-2.jpeg" 
                    alt="Individual Lessons"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="font-bold text-white text-xl">Individual Lessons</h5>
                    <p className="text-slate-300 mt-2">Personalized music education for every student</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full border border-cyan-500/30 mb-6">
                  <span className="text-sm font-medium text-cyan-300">CONTACT US</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 className="text-4xl font-bold text-white mb-6">Get In Touch</h3>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-slate-300 text-lg">
                  Interested in our programs or want to support our mission? We'd love to hear from you.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <ScrollReveal delay={0.4}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 neon-cyan">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-xl">Email</h4>
                  <p className="text-slate-300 text-lg">musicauniversalis@jpischool.com</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5}>
                <div className="glass-dark rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 neon-purple">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-xl">Phone</h4>
                  <p className="text-slate-300 text-lg">9587913732</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}