import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  LayoutGrid,
  CheckCircle2,
  AlertCircle,
  Flag,
  Send,
  X,
  Sparkles,
} from 'lucide-react';
import { Question, UserAnswer } from '../types';
import { QuestionCard } from './QuestionCard';
import { ttsService } from '../services/ttsService';

interface QuizViewProps {
  questions: Question[];
  quizAnswers: Record<number, UserAnswer>;
  timerSeconds: number;
  onUpdateAnswers: (answers: Record<number, UserAnswer>) => void;
  onSubmitQuiz: () => void;
  autoNarrate?: boolean;
}

export const QuizView: React.FC<QuizViewProps> = ({
  questions,
  quizAnswers,
  timerSeconds,
  onUpdateAnswers,
  onSubmitQuiz,
  autoNarrate = true,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);

  const activeQuestion = questions[currentQuestionIndex] || questions[0];
  const activeAnswer = quizAnswers[activeQuestion.id];

  // Auto-narrate on question change
  useEffect(() => {
    if (autoNarrate && activeQuestion) {
      const speech = `Soal nomor ${activeQuestion.id}. ${activeQuestion.stimulus.title}. ${activeQuestion.stimulus.context} ${activeQuestion.questionText}`;
      ttsService.speak(speech);
    }
  }, [activeQuestion.id, autoNarrate]);

  // Handle single option selection (pg_biasa, pg_kecukupan)
  const handleSelectOption = (idx: number) => {
    const updated = {
      ...quizAnswers,
      [activeQuestion.id]: {
        ...activeAnswer,
        questionId: activeQuestion.id,
        selectedOptionIndex: idx,
      },
    };
    onUpdateAnswers(updated);
  };

  // Handle complex option toggle (pg_kompleks)
  const handleToggleComplexOption = (idx: number) => {
    const currentList = activeAnswer?.selectedOptionIndices || [];
    const exists = currentList.includes(idx);
    const nextList = exists ? currentList.filter((i) => i !== idx) : [...currentList, idx];

    const updated = {
      ...quizAnswers,
      [activeQuestion.id]: {
        ...activeAnswer,
        questionId: activeQuestion.id,
        selectedOptionIndices: nextList,
      },
    };
    onUpdateAnswers(updated);
  };

  // Handle statement answer (benar_salah)
  const handleSetStatementAnswer = (statementId: string, answer: boolean) => {
    const currentDict = activeAnswer?.statementAnswers || {};
    const nextDict = { ...currentDict, [statementId]: answer };

    const updated = {
      ...quizAnswers,
      [activeQuestion.id]: {
        ...activeAnswer,
        questionId: activeQuestion.id,
        statementAnswers: nextDict,
      },
    };
    onUpdateAnswers(updated);
  };

  // Handle flag toggle
  const handleToggleFlag = () => {
    const currentFlag = activeAnswer?.isFlagged || false;
    const updated = {
      ...quizAnswers,
      [activeQuestion.id]: {
        ...activeAnswer,
        questionId: activeQuestion.id,
        isFlagged: !currentFlag,
      },
    };
    onUpdateAnswers(updated);
  };

  // Question Answered Status Helper
  const isQuestionAnswered = (q: Question): boolean => {
    const ans = quizAnswers[q.id];
    if (!ans) return false;
    if (q.type === 'pg_biasa' || q.type === 'pg_kecukupan') {
      return ans.selectedOptionIndex !== undefined;
    }
    if (q.type === 'pg_kompleks') {
      return (ans.selectedOptionIndices?.length || 0) > 0;
    }
    if (q.type === 'benar_salah') {
      const keys = Object.keys(ans.statementAnswers || {});
      return keys.length === (q.statements?.length || 3);
    }
    return false;
  };

  const answeredCount = questions.filter(isQuestionAnswered).length;
  const unansweredCount = questions.length - answeredCount;
  const flaggedCount = Object.values(quizAnswers).filter((a) => a.isFlagged).length;

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Sticky Bar: Progress, Timer, Grid Trigger */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 sticky top-20 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsGridOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-colors"
          >
            <LayoutGrid className="w-4 h-4 text-red-600" />
            <span>Peta Soal ({answeredCount}/30)</span>
          </button>

          {flaggedCount > 0 && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
              <Flag className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
              <span>{flaggedCount} Ragu</span>
            </span>
          )}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 font-mono text-base sm:text-lg font-bold text-slate-800 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
          <Clock className="w-4 h-4 text-red-600 animate-pulse" />
          <span>{formatTime(timerSeconds)}</span>
        </div>

        {/* Submit Button Trigger */}
        <button
          onClick={() => setIsConfirmSubmitOpen(true)}
          className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Kumpulkan Jawaban</span>
        </button>
      </div>

      {/* Main Single-Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-200 shadow-sm">
        <QuestionCard
          question={activeQuestion}
          userAnswer={activeAnswer}
          onSelectOption={handleSelectOption}
          onToggleComplexOption={handleToggleComplexOption}
          onSetStatementAnswer={handleSetStatementAnswer}
          onToggleFlag={handleToggleFlag}
          isReviewMode={false}
        />

        {/* Bottom Nav: Prev, Next, Jump */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Soal Sebelumnya</span>
          </button>

          <span className="text-xs sm:text-sm font-bold text-slate-500">
            Nomor {currentQuestionIndex + 1} dari 30
          </span>

          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-extrabold shadow-sm transition-all"
            >
              <span>Soal Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setIsConfirmSubmitOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-black shadow-md transition-all"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Selesai & Kumpulkan</span>
            </button>
          )}
        </div>
      </div>

      {/* PETA SOAL MODAL (1 - 30 GRID) */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border-2 border-red-600 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-red-600" />
                <h3 className="font-extrabold text-slate-900 text-lg">Peta 30 Soal TKA</h3>
              </div>
              <button
                onClick={() => setIsGridOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid 1-30 */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5 max-h-[60vh] overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const isAnswered = isQuestionAnswered(q);
                const isFlagged = quizAnswers[q.id]?.isFlagged;
                const isCurrent = idx === currentQuestionIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setIsGridOpen(false);
                    }}
                    className={`relative h-12 rounded-xl font-mono text-sm font-extrabold border-2 transition-all flex flex-col items-center justify-center ${
                      isCurrent
                        ? 'border-red-600 ring-2 ring-red-500/30'
                        : isFlagged
                        ? 'border-amber-400 bg-amber-50 text-amber-900'
                        : isAnswered
                        ? 'border-green-600 bg-green-50 text-green-900'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>{q.id}</span>
                    {isFlagged && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500"></span>
                    )}
                    {isAnswered && !isFlagged && (
                      <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-green-100 border border-green-600"></span> Sudah Dijawab ({answeredCount})
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-400"></span> Ragu-ragu ({flaggedCount})
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-300"></span> Belum Dijawab ({unansweredCount})
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION BEFORE SUBMISSION MODAL */}
      {isConfirmSubmitOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-red-600 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-extrabold text-slate-900 text-xl">
                Kumpulkan Jawaban Simulasi TKA?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Periksa kembali ringkasan jawaban sebelum Bu Guru Wenni memproses skor simulasi TKA:
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-2 gap-3 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-green-50 border border-green-200 text-green-900 font-bold">
                <span className="block text-2xl font-black">{answeredCount}</span>
                <span>Sudah Dijawab</span>
              </div>
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 font-bold">
                <span className="block text-2xl font-black">{unansweredCount}</span>
                <span>Belum Dijawab</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200 text-center font-medium">
                Masih ada {unansweredCount} nomor yang belum kamu jawab. Soal yang belum dijawab bernilai 0 pada sistem penskalaan.
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsConfirmSubmitOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold transition-colors"
              >
                Cek Ulang
              </button>
              <button
                onClick={() => {
                  setIsConfirmSubmitOpen(false);
                  onSubmitQuiz();
                }}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-extrabold shadow-md transition-colors"
              >
                Kumpulkan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
