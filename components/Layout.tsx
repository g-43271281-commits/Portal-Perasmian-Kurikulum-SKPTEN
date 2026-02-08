
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, GraduationCap, ArrowUpRight, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Eksplorasi', id: 'home' },
    { label: 'Akademi AI', id: 'modules' },
    { label: 'Hub Sumber', id: 'resources' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Floating Modern Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'py-3' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`rounded-[28px] transition-all duration-500 border flex justify-between items-center ${
            scrolled 
              ? 'bg-white/70 backdrop-blur-2xl border-white/40 shadow-2xl py-3 px-8' 
              : 'bg-transparent border-transparent py-2 px-2'
          }`}>
            
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-2.5 rounded-[18px] text-white shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tighter text-slate-900 block leading-none">EduAI Guru</span>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mt-1 block">Evolusi Pendidik Masa Hadapan</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="bg-slate-900/5 p-1.5 rounded-2xl flex gap-1 border border-slate-900/5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                      activeTab === item.id 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="w-px h-6 bg-slate-200 mx-4"></div>
              <button 
                onClick={() => onNavigate('modules')}
                className="btn-vibrant text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2"
              >
                Mula Belajar <Zap size={16} fill="white" />
              </button>
            </div>

            {/* Mobile Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-3 bg-white shadow-lg rounded-2xl text-slate-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-4 p-8 bg-white/95 backdrop-blur-3xl border border-white/50 rounded-[40px] shadow-2xl animate-in zoom-in-95 duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
                className={`block w-full text-left px-8 py-5 rounded-2xl text-xl font-black mb-2 transition-all ${
                  activeTab === item.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* High-End Footer */}
      <footer className="bg-slate-50/50 pt-32 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-blue-600 p-2.5 rounded-xl text-white">
                  <GraduationCap size={28} />
                </div>
                <span className="text-3xl font-black text-slate-900 tracking-tighter">EduAI Guru</span>
              </div>
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
                Platform bebas yang didedikasikan untuk memperkasa guru-guru Malaysia dengan teknologi masa hadapan.
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="text-slate-900 font-black mb-10 text-xs uppercase tracking-[0.3em]">Menu Utama</h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm">
                <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-all">Laman Eksplorasi</button></li>
                <li><button onClick={() => onNavigate('modules')} className="hover:text-blue-600 transition-all">Akademi Pembelajaran</button></li>
                <li><button onClick={() => onNavigate('resources')} className="hover:text-blue-600 transition-all">Pusat Sumber Digital</button></li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 group">
              <h4 className="text-slate-900 font-black mb-6 flex items-center gap-3">
                <Zap className="text-blue-600" size={20} />
                Status Inovatif
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Portal ini menyahut cabaran Dasar Pendidikan Digital Malaysia dengan cara yang praktikal dan berhemah.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-blue-50 rounded-xl text-blue-600 text-[10px] font-black uppercase tracking-widest">Active 2024</div>
                <div className="px-4 py-2 bg-indigo-50 rounded-xl text-indigo-600 text-[10px] font-black uppercase tracking-widest">Global Standards</div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} EduAI Guru. Transformasi Pendidikan Melalui Inovasi.
            </p>
            <div className="flex gap-8">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-blue-600 cursor-pointer">Dasar Privasi</span>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-blue-600 cursor-pointer">Terma Penggunaan</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
