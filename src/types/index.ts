export type QuestionType = 'pg_biasa' | 'pg_kecukupan' | 'pg_kompleks' | 'benar_salah';

export type CognitiveLevel = 1 | 2 | 3; // 1: Knowing, 2: Applying, 3: Reasoning

export type Competency = 
  | 'Pengetahuan'
  | 'Representasi'
  | 'Penalaran & Pembuktian'
  | 'Pemecahan Masalah'
  | 'Koneksi Matematis';

export interface Stimulus {
  type: 'text' | 'svg' | 'table' | 'debate' | 'graph';
  title: string;
  context: string;
  svgContent?: string; // identifier or SVG data
  tableData?: { headers: string[]; rows: string[][] };
}

export interface StatementItem {
  id: string;
  text: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface Question {
  id: number; // 1 to 30
  type: QuestionType;
  level: CognitiveLevel;
  competency: Competency;
  title: string;
  stimulus: Stimulus;
  questionText: string;
  options?: string[]; // for pg_biasa, pg_kecukupan, pg_kompleks (5 options A-E)
  correctOptionIndex?: number; // for pg_biasa & pg_kecukupan (0 to 4)
  correctOptionIndices?: number[]; // for pg_kompleks
  statements?: StatementItem[]; // for benar_salah (3 statements)
  explanationNormal: {
    known: string;
    target: string;
    concept: string;
    steps: string[];
    commonMistake?: string;
    conclusion: string;
  };
  explanationFast: {
    clue: string;
    quickPattern: string;
    steps: string[];
    justification: string;
    conclusion: string;
  };
  audioNarration: {
    intro: string;
    stimulusNote: string;
    explanationNormal: string;
    explanationFast: string;
  };
}

export interface FormulaBoxData {
  title: string;
  formulas: string[];
  notes?: string;
  dictationScript?: string;
}

export interface MaterialSubSection {
  id: string;
  title: string;
  narration: string;
  content: string; // Markdown with KaTeX formulas
  formulaBox?: FormulaBoxData;
  interactiveType?: 'unit_circle' | 'sum_diff_visualizer' | 'formula_comparison' | 'proof';
  workedExample?: {
    problem: string;
    solutionNormal: string;
    solutionFast: string;
    keyTakeaway: string;
  };
  commonMistakes?: string[];
  summary: string[];
}

export interface MaterialSection {
  id: number;
  title: string;
  subtitle: string;
  iconName: string;
  subsections: MaterialSubSection[];
}

export interface UserAnswer {
  questionId: number;
  selectedOptionIndex?: number; // for pg_biasa & pg_kecukupan
  selectedOptionIndices?: number[]; // for pg_kompleks
  statementAnswers?: Record<string, boolean>; // for benar_salah
  isFlagged?: boolean;
}

export interface EvaluationResult {
  totalScore: number; // 200 - 800
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  totalQuestions: number;
  completedAt: string;
  levelBreakdown: {
    level: CognitiveLevel;
    earnedWeighted: number;
    maxWeighted: number;
    percentage: number;
    count: number;
    correct: number;
  }[];
  competencyBreakdown: {
    competency: Competency;
    earned: number;
    max: number;
    percentage: number;
  }[];
  feedback: {
    predicate: string;
    badgeTitle: string;
    summary: string;
    strengths: string[];
    improvements: string[];
    nextSteps: string[];
  };
}

export interface UserProgress {
  currentSection: 'home' | 'materi' | 'quiz' | 'evaluasi' | 'panduan' | 'progres';
  activeMaterialSectionId: number;
  activeMaterialSubId: string;
  completedMaterialSubIds: string[];
  quizAnswers: Record<number, UserAnswer>;
  quizTimerSeconds: number;
  isQuizSubmitted: boolean;
  evaluationResult: EvaluationResult | null;
  historyResults: EvaluationResult[];
  textSize: 'normal' | 'large' | 'xlarge';
  voiceSettings: {
    enabled: boolean;
    rate: number; // 0.75, 1.0, 1.25, 1.5
    autoNarrate: boolean;
  };
}
