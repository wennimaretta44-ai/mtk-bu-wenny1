import React from 'react';
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Award,
  RotateCcw,
  Play,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react';
import { UserProgress, EvaluationResult } from '../types';
import { materialsData } from '../data/materialsData';

interface ProgressDashboardProps {
  progress: UserProgress;
  onContinueMaterial: () => void;
  onGoToQuiz: () => void;
  onOpenReset: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  onContinueMaterial,
  onGoToQuiz,
  onOpenReset,
}) => {
  // Count total subsections
  let totalSubsections = 0;
  materialsData.forEach((s) => {
    totalSubsections += s.subsections.length;
  });

  const completedCount = progress.completedMaterialSubIds.length;
  const materialPct = Math.round((completedCount / totalSubsections) * 100);

  const latestResult: EvaluationResult | null = progress.evaluationResult;
  const answeredQuizCount = Object.keys(progress.quizAnswers).length;

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 text-white p-6 sm:p-8 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-red-100">
            <BarChart3 className="w-3.5 h-3.5 text-amber-300" />
            <span>DASBOR MONITORING PESERTA DIDIK</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            Pantau Progres Belajar Mandiri
          </h1>
          <p className="text-xs sm:text-sm text-red-100">
            Penyimpanan otomatis offline aktif di perangkat ini • Pembimbing: Bu Guru Wenni
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onContinueMaterial}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-red-700 font-extrabold text-xs sm:text-sm shadow-md hover:bg-amber-300 hover:text-slate-950 transition-colors"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Lanjutkan Materi</span>
          </button>
          <button
            onClick={onOpenReset}
            className="p-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-950 text-rose-200 border border-rose-800 transition-colors"
            title="Reset Seluruh Progres"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Materi Progress */}
        <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Progres Teori & Konsep
            </span>
            <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
            {materialPct}%
          </div>
          <p className="text-xs text-slate-600">
            {completedCount} dari {totalSubsections} submodul telah dipelajari
          </p>
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-red-600 transition-all duration-500"
              style={{ width: `${materialPct}%` }}
            />
          </div>
        </div>

        {/* Skor Simulasi TKA */}
        <div className="bg-white p-6 rounded-3xl border-2 border-amber-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Skor Simulasi TKA (200–800)
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
            {latestResult ? latestResult.totalScore : '-'}
            <span className="text-sm font-normal text-slate-400"> / 800</span>
          </div>
          <p className="text-xs text-slate-600">
            {latestResult
              ? `${latestResult.feedback.predicate}`
              : 'Belum menyelesaikan ujian'}
          </p>
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-amber-500 transition-all duration-500"
              style={{
                width: latestResult
                  ? `${Math.max(0, Math.min(100, ((latestResult.totalScore - 200) / 600) * 100))}%`
                  : '0%',
              }}
            />
          </div>
        </div>

        {/* Latihan 30 Soal */}
        <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Pengerjaan Soal Ujian
            </span>
            <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
            {answeredQuizCount} <span className="text-sm font-normal text-slate-400">/ 30</span>
          </div>
          <p className="text-xs text-slate-600">
            {progress.isQuizSubmitted ? 'Status: Selesai & Terevaluasi' : 'Status: Sedang Berlangsung'}
          </p>
          <button
            onClick={onGoToQuiz}
            className="w-full mt-2 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors"
          >
            {progress.isQuizSubmitted ? 'Ulangi / Buka Evaluasi' : 'Lanjutkan Pengerjaan'}
          </button>
        </div>
      </div>

      {/* Module Completion Checklist */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-5">
        <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-red-600" />
          Rincian Ketuntasan Materi per Modul
        </h3>

        <div className="space-y-4">
          {materialsData.map((sec) => {
            const secSubs = sec.subsections;
            const secCompleted = secSubs.filter((s) =>
              progress.completedMaterialSubIds.includes(s.id)
            ).length;
            const secPct = Math.round((secCompleted / secSubs.length) * 100);

            return (
              <div
                key={sec.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-black uppercase text-red-700">
                      Modul 0{sec.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {sec.title}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-slate-700 font-mono">
                    {secCompleted} / {secSubs.length} Submateri ({secPct}%)
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-green-600 transition-all duration-300"
                    style={{ width: `${secPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
