/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  UserProgress,
  EvaluationResult,
  MaterialSection,
  MaterialSubSection,
} from './types';
import {
  loadUserProgress,
  saveUserProgress,
  clearUserProgress,
  defaultProgress,
  calculateEvaluation,
} from './services/storageService';
import { ttsService } from './services/ttsService';
import { questionsData } from './data/questionsData';
import { materialsData } from './data/materialsData';
import { Navbar } from './components/Navbar';
import { HeroHome } from './components/HeroHome';
import { MaterialViewer } from './components/MaterialViewer';
import { QuizView } from './components/QuizView';
import { EvaluationView } from './components/EvaluationView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { UserGuideModal } from './components/UserGuideModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';
import { AudioNarrationBar } from './components/AudioNarrationBar';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isResetOpen, setIsResetOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Autosave progress whenever it changes
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Quiz timer ticker when quiz is active and not yet submitted
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (progress.currentSection === 'quiz' && !progress.isQuizSubmitted) {
      interval = setInterval(() => {
        setProgress((prev) => ({
          ...prev,
          quizTimerSeconds: prev.quizTimerSeconds + 1,
        }));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [progress.currentSection, progress.isQuizSubmitted]);

  // Navigation handlers
  const handleNavigate = (section: UserProgress['currentSection']) => {
    setProgress((prev) => ({ ...prev, currentSection: section }));

    // Auto-narration voice triggers based on destination section
    if (section === 'home') {
      ttsService.speak(
        'Selamat datang kembali di beranda Master Trigonometri bersama Bu Guru Wenni. Silakan pilih menu belajar yang ingin kamu tuju.'
      );
    } else if (section === 'materi') {
      ttsService.speak(
        'Pada sesi ini, kita akan mempelajari hubungan antara sinus, kosinus, dan tangen dari dua sudut. Perhatikan baik-baik, karena rumus yang akan kita pelajari merupakan salah satu kunci penting untuk menyelesaikan soal TKA Matematika Tingkat Lanjut.'
      );
    } else if (section === 'quiz') {
      if (progress.isQuizSubmitted) {
        setProgress((prev) => ({ ...prev, currentSection: 'evaluasi' }));
      } else {
        ttsService.speak(
          'Baik, sekarang kita memasuki sesi latihan tiga puluh soal TKA. Bacalah stimulus dengan teliti. Jangan terburu-buru memilih jawaban. Identifikasi informasi yang diketahui, temukan hubungan matematisnya, lalu tentukan strategi penyelesaian yang paling tepat.'
        );
      }
    } else if (section === 'progres') {
      ttsService.speak(
        'Berikut adalah dasbor pantau progres belajar mandiri kamu. Di sini kamu dapat melihat ketuntasan modul dan skor simulasi TKA terakhir.'
      );
    }
  };

  const handleStartLearning = () => {
    handleNavigate('materi');
    ttsService.speak(
      'Halo, selamat datang di Master Trigonometri! Saya akan menemani kamu belajar bersama Bu Guru Wenni. Jangan khawatir jika sebelumnya kamu merasa trigonometri itu sulit. Kita akan mempelajarinya secara bertahap, mulai dari konsep paling dasar sampai mampu menaklukkan soal-soal penalaran tingkat tinggi. Yuk, kita mulai!'
    );
  };

  const handlePlayWelcomeVoice = () => {
    ttsService.speak(
      'Halo siswa cerdas! Saya Bu Guru Wenni. Program ini dirancang khusus untuk membekali kamu menembus skor tertinggi TKA Matematika Tingkat Lanjut. Mari taklukkan trigonometri dengan penalaran yang logis dan menyenangkan!'
    );
  };

  const handleSelectMaterialSubSection = (sectionId: number, subId: string) => {
    setProgress((prev) => ({
      ...prev,
      activeMaterialSectionId: sectionId,
      activeMaterialSubId: subId,
    }));
  };

  const handleToggleCompleteSubSection = (subId: string) => {
    setProgress((prev) => {
      const currentList = prev.completedMaterialSubIds;
      const exists = currentList.includes(subId);
      const nextList = exists
        ? currentList.filter((id) => id !== subId)
        : [...currentList, subId];
      return { ...prev, completedMaterialSubIds: nextList };
    });
  };

  const handleSubmitQuiz = () => {
    const result = calculateEvaluation(progress.quizAnswers, questionsData);
    setProgress((prev) => ({
      ...prev,
      isQuizSubmitted: true,
      evaluationResult: result,
      currentSection: 'evaluasi',
      historyResults: [result, ...prev.historyResults].slice(0, 10),
    }));
  };

  const handleRetakeQuiz = () => {
    setProgress((prev) => ({
      ...prev,
      quizAnswers: {},
      quizTimerSeconds: 0,
      isQuizSubmitted: false,
      currentSection: 'quiz',
    }));
    ttsService.speak(
      'Simulasi TKA dimulai kembali dari nomor 1. Kerjakan dengan tenang dan manfaatkan pengetahuan yang sudah kamu pelajari!'
    );
  };

  const handleConfirmReset = () => {
    clearUserProgress();
    setProgress({ ...defaultProgress });
    ttsService.stop();
    ttsService.speak(
      'Progres belajar dan riwayat latihan telah berhasil direset ke kondisi awal. Selamat memulai pembelajaran baru!'
    );
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    ttsService.setMuted(nextMuted);
  };

  const handleChangeTextSize = (newSize: UserProgress['textSize']) => {
    setProgress((prev) => ({ ...prev, textSize: newSize }));
  };

  // Text size classes applied to main container
  const textSizeClass =
    progress.textSize === 'xlarge'
      ? 'text-[1.2rem] leading-relaxed'
      : progress.textSize === 'large'
      ? 'text-[1.08rem] leading-relaxed'
      : 'text-[1rem] leading-normal';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col ${textSizeClass}`}>
      {/* Navigation Header */}
      <Navbar
        currentSection={progress.currentSection}
        onNavigate={handleNavigate}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenReset={() => setIsResetOpen(true)}
        textSize={progress.textSize}
        onChangeTextSize={handleChangeTextSize}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 pb-24">
        {progress.currentSection === 'home' && (
          <HeroHome
            onStartLearning={handleStartLearning}
            onOpenMaterial={() => handleNavigate('materi')}
            onOpenQuiz={() => handleNavigate('quiz')}
            onOpenProgress={() => handleNavigate('progres')}
            onOpenGuide={() => setIsGuideOpen(true)}
            onOpenReset={() => setIsResetOpen(true)}
            onPlayWelcomeVoice={handlePlayWelcomeVoice}
            completedSubsectionsCount={progress.completedMaterialSubIds.length}
            totalSubsectionsCount={11}
            bestScore={progress.evaluationResult?.totalScore}
          />
        )}

        {progress.currentSection === 'materi' && (
          <MaterialViewer
            activeSectionId={progress.activeMaterialSectionId}
            activeSubId={progress.activeMaterialSubId}
            completedSubIds={progress.completedMaterialSubIds}
            onSelectSubSection={handleSelectMaterialSubSection}
            onToggleCompleteSubSection={handleToggleCompleteSubSection}
            onGoToQuiz={() => handleNavigate('quiz')}
            autoNarrate={progress.voiceSettings.autoNarrate}
          />
        )}

        {progress.currentSection === 'quiz' && (
          <QuizView
            questions={questionsData}
            quizAnswers={progress.quizAnswers}
            timerSeconds={progress.quizTimerSeconds}
            onUpdateAnswers={(updated) =>
              setProgress((prev) => ({ ...prev, quizAnswers: updated }))
            }
            onSubmitQuiz={handleSubmitQuiz}
            autoNarrate={progress.voiceSettings.autoNarrate}
          />
        )}

        {progress.currentSection === 'evaluasi' && progress.evaluationResult && (
          <EvaluationView
            result={progress.evaluationResult}
            questions={questionsData}
            quizAnswers={progress.quizAnswers}
            onRetakeQuiz={handleRetakeQuiz}
            onGoToMaterial={() => handleNavigate('materi')}
            onGoToProgress={() => handleNavigate('progres')}
            onOpenReset={() => setIsResetOpen(true)}
            autoNarrate={progress.voiceSettings.autoNarrate}
          />
        )}

        {progress.currentSection === 'progres' && (
          <ProgressDashboard
            progress={progress}
            onContinueMaterial={() => handleNavigate('materi')}
            onGoToQuiz={() => handleNavigate('quiz')}
            onOpenReset={() => setIsResetOpen(true)}
          />
        )}
      </main>

      {/* Floating Audio Narration Control Bar for Bu Guru Wenni */}
      <AudioNarrationBar
        onToggleAutoNarrate={(val) =>
          setProgress((prev) => ({
            ...prev,
            voiceSettings: { ...prev.voiceSettings, autoNarrate: val },
          }))
        }
        autoNarrateEnabled={progress.voiceSettings.autoNarrate}
      />

      {/* Interactive 11-step Guide Modal */}
      <UserGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onNavigateToSection={(sec) => {
          setIsGuideOpen(false);
          handleNavigate(sec);
        }}
      />

      {/* 2-Step Confirmation Reset Modal */}
      <ResetConfirmModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onConfirmReset={handleConfirmReset}
      />
    </div>
  );
}
