import React from 'react';
import {
  Play,
  BookOpen,
  CheckSquare,
  BarChart3,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  BrainCircuit,
  Volume2,
} from 'lucide-react';
import { MathText } from './MathText';
import { ttsService } from '../services/ttsService';

interface HeroHomeProps {
  onStartLearning: () => void;
  onOpenMaterial: () => void;
  onOpenQuiz: () => void;
  onOpenProgress: () => void;
  onOpenGuide: () => void;
  onOpenReset: () => void;
  onPlayWelcomeVoice: () => void;
  completedSubsectionsCount: number;
  totalSubsectionsCount: number;
  bestScore?: number;
}

export const HeroHome: React.FC<HeroHomeProps> = ({
  onStartLearning,
  onOpenMaterial,
  onOpenQuiz,
  onOpenProgress,
  onOpenGuide,
  onOpenReset,
  onPlayWelcomeVoice,
  completedSubsectionsCount,
  totalSubsectionsCount,
  bestScore,
}) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 text-white shadow-xl p-6 sm:p-10 lg:p-14">
        {/* Background Math Geometry Grid Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="20" cy="20" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Titles & Subheadings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-red-100 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Program Resmi BSKAP 045/H/AN/2025 • Fase F</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-sm">
                MASTER <span className="text-amber-300">TRIGONOMETRI</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-red-100 italic">
                “Taklukkan Trigonometri, Kuasai Penalaran, Raih Skor TKA Terbaik!”
              </p>
              <p className="text-sm sm:text-base text-red-100/90 max-w-xl leading-relaxed">
                Persiapan TKA Matematika Tingkat Lanjut Kelas XII Fase F. Modul khusus penguasaan mendalam materi
                <strong className="text-white"> Jumlah dan Selisih Sudut Trigonometri</strong> berbasis penalaran HOTS dan penalaran matematis terstruktur.
              </p>
            </div>

            {/* Teacher Card */}
            <div className="inline-flex items-center gap-3.5 bg-black/25 backdrop-blur-md p-3 pr-5 rounded-2xl border border-white/15">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-400 p-0.5 shadow-md flex items-center justify-center text-2xl">
                👩‍🏫
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                  Guru Pembimbing & Narator
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white">
                  BU GURU WENNI
                </span>
                <span className="text-xs text-red-200 block">
                  Ahli Asesmen TKA Matematika Tingkat Lanjut SMA
                </span>
              </div>
              <button
                onClick={onPlayWelcomeVoice}
                className="ml-auto p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
                title="Dengarkan Sapaan Bu Guru Wenni"
                aria-label="Dengarkan Sapaan Bu Guru Wenni"
              >
                <Volume2 className="w-5 h-5 text-amber-300" />
              </button>
            </div>

            {/* 6 Mandatory Main Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* 1. MULAI BELAJAR */}
              <button
                onClick={onStartLearning}
                className="group flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-white text-red-700 hover:bg-amber-300 hover:text-slate-950 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>MULAI BELAJAR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* 2. PELAJARI MATERI */}
              <button
                onClick={onOpenMaterial}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-red-800/80 hover:bg-red-800 text-white font-bold text-sm sm:text-base border border-white/20 shadow-md hover:border-white/40 transition-all"
              >
                <BookOpen className="w-5 h-5 text-amber-300" />
                <span>PELAJARI MATERI</span>
              </button>

              {/* 3. LATIHAN 30 SOAL TKA */}
              <button
                onClick={onOpenQuiz}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <CheckSquare className="w-5 h-5 text-slate-950" />
                <span>LATIHAN 30 SOAL TKA</span>
              </button>

              {/* 4. PANTAU PROGRES BELAJAR */}
              <button
                onClick={onOpenProgress}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all"
              >
                <BarChart3 className="w-4 h-4 text-red-200" />
                <span>PANTAU PROGRES BELAJAR</span>
              </button>

              {/* 5. PANDUAN PENGGUNAAN */}
              <button
                onClick={onOpenGuide}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/15 transition-all"
              >
                <HelpCircle className="w-4 h-4 text-amber-300" />
                <span>PANDUAN PENGGUNAAN</span>
              </button>

              {/* 6. RESET PROGRESS */}
              <button
                onClick={onOpenReset}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-950/60 hover:bg-rose-950 text-rose-200 hover:text-white font-semibold text-xs sm:text-sm border border-rose-800/40 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>RESET PROGRESS</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Formula Showcase & Quick Progress Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Formula Cheat-Card with KaTeX and Character Dictation System */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 text-slate-900 border-2 border-amber-400/80 shadow-2xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                  <BrainCircuit className="w-4 h-4 text-red-600" />
                  Identitas Induk Wajib TKA
                </span>
                <button
                  onClick={() => {
                    const script =
                      'Perhatian, sistem dikte karakter untuk tiga identitas induk wajib TKA. Rumus pertama: fungsi sinus, buka kurung, huruf kapital A, tanda plus minus, huruf kapital B, tutup kurung, tanda sama dengan, fungsi sinus huruf kapital A, dikali, fungsi kosinus huruf kapital B, tanda plus minus, fungsi kosinus huruf kapital A, dikali, fungsi sinus huruf kapital B. Rumus kedua: fungsi kosinus, buka kurung, huruf kapital A, tanda plus minus, huruf kapital B, tutup kurung, tanda sama dengan, fungsi kosinus huruf kapital A, dikali, fungsi kosinus huruf kapital B, tanda minus plus, fungsi sinus huruf kapital A, dikali, fungsi sinus huruf kapital B. Rumus ketiga: fungsi tangen, buka kurung, huruf kapital A, tanda plus minus, huruf kapital B, tutup kurung, tanda sama dengan, garis pecahan: dengan pembilang, fungsi tangen huruf kapital A, tanda plus minus, fungsi tangen huruf kapital B; per, penyebut, angka satu, tanda minus plus, fungsi tangen huruf kapital A, dikali, fungsi tangen huruf kapital B. Selesai dikte karakter.';
                    ttsService.speak(script);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs transition-colors"
                  title="Dengarkan Dikte Karakter Seluruh Rumus Induk"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dikte Karakter</span>
                </button>
              </div>

              <div className="space-y-2 text-xs sm:text-sm font-medium">
                <div className="bg-red-50/70 p-2.5 rounded-xl border border-red-100">
                  <MathText content="$$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$$" />
                  <p className="text-[11px] text-red-700 text-center font-semibold mt-0.5">
                    Pola Selingan (Sin-Cos, Cos-Sin) • Tanda Tetap Sama
                  </p>
                </div>

                <div className="bg-rose-50/70 p-2.5 rounded-xl border border-rose-100">
                  <MathText content="$$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$$" />
                  <p className="text-[11px] text-rose-700 text-center font-semibold mt-0.5">
                    Pola Kembar (Cos-Cos, Sin-Sin) • Tanda Terbalik Berlawanan
                  </p>
                </div>

                <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200">
                  <MathText content="$$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$$" />
                  <p className="text-[11px] text-amber-800 text-center font-semibold mt-0.5">
                    Syarat Mutlak: Penyebut $1 \\mp \\tan A \\tan B \\neq 0$
                  </p>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-red-700">★ Sistem Dikte Karakter Aktif</span>
                <span className="font-bold text-slate-800">Cara Normal & Cara Cepat</span>
              </div>
            </div>

            {/* Quick Status Pill */}
            {bestScore !== undefined && bestScore > 0 && (
              <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400">Skor Simulasi Terakhir</span>
                    <h4 className="text-xl font-extrabold text-amber-300 font-mono">
                      {bestScore} <span className="text-xs text-slate-400">/ 800</span>
                    </h4>
                  </div>
                </div>
                <button
                  onClick={onOpenQuiz}
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors"
                >
                  Ulangi Latihan
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4 Pillar Pillars of Excellence */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-red-200 shadow-sm transition-all space-y-2">
          <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">5 Modul Berjenjang</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Mulai dari lingkaran satuan, penurunan geometri tali busur, sudut gabungan, pembuktian identitas, hingga taktik TKA.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-red-200 shadow-sm transition-all space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            <CheckSquare className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Tepat 30 Soal HOTS</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Distribusi presisi: 15 Pilihan Ganda (termasuk Kecukupan Data), 10 PG Kompleks, dan 5 Benar/Salah berstimulus kaya.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-red-200 shadow-sm transition-all space-y-2">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Dua Strategi Jawaban</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Setiap soal dilengkapi Cara Normal runtut dan Cara Cepat logis untuk melatih penalaran dan efisiensi waktu ujian.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-red-200 shadow-sm transition-all space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Skor Simulasi 200–800</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Penilaian terbobot kognitif Level 1, 2, dan 3 yang ditransformasikan secara adil ke rentang standar 200–800.
          </p>
        </div>
      </section>

      {/* Overview Study Map with Bu Guru Wenni */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Peta Pembelajaran Menuju Puncak TKA
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Ikuti alur terstruktur yang dirancang langsung oleh Bu Guru Wenni
            </p>
          </div>
          <button
            onClick={onOpenMaterial}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors shadow-xs"
          >
            <span>Buka Materi Pembelajaran</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Pengantar & Lingkaran',
              desc: 'Konversi radian, perbandingan, lingkaran satuan, dan tanda kuadran I-IV.',
            },
            {
              step: '02',
              title: 'Konsep Rumus Induk',
              desc: 'Penurunan geometris tali busur, bukti paritas, dan syarat penyebut tangen.',
            },
            {
              step: '03',
              title: 'Nilai Eksak Gabungan',
              desc: 'Kalkulasi eksak 15°, 75°, 105°, 165° dan manipulasi bentuk akar kuadrat.',
            },
            {
              step: '04',
              title: 'Penerapan & Bukti',
              desc: 'Segitiga siku-siku bantuan, identitas selisih kuadrat, dan penalaran kontekstual.',
            },
            {
              step: '05',
              title: 'Strategi TKA BSKAP',
              desc: 'Kecukupan data, eliminasi opsi tidak logis, uji nilai sudut khusus, dan manajemen waktu.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-red-50/50 hover:border-red-200 transition-all space-y-2"
            >
              <span className="font-mono text-xs font-black text-red-600 bg-red-100 px-2 py-0.5 rounded-md">
                MODUL {item.step}
              </span>
              <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
