import React, { useState } from 'react';
import { MathText } from './MathText';
import { RotateCw, Compass, Eye, CheckCircle2, Volume2, Mic } from 'lucide-react';
import { ttsService } from '../services/ttsService';

interface UnitCircleDiagramProps {
  mode?: 'explore' | 'compound' | 'proof';
}

export const UnitCircleDiagram: React.FC<UnitCircleDiagramProps> = ({ mode = 'explore' }) => {
  const [angleA, setAngleA] = useState<number>(45);
  const [angleB, setAngleB] = useState<number>(30);
  const [activeTab, setActiveTab] = useState<'sum' | 'diff' | 'proof'>('sum');

  const radA = (angleA * Math.PI) / 180;
  const radB = (angleB * Math.PI) / 180;
  const radSum = ((angleA + angleB) * Math.PI) / 180;
  const radDiff = ((angleA - angleB) * Math.PI) / 180;

  const cx = 150;
  const cy = 150;
  const r = 100;

  // Coordinates
  const xA = cx + r * Math.cos(radA);
  const yA = cy - r * Math.sin(radA);

  const xB = cx + r * Math.cos(radB);
  const yB = cy - r * Math.sin(radB);

  const xSum = cx + r * Math.cos(radSum);
  const ySum = cy - r * Math.sin(radSum);

  const xDiff = cx + r * Math.cos(radDiff);
  const yDiff = cy - r * Math.sin(radDiff);

  // Exact value helper
  const sinAVal = Math.sin(radA);
  const cosAVal = Math.cos(radA);
  const sinBVal = Math.sin(radB);
  const cosBVal = Math.cos(radB);

  const sinSumVal = Math.sin(radSum);
  const cosSumVal = Math.cos(radSum);
  const sinDiffVal = Math.sin(radDiff);
  const cosDiffVal = Math.cos(radDiff);

  return (
    <div className="bg-white border-2 border-red-100 rounded-2xl p-5 shadow-sm my-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg sm:text-xl">
              Laboratorium Lingkaran Satuan & Sudut Gabungan
            </h4>
            <p className="text-sm text-slate-500">
              Visualisasi interaktif posisi titik, koordinat trigonometri, dan pembuktian geometri
            </p>
          </div>
        </div>

        <div className="flex rounded-lg bg-slate-100 p-1 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('sum')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'sum' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-red-700'
            }`}
          >
            Jumlah (A + B)
          </button>
          <button
            onClick={() => setActiveTab('diff')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'diff' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-red-700'
            }`}
          >
            Selisih (A - B)
          </button>
          <button
            onClick={() => setActiveTab('proof')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'proof' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-red-700'
            }`}
          >
            Pembuktian Geometris
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Diagram Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-slate-50 p-4 rounded-xl border border-slate-200">
          <svg viewBox="0 0 300 300" className="w-full max-w-[280px] sm:max-w-[320px] h-auto drop-shadow-sm select-none">
            {/* Grid & Axis */}
            <circle cx={cx} cy={cy} r={r} fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 3" />
            <line x1={20} y1={cy} x2={280} y2={cy} stroke="#94a3b8" strokeWidth="1.5" />
            <line x1={cx} y1={20} x2={cx} y2={280} stroke="#94a3b8" strokeWidth="1.5" />

            {/* Labels Axis */}
            <text x={285} y={cy + 4} fontSize="11" fill="#64748b" fontWeight="600">X (cos)</text>
            <text x={cx - 10} y={15} fontSize="11" fill="#64748b" fontWeight="600">Y (sin)</text>
            <text x={cx + r + 4} y={cy + 14} fontSize="10" fill="#94a3b8">(1, 0)</text>
            <text x={cx - 4} y={cy + 14} fontSize="10" fill="#94a3b8">O</text>

            {/* Rays */}
            {/* Angle A Ray */}
            <line x1={cx} y1={cy} x2={xA} y2={yA} stroke="#dc2626" strokeWidth="2.5" />
            <circle cx={xA} cy={yA} r="5" fill="#dc2626" />
            <text x={xA + 6} y={yA - 4} fontSize="11" fill="#dc2626" fontWeight="bold">
              A ({angleA}°)
            </text>

            {/* Angle B Ray */}
            <line x1={cx} y1={cy} x2={xB} y2={yB} stroke="#2563eb" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx={xB} cy={yB} r="4.5" fill="#2563eb" />
            <text x={xB + 6} y={yB + 12} fontSize="11" fill="#2563eb" fontWeight="bold">
              B ({angleB}°)
            </text>

            {/* Target Compound Ray */}
            {activeTab === 'sum' && (
              <>
                <line x1={cx} y1={cy} x2={xSum} y2={ySum} stroke="#16a34a" strokeWidth="3" />
                <circle cx={xSum} cy={ySum} r="6" fill="#16a34a" />
                {/* Dotted projection to axes */}
                <line x1={xSum} y1={ySum} x2={xSum} y2={cy} stroke="#16a34a" strokeWidth="1" strokeDasharray="2 2" />
                <line x1={xSum} y1={ySum} x2={cx} y2={ySum} stroke="#16a34a" strokeWidth="1" strokeDasharray="2 2" />
                <text x={xSum + (xSum >= cx ? 6 : -60)} y={ySum - 6} fontSize="12" fill="#16a34a" fontWeight="bold">
                  A+B ({angleA + angleB}°)
                </text>
              </>
            )}

            {activeTab === 'diff' && (
              <>
                <line x1={cx} y1={cy} x2={xDiff} y2={yDiff} stroke="#d97706" strokeWidth="3" />
                <circle cx={xDiff} cy={yDiff} r="6" fill="#d97706" />
                <line x1={xDiff} y1={yDiff} x2={xDiff} y2={cy} stroke="#d97706" strokeWidth="1" strokeDasharray="2 2" />
                <line x1={xDiff} y1={yDiff} x2={cx} y2={yDiff} stroke="#d97706" strokeWidth="1" strokeDasharray="2 2" />
                <text x={xDiff + 6} y={yDiff - 4} fontSize="12" fill="#d97706" fontWeight="bold">
                  A-B ({angleA - angleB}°)
                </text>
              </>
            )}

            {activeTab === 'proof' && (
              <>
                {/* Chord between A and B */}
                <line x1={xA} y1={yA} x2={xB} y2={yB} stroke="#7c3aed" strokeWidth="2.5" />
                <text x={(xA + xB) / 2 + 5} y={(yA + yB) / 2 - 5} fontSize="10" fill="#7c3aed" fontWeight="bold">
                  d(P, Q)
                </text>

                {/* Rotated Chord from (1,0) to A-B */}
                <line x1={cx + r} y1={cy} x2={xDiff} y2={yDiff} stroke="#059669" strokeWidth="2.5" strokeDasharray="3 2" />
                <circle cx={cx + r} cy={cy} r="4.5" fill="#059669" />
                <circle cx={xDiff} cy={yDiff} r="4.5" fill="#059669" />
                <text x={(cx + r + xDiff) / 2 + 4} y={(cy + yDiff) / 2 + 12} fontSize="10" fill="#059669" fontWeight="bold">
                  d(P', (1,0))
                </text>
              </>
            )}
          </svg>

          <div className="mt-3 flex flex-wrap gap-2 justify-center text-xs text-slate-600">
            <span className="inline-flex items-center gap-1 font-semibold text-red-600">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span> Sudut A ({angleA}°)
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-blue-600">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Sudut B ({angleB}°)
            </span>
            {activeTab === 'sum' && (
              <span className="inline-flex items-center gap-1 font-semibold text-green-700">
                <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span> Hasil (A+B = {angleA + angleB}°)
              </span>
            )}
            {activeTab === 'diff' && (
              <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span> Hasil (A-B = {angleA - angleB}°)
              </span>
            )}
            {activeTab === 'proof' && (
              <span className="inline-flex items-center gap-1 font-semibold text-purple-700">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Panjang Tali Busur Sama
              </span>
            )}
          </div>
        </div>

        {/* Controls & Math Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                Sudut A: <span className="text-red-700 font-extrabold">{angleA}°</span>
              </label>
              <div className="flex gap-1">
                {[30, 45, 60, 90, 120].map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setAngleA(deg)}
                    className={`px-2 py-0.5 text-xs rounded border ${
                      angleA === deg
                        ? 'bg-red-600 text-white border-red-600 font-bold'
                        : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {deg}°
                  </button>
                ))}
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="180"
              step="5"
              value={angleA}
              onChange={(e) => setAngleA(Number(e.target.value))}
              aria-label="Atur Sudut A"
              className="w-full accent-red-600 cursor-pointer"
            />

            <div className="flex items-center justify-between pt-2">
              <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                Sudut B: <span className="text-blue-700 font-extrabold">{angleB}°</span>
              </label>
              <div className="flex gap-1">
                {[15, 30, 45, 60].map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setAngleB(deg)}
                    className={`px-2 py-0.5 text-xs rounded border ${
                      angleB === deg
                        ? 'bg-blue-600 text-white border-blue-600 font-bold'
                        : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {deg}°
                  </button>
                ))}
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              step="5"
              value={angleB}
              onChange={(e) => setAngleB(Number(e.target.value))}
              aria-label="Atur Sudut B"
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Mathematical Results Box */}
          {activeTab === 'sum' && (
            <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 text-slate-800 space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-red-200">
                <h5 className="font-bold text-red-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Formula Sinus & Kosinus Jumlah Sudut:
                </h5>
                <button
                  onClick={() => {
                    const script = `Perhatian, sistem dikte karakter untuk formula sinus dan kosinus jumlah sudut ${angleA} derajat ditambah ${angleB} derajat. Rumus pertama: fungsi sinus, buka kurung, ${angleA} derajat, tanda tambah, ${angleB} derajat, tutup kurung, tanda sama dengan, fungsi sinus ${angleA} derajat, dikali, fungsi kosinus ${angleB} derajat, tanda tambah, fungsi kosinus ${angleA} derajat, dikali, fungsi sinus ${angleB} derajat, sama dengan desimal ${sinSumVal.toFixed(4)}. Rumus kedua: fungsi kosinus, buka kurung, ${angleA} derajat, tanda tambah, ${angleB} derajat, tutup kurung, tanda sama dengan, fungsi kosinus ${angleA} derajat, dikali, fungsi kosinus ${angleB} derajat, tanda kurang, fungsi sinus ${angleA} derajat, dikali, fungsi sinus ${angleB} derajat, sama dengan desimal ${cosSumVal.toFixed(4)}. Selesai dikte.`;
                    ttsService.speak(script);
                  }}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold shadow-xs transition-colors"
                  title="Dengarkan Dikte Karakter Rumus Jumlah Sudut Ini"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Dikte Karakter</span>
                </button>
              </div>
              <div className="bg-white p-3 rounded-lg border border-red-100 space-y-1.5 text-sm">
                <div>
                  <MathText content={`$$\\sin(${angleA}^\\circ + ${angleB}^\\circ) = \\sin ${angleA}^\\circ \\cos ${angleB}^\\circ + \\cos ${angleA}^\\circ \\sin ${angleB}^\\circ$$`} />
                </div>
                <div className="text-xs text-slate-600 text-center font-mono">
                  = ({cosAVal.toFixed(3)} × {sinBVal.toFixed(3)}) + ({sinAVal.toFixed(3)} × {cosBVal.toFixed(3)}) ={' '}
                  <strong className="text-red-700 text-sm">{sinSumVal.toFixed(4)}</strong>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-red-100 space-y-1.5 text-sm">
                <div>
                  <MathText content={`$$\\cos(${angleA}^\\circ + ${angleB}^\\circ) = \\cos ${angleA}^\\circ \\cos ${angleB}^\\circ - \\sin ${angleA}^\\circ \\sin ${angleB}^\\circ$$`} />
                </div>
                <div className="text-xs text-slate-600 text-center font-mono">
                  = ({cosAVal.toFixed(3)} × {cosBVal.toFixed(3)}) - ({sinAVal.toFixed(3)} × {sinBVal.toFixed(3)}) ={' '}
                  <strong className="text-red-700 text-sm">{cosSumVal.toFixed(4)}</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diff' && (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-slate-800 space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-amber-200">
                <h5 className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  Formula Sinus & Kosinus Selisih Sudut:
                </h5>
                <button
                  onClick={() => {
                    const script = `Perhatian, sistem dikte karakter untuk formula sinus dan kosinus selisih sudut ${angleA} derajat dikurang ${angleB} derajat. Rumus pertama: fungsi sinus, buka kurung, ${angleA} derajat, tanda kurang, ${angleB} derajat, tutup kurung, tanda sama dengan, fungsi sinus ${angleA} derajat, dikali, fungsi kosinus ${angleB} derajat, tanda kurang, fungsi kosinus ${angleA} derajat, dikali, fungsi sinus ${angleB} derajat, sama dengan desimal ${sinDiffVal.toFixed(4)}. Rumus kedua: fungsi kosinus, buka kurung, ${angleA} derajat, tanda kurang, ${angleB} derajat, tutup kurung, tanda sama dengan, fungsi kosinus ${angleA} derajat, dikali, fungsi kosinus ${angleB} derajat, tanda tambah, fungsi sinus ${angleA} derajat, dikali, fungsi sinus ${angleB} derajat, sama dengan desimal ${cosDiffVal.toFixed(4)}. Selesai dikte.`;
                    ttsService.speak(script);
                  }}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold shadow-xs transition-colors"
                  title="Dengarkan Dikte Karakter Rumus Selisih Sudut Ini"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Dikte Karakter</span>
                </button>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-100 space-y-1.5 text-sm">
                <div>
                  <MathText content={`$$\\sin(${angleA}^\\circ - ${angleB}^\\circ) = \\sin ${angleA}^\\circ \\cos ${angleB}^\\circ - \\cos ${angleA}^\\circ \\sin ${angleB}^\\circ$$`} />
                </div>
                <div className="text-xs text-slate-600 text-center font-mono">
                  Nilai eksak / desimal = <strong className="text-amber-700 text-sm">{sinDiffVal.toFixed(4)}</strong>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg border border-amber-100 space-y-1.5 text-sm">
                <div>
                  <MathText content={`$$\\cos(${angleA}^\\circ - ${angleB}^\\circ) = \\cos ${angleA}^\\circ \\cos ${angleB}^\\circ + \\sin ${angleA}^\\circ \\sin ${angleB}^\\circ$$`} />
                </div>
                <div className="text-xs text-slate-600 text-center font-mono">
                  Perhatikan tanda <strong className="text-red-600">(+)</strong> pada kosinus selisih ={' '}
                  <strong className="text-amber-700 text-sm">{cosDiffVal.toFixed(4)}</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proof' && (
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-slate-800 space-y-2 text-sm">
              <div className="flex items-center justify-between pb-1 border-b border-purple-200">
                <h5 className="font-bold text-purple-900 text-sm flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-purple-600" />
                  Prinsip Pembuktian Jarak Dua Titik (Chord Invariance):
                </h5>
                <button
                  onClick={() => {
                    const script =
                      'Perhatian, sistem dikte karakter pembuktian geometris jarak tali busur. Persamaan pertama: kuadrat jarak titik P dan Q, sama dengan, buka kurung, kosinus huruf kapital A, tanda kurang, kosinus huruf kapital B, tutup kurung, pangkat dua; ditambah, buka kurung, sinus huruf kapital A, tanda kurang, sinus huruf kapital B, tutup kurung, pangkat dua; sama dengan, angka dua, tanda kurang, angka dua, dikali, buka kurung, kosinus huruf kapital A, dikali, kosinus huruf kapital B, tanda tambah, sinus huruf kapital A, dikali, sinus huruf kapital B, tutup kurung. Persamaan kedua setelah rotasi: kuadrat jarak titik P aksen dan Q aksen, sama dengan, buka kurung, kosinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung, tanda kurang, angka satu, tutup kurung, pangkat dua; ditambah, buka kurung, sinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung, tanda kurang, angka nol, tutup kurung, pangkat dua; sama dengan, angka dua, tanda kurang, angka dua, dikali, kosinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung. Menyamakan kedua ruas menghasilkan rumus induk: kosinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung, tanda sama dengan, kosinus huruf kapital A, dikali, kosinus huruf kapital B, tanda tambah, sinus huruf kapital A, dikali, sinus huruf kapital B. Selesai dikte.';
                    ttsService.speak(script);
                  }}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-700 hover:bg-purple-800 text-white text-[11px] font-bold shadow-xs transition-colors"
                  title="Dengarkan Dikte Karakter Bukti Geometri"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Dikte Karakter</span>
                </button>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Jarak tali busur antara titik $P(\\cos A, \\sin A)$ dan $Q(\\cos B, \\sin B)$ tidak berubah saat seluruh sistem diputar searah jarum jam sebesar sudut $B$. Titik $Q$ jatuh pada $(1, 0)$ dan titik $P$ berpindah ke $(\\cos(A-B), \\sin(A-B))$.
              </p>
              <div className="bg-white p-2.5 rounded-lg border border-purple-200 font-mono text-xs text-purple-900 overflow-x-auto">
                <MathText content="$$[d(P, Q)]^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2 = 2 - 2(\\cos A \\cos B + \\sin A \\sin B)$$" />
                <MathText content="$$[d(P', Q')]^2 = (\\cos(A-B) - 1)^2 + (\\sin(A-B) - 0)^2 = 2 - 2\\cos(A-B)$$" />
              </div>
              <p className="text-xs font-semibold text-purple-950">
                Menyamakan kedua ruas membuktikan secara mutlak identitas fundamental:
                <br />
                <span className="text-red-600 font-bold">$\cos(A - B) = \cos A \cos B + \sin A \sin B$</span>!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
