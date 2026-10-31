import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function MemberProfile({ id }) {
  const membersData = {
    lla: {
      name: "LLA",
      role: "Design & direction",
      major: "Visual Communication · Year 3",
      nim: "1234567890",
      badge: "• UI/UX",
      quote: "Turns big ideas into simple, thoughtful designs. Usually has a sketchbook in hand.",
      about: "Hello! I am LLA, a passionate Visual Communication Design student at Telkom University with a deep interest in digital design, user experience prototyping, and creative direction.",
      tools: "Figma, Canva, Ibis Paint",
      hobbies: "UI Prototyping & Sketching",
      focus: "Visual Layout & Direction",
      prevId: "rma",
      nextId: "nap"
    },
    nap: {
      name: "NAP",
      role: "Development",
      major: "Computer Science · Year 3",
      nim: "2345678901",
      badge: "• Developer",
      quote: "Builds the things we imagine. Believes good code starts with a great conversation.",
      about: "Hello! I am NAP, focusing on software development and interactive systems, turning complex logic into clean, robust web applications.",
      tools: "VS Code, Laravel, React",
      hobbies: "Coding & Code Review",
      focus: "Fullstack Architecture",
      prevId: "lla",
      nextId: "pah"
    },
    pah: {
      name: "PAH",
      role: "Research & storytelling",
      major: "Media & Culture · Year 3",
      nim: "3456789012",
      badge: "• Research",
      quote: "Asks the interesting questions and finds the human story behind every project.",
      about: "Hello! I am PAH, handling research, content strategy, and narrative storytelling to ensure meaningful connection with audiences.",
      tools: "Notion, Docs, Research",
      hobbies: "Reading & Writing",
      focus: "Content & User Research",
      prevId: "nap",
      nextId: "rma"
    },
    rma: {
      name: "RMA",
      role: "Strategy & community",
      major: "Business & Innovation · Year 3",
      nim: "4567890123",
      badge: "• Strategy",
      quote: "Connects the dots—and the people. Makes sure our ideas find their way into the world.",
      about: "Hello! I am RMA, focusing on community outreach, project management, and strategic planning for student initiatives.",
      tools: "Trello, Excel, Strategy",
      hobbies: "Community Building",
      focus: "Project Management",
      prevId: "pah",
      nextId: "lla"
    }
  };

  const member = membersData[id] || membersData['lla'];

  return (
    <>
      <Head title={`TiluOpat — ${member.name}'s Profile`} />
      <div className="min-h-screen bg-[#F8FAFF] text-[#252943] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#7778E8] selection:text-white pb-12">
        
        {/* Navbar */}
        <div className="max-w-7xl mx-auto px-6 pt-6 mb-8">
          <nav className="bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm border border-[#E8E9F4]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEEFFF] flex items-center justify-center font-bold text-[#7778E8]">🌸</div>
              <span className="font-bold text-base tracking-wide text-[#252943]">TiluOpat</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#626477]">
              <Link href="/" className="hover:text-[#7778E8] transition">Home</Link>
              <Link href="/#members" className="text-[#252943] font-semibold flex items-center gap-1">Members</Link>
            </div>
            <Link href="/login" className="px-5 py-2.5 rounded-xl bg-[#252943] text-white text-xs font-semibold shadow-md hover:bg-[#7778E8] transition">
              Admin Login
            </Link>
          </nav>
        </div>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-6 space-y-6">
          <div>
            <Link href="/" className="inline-flex items-center text-xs font-bold text-[#7778E8] bg-white px-4 py-2 rounded-xl border border-[#E8E9F4] shadow-sm hover:bg-[#EEEFFF] transition">
              ← Back to Members
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Kolom Kiri */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E8E9F4] shadow-sm space-y-6">
              <div className="h-72 bg-[#EEEFFF] rounded-2xl flex items-center justify-center overflow-hidden border border-[#E8E9F4]">
                <span className="text-sm font-semibold text-[#626477]">{member.name} Photo</span>
              </div>
              <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                <span className="px-3 py-1 rounded-full bg-[#EEEFFF] text-[#7778E8] text-xs font-bold">{member.badge}</span>
                <span className="px-3 py-1 rounded-full bg-[#F8FAFF] border border-[#E8E9F4] text-[#626477] text-xs font-medium">NIM: {member.nim}</span>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-[#252943]">{member.name}</h1>
                <p className="text-xs font-semibold text-[#7778E8] mt-1">{member.role} · {member.major}</p>
              </div>
              <blockquote className="text-xs text-[#626477] italic leading-relaxed bg-[#F8FAFF] p-4 rounded-2xl border border-[#E8E9F4]">
                "{member.quote}"
              </blockquote>
            </div>

            {/* Kolom Kanan */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E8E9F4] shadow-sm space-y-8">
              <div>
                <span className="text-[11px] font-bold text-[#7778E8] uppercase tracking-widest block mb-2">• GET TO KNOW ME</span>
                <h2 className="text-2xl font-extrabold text-[#252943] mb-4">About Me & Background</h2>
                <p className="text-[#626477] text-sm leading-relaxed">{member.about}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E8E9F4]">
                <h3 className="text-sm font-bold text-[#252943]">Personal Highlights & Interests</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#E8E9F4]">
                    <span className="text-[10px] font-bold text-[#7778E8] uppercase tracking-wider block mb-1">TOOLS</span>
                    <p className="text-xs font-semibold text-[#252943]">{member.tools}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#E8E9F4]">
                    <span className="text-[10px] font-bold text-[#7778E8] uppercase tracking-wider block mb-1">HOBBIES</span>
                    <p className="text-xs font-semibold text-[#252943]">{member.hobbies}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F8FAFF] border border-[#E8E9F4]">
                    <span className="text-[10px] font-bold text-[#7778E8] uppercase tracking-wider block mb-1">FOCUS</span>
                    <p className="text-xs font-semibold text-[#252943]">{member.focus}</p>
                  </div>
                </div>
              </div>

              {/* Navigasi Prev/Next */}
              <div className="pt-6 border-t border-[#E8E9F4] flex justify-between items-center">
                <span className="text-xs text-[#626477]">Explore other team members:</span>
                <div className="flex space-x-3">
                  <Link href={`/member/${member.prevId}`} className="px-4 py-2 rounded-xl bg-[#F8FAFF] border border-[#E8E9F4] text-xs font-semibold text-[#252943] hover:bg-[#EEEFFF] transition">← Prev</Link>
                  <Link href={`/member/${member.nextId}`} className="px-4 py-2 rounded-xl bg-[#F8FAFF] border border-[#E8E9F4] text-xs font-semibold text-[#252943] hover:bg-[#EEEFFF] transition">Next →</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}