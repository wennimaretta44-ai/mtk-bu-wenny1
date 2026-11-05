import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Volume2,
  Layers,
  ArrowRight,
  Eye,
  Check,
} from 'lucide-react';
import { MaterialSection, MaterialSubSection } from '../types';
import { materialsData } from '../data/materialsData';
import { MathText } from './MathText';
import { UnitCircleDiagram } from './UnitCircleDiagram';
import { FormulaBox } from './FormulaBox';
import { ttsService } from '../services/ttsService';

interface MaterialViewerProps {
  activeSectionId: number;
  activeSubId: string;
  completedSubIds: string[];
  onSelectSubSection: (sectionId: number, subId: string) => void;
  onToggleCompleteSubSection: (subId: string) => void;
  onGoToQuiz: () => void;
  autoNarrate?: boolean;
}

export const MaterialViewer: React.FC<MaterialViewerProps> = ({
  activeSectionId,
  activeSubId,
  completedSubIds,
  onSelectSubSection,
  onToggleCompleteSubSection,
  onGoToQuiz,
  autoNarrate = true,
}) => {
  const [showWorkedSolution, setShowWorkedSolution] = useState<boolean>(false);

  // Find active section and subsection
  const currentSection =
    materialsData.find((s) => s.id === activeSectionId) || materialsData[0];
  const currentSub: MaterialSubSection =
    currentSection.subsections.find((sub) => sub.id === activeSubId) ||
    currentSection.subsections[0];

  // Flat list for next/prev navigation
  const allSubsections: { sectionId: number; sub: MaterialSubSection }[] = [];
  materialsData.forEach((sec) => {
    sec.subsections.forEach((sub) => {
      allSubsections.push({ sectionId: sec.id, sub });
    });
  });

  const currentIndex = allSubsections.findIndex((item) => item.sub.id === currentSub.id);
  const prevSub = currentIndex > 0 ? allSubsections[currentIndex - 1] : null;
  const nextSub = currentIndex < allSubsections.length - 1 ? allSubsections[currentIndex + 1] : null;

  // Trigger audio narration when subsection changes
  useEffect(() => {
    setShowWorkedSolution(false);
    if (autoNarrate && currentSub.narration) {
      ttsService.speak(currentSub.narration);
    }
  }, [currentSub.id, autoNarrate]);

  const isCompleted = completedSubIds.includes(currentSub.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-16">
      {/* Sidebar: Table of Contents & Module List */}
      <aside aria-label="Daftar Modul Pembelajaran" className="lg:col-span-4 space-y-4">
        <div className="bg-white rounded-3xl p-5 border-2 border-slate-200 shadow-sm sticky top-24 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Modul Pembelajaran</h3>
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
              {completedSubIds.length} / {allSubsections.length} Selesai
            </span>
          </div>

          {/* Module Sections Accordion */}
          <div className="space-y-3 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
            {materialsData.map((section) => {
              const isCurrentSection = section.id === activeSectionId;
              return (
                <div
                  key={section.id}
                  className={`rounded-2xl border transition-all ${
                    isCurrentSection
                      ? 'border-red-300 bg-red-50/40'
                      : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50'
                  }`}
                >
                  <div className="p-3">
                    <span className="text-[11px] font-black uppercase text-red-700 tracking-wider block">
                      Bagian {section.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight mt-0.5">
                      {section.title.replace(/^Bagian \d+:\s*/, '')}
                    </h4>
                  </div>

                  <div className="px-2 pb-2 space-y-1">
                    {section.subsections.map((sub) => {
                      const isActiveSub = sub.id === currentSub.id;
                      const isSubDone = completedSubIds.includes(sub.id);
                      return (
                        <button
                          key={sub.id}
                          onClick={() => onSelectSubSection(section.id, sub.id)}
                          className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs font-semibold transition-all ${
                            isActiveSub
                              ? 'bg-red-600 text-white shadow-xs'
                              : 'text-slate-700 hover:bg-white hover:text-red-700'
                          }`}
                        >
                          <span className="truncate pr-2">{sub.title}</span>
                          {isSubDone ? (
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 ${
                                isActiveSub ? 'text-amber-300' : 'text-green-600'
                              }`}
                            />
                          ) : (
                            <span
                              className={`w-3.5 h-3.5 rounded-full border shrink-0 ${
                                isActiveSub ? 'border-red-300' : 'border-slate-300'
                              }`}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA to Exam */}
          <button
            onClick={onGoToQuiz}
            className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-extrabold text-sm shadow-md transition-all"
          >
            <span>Uji Pemahaman: 30 Soal TKA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Material Reader */}
      <main className="lg:col-span-8 space-y-6">
        <article className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-200 shadow-sm space-y-6">
          {/* Subsection Header */}
          <div className="space-y-3 pb-5 border-b border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 px-3 py-1 rounded-full border border-red-200">
                {currentSection.title}
              </span>

              <button
                onClick={() => onToggleCompleteSubSection(currentSub.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isCompleted
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {isCompleted ? (
                  <>
                    <Check className="w-4 h-4 text-green-700" />
                    <span>Sudah Dipahami</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-slate-400" />
                    <span>Tandai Selesai</span>
                  </>
                )}
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {currentSub.title}
            </h1>

            {/* Voice Narration Button for current sub */}
            <div className="flex items-center gap-3 bg-red-50/80 p-3.5 rounded-2xl border border-red-200">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center text-lg shrink-0 shadow-xs">
                👩‍🏫
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold text-red-800 uppercase tracking-wider block">
                  Bimbingan Suara Bu Guru Wenni
                </span>
                <p className="text-xs sm:text-sm text-slate-800 line-clamp-2 italic">
                  "{currentSub.narration}"
                </p>
              </div>
              <button
                onClick={() => ttsService.speak(currentSub.narration)}
                className="shrink-0 p-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
                title="Dengarkan Penjelasan Submateri Ini"
              >
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:inline">Dengarkan</span>
              </button>
            </div>
          </div>

          {/* 1. Penjelasan Konseptual & MathText */}
          <div className="prose max-w-none text-slate-800 text-lg sm:text-xl leading-relaxed space-y-4">
            <MathText content={currentSub.content} />
          </div>

          {/* 2. Interactive Diagram / Unit Circle Explorer */}
          {(currentSub.interactiveType === 'unit_circle' ||
            currentSub.interactiveType === 'proof' ||
            currentSub.interactiveType === 'sum_diff_visualizer') && (
            <div className="my-8">
              <UnitCircleDiagram mode={currentSub.interactiveType === 'proof' ? 'proof' : 'explore'} />
            </div>
          )}

          {/* 3. Formula Box Card with Character-by-Character Dictation */}
          {currentSub.formulaBox && (
            <div className="my-6">
              <FormulaBox
                title={currentSub.formulaBox.title}
                formulas={currentSub.formulaBox.formulas}
                notes={currentSub.formulaBox.notes}
                dictationScript={currentSub.formulaBox.dictationScript}
              />
            </div>
          )}

          {/* 4. Contoh Soal & Pembahasan Bertahap */}
          {currentSub.workedExample && (
            <div className="my-6 rounded-2xl bg-slate-50 border-2 border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">
                    ?
                  </span>
                  Contoh Soal Penerapan
                </h3>
                <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-md">
                  Level Penalaran
                </span>
              </div>

              <div className="text-base sm:text-lg font-semibold text-slate-900 bg-white p-4 rounded-xl border border-slate-200">
                <MathText content={currentSub.workedExample.problem} />
              </div>

              {/* Reveal Solution Button */}
              {!showWorkedSolution ? (
                <button
                  onClick={() => setShowWorkedSolution(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-sm transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Lihat Langkah Pembahasan Bertahap</span>
                </button>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* Cara Normal */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h4 className="font-extrabold text-sm text-red-700 uppercase tracking-wide">
                      1. Pembahasan Cara Normal (Sistematis)
                    </h4>
                    <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal whitespace-pre-line">
                      <MathText content={currentSub.workedExample.solutionNormal} />
                    </div>
                  </div>

                  {/* Cara Cepat */}
                  <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
                    <h4 className="font-extrabold text-sm text-amber-900 uppercase tracking-wide">
                      2. Pembahasan Cara Cepat (Trik TKA)
                    </h4>
                    <div className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      <MathText content={currentSub.workedExample.solutionFast} />
                    </div>
                  </div>

                  {/* Key Takeaway */}
                  <p className="text-xs text-red-900 bg-red-100/70 p-3 rounded-lg border border-red-200 font-semibold">
                    💡 Kunci Jawaban & Intisari: {currentSub.workedExample.keyTakeaway}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 5. Catatan Kesalahan Umum (Common Mistakes) */}
          {currentSub.commonMistakes && currentSub.commonMistakes.length > 0 && (
            <div className="rounded-2xl bg-rose-50 border border-rose-200 p-5 space-y-2">
              <h3 className="font-bold text-rose-900 text-base flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                Jebakan & Kesalahan Umum Peserta Didik
              </h3>
              <ul className="text-sm text-rose-900 space-y-1.5 list-disc list-inside">
                {currentSub.commonMistakes.map((m, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. Ringkasan Intisari */}
          {currentSub.summary && currentSub.summary.length > 0 && (
            <div className="rounded-2xl bg-slate-900 text-white p-6 space-y-3 shadow-md">
              <h3 className="font-bold text-amber-300 text-base flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-300" />
                Ringkasan Intisari Submateri
              </h3>
              <ul className="text-sm text-slate-200 space-y-2">
                {currentSub.summary.map((sum, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{sum}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Subsection Bottom Navigation */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            {prevSub ? (
              <button
                onClick={() => onSelectSubSection(prevSub.sectionId, prevSub.sub.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="truncate max-w-[150px] sm:max-w-none">{prevSub.sub.title}</span>
              </button>
            ) : <div />}

            {nextSub ? (
              <button
                onClick={() => onSelectSubSection(nextSub.sectionId, nextSub.sub.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-extrabold shadow-sm transition-all"
              >
                <span className="truncate max-w-[150px] sm:max-w-none">{nextSub.sub.title}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onGoToQuiz}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-sm font-black shadow-md transition-all"
              >
                <span>Lanjut ke Latihan 30 Soal TKA</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};
