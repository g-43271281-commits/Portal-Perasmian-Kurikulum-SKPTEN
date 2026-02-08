
import React, { useState } from 'react';
import Layout from './components/Layout';
import ModuleDetail from './components/ModuleDetail';
import { MODULES, ICON_MAP, RESOURCES } from './constants';
import { Module } from './types';
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Zap, 
  CheckCircle,
  Download,
  Info,
  Globe,
  Monitor,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Layers,
  Star
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    setSelectedModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModule = (module: Module) => {
    setSelectedModule(module);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-1000">
      {/* High-Impact Hero Section */}
      <section className="relative pt-24 pb-44 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full animate-float" style={{animationDelay: '-3s'}}></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Lencana dibuang mengikut permintaan pengguna */}
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] mb-12 tracking-tighter max-w-6xl">
              Memperkasa Guru, <br />
              <span className="text-gradient-vibrant italic">Inovasi PdP.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto mb-20 font-medium leading-relaxed tracking-tight">
              Platform elit untuk guru Malaysia menguasai AI. <br className="hidden md:block"/> Tingkatkan kualiti PdP, mudahkan dokumentasi, dan inspirasikan murid.
            </p>
          </div>
        </div>
      </section>

      {/* Vibrant Modules Section */}
      <section className="py-44 px-8 bg-white" id="modules-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Program Akademi.</h2>
              <p className="text-slate-500 text-2xl font-medium leading-relaxed">Kurikulum yang disusun rapi untuk memandu anda menjadi guru pakar dalam era AI.</p>
            </div>
            <div className="bg-blue-50 text-blue-600 px-8 py-4 rounded-3xl border border-blue-100 font-black text-sm uppercase tracking-widest">
              Digital Masterclass 2024
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MODULES.map((module, i) => {
              const Icon = ICON_MAP[module.icon];
              return (
                <div 
                  key={module.id} 
                  onClick={() => openModule(module)}
                  className="bg-white rounded-[48px] p-12 cursor-pointer group flex flex-col h-full border border-slate-100 shadow-sm hover:shadow-2xl card-reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="bg-slate-50 text-blue-600 w-20 h-20 rounded-[28px] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors leading-[1.1] tracking-tighter">
                    {module.title}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-grow font-medium">
                    {module.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-black text-xs gap-4 mt-auto uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                    Mulakan Modul <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );

  const renderResources = () => (
    <section className="py-32 px-8 animate-in fade-in duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[70px] p-16 md:p-28 relative overflow-hidden shadow-2xl border border-slate-100">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
              <div className="bg-blue-600 p-8 rounded-[36px] text-white shadow-2xl shadow-blue-200">
                <Download size={56} />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4">Arkib Digital.</h2>
                <p className="text-slate-500 text-2xl font-medium max-w-xl">Lengkapkan persenjataan digital anda dengan bahan eksklusif EduAI Guru.</p>
              </div>
            </div>
            
            <div className="grid gap-8">
              {RESOURCES.map((res, i) => (
                <div key={i} className="bg-slate-50/50 border border-slate-100 p-10 rounded-[44px] flex flex-col md:flex-row md:items-center justify-between gap-10 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all group card-reveal">
                  <div className="flex gap-10 items-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-blue-600 group-hover:scale-110 shadow-sm transition-all">
                      <Layers size={36} />
                    </div>
                    <div>
                      <h4 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{res.name}</h4>
                      <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">{res.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="px-6 py-3 bg-white rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                      {res.type}
                    </div>
                    {res.type === 'LINK' ? (
                      <a href="#" className="btn-vibrant text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl active:scale-95 text-center">
                        Buka Galeri
                      </a>
                    ) : (
                      <button className="btn-vibrant text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl active:scale-95">
                        Dapatkan
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const getContent = () => {
    if (selectedModule) return <ModuleDetail module={selectedModule} onBack={() => setSelectedModule(null)} />;
    
    switch (activeTab) {
      case 'home': return renderHome();
      case 'modules': return renderHome();
      case 'resources': return renderResources();
      default: return renderHome();
    }
  };

  return (
    <Layout activeTab={activeTab} onNavigate={handleNavigate}>
      {getContent()}
    </Layout>
  );
};

export default App;
