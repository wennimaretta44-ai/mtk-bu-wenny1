import { UserProgress, EvaluationResult, CognitiveLevel, Competency, Question } from '../types';
import { questionsData } from '../data/questionsData';

const STORAGE_KEY = 'master_trigonometri_progress_v1';

export const defaultProgress: UserProgress = {
  currentSection: 'home',
  activeMaterialSectionId: 1,
  activeMaterialSubId: '1-1',
  completedMaterialSubIds: [],
  quizAnswers: {},
  quizTimerSeconds: 0,
  isQuizSubmitted: false,
  evaluationResult: null,
  historyResults: [],
  textSize: 'normal',
  voiceSettings: {
    enabled: true,
    rate: 1.0,
    autoNarrate: true,
  },
};

export function loadUserProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return { ...defaultProgress, ...parsed };
  } catch (err) {
    console.error('Gagal membaca data progres dari localStorage:', err);
    return defaultProgress;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Gagal menyimpan data progres ke localStorage:', err);
  }
}

export function clearUserProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Gagal menghapus data progres:', err);
  }
}

/**
 * Calculates simulation TKA score strictly scaled in range 200 - 800.
 * Weights: Level 1 = 1, Level 2 = 2, Level 3 = 3.
 * Partial scoring applied for complex multiple choice and true/false.
 */
export function calculateEvaluation(
  answers: UserProgress['quizAnswers'],
  totalQuestions: Question[] = questionsData
): EvaluationResult {
  let earnedWeighted = 0;
  let maxWeighted = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const levelStats: Record<
    CognitiveLevel,
    { count: number; correct: number; earned: number; max: number }
  > = {
    1: { count: 0, correct: 0, earned: 0, max: 0 },
    2: { count: 0, correct: 0, earned: 0, max: 0 },
    3: { count: 0, correct: 0, earned: 0, max: 0 },
  };

  const competencyStats: Record<Competency, { earned: number; max: number }> = {
    Pengetahuan: { earned: 0, max: 0 },
    Representasi: { earned: 0, max: 0 },
    'Penalaran & Pembuktian': { earned: 0, max: 0 },
    'Pemecahan Masalah': { earned: 0, max: 0 },
    'Koneksi Matematis': { earned: 0, max: 0 },
  };

  totalQuestions.forEach((q) => {
    const weight = q.level; // 1, 2, or 3
    maxWeighted += weight;
    levelStats[q.level].count += 1;
    levelStats[q.level].max += weight;
    competencyStats[q.competency].max += weight;

    const ans = answers[q.id];

    if (!ans) {
      unansweredCount++;
      return;
    }

    let questionCreditFraction = 0; // between 0 and 1

    if (q.type === 'pg_biasa' || q.type === 'pg_kecukupan') {
      if (ans.selectedOptionIndex === undefined) {
        unansweredCount++;
        return;
      }
      if (ans.selectedOptionIndex === q.correctOptionIndex) {
        questionCreditFraction = 1;
        correctCount++;
        levelStats[q.level].correct += 1;
      } else {
        incorrectCount++;
      }
    } else if (q.type === 'pg_kompleks') {
      const selected = ans.selectedOptionIndices || [];
      const correct = q.correctOptionIndices || [];

      if (selected.length === 0) {
        unansweredCount++;
        return;
      }

      // Calculate precision and recall
      const truePositives = selected.filter((idx) => correct.includes(idx)).length;
      const falsePositives = selected.filter((idx) => !correct.includes(idx)).length;

      // Partial credit = (truePositives - falsePositives) / totalCorrect, clamped to 0
      const scoreRaw = Math.max(0, (truePositives - falsePositives * 0.5) / correct.length);
      questionCreditFraction = scoreRaw;

      if (scoreRaw === 1) {
        correctCount++;
        levelStats[q.level].correct += 1;
      } else if (scoreRaw > 0) {
        correctCount += scoreRaw; // fractional
      } else {
        incorrectCount++;
      }
    } else if (q.type === 'benar_salah') {
      const statements = q.statements || [];
      const userAnswers = ans.statementAnswers || {};

      let answeredStatementsCount = 0;
      let correctStatementsCount = 0;

      statements.forEach((st) => {
        if (userAnswers[st.id] !== undefined) {
          answeredStatementsCount++;
          if (userAnswers[st.id] === st.correctAnswer) {
            correctStatementsCount++;
          }
        }
      });

      if (answeredStatementsCount === 0) {
        unansweredCount++;
        return;
      }

      questionCreditFraction = correctStatementsCount / statements.length;

      if (questionCreditFraction === 1) {
        correctCount++;
        levelStats[q.level].correct += 1;
      } else if (questionCreditFraction > 0) {
        correctCount += questionCreditFraction;
      } else {
        incorrectCount++;
      }
    }

    const earnedForQ = questionCreditFraction * weight;
    earnedWeighted += earnedForQ;
    levelStats[q.level].earned += earnedForQ;
    competencyStats[q.competency].earned += earnedForQ;
  });

  const percentage = Math.round((earnedWeighted / maxWeighted) * 100);
  // Scale between 200 and 800
  const totalScore = Math.min(800, Math.max(200, 200 + Math.round((earnedWeighted / maxWeighted) * 600)));

  // Predicate & Feedback
  let predicate = 'Perlu Bimbingan Intensif';
  let badgeTitle = 'Pemula Trigonometri';
  let summary =
    'Kamu telah menyelesaikan simulasi TKA Matematika Tingkat Lanjut. Teruslah berlatih memahami konsep dasar jumlah dan selisih sudut agar kemampuan penalaranmu semakin tajam!';

  if (totalScore >= 720) {
    predicate = 'Istimewa / Sangat Mahir (Top Tier)';
    badgeTitle = 'Master Penalaran Trigonometri';
    summary =
      'Luar biasa! Pemahaman konsep, kelincahan aljabar, dan penalaran tingkat tinggimu (HOTS) sudah sangat matang dan siap menembus program studi unggulan pada TKA Matematika Tingkat Lanjut!';
  } else if (totalScore >= 640) {
    predicate = 'Sangat Baik (Proficient)';
    badgeTitle = 'Kandidat Unggul TKA';
    summary =
      'Kerja yang hebat! Kamu memiliki dasar yang sangat kokoh pada rumus jumlah dan selisih sudut, serta mampu memilih strategi cepat pada sebagian besar soal penalaran.';
  } else if (totalScore >= 520) {
    predicate = 'Baik (Competent)';
    badgeTitle = 'Pejuang Tangguh Trigonometri';
    summary =
      'Hasil yang baik! Kamu sudah menguasai sebagian besar rumus dan penerapannya. Tingkatkan ketelitian pada aturan tanda kuadran dan soal kecukupan data.';
  } else if (totalScore >= 400) {
    predicate = 'Cukup (Developing)';
    badgeTitle = 'Penjelajah Konsep';
    summary =
      'Pemahaman dasarmu sudah mulai terbentuk. Fokuskan latihan pada relasi sudut lingkaran satuan dan penurunan rumus tangen serta latihan mandiri soal HOTS.';
  }

  const strengths: string[] = [];
  const improvements: string[] = [];
  const nextSteps: string[] = [];

  // Determine strengths & improvements based on competency breakdown
  (Object.keys(competencyStats) as Competency[]).forEach((comp) => {
    const c = competencyStats[comp];
    const pct = c.max > 0 ? (c.earned / c.max) * 100 : 0;
    if (pct >= 70) {
      strengths.push(`${comp} (${Math.round(pct)}%)`);
    } else {
      improvements.push(`${comp} (${Math.round(pct)}%)`);
    }
  });

  if (strengths.length === 0) {
    strengths.push('Semangat belajar dan ketekunan menyelesaikan seluruh soal simulasi.');
  }
  if (improvements.length === 0) {
    improvements.push('Pertahankan kecepatan pengerjaan dan efisiensi Cara Cepat.');
  }

  nextSteps.push('Pelajari kembali bagian materi yang pembahasannya belum kamu kuasai.');
  nextSteps.push('Dengarkan penjelasan Cara Cepat Bu Guru Wenni pada soal-soal penalaran.');
  nextSteps.push('Coba ulangi latihan setelah me-review catatan untuk menguji daya ingat jangka panjang.');

  return {
    totalScore,
    percentage,
    correctCount: Math.round(correctCount),
    incorrectCount,
    unansweredCount,
    totalQuestions: totalQuestions.length,
    completedAt: new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    levelBreakdown: [
      {
        level: 1,
        earnedWeighted: levelStats[1].earned,
        maxWeighted: levelStats[1].max,
        percentage: levelStats[1].max > 0 ? Math.round((levelStats[1].earned / levelStats[1].max) * 100) : 0,
        count: levelStats[1].count,
        correct: levelStats[1].correct,
      },
      {
        level: 2,
        earnedWeighted: levelStats[2].earned,
        maxWeighted: levelStats[2].max,
        percentage: levelStats[2].max > 0 ? Math.round((levelStats[2].earned / levelStats[2].max) * 100) : 0,
        count: levelStats[2].count,
        correct: levelStats[2].correct,
      },
      {
        level: 3,
        earnedWeighted: levelStats[3].earned,
        maxWeighted: levelStats[3].max,
        percentage: levelStats[3].max > 0 ? Math.round((levelStats[3].earned / levelStats[3].max) * 100) : 0,
        count: levelStats[3].count,
        correct: levelStats[3].correct,
      },
    ],
    competencyBreakdown: (Object.keys(competencyStats) as Competency[]).map((comp) => ({
      competency: comp,
      earned: competencyStats[comp].earned,
      max: competencyStats[comp].max,
      percentage:
        competencyStats[comp].max > 0
          ? Math.round((competencyStats[comp].earned / competencyStats[comp].max) * 100)
          : 0,
    })),
    feedback: {
      predicate,
      badgeTitle,
      summary,
      strengths,
      improvements,
      nextSteps,
    },
  };
}
