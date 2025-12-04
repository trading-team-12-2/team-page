"use client";

import React from 'react';
import { JobOpening } from '../types';

const jobs: JobOpening[] = [
  { id: '1', title: 'Senior Quantitative Researcher', tags: ['C++', 'Python', 'Stats'] },
  { id: '2', title: 'Low Latency C++ Engineer', tags: ['Linux', 'Kernel', 'Network'] },
  { id: '3', title: 'Data Scientist', tags: ['PyTorch', 'TensorFlow', 'NLP'] },
];

const ContactSection: React.FC = () => {
  return (
    <section id="careers" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Join Us */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Join Us</h2>
          <p className="text-gray-400 text-sm mb-8">We are always looking for leading talent to join our team. If you love solving hard problems, we want to hear from you.</p>
          
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white/5 border border-white/10 p-4 rounded-lg flex justify-between items-center group hover:bg-white/10 cursor-pointer transition-colors">
                <div>
                  <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">{job.title}</h4>
                </div>
                <div className="flex gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-black/40 text-gray-400 px-2 py-1 rounded border border-white/5">{tag}</span>
                  ))}
                  <svg className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-card p-8 rounded-2xl border border-white/5 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Name</label>
                <input type="text" className="w-full bg-[#1A1C2A] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Email</label>
                <input type="email" className="w-full bg-[#1A1C2A] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Subject</label>
              <input type="text" className="w-full bg-[#1A1C2A] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors" placeholder="Partnership / Inquiry" />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500">Message</label>
              <textarea rows={4} className="w-full bg-[#1A1C2A] border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your project or inquiry..."></textarea>
            </div>

            <button className="w-full cursor-pointer mt-2 bg-gradient-to-r from-[#4394F8] to-[#6366F1] hover:from-[#3B82F6] hover:to-[#4F46E5] text-white font-bold py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(67,148,248,0.4)] hover:shadow-[0_0_30px_rgba(67,148,248,0.6)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
