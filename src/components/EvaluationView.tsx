import React, { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  RotateCcw,
  BarChart3,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Volume2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EvaluationResult, Question, UserAnswer } from '../types';
import { QuestionCard } from './QuestionCard';
import { ttsService } from '../services/ttsService';

interface EvaluationViewProps {
  result: EvaluationResult;
  questions: Question[];
  quizAnswers: Record<number, UserAnswer>;
  onRetakeQuiz: () => void;
  onGoToMaterial: () => void;
  onGoToProgress: () => void;
  onOpenReset: () => void;
  autoNarrate?: boolean;
}

export const EvaluationView: React.FC<EvaluationViewProps> = ({
  result,
  questions,
  quizAnswers,
  onRetakeQuiz,
  onGoToMaterial,
  onGoToProgress,
  onOpenReset,
  autoNarrate = true,
}) => {
  const [selectedReviewQuestionId, setSelectedReviewQuestionId] = useState<number | null>(null);
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  useEffect(() => {
    // Launch celebratory confetti if score is high
    if (result.totalScore >= 550) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#dc2626', '#f59e0b', '#ffffff', '#e11d48'],
        });
      } catch {
        // ignore confetti errors
      }
    }

    if (autoNarrate) {
      const speech = `Selamat! Kamu telah menyelesaikan seluruh tiga puluh soal simulasi TKA Matematika Tingkat Lanjut. Skor simulasi TKA kamu adalah ${result.totalScore} dari batas maksimum 800. Persentase keberhasilan ${result.percentage} persen. ${result.feedback.summary}`;
      ttsService.speak(speech);
    }
  }, [result, autoNarrate]);

  const activeQuestion = selectedReviewQuestionId
    ? questions.find((q) => q.id === selectedReviewQuestionId)
    : questions[0];

  return (
    <div className="space-y-10 pb-20">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-red-600 via-rose-700 to-red-900 text-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-red-100 border border-white/20">
            <Award className="w-4 h-4 text-amber-300" />
            <span>HASIL RESMI SIMULASI TKA MATEMATIKA TINGKAT LANJUT</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                HASIL EVALUASI TKA
              </h1>
              <p className="text-base sm:text-lg text-red-100 font-semibold mt-1">
                Aplikasi: <span className="text-white font-extrabold">MASTER TRIGONOMETRI</span> • Pengajar:{' '}
                <span className="text-amber-300 font-bold">BU GURU WENNI</span>
              </p>
              <p className="text-xs sm:text-sm text-red-200 mt-0.5">
                Diselesaikan pada: {result.completedAt}
              </p>
            </div>

            {/* Big Score Card (200 - 800) */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border-2 border-amber-400/90 text-center shadow-lg min-w-[200px]">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 block">
                SKOR SIMULASI TKA
              </span>
              <div className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight my-1">
                {result.totalScore}
              </div>
              <div className="text-xs text-red-200 font-semibold">
                Rentang Standar: <span className="text-white">200 – 800</span>
              </div>
              <div className="mt-2 text-xs font-black text-slate-950 bg-amber-400 px-3 py-1 rounded-full inline-block shadow-xs">
                {result.feedback.badgeTitle}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Mandatory Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* 1. LIHAT PEMBAHASAN LENGKAP */}
        <button
          onClick={() => {
            setIsReviewOpen(!isReviewOpen);
            if (!isReviewOpen && !selectedReviewQuestionId) {
              setSelectedReviewQuestionId(1);
            }
          }}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{isReviewOpen ? 'Tutup Pembahasan' : 'LIHAT PEMBAHASAN LENGKAP'}</span>
          {isReviewOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* 2. ULANGI LATIHAN */}
        <button
          onClick={onRetakeQuiz}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>ULANGI LATIHAN</span>
        </button>

        {/* 3. KEMBALI KE MATERI */}
        <button
          onClick={onGoToMaterial}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
        >
          <BookOpen className="w-4 h-4 text-red-300" />
          <span>KEMBALI KE MATERI</span>
        </button>

        {/* 4. LIHAT PROGRES */}
        <button
          onClick={onGoToProgress}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border-2 border-slate-200 transition-all"
        >
          <BarChart3 className="w-4 h-4 text-red-600" />
          <span>LIHAT PROGRES</span>
        </button>

        {/* 5. RESET PROGRESS */}
        <button
          onClick={onOpenReset}
          className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs sm:text-sm border border-rose-200 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>RESET PROGRESS</span>
        </button>
      </div>

      {/* Overview Metric Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-500">Persentase Capaian</span>
          <div className="text-3xl font-black text-slate-900 font-mono">
            {result.percentage}%
          </div>
          <span className="text-[11px] text-green-700 font-semibold block">
            {result.feedback.predicate}
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-green-100 shadow-xs space-y-1">
          <span className="text-xs font-bold text-green-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Jawaban Benar
          </span>
          <div className="text-3xl font-black text-green-700 font-mono">
            {result.correctCount} <span className="text-sm text-slate-400">/ 30</span>
          </div>
          <span className="text-[11px] text-slate-500">Termasuk parsial kompleks</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-rose-100 shadow-xs space-y-1">
          <span className="text-xs font-bold text-rose-700 flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5 text-rose-600" /> Jawaban Keliru
          </span>
          <div className="text-3xl font-black text-rose-600 font-mono">
            {result.incorrectCount} <span className="text-sm text-slate-400">soal</span>
          </div>
          <span className="text-[11px] text-slate-500">Dapat diperbaiki di materi</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs space-y-1">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" /> Tidak Dijawab
          </span>
          <div className="text-3xl font-black text-slate-600 font-mono">
            {result.unansweredCount} <span className="text-sm text-slate-400">soal</span>
          </div>
          <span className="text-[11px] text-slate-500">Skor nol untuk nomor kosong</span>
        </div>
      </div>

      {/* Diagnosis & Recommendations from Bu Guru Wenni */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-red-100 shadow-sm space-y-6">
        <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-700 text-white flex items-center justify-center text-3xl shrink-0 shadow-md">
            👩‍🏫
          </div>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Evaluasi & Catatan Khusus Bu Guru Wenni
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              "{result.feedback.summary}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-green-50/70 p-5 rounded-2xl border border-green-200 space-y-2">
            <h4 className="font-extrabold text-sm text-green-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Kekuatan Kompetensi Kamu
            </h4>
            <ul className="text-xs sm:text-sm text-green-950 space-y-1.5 list-disc list-inside">
              {result.feedback.strengths.map((s, idx) => (
                <li key={idx} className="leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-200 space-y-2">
            <h4 className="font-extrabold text-sm text-rose-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-rose-600" />
              Aspek yang Perlu Ditingkatkan
            </h4>
            <ul className="text-xs sm:text-sm text-rose-950 space-y-1.5 list-disc list-inside">
              {result.feedback.improvements.map((imp, idx) => (
                <li key={idx} className="leading-relaxed">
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Charts & Cognitive Levels Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cognitive Levels */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-red-600" />
              Performa Berdasarkan Level Kognitif
            </h3>
            <span className="text-xs text-slate-500">Bobot 1, 2, 3</span>
          </div>

          <div className="space-y-4">
            {result.levelBreakdown.map((lvl) => (
              <div key={lvl.level} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800">
                    Level {lvl.level}:{' '}
                    {lvl.level === 3
                      ? 'Penalaran HOTS (18 Soal)'
                      : lvl.level === 2
                      ? 'Aplikasi (9 Soal)'
                      : 'Pemahaman Dasar (3 Soal)'}
                  </span>
                  <span className="font-mono text-red-700">{lvl.percentage}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      lvl.level === 3
                        ? 'bg-purple-600'
                        : lvl.level === 2
                        ? 'bg-red-600'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${lvl.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competency Domains */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-red-600" />
              5 Domain Kompetensi BSKAP 2025
            </h3>
            <span className="text-xs text-slate-500">TKA Fase F</span>
          </div>

          <div className="space-y-3">
            {result.competencyBreakdown.map((comp) => (
              <div key={comp.competency} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">{comp.competency}</span>
                  <span className="font-mono text-slate-900">{comp.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-600 to-rose-600"
                    style={{ width: `${comp.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Review Drawer / Section */}
      {isReviewOpen && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-red-500 shadow-lg space-y-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Katalog Pembahasan 30 Soal TKA
              </h2>
              <p className="text-sm text-slate-600">
                Pilih nomor soal untuk menelaah Pembahasan Cara Normal & Cara Cepat
              </p>
            </div>

            {/* Quick Question Picker Grid */}
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {questions.map((q) => {
                const isSelected = (selectedReviewQuestionId || 1) === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setSelectedReviewQuestionId(q.id)}
                    className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>

          {activeQuestion && (
            <QuestionCard
              question={activeQuestion}
              userAnswer={quizAnswers[activeQuestion.id]}
              onSelectOption={() => {}}
              onToggleComplexOption={() => {}}
              onSetStatementAnswer={() => {}}
              onToggleFlag={() => {}}
              isReviewMode={true}
            />
          )}
        </section>
      )}
    </div>
  );
};
