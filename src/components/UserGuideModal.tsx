import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Volume2,
  CheckCircle2,
  CheckSquare,
  Sparkles,
  RotateCcw,
  HelpCircle,
  Play,
  Award,
} from 'lucide-react';
import { ttsService } from '../services/ttsService';

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (section: 'home' | 'materi' | 'quiz' | 'evaluasi' | 'progres') => void;
}

export const UserGuideModal: React.FC<UserGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const guideSteps = [
    {
      stepNumber: 1,
      title: '1. Cara Memulai Pembelajaran',
      icon: Play,
      desc: 'Klik tombol "MULAI BELAJAR" pada halaman depan. Aplikasi akan memandu kamu secara runtut dari modul pertama (Pengantar Trigonometri) sampai ke modul taktik TKA.',
      narration:
        'Langkah pertama: Untuk memulai belajar, klik tombol Mulai Belajar di halaman depan. Saya akan memandu kamu dari modul pertama pengantar trigonometri sampai taktik ujian.',
    },
    {
      stepNumber: 2,
      title: '2. Cara Mempelajari Materi',
      icon: BookOpen,
      desc: 'Setiap modul menyajikan penjelasan konseptual, rumus KaTeX, visualisasi lingkaran satuan interaktif, contoh soal bertahap, catatan kesalahan umum, dan ringkasan intisari.',
      narration:
        'Langkah kedua: Di menu materi, bacalah penjelasan konsep dan amati visualisasi lingkaran satuan. Buka contoh soal bertahap dan perhatikan catatan kesalahan umum agar kamu tidak terjebak.',
    },
    {
      stepNumber: 3,
      title: '3. Cara Menggunakan Navigasi Materi',
      icon: BookOpen,
      desc: 'Gunakan daftar isi di bilah samping atau tombol "Sebelumnya" dan "Selanjutnya" di bawah halaman materi untuk berpindah antar-submodul dengan lancar.',
      narration:
        'Langkah ketiga: Navigasi materi sangat mudah. Kamu bisa memilih submodul di daftar isi sebelah kiri atau menekan tombol Selanjutnya di bagian bawah halaman.',
    },
    {
      stepNumber: 4,
      title: '4. Cara Mendengarkan Narator Bu Guru Wenni',
      icon: Volume2,
      desc: 'Narator aktif secara otomatis setiap kali kamu berpindah materi atau membuka soal. Kamu dapat menjeda, melanjutkan, mengatur kecepatan (0.75x hingga 1.5x), atau membaca naskah narasi melalui bilah suara di sudut kanan bawah.',
      narration:
        'Langkah keempat: Fitur narator suara saya akan otomatis menjelaskan setiap halaman. Kamu bisa menjeda suara, mengulang, mengubah kecepatan, atau membaca teks narasi di bilah suara.',
    },
    {
      stepNumber: 5,
      title: '5. Cara Mengerjakan Soal Latihan TKA',
      icon: CheckSquare,
      desc: 'Buka menu "LATIHAN 30 SOAL TKA". Satu soal ditampilkan per layar dengan stimulus kontekstual berkualitas. Tersedia peta navigasi soal 1 sampai 30 dan pengingat waktu pengerjaan.',
      narration:
        'Langkah kelima: Pada simulasi 30 soal TKA, baca stimulus secara cermat. Satu soal tampil per layar lengkap dengan timer dan nomor soal untuk melompat antarsoal.',
    },
    {
      stepNumber: 6,
      title: '6. Cara Memilih Jawaban (3 Tipe Soal)',
      icon: CheckCircle2,
      desc: 'Pilihan Ganda Biasa: klik 1 opsi. Pilihan Ganda Kompleks: klik semua opsi yang benar. Benar atau Salah: tentukan status Benar atau Salah pada ketiga butir pernyataan.',
      narration:
        'Langkah keenam: Perhatikan jenis soal. Untuk pilihan ganda biasa pilih satu opsi. Untuk pilihan ganda kompleks pilih semua jawaban yang benar. Untuk benar salah, jawab ketiga pernyataan.',
    },
    {
      stepNumber: 7,
      title: '7. Cara Melihat Pembahasan Cara Normal & Cepat',
      icon: Sparkles,
      desc: 'Setelah mengumpulkan jawaban ujian, buka pembahasan soal. Setiap soal menyajikan DUA STRATEGI SEKALIGUS: Cara Normal sistematis dan Cara Cepat logis berlandaskan identitas efisien.',
      narration:
        'Langkah ketujuh: Setelah ujian selesai, buka pembahasan. Setiap soal langsung menampilkan Cara Normal langkah demi langkah dan Cara Cepat yang efisien.',
    },
    {
      stepNumber: 8,
      title: '8. Cara Memahami Hasil Evaluasi',
      icon: Award,
      desc: 'Halaman evaluasi membedah akurasi jawaban, persentase keberhasilan, breakdown per level kognitif (Level 1, 2, dan 3), serta analisis 5 domain kompetensi matematis.',
      narration:
        'Langkah kedelapan: Di halaman evaluasi, pelajari diagram kompetensi dan distribusi level kognitif untuk mengetahui letak kekuatan dan materi yang perlu diperbaiki.',
    },
    {
      stepNumber: 9,
      title: '9. Cara Melihat Skor Simulasi TKA (200–800)',
      icon: Award,
      desc: 'Skor akhir dikonversi ke skala standar TKA 200 hingga 800 dengan pembobotan tingkat kesulitan soal (Level 1 berbobot 1, Level 2 berbobot 2, Level 3 berbobot 3).',
      narration:
        'Langkah kesembilan: Skor simulasi dihitung transparan dengan skala 200 sampai 800. Semakin banyak soal penalaran level 3 yang kamu jawab benar, semakin tinggi skormu.',
    },
    {
      stepNumber: 10,
      title: '10. Cara Melanjutkan dari Progres Terakhir',
      icon: Sparkles,
      desc: 'Semua jawaban, status soal, materi yang sudah dibaca, dan skor tersimpan otomatis di perangkatmu (offline). Kamu bisa menutup browser dan melanjutkan kapan saja!',
      narration:
        'Langkah kesepuluh: Jangan khawatir kehilangan progres. Aplikasi ini otomatis menyimpan riwayat belajar secara offline di perangkatmu sehingga kamu bisa melanjutkan kapan saja.',
    },
    {
      stepNumber: 11,
      title: '11. Cara Mereset Progres Belajar',
      icon: RotateCcw,
      desc: 'Jika ingin memulai kembali simulasi dari nol, klik tombol "RESET PROGRESS". Konfirmasi 2 tahap akan memastikan datamu aman sebelum dihapus.',
      narration:
        'Langkah kesebelas: Bila kamu ingin mengulang latihan dari awal dengan status bersih, gunakan tombol Reset Progres dengan konfirmasi dua tahap yang aman.',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      const step = guideSteps[currentStep];
      ttsService.speak(step.narration);
    }
  }, [isOpen, currentStep]);

  if (!isOpen) return null;

  const current = guideSteps[currentStep];
  const IconComponent = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-2 border-red-600">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-amber-300 font-bold">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl">
                Panduan Penggunaan Master Trigonometri
              </h3>
              <p className="text-xs text-red-100">
                11 Langkah Efektif Belajar Mandiri Bersama Bu Guru Wenni
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              ttsService.stop();
              onClose();
            }}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Active Step Display */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Step Pill */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full border border-red-200">
              Langkah {currentStep + 1} dari {guideSteps.length}
            </span>
            <button
              onClick={() => ttsService.replay()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 px-3 py-1 rounded-lg border border-red-200 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Ulang</span>
            </button>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <IconComponent className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {current.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {current.desc}
              </p>
            </div>
          </div>

          {/* Teacher Callout */}
          <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-center gap-3">
            <span className="text-2xl shrink-0">👩‍🏫</span>
            <p className="italic">
              "{current.narration}"
            </p>
          </div>

          {/* Quick jump step dots */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            {guideSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentStep === idx
                    ? 'w-8 bg-red-600'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                title={`Ke Langkah ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {currentStep < guideSteps.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-extrabold shadow-sm transition-all"
            >
              <span>Lanjut ({currentStep + 2}/11)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                ttsService.stop();
                onClose();
                onNavigateToSection('materi');
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-extrabold shadow-md transition-all"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Selesai & Mulai Belajar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
