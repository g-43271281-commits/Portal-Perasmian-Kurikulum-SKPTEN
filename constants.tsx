
import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Sparkles, 
  FileText, 
  Palette, 
  Layout, 
  ShieldCheck, 
  Download,
  Terminal,
  Calculator,
  PenTool,
  Users
} from 'lucide-react';
import { Module, PromptExample, ResourceItem } from './types';

export const MODULES: Module[] = [
  { 
    id: 'm1', 
    title: 'Pengenalan AI', 
    description: 'Fahami asas AI, cara ia berfungsi, dan peranannya dalam transformasi pendidikan digital negara.', 
    icon: 'Brain', 
    path: '/modul-1' 
  },
  { 
    id: 'm2', 
    title: 'Asas AI untuk Guru', 
    description: 'Kepentingan AI dalam profesion perguruan, kelebihan, cabaran, dan prinsip etika.', 
    icon: 'ShieldCheck', 
    path: '/modul-2' 
  },
  { 
    id: 'm3', 
    title: 'Penggunaan ChatGPT', 
    description: 'Panduan praktikal PdP, Pentaksiran PBD, bahan bantu mengajar, dan dokumentasi sekolah.', 
    icon: 'Terminal', 
    path: '/modul-3' 
  },
  { 
    id: 'm4', 
    title: 'EduGrafik GPT', 
    description: 'Hasilkan poster, infografik, dan bahan visual pendidikan profesional sepantas kilat.', 
    icon: 'Palette', 
    path: '/modul-4' 
  },
  { 
    id: 'm5', 
    title: 'Kurikulum Sekolah Rendah GPT', 
    description: 'RPH lengkap, analisis TP1-TP6, pelaporan akademik, dan pengurusan kurikulum sistematik.', 
    icon: 'Layout', 
    path: '/modul-5' 
  },
  { 
    id: 'm6', 
    title: 'Etika & Integriti', 
    description: 'Privasi data murid, kesahihan maklumat AI, dan tanggungjawab profesional guru.', 
    icon: 'Users', 
    path: '/modul-6' 
  }
];

export const CHATGPT_PROMPTS: PromptExample[] = [
  // BAHAGIAN A: PERANCANGAN PdP
  {
    category: 'A: PERANCANGAN PdP',
    title: 'PROMPT 1: RPH TS25 & SKPMg2',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Bina satu RPH lengkap berdasarkan DSKP KPM terkini, selaras Standard 4 SKPMg2, TS25 dan PPPM 2026–2035. Sediakan objektif boleh ukur, aktiviti pemula–pembangunan–penutup, PAK21, KBAT, EMK, PBD formatif, pemulihan dan pengayaan dalam jadual profesional.`
  },
  {
    category: 'A: PERANCANGAN PdP',
    title: 'PROMPT 2: Pembelajaran Kolaboratif',
    prompt: `Anda bertindak sebagai guru mata pelajaran sekolah rendah Malaysia. Rancang PdP berfokuskan pembelajaran aktif dan kolaboratif berdasarkan DSKP KPM dengan peranan murid dan guru, soalan KBAT serta evidens PBD selaras SKPMg2.`
  },
  {
    category: 'A: PERANCANGAN PdP',
    title: 'PROMPT 4: Set Induksi Kreatif',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Sediakan set induksi kreatif yang relevan dengan topik PdP dan konteks kehidupan murid serta jelaskan impaknya terhadap penglibatan murid.`
  },
  {
    category: 'A: PERANCANGAN PdP',
    title: 'PROMPT 5: PdP Berasaskan Projek (PBL)',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Rancang PdP berasaskan Projek (PBL) selaras DSKP dan TS25 dengan hasil pembelajaran, tugasan murid dan pentaksiran PBD.`
  },

  // BAHAGIAN B: PENTAKSIRAN BILIK DARJAH
  {
    category: 'B: PENTAKSIRAN PBD',
    title: 'PROMPT 26: Pelan PBD Formatif',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Bina pelan PBD formatif berdasarkan DSKP, selaras Standard 4 SKPMg2 and PPPM 2026–2035.`
  },
  {
    category: 'B: PENTAKSIRAN PBD',
    title: 'PROMPT 27: Instrumen & Rubrik TP1–TP6',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Bina instrumen PBD lengkap dengan rubrik TP1–TP6 dan contoh evidens.`
  },
  {
    category: 'B: PENTAKSIRAN PBD',
    title: 'PROMPT 28: Analisis & Intervensi PBD',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Analisis data PBD kelas dan cadangkan pemulihan, pengukuhan serta pengayaan.`
  },

  // BAHAGIAN C: DATA, HEADCOUNT & KPI
  {
    category: 'C: DATA, HEADCOUNT & KPI',
    title: 'PROMPT 51: Analisis Headcount PBD',
    prompt: `Anda bertindak sebagai guru sekolah rendah Malaysia. Bina analisis headcount murid berasaskan data PBD dengan TOV, OTI, ETR dan TP1–TP6.`
  },
  {
    category: 'C: DATA, HEADCOUNT & KPI',
    title: 'PROMPT 52: Intervensi Berfokus Panitia',
    prompt: `Anda bertindak sebagai ketua panitia. Analisis pencapaian mata pelajaran dan cadangkan intervensi berfokus.`
  },
  {
    category: 'C: DATA, HEADCOUNT & KPI',
    title: 'PROMPT 53: KPI Kurikulum & Visi KPM',
    prompt: `Anda bertindak sebagai penyelaras kurikulum. Bina KPI mata pelajaran selaras Visi KPM dan PPPM 2026–2035.`
  },

  // BAHAGIAN D: PENGURUSAN KURIKULUM & TS25
  {
    category: 'D: PENGURUSAN KURIKULUM',
    title: 'PROMPT 76: Pelan Strategik Panitia',
    prompt: `Anda bertindak sebagai ketua panitia. Bina Pelan Strategik Panitia selaras KPM, TS25 dan PPPM 2026–2035.`
  },

  // BAHAGIAN E: HAL EHWAL MURID (HEM)
  {
    category: 'E: HAL EHWAL MURID (HEM)',
    title: 'HEM-1: Pelan Strategik HEM',
    prompt: `Anda bertindak sebagai PK HEM sekolah rendah Malaysia. Bina Pelan Strategik HEM selaras Visi KPM dan PPPM 2026–2035.`
  },
  {
    category: 'E: HAL EHWAL MURID (HEM)',
    title: 'HEM-4: Disiplin Pencegahan',
    prompt: `Rancang pengurusan disiplin kelas berfokus pencegahan dan bina sistem pemantauan disiplin berasaskan SSDM.`
  },
  {
    category: 'E: HAL EHWAL MURID (HEM)',
    title: 'HEM-12: Pengurusan Kes Buli',
    prompt: `Rancang pengurusan kes buli sekolah rendah secara menyeluruh merangkumi pencegahan, intervensi dan sokongan psikologi.`
  },
  {
    category: 'E: HAL EHWAL MURID (HEM)',
    title: 'HEM-11: Kesejahteraan Mental',
    prompt: `Rancang program kesejahteraan mental murid dan sistem mentor–mentee murid yang efektif.`
  },

  // BAHAGIAN F: KOKURIKULUM
  {
    category: 'F: KOKURIKULUM',
    title: 'KO-1: Pelan Strategik Kokurikulum',
    prompt: `Anda bertindak sebagai PK Kokurikulum. Bina Pelan Strategik Kokurikulum sekolah selaras PPPM 2026–2035.`
  },
  {
    category: 'F: KOKURIKULUM',
    title: 'KO-3: Kemenjadian Murid',
    prompt: `Rancang aktiviti kokurikulum berfokus kemenjadian murid dan bina KPI kokurikulum sekolah yang jelas.`
  },
  {
    category: 'F: KOKURIKULUM',
    title: 'KO-13: Kepimpinan Unit Beruniform',
    prompt: `Rancang pembangunan kepimpinan murid (unit beruniform) dengan fokus kepada jati diri dan disiplin.`
  },

  // BAHAGIAN G: PENDIDIKAN KHAS (PPKI)
  {
    category: 'G: PENDIDIKAN KHAS (PPKI)',
    title: 'PROMPT 131: Pelan RPI & PPKI',
    prompt: `Gunakan format profesional untuk membina pelan PPKI, RPI (Rancangan Pendidikan Individu), dan PBD khusus untuk MBPK (Murid Berkeperluan Pendidikan Khas).`
  },

  // BAHAGIAN H: PENGURUSAN SEKOLAH
  {
    category: 'H: PENGURUSAN SEKOLAH',
    title: 'PROMPT 151: Kepimpinan Instruksional',
    prompt: `Gunakan format profesional untuk membina hala tuju sekolah, PInTas, LADAP, dan pelan pengurusan risiko kepimpinan instruksional.`
  },

  // BAHAGIAN I: DIGITAL & AI
  {
    category: 'I: DIGITAL & AI',
    title: 'PROMPT 176: Literasi AI Beretika',
    prompt: `Gunakan format profesional untuk membina modul literasi digital, penggunaan AI beretika, PBD digital, dan strategi menangani jurang digital di sekolah.`
  }
];

export const RESOURCES: ResourceItem[] = [
  { name: 'E-Book: 100 Prompt Guru Malaysia', type: 'PDF', description: 'Himpunan prompt khusus untuk silibus kebangsaan.' },
  { name: 'Template RPH Digital AI', type: 'DOCX', description: 'Format RPH yang dioptimumkan untuk input AI.' },
  { name: 'Set Poster EduGrafik', type: 'PDF', description: 'Contoh poster dan infografik pendidikan hasil AI.' },
  { name: 'Template Laporan Program', type: 'DOCX', description: 'Draf laporan program sekolah yang kemas dan sistematik.' }
];

export const ICON_MAP: Record<string, any> = {
  Brain, BookOpen, Sparkles, FileText, Palette, Layout, ShieldCheck, Download, Terminal, Calculator, PenTool, Users
};
