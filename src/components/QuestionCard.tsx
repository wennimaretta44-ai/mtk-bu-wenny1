import React from 'react';
import {
  Flag,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Layers,
  Check,
  X,
  Compass,
} from 'lucide-react';
import { Question, UserAnswer } from '../types';
import { MathText } from './MathText';
import { ttsService } from '../services/ttsService';

interface QuestionCardProps {
  question: Question;
  userAnswer?: UserAnswer;
  onSelectOption: (optionIndex: number) => void;
  onToggleComplexOption: (optionIndex: number) => void;
  onSetStatementAnswer: (statementId: string, answer: boolean) => void;
  onToggleFlag: () => void;
  isReviewMode?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userAnswer,
  onSelectOption,
  onToggleComplexOption,
  onSetStatementAnswer,
  onToggleFlag,
  isReviewMode = false,
}) => {
  const isFlagged = userAnswer?.isFlagged || false;
  const selectedOptionIndex = userAnswer?.selectedOptionIndex;
  const selectedComplexIndices = userAnswer?.selectedOptionIndices || [];
  const statementAnswers = userAnswer?.statementAnswers || {};

  const handleSpeakQuestion = () => {
    const rawNarration = `Soal nomor ${question.id}. Level ${question.level}. ${question.stimulus.title}. ${question.stimulus.context} ${question.questionText}`;
    ttsService.speak(rawNarration);
  };

  const handleSpeakDualExplanation = () => {
    const speech = `Pembahasan soal nomor ${question.id}. Cara Normal: ${question.explanationNormal.concept}. Langkah-langkah: ${question.explanationNormal.steps.join('. ')}. Kesimpulan: ${question.explanationNormal.conclusion}. Cara Cepat: ${question.explanationFast.clue}. Pola cepat: ${question.explanationFast.quickPattern}. Kesimpulan cepat: ${question.explanationFast.conclusion}`;
    ttsService.speak(speech);
  };

  const optionLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="space-y-6">
      {/* Question Header & Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm font-black px-3 py-1 rounded-xl bg-red-600 text-white shadow-xs">
            SOAL #{question.id}
          </span>

          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-xl border ${
              question.level === 3
                ? 'bg-purple-100 text-purple-800 border-purple-200'
                : question.level === 2
                ? 'bg-blue-100 text-blue-800 border-blue-200'
                : 'bg-emerald-100 text-emerald-800 border-emerald-200'
            }`}
          >
            Level {question.level}: {question.level === 3 ? 'Penalaran HOTS' : question.level === 2 ? 'Aplikasi' : 'Pemahaman'}
          </span>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
            {question.competency}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Read out loud button */}
          <button
            onClick={handleSpeakQuestion}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold border border-red-200 transition-colors"
            title="Dengarkan Naskah Soal & Stimulus"
          >
            <Volume2 className="w-4 h-4 text-red-600" />
            <span className="hidden sm:inline">Dengarkan Soal</span>
          </button>

          {/* Flag Toggle */}
          {!isReviewMode && (
            <button
              onClick={onToggleFlag}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                isFlagged
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
              }`}
            >
              <Flag className={`w-4 h-4 ${isFlagged ? 'fill-amber-500 text-amber-600' : ''}`} />
              <span>{isFlagged ? 'Ditandai Ragu' : 'Tandai Ragu'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Stimulus Card (Does NOT spoil answer) */}
      <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-700">
          <Compass className="w-4 h-4 text-red-600" />
          <span>STIMULUS: {question.stimulus.title}</span>
        </div>
        <div className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
          <MathText content={question.stimulus.context} />
        </div>
      </div>

      {/* Question Text */}
      <div className="bg-white p-5 rounded-2xl border-2 border-red-100 shadow-xs">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 leading-relaxed">
          <MathText content={question.questionText} />
        </h3>
        {question.type === 'pg_kompleks' && (
          <p className="mt-2 text-xs sm:text-sm font-bold text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 inline-block">
            ★ Pilihan Ganda Kompleks: Pilih semua jawaban yang benar (dapat lebih dari satu jawaban).
          </p>
        )}
      </div>

      {/* Options Rendering */}
      {/* 1. PG Biasa & PG Kecukupan Data */}
      {(question.type === 'pg_biasa' || question.type === 'pg_kecukupan') && question.options && (
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            const isSelected = selectedOptionIndex === idx;
            const isCorrect = isReviewMode && question.correctOptionIndex === idx;
            const isWrongSelected = isReviewMode && isSelected && !isCorrect;

            return (
              <button
                key={idx}
                disabled={isReviewMode}
                onClick={() => onSelectOption(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                  isReviewMode
                    ? isCorrect
                      ? 'bg-green-50 border-green-500 text-green-950 shadow-sm'
                      : isWrongSelected
                      ? 'bg-rose-50 border-rose-500 text-rose-950'
                      : 'bg-white border-slate-200 text-slate-600 opacity-60'
                    : isSelected
                    ? 'bg-red-50/80 border-red-600 text-red-950 shadow-md ring-2 ring-red-500/20'
                    : 'bg-white border-slate-200 hover:border-red-300 hover:bg-slate-50 text-slate-800'
                }`}
              >
                {/* Option Letter Badge */}
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                    isReviewMode
                      ? isCorrect
                        ? 'bg-green-600 text-white'
                        : isWrongSelected
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                      : isSelected
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {optionLabels[idx]}
                </span>

                <div className="flex-1 text-base sm:text-lg lg:text-xl font-medium pt-0.5">
                  <MathText content={opt} />
                </div>

                {isReviewMode && isCorrect && (
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 self-center" />
                )}
                {isReviewMode && isWrongSelected && (
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0 self-center" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* 2. PG Kompleks */}
      {question.type === 'pg_kompleks' && question.options && (
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            const isSelected = selectedComplexIndices.includes(idx);
            const isKey = question.correctOptionIndices?.includes(idx);
            const isCorrectSelected = isReviewMode && isSelected && isKey;
            const isMissedKey = isReviewMode && !isSelected && isKey;
            const isWrongSelected = isReviewMode && isSelected && !isKey;

            return (
              <button
                key={idx}
                disabled={isReviewMode}
                onClick={() => onToggleComplexOption(idx)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${
                  isReviewMode
                    ? isCorrectSelected
                      ? 'bg-green-50 border-green-500 text-green-950 shadow-sm'
                      : isMissedKey
                      ? 'bg-amber-50 border-amber-400 text-amber-950 border-dashed'
                      : isWrongSelected
                      ? 'bg-rose-50 border-rose-500 text-rose-950'
                      : 'bg-white border-slate-200 text-slate-600 opacity-60'
                    : isSelected
                    ? 'bg-red-50/80 border-red-600 text-red-950 shadow-md ring-2 ring-red-500/20'
                    : 'bg-white border-slate-200 hover:border-red-300 hover:bg-slate-50 text-slate-800'
                }`}
              >
                {/* Checkbox box */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    isReviewMode
                      ? isKey
                        ? 'bg-green-600 text-white'
                        : isWrongSelected
                        ? 'bg-rose-600 text-white'
                        : 'border border-slate-300 bg-white'
                      : isSelected
                      ? 'bg-red-600 text-white'
                      : 'border-2 border-slate-300 bg-white'
                  }`}
                >
                  {isReviewMode ? (
                    isKey ? <Check className="w-4 h-4 stroke-[3]" /> : isWrongSelected ? <X className="w-4 h-4" /> : null
                  ) : isSelected ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : null}
                </div>

                <div className="flex-1 text-base sm:text-lg lg:text-xl font-medium pt-0.5">
                  <span className="font-bold text-red-700 mr-2">{optionLabels[idx]}.</span>
                  <MathText content={opt} />
                </div>

                {isReviewMode && isMissedKey && (
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-1 rounded-md shrink-0 self-center">
                    Harus Dipilih
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* 3. Benar / Salah */}
      {question.type === 'benar_salah' && question.statements && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-xs">
            <div className="bg-slate-100 p-3 text-xs font-bold text-slate-700 uppercase tracking-wider grid grid-cols-12 gap-2 items-center">
              <span className="col-span-8 sm:col-span-9 pl-2">Pernyataan Analisis</span>
              <span className="col-span-4 sm:col-span-3 text-center">Keputusan</span>
            </div>

            <div className="divide-y divide-slate-200 bg-white">
              {question.statements.map((st, idx) => {
                const userChoice = statementAnswers[st.id];
                const isCorrect = isReviewMode && userChoice === st.correctAnswer;

                return (
                  <div
                    key={st.id}
                    className={`p-4 sm:p-5 grid grid-cols-12 gap-3 items-center ${
                      isReviewMode
                        ? isCorrect
                          ? 'bg-green-50/50'
                          : 'bg-rose-50/50'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="col-span-8 sm:col-span-9 space-y-1">
                      <span className="text-xs font-bold text-red-600">Pernyataan #{idx + 1}</span>
                      <p className="text-base sm:text-lg text-slate-900 font-medium">
                        <MathText content={st.text} />
                      </p>
                      {isReviewMode && (
                        <p className="text-xs font-bold text-slate-600">
                          Kunci Benar:{' '}
                          <span className={st.correctAnswer ? 'text-green-700 font-black' : 'text-rose-700 font-black'}>
                            {st.correctAnswer ? 'BENAR' : 'SALAH'}
                          </span>
                        </p>
                      )}
                    </div>

                    <div className="col-span-4 sm:col-span-3 flex justify-center gap-1.5 sm:gap-2">
                      {/* Button Benar */}
                      <button
                        type="button"
                        disabled={isReviewMode}
                        onClick={() => onSetStatementAnswer(st.id, true)}
                        className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                          userChoice === true
                            ? 'bg-green-600 text-white shadow-sm ring-2 ring-green-500/30'
                            : 'bg-slate-100 hover:bg-green-50 hover:text-green-700 text-slate-700'
                        }`}
                      >
                        Benar
                      </button>

                      {/* Button Salah */}
                      <button
                        type="button"
                        disabled={isReviewMode}
                        onClick={() => onSetStatementAnswer(st.id, false)}
                        className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                          userChoice === false
                            ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-500/30'
                            : 'bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700'
                        }`}
                      >
                        Salah
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* DUAL STRATEGY EXPLANATION (When in Review Mode) */}
      {isReviewMode && (
        <div className="mt-8 pt-6 border-t-2 border-dashed border-red-200 space-y-5 animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-red-600 text-white p-4 rounded-2xl shadow-md">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-amber-300" />
              <div>
                <h4 className="font-extrabold text-lg sm:text-xl">
                  Pembahasan Dua Strategi Bu Guru Wenni
                </h4>
                <p className="text-xs text-red-100">
                  Pembahasan Cara Normal (Runtut) & Cara Cepat (Trik Efisien)
                </p>
              </div>
            </div>
            <button
              onClick={handleSpeakDualExplanation}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-red-700 hover:bg-amber-300 hover:text-slate-950 font-bold text-xs shadow-xs transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Pembahasan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* 1. PEMBAHASAN CARA NORMAL */}
            <div className="bg-white rounded-2xl p-5 border-2 border-red-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-red-100">
                <span className="text-xs font-black uppercase text-red-700 tracking-wider">
                  1. PEMBAHASAN CARA NORMAL
                </span>
                <span className="text-[11px] font-semibold text-slate-500">Sistematis & Runtut</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                <p>
                  <strong className="text-slate-950">Informasi Diketahui:</strong>{' '}
                  <MathText content={question.explanationNormal.known} as="span" />
                </p>
                <p>
                  <strong className="text-slate-950">Hal Ditanyakan:</strong>{' '}
                  <MathText content={question.explanationNormal.target} as="span" />
                </p>
                <p>
                  <strong className="text-slate-950">Konsep/Rumus:</strong>{' '}
                  <MathText content={question.explanationNormal.concept} as="span" />
                </p>

                <div className="pt-2">
                  <strong className="text-slate-950 block mb-1">Langkah Penyelesaian:</strong>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {question.explanationNormal.steps.map((st, i) => (
                      <li key={i}>
                        <MathText content={st} as="span" />
                      </li>
                    ))}
                  </ol>
                </div>

                {question.explanationNormal.commonMistake && (
                  <p className="text-xs text-rose-800 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                    <strong>Kesalahan Umum:</strong> {question.explanationNormal.commonMistake}
                  </p>
                )}

                <div className="p-3 bg-red-50 rounded-xl border border-red-200 font-bold text-red-900">
                  <MathText content={`Kesimpulan: ${question.explanationNormal.conclusion}`} />
                </div>
              </div>
            </div>

            {/* 2. PEMBAHASAN CARA CEPAT */}
            <div className="bg-amber-50/70 rounded-2xl p-5 border-2 border-amber-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                <span className="text-xs font-black uppercase text-amber-900 tracking-wider">
                  2. PEMBAHASAN CARA CEPAT
                </span>
                <span className="text-[11px] font-bold text-amber-800">Trik & Pola TKA</span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                <p>
                  <strong className="text-amber-950">Petunjuk Utama (Clue):</strong>{' '}
                  <MathText content={question.explanationFast.clue} as="span" />
                </p>
                <p>
                  <strong className="text-amber-950">Pola Cepat / Identitas:</strong>{' '}
                  <MathText content={question.explanationFast.quickPattern} as="span" />
                </p>

                <div className="pt-2">
                  <strong className="text-amber-950 block mb-1">Langkah Kilat:</strong>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 leading-relaxed bg-white p-3 rounded-xl border border-amber-200">
                    {question.explanationFast.steps.map((st, i) => (
                      <li key={i}>
                        <MathText content={st} as="span" />
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-700 bg-white/80 p-2.5 rounded-lg border border-amber-200">
                  <strong>Justifikasi Validitas:</strong> {question.explanationFast.justification}
                </p>

                <div className="p-3 bg-amber-200/60 rounded-xl border border-amber-300 font-extrabold text-amber-950">
                  <MathText content={`Hasil Akhir: ${question.explanationFast.conclusion}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
