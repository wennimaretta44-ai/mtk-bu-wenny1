import React, { useState } from 'react';
import { AlertTriangle, RotateCcw, X, ShieldAlert, Check } from 'lucide-react';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset,
}) => {
  const [step, setStep] = useState<1 | 2>(1);

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleFinalConfirm = () => {
    onConfirmReset();
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border-2 border-rose-500">
        {/* Header */}
        <div className="bg-rose-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <AlertTriangle className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">Reset Progres Belajar</h3>
              <p className="text-xs text-rose-100">Tahap {step} dari 2 Konfirmasi</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {step === 1 ? (
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h4 className="text-center font-extrabold text-slate-900 text-lg">
                Apakah kamu yakin ingin mereset progres?
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Tindakan ini akan mengosongkan seluruh progres belajar yang tersimpan:
              </p>
              <ul className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5 list-disc list-inside">
                <li>Riwayat jawaban 30 soal simulasi TKA.</li>
                <li>Hasil skor evaluasi dan riwayat ujian sebelumnya.</li>
                <li>Daftar submodul materi yang telah selesai dipelajari.</li>
              </ul>
              <p className="text-xs text-amber-700 font-semibold bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-center">
                Materi pembelajaran dan bank soal bawaan tetap aman dan tidak akan terhapus.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mx-auto animate-pulse">
                <RotateCcw className="w-7 h-7" />
              </div>
              <h4 className="text-center font-black text-rose-700 text-lg">
                Konfirmasi Terakhir: Hapus Seluruh Data?
              </h4>
              <p className="text-sm text-slate-700 text-center leading-relaxed font-medium">
                Data yang telah dihapus tidak dapat dipulihkan kembali. Aplikasi akan dikembalikan ke kondisi awal layaknya peserta didik baru.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            onClick={handleClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold transition-colors"
          >
            Batal
          </button>

          {step === 1 ? (
            <button
              onClick={handleNextStep}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-extrabold shadow-sm transition-colors"
            >
              <span>Lanjut ke Tahap 2</span>
            </button>
          ) : (
            <button
              onClick={handleFinalConfirm}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-extrabold shadow-md transition-colors"
            >
              <Check className="w-4 h-4" />
              <span>Ya, Reset Sekarang</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
