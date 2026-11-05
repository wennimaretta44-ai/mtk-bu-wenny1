import React, { useState } from 'react';
import {
  Volume2,
  Lightbulb,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Mic,
  Check,
} from 'lucide-react';
import { MathText } from './MathText';
import { ttsService, convertMathToCharacterDictation } from '../services/ttsService';

interface FormulaBoxProps {
  title: string;
  formulas: string[];
  notes?: string;
  dictationScript?: string;
  variant?: 'primary' | 'red' | 'amber' | 'slate';
  className?: string;
}

export const FormulaBox: React.FC<FormulaBoxProps> = ({
  title,
  formulas,
  notes,
  dictationScript,
  variant = 'red',
  className = '',
}) => {
  const [showDictationText, setShowDictationText] = useState<boolean>(false);
  const [isDictating, setIsDictating] = useState<boolean>(false);

  // Generate character dictation script if not provided
  const generatedDictation =
    dictationScript ||
    formulas
      .map((f, i) => `Rumus ke-${i + 1}: ${convertMathToCharacterDictation(f)}`)
      .join('.\n\n');

  const handleStartDictation = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDictating(true);
    ttsService.dictateFormula(title, formulas, dictationScript);
    setTimeout(() => setIsDictating(false), 2000);
  };

  const getContainerStyle = () => {
    switch (variant) {
      case 'amber':
        return 'bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 border-amber-300';
      case 'slate':
        return 'bg-gradient-to-br from-slate-800 to-slate-900 text-white border-slate-700';
      case 'primary':
      case 'red':
      default:
        return 'bg-gradient-to-br from-red-600 to-rose-700 text-white border-red-400';
    }
  };

  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 shadow-lg border-2 transition-all space-y-4 ${getContainerStyle()} ${className}`}
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/20">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 font-bold shadow-xs">
            <Lightbulb className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                {title}
              </h3>
              <span className="hidden sm:inline-flex bg-amber-400/90 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                Sistem Dikte Karakter
              </span>
            </div>
            <p className="text-[11px] text-white/80">
              Setiap simbol, tanda kurung, operasi, dan huruf didektekan secara bertahap
            </p>
          </div>
        </div>

        {/* Action Buttons: Dictate Audio & Show Text */}
        <div className="flex items-center gap-2">
          {/* Audio Dictation Button */}
          <button
            onClick={handleStartDictation}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-md transition-all ${
              isDictating
                ? 'bg-amber-300 text-slate-950 ring-2 ring-white scale-105'
                : 'bg-white text-red-700 hover:bg-amber-300 hover:text-slate-950'
            }`}
            title="Dengarkan Dikte Karakter Rumus oleh Bu Guru Wenni"
          >
            <Mic className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span>Dikte Karakter</span>
          </button>

          {/* Toggle Script Button */}
          <button
            onClick={() => setShowDictationText(!showDictationText)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 transition-colors"
            title={showDictationText ? 'Sembunyikan Naskah Dikte' : 'Tampilkan Naskah Dikte Karakter'}
          >
            <span>Naskah</span>
            {showDictationText ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Formulas Body with KaTeX */}
      <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 space-y-3">
        {formulas.map((formula, idx) => (
          <div key={idx} className="text-center font-bold text-lg sm:text-2xl text-white py-1">
            <MathText content={`$$${formula}$$`} />
          </div>
        ))}
      </div>

      {/* Expandable Character Dictation Transcript Box */}
      {showDictationText && (
        <div className="bg-slate-950/90 text-slate-200 p-4 rounded-2xl border border-amber-400/40 text-xs sm:text-sm space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-amber-300 font-bold text-xs uppercase tracking-wider pb-1 border-b border-slate-800">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Transkrip Dikte Semua Karakter Matematika
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Lengkap & Eksplisit</span>
          </div>
          <div className="leading-relaxed font-normal text-slate-200 whitespace-pre-line pl-1">
            {generatedDictation}
          </div>
          <div className="pt-1 flex items-center justify-between text-[11px] text-amber-300/80 italic">
            <span>Sistem dikte memastikan tidak ada tanda kurung, operasi, atau simbol yang terlewat.</span>
            <button
              onClick={handleStartDictation}
              className="font-bold underline hover:text-white"
            >
              Putar Suara
            </button>
          </div>
        </div>
      )}

      {/* Notes / Callouts */}
      {notes && (
        <p className="text-xs sm:text-sm text-red-50/90 italic bg-black/25 p-3 rounded-xl border border-white/15">
          <strong className="text-amber-300 not-italic">Catatan Penting: </strong>
          {notes}
        </p>
      )}
    </div>
  );
};
