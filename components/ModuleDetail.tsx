
import React from 'react';
import { ICON_MAP, CHATGPT_PROMPTS } from '../constants';
import { Module } from '../types';
import { 
  ArrowLeft, 
  Copy, 
  CheckCircle2, 
  ShieldAlert, 
  Zap, 
  AlertTriangle, 
  Sparkles, 
  Monitor,
  Lightbulb,
  Globe,
  CheckCircle,
  FileText,
  Target,
  Image as ImageIcon,
  Layout as LayoutIcon,
  ShieldCheck,
  Search,
  BookOpen,
  ChevronRight
} from 'lucide-react';

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, onBack }) => {
  const Icon = ICON_MAP[module.icon];
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const renderModule1 = () => (
    <div className="space-y-16">
      <section className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl">
        <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
          <Lightbulb className="text-blue-600" /> Memahami AI
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-black text-slate-900 mb-4 uppercase tracking-widest text-xs">Apa Itu AI?</h4>
            <p className="text-slate-600 leading-relaxed mb-6">
              AI atau Kecerdasan Buatan adalah teknologi komputer yang membolehkan mesin melakukan tugasan yang biasanya memerlukan kecerdasan manusia, seperti belajar, menaakul, dan menyelesaikan masalah.
            </p>
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
              <p className="text-blue-900 font-bold text-sm italic">"AI tidak menggantikan guru, tetapi guru yang menggunakan AI akan menggantikan guru yang tidak menggunakannya."</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-slate-100 p-3 rounded-xl text-blue-600"><Monitor size={24} /></div>
              <div>
                <h5 className="font-black text-slate-900">Cara AI Berfungsi</h5>
                <p className="text-slate-500 text-sm">AI memproses data yang besar, mengenal pasti corak, dan membuat ramalan atau keputusan berdasarkan peraturan yang ditetapkan.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-slate-100 p-3 rounded-xl text-blue-600"><Globe size={24} /></div>
              <div>
                <h5 className="font-black text-slate-900">AI Harian</h5>
                <p className="text-slate-500 text-sm">Contoh: Waze (navigasi), Siri/Google Assistant, cadangan filem Netflix, dan sistem pengecaman wajah di telefon pintar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
        <h3 className="text-3xl font-black mb-12 relative z-10">AI dalam Pendidikan (PdP)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { title: 'Bahan PdP', desc: 'Nota, kuiz, dan aktiviti kelas dalam saat sahaja.' },
            { title: 'Pentaksiran', desc: 'Bina rubrik dan soalan ujian yang seimbang.' },
            { title: 'Analisis Data', desc: 'Kenalpasti potensi dan kelemahan murid.' },
            { title: 'Automasi', desc: 'Mudahkan pengurusan rekod dan dokumentasi.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/5">
              <h4 className="font-black text-blue-400 mb-4">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 bg-blue-600 rounded-3xl text-center">
          <p className="text-lg font-bold">Mendukung Transformasi Pendidikan Digital Negara melalui kecekapan dan inovasi.</p>
        </div>
      </section>
    </div>
  );

  const renderModule2 = () => (
    <div className="space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-emerald-50 p-12 rounded-[50px] border border-emerald-100">
          <h3 className="text-2xl font-black text-emerald-900 mb-8 flex items-center gap-4">
            <CheckCircle className="text-emerald-600" /> Kelebihan AI
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-emerald-600 shadow-sm">•</div>
              <p className="text-emerald-800 font-medium">Pengajaran Terbeza (Differentiated Learning) yang lebih mudah.</p>
            </li>
            <li className="flex gap-4">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-emerald-600 shadow-sm">•</div>
              <p className="text-emerald-800 font-medium">Automasi tugas rutin (seperti merekod data) menjimatkan masa guru.</p>
            </li>
            <li className="flex gap-4">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-emerald-600 shadow-sm">•</div>
              <p className="text-emerald-800 font-medium">Bahan bantu mengajar yang lebih interaktif dan visual.</p>
            </li>
          </ul>
        </div>
        <div className="bg-orange-50 p-12 rounded-[50px] border border-orange-100">
          <h3 className="text-2xl font-black text-orange-900 mb-8 flex items-center gap-4">
            <AlertTriangle className="text-orange-600" /> Cabaran & Etika
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-orange-600 shadow-sm">!</div>
              <p className="text-orange-800 font-medium">Risiko bias dalam data dan algoritma AI.</p>
            </li>
            <li className="flex gap-4">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-orange-600 shadow-sm">!</div>
              <p className="text-orange-800 font-medium">Memastikan murid tidak menyalahguna AI untuk plagiarisme.</p>
            </li>
            <li className="flex gap-4">
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-orange-600 shadow-sm">!</div>
              <p className="text-orange-800 font-medium">Prinsip Ketelusan: Sentiasa maklumkan jika AI digunakan.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderModule3 = () => {
    // Group prompts by category
    const categories = Array.from(new Set(CHATGPT_PROMPTS.map(p => p.category)));

    return (
      <div className="space-y-20">
        <div className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl">
          <h3 className="text-3xl font-black text-slate-900 mb-8">Panduan ChatGPT Guru</h3>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Berikut adalah koleksi prompt profesional yang telah disusun mengikut kategori utama tugas guru Malaysia. Salin dan sesuaikan untuk kegunaan anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <ChevronRight size={16} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{cat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {categories.map((category) => (
            <div key={category} className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="h-px bg-slate-200 flex-grow"></div>
                <h4 className="text-xl font-black text-blue-600 uppercase tracking-[0.3em] whitespace-nowrap">{category}</h4>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {CHATGPT_PROMPTS.filter(p => p.category === category).map((item, idx) => {
                  const globalIdx = CHATGPT_PROMPTS.indexOf(item);
                  return (
                    <div key={globalIdx} className="bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl group border border-white/5">
                      <div className="px-10 py-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                        <h4 className="text-white font-bold">{item.title}</h4>
                      </div>
                      <div className="p-10 relative">
                        <p className="text-slate-400 italic text-lg leading-relaxed pr-20 font-serif">"{item.prompt}"</p>
                        <button 
                          onClick={() => copyToClipboard(item.prompt, globalIdx)}
                          className="absolute bottom-10 right-10 p-5 bg-blue-600 hover:bg-blue-500 rounded-3xl text-white transition-all shadow-xl active:scale-90"
                        >
                          {copiedIndex === globalIdx ? <CheckCircle2 size={28} /> : <Copy size={28} />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderModule4 = () => (
    <div className="space-y-16">
      <div className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl">
        <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
          <ImageIcon className="text-blue-600" /> Revolusi Visual Sekolah
        </h3>
        <p className="text-slate-600 text-xl leading-relaxed mb-12">
          EduGrafik GPT membantu guru menjana poster program, infografik nota subjek, dan slaid pembentangan yang profesional tanpa perlu kemahiran reka bentuk grafik yang kompleks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100">
            <h4 className="font-black text-blue-900 mb-4 uppercase tracking-wider text-xs">Poster</h4>
            <p className="text-blue-700 text-sm">Hebahan rasmi sekolah, hari sukan, dan sambutan hari guru.</p>
          </div>
          <div className="p-8 bg-indigo-50 rounded-[40px] border border-indigo-100">
            <h4 className="font-black text-indigo-900 mb-4 uppercase tracking-wider text-xs">Infografik</h4>
            <p className="text-indigo-700 text-sm">Nota ringkas sains, garis masa sejarah, dan peta konsep.</p>
          </div>
          <div className="p-8 bg-purple-50 rounded-[40px] border border-purple-100">
            <h4 className="font-black text-purple-900 mb-4 uppercase tracking-wider text-xs">Slaid PdP</h4>
            <p className="text-purple-700 text-sm">Reka letak slaid yang bersih, moden, dan memikat tumpuan murid.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderModule5 = () => (
    <div className="space-y-16">
      <section className="bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl">
        <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
          <LayoutIcon className="text-blue-600" /> Penguasaan Kurikulum & PBD
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-black text-slate-900 mb-4">Penjanaan RPH & Bahan</h4>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li>• RPH lengkap mengikut Dokumen Kurikulum Kebangsaan.</li>
                <li>• Nota padat dan latihan mengikut Tahap Penguasaan.</li>
                <li>• Aktiviti pemulihan, pengukuhan, dan pengayaan.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900 mb-4">BBM & BBB Pintar</h4>
              <ul className="space-y-3 text-slate-500 text-sm font-medium">
                <li>• Lembaran kerja, kad imbasan, dan aktiviti interaktif.</li>
                <li>• Bahan pembelajaran kendiri (self-learning) murid.</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200">
            <h4 className="text-xl font-black text-slate-900 mb-6">Analisis PBD (TP1-TP6)</h4>
            <p className="text-slate-600 text-sm mb-8 leading-relaxed">
              Gunakan AI untuk mentafsir data PBD murid. Kenalpasti taburan murid mengikut Tahap Penguasaan dan jana cadangan intervensi secara automatik untuk membantu peningkatan murid.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
                <span className="block text-blue-600 font-black">TP1-2</span>
                <span className="text-[10px] text-slate-400 font-bold">INTERVENSI</span>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
                <span className="block text-indigo-600 font-black">TP3-4</span>
                <span className="text-[10px] text-slate-400 font-bold">PENGUKUHAN</span>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
                <span className="block text-purple-600 font-black">TP5-6</span>
                <span className="text-[10px] text-slate-400 font-bold">PENGAYAAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-900 text-white p-12 rounded-[50px] shadow-2xl">
        <h4 className="text-2xl font-black mb-10">Dokumen Kurikulum & Pelaporan</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-6">
            <div className="bg-white/10 p-4 rounded-2xl h-fit"><Target /></div>
            <div>
              <h5 className="font-bold text-lg mb-2">Pelan Strategik Panitia</h5>
              <p className="text-indigo-200 text-sm">Bina sasaran tahunan dan pelan taktikal yang realistik.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-white/10 p-4 rounded-2xl h-fit"><FileText /></div>
            <div>
              <h5 className="font-bold text-lg mb-2">Laporan Headcount</h5>
              <p className="text-indigo-200 text-sm">Analisis pencapaian akademik dan pelaporan sekolah sistematik.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderModule6 = () => (
    <div className="space-y-16">
      <div className="bg-red-50 p-12 rounded-[50px] border border-red-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 blur-[80px] rounded-full"></div>
        <h3 className="text-3xl font-black text-red-900 mb-10 flex items-center gap-4 relative z-10">
          <ShieldCheck className="text-red-600" /> Integriti Era AI
        </h3>
        <div className="space-y-10 relative z-10">
          <div className="flex gap-10 items-start bg-white/40 p-8 rounded-3xl border border-red-200">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center font-black text-white shrink-0 shadow-xl">01</div>
            <div>
              <h5 className="text-xl font-black text-red-950 mb-2">Privasi Data Murid</h5>
              <p className="text-red-900/70 font-bold leading-relaxed">PANTANG LARANG: Jangan sesekali memasukkan butiran peribadi murid (Nama, IC, Alamat) ke dalam platform AI terbuka.</p>
            </div>
          </div>
          <div className="flex gap-10 items-start bg-white/40 p-8 rounded-3xl border border-red-200">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center font-black text-white shrink-0 shadow-xl">02</div>
            <div>
              <h5 className="text-xl font-black text-red-950 mb-2">Kesahihan Maklumat</h5>
              <p className="text-red-900/70 font-bold leading-relaxed">AI boleh 'berhalusinasi'. Sentiasa semak silang fakta dan sumber maklumat sebelum membentangkannya di dalam kelas.</p>
            </div>
          </div>
          <div className="flex gap-10 items-start bg-white/40 p-8 rounded-3xl border border-red-200">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center font-black text-white shrink-0 shadow-xl">03</div>
            <div>
              <h5 className="text-xl font-black text-red-950 mb-2">Guru sebagai Pengemudi</h5>
              <p className="text-red-900/70 font-bold leading-relaxed">AI adalah alat bantu (assistant), bukan pengganti. Tanggungjawab profesional dan bimbingan moral tetap pada guru.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getModuleContent = () => {
    switch (module.id) {
      case 'm1': return renderModule1();
      case 'm2': return renderModule2();
      case 'm3': return renderModule3();
      case 'm4': return renderModule4();
      case 'm5': return renderModule5();
      case 'm6': return renderModule6();
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-8 animate-in slide-in-from-bottom-12 duration-700">
      <button 
        onClick={onBack}
        className="group flex items-center gap-4 text-slate-400 hover:text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-16 transition-all"
      >
        <ArrowLeft size={24} className="group-hover:-translate-x-3 transition-transform" /> Kembali ke Senarai
      </button>

      <div className="bg-white rounded-[70px] overflow-hidden shadow-3xl border border-slate-100 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="bg-white p-16 md:p-32 border-b border-slate-50 flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 p-14 rounded-[50px] text-white shadow-3xl shadow-blue-500/30">
            <Icon size={96} />
          </div>
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-10 border border-blue-100">
              Akademi EduAI Masterclass
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-none tracking-tighter mb-8">{module.title}</h1>
            <p className="text-slate-500 text-2xl md:text-3xl font-medium max-w-2xl leading-relaxed">{module.description}</p>
          </div>
        </div>

        <div className="p-16 md:p-32 bg-slate-50/20">
          {getModuleContent()}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
