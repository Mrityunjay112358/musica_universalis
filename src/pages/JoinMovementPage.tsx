import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, GraduationCap, Video, DollarSign, Gift, BookOpen, Globe, Mail, Phone, User, MapPin, Calendar, Clock, FileText, Building, Briefcase, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

export default function JoinMovementPage() {

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-5xl font-bold text-white mb-6">
              JOIN OUR MOVEMENT
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Be part of a global community bringing music education to children who need it most. 
              Whether you have 30 minutes or 30 hours to spare, there's a meaningful way for you to contribute.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* For Volunteers Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-cyan">
                <Users className="h-8 w-8 text-white" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h3 className="text-4xl font-bold text-white mb-4">For Volunteers</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300">Share your passion for music and make a direct impact</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.4}>
              <div className="glass-dark p-8 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-500">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 neon-blue">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Teach Online or In-Person</h4>
                <p className="text-slate-300 leading-relaxed">
                  Lead virtual or in-person music lessons for children aged 6-18. Whether you're a professional 
                  musician or passionate amateur, we provide training and curriculum support. Commit to as little 
                  as 2 hours per week and watch young musicians flourish under your guidance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="glass-dark p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 neon-purple">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Mentor a Young Musician</h4>
                <p className="text-slate-300 leading-relaxed">
                  Build one-on-one relationships with students who show exceptional promise or need extra support. 
                  Mentors provide encouragement, help set goals, and offer career guidance. This role involves 
                  monthly check-ins and performance feedback, creating lasting bonds that extend beyond music.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="glass-dark p-8 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-500">
                <div className="bg-gradient-to-r from-orange-600 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Record Tutorials in Local Languages</h4>
                <p className="text-slate-300 leading-relaxed">
                  Help us break language barriers by creating instructional videos in your native language. 
                  We provide scripts and technical support while you bring cultural authenticity to our lessons. 
                  Perfect for bilingual volunteers who want to make music education accessible to diverse communities.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.7}>
            <div className="glass-dark p-8 rounded-xl text-center border border-white/10 hover:border-blue-500/50 transition-all duration-500 neon-blue">
              <h4 className="text-xl font-bold text-white mb-4">Ready to Volunteer?</h4>
              <p className="text-slate-300 mb-6">
                Join our community of 50+ volunteers making a difference in children's lives through music.
              </p>
              <Link 
                to="/volunteer-application"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-colors neon-cyan"
              >
                Apply to Volunteer
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* For Donors Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-blue">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h3 className="text-4xl font-bold text-white mb-4">For Donors</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300">Invest in the future of music education</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.4}>
              <div className="glass-dark p-8 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-500">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 neon-blue">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Adopt a Classroom ($50/month)</h4>
                <p className="text-slate-300 leading-relaxed">
                  Sponsor an entire classroom of 15-20 students for a full year. Your monthly contribution covers 
                  lesson materials, basic instruments, and teacher stipends. You'll receive quarterly progress 
                  reports, photos from classes, and a personalized thank-you letter from your adopted classroom.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="glass-dark p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 neon-cyan">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Recognition on Our Website</h4>
                <p className="text-slate-300 leading-relaxed">
                  Your generosity will be celebrated! All donors who contribute $50 or more will have their 
                  name proudly displayed on our website's donor recognition page, showing the community 
                  the incredible supporters who make our mission possible. You can choose to remain anonymous 
                  if you prefer.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="glass-dark p-8 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-500">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Thank-You Video from the Kids</h4>
                <p className="text-slate-300 leading-relaxed">
                  Every donor receives a personalized video message from the children they've helped. 
                  Watch them perform songs they've learned, share their musical dreams, and express their 
                  gratitude. These heartfelt messages show the direct impact of your generosity.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.7}>
            <div className="glass-dark p-8 rounded-xl text-center border border-white/10 hover:border-green-500/50 transition-all duration-500 neon-blue">
              <h4 className="text-xl font-bold text-white mb-4">Make a Donation Today</h4>
              <p className="text-slate-300 mb-6">
                100% of donations go directly to program costs. Administrative expenses are covered separately.
              </p>
              <Link 
                to="/donate"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-colors neon-blue"
              >
                Donate
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* For Schools/NGOs Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 neon-purple">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h3 className="text-4xl font-bold text-white mb-4">For Schools & NGOs</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300">Partner with us to expand music education in your community</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="glass-dark p-12 rounded-xl border border-white/10 max-w-4xl mx-auto hover:border-purple-500/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 neon-purple">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6">Teacher Training Modules</h4>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Comprehensive professional development program designed for educators who want to integrate 
                    music into their curriculum. Our modules cover music theory basics, classroom management 
                    for music activities, trauma-informed music therapy techniques, and age-appropriate lesson planning.
                  </p>
                </div>
                <div className="glass p-8 rounded-xl border border-purple-500/30">
                  <h5 className="text-lg font-bold text-white mb-4">Partnership Benefits</h5>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Certificates after the program is completed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Starter instrument kit for each classroom</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Quarterly program evaluation and support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Access to our global network of music educators</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Student performance opportunities and showcases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="glass-dark p-8 rounded-xl text-center mt-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 neon-purple">
              <h4 className="text-xl font-bold text-white mb-4">Become a Partner School</h4>
              <p className="text-slate-300 mb-6">
                Join 25+ schools worldwide already implementing our music education programs.
              </p>
              <Link 
                to="/partner-school"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors neon-purple"
              >
                Apply for Partnership
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h3 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-300 mb-8">
              Every contribution, no matter how small, helps us bring music to more children around the world.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex justify-center gap-4">
              <Link 
                to="/volunteer-application"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-colors neon-cyan"
              >
                Start Volunteering
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}