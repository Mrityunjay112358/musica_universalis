import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';

const teamMembers = [
  {
    name: 'Mirtyunjay Gupta',
    role: 'President',
    image: '/mjteam.png'
  },
  {
    name: 'Amairah Sharma',
    role: 'Head of Logistics',
    image: '/amairahteam.png'
  },
  {
    name: 'Snishka Grewal',
    role: 'Head of Design',
    image: '/snishkaateam.png'
  },
  {
    name: 'Akshita Jain',
    role: 'Head of Finance',
    image: '/akshitateam.png'
  },
  {
    name: 'Diivij Todi',
    role: 'Volunteer Coordinator for NGOs',
    image: '/diivijteam.png'
  },
  {
    name: 'Arnav Mathur',
    role: 'Event day head',
    image: '/arnavteam.png'
  },
  {
    name: 'Aarohi Murdia',
    role: 'Head of Design',
    image: '/aarohiteam.png'
  },
  {
    name: 'Swastik Dash',
    role: 'Head of Technology',
    image: '/swastikteam.png'
  },
  {
    name: 'Jevesh Jain',
    role: 'Head of Technology',
    image: '/Jevesh.png'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 mb-6">
                  <span className="text-sm font-medium text-purple-300">OUR TEAM</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="text-5xl font-bold text-white mb-6">
                  Meet the <span className="gradient-text-purple">Team</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Our dedicated team of passionate individuals work tirelessly to bring the gift of music 
                  to children who need it most. Each member brings unique skills and unwavering commitment 
                  to our mission.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={0.1 * (index + 1)}>
                  <div className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 group text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className={`w-full h-full ${
                            member.name === 'Swastik Dash' || member.name === 'Snishka Grewal' 
                              ? 'object-cover object-center' 
                              : 'object-cover'
                          }`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=667eea&color=fff&size=128`;
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            {/* Mission Statement */}
            <ScrollReveal delay={0.8}>
              <div className="mt-20 text-center">
                <div className="glass-dark rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    United by <span className="gradient-text-purple">Music</span>
                  </h3>
                  <p className="text-xl text-slate-300 leading-relaxed mb-8">
                    Together, we believe that every child deserves access to the transformative power of music. 
                    Our diverse team combines expertise in education, technology, design, and community outreach 
                    to create lasting impact in children's lives around the world.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-slate-200 italic">"Where Every Soul Finds Its Sound"</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}