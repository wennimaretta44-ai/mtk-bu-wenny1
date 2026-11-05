/**
 * TTS Service for Indonesian Narrator - Bu Guru Wenni
 * Transforms mathematical formulas into natural spoken Indonesian phrases
 * and manages Web Speech API audio lifecycle.
 */

// Math formula to natural Indonesian pronunciation converter
export function convertMathToSpokenIndonesian(text: string): string {
  if (!text) return '';

  let spoken = text;

  // Remove markdown bold/italics
  spoken = spoken.replace(/\*\*(.*?)\*\*/g, '$1');
  spoken = spoken.replace(/\*(.*?)\*/g, '$1');
  spoken = spoken.replace(/#{1,6}\s?/g, '');

  // Common angle combinations
  spoken = spoken.replace(/(\d+)\s*\^\s*\{\s*\\circ\s*\}/g, '$1 derajat');
  spoken = spoken.replace(/(\d+)\s*\^\s*\\circ/g, '$1 derajat');
  spoken = spoken.replace(/(\d+)\s*°/g, '$1 derajat');

  // Specific common trig sums
  spoken = spoken.replace(/\\sin\s*\(\s*([A-Za-z0-9°]+)\s*\+\s*([A-Za-z0-9°]+)\s*\)/g, 'sinus $1 tambah $2');
  spoken = spoken.replace(/\\sin\s*\(\s*([A-Za-z0-9°]+)\s*-\s*([A-Za-z0-9°]+)\s*\)/g, 'sinus $1 kurang $2');
  spoken = spoken.replace(/\\cos\s*\(\s*([A-Za-z0-9°]+)\s*\+\s*([A-Za-z0-9°]+)\s*\)/g, 'kosinus $1 tambah $2');
  spoken = spoken.replace(/\\cos\s*\(\s*([A-Za-z0-9°]+)\s*-\s*([A-Za-z0-9°]+)\s*\)/g, 'kosinus $1 kurang $2');
  spoken = spoken.replace(/\\tan\s*\(\s*([A-Za-z0-9°]+)\s*\+\s*([A-Za-z0-9°]+)\s*\)/g, 'tangen $1 tambah $2');
  spoken = spoken.replace(/\\tan\s*\(\s*([A-Za-z0-9°]+)\s*-\s*([A-Za-z0-9°]+)\s*\)/g, 'tangen $1 kurang $2');

  // Fractions: \frac{a}{b} -> a per b
  spoken = spoken.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2');

  // Square roots: \sqrt{a} -> akar a
  spoken = spoken.replace(/\\sqrt\{([^}]+)\}/g, 'akar $1');
  spoken = spoken.replace(/\\sqrt([0-9]+)/g, 'akar $1');

  // Greek letters
  spoken = spoken.replace(/\\alpha/g, 'alfa');
  spoken = spoken.replace(/\\beta/g, 'beta');
  spoken = spoken.replace(/\\theta/g, 'teta');
  spoken = spoken.replace(/\\pi/g, 'pi');
  spoken = spoken.replace(/\\phi/g, 'fi');

  // Functions
  spoken = spoken.replace(/\\sin/g, 'sinus');
  spoken = spoken.replace(/\\cos/g, 'kosinus');
  spoken = spoken.replace(/\\tan/g, 'tangen');
  spoken = spoken.replace(/\\cot/g, 'kotangen');
  spoken = spoken.replace(/\\sec/g, 'sekan');
  spoken = spoken.replace(/\\csc/g, 'kosekan');

  // Operators
  spoken = spoken.replace(/\\cdot/g, ' dikali ');
  spoken = spoken.replace(/\\times/g, ' dikali ');
  spoken = spoken.replace(/\\pm/g, ' plus minus ');
  spoken = spoken.replace(/\\mp/g, ' minus plus ');
  spoken = spoken.replace(/\\neq/g, ' tidak sama dengan ');
  spoken = spoken.replace(/\\approx/g, ' mendekati ');
  spoken = spoken.replace(/\\le/g, ' kurang dari atau sama dengan ');
  spoken = spoken.replace(/\\ge/g, ' lebih dari atau sama dengan ');
  spoken = spoken.replace(/\\left|\\right/g, '');

  // Strip math delimiters and leftover TeX commands
  spoken = spoken.replace(/\$\$([^\$]+)\$\$/g, ' $1 ');
  spoken = spoken.replace(/\$([^\$]+)\$/g, ' $1 ');
  spoken = spoken.replace(/\\[a-zA-Z]+/g, ' ');
  spoken = spoken.replace(/[{}]/g, ' ');

  // Clean double spaces
  spoken = spoken.replace(/\s+/g, ' ').trim();

  return spoken;
}

/**
 * Mathematical Character-by-Character Dictation Engine (Sistem Dikte Semua Karakter)
 * Explicitly spells out every symbol, bracket, operator, numerator, and denominator
 * as a mathematics teacher dictates step-by-step to students.
 */
export function convertMathToCharacterDictation(formula: string): string {
  if (!formula) return '';

  let text = formula.trim();

  // Strip math delimiters $ and $$
  text = text.replace(/^\$\$|\$\$$/g, '');
  text = text.replace(/^\$|\$$/g, '');
  text = text.replace(/\\left|\\right/g, '');
  text = text.replace(/\\mathbf\{([^}]+)\}/g, '$1');
  text = text.replace(/\\text\{([^}]+)\}/g, ' $1 ');

  // Handle \frac{pembilang}{penyebut} with explicit dictation
  text = text.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, (_match, num, den) => {
    const numDict = convertMathToCharacterDictation(num);
    const denDict = convertMathToCharacterDictation(den);
    return ` garis pecahan, dengan pembilang, ${numDict}, per, penyebut, ${denDict}, selesai pecahan `;
  });

  // Handle square roots \sqrt{x}
  text = text.replace(/\\sqrt\{([^}]+)\}/g, (_match, inner) => {
    const innerDict = convertMathToCharacterDictation(inner);
    return ` akar kuadrat dari, ${innerDict}, selesai akar `;
  });
  text = text.replace(/\\sqrt([0-9]+)/g, ' akar kuadrat dari angka $1 ');

  // Powers and degrees
  text = text.replace(/\^\{\\circ\}/g, ' simbol derajat ');
  text = text.replace(/\^\\circ/g, ' simbol derajat ');
  text = text.replace(/\^2/g, ' pangkat dua ');
  text = text.replace(/\^\{2\}/g, ' pangkat dua ');
  text = text.replace(/\^3/g, ' pangkat tiga ');
  text = text.replace(/\^\{([^}]+)\}/g, ' pangkat $1 ');

  // Squared trig functions: \sin^2 \theta -> sinus kuadrat dari teta
  text = text.replace(/\\sin\^2/g, ' fungsi sinus pangkat dua ');
  text = text.replace(/\\cos\^2/g, ' fungsi kosinus pangkat dua ');
  text = text.replace(/\\tan\^2/g, ' fungsi tangen pangkat dua ');

  // Trigonometric functions
  text = text.replace(/\\sin\b/g, ' fungsi sinus ');
  text = text.replace(/\\cos\b/g, ' fungsi kosinus ');
  text = text.replace(/\\tan\b/g, ' fungsi tangen ');
  text = text.replace(/\\cot\b/g, ' fungsi kotangen ');
  text = text.replace(/\\sec\b/g, ' fungsi sekan ');
  text = text.replace(/\\csc\b/g, ' fungsi kosekan ');

  // Greek letters
  text = text.replace(/\\alpha\b/g, ' huruf Yunani alfa ');
  text = text.replace(/\\beta\b/g, ' huruf Yunani beta ');
  text = text.replace(/\\theta\b/g, ' huruf Yunani teta ');
  text = text.replace(/\\pi\b/g, ' huruf Yunani pi ');
  text = text.replace(/\\phi\b/g, ' huruf Yunani fi ');

  // Relational operators
  text = text.replace(/\\neq/g, ' tanda tidak sama dengan ');
  text = text.replace(/\\approx/g, ' tanda mendekati ');
  text = text.replace(/\\le/g, ' tanda kurang dari atau sama dengan ');
  text = text.replace(/\\ge/g, ' tanda lebih dari atau sama dengan ');
  text = text.replace(/\\iff/g, ' jika dan hanya jika ');
  text = text.replace(/\\implies/g, ' maka menghasilkan ');
  text = text.replace(/\\in/g, ' elemen dari ');

  // Signs
  text = text.replace(/\\pm/g, ' tanda plus minus ');
  text = text.replace(/\\mp/g, ' tanda minus plus ');
  text = text.replace(/\\cdot/g, ' tanda kali titik ');
  text = text.replace(/\\times/g, ' tanda kali silang ');
  text = text.replace(/\s*\+\s*/g, ' tanda tambah ');
  text = text.replace(/\s*-\s*/g, ' tanda kurang ');
  text = text.replace(/\s*=\s*/g, ' tanda sama dengan ');

  // Parentheses & brackets
  text = text.replace(/\(/g, ' buka kurung, ');
  text = text.replace(/\)/g, ' tutup kurung, ');
  text = text.replace(/\[/g, ' buka kurung siku, ');
  text = text.replace(/\]/g, ' tutup kurung siku, ');
  text = text.replace(/\{/g, ' ');
  text = text.replace(/\}/g, ' ');

  // Explicit variable naming for clarity
  text = text.replace(/\bA\b/g, ' huruf kapital A ');
  text = text.replace(/\bB\b/g, ' huruf kapital B ');
  text = text.replace(/\bC\b/g, ' huruf kapital C ');
  text = text.replace(/\bx\b/g, ' huruf x ');
  text = text.replace(/\by\b/g, ' huruf y ');
  text = text.replace(/\br\b/g, ' huruf r ');
  text = text.replace(/\bt\b/g, ' huruf t ');
  text = text.replace(/\bk\b/g, ' konstanta bulat k ');

  // Numbers naming
  text = text.replace(/\b0\b/g, ' angka nol ');
  text = text.replace(/\b1\b/g, ' angka satu ');
  text = text.replace(/\b2\b/g, ' angka dua ');
  text = text.replace(/\b3\b/g, ' angka tiga ');
  text = text.replace(/\b4\b/g, ' angka empat ');
  text = text.replace(/\b5\b/g, ' angka lima ');
  text = text.replace(/\b6\b/g, ' angka enam ');
  text = text.replace(/\b7\b/g, ' angka tujuh ');
  text = text.replace(/\b8\b/g, ' angka delapan ');
  text = text.replace(/\b9\b/g, ' angka sembilan ');
  text = text.replace(/\b10\b/g, ' angka sepuluh ');
  text = text.replace(/\b12\b/g, ' angka dua belas ');
  text = text.replace(/\b13\b/g, ' angka tiga belas ');
  text = text.replace(/\b15\b/g, ' angka lima belas ');
  text = text.replace(/\b24\b/g, ' angka dua puluh empat ');
  text = text.replace(/\b25\b/g, ' angka dua puluh lima ');
  text = text.replace(/\b30\b/g, ' angka tiga puluh ');
  text = text.replace(/\b45\b/g, ' angka empat puluh lima ');
  text = text.replace(/\b60\b/g, ' angka enam puluh ');
  text = text.replace(/\b75\b/g, ' angka tujuh puluh lima ');
  text = text.replace(/\b90\b/g, ' angka sembilan puluh ');
  text = text.replace(/\b105\b/g, ' angka seratus lima ');
  text = text.replace(/\b120\b/g, ' angka seratus dua puluh ');
  text = text.replace(/\b150\b/g, ' angka seratus lima puluh ');
  text = text.replace(/\b165\b/g, ' angka seratus enam puluh lima ');
  text = text.replace(/\b180\b/g, ' angka seratus delapan puluh ');
  text = text.replace(/\b360\b/g, ' angka tiga ratus enam puluh ');

  // Clean double commas and spaces
  text = text.replace(/,\s*,/g, ',');
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

export type TTSStatus = 'idle' | 'playing' | 'paused' | 'error';

class TTSService {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentText: string = '';
  private spokenText: string = '';
  private rate: number = 1.0;
  private isMuted: boolean = false;
  private status: TTSStatus = 'idle';
  private indonesianVoice: SpeechSynthesisVoice | null = null;
  private listeners: Array<(status: TTSStatus, currentText: string) => void> = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural Indonesian voices
    const idVoice = voices.find(
      (v) => v.lang === 'id-ID' || v.lang === 'id_ID' || v.lang.startsWith('id')
    );
    if (idVoice) {
      this.indonesianVoice = idVoice;
    } else {
      // Fallback: look for generic voice
      this.indonesianVoice = voices.find((v) => v.default) || (voices.length > 0 ? voices[0] : null);
    }
  }

  public subscribe(listener: (status: TTSStatus, currentText: string) => void) {
    this.listeners.push(listener);
    listener(this.status, this.currentText);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.status, this.currentText));
  }

  public setRate(newRate: number) {
    this.rate = Math.max(0.7, Math.min(2.0, newRate));
    if (this.currentUtterance && this.status === 'playing') {
      // Restart current text at new rate
      const resumeText = this.currentText;
      this.stop();
      this.speak(resumeText);
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.status === 'playing') {
      this.stop();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getStatus(): TTSStatus {
    return this.status;
  }

  public getCurrentText(): string {
    return this.currentText;
  }

  public stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.status = 'idle';
    this.currentUtterance = null;
    this.notify();
  }

  public pause() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.status === 'playing') {
      window.speechSynthesis.pause();
      this.status = 'paused';
      this.notify();
    }
  }

  public resume() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window && this.status === 'paused') {
      window.speechSynthesis.resume();
      this.status = 'playing';
      this.notify();
    } else if (this.status === 'idle' && this.currentText) {
      this.speak(this.currentText);
    }
  }

  public replay() {
    if (this.currentText) {
      this.speak(this.currentText);
    }
  }

  public speak(rawText: string) {
    if (!rawText || !rawText.trim()) return;

    this.currentText = rawText;
    this.spokenText = convertMathToSpokenIndonesian(rawText);

    if (this.isMuted) {
      this.status = 'idle';
      this.notify();
      return;
    }

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.status = 'error';
      this.notify();
      return;
    }

    // Cancel any ongoing speech to avoid overlapping
    window.speechSynthesis.cancel();

    // Small delay to ensure clean utterance lifecycle
    setTimeout(() => {
      try {
        const utterance = new SpeechSynthesisUtterance(this.spokenText);
        utterance.rate = this.rate;
        utterance.pitch = 1.05; // Slightly warm and lively for Bu Guru Wenni
        utterance.lang = 'id-ID';

        if (this.indonesianVoice) {
          utterance.voice = this.indonesianVoice;
        }

        utterance.onstart = () => {
          this.status = 'playing';
          this.notify();
        };

        utterance.onend = () => {
          this.status = 'idle';
          this.notify();
        };

        utterance.onerror = (e) => {
          // If canceled manually, ignore error
          if (e.error === 'canceled' || e.error === 'interrupted') {
            this.status = 'idle';
          } else {
            console.warn('SpeechSynthesis error:', e.error);
            this.status = 'idle';
          }
          this.notify();
        };

        this.currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('TTS speak exception:', err);
        this.status = 'error';
        this.notify();
      }
    }, 50);
  }

  /**
   * Dedicated mathematical formula character-by-character dictation
   */
  public dictateFormula(title: string, formulas: string[], customScript?: string) {
    if (customScript && customScript.trim()) {
      this.speak(customScript);
      return;
    }

    const dictationParts = formulas.map((f, idx) => {
      const spelled = convertMathToCharacterDictation(f);
      return `Rumus ke ${idx + 1}: ${spelled}.`;
    });

    const fullScript = `Perhatian, sistem dikte karakter untuk kotak rumus: ${title}. Saya akan mendiktekan setiap karakter, simbol, dan operasinya secara bertahap: ${dictationParts.join(' ')} Selesai dikte.`;
    this.speak(fullScript);
  }
}

export const ttsService = new TTSService();
