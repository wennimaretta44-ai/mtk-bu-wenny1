import React, { useState } from 'react';
import {
  BookOpen,
  CheckSquare,
  BarChart3,
  HelpCircle,
  RotateCcw,
  Volume2,
  VolumeX,
  Type,
  Menu,
  X,
  Home,
  GraduationCap,
} from 'lucide-react';
import { UserProgress } from '../types';

interface NavbarProps {
  currentSection: UserProgress['currentSection'];
  onNavigate: (section: UserProgress['currentSection']) => void;
  onOpenGuide: () => void;
  onOpenReset: () => void;
  textSize: UserProgress['textSize'];
  onChangeTextSize: (size: UserProgress['textSize']) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenGuide,
  onOpenReset,
  textSize,
  onChangeTextSize,
  isMuted,
  onToggleMute,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'materi', label: 'Materi Lengkap', icon: BookOpen },
    { id: 'quiz', label: 'Latihan 30 Soal TKA', icon: CheckSquare },
    { id: 'progres', label: 'Pantau Progres', icon: BarChart3 },
  ] as const;

  const cycleTextSize = () => {
    if (textSize === 'normal') onChangeTextSize('large');
    else if (textSize === 'large') onChangeTextSize('xlarge');
    else onChangeTextSize('normal');
  };

  const getTextSizeLabel = () => {
    if (textSize === 'normal') return 'Teks Normal';
    if (textSize === 'large') return 'Teks Besar';
    return 'Teks Ekstra';
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-red-600 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Teacher Branding */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-red-700 transition-colors">
                  MASTER <span className="text-red-600">TRIGONOMETRI</span>
                </span>
                <span className="hidden md:inline-flex bg-red-100 text-red-700 font-bold text-[11px] px-2 py-0.5 rounded-full border border-red-200">
                  TKA KELAS XII
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span>Program TKA Matematika Tingkat Lanjut</span>
                <span className="text-red-600 font-bold">•</span>
                <span className="text-red-700 font-semibold">Bu Guru Wenni</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-sm shadow-red-500/30'
                      : 'text-slate-600 hover:text-red-700 hover:bg-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Utility Tools: Text Size, Audio Mute, Guide, Reset */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Text Size Switcher */}
            <button
              onClick={cycleTextSize}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-colors"
              title="Ubah Ukuran Teks (Normal, Besar, Ekstra Besar)"
            >
              <Type className="w-4 h-4 text-red-600" />
              <span>{getTextSizeLabel()}</span>
            </button>

            {/* Quick Mute Toggle */}
            <button
              onClick={onToggleMute}
              className={`p-2 rounded-xl border transition-colors ${
                isMuted
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title={isMuted ? 'Nyalakan Suara Narator' : 'Bisukan Suara Narator'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-red-600" />}
            </button>

            {/* Guide Button */}
            <button
              onClick={onOpenGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors"
              title="Panduan Penggunaan Aplikasi"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span className="hidden xl:inline">Panduan</span>
            </button>

            {/* Reset Button */}
            <button
              onClick={onOpenReset}
              className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 border border-slate-200 transition-colors"
              title="Reset Progres Belajar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={onToggleMute}
              className="p-2 rounded-xl text-slate-600"
              title="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-rose-600" /> : <Volume2 className="w-5 h-5 text-red-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800"
              title="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold ${
                    isActive ? 'bg-red-600 text-white' : 'bg-slate-50 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
            <button
              onClick={cycleTextSize}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 text-slate-700 font-semibold"
            >
              <Type className="w-4 h-4 text-red-600" />
              <span>{getTextSizeLabel()}</span>
            </button>

            <button
              onClick={() => {
                onOpenGuide();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 text-amber-800 font-bold border border-amber-200"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Panduan</span>
            </button>

            <button
              onClick={() => {
                onOpenReset();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-rose-50 text-rose-700 font-bold border border-rose-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Progres</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
