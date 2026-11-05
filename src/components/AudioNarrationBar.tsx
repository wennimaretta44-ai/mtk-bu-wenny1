import React, { useEffect, useState } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Gauge,
  Radio,
} from 'lucide-react';
import { ttsService, TTSStatus } from '../services/ttsService';

interface AudioNarrationBarProps {
  onToggleAutoNarrate?: (enabled: boolean) => void;
  autoNarrateEnabled?: boolean;
}

export const AudioNarrationBar: React.FC<AudioNarrationBarProps> = ({
  onToggleAutoNarrate,
  autoNarrateEnabled = true,
}) => {
  const [status, setStatus] = useState<TTSStatus>('idle');
  const [transcript, setTranscript] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(1.0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = ttsService.subscribe((newStatus, currentText) => {
      setStatus(newStatus);
      setTranscript(currentText);
      setIsMuted(ttsService.getMuted());
      setRate(ttsService.getRate());
    });
    return () => unsubscribe();
  }, []);

  const handleTogglePlayPause = () => {
    if (status === 'playing') {
      ttsService.pause();
    } else if (status === 'paused') {
      ttsService.resume();
    } else {
      ttsService.replay();
    }
  };

  const handleReplay = () => {
    ttsService.replay();
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    ttsService.setMuted(nextMuted);
    setIsMuted(nextMuted);
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    ttsService.setRate(newRate);
  };

  return (
    <aside
      aria-label="Kontrol Narator Audio Bu Guru Wenni"
      className="fixed bottom-3 right-3 left-3 sm:left-auto sm:right-6 sm:w-[460px] z-50 transition-all duration-300"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white border-2 border-red-500/80 rounded-2xl shadow-2xl overflow-hidden p-3 sm:p-4">
        {/* Header / Main Controls */}
        <div className="flex items-center justify-between gap-3">
          {/* Avatar & Status */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-amber-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-amber-300 font-bold text-sm">
                  👩‍🏫
                </div>
              </div>
              {status === 'playing' && (
                <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                </span>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-red-200 truncate">Bu Guru Wenni</span>
                <span className="bg-red-700/80 text-[10px] font-semibold px-1.5 py-0.2 rounded text-red-100">
                  Narator
                </span>
              </div>
              <p className="text-[11px] text-slate-300 flex items-center gap-1">
                {status === 'playing' ? (
                  <span className="text-green-400 font-medium flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-pulse text-green-400" /> Sedang berbicara...
                  </span>
                ) : status === 'paused' ? (
                  <span className="text-amber-300 font-medium">Jeda sementara</span>
                ) : (
                  <span className="text-slate-400">Siap mendampingi belajar</span>
                )}
              </p>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Play/Pause */}
            <button
              onClick={handleTogglePlayPause}
              disabled={isMuted}
              className={`p-2 rounded-xl transition-all ${
                status === 'playing'
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              } disabled:opacity-40 disabled:cursor-not-allowed`}
              title={status === 'playing' ? 'Jeda Suara' : 'Lanjutkan Suara'}
              aria-label={status === 'playing' ? 'Jeda Suara' : 'Lanjutkan Suara'}
            >
              {status === 'playing' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            {/* Replay */}
            <button
              onClick={handleReplay}
              disabled={isMuted || !transcript}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all disabled:opacity-30"
              title="Ulangi Penjelasan"
              aria-label="Ulangi Penjelasan"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={handleToggleMute}
              className={`p-2 rounded-xl transition-all ${
                isMuted
                  ? 'bg-rose-950 text-rose-400 border border-rose-700'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
              title={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
              aria-label={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Expand / Minimize Details */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              title={isExpanded ? 'Tutup Pengaturan' : 'Buka Pengaturan & Naskah'}
              aria-label={isExpanded ? 'Tutup Pengaturan' : 'Buka Pengaturan & Naskah'}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expanded Tray: Voice Speed, Auto-Narrate toggle, and Live Transcript */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-slate-800 space-y-3 animate-in fade-in duration-200">
            {/* Speed & Auto Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-300 font-semibold">Kecepatan:</span>
                <div className="flex gap-1 bg-slate-800 p-0.5 rounded-lg">
                  {[0.75, 1.0, 1.25, 1.5].map((s) => (
                    <button
                      key={s}
                      onClick={() => handleRateChange(s)}
                      className={`px-1.5 py-0.5 rounded font-mono text-[11px] transition-all ${
                        rate === s ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>

              {onToggleAutoNarrate && (
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={autoNarrateEnabled}
                    onChange={(e) => onToggleAutoNarrate(e.target.checked)}
                    className="accent-red-600 rounded"
                  />
                  <span className="text-[11px]">Suara Otomatis</span>
                </label>
              )}
            </div>

            {/* Live Transcript / Naskah Narasi */}
            <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Naskah Narasi Bu Guru Wenni
                </span>
                <span className="text-[10px] text-slate-400">
                  {transcript ? `${transcript.length} karakter` : 'Menunggu narasi...'}
                </span>
              </div>
              <div className="max-h-24 overflow-y-auto text-slate-200 font-normal leading-relaxed text-xs pr-1">
                {transcript || (
                  <span className="text-slate-500 italic">
                    Pilihlah salah satu menu atau tombol untuk mendengarkan bimbingan suara Bu Guru Wenni.
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
