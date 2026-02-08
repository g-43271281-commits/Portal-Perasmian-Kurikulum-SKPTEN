
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Fingerprint, 
  Volume2, 
  VolumeX,
  BookOpen,
  Loader2,
  Trophy,
  Sparkles,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LaunchState } from './types';
import { PORTAL_URL, SCHOOL_NAME, APP_TITLE, CELEBRATORY_QUOTES, SCHOOL_LOGO_URL, MAIN_BG_URL } from './constants';

const BackgroundMedia = ({ state }: { state: LaunchState }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gambar Latar Belakang dari Google Drive */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: state === LaunchState.WELCOME ? 0.6 : 0.2, 
          scale: 1,
          filter: state === LaunchState.WELCOME ? 'blur(0px)' : 'blur(10px)'
        }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img 
          src={MAIN_BG_URL} 
          alt="Portal Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay Gelap untuk Kontras */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]" />
      <div className="absolute inset-0 bg-[#020617]/40" />
      
      {/* Kesan Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </div>
  );
};

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute bg-blue-400 rounded-full opacity-20"
          style={{ width: star.size, height: star.size, top: star.top, left: star.left }}
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: star.duration, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

const AnimatedLogo = ({ className }: { className?: string }) => (
  <motion.div 
    animate={{ y: [0, -15, 0], rotateY: [0, 360] }} 
    transition={{ 
      y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, 
      rotateY: { duration: 20, repeat: Infinity, ease: "linear" } 
    }} 
    className="flex items-center justify-center relative"
  >
     <img 
       src={SCHOOL_LOGO_URL} 
       alt="Animated Logo" 
       className={`${className} object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]`} 
     />
  </motion.div>
);

const App: React.FC = () => {
  const [state, setState] = useState<LaunchState>(LaunchState.WELCOME);
  const [isMuted, setIsMuted] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [redirectProgress, setRedirectProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.loop = true;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (state === LaunchState.CELEBRATION) {
      triggerCelebration();
      
      const interval = setInterval(() => {
        setRedirectProgress(prev => Math.min(prev + 2, 100));
      }, 120);

      const timer = setTimeout(() => {
        setState(LaunchState.FINISHED);
        window.location.href = PORTAL_URL;
      }, 6500);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [state]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const startCeremony = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
    setState(LaunchState.GIMMICK);
  };

  const triggerCelebration = useCallback(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 999 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 100 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { staggerChildren: 0.2, duration: 0.8 } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.05, 
      filter: 'blur(15px)',
      transition: { duration: 0.5 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring' as const, stiffness: 80 } 
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex flex-col font-sans">
      
      <BackgroundMedia state={state} />
      <StarField />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
      </div>

      <header className="fixed top-0 left-0 right-0 p-4 md:p-6 z-50 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 glass rounded-xl border border-white/10 p-1.5 flex items-center justify-center">
            {logoError ? <BookOpen className="w-5 h-5 text-blue-400" /> : <img src={SCHOOL_LOGO_URL} alt="Logo" className="w-full h-full object-contain" onError={() => setLogoError(true)} />}
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black tracking-[0.4em] text-blue-400 uppercase leading-tight">Unit Kurikulum</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{SCHOOL_NAME}</span>
          </div>
        </motion.div>

        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          onClick={toggleMute} 
          className="p-3 glass rounded-full border border-white/10 backdrop-blur-md"
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-blue-400" />}
        </motion.button>
      </header>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4">
        <AnimatePresence mode="wait">
          
          {/* WELCOME */}
          {state === LaunchState.WELCOME && (
            <motion.div key="welcome" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center space-y-12 max-w-5xl pb-20 md:pb-32">
              <motion.div variants={itemVariants} className="relative inline-block">
                <AnimatedLogo className="w-32 h-32 md:w-56 md:h-56" />
                <div className="absolute inset-[-20%] bg-blue-500/10 blur-[70px] -z-10 rounded-full animate-pulse" />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6 px-4">
                <div className="flex flex-col items-center">
                    <span className="font-grand text-blue-400 text-xl md:text-3xl tracking-[1em] uppercase mb-6 opacity-90 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Selamat Datang Ke</span>
                    <h1 className="font-impact text-6xl md:text-8xl tracking-tight uppercase leading-[0.9] text-glow flex flex-col items-center">
                       <span className="text-gradient">Majlis Pelancaran</span>
                       <span className="text-white text-5xl md:text-7xl mt-2 tracking-widest opacity-90 text-shadow-lg">Portal Unit Kurikulum</span>
                    </h1>
                </div>
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4" />
                <p className="text-sm md:text-xl text-blue-100 font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                   Transformasi Digital Masa Hadapan Pendidikan
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-8">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59,130,246,0.5)" }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={startCeremony} 
                  className="shimmer-btn group relative px-12 py-6 bg-blue-600 rounded-full text-xl font-black transition-all flex items-center gap-4 mx-auto uppercase tracking-[0.2em] border border-white/30 shadow-2xl overflow-hidden font-impact"
                >
                  <Zap className="w-6 h-6 text-yellow-300 fill-current" /> 
                  <span>Mula Perasmian</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* GIMMICK */}
          {state === LaunchState.GIMMICK && (
            <motion.div key="gimmick" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center space-y-12">
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="font-impact text-4xl md:text-6xl uppercase tracking-[0.2em] text-blue-400 text-glow">Pengesahan Biometrik</h3>
                <p className="font-sans text-slate-400 text-sm md:text-xl font-light italic tracking-widest opacity-80">Sentuh penderia untuk mengaktifkan kunci digital portal.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
                <motion.div 
                  animate={{ scale: [1, 1.4], opacity: [0.3, 0] }} 
                  transition={{ duration: 2, repeat: Infinity }} 
                  className="absolute inset-0 border-2 border-blue-500/30 rounded-full" 
                />
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.92 }} 
                  onClick={() => setState(LaunchState.COUNTDOWN)} 
                  className="relative w-full h-full glass rounded-full flex items-center justify-center border-4 border-blue-500/40 cursor-pointer group bg-blue-500/5 transition-all shadow-[0_0_80px_rgba(59,130,246,0.4)] overflow-hidden"
                >
                  <Fingerprint className="w-32 h-32 md:w-44 md:h-44 text-blue-400 group-hover:text-blue-200 transition-colors z-10" />
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }} 
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} 
                    className="absolute left-0 right-0 h-[4px] bg-blue-400 shadow-[0_0_25px_rgba(96,165,250,1)] z-20" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* COUNTDOWN */}
          {state === LaunchState.COUNTDOWN && <CountdownSequence onComplete={() => setState(LaunchState.CELEBRATION)} />}

          {/* CELEBRATION */}
          {(state === LaunchState.CELEBRATION || state === LaunchState.FINISHED) && (
            <motion.div key="finished" variants={containerVariants} initial="hidden" animate="visible" className="text-center space-y-12 px-4">
              <motion.div variants={itemVariants} className="flex justify-center items-center gap-8">
                <motion.div animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
                  <Sparkles className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                </motion.div>
                
                <div className="relative">
                  <AnimatedLogo className="w-28 h-28 md:w-40 md:h-40" />
                  <div className="absolute inset-[-10%] bg-blue-500/10 blur-[40px] -z-10 rounded-full animate-pulse" />
                </div>

                <motion.div animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>
                  <Trophy className="w-12 h-12 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                 <h2 className="font-impact text-7xl md:text-9xl text-glow leading-none uppercase tracking-tighter">
                    <span className="text-gradient">PORTAL AKTIF</span>
                 </h2>
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: 200 }}
                   className="h-2 bg-blue-500 mx-auto rounded-full shadow-[0_0_30px_rgba(59,130,246,1)]" 
                 />
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-lg mx-auto space-y-6">
                <p className="font-impact text-xl md:text-3xl text-blue-300 tracking-[0.3em] uppercase animate-pulse">
                   MEMBUKA AKSES DIGITAL...
                </p>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px] shadow-inner">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${redirectProgress}%` }}
                     className="h-full bg-gradient-to-r from-blue-700 via-blue-400 to-white rounded-full"
                   />
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="font-grand text-xl md:text-2xl text-slate-400 italic px-2 max-w-3xl mx-auto opacity-80 leading-relaxed">
                "{CELEBRATORY_QUOTES[Math.floor(Math.random() * CELEBRATORY_QUOTES.length)].text}"
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-20 p-10 text-center opacity-40">
        <p className="text-[10px] tracking-[0.5em] uppercase font-black font-impact">© {new Date().getFullYear()} Unit Kurikulum {SCHOOL_NAME}</p>
      </footer>
    </div>
  );
};

const CountdownSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else onComplete();
  }, [count, onComplete]);

  return (
    <motion.div className="text-center py-12">
      <AnimatePresence mode="wait">
        <motion.div 
          key={count} 
          initial={{ scale: 0.2, opacity: 0, rotate: -45, filter: 'blur(20px)' }} 
          animate={{ scale: 1, opacity: 1, rotate: 0, filter: 'blur(0px)' }} 
          exit={{ scale: 3, opacity: 0, rotate: 45, filter: 'blur(30px)' }} 
          transition={{ type: "spring", stiffness: 500, damping: 20 }} 
          className="font-impact text-[16rem] md:text-[26rem] text-white text-glow leading-none select-none"
        >
          {count}
        </motion.div>
      </AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col items-center gap-4"
      >
         <div className="flex gap-2">
            {[0, 1, 2, 3].map(i => (
              <motion.div 
                key={i}
                animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.2, 0.8] }}
                transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              />
            ))}
         </div>
         <p className="font-impact text-sm tracking-[0.8em] text-blue-400 uppercase opacity-70">PELANCARAN SISTEM BERMULA</p>
      </motion.div>
    </motion.div>
  );
};

export default App;
