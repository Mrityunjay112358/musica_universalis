import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import StarryBackground from '../components/StarryBackground';
import { Users, Mail, Calendar, User, Database } from 'lucide-react';

interface UserData {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
}

interface FormSubmission {
  id: string;
  type: string;
  user_email: string;
  created_at: string;
  status: string;
}

export default function AdminPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<UserData[]>([]);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'users' | 'submissions'>('users');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    
    try {
      // Fetch users
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (usersError) {
        console.error('Error fetching users:', usersError);
      } else {
        setUsers(usersData || []);
      }

      // Fetch form submissions (combining all form types)
      const submissionsData: FormSubmission[] = [];

      // Volunteer applications
      const { data: volunteers } = await supabase
        .from('volunteer_applications')
        .select('id, email, created_at, status')
        .order('created_at', { ascending: false });

      if (volunteers) {
        volunteers.forEach(v => submissionsData.push({
          id: v.id,
          type: 'Volunteer Application',
          user_email: v.email,
          created_at: v.created_at,
          status: v.status || 'pending'
        }));
      }

      // Partner school applications
      const { data: partners } = await supabase
        .from('partner_school_applications')
        .select('id, email, created_at, status')
        .order('created_at', { ascending: false });

      if (partners) {
        partners.forEach(p => submissionsData.push({
          id: p.id,
          type: 'Partner School Application',
          user_email: p.email,
          created_at: p.created_at,
          status: p.status || 'pending'
        }));
      }

      // Donations
      const { data: donations } = await supabase
        .from('donations')
        .select('id, email, created_at, payment_status')
        .order('created_at', { ascending: false });

      if (donations) {
        donations.forEach(d => submissionsData.push({
          id: d.id,
          type: 'Donation',
          user_email: d.email,
          created_at: d.created_at,
          status: d.payment_status || 'pending'
        }));
      }

      // Sort all submissions by date
      submissionsData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setSubmissions(submissionsData);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4">
                  <Database className="h-12 w-12 text-white" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-slate-300">View user registrations and form submissions</p>
            </ScrollReveal>
          </div>

          {/* Tab Navigation */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mb-8">
              <div className="glass-dark rounded-xl p-2 border border-white/10">
                <button
                  onClick={() => setActiveTab('users')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'users'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Users className="h-5 w-5 inline mr-2" />
                  Users ({users.length})
                </button>
                <button
                  onClick={() => setActiveTab('submissions')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'submissions'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Mail className="h-5 w-5 inline mr-2" />
                  Submissions ({submissions.length})
                </button>
              </div>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-slate-400">Loading data...</p>
            </div>
          ) : (
            <>
              {/* Users Tab */}
              {activeTab === 'users' && (
                <ScrollReveal delay={0.5}>
                  <div className="glass-dark rounded-xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                      <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Users className="h-6 w-6 text-purple-400" />
                        Registered Users
                      </h2>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-white/5">
                          <tr>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Username</th>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Name</th>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Email</th>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Joined</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((userData, index) => (
                            <tr key={userData.id} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                              <td className="px-6 py-4 text-white font-medium">{userData.username}</td>
                              <td className="px-6 py-4 text-slate-300">{userData.first_name} {userData.last_name}</td>
                              <td className="px-6 py-4 text-slate-300">{userData.email}</td>
                              <td className="px-6 py-4 text-slate-400">{formatDate(userData.created_at)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {users.length === 0 && (
                        <div className="text-center py-12">
                          <User className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                          <p className="text-slate-400">No users registered yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Submissions Tab */}
              {activeTab === 'submissions' && (
                <ScrollReveal delay={0.5}>
                  <div className="glass-dark rounded-xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                      <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Mail className="h-6 w-6 text-blue-400" />
                        Form Submissions
                      </h2>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-white/5">
                          <tr>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Type</th>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Email</th>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Status</th>
                            <th className="px-6 py-4 text-left text-slate-300 font-medium">Submitted</th>
                          </tr>
                        </thead>
                        <tbody>
                          {submissions.map((submission, index) => (
                            <tr key={submission.id} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                              <td className="px-6 py-4 text-white font-medium">{submission.type}</td>
                              <td className="px-6 py-4 text-slate-300">{submission.user_email}</td>
                              <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  submission.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                                  submission.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                                  'bg-gray-500/20 text-gray-400'
                                }`}>
                                  {submission.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-slate-400">{formatDate(submission.created_at)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {submissions.length === 0 && (
                        <div className="text-center py-12">
                          <Mail className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                          <p className="text-slate-400">No form submissions yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </>
          )}

          {/* Refresh Button */}
          <ScrollReveal delay={0.6}>
            <div className="text-center mt-8">
              <button
                onClick={fetchData}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Refresh Data
              </button>
            </div>
          </ScrollReveal>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}