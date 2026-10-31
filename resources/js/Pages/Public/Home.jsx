import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Login from '../Auth/Login';

export default function Welcome() {
  return (
    <>
      <Head title="TiluOpat — Home" />
      <div className="min-h-screen bg-[#F8FAFF] text-[#252943] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#7778E8] selection:text-white relative overflow-hidden">
        
        {/* ================= 1. FLOATING NAVBAR SECTION ================= */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <nav className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm border border-[#E8E9F4]">
            
            {/* Brand Logo & Name */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEEFFF] flex items-center justify-center font-bold text-[#7778E8]">🌸</div>
              <span className="font-bold text-base tracking-wide text-[#252943]">TiluOpat</span>
            </div>
            
            {/* Menu Navigasi Tengah */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#626477]">
              <a href="#" className="text-[#252943] font-semibold flex items-center gap-1">Home <span className="w-1 h-1 rounded-full bg-[#7778E8]"></span></a>
              <a href="#members" className="hover:text-[#7778E8] transition">Members</a>
              <a href="#about" className="hover:text-[#7778E8] transition">About</a>
              <a href="#gallery" className="hover:text-[#7778E8] transition">Gallery</a>
            </div>

            {/* Tombol Admin Login */}
            <Link 
              href="/login" 
              className="px-5 py-2.5 rounded-xl bg-[#252943] text-white text-xs font-semibold shadow-md hover:bg-[#7778E8] transition flex items-center gap-1.5"
            >
              Admin Login ↗
            </Link>
          </nav>
        </div>

        {/* ================= 2. HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          
          {/* Sisi Kiri: Teks & Aksi */}
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#7778E8] uppercase block mb-2">• GET TO KNOW US!!!!!</span>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-4 text-[#252943]">
              Meet the People Behind the Project
            </h1>
            <p className="text-[#626477] text-sm lg:text-base mb-6 leading-relaxed max-w-lg">
              Get to know our team, discover our stories, and explore the moments that bring us together.
            </p>
            
            {/* Tombol CTA */}
            <div className="flex items-center space-x-4 mb-6">
              <a href="#members" className="px-5 py-3 rounded-xl bg-[#252943] text-white text-xs lg:text-sm font-semibold shadow-lg hover:bg-[#7778E8] transition flex items-center gap-2">
                Meet Our Members ↗
              </a>
              <a href="#gallery" className="px-5 py-3 rounded-xl bg-white border border-[#E8E9F4] text-[#252943] text-xs lg:text-sm font-semibold hover:bg-[#EEEFFF] transition">
                Explore Gallery
              </a>
            </div>

            {/* Info Institusi & Lab */}
            <div className="flex items-center space-x-2 text-xs text-[#626477]">
              <span>🏛️ Telkom University</span>
              <span>·</span>
              <span>Laboratorium Dasar Komputer</span>
            </div>
          </div>

          {/* Sisi Kanan: Visual Card & Blob Ilustrasi */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#DDD6FE] to-[#FCE7F3] rounded-full blur-2xl opacity-60 -z-10"></div>
            
            <div className="w-72 bg-white p-3.5 rounded-3xl shadow-xl border border-[#E8E9F4] transform rotate-3 hover:rotate-0 transition duration-300">
              <div className="h-60 rounded-2xl bg-[#EEEFFF] mb-3 overflow-hidden flex items-center justify-center relative">
                <span className="text-xs font-semibold text-[#7778E8]">Foto Bareng</span>
              </div>
              <div className="flex justify-between items-center px-1">
                <div>
                  <h3 className="font-bold text-sm text-[#252943]">TiluOpat</h3>
                  <p className="text-[10px] text-[#626477]">Kelompok 3</p>
                </div>
                <span className="text-xs text-[#7778E8] font-bold">↗</span>
              </div>
            </div>

            <div className="absolute -bottom-4 right-4 bg-white px-3.5 py-1.5 rounded-2xl shadow-md border border-[#E8E9F4] flex items-center space-x-2">
              <span className="text-xs">✨</span>
              <span className="text-[11px] font-semibold text-[#252943]">Our Team, Our Story</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-6 hidden lg:block text-[11px] font-medium text-[#626477] animate-bounce">
            Scroll to get to know us ↓
          </div>
        </section>

        {/* ================= 3. STATS OVERVIEW BAR ================= */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E9F4] grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div>
              <span className="text-[11px] font-bold text-[#7778E8] uppercase block mb-1">• HELLO, WE'RE TILUOPAT</span>
              <p className="text-xs text-[#626477]">A small team with different perspectives. Connected by curiosity. Driven by doing.</p>
            </div>
            <div className="text-center md:border-l border-[#E8E9F4]">
              <h4 className="text-2xl font-extrabold text-[#7778E8]">04</h4>
              <p className="text-xs text-[#626477]">Members <span className="block text-[10px]">One close-knit team</span></p>
            </div>
            <div className="text-center md:border-l border-[#E8E9F4]">
              <h4 className="text-2xl font-extrabold text-[#7778E8]">01</h4>
              <p className="text-xs text-[#626477]">Projects <span className="block text-[10px]">From idea to impact</span></p>
            </div>
            <div className="text-center md:border-l border-[#E8E9F4]">
              <h4 className="text-2xl font-extrabold text-[#7778E8]">06</h4>
              <p className="text-xs text-[#626477]">Shared Interests <span className="block text-[10px]">Always exploring</span></p>
            </div>
          </div>
        </section>

        {/* ================= 4. TEAM MEMBERS SECTION ("FOUR MINDS") ================= */}
        <section id="members" className="max-w-7xl mx-auto px-6 mb-24">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="text-xs font-bold text-[#7778E8] uppercase tracking-widest block mb-2">• THE PEOPLE</span>
              <h2 className="text-4xl font-extrabold mb-3 text-[#252943]">Four minds. Endless possibilities.</h2>
              <p className="text-[#626477]">Get to know the people behind our team, their stories, and what makes each of them unique.</p>
            </div>
            <span className="text-xs font-medium text-[#626477] hidden md:block">01 — 04 / THE COLLECTIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: LLA */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E9F4] shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-[#F8FAFF] rounded-2xl mb-4 border border-[#E8E9F4] overflow-hidden">
                <img src="/images/fotolala.jpg" alt="LLA" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">LLA</h3>
              <p className="text-xs font-semibold text-[#7778E8] mb-1">ATC</p>
              <p className="text-xs text-[#626477] mb-4">Teknik Elektro . 2025</p>
              <p className="text-xs text-[#626477] mb-6 leading-relaxed">Halo Semuaaa!!!</p>
              <Link href="/member/lla" className="text-xs font-bold text-[#7778E8] flex items-center hover:underline">
                View Profile →
              </Link>
            </div>

            {/* Card 2: NAP */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E9F4] shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-[#F8FAFF] rounded-2xl mb-4 border border-[#E8E9F4] overflow-hidden">
                <img src="/images/fotokayla.jpg" alt="NAP" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">NAP</h3>
              <p className="text-xs font-semibold text-[#7778E8] mb-1">HRD</p>
              <p className="text-xs text-[#626477] mb-4">Teknik Telekomunikasi · 2025</p>
              <p className="text-xs text-[#626477] mb-6 leading-relaxed">Senyumin aja yaaa</p>
              <Link href="/member/nap" className="text-xs font-bold text-[#7778E8] flex items-center hover:underline">
                View Profile →
              </Link>
            </div>

            {/* Card 3: PAH */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E9F4] shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-[#F8FAFF] rounded-2xl mb-4 border border-[#E8E9F4] overflow-hidden">
                <img src="/images/fotofakhri.jpg" alt="PAH" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">PAH</h3>
              <p className="text-xs font-semibold text-[#7778E8] mb-1">MLC</p>
              <p className="text-xs text-[#626477] mb-4">Teknik Elektro · 2025</p>
              <p className="text-xs text-[#626477] mb-6 leading-relaxed">Malem semuanyaaa</p>
              <Link href="/member/pah" className="text-xs font-bold text-[#7778E8] flex items-center hover:underline">
                View Profile →
              </Link>
            </div>

            {/* Card 4: RMA */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E9F4] shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-[#F8FAFF] rounded-2xl mb-4 border border-[#E8E9F4] overflow-hidden">
                <img src="/images/fotorazin.jpg" alt="RMA" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">RMA</h3>
              <p className="text-xs font-semibold text-[#7778E8] mb-1">MLC</p>
              <p className="text-xs text-[#626477] mb-4">Teknik Telekomunikasi · 2025</p>
              <p className="text-xs text-[#626477] mb-6 leading-relaxed">Adalah pokoknyaaa</p>
              <Link href="/member/rma" className="text-xs font-bold text-[#7778E8] flex items-center hover:underline">
                View Profile →
              </Link>
            </div>

          </div>
        </section>

        {/* ================= 5. ABOUT / STORY SECTION ================= */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-4 rounded-3xl border border-[#E8E9F4] shadow-lg overflow-hidden">
              <div className="h-80 bg-[#EEEFFF] rounded-2xl flex items-center justify-center text-[#7778E8] font-semibold overflow-hidden">
                <span>Team Library Photo</span>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-[#E8E9F4] flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-[#EEEFFF] flex items-center justify-center text-[#7778E8]">💜</div>
              <div>
                <p className="text-xs font-bold text-[#252943]">Good ideas start with good people.</p>
                <p className="text-[10px] text-[#626477]">The library table where it all began.</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-6 pt-6 lg:pt-0">
            <span className="text-[11px] font-bold text-[#7778E8] uppercase tracking-widest block mb-2">• OUR COMMON GROUND</span>
            <h2 className="text-4xl font-extrabold mb-6 text-[#252943] leading-tight">
              More than a project. <br />A shared way of thinking.
            </h2>
            <p className="text-[#626477] text-sm leading-relaxed mb-4">
              We met in a first-year innovation class at Telkom University. A group assignment became a friendship—and a reason to keep making things together.
            </p>
            <p className="text-[#626477] text-sm leading-relaxed mb-8">
              Today, we bring design, technology, research and strategy to three student-led projects: Campus Loop, Open Studio and Small Steps. Our goal? Make everyday campus life a little more connected, creative and sustainable.
            </p>
            
            <span className="text-[11px] font-bold text-[#252943] uppercase tracking-wider block mb-3">SIX THINGS WE CONNECT OVER</span>
            <div className="flex flex-wrap gap-2">
              {['DASKOM', 'TELYU', 'KODING', 'TULT', 'DK', 'TEKNIK'].map((tag, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-white border border-[#E8E9F4] text-xs font-semibold text-[#7778E8] shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

{/* ================= 6. GALLERY PREVIEW SECTION ================= */}
        <section id="gallery" className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#7778E8] uppercase tracking-widest block mb-2">• BEYOND THE PROJECT</span>
              <h2 className="text-4xl font-extrabold mb-2 text-[#252943]">The moments in between.</h2>
              <p className="text-[#626477] text-sm">The brainstorms, the coffee runs, the small wins. A little glimpse into our world.</p>
            </div>
            <Link 
              href="/admin/gallery" 
              className="px-5 py-2.5 rounded-xl bg-white border border-[#E8E9F4] text-xs font-semibold text-[#252943] hover:bg-[#EEEFFF] transition flex items-center gap-1.5 shadow-sm"
            >
              View Full Gallery ↗
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Foto Utama Besar di Kiri */}
            <div className="lg:col-span-7 h-[420px] bg-white rounded-3xl border border-[#E8E9F4] flex flex-col justify-end relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0">
                <img src="/images/fotobareng2.jpeg" alt="Main Gallery" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-xs font-bold text-[#252943] shadow-sm z-10">
                ↗
              </div>
              <div className="relative z-10 m-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40">
                <h4 className="font-bold text-sm text-[#252943]">Kebersamaan DLOR 2026</h4>
                <p className="text-xs text-[#626477]">Telkom University · 2026</p>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Foto Kanan Atas (Study Break) */}
              <div className="h-[198px] bg-white rounded-3xl border border-[#E8E9F4] flex flex-col justify-end relative overflow-hidden shadow-sm">
                <div className="absolute inset-0">
                  <img src="/images/fotobareng.jpeg" alt="Study Break" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-[10px] font-bold text-[#252943] z-10">
                  ↗
                </div>
                <div className="relative z-10 m-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/40">
                  <h4 className="font-bold text-xs text-[#252943]">Mini Event DLOR 2026</h4>
                  <p className="text-[10px] text-[#626477]">Pendopo Telkom University · 2026</p>
                </div>
              </div>

              {/* Dua Foto di Bawahnya (Grid 2 Kolom) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Foto Kiri Bawah (Table) */}
                <div className="h-[198px] bg-white rounded-3xl border border-[#E8E9F4] flex flex-col justify-end relative overflow-hidden shadow-sm">
                  <div className="absolute inset-0">
                    <img src="/images/fotobareng2.jpeg" alt="Table" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-[9px] font-bold text-[#252943] z-10">
                    ↗
                  </div>
                  <div className="relative z-10 m-2.5 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-white/40">
                    <h4 className="font-bold text-[11px] text-[#252943]">Tangga TULT Kebangsaan</h4>
                    <p className="text-[9px] text-[#626477]">loveee 25</p>
                  </div>
                </div>

                {/* Foto Kanan Bawah (Coffee) */}
                <div className="h-[198px] bg-white rounded-3xl border border-[#E8E9F4] flex flex-col justify-end relative overflow-hidden shadow-sm">
                  <div className="absolute inset-0">
                    <img src="/images/fotobareng.jpeg" alt="Coffee" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-[9px] font-bold text-[#252943] z-10">
                    ↗
                  </div>
                  <div className="relative z-10 m-2.5 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-white/40">
                    <h4 className="font-bold text-[11px] text-[#252943]">Malem malem ngapain ya??</h4>
                    <p className="text-[9px] text-[#626477]">ytta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 text-[11px] text-[#626477] uppercase tracking-wider font-medium px-2">
            <span>A few frames from a much bigger story.</span>
            <span>MADE OF MOMENTS, NOT JUST MILESTONES</span>
          </div>
        </section>

        {/* ================= 8. FOOTER ================= */}
        <footer className="max-w-7xl mx-auto px-6 pb-12 pt-8 border-t border-[#E8E9F4] flex flex-col md:flex-row justify-between items-center text-xs text-[#626477]">
          <div>
            <p className="font-bold text-[#252943] mb-1">TiluOpat</p>
            <p>Four perspectives. One common ground. A student collective at Telkom University.</p>
          </div>
          <div className="flex space-x-6 my-4 md:my-0">
            <a href="#" className="hover:text-[#7778E8]">Home</a>
            <a href="#members" className="hover:text-[#7778E8]">Members</a>
            <a href="#about" className="hover:text-[#7778E8]">About</a>
            <a href="#gallery" className="hover:text-[#7778E8]">Gallery</a>
          </div>
          <div>
            <p>© 2026 TiluOpat. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
}