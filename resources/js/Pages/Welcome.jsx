import React from 'react';
import { Link } from '@inertiajs/react'; // atau 'react-router-dom' jika pakai Vite murni

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] text-[#252943] font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. NAVBAR SECTION */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#EEEFFF] flex items-center justify-center font-bold text-[#7778E8]">G</div>
          <span className="font-bold text-lg tracking-wide">GROUPSPACE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#626477]">
          <a href="#" className="text-[#252943] font-semibold">Home</a>
          <a href="#members" className="hover:text-[#7778E8] transition">Members</a>
          <a href="#about" className="hover:text-[#7778E8] transition">About</a>
          <a href="#gallery" className="hover:text-[#7778E8] transition">Gallery</a>
        </div>

        <Link 
          href="/admin/login" 
          className="px-5 py-2.5 rounded-xl bg-[#252943] text-white text-sm font-semibold shadow-md hover:bg-[#7778E8] transition"
        >
          Admin Login →
        </Link>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#7778E8] uppercase block mb-3">• GET TO KNOW US</span>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Meet the People Behind the Project
          </h1>
          <p className="text-[#626477] text-base lg:text-lg mb-8 leading-relaxed">
            Get to know our team, discover our stories, and explore the moments that bring us together.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#members" className="px-6 py-3.5 rounded-xl bg-[#252943] text-white font-semibold shadow-lg hover:bg-[#7778E8] transition">
              Meet Our Members →
            </a>
            <a href="#gallery" className="px-6 py-3.5 rounded-xl bg-white border border-[#E8E9F4] text-[#252943] font-semibold hover:bg-[#EEEFFF] transition">
              Explore Gallery
            </a>
          </div>
        </div>

        {/* Hero Visual Card Preview */}
        <div className="relative flex justify-center">
          <div className="w-72 bg-white p-4 rounded-3xl shadow-xl border border-[#E8E9F4] transform rotate-3 hover:rotate-0 transition duration-300">
            <div className="h-64 rounded-2xl bg-[#EEEFFF] mb-4 overflow-hidden flex items-center justify-center">
              <span className="text-sm font-medium text-[#7778E8]">Team Photo Preview</span>
            </div>
            <h3 className="font-bold text-lg">GROUPSPACE</h3>
            <p className="text-xs text-[#626477]">Telecommunication Engineering · Telkom University</p>
          </div>
        </div>
      </section>

      {/* 3. STATS OVERVIEW BAR */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8E9F4] grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div>
            <span className="text-xs font-bold text-[#7778E8] uppercase block mb-1">• HELLO, WE'RE GROUPSPACE</span>
            <p className="text-sm text-[#626477]">A small team with different perspectives. Connected by curiosity. Driven by doing.</p>
          </div>
          <div className="text-center md:border-l border-[#E8E9F4]">
            <h4 className="text-3xl font-extrabold text-[#7778E8]">04</h4>
            <p className="text-xs text-[#626477]">Members <span className="block text-[10px]">One close-knit team</span></p>
          </div>
          <div className="text-center md:border-l border-[#E8E9F4]">
            <h4 className="text-3xl font-extrabold text-[#7778E8]">01</h4>
            <p className="text-xs text-[#626477]">Projects <span className="block text-[10px]">From idea to impact</span></p>
          </div>
          <div className="text-center md:border-l border-[#E8E9F4]">
            <h4 className="text-3xl font-extrabold text-[#7778E8]">06</h4>
            <p className="text-xs text-[#626477]">Shared Interests <span className="block text-[10px]">Always exploring</span></p>
          </div>
        </div>
      </section>

      {/* 4. TEAM MEMBERS SECTION */}
      <section id="members" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#7778E8] uppercase tracking-widest block mb-2">• THE PEOPLE</span>
          <h2 className="text-4xl font-extrabold mb-3">Four minds. Endless possibilities.</h2>
          <p className="text-[#626477]">Get to know the people behind our team, their stories, and what makes each of them unique.</p>
        </div>

        {/* Grid Anggota Tim */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contoh Card Anggota 1 */}
          <div className="bg-white p-6 rounded-3xl border border-[#E8E9F4] shadow-sm hover:shadow-md transition">
            <div className="h-64 bg-[#F8FAFF] rounded-2xl mb-4 border border-[#E8E9F4] flex items-center justify-center">
              <span className="text-sm text-[#626477]">Foto Anggota</span>
            </div>
            <h3 className="text-xl font-bold mb-1">LLA</h3>
            <p className="text-xs font-semibold text-[#7778E8] mb-1">Design & direction</p>
            <p className="text-xs text-[#626477] mb-4">Visual Communication · Year 3</p>
            <p className="text-xs text-[#626477] mb-6 leading-relaxed">Turns big ideas into simple, thoughtful designs. Usually has a sketchbook in hand.</p>
            <Link href="/member/1" className="text-xs font-bold text-[#7778E8] flex items-center hover:underline">
              View Profile →
            </Link>
          </div>
          {/* Tambahkan card anggota lainnya sesuai data kelompok */}
        </div>
      </section>

    </div>
  );
}