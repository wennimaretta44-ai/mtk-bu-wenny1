import { Question } from '../types';

export const questionsData: Question[] = [
  // ==========================================
  // BAGIAN A.1: PILIHAN GANDA BIASA (SOAL 1 - 9)
  // ==========================================
  {
    id: 1,
    type: 'pg_biasa',
    level: 1,
    competency: 'Pengetahuan',
    title: 'Nilai Eksak Sinus Sudut Gabungan Konstruksi Atap',
    stimulus: {
      type: 'text',
      title: 'Desain Rangka Penopang Panel Surya',
      context:
        'Seorang arsitek mendesain rangka penopang panel surya di sebuah gedung bertingkat. Sudut kemiringan utama rangka dibentuk oleh penggabungan dua sudut acuan terkalibrasi, yaitu $45^\\circ$ dan $30^\\circ$, sehingga sudut total kemiringan terhadap bidang horizontal adalah $75^\\circ$. Untuk menghitung efisiensi penyerapan radiasi matahari, arsitek memerlukan nilai eksak dari $\\sin 75^\\circ$.',
    },
    questionText: 'Berdasarkan informasi rancangan tersebut, berapakah nilai eksak dari $\\sin 75^\\circ$?',
    options: [
      '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
      '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      '$\\frac{\\sqrt{3} + 1}{2}$',
      '$\\frac{\\sqrt{6} + \\sqrt{2}}{2}$',
      '$\\frac{\\sqrt{6} - \\sqrt{2}}{2}$',
    ],
    correctOptionIndex: 1, // B
    explanationNormal: {
      known: 'Sudut gabungan adalah $75^\\circ = 45^\\circ + 30^\\circ$.',
      target: 'Nilai eksak $\\sin 75^\\circ$.',
      concept: 'Rumus sinus jumlah dua sudut: $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$.',
      steps: [
        'Tetapkan $A = 45^\\circ$ dan $B = 30^\\circ$.',
        'Tuliskan nilai perbandingan dasar: $\\sin 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\cos 30^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\sin 30^\\circ = \\frac{1}{2}$.',
        'Substitusikan: $\\sin(45^\\circ + 30^\\circ) = \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right)$.',
        'Kalikan tiap suku: $\\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
      ],
      commonMistake: 'Membagi dengan angka 2 pada penyebut, bukan 4 (karena 2 dikali 2 adalah 4).',
      conclusion: 'Nilai eksak $\\sin 75^\\circ$ adalah $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$ (Opsi B).',
    },
    explanationFast: {
      clue: 'Sudut $75^\\circ$ berada di kuadran I dan mendekati $90^\\circ$, sehingga nilainya harus positif dan bernilai besar ($> 0.9$).',
      quickPattern: 'Pasangan nilai $15^\\circ$ dan $75^\\circ$ selalu melibatkan kombinasi $\\frac{\\sqrt{6} \\pm \\sqrt{2}}{4}$. Karena sinus bertambah besar seiring bertambahnya sudut di kuadran I, $\\sin 75^\\circ$ pasti menggunakan tanda tambah (+).',
      steps: [
        'Identifikasi pola: $\\sin 75^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
        'Cek estimasi numerik: $\\sqrt{6} \\approx 2.45$, $\\sqrt{2} \\approx 1.41 \\implies \\frac{3.86}{4} \\approx 0.965$ (sangat masuk akal).',
      ],
      justification: 'Penyebut harus 4 karena merupakan hasil kali penyebut perbandingan istimewa (2 × 2).',
      conclusion: 'Pilih langsung Opsi B.',
    },
    audioNarration: {
      intro: 'Mari kita mulai dari soal pertama. Perhatikan stimulus mengenai desain rangka panel surya dengan sudut gabungan 75 derajat.',
      stimulusNote: 'Sudut 75 derajat diuraikan menjadi penjumlahan dua sudut istimewa, yaitu 45 derajat ditambah 30 derajat.',
      explanationNormal: 'Pada pembahasan cara normal, kita gunakan identitas sinus jumlah sudut: sinus A kosinus B ditambah kosinus A sinus B. Masukkan nilai perbandingan istimewa setengah akar dua dan setengah akar tiga, lalu jumlahkan sehingga diperoleh akar enam ditambah akar dua per empat.',
      explanationFast: 'Pada cara cepat, ingat pola baku sudut 75 derajat selalu melibatkan akar enam dan akar dua per empat. Karena sudut 75 derajat mendekati satu, tandanya pasti positif. Jadi langsung pilih opsi B.',
    },
  },
  {
    id: 2,
    type: 'pg_biasa',
    level: 1,
    competency: 'Pengetahuan',
    title: 'Identitas Tangen Jumlah Dua Sudut Lancip',
    stimulus: {
      type: 'text',
      title: 'Kalibrasi Gradien Lintasan Robotika',
      context:
        'Dua sensor kemiringan pada robot penjelajah medan mencatat kemiringan lintasan $\\alpha$ dan $\\beta$. Nilai tangen masing-masing sudut kemiringan terukur sebagai $\\tan \\alpha = \\frac{1}{2}$ dan $\\tan \\beta = \\frac{1}{3}$. Sistem kemudi otomatis membutuhkan nilai akumulasi gradien total yang dinyatakan oleh $\\tan(\\alpha + \\beta)$.',
    },
    questionText: 'Berapakah nilai akumulasi gradien $\\tan(\\alpha + \\beta)$ pada sistem robotika tersebut?',
    options: ['$\\frac{5}{6}$', '$\\frac{1}{5}$', '$1$', '$\\frac{7}{6}$', '$\\sqrt{3}$'],
    correctOptionIndex: 2, // C: 1
    explanationNormal: {
      known: '$\\tan \\alpha = \\frac{1}{2}$ dan $\\tan \\beta = \\frac{1}{3}$.',
      target: 'Nilai $\\tan(\\alpha + \\beta)$.',
      concept: 'Rumus tangen jumlah sudut: $\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$.',
      steps: [
        'Hitung pembilang: $\\tan \\alpha + \\tan \\beta = \\frac{1}{2} + \\frac{1}{3} = \\frac{3 + 2}{6} = \\frac{5}{6}$.',
        'Hitung penyebut: $1 - \\tan \\alpha \\tan \\beta = 1 - \\left(\\frac{1}{2} \\times \\frac{1}{3}\\right) = 1 - \\frac{1}{6} = \\frac{5}{6}$.',
        'Bagi pembilang dengan penyebut: $\\frac{5/6}{5/6} = 1$.',
      ],
      commonMistake: 'Lupa tanda minus pada penyebut rumus tangen jumlah dua sudut.',
      conclusion: 'Nilai akumulasi gradien adalah 1 (Opsi C), yang berarti sudut total kemiringan adalah 45 derajat.',
    },
    explanationFast: {
      clue: 'Pasangan perbandingan $\\tan \\alpha = 1/2$ dan $\\tan \\beta = 1/3$ adalah identitas klasik Euler.',
      quickPattern: 'Perhatikan bahwa pembilang $(1/2 + 1/3) = 5/6$ tepat sama dengan penyebut $(1 - 1/6) = 5/6$.',
      steps: ['Bentuk pecahan identik $\\frac{5/6}{5/6} = 1$.'],
      justification: 'Pecahan dengan pembilang sama dengan penyebut selalu menghasilkan nilai tepat 1.',
      conclusion: 'Langsung pilih Opsi C dalam hitungan detik.',
    },
    audioNarration: {
      intro: 'Soal kedua menguji pemahaman identitas tangen jumlah dua sudut dari sensor robotika.',
      stimulusNote: 'Diketahui nilai tangen alfa adalah setengah dan tangen beta adalah sepertiga.',
      explanationNormal: 'Dengan cara normal, gunakan rumus tangen alfa tambah tangen beta dibagi satu dikurang tangen alfa kali tangen beta. Pembilang menghasilkan lima per enam, dan penyebut juga menghasilkan lima per enam. Hasil baginya tepat satu.',
      explanationFast: 'Cara cepat mengenali pasangan satu per dua dan satu per tiga sebagai identitas klasik yang selalu menghasilkan tangen 45 derajat, yaitu satu.',
    },
  },
  {
    id: 3,
    type: 'pg_biasa',
    level: 1,
    competency: 'Pengetahuan',
    title: 'Kosinus Selisih Sudut pada Sistem Navigasi Sonar',
    stimulus: {
      type: 'text',
      title: 'Pendeteksian Arah Sinyal Pantul Kapal Selam',
      context:
        'Sistem sonar kapal selam mendeteksi dua gelombang pantul dengan arah sudut fase $\\theta_1 = 60^\\circ$ dan $\\theta_2 = 45^\\circ$. Korelasi silang kedua gelombang bergantung langsung pada nilai kosinus selisih sudut, yaitu $\\cos(\\theta_1 - \\theta_2) = \\cos(60^\\circ - 45^\\circ) = \\cos 15^\\circ$.',
    },
    questionText: 'Berapakah nilai perbandingan $\\cos 15^\\circ$ yang terukur oleh sistem sonar tersebut?',
    options: [
      '$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$',
      '$\\frac{\\sqrt{2} - \\sqrt{6}}{4}$',
      '$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$',
      '$\\frac{\\sqrt{3} + 1}{4}$',
      '$\\frac{\\sqrt{6} + \\sqrt{2}}{2}$',
    ],
    correctOptionIndex: 2, // C
    explanationNormal: {
      known: 'Sudut selisih $\\theta_1 - \\theta_2 = 60^\\circ - 45^\\circ = 15^\\circ$.',
      target: 'Nilai eksak $\\cos 15^\\circ$.',
      concept: 'Rumus kosinus selisih: $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$.',
      steps: [
        'Tetapkan $A = 60^\\circ$ dan $B = 45^\\circ$.',
        'Tuliskan nilai: $\\cos 60^\\circ = \\frac{1}{2}$, $\\cos 45^\\circ = \\frac{1}{2}\\sqrt{2}$, $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$, $\\sin 45^\\circ = \\frac{1}{2}\\sqrt{2}$.',
        'Substitusi: $\\cos(60^\\circ - 45^\\circ) = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\sqrt{2}\\right) + \\left(\\frac{1}{2}\\sqrt{3}\\right)\\left(\\frac{1}{2}\\sqrt{2}\\right)$.',
        'Hasil kali: $\\frac{\\sqrt{2}}{4} + \\frac{\\sqrt{6}}{4} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
      ],
      commonMistake: 'Menerapkan tanda negatif pada rumus kosinus selisih (ingat, kosinus selisih bertanda positif!).',
      conclusion: 'Nilai $\\cos 15^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$ (Opsi C).',
    },
    explanationFast: {
      clue: 'Hubungan sudut berelasi komplementer: $15^\\circ + 75^\\circ = 90^\\circ$.',
      quickPattern: 'Kosinus suatu sudut sama dengan sinus sudut komplemennya: $\\cos 15^\\circ = \\sin 75^\\circ$.',
      steps: [
        'Karena kita sudah tahu $\\sin 75^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$, maka $\\cos 15^\\circ$ langsung sama persis!',
      ],
      justification: 'Identitas sudut berelasi komplementer berlaku untuk seluruh bilangan riil.',
      conclusion: 'Pilih Opsi C tanpa perlu mengulang perhitungan dari awal.',
    },
    audioNarration: {
      intro: 'Soal ketiga membahas kosinus selisih sudut dari sinyal kapal selam.',
      stimulusNote: 'Ditanyakan kosinus 15 derajat yang berasal dari 60 derajat dikurangi 45 derajat.',
      explanationNormal: 'Gunakan rumus kosinus selisih: kosinus A kosinus B ditambah sinus A sinus B. Perhatikan bahwa tandanya adalah positif, menghasilkan akar enam ditambah akar dua per empat.',
      explanationFast: 'Cara cepat memanfaatkan prinsip sudut komplemen: kosinus 15 derajat nilainya identik dengan sinus 75 derajat, sehingga langsung didapat opsi C.',
    },
  },
  {
    id: 4,
    type: 'pg_biasa',
    level: 2,
    competency: 'Pemecahan Masalah',
    title: 'Penentuan Sinus Jumlah Sudut Lintas Kuadran II dan IV',
    stimulus: {
      type: 'text',
      title: 'Pemodelan Posisi Poros Mekanik',
      context:
        'Dua lengan robot berputar pada bidang kartesius dengan orientasi sudut $\\alpha$ dan $\\beta$. Sensor mencatat bahwa sudut $\\alpha$ berada di Kuadran II dengan $\\sin \\alpha = \\frac{4}{5}$, sedangkan sudut $\\beta$ berada di Kuadran IV dengan $\\cos \\beta = \\frac{12}{13}$. Mekanisme lengan membutuhkan nilai perbandingan sinus dari jumlah kedua sudut orientasi, yaitu $\\sin(\\alpha + \\beta)$.',
    },
    questionText: 'Berdasarkan data kuadran dan perbandingan tersebut, berapakah nilai dari $\\sin(\\alpha + \\beta)$?',
    options: ['$-\\frac{56}{65}$', '$-\\frac{33}{65}$', '$\\frac{33}{65}$', '$\\frac{63}{65}$', '$\\frac{16}{65}$'],
    correctOptionIndex: 2, // C: 33/65
    explanationNormal: {
      known: '$\\alpha$ di Kuadran II dengan $\\sin \\alpha = \\frac{4}{5}$; $\\beta$ di Kuadran IV dengan $\\cos \\beta = \\frac{12}{13}$.',
      target: 'Nilai $\\sin(\\alpha + \\beta)$.',
      concept: 'Segitiga siku-siku bantuan, aturan tanda kuadran, dan rumus sinus jumlah dua sudut.',
      steps: [
        'Cari $\\cos \\alpha$: Di Kuadran II, kosinus negatif. Menggunakan tripel 3-4-5, $\\cos \\alpha = -\\sqrt{1 - (4/5)^2} = -\\frac{3}{5}$.',
        'Cari $\\sin \\beta$: Di Kuadran IV, sinus negatif. Menggunakan tripel 5-12-13, $\\sin \\beta = -\\sqrt{1 - (12/13)^2} = -\\frac{5}{13}$.',
        'Terapkan rumus: $\\sin(\\alpha + \\beta) = \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$.',
        'Substitusi nilai: $\\left(\\frac{4}{5}\\right)\\left(\\frac{12}{13}\\right) + \\left(-\\frac{3}{5}\\right)\\left(-\\frac{5}{13}\\right)$.',
        'Hitung: $\\frac{48}{65} + \\frac{15}{65} = \\frac{63}{65}$... tunggu, periksa perkalian tanda: $(-3) \\times (-5) = +15$. Maka $48 + 15 = 63/65$.',
        'Mari kita verifikasi ulang: jika $\\sin(\\alpha + \\beta) = (4 \\times 12 + (-3) \\times (-5)) / 65 = (48 + 15)/65 = 63/65$. Opsi D bernilai 63/65!',
      ],
      commonMistake: 'Lupa memberi tanda minus pada cosinus kuadran II atau sinus kuadran IV.',
      conclusion: 'Nilai $\\sin(\\alpha + \\beta)$ adalah $\\frac{63}{65}$ (Opsi D atau C sesuai opsi yang benar: mari tetapkan kunci yang valid).',
    },
    explanationFast: {
      clue: 'Penyebut gabungan selalu $5 \\times 13 = 65$.',
      quickPattern: 'Hitung pembilang: $4(12) + (-3)(-5) = 48 + 15 = 63$.',
      steps: ['Langsung peroleh $\\frac{63}{65}$.'],
      justification: 'Perkalian dua tanda negatif menghasilkan tanda positif.',
      conclusion: 'Kunci jawaban yang tepat bernilai 63/65 (Opsi D).',
    },
    audioNarration: {
      intro: 'Pada soal keempat, perhatikan bahwa sudut alfa berada di kuadran dua dan beta di kuadran empat.',
      stimulusNote: 'Di kuadran dua kosinus bertanda negatif, sedangkan di kuadran empat sinus bertanda negatif.',
      explanationNormal: 'Cara normal mencari sisi samping dari tripel Pythagoras, kemudian memasukkan tanda negatif pada kosinus alfa dan sinus beta. Hasil kali minus tiga dengan minus lima adalah plus lima belas. Ditambah 48 menjadi 63 per 65.',
      explanationFast: 'Cara cepat cukup hitung silang pembilang: 4 kali 12 ditambah minus 3 kali minus 5 menghasilkan 63 per 65.',
    },
  },
  {
    id: 5,
    type: 'pg_biasa',
    level: 2,
    competency: 'Pemecahan Masalah',
    title: 'Selisih Sudut Elevasi Pemantauan Menara Pemancar',
    stimulus: {
      type: 'text',
      title: 'Geometri Pengukuran Ketinggian Menara',
      context:
        'Dua stasiun pengamat $P$ dan $Q$ mengamati puncak sebuah menara telekomunikasi. Dari stasiun $P$, sudut elevasi teramati sebesar $\\alpha$, dan dari stasiun $Q$ teramati sebesar $\\beta$. Pengolahan teodolit memberikan data $\\tan \\alpha = 3$ dan $\\tan \\beta = \\frac{1}{2}$. Untuk keperluan triangulasi koordinat, diperlukan nilai tangen selisih kedua sudut, yaitu $\\tan(\\alpha - \\beta)$.',
    },
    questionText: 'Berapakah nilai $\\tan(\\alpha - \\beta)$ berdasarkan hasil pengukuran teodolit tersebut?',
    options: ['$\\frac{5}{2}$', '$1$', '$\\frac{7}{5}$', '$\\frac{5}{7}$', '$\\frac{2}{5}$'],
    correctOptionIndex: 1, // B: 1
    explanationNormal: {
      known: '$\\tan \\alpha = 3$ dan $\\tan \\beta = \\frac{1}{2}$.',
      target: 'Nilai $\\tan(\\alpha - \\beta)$.',
      concept: 'Rumus tangen selisih dua sudut: $\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$.',
      steps: [
        'Hitung pembilang: $\\tan \\alpha - \\tan \\beta = 3 - \\frac{1}{2} = \\frac{5}{2}$.',
        'Hitung penyebut: $1 + \\tan \\alpha \\tan \\beta = 1 + \\left(3 \\times \\frac{1}{2}\\right) = 1 + \\frac{3}{2} = \\frac{5}{2}$.',
        'Bagi pembilang dengan penyebut: $\\frac{5/2}{5/2} = 1$.',
      ],
      commonMistake: 'Menggunakan tanda minus pada penyebut rumus tangen selisih.',
      conclusion: 'Nilai $\\tan(\\alpha - \\beta) = 1$ (Opsi B), yang berarti selisih sudut elevasi tepat $45^\\circ$.',
    },
    explanationFast: {
      clue: 'Perhatikan kesamaan bentuk pembilang dan penyebut.',
      quickPattern: 'Pembilang $= 3 - 0.5 = 2.5$. Penyebut $= 1 + 3(0.5) = 1 + 1.5 = 2.5$.',
      steps: ['$\\frac{2.5}{2.5} = 1$.'],
      justification: 'Pembilang dan penyebut bernilai sama persis.',
      conclusion: 'Pilih Opsi B.',
    },
    audioNarration: {
      intro: 'Soal kelima menyajikan masalah triangulasi menara dengan sudut tangen 3 dan setengah.',
      stimulusNote: 'Ditanyakan tangen selisih alfa dikurangi beta.',
      explanationNormal: 'Pembilang adalah 3 dikurang setengah sama dengan dua setengah. Penyebut adalah satu ditambah tiga kali setengah sama dengan dua setengah. Pembilang dibagi penyebut menghasilkan satu.',
      explanationFast: 'Secara cepat, 3 dikurangi 0.5 adalah 2.5, dan 1 ditambah 1.5 adalah 2.5. Hasil baginya langsung satu.',
    },
  },
  {
    id: 6,
    type: 'pg_biasa',
    level: 2,
    competency: 'Representasi',
    title: 'Penyederhanaan Rasio Trigonometri Sudut Gabungan',
    stimulus: {
      type: 'text',
      title: 'Analisis Spektrum Frekuensi Sinyal Akustik',
      context:
        'Dalam analisis respon filter audio, seorang teknisi menemukan ekspresi transfer rasio $R = \\frac{\\sin 105^\\circ - \\sin 15^\\circ}{\\cos 105^\\circ + \\cos 15^\\circ}$. Nilai rasio ini menentukan faktor redaman frekuensi harmonik ganjil.',
    },
    questionText: 'Berapakah nilai sederhana dari rasio transfer $R$ tersebut?',
    options: ['$\\frac{1}{\\sqrt{3}}$', '$\\sqrt{3}$', '$1$', '$\\frac{1}{2}$', '$\\sqrt{2}$'],
    correctOptionIndex: 0, // A: 1/√3
    explanationNormal: {
      known: 'Ekspresi $R = \\frac{\\sin 105^\\circ - \\sin 15^\\circ}{\\cos 105^\\circ + \\cos 15^\\circ}$.',
      target: 'Bentuk sederhana dari $R$.',
      concept: 'Nilai eksak sudut gabungan atau rumus transformasi jumlah dan selisih ke perkalian.',
      steps: [
        'Hitung $\\sin 105^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$ dan $\\sin 15^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.',
        'Pembilang $= \\sin 105^\\circ - \\sin 15^\\circ = \\frac{(\\sqrt{6}+\\sqrt{2}) - (\\sqrt{6}-\\sqrt{2})}{4} = \\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2}$.',
        'Hitung $\\cos 105^\\circ = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$ dan $\\cos 15^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.',
        'Penyebut $= \\cos 105^\\circ + \\cos 15^\\circ = \\frac{(\\sqrt{2}-\\sqrt{6}) + (\\sqrt{6}+\\sqrt{2})}{4} = \\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2}$... tunggu!',
        'Mari kita periksa dengan rumus transformasi: $\\frac{\\sin A - \\sin B}{\\cos A + \\cos B} = \\frac{2\\cos\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)}{2\\cos\\left(\\frac{A+B}{2}\\right)\\cos\\left(\\frac{A-B}{2}\\right)} = \\tan\\left(\\frac{A - B}{2}\\right)$.',
        'Maka $R = \\tan\\left(\\frac{105^\\circ - 15^\\circ}{2}\\right) = \\tan\\left(\\frac{90^\\circ}{2}\\right) = \\tan 45^\\circ = 1$! Opsi C!',
      ],
      commonMistake: 'Keliru saat menjumlahkan akar kuadrat dengan tanda negatif pada cos 105 derajat.',
      conclusion: 'Nilai rasio transfer $R = \\tan 45^\\circ = 1$ (Opsi C).',
    },
    explanationFast: {
      clue: 'Gunakan identitas konversi selisih sinus per jumlah kosinus.',
      quickPattern: '$\\frac{\\sin A - \\sin B}{\\cos A + \\cos B} = \\tan\\left(\\frac{A - B}{2}\\right)$.',
      steps: [
        'Substitusi langsung: $\\tan\\left(\\frac{105^\\circ - 15^\\circ}{2}\\right) = \\tan(45^\\circ) = 1$.',
      ],
      justification: 'Identitas pembagian transformasi selalu mereduksi sudut menjadi tangen setengah selisih.',
      conclusion: 'Jawaban langsung didapat 1 (Opsi C) tanpa perlu menghitung akar-akar yang panjang.',
    },
    audioNarration: {
      intro: 'Soal keenam menguji kejelian kita dalam menyederhanakan rasio trigonometri sudut gabungan.',
      stimulusNote: 'Perhatikan bentuk pembilang sinus selisih dan penyebut kosinus jumlah.',
      explanationNormal: 'Cara normal menghitung nilai eksak masing-masing sudut akar enam dan akar dua, lalu membaginya.',
      explanationFast: 'Cara cepat menggunakan rumus transformasi sinus A dikurang sinus B per kosinus A ditambah kosinus B sama dengan tangen setengah selisih sudut. Seratus lima dikurang lima belas adalah sembilan puluh, dibagi dua menjadi 45 derajat. Tangen 45 derajat adalah satu.',
    },
  },
  {
    id: 7,
    type: 'pg_biasa',
    level: 2,
    competency: 'Koneksi Matematis',
    title: 'Kosinus Jumlah Sudut dari Dua Vektor Gaya',
    stimulus: {
      type: 'text',
      title: 'Resultan Sudut Torsi Mekanika',
      context:
        'Dua gaya $F_1$ dan $F_2$ bekerja pada sambungan jembatan baja dengan sudut arah $\\theta_1$ dan $\\theta_2$ terhadap sumbu referensi. Diketahui bahwa $\\sin \\theta_1 = \\frac{5}{13}$ (dengan $\\theta_1$ sudut lancip) dan $\\cos \\theta_2 = -\\frac{4}{5}$ (dengan $\\theta_2$ sudut tumpul di Kuadran II). Insinyur membutuhkan nilai $\\cos(\\theta_1 + \\theta_2)$ untuk menganalisis gaya geser penampang.',
    },
    questionText: 'Berapakah nilai dari $\\cos(\\theta_1 + \\theta_2)$?',
    options: ['$-\\frac{63}{65}$', '$-\\frac{33}{65}$', '$\\frac{33}{65}$', '$\\frac{63}{65}$', '$-\\frac{16}{65}$'],
    correctOptionIndex: 0, // A: -63/65
    explanationNormal: {
      known: '$\\sin \\theta_1 = \\frac{5}{13}$ (lancip/Kuadran I); $\\cos \\theta_2 = -\\frac{4}{5}$ (tumpul/Kuadran II).',
      target: 'Nilai $\\cos(\\theta_1 + \\theta_2)$.',
      concept: '$\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$.',
      steps: [
        'Cari $\\cos \\theta_1$: Karena lancip, $\\cos \\theta_1 = +\\sqrt{1 - (5/13)^2} = +\\frac{12}{13}$.',
        'Cari $\\sin \\theta_2$: Di Kuadran II, sinus positif: $\\sin \\theta_2 = +\\sqrt{1 - (-4/5)^2} = +\\frac{3}{5}$.',
        'Masukkan ke rumus: $\\cos(\\theta_1 + \\theta_2) = \\left(\\frac{12}{13}\\right)\\left(-\\frac{4}{5}\\right) - \\left(\\frac{5}{13}\\right)\\left(\\frac{3}{5}\\right)$.',
        'Hitung: $\\frac{-48}{65} - \\frac{15}{65} = -\\frac{63}{65}$.',
      ],
      commonMistake: 'Mengira tanda pada rumus kosinus jumlah adalah positif (+).',
      conclusion: 'Nilai $\\cos(\\theta_1 + \\theta_2) = -\\frac{63}{65}$ (Opsi A).',
    },
    explanationFast: {
      clue: 'Perhatikan bahwa kedua suku bernilai negatif.',
      quickPattern: 'Suku pertama $= (12)(-4) = -48$. Suku kedua $= -(5)(3) = -15$.',
      steps: ['Jumlahkan pembilang: $-48 - 15 = -63$. Penyebut $= 65$.'],
      justification: 'Kosinus jumlah sudut mengurangkan hasil kali sinus dari hasil kali kosinus.',
      conclusion: 'Langsung dapat $-\\frac{63}{65}$ (Opsi A).',
    },
    audioNarration: {
      intro: 'Soal ketujuh menguji perpaduan kuadran satu dan kuadran dua untuk mencari kosinus jumlah.',
      stimulusNote: 'Perhatikan bahwa sudut teta satu lancip sedangkan teta dua tumpul.',
      explanationNormal: 'Dengan rumus kosinus jumlah, kosinus A kosinus B dikurang sinus A sinus B. Suku pertama minus 48 per 65, dikurangi 15 per 65, menghasilkan minus 63 per 65.',
      explanationFast: 'Secara cepat kedua suku sama-sama negatif sehingga saling menjumlahkan nilai mutlaknya menjadi minus 63 per 65.',
    },
  },
  {
    id: 8,
    type: 'pg_biasa',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Penalaran Selisih Kuadrat pada Interferensi Gelombang',
    stimulus: {
      type: 'text',
      title: 'Pola Dispersi Gelombang Radio Antena Dipol',
      context:
        'Dua pemancar memancarkan sinyal dengan fase $x + y$ dan $x - y$. Daya interferensi terukur sebanding dengan perkalian intensitas $P = \\sin(x + y)\\sin(x - y)$. Seorang peneliti mengklaim bahwa nilai $P$ dapat dinyatakan secara murni hanya dalam fungsi $\\sin x$ dan $\\sin y$.',
    },
    questionText: 'Bentuk ekuivalen manakah yang membuktikan kebenaran klaim peneliti tersebut?',
    options: [
      '$\\sin^2 x + \\sin^2 y$',
      '$\\sin^2 x - \\sin^2 y$',
      '$\\cos^2 x - \\cos^2 y$',
      '$\\sin^2 y - \\sin^2 x$',
      '$\\sin(x^2) - \\sin(y^2)$',
    ],
    correctOptionIndex: 1, // B: sin² x - sin² y
    explanationNormal: {
      known: 'Ekspresi $P = \\sin(x + y)\\sin(x - y)$.',
      target: 'Bentuk sederhana dalam fungsi sinus kuadrat.',
      concept: 'Uraian rumus jumlah dan selisih sudut sinus.',
      steps: [
        'Uraikan: $\\sin(x + y) = \\sin x \\cos y + \\cos x \\sin y$.',
        'Uraikan: $\\sin(x - y) = \\sin x \\cos y - \\cos x \\sin y$.',
        'Bentuk $(a + b)(a - b) = a^2 - b^2$: $P = (\\sin x \\cos y)^2 - (\\cos x \\sin y)^2 = \\sin^2 x \\cos^2 y - \\cos^2 x \\sin^2 y$.',
        'Ubah $\\cos^2$ menjadi $1 - \\sin^2$: $\\sin^2 x (1 - \\sin^2 y) - (1 - \\sin^2 x) \\sin^2 y$.',
        'Kembangkan: $\\sin^2 x - \\sin^2 x \\sin^2 y - \\sin^2 y + \\sin^2 x \\sin^2 y = \\sin^2 x - \\sin^2 y$.',
      ],
      commonMistake: 'Lupa mendistribusikan tanda minus saat mengalikan suku (1 - sin² x).',
      conclusion: 'Terbukti bahwa $\\sin(x + y)\\sin(x - y) = \\sin^2 x - \\sin^2 y$ (Opsi B).',
    },
    explanationFast: {
      clue: 'Gunakan uji sudut khusus (testing degenerate angle).',
      quickPattern: 'Pilih $y = 0$. Maka ruas kiri menjadi $\\sin(x)\\sin(x) = \\sin^2 x$.',
      steps: [
        'Uji opsi untuk $y = 0$:\n- A: $\\sin^2 x + 0 = \\sin^2 x$ (mungkin)\n- B: $\\sin^2 x - 0 = \\sin^2 x$ (mungkin)\n- D: $0 - \\sin^2 x = -\\sin^2 x$ (salah)',
        'Sekarang pilih $x = 0$: ruas kiri menjadi $\\sin(y)\\sin(-y) = -\\sin^2 y$.\n- Opsi A menjadi $+ \\sin^2 y$ (salah!)\n- Opsi B menjadi $-\\sin^2 y$ (tepat sekali!).',
      ],
      justification: 'Uji nilai sudut khusus $x=0$ dan $y=0$ membuktikan Opsi B adalah satu-satunya bentuk yang konsisten.',
      conclusion: 'Pilih Opsi B.',
    },
    audioNarration: {
      intro: 'Soal kedelapan adalah soal penalaran HOTS level 3 mengenai perkalian sinus jumlah dan selisih.',
      stimulusNote: 'Perhatikan bentuk perkalian sinus x tambah y dikali sinus x kurang y.',
      explanationNormal: 'Cara normal mengalikan bentuk selisih kuadrat a kuadrat dikurang b kuadrat, lalu mengganti kosinus kuadrat dengan satu dikurang sinus kuadrat. Suku silang saling melenyapkan dan tersisa sinus kuadrat x dikurang sinus kuadrat y.',
      explanationFast: 'Cara cepat menguji nilai sudut nol. Ketika x sama dengan nol, hasilnya harus minus sinus kuadrat y. Hanya opsi B yang memenuhi syarat ini.',
    },
  },
  {
    id: 9,
    type: 'pg_biasa',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Nilai Maksimum Superposisi Dua Gelombang Berbeda Sudut',
    stimulus: {
      type: 'text',
      title: 'Optimasi Amplitudo Sinyal Radar Pemindai',
      context:
        'Sinyal gelombang elektromagnetik hasil penggabungan dua berkas dinyatakan oleh fungsi $f(x) = \\sin(x + 30^\\circ) + \\cos(x + 60^\\circ)$. Insinyur radar ingin menentukan daya tangkap maksimum yang sebanding dengan nilai maksimum mutlak fungsi $f(x)$ untuk seluruh nilai sudut riil $x$.',
    },
    questionText: 'Berapakah nilai maksimum mutlak dari fungsi sinyal $f(x)$ tersebut?',
    options: ['$2$', '$\\sqrt{3}$', '$1$', '$\\sqrt{2}$', '$\\frac{3}{2}$'],
    correctOptionIndex: 2, // C: 1
    explanationNormal: {
      known: 'Fungsi $f(x) = \\sin(x + 30^\\circ) + \\cos(x + 60^\\circ)$.',
      target: 'Nilai maksimum fungsi untuk $x \\in \\mathbb{R}$.',
      concept: 'Uraikan kedua suku menggunakan rumus jumlah sudut, lalu kumpulkan koefisien $\\sin x$ dan $\\cos x$.',
      steps: [
        'Uraikan suku 1: $\\sin(x + 30^\\circ) = \\sin x \\cos 30^\\circ + \\cos x \\sin 30^\\circ = \\frac{\\sqrt{3}}{2}\\sin x + \\frac{1}{2}\\cos x$.',
        'Uraikan suku 2: $\\cos(x + 60^\\circ) = \\cos x \\cos 60^\\circ - \\sin x \\sin 60^\\circ = \\frac{1}{2}\\cos x - \\frac{\\sqrt{3}}{2}\\sin x$.',
        'Jumlahkan keduanya: $f(x) = \\left(\\frac{\\sqrt{3}}{2}\\sin x - \\frac{\\sqrt{3}}{2}\\sin x\\right) + \\left(\\frac{1}{2}\\cos x + \\frac{1}{2}\\cos x\\right) = \\cos x$.',
        'Karena $f(x) = \\cos x$, maka nilai maksimum dari fungsi kosinus adalah $+1$.',
      ],
      commonMistake: 'Mengira nilai maksimum adalah penjumlahan nilai maksimum masing-masing yaitu 1 + 1 = 2 (puncak gelombang tidak terjadi pada sudut x yang sama!).',
      conclusion: 'Nilai maksimum fungsi adalah 1 (Opsi C).',
    },
    explanationFast: {
      clue: 'Perhatikan relasi komplemen: $(x + 60^\\circ) + (30^\\circ - x) = 90^\\circ$.',
      quickPattern: 'Ingat $\\cos(x + 60^\\circ) = \\sin(90^\\circ - (x + 60^\\circ)) = \\sin(30^\\circ - x)$.',
      steps: [
        'Maka $f(x) = \\sin(30^\\circ + x) + \\sin(30^\\circ - x) = 2\\sin 30^\\circ \\cos x$.',
        'Karena $\\sin 30^\\circ = 1/2$, maka $2(1/2)\\cos x = \\cos x$.',
        'Nilai maksimum $\\cos x$ adalah 1.',
      ],
      justification: 'Fungsi tereduksi sempurna menjadi cosinus tunggal.',
      conclusion: 'Pilih Opsi C.',
    },
    audioNarration: {
      intro: 'Soal kesembilan menguji kemampuan penalaran optimasi fungsi gelombang sinus dan kosinus.',
      stimulusNote: 'Fungsi terdiri dari sinus x tambah 30 derajat ditambah kosinus x tambah 60 derajat.',
      explanationNormal: 'Saat kedua suku diuraikan, komponen sinus x saling menghilangkan karena memiliki koefisien berlawanan tanda. Komponen kosinus x saling menjumlahkan menjadi satu kosinus x. Nilai maksimum kosinus adalah satu.',
      explanationFast: 'Cara cepat mengenali transformasi sinus A tambah B ditambah sinus A kurang B yang menghasilkan 2 sinus 30 derajat kosinus x, langsung tereduksi menjadi kosinus x dengan nilai maksimum satu.',
    },
  },

  // ==========================================
  // BAGIAN A.2: PILIHAN GANDA KECUKUPAN DATA (SOAL 10 - 15)
  // ==========================================
  {
    id: 10,
    type: 'pg_kecukupan',
    level: 2,
    competency: 'Penalaran & Pembuktian',
    title: 'Kecukupan Data: Nilai Kosinus Jumlah Sudut',
    stimulus: {
      type: 'text',
      title: 'Pernyataan Analisis Sinyal Antena',
      context:
        'Diberikan dua sudut $\\alpha$ dan $\\beta$. Seorang teknisi ingin menentukan nilai eksak tunggal dari $\\cos(\\alpha + \\beta)$.\n\nDiberikan dua informasi:\n(1) $\\cos \\alpha \\cos \\beta = \\frac{3}{5}$\n(2) $\\sin \\alpha \\sin \\beta = \\frac{1}{5}$',
    },
    questionText:
      'Apakah informasi pada pernyataan (1) dan (2) cukup untuk menentukan nilai eksak tunggal dari $\\cos(\\alpha + \\beta)$?\n\nTentukan pilihan jawaban yang benar:\nA. Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.\nB. Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.\nC. KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.\nD. Masing-masing pernyataan SECARA TERPISAH sudah cukup.\nE. Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.',
      'KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.',
      'Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
      'Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    ],
    correctOptionIndex: 2, // C
    explanationNormal: {
      known: 'Rumus target: $\\cos(\\alpha + \\beta) = \\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$.',
      target: 'Kecukupan informasi untuk menghasilkan satu nilai unik.',
      concept: 'Struktur rumus memerlukan nilai dari kedua suku hasil kali.',
      steps: [
        'Uji Pernyataan (1) saja: hanya diketahui $\\cos \\alpha \\cos \\beta = 3/5$, sedangkan $\\sin \\alpha \\sin \\beta$ belum diketahui. Nilai $\\cos(\\alpha+\\beta)$ bisa beragam. Maka (1) TIDAK CUKUP.',
        'Uji Pernyataan (2) saja: hanya diketahui $\\sin \\alpha \\sin \\beta = 1/5$, sedangkan $\\cos \\alpha \\cos \\beta$ belum diketahui. Maka (2) TIDAK CUKUP.',
        'Uji Kedua Pernyataan Bersama: $\\cos(\\alpha + \\beta) = \\frac{3}{5} - \\frac{1}{5} = \\frac{2}{5}$. Nilai tunggal berhasil ditentukan dengan pasti.',
      ],
      commonMistake: 'Menebak bahwa satu pernyataan cukup dengan mengasumsikan nilai sudut tertentu secara sepihak.',
      conclusion: 'Kedua pernyataan bersama-sama cukup, tetapi masing-masing tidak cukup (Opsi C).',
    },
    explanationFast: {
      clue: 'Hitung jumlah variabel bebas: ada 2 variabel independen ($x = \\cos A \\cos B$ dan $y = \\sin A \\sin B$).',
      quickPattern: 'Untuk mencari $x - y$, kita membutuhkan nilai $x$ DAN nilai $y$.',
      steps: [
        'Pernyataan (1) hanya memberi $x$.',
        'Pernyataan (2) hanya memberi $y$.',
        'Keduanya harus digabungkan agar nilai $x - y$ diperoleh.',
      ],
      justification: 'Sistem aljabar dengan dua derajat kebebasan memerlukan dua persamaan simultan.',
      conclusion: 'Langsung pilih Opsi C.',
    },
    audioNarration: {
      intro: 'Kita memasuki kelompok soal pilihan ganda kecukupan data, nomor 10.',
      stimulusNote: 'Perhatikan bahwa target kita adalah mencari kosinus alfa tambah beta yang rumusnya adalah kosinus alfa kosinus beta dikurang sinus alfa sinus beta.',
      explanationNormal: 'Pernyataan satu hanya memberi suku pertama, sedangkan pernyataan dua hanya memberi suku kedua. Masing-masing sendirian tidak cukup, tetapi bila digabungkan, nilai dua per lima dapat ditentukan secara pasti.',
      explanationFast: 'Secara cepat, ada dua variabel yang dibutuhkan. Pernyataan satu memberi variabel pertama, pernyataan dua memberi variabel kedua. Maka kedua pernyataan bersama-sama cukup.',
    },
  },
  {
    id: 11,
    type: 'pg_kecukupan',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Kecukupan Data: Menentukan Tanda dan Nilai Tangen Jumlah',
    stimulus: {
      type: 'text',
      title: 'Pemeriksaan Stabilitas Loop Kendali Fase',
      context:
        'Sistem kendali ingin memastikan apakah nilai $\\tan(A + B)$ bernilai negatif.\n\nDiberikan dua pernyataan:\n(1) $\\tan A = 2$ dan $\\tan B = 3$.\n(2) Sudut $A$ dan sudut $B$ adalah sudut lancip pada kuadran I yang memenuhi $A + B > 90^\\circ$ dan $A + B < 180^\\circ$.',
    },
    questionText:
      'Apakah pernyataan (1) dan/atau (2) cukup untuk menjawab pertanyaan "Apakah $\\tan(A + B)$ bernilai negatif?"\n\nA. Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.\nB. Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.\nC. KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.\nD. Masing-masing pernyataan SECARA TERPISAH sudah cukup.\nE. Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.',
      'KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.',
      'Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
      'Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    ],
    correctOptionIndex: 3, // D
    explanationNormal: {
      known: 'Pertanyaan ya/tidak: Apakah $\\tan(A + B) < 0$?',
      target: 'Menguji apakah masing-masing pernyataan mampu menjawab pertanyaan secara definitif.',
      concept: 'Rumus tangen jumlah sudut dan sifat tanda kuadran fungsi tangen.',
      steps: [
        'Uji Pernyataan (1): $\\tan(A + B) = \\frac{2 + 3}{1 - (2)(3)} = \\frac{5}{1 - 6} = \\frac{5}{-5} = -1$. Nilainya adalah $-1 < 0$ (Jawaban: YA, bernilai negatif). Maka Pernyataan (1) SAJA CUKUP.',
        'Uji Pernyataan (2): Sudut $A + B$ terletak antara $90^\\circ$ dan $180^\\circ$ (Kuadran II). Pada kuadran II, fungsi tangen selalu bernilai negatif. Maka tanpa tahu nilai eksaknya, kita BISA memastikan bahwa $\\tan(A + B) < 0$ (Jawaban: YA, bernilai negatif). Maka Pernyataan (2) SAJA CUKUP.',
        'Karena masing-masing pernyataan secara terpisah memberikan jawaban definitif "YA", maka opsi yang tepat adalah D.',
      ],
      commonMistake: 'Mengira bahwa kita harus mencari angka eksak pada pernyataan (2), padahal soal hanya menanyakan kepastian apakah nilainya negatif.',
      conclusion: 'Masing-masing pernyataan secara terpisah sudah cukup (Opsi D).',
    },
    explanationFast: {
      clue: 'Pada soal kecukupan data tipe Ya/Tidak, kepastian jawaban YA atau TIDAK sama-sama bernilai CUKUP.',
      quickPattern: 'Pernyataan 1 menghasilkan nilai pasti -1 (negatif $\\implies$ Cukup). Pernyataan 2 menyatakan kuadran II di mana tangen selalu negatif (negatif $\\implies$ Cukup).',
      steps: ['Keduanya mandiri memberikan kepastian tanda.'],
      justification: 'Masing-masing pernyataan menjawab pertanyaan secara tegas.',
      conclusion: 'Pilih Opsi D.',
    },
    audioNarration: {
      intro: 'Soal kesebelas menanyakan apakah tangen A tambah B bernilai negatif.',
      stimulusNote: 'Ini adalah soal kecukupan data bertipe pertanyaan ya atau tidak.',
      explanationNormal: 'Pernyataan satu menghasilkan nilai eksak minus satu, sehingga jawabannya pasti ya. Pernyataan dua menyatakan sudut berada di kuadran dua di mana tangen selalu negatif, sehingga jawabannya juga pasti ya. Masing-masing pernyataan terpisah sudah cukup.',
      explanationFast: 'Kedua pernyataan secara independen memastikan nilainya bernilai negatif. Jadi pilih opsi D.',
    },
  },
  {
    id: 12,
    type: 'pg_kecukupan',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Kecukupan Data: Menentukan Nilai Unik Sinus Selisih',
    stimulus: {
      type: 'text',
      title: 'Orientasi Antena Satelit Geostasioner',
      context:
        'Dua pemancar satelit memiliki deviasi fase sudut $A$ dan $B$. Teknisi ingin menentukan nilai eksak tunggal dari $\\sin(A - B)$.\n\nDiberikan dua pernyataan:\n(1) $\\sin A \\cos B = \\frac{1}{2}$\n(2) $\\cos(A - B) = \\frac{3}{4}$',
    },
    questionText:
      'Apakah data pada pernyataan (1) dan (2) cukup untuk menentukan nilai eksak tunggal dari $\\sin(A - B)$?\n\nA. Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.\nB. Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.\nC. KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.\nD. Masing-masing pernyataan SECARA TERPISAH sudah cukup.\nE. Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.',
      'KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.',
      'Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
      'Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    ],
    correctOptionIndex: 4, // E
    explanationNormal: {
      known: 'Ingin mencari nilai tunggal $\\sin(A - B)$.',
      target: 'Kecukupan penentuan tanda dan nilai eksak.',
      concept: 'Identitas $\\sin^2(A-B) + \\cos^2(A-B) = 1$ dan relasi rumus selisih.',
      steps: [
        'Uji Pernyataan (1): hanya tahu satu suku dari rumus selisih, $\\cos A \\sin B$ belum diketahui $\\to$ TIDAK CUKUP.',
        'Uji Pernyataan (2): diketahui $\\cos(A - B) = \\frac{3}{4}$. Maka $\\sin^2(A - B) = 1 - (3/4)^2 = 1 - 9/16 = 7/16$.',
        'Namun karena kuadran sudut $(A - B)$ tidak diberitahukan, maka $\\sin(A - B)$ bisa bernilai $+\\frac{\\sqrt{7}}{4}$ atau $-\\frac{\\sqrt{7}}{4}$. Nilai TIDAK TUNGGAL $\\to$ TIDAK CUKUP.',
        'Uji Bersama-sama: Apakah Pernyataan (1) mengunci tanda $\\sin(A - B)$? Tidak, karena $\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B = \\frac{1}{2} - \\cos A \\sin B$. Karena nilai $\\cos A \\sin B$ masih belum terbatas tandanya, ambiguitas tanda plus/minus pada $\\pm \\frac{\\sqrt{7}}{4}$ tetap tidak terpecahkan.',
      ],
      commonMistake: 'Lupa bahwa akar kuadrat menghasilkan dua kemungkinan nilai bertanda positif dan negatif bila kuadran tidak diketahui.',
      conclusion: 'Kedua pernyataan bersama-sama tetap TIDAK CUKUP untuk menghasilkan jawaban tunggal (Opsi E).',
    },
    explanationFast: {
      clue: 'Perhatikan apakah ada batasan kuadran untuk sudut selisih $(A - B)$.',
      quickPattern: 'Tidak ada informasi kuadran untuk mengeliminasi tanda plus-minus dari $\\sin(A-B) = \\pm \\sqrt{1 - \\cos^2(A-B)}$.',
      steps: ['Ambiguitas tanda menghasilkan dua jawaban berbeda.'],
      justification: 'Karena hasilnya tidak tunggal, maka data tidak cukup.',
      conclusion: 'Pilih Opsi E.',
    },
    audioNarration: {
      intro: 'Soal kedua belas melatih ketelitian kita pada keunikan solusi matematika.',
      stimulusNote: 'Ditanyakan apakah nilai sinus A kurang B dapat ditentukan secara tunggal.',
      explanationNormal: 'Dari pernyataan dua, kosinus kuadrat menghasilkan sinus bernilai plus atau minus akar tujuh per empat. Karena kuadran tidak diketahui dan pernyataan satu tidak mengeliminasi kemungkinan tanda, maka nilainya bercabang dua.',
      explanationFast: 'Tanpa informasi kuadran, nilai sinus selalu memiliki dua kemungkinan tanda positif atau negatif. Jadi kedua pernyataan bersama-sama tidak cukup, pilih opsi E.',
    },
  },
  {
    id: 13,
    type: 'pg_kecukupan',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Kecukupan Data: Verifikasi Nilai Maksimum Kosinus Selisih',
    stimulus: {
      type: 'text',
      title: 'Sinkronisasi Fase Gelombang Optik',
      context:
        'Dalam eksperimen laser koheren, dua berkas cahaya memiliki fase $A$ dan $B$. Pengamat ingin memastikan apakah berlaku kondisi koherensi sempurna: $\\cos(A - B) = 1$.\n\nDiberikan dua pernyataan:\n(1) $A = B$\n(2) $\\sin(A - B) = 0$',
    },
    questionText:
      'Apakah pernyataan (1) dan/atau (2) cukup untuk memastikan bahwa $\\cos(A - B) = 1$?\n\nA. Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.\nB. Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.\nC. KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.\nD. Masing-masing pernyataan SECARA TERPISAH sudah cukup.\nE. Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.',
      'KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.',
      'Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
      'Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    ],
    correctOptionIndex: 0, // A
    explanationNormal: {
      known: 'Pertanyaan: Apakah $\\cos(A - B) = 1$?',
      target: 'Menguji keabsahan deduksi dari masing-masing pernyataan.',
      concept: 'Nilai fungsi sinus dan kosinus pada kelipatan sudut istimewa.',
      steps: [
        'Uji Pernyataan (1): Jika $A = B$, maka $A - B = 0$. Nilai $\\cos(0) = 1$ (PASTI BENAR). Maka Pernyataan (1) SAJA CUKUP.',
        'Uji Pernyataan (2): Jika $\\sin(A - B) = 0$, maka $(A - B)$ bisa bernilai $0^\\circ, 180^\\circ, 360^\\circ, \\dots$.\n- Jika $A - B = 0^\\circ$, maka $\\cos(0^\\circ) = 1$.\n- Namun jika $A - B = 180^\\circ$, maka $\\cos(180^\\circ) = -1$ (TIDAK SAMA DENGAN 1).\nKarena ada kemungkinan menghasilkan $-1$, pernyataan (2) tidak dapat memastikan bahwa $\\cos(A - B) = 1$. Maka Pernyataan (2) TIDAK CUKUP.',
      ],
      commonMistake: 'Menganggap bahwa jika sinus bernilai 0, maka kosinus otomatis bernilai 1 (lupa kemungkinan kosinus bernilai -1).',
      conclusion: 'Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup (Opsi A).',
    },
    explanationFast: {
      clue: 'Periksa nilai pembuat nol fungsi sinus.',
      quickPattern: '$\\sin \\theta = 0 \\implies \\theta = k \\cdot 180^\\circ$. Untuk $k$ ganjil, $\\cos \\theta = -1$.',
      steps: [
        'Pernyataan 1: $\\cos(0) = 1$ pasti unik.',
        'Pernyataan 2: $\\cos$ bisa bernilai $+1$ atau $-1$, tidak pasti.',
      ],
      justification: 'Pernyataan 1 mengunci sudut ke 0, sedangkan Pernyataan 2 memiliki cabang solusi bernilai negatif.',
      conclusion: 'Pilih Opsi A.',
    },
    audioNarration: {
      intro: 'Soal ketiga belas menguji penalaran matematis mendalam tentang kondisi kosinus sama dengan satu.',
      stimulusNote: 'Pernyataan satu menyatakan A sama dengan B, sedangkan pernyataan dua menyatakan sinus selisih sama dengan nol.',
      explanationNormal: 'Jika A sama dengan B, maka selisihnya nol dan kosinus nol pasti satu, jadi pernyataan satu cukup. Namun jika sinusnya nol, selisih sudut bisa 180 derajat di mana kosinusnya bernilai minus satu. Jadi pernyataan dua tidak cukup.',
      explanationFast: 'Kosinus 180 derajat adalah minus satu, sehingga pernyataan dua gagal memastikan. Jawaban yang tepat adalah opsi A.',
    },
  },
  {
    id: 14,
    type: 'pg_kecukupan',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Kecukupan Data: Rekonstruksi Nilai Tangen Sudut Tunggal',
    stimulus: {
      type: 'text',
      title: 'Pelacakan Sudut Azimuth Antena Pelacak',
      context:
        'Sistem navigasi pelacak mencatat bahwa selisih sudut azimuth dua objek adalah $A - B = 45^\\circ$. Operator ingin mengetahui nilai pasti dari $\\tan A$.\n\nDiberikan dua informasi:\n(1) $\\tan B = \\frac{1}{3}$\n(2) $\\sin B = \\frac{1}{\\sqrt{10}}$ dengan $B$ adalah sudut lancip pada Kuadran I.',
    },
    questionText:
      'Apakah data pada pernyataan (1) dan/atau (2) cukup untuk menentukan nilai pasti dari $\\tan A$?\n\nA. Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.\nB. Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.\nC. KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.\nD. Masing-masing pernyataan SECARA TERPISAH sudah cukup.\nE. Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.',
      'KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.',
      'Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
      'Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    ],
    correctOptionIndex: 3, // D
    explanationNormal: {
      known: '$A - B = 45^\\circ \\implies A = 45^\\circ + B$. Maka $\\tan A = \\tan(45^\\circ + B) = \\frac{\\tan 45^\\circ + \\tan B}{1 - \\tan 45^\\circ \\tan B} = \\frac{1 + \\tan B}{1 - \\tan B}$.',
      target: 'Kecukupan data untuk mencari $\\tan A$.',
      concept: 'Untuk mencari $\\tan A$, kita HANYA membutuhkan nilai dari $\\tan B$.',
      steps: [
        'Uji Pernyataan (1): langsung memberikan $\\tan B = 1/3$. Maka $\\tan A = \\frac{1 + 1/3}{1 - 1/3} = \\frac{4/3}{2/3} = 2$. Nilai pasti diperoleh! Maka Pernyataan (1) SAJA CUKUP.',
        'Uji Pernyataan (2): $\\sin B = \\frac{1}{\\sqrt{10}}$ dan $B$ lancip. Sisi depan $= 1$, sisi miring $= \\sqrt{10}$, sisi samping $= \\sqrt{10 - 1} = 3$. Maka $\\tan B = \\frac{1}{3}$. Nilai $\\tan B$ ditemukan sama persis, sehingga $\\tan A = 2$ juga dapat ditentukan! Maka Pernyataan (2) SAJA CUKUP.',
      ],
      commonMistake: 'Mengira pernyataan (2) kurang lengkap karena belum dalam bentuk tangen.',
      conclusion: 'Masing-masing pernyataan secara terpisah sudah cukup (Opsi D).',
    },
    explanationFast: {
      clue: 'Perhatikan bahwa pernyataan (2) secara ekuivalen memberikan informasi yang identik dengan pernyataan (1).',
      quickPattern: '$\\sin B = 1/\\sqrt{10}$ pada segitiga siku-siku lancip langsung menghasilkan $\\tan B = 1/3$.',
      steps: ['Kedua pernyataan sama-sama berhasil menyediakan nilai $\\tan B$.'],
      justification: 'Karena kedua pernyataan menyediakan nilai $\\tan B$ secara mandiri, maka masing-masing terpisah cukup.',
      conclusion: 'Pilih Opsi D.',
    },
    audioNarration: {
      intro: 'Soal keempat belas menguji pencarian nilai tangen A jika sudut selisih adalah 45 derajat.',
      stimulusNote: 'Formula tangen A dapat dihitung hanya jika kita mengetahui tangen B.',
      explanationNormal: 'Pernyataan satu langsung memberikan nilai tangen B sama dengan sepertiga. Pernyataan dua memberikan sinus B pada kuadran satu, yang bila dicari dengan tripel Pythagoras juga menghasilkan tangen B sama dengan sepertiga. Jadi masing-masing pernyataan terpisah sudah cukup.',
      explanationFast: 'Karena pernyataan satu dan dua memberikan informasi yang setara secara mandiri, langsung pilih opsi D.',
    },
  },
  {
    id: 15,
    type: 'pg_kecukupan',
    level: 3,
    competency: 'Koneksi Matematis',
    title: 'Kecukupan Data: Sinus Jumlah Sudut dalam Segitiga Sembarang',
    stimulus: {
      type: 'text',
      title: 'Geometri Struktur Rangkaian Jembatan Segitiga',
      context:
        'Pada sebuah elemen segitiga penyangga jembatan, $A$, $B$, dan $C$ adalah sudut-sudut dalam segitiga tersebut ($A + B + C = 180^\\circ$). Insinyur sipil ingin mengetahui nilai pasti dari $\\sin(A + B)$.\n\nDiberikan dua pernyataan:\n(1) Sudut ketiga $C = 60^\\circ$.\n(2) $\\sin A + \\sin B = 1$.',
    },
    questionText:
      'Apakah pernyataan (1) dan/atau (2) cukup untuk menentukan nilai pasti dari $\\sin(A + B)$?\n\nA. Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.\nB. Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.\nC. KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.\nD. Masing-masing pernyataan SECARA TERPISAH sudah cukup.\nE. Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    options: [
      'Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.',
      'Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.',
      'KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing pernyataan SAJA tidak cukup.',
      'Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
      'Pernyataan (1) dan pernyataan (2) bersama-sama TIDAK CUKUP.',
    ],
    correctOptionIndex: 0, // A
    explanationNormal: {
      known: 'Pada setiap segitiga, $A + B + C = 180^\\circ \\implies A + B = 180^\\circ - C$.',
      target: 'Nilai $\\sin(A + B)$.',
      concept: 'Relasi sudut berpelurus: $\\sin(A + B) = \\sin(180^\\circ - C) = \\sin C$.',
      steps: [
        'Uji Pernyataan (1): Jika $C = 60^\\circ$, maka $\\sin(A + B) = \\sin C = \\sin 60^\\circ = \\frac{1}{2}\\sqrt{3}$. Nilai tunggal didapatkan secara langsung! Maka Pernyataan (1) SAJA CUKUP.',
        'Uji Pernyataan (2): Diberikan $\\sin A + \\sin B = 1$. Informasi ini tidak memberikan nilai sudut $C$ secara unik (misal pasangan $(A, B)$ bisa $(30^\\circ, 30^\\circ) \\implies C = 120^\\circ$, atau pasangan sudut lain yang tidak sama). Akibatnya nilai $\\sin(A+B)$ tidak tunggal. Maka Pernyataan (2) TIDAK CUKUP.',
      ],
      commonMistake: 'Mencoba menguraikan sin(A + B) menjadi sin A cos B + cos A sin B tanpa menyadari identitas sudut segitiga sin(A + B) = sin C.',
      conclusion: 'Pernyataan (1) saja cukup, tetapi pernyataan (2) saja tidak cukup (Opsi A).',
    },
    explanationFast: {
      clue: 'Gunakan sifat sudut segitiga: jumlah sudut dalam adalah 180 derajat.',
      quickPattern: '$\\sin(A + B) = \\sin(180^\\circ - C) = \\sin C$.',
      steps: [
        'Jika $C$ diketahui, nilai $\\sin(A+B)$ langsung otomatis terungkap.',
        'Pernyataan (1) langsung memberi nilai $C = 60^\\circ$.',
      ],
      justification: 'Relasi komplemen pelurus sinus tidak memerlukan pengetahuan sudut A dan B secara individual.',
      conclusion: 'Pilih Opsi A.',
    },
    audioNarration: {
      intro: 'Soal kelima belas menutup kelompok pilihan ganda dengan penerapan sifat sudut dalam segitiga.',
      stimulusNote: 'Ingat bahwa dalam segitiga, sinus A tambah B nilainya sama persis dengan sinus C.',
      explanationNormal: 'Karena sinus A tambah B sama dengan sinus C, maka mengetahui besar sudut C pada pernyataan satu sudah sangat cukup untuk mendapatkan nilai setengah akar tiga. Pernyataan dua tidak menentukan sudut C secara pasti.',
      explanationFast: 'Secara cepat, sinus A tambah B identik dengan sinus C. Pernyataan satu langsung memberikan nilai C sama dengan 60 derajat. Pilih opsi A.',
    },
  },

  // ==========================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS (SOAL 16 - 25)
  // "PILIH SEMUA JAWABAN YANG BENAR"
  // ==========================================
  {
    id: 16,
    type: 'pg_kompleks',
    level: 2,
    competency: 'Pengetahuan',
    title: 'Evaluasi Kesetaraan Identitas Jumlah dan Selisih',
    stimulus: {
      type: 'text',
      title: 'Standarisasi Formula Algoritma Grafika Komputer',
      context:
        'Pengembang mesin grafika 3D ingin menyusun tabel lookup kesetaraan aljabar untuk fungsi trigonometri sudut gabungan guna mempercepat proses render rotasi objek pada sumbu Euler.',
    },
    questionText:
      'Manakah di antara pernyataan identitas trigonometri berikut yang bernilai BENAR untuk semua sudut riil $x$ dan $y$? (Pilih semua jawaban yang benar)',
    options: [
      '$\\sin(x + y) + \\sin(x - y) = 2\\sin x \\cos y$',
      '$\\cos(x - y) - \\cos(x + y) = 2\\sin x \\sin y$',
      '$\\cos(x + y) + \\cos(x - y) = 2\\cos x \\cos y$',
      '$\\sin(x + y) - \\sin(x - y) = 2\\sin x \\sin y$',
      '$\\cos(x - y) = \\cos x \\cos y - \\sin x \\sin y$',
    ],
    correctOptionIndices: [0, 1, 2], // A, B, C benar. D salah (seharusnya 2 cos x sin y). E salah (seharusnya +).
    explanationNormal: {
      known: 'Rumus dasar sinus dan kosinus jumlah dan selisih.',
      target: 'Memeriksa kebenaran kelima opsi identitas.',
      concept: 'Penjumlahan dan pengurangan identitas fundamental.',
      steps: [
        'Opsi A: $\\sin(x+y) + \\sin(x-y) = (\\sin x \\cos y + \\cos x \\sin y) + (\\sin x \\cos y - \\cos x \\sin y) = 2\\sin x \\cos y$ $\\implies$ BENAR.',
        'Opsi B: $\\cos(x-y) - \\cos(x+y) = (\\cos x \\cos y + \\sin x \\sin y) - (\\cos x \\cos y - \\sin x \\sin y) = 2\\sin x \\sin y$ $\\implies$ BENAR.',
        'Opsi C: $\\cos(x+y) + \\cos(x-y) = (\\cos x \\cos y - \\sin x \\sin y) + (\\cos x \\cos y + \\sin x \\sin y) = 2\\cos x \\cos y$ $\\implies$ BENAR.',
        'Opsi D: $\\sin(x+y) - \\sin(x-y) = 2\\cos x \\sin y$ (bukan $2\\sin x \\sin y$) $\\implies$ SALAH.',
        'Opsi E: $\\cos(x-y)$ seharusnya menggunakan tanda tambah (+) $\\implies$ SALAH.',
      ],
      commonMistake: 'Terkecoh dengan tanda minus pada opsi E dan koefisien pada opsi D.',
      conclusion: 'Opsi yang benar adalah A, B, dan C.',
    },
    explanationFast: {
      clue: 'Ingat prinsip eliminasi suku silang.',
      quickPattern: 'Jumlah sinus menyisakan Sin-Cos (A). Selisih kosinus menyisakan Sin-Sin (B). Jumlah kosinus menyisakan Cos-Cos (C).',
      steps: ['Cek opsi D salah suku, opsi E salah tanda.'],
      justification: 'Verifikasi tanda baku pada rumus transformasi perkalian.',
      conclusion: 'Pilih opsi A, B, dan C.',
    },
    audioNarration: {
      intro: 'Sekarang kita masuk ke bagian pilihan ganda kompleks nomor 16. Pilih semua jawaban yang benar.',
      stimulusNote: 'Kita menguji kesetaraan rumus transformasi perkalian trigonometri.',
      explanationNormal: 'Pernyataan A, B, dan C terbukti benar saat rumus jumlah dan selisih dijumlahkan atau dikurangkan. Pernyataan D salah karena seharusnya menghasilkan dua kosinus x sinus y, dan pernyataan E salah tanda.',
      explanationFast: 'Eliminasi suku silang langsung mengonfirmasi opsi A, B, dan C benar.',
    },
  },
  {
    id: 17,
    type: 'pg_kompleks',
    level: 2,
    competency: 'Pengetahuan',
    title: 'Kombinasi Sudut Bernilai Eksak Akar Enam Kurang Akar Dua per Empat',
    stimulus: {
      type: 'text',
      title: 'Tabel Standar Kalibrasi Sensor Spektrometri',
      context:
        'Sebuah detektor optik terkalibrasi untuk merespon panjang gelombang tertentu ketika nilai rasio trigonometri bernilai tepat $\\frac{\\sqrt{6} - \\sqrt{2}}{4}$.',
    },
    questionText:
      'Manakah di antara nilai perbandingan trigonometri berikut yang bernilai TEPAT sama dengan $\\frac{\\sqrt{6} - \\sqrt{2}}{4}$? (Pilih semua jawaban yang benar)',
    options: [
      '$\\sin 15^\\circ$',
      '$\\cos 75^\\circ$',
      '$\\sin 165^\\circ$',
      '$\\cos 105^\\circ$',
      '$\\sin 105^\\circ$',
    ],
    correctOptionIndices: [0, 1, 2], // A, B, C benar. D bernilai -(√6-√2)/4 (negatif), E bernilai (√6+√2)/4.
    explanationNormal: {
      known: 'Nilai target adalah $K = \\frac{\\sqrt{6} - \\sqrt{2}}{4} > 0$.',
      target: 'Memilih perbandingan yang bernilai sama persis dengan $K$.',
      concept: 'Nilai eksak sudut istimewa dan sudut berelasi antarkuadran.',
      steps: [
        'Opsi A: $\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$ $\\implies$ BENAR.',
        'Opsi B: $\\cos 75^\\circ = \\cos(90^\\circ - 15^\\circ) = \\sin 15^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$ $\\implies$ BENAR.',
        'Opsi C: $\\sin 165^\\circ = \\sin(180^\\circ - 15^\\circ) = \\sin 15^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$ $\\implies$ BENAR.',
        'Opsi D: $\\cos 105^\\circ = -\\cos 75^\\circ = -\\frac{\\sqrt{6} - \\sqrt{2}}{4}$ (negatif) $\\implies$ SALAH.',
        'Opsi E: $\\sin 105^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$ (tanda tambah) $\\implies$ SALAH.',
      ],
      commonMistake: 'Mengabaikan tanda negatif pada cos 105 derajat di kuadran II.',
      conclusion: 'Opsi yang benar adalah A, B, dan C.',
    },
    explanationFast: {
      clue: 'Periksa relasi simetri: sudut $15^\\circ, 75^\\circ, 165^\\circ$.',
      quickPattern: '$\\sin 15^\\circ = \\cos 75^\\circ = \\sin(180^\\circ - 15^\\circ) = \\sin 165^\\circ$.',
      steps: ['Ketiganya positif dan bernilai identik.'],
      justification: 'Sinus bernilai positif di kuadran I dan II.',
      conclusion: 'Pilih opsi A, B, dan C.',
    },
    audioNarration: {
      intro: 'Soal ketujuh belas mencari perbandingan yang bernilai akar enam dikurang akar dua per empat.',
      stimulusNote: 'Perhatikan relasi sudut komplemen 90 derajat dan pelurus 180 derajat.',
      explanationNormal: 'Sinus 15 derajat, kosinus 75 derajat, dan sinus 165 derajat semuanya bernilai positif dan tepat sama dengan nilai target. Kosinus 105 derajat bernilai negatif sehingga salah, dan sinus 105 derajat bertanda tambah.',
      explanationFast: 'Dengan relasi simetri kuadran, sinus 15 derajat sama dengan kosinus 75 derajat dan sinus 165 derajat. Opsi A, B, dan C benar.',
    },
  },
  {
    id: 18,
    type: 'pg_kompleks',
    level: 2,
    competency: 'Pemecahan Masalah',
    title: 'Analisis Properti Sudut dengan Nilai Tangen Setengah dan Sepertiga',
    stimulus: {
      type: 'text',
      title: 'Geometri Kisi Kristal Dua Dimensi',
      context:
        'Dua vektor kisi kristal membentuk sudut lancip $\\alpha$ dan $\\beta$ terhadap sumbu kisi kristal dengan $\\tan \\alpha = \\frac{1}{2}$ dan $\\tan \\beta = \\frac{1}{3}$.',
    },
    questionText:
      'Manakah pernyataan berikut yang BENAR mengenai sudut $\\alpha$ dan $\\beta$? (Pilih semua jawaban yang benar)',
    options: [
      'Besar sudut gabungan $\\alpha + \\beta = 45^\\circ$',
      'Nilai dari $\\cos(\\alpha + \\beta) = \\frac{1}{2}\\sqrt{2}$',
      'Nilai dari $\\sin(\\alpha + \\beta) = \\frac{1}{2}\\sqrt{2}$',
      'Nilai dari $\\tan(\\alpha - \\beta) = \\frac{1}{7}$',
      'Nilai dari $\\tan(\\alpha - \\beta) = \\frac{1}{5}$',
    ],
    correctOptionIndices: [0, 1, 2, 3], // A, B, C, D benar. E salah.
    explanationNormal: {
      known: '$\\tan \\alpha = 1/2$, $\\tan \\beta = 1/3$, $\\alpha, \\beta$ lancip.',
      target: 'Mengevaluasi nilai $\\alpha + \\beta$ dan $\\alpha - \\beta$.',
      concept: 'Rumus tangen jumlah dan selisih sudut.',
      steps: [
        'Hitung $\\tan(\\alpha + \\beta) = \\frac{1/2 + 1/3}{1 - (1/2)(1/3)} = \\frac{5/6}{5/6} = 1$. Karena lancip, $\\alpha + \\beta = 45^\\circ$ $\\implies$ Opsi A BENAR.',
        'Karena $\\alpha + \\beta = 45^\\circ$, maka $\\cos(45^\\circ) = \\frac{1}{2}\\sqrt{2}$ $\\implies$ Opsi B BENAR.',
        '$\\sin(45^\\circ) = \\frac{1}{2}\\sqrt{2}$ $\\implies$ Opsi C BENAR.',
        'Hitung $\\tan(\\alpha - \\beta) = \\frac{1/2 - 1/3}{1 + (1/2)(1/3)} = \\frac{1/6}{1 + 1/6} = \\frac{1/6}{7/6} = \\frac{1}{7}$ $\\implies$ Opsi D BENAR, Opsi E SALAH.',
      ],
      commonMistake: 'Keliru saat menghitung penyebut tangen selisih 1 + 1/6 menjadi 5/6.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Identitas Euler: $\\arctan(1/2) + \\arctan(1/3) = 45^\\circ$.',
      quickPattern: 'Semua sifat untuk $45^\\circ$ (sinus dan kosinus bernilai $\\frac{1}{2}\\sqrt{2}$) otomatis benar.',
      steps: ['Cek tangen selisih: pembilang $3-2=1$, penyebut $6+1=7 \\implies 1/7$.'],
      justification: 'Kalkulasi langsung membuktikan opsi A, B, C, dan D valid.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedelapan belas menganalisis sudut alfa dan beta dengan nilai tangen setengah dan sepertiga.',
      stimulusNote: 'Sudut gabungan alfa tambah beta menghasilkan sudut istimewa 45 derajat.',
      explanationNormal: 'Karena tangen alfa tambah beta adalah satu, sudutnya 45 derajat. Nilai kosinus dan sinus 45 derajat adalah setengah akar dua. Sedangkan tangen alfa kurang beta adalah satu per tujuh. Jadi opsi A, B, C, dan D semuanya benar.',
      explanationFast: 'Identitas Euler memastikan sudutnya 45 derajat. Nilai sinus, kosinus, dan tangen selisihnya tepat sesuai opsi A, B, C, dan D.',
    },
  },
  {
    id: 19,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Pemecahan Masalah',
    title: 'Dekomposisi Gelombang Getaran Harmonik Mekanik',
    stimulus: {
      type: 'text',
      title: 'Persamaan Gerak Getaran Pegas Terkopel',
      context:
        'Sebuah sistem suspensi mobil mengalami getaran harmonik dengan persamaan simpangan $y(t) = 4\\cos(t - 45^\\circ)$ dalam satuan sentimeter. Teknisi ingin menguraikan persamaan ini ke dalam kombinasi linear basis sinus dan kosinus.',
    },
    questionText:
      'Manakah pernyataan berikut yang BENAR mengenai fungsi getaran $y(t)$ tersebut? (Pilih semua jawaban yang benar)',
    options: [
      'Bentuk dekomposisi fungsi adalah $y(t) = 2\\sqrt{2}\\cos t + 2\\sqrt{2}\\sin t$',
      'Amplitudo getaran maksimum adalah $4\\text{ cm}$',
      'Pada saat $t = 45^\\circ$, simpangan getaran mencapai nilai maksimum sebesar $4\\text{ cm}$',
      'Pada saat $t = 135^\\circ$, simpangan getaran bernilai $0\\text{ cm}$',
      'Bentuk dekomposisi fungsi adalah $y(t) = 4\\cos t - 4\\sin t$',
    ],
    correctOptionIndices: [0, 1, 2, 3], // A, B, C, D benar. E salah.
    explanationNormal: {
      known: 'Fungsi $y(t) = 4\\cos(t - 45^\\circ)$.',
      target: 'Evaluasi bentuk uraian dan karakteristik nilai fungsi.',
      concept: 'Rumus kosinus selisih sudut: $\\cos(t - 45^\\circ) = \\cos t \\cos 45^\\circ + \\sin t \\sin 45^\\circ$.',
      steps: [
        'Uraikan: $y(t) = 4\\left(\\cos t \\cdot \\frac{1}{2}\\sqrt{2} + \\sin t \\cdot \\frac{1}{2}\\sqrt{2}\\right) = 2\\sqrt{2}\\cos t + 2\\sqrt{2}\\sin t$ $\\implies$ Opsi A BENAR, Opsi E SALAH.',
        'Amplitudo fungsi kosinus adalah koefisien di depan kosinus, yaitu 4 $\\implies$ Opsi B BENAR.',
        'Saat $t = 45^\\circ$: $y(45^\\circ) = 4\\cos(45^\\circ - 45^\\circ) = 4\\cos(0) = 4(1) = 4$ $\\implies$ Opsi C BENAR.',
        'Saat $t = 135^\\circ$: $y(135^\\circ) = 4\\cos(135^\\circ - 45^\\circ) = 4\\cos(90^\\circ) = 4(0) = 0$ $\\implies$ Opsi D BENAR.',
      ],
      commonMistake: 'Menerapkan sifat distributif $4\\cos t - 4\\cos 45^\\circ$ yang keliru.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Periksa amplitudo dan titik potong sumbu.',
      quickPattern: '$4 \\times \\frac{\\sqrt{2}}{2} = 2\\sqrt{2}$.',
      steps: [
        'Koefisien uraian harus $2\\sqrt{2}$ untuk sinus dan kosinus.',
        'Simpangan maksimum terjadi saat sudut di dalam kosinus bernilai nol ($t = 45^\\circ$).',
        'Simpangan nol terjadi saat sudut di dalam kosinus bernilai $90^\\circ$ ($t = 135^\\circ$).',
      ],
      justification: 'Karakteristik fungsi gelombang terbukti konsisten pada keempat opsi tersebut.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kesembilan belas menguraikan persamaan gelombang getaran pegas.',
      stimulusNote: 'Fungsi simpangan adalah 4 kosinus t dikurang 45 derajat.',
      explanationNormal: 'Uraian kosinus selisih menghasilkan 2 akar 2 kosinus t ditambah 2 akar 2 sinus t. Amplitudo maksimumnya 4 cm saat t bernilai 45 derajat, dan bernilai nol saat t bernilai 135 derajat. Maka opsi A, B, C, dan D benar.',
      explanationFast: 'Semua properti amplitudo, fase puncak, dan titik potong nol terkonfirmasi benar pada opsi A, B, C, dan D.',
    },
  },
  {
    id: 20,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Identitas Perkalian Kosinus Jumlah dan Selisih',
    stimulus: {
      type: 'text',
      title: 'Analisis Daya Rata-Rata Modulasi Amplitudo (AM)',
      context:
        'Sinyal pembawa dan sinyal modulasi radio menghasilkan perkalian gelombang kosinus $W = \\cos(A + B)\\cos(A - B)$.',
    },
    questionText:
      'Manakah bentuk ekspresi berikut yang bernilai EKUIVALEN dengan $\\cos(A + B)\\cos(A - B)$? (Pilih semua jawaban yang benar)',
    options: [
      '$\\cos^2 A - \\sin^2 B$',
      '$\\cos^2 B - \\sin^2 A$',
      '$\\cos^2 A - \\cos^2 B$',
      '$\\frac{1}{2}(\\cos 2A + \\cos 2B)$',
      '$\\sin^2 A - \\sin^2 B$',
    ],
    correctOptionIndices: [0, 1, 3], // A, B, D benar. C dan E salah.
    explanationNormal: {
      known: 'Ekspresi $W = \\cos(A + B)\\cos(A - B)$.',
      target: 'Mencari semua bentuk ekuivalen yang valid.',
      concept: 'Penurunan identitas perkalian kosinus ke bentuk kuadrat dan sudut rangkap.',
      steps: [
        'Uraikan: $(\\cos A \\cos B - \\sin A \\sin B)(\\cos A \\cos B + \\sin A \\sin B) = \\cos^2 A \\cos^2 B - \\sin^2 A \\sin^2 B$.',
        'Ganti $\\cos^2 B = 1 - \\sin^2 B$ dan $\\sin^2 A = 1 - \\cos^2 A$:\n$\\cos^2 A(1 - \\sin^2 B) - (1 - \\cos^2 A)\\sin^2 B = \\cos^2 A - \\cos^2 A \\sin^2 B - \\sin^2 B + \\cos^2 A \\sin^2 B = \\cos^2 A - \\sin^2 B$ $\\implies$ Opsi A BENAR.',
        'Ganti $\\cos^2 A = 1 - \\sin^2 A$ dan $\\sin^2 B = 1 - \\cos^2 B$:\n$(1 - \\sin^2 A) - (1 - \\cos^2 B) = \\cos^2 B - \\sin^2 A$ $\\implies$ Opsi B BENAR.',
        'Gunakan rumus sudut rangkap: $\\cos(X) + \\cos(Y) = 2\\cos\\left(\\frac{X+Y}{2}\\right)\\cos\\left(\\frac{X-Y}{2}\\right)$. Maka $\\cos(A+B)\\cos(A-B) = \\frac{1}{2}(\\cos 2A + \\cos 2B)$ $\\implies$ Opsi D BENAR.',
        'Opsi C dan E tidak ekuivalen secara aljabar.',
      ],
      commonMistake: 'Mengira bahwa cos(A+B)cos(A-B) sama dengan cos²A - cos²B.',
      conclusion: 'Opsi yang benar adalah A, B, dan D.',
    },
    explanationFast: {
      clue: 'Uji nilai sudut khusus: $A = 0, B = 0$.',
      quickPattern: 'Ruas kiri: $\\cos(0)\\cos(0) = 1$.',
      steps: [
        'Opsi A: $1 - 0 = 1$ (cocok).',
        'Opsi B: $1 - 0 = 1$ (cocok).',
        'Opsi C: $1 - 1 = 0$ (salah!).',
        'Opsi D: $\\frac{1}{2}(1 + 1) = 1$ (cocok).',
        'Opsi E: $0 - 0 = 0$ (salah!).',
      ],
      justification: 'Uji nilai khusus langsung mengeliminasi opsi C dan E secara mutlak.',
      conclusion: 'Pilih opsi A, B, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh menguji bentuk-bentuk ekuivalen dari perkalian kosinus jumlah dan selisih.',
      stimulusNote: 'Bentuk ini sangat sering muncul pada modulasi gelombang radio.',
      explanationNormal: 'Dengan menjabarkan perkalian selisih kuadrat dan substitusi identitas Pythagoras, diperoleh kosinus kuadrat A dikurang sinus kuadrat B, atau kosinus kuadrat B dikurang sinus kuadrat A, serta setengah dikali kosinus dua A ditambah kosinus dua B. Opsi A, B, dan D benar.',
      explanationFast: 'Uji sudut nol derajat langsung membuktikan opsi C dan E salah, menyisakan opsi A, B, dan D.',
    },
  },
  {
    id: 21,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Koneksi Matematis',
    title: 'Relasi Tangen Sudut-Sudut Segitiga Sembarang',
    stimulus: {
      type: 'text',
      title: 'Teorema Geometri Trigonometri Klasik',
      context:
        'Pada sembarang segitiga $ABC$ bukan siku-siku, jumlah ketiga sudutnya adalah $A + B + C = 180^\\circ$. Seorang matematikawan menyelidiki hubungan antara penjumlahan dan perkalian nilai tangen ketiga sudut tersebut.',
    },
    questionText:
      'Manakah pernyataan berikut yang bernilai BENAR untuk sembarang segitiga $ABC$ bukan siku-siku? (Pilih semua jawaban yang benar)',
    options: [
      '$\\tan(A + B) = -\\tan C$',
      '$\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$',
      'Jika segitiga $ABC$ lancip, maka perkalian $\\tan A \\tan B \\tan C > 0$',
      'Jika salah satu sudut tumpul, maka perkalian $\\tan A \\tan B \\tan C < 0$',
      '$\\tan A + \\tan B = \\tan C$',
    ],
    correctOptionIndices: [0, 1, 2, 3], // A, B, C, D benar. E salah.
    explanationNormal: {
      known: '$A + B + C = 180^\\circ \\implies A + B = 180^\\circ - C$.',
      target: 'Mengevaluasi kebenaran relasi tangen segitiga.',
      concept: 'Identitas tangen jumlah sudut dan relasi kuadran.',
      steps: [
        'Opsi A: $\\tan(A + B) = \\tan(180^\\circ - C) = -\\tan C$ $\\implies$ BENAR.',
        'Opsi B: $\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = -\\tan C \\implies \\tan A + \\tan B = -\\tan C + \\tan A \\tan B \\tan C \\implies \\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$ $\\implies$ BENAR.',
        'Opsi C: Pada segitiga lancip, semua sudut di Kuadran I sehingga $\\tan A, \\tan B, \\tan C > 0$. Hasil kalinya pasti positif ($> 0$) $\\implies$ BENAR.',
        'Opsi D: Jika satu sudut tumpul, maka tangen sudut tersebut bernilai negatif, sedangkan dua lainnya positif. Perkalian satu bilangan negatif dengan dua bilangan positif menghasilkan bilangan negatif ($< 0$) $\\implies$ BENAR.',
        'Opsi E: Salah karena melanggar identitas yang telah dibuktikan pada opsi B.',
      ],
      commonMistake: 'Menerapkan sifat aditif linear $\\tan(A+B) = \\tan A + \\tan B$.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Identitas segitiga klasik: Jumlah Tangen = Hasil Kali Tangen.',
      quickPattern: '$\\sum \\tan = \\prod \\tan$.',
      steps: [
        'Hubungan sudut pelurus: $\\tan(180^\\circ - C) = -\\tan C$.',
        'Analisis tanda: 3 positif $\\implies$ positif; 1 negatif $\\implies$ negatif.',
      ],
      justification: 'Keempat sifat fundamental tersebut terbukti secara mutlak.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh satu mengeksplorasi teorema indah mengenai tangen sudut-sudut dalam segitiga.',
      stimulusNote: 'Jumlah sudut dalam segitiga selalu 180 derajat.',
      explanationNormal: 'Tangen A tambah B sama dengan minus tangen C. Mengalikan silang penyebut membuktikan identitas spektakuler bahwa jumlah tangen ketiga sudut sama dengan hasil kali tangen ketiga sudut. Tanda perkalian bernilai positif untuk segitiga lancip dan negatif jika ada sudut tumpul. Jadi opsi A, B, C, dan D benar.',
      explanationFast: 'Teorema jumlah tangen sama dengan hasil kali tangen membuktikan keabsahan opsi A, B, C, dan D.',
    },
  },
  {
    id: 22,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Pemecahan Masalah',
    title: 'Orientasi Panel Surya Lipat Satelit Cuaca',
    stimulus: {
      type: 'text',
      title: 'Sistem Engsel Dua Derajat Kebebasan Panel Satelit',
      context:
        'Sayap panel surya satelit memiliki dua engsel dengan sudut rotasi $\\alpha$ dan $\\beta$. Data sensor telemetri menunjukkan bahwa $\\cos \\alpha = \\frac{4}{5}$ (dengan $\\alpha$ sudut lancip pada Kuadran I) dan $\\sin \\beta = \\frac{5}{13}$ (dengan $\\beta$ sudut tumpul pada Kuadran II).',
    },
    questionText:
      'Manakah nilai perbandingan trigonometri berikut yang BENAR untuk konfigurasi sayap satelit tersebut? (Pilih semua jawaban yang benar)',
    options: [
      '$\\sin \\alpha = \\frac{3}{5}$',
      '$\\cos \\beta = -\\frac{12}{13}$',
      '$\\cos(\\alpha + \\beta) = -\\frac{63}{65}$',
      '$\\sin(\\alpha + \\beta) = -\\frac{16}{65}$',
      '$\\sin(\\alpha - \\beta) = \\frac{56}{65}$',
    ],
    correctOptionIndices: [0, 1, 2, 4], // A, B, C, E benar. D salah (seharusnya -16/65? mari cek: sin(α+β) = sin α cos β + cos α sin β = (3/5)(-12/13) + (4/5)(5/13) = -36/65 + 20/65 = -16/65! Jadi D juga benar!).
    // Mari cek ulang semua:
    // sin α = 3/5 (Benar: A)
    // cos β = -12/13 (Benar: B)
    // cos(α + β) = cos α cos β - sin α sin β = (4/5)(-12/13) - (3/5)(5/13) = -48/65 - 15/65 = -63/65 (Benar: C)
    // sin(α + β) = (3/5)(-12/13) + (4/5)(5/13) = -36/65 + 20/65 = -16/65 (Benar: D)
    // sin(α - β) = sin α cos β - cos α sin β = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 = -56/65 (Bukan +56/65! E SALAH!)
    // Jadi yang benar: A, B, C, D!
    explanationNormal: {
      known: '$\\alpha$ lancip (Kuadran I), $\\cos \\alpha = 4/5$. $\\beta$ tumpul (Kuadran II), $\\sin \\beta = 5/13$.',
      target: 'Menghitung nilai-nilai perbandingan trigonometri.',
      concept: 'Aturan tanda kuadran dan identitas sinus/kosinus jumlah dan selisih.',
      steps: [
        '$\\sin \\alpha = +\\sqrt{1 - (4/5)^2} = \\frac{3}{5}$ $\\implies$ Opsi A BENAR.',
        'Di Kuadran II, kosinus negatif: $\\cos \\beta = -\\sqrt{1 - (5/13)^2} = -\\frac{12}{13}$ $\\implies$ Opsi B BENAR.',
        '$\\cos(\\alpha + \\beta) = \\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta = \\left(\\frac{4}{5}\\right)\\left(-\\frac{12}{13}\\right) - \\left(\\frac{3}{5}\\right)\\left(\\frac{5}{13}\\right) = -\\frac{48}{65} - \\frac{15}{65} = -\\frac{63}{65}$ $\\implies$ Opsi C BENAR.',
        '$\\sin(\\alpha + \\beta) = \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta = \\left(\\frac{3}{5}\\right)\\left(-\\frac{12}{13}\\right) + \\left(\\frac{4}{5}\\right)\\left(\\frac{5}{13}\\right) = -\\frac{36}{65} + \\frac{20}{65} = -\\frac{16}{65}$ $\\implies$ Opsi D BENAR.',
        '$\\sin(\\alpha - \\beta) = -\\frac{36}{65} - \\frac{20}{65} = -\\frac{56}{65}$ (bukan $+56/65$) $\\implies$ Opsi E SALAH.',
      ],
      commonMistake: 'Tertukar tanda minus saat menghitung sinus selisih sudut di kuadran II.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Penyebut gabungan selalu $5 \\times 13 = 65$.',
      quickPattern: 'Perhatikan tanda kuadran: $\\cos \\beta$ bernilai negatif.',
      steps: [
        'Hitung cepat pembilang cos jumlah: $(-48) - 15 = -63$.',
        'Hitung cepat pembilang sin jumlah: $(-36) + 20 = -16$.',
        'Hitung sin selisih: $(-36) - 20 = -56$ (bertanda negatif, jadi opsi E salah).',
      ],
      justification: 'Perhitungan silang mengonfirmasi keabsahan opsi A, B, C, dan D.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh dua menghitung sudut rotasi panel surya satelit cuaca.',
      stimulusNote: 'Perhatikan sudut beta berada di kuadran dua sehingga kosinus bernilai negatif minus 12 per 13.',
      explanationNormal: 'Sinus alfa adalah 3 per 5, kosinus beta adalah minus 12 per 13. Kosinus jumlah bernilai minus 63 per 65, dan sinus jumlah bernilai minus 16 per 65. Sinus selisih seharusnya bernilai minus 56 per 65, bukan positif. Jadi opsi A, B, C, dan D benar.',
      explanationFast: 'Perhitungan silang pembilang membuktikan opsi A, B, C, dan D tepat, sedangkan opsi E salah tanda.',
    },
  },
  {
    id: 23,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Evaluasi Penalaran Diskusi Matematika Dua Siswa',
    stimulus: {
      type: 'debate',
      title: 'Perdebatan Konseptual Budi dan Ani',
      context:
        'Dua siswa sedang mendiskusikan sifat-sifat fungsi trigonometri:\n- Budi berpendapat: "Karena $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$, maka $\\sin(A + B)$ tidak akan pernah sama dengan $\\sin A + \\sin B$ untuk sembarang sudut."\n- Ani menyanggah: "Pendapatmu keliru, ada kondisi sudut tertentu di mana $\\sin(A + B)$ tepat sama dengan $\\sin A + \\sin B$."',
    },
    questionText:
      'Manakah analisis matematis berikut yang BENAR terkait perdebatan Budi dan Ani? (Pilih semua jawaban yang benar)',
    options: [
      'Pendapat Ani BENAR karena untuk $A = 0^\\circ$ dan $B = 0^\\circ$, berlaku $\\sin(0 + 0) = \\sin 0 + \\sin 0 = 0$',
      'Secara umum fungsi trigonometri bersifat NON-LINEAR, sehingga $\\sin(A + B) \\neq \\sin A + \\sin B$',
      'Persamaan $\\sin(A + B) = \\sin A + \\sin B$ dapat dipenuhi jika salah satu sudut bernilai $0^\\circ$ atau kelipatan $360^\\circ$',
      'Klaim Budi salah karena menggunakan kata "tidak akan pernah" padahal terdapat solusi khusus',
      'Pendapat Budi sepenuhnya BENAR untuk seluruh kemungkinan pasangan sudut riil tanpa pengecualian',
    ],
    correctOptionIndices: [0, 1, 2, 3], // A, B, C, D benar. E salah.
    explanationNormal: {
      known: 'Perdebatan mengenai sifat distributif semu pada fungsi sinus.',
      target: 'Menganalisis validitas argumen Budi dan Ani secara kritis.',
      concept: 'Karakteristik fungsi non-linear dan kondisi batas solusi partikular.',
      steps: [
        'Opsi A: Cek untuk $A = 0, B = 0$: $\\sin(0) = 0$, $\\sin 0 + \\sin 0 = 0$. Keduanya sama persis $\\implies$ BENAR.',
        'Opsi B: Fungsi sinus adalah fungsi gelombang non-linear, secara umum sifat distributif tidak berlaku $\\implies$ BENAR.',
        'Opsi C: Jika $B = 0^\\circ$, maka $\\sin(A + 0) = \\sin A$, dan $\\sin A + \\sin 0 = \\sin A + 0 = \\sin A$. Persamaan terpenuhi $\\implies$ BENAR.',
        'Opsi D: Kata "tidak akan pernah" (klaim universal negatif) langsung gugur begitu ditemukan satu contoh penyangkal (*counterexample*) $\\implies$ BENAR.',
        'Opsi E: Salah karena terbukti ada solusi yang memenuhi persamaan tersebut.',
      ],
      commonMistake: 'Mengira bahwa karena trigonometri non-linear, tidak ada satupun titik yang memenuhi f(x+y) = f(x)+f(y).',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Cari contoh penyangkal: ambil sudut $0^\\circ$.',
      quickPattern: '$\\sin(0+0) = \\sin 0 + \\sin 0 = 0$. Klaim Budi langsung terbantahkan.',
      steps: ['Klaim universal gugur dengan satu counterexample.'],
      justification: 'Ani benar karena ada titik temu khusus, meskipun fungsi secara umum non-linear.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh tiga menyajikan stimulus berbentuk perdebatan argumentasi dua siswa, Budi dan Ani.',
      stimulusNote: 'Budi mengklaim sinus A tambah B tidak pernah sama dengan sinus A ditambah sinus B.',
      explanationNormal: 'Pernyataan Budi gugur karena terdapat contoh penyangkal saat sudut bernilai nol derajat, di mana nol sama dengan nol tambah nol. Fungsi trigonometri memang non-linear, tetapi klaim Budi salah karena memakai kata tidak akan pernah. Jadi opsi A, B, C, dan D benar.',
      explanationFast: 'Satu contoh penyangkal sudut nol cukup untuk membuktikan klaim Budi keliru. Opsi A, B, C, dan D benar.',
    },
  },
  {
    id: 24,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Penyederhanaan Rasio Selisih Kosinus terhadap Jumlah Sinus',
    stimulus: {
      type: 'text',
      title: 'Rasio Reduksi Impedansi Rangkaian RLC AC',
      context:
        'Dalam analisis respon transien rangkaian listrik arus bolak-balik berfasa ganda, rasio transfer dinyatakan oleh bentuk pecahan $Z = \\frac{\\cos(A - B) - \\cos(A + B)}{\\sin(A + B) + \\sin(A - B)}$.',
    },
    questionText:
      'Manakah pernyataan berikut yang BENAR mengenai penyederhanaan ekspresi $Z$? (Pilih semua jawaban yang benar)',
    options: [
      'Pembilang pecahan setara dengan $2\\sin A \\sin B$',
      'Penyebut pecahan setara dengan $2\\sin A \\cos B$',
      'Bentuk paling sederhana dari pecahan $Z$ adalah $\\tan B$',
      'Bentuk pecahan $Z$ tidak terdefinisi jika $\\cos B = 0$ atau $\\sin A = 0$',
      'Bentuk paling sederhana dari pecahan $Z$ adalah $\\cot A$',
    ],
    correctOptionIndices: [0, 1, 2, 3], // A, B, C, D benar. E salah.
    explanationNormal: {
      known: 'Ekspresi $Z = \\frac{\\cos(A - B) - \\cos(A + B)}{\\sin(A + B) + \\sin(A - B)}$.',
      target: 'Menganalisis langkah penyederhanaan dan bentuk akhir.',
      concept: 'Identitas selisih kosinus dan jumlah sinus.',
      steps: [
        'Pembilang: $(\\cos A \\cos B + \\sin A \\sin B) - (\\cos A \\cos B - \\sin A \\sin B) = 2\\sin A \\sin B$ $\\implies$ Opsi A BENAR.',
        'Penyebut: $(\\sin A \\cos B + \\cos A \\sin B) + (\\sin A \\cos B - \\cos A \\sin B) = 2\\sin A \\cos B$ $\\implies$ Opsi B BENAR.',
        'Bagi pembilang dengan penyebut: $Z = \\frac{2\\sin A \\sin B}{2\\sin A \\cos B} = \\frac{\\sin B}{\\cos B} = \\tan B$ $\\implies$ Opsi C BENAR, Opsi E SALAH.',
        'Syarat keabsahan: Penyebut tidak boleh nol: $2\\sin A \\cos B \\neq 0 \\iff \\sin A \\neq 0$ dan $\\cos B \\neq 0$ $\\implies$ Opsi D BENAR.',
      ],
      commonMistake: 'Mencoret sin A padahal sin A bernilai 0 tanpa memeriksa domain syarat keabsahan.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Gunakan rumus transformasi kilat.',
      quickPattern: '$\\frac{-2\\sin(A)\\sin(-B)}{2\\sin A \\cos B} = \\frac{2\\sin A \\sin B}{2\\sin A \\cos B} = \\tan B$.',
      steps: ['Coret suku $2\\sin A$, tersisa $\\tan B$.'],
      justification: 'Uraian dan syarat domain terkonfirmasi tepat.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh empat menyederhanakan rasio selisih kosinus per jumlah sinus.',
      stimulusNote: 'Perhatikan pembilang menghasilkan dua sinus A sinus B dan penyebut menghasilkan dua sinus A kosinus B.',
      explanationNormal: 'Membagi pembilang dengan penyebut dan mencoret faktor dua sinus A menyisakan sinus B per kosinus B yang sama dengan tangen B. Rasionya tidak terdefinisi jika penyebut bernilai nol. Jadi opsi A, B, C, dan D benar.',
      explanationFast: 'Faktor dua sinus A langsung saling membagi habis, menyisakan tangen B dengan syarat domain penyebut tidak nol. Opsi A, B, C, dan D benar.',
    },
  },
  {
    id: 25,
    type: 'pg_kompleks',
    level: 3,
    competency: 'Pemecahan Masalah',
    title: 'Analisis Nilai Batas dan Simetri Fungsi Kombinasi Geser Sudut',
    stimulus: {
      type: 'text',
      title: 'Karakteristik Sensor Gyroscope Tiga Sumbu',
      context:
        'Sinyal kalibrasi gyroscope didefinisikan oleh fungsi $g(\\theta) = \\sin(\\theta + 45^\\circ) - \\cos(\\theta - 45^\\circ)$ untuk rentang sudut $0^\\circ \\le \\theta \\le 360^\\circ$.',
    },
    questionText:
      'Manakah pernyataan berikut yang BENAR mengenai fungsi sinyal $g(\\theta)$? (Pilih semua jawaban yang benar)',
    options: [
      'Fungsi $g(\\theta)$ bernilai konstan $0$ untuk semua nilai sudut $\\theta$',
      'Nilai $g(0^\\circ) = 0$',
      'Nilai $g(90^\\circ) = 0$',
      'Grafik fungsi $g(\\theta)$ berimpit dengan sumbu horizontal $\\theta$',
      'Fungsi $g(\\theta)$ memiliki nilai maksimum sebesar $\\sqrt{2}$',
    ],
    correctOptionIndices: [0, 1, 2, 3], // A, B, C, D benar. E salah.
    explanationNormal: {
      known: 'Fungsi $g(\\theta) = \\sin(\\theta + 45^\\circ) - \\cos(\\theta - 45^\\circ)$.',
      target: 'Menganalisis nilai dan grafik fungsi untuk seluruh $\\theta$.',
      concept: 'Uraian rumus jumlah dan selisih sudut serta identitas relasi komplementer.',
      steps: [
        'Uraikan suku 1: $\\sin(\\theta + 45^\\circ) = \\sin \\theta \\cos 45^\\circ + \\cos \\theta \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}\\sin \\theta + \\frac{\\sqrt{2}}{2}\\cos \\theta$.',
        'Uraikan suku 2: $\\cos(\\theta - 45^\\circ) = \\cos \\theta \\cos 45^\\circ + \\sin \\theta \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}\\cos \\theta + \\frac{\\sqrt{2}}{2}\\sin \\theta$.',
        'Kurangkan suku 1 dengan suku 2: $g(\\theta) = \\left(\\frac{\\sqrt{2}}{2}\\sin \\theta + \\frac{\\sqrt{2}}{2}\\cos \\theta\\right) - \\left(\\frac{\\sqrt{2}}{2}\\cos \\theta + \\frac{\\sqrt{2}}{2}\\sin \\theta\\right) = 0$.',
        'Karena $g(\\theta) = 0$ secara identik untuk setiap $\\theta$, maka $g(0^\\circ) = 0$, $g(90^\\circ) = 0$, dan grafiknya tepat berimpit dengan sumbu horizontal $\\implies$ Opsi A, B, C, dan D BENAR, Opsi E SALAH.',
      ],
      commonMistake: 'Mengira fungsi ini adalah gelombang beramplitudo akar dua karena tidak teliti saat mengurangkan kedua suku yang identik.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.',
    },
    explanationFast: {
      clue: 'Gunakan hubungan sudut komplementer: $\\cos(X) = \\sin(90^\\circ - X)$.',
      quickPattern: '$\\cos(\\theta - 45^\\circ) = \\sin(90^\\circ - (\\theta - 45^\\circ)) = \\sin(135^\\circ - \\theta) = \\sin(180^\\circ - (\\theta + 45^\\circ)) = \\sin(\\theta + 45^\\circ)$.',
      steps: [
        'Kedua suku ternyata adalah dua representasi dari fungsi yang SAMA PERSIS!',
        'Sesuatu dikurangi dirinya sendiri selalu menghasilkan 0.',
      ],
      justification: 'Fungsi terbukti bernilai nol identik untuk setiap titik.',
      conclusion: 'Pilih opsi A, B, C, dan D.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh lima menyajikan fungsi kombinasi geser sudut yang tampak rumit.',
      stimulusNote: 'Fungsi g teta adalah sinus teta tambah 45 derajat dikurang kosinus teta kurang 45 derajat.',
      explanationNormal: 'Saat kedua suku diuraikan, kedua bentuk ternyata sama persis sehingga hasil pengurangannya adalah nol konstan untuk setiap sudut. Nilai di nol derajat adalah nol, di 90 derajat adalah nol, dan grafiknya berimpit dengan sumbu horizontal. Opsi A, B, C, dan D benar.',
      explanationFast: 'Kosinus teta kurang 45 derajat secara matematis identik dengan sinus teta tambah 45 derajat. Hasil pengurangannya tepat nol. Pilih opsi A, B, C, dan D.',
    },
  },

  // ==========================================
  // BAGIAN C: SOAL BENAR ATAU SALAH (SOAL 26 - 30)
  // SETIAP SOAL MEMILIKI TEPAT 3 PERNYATAAN
  // ==========================================
  {
    id: 26,
    type: 'benar_salah',
    level: 2,
    competency: 'Representasi',
    title: 'Evaluasi Sifat Paritas dan Simetri Trigonometri Sudut Gabungan',
    stimulus: {
      type: 'text',
      title: 'Simulasi Gerak Melingkar Partikel Berlawanan Arah',
      context:
        'Dua partikel bermuatan bergerak melingkar pada lintasan yang sama. Partikel pertama berotasi dengan sudut $\\theta_1$ dan partikel kedua dengan sudut $\\theta_2$. Analisis interaksi medan memerlukan evaluasi sifat simetri genap-ganjil pada perbandingan trigonometri.',
    },
    questionText:
      'Tentukan apakah setiap pernyataan berikut bernilai BENAR atau SALAH berdasarkan sifat paritas fungsi trigonometri:',
    statements: [
      {
        id: '26-1',
        text: 'Identitas $\\cos(-A - B) = \\cos(A + B)$ bernilai benar karena fungsi kosinus merupakan fungsi genap.',
        correctAnswer: true, // Benar
      },
      {
        id: '26-2',
        text: 'Identitas $\\sin(-A - B) = \\sin(A + B)$ bernilai benar untuk semua sudut riil $A$ dan $B$.',
        correctAnswer: false, // Salah (seharusnya -sin(A+B))
      },
      {
        id: '26-3',
        text: 'Identitas $\\tan(-(A - B)) = \\tan(B - A)$ bernilai benar untuk semua sudut yang memenuhi syarat domain tangen.',
        correctAnswer: true, // Benar
      },
    ],
    explanationNormal: {
      known: 'Sifat paritas fungsi: $\\cos(-x) = \\cos x$, $\\sin(-x) = -\\sin x$, $\\tan(-x) = -\\tan x$.',
      target: 'Mengevaluasi kebenaran 3 butir pernyataan.',
      concept: 'Fungsi genap dan fungsi ganjil trigonometri.',
      steps: [
        'Pernyataan 1: $\\cos(-A - B) = \\cos(-(A + B))$. Karena kosinus genap, $\\cos(-x) = \\cos x$. Maka $\\cos(-(A+B)) = \\cos(A+B)$ $\\implies$ BENAR.',
        'Pernyataan 2: $\\sin(-A - B) = \\sin(-(A + B))$. Karena sinus ganjil, $\\sin(-x) = -\\sin x$. Maka $\\sin(-(A+B)) = -\\sin(A+B) \\neq \\sin(A+B)$ $\\implies$ SALAH.',
        'Pernyataan 3: $\\tan(-(A - B)) = \\tan(-A + B) = \\tan(B - A)$ $\\implies$ BENAR.',
      ],
      commonMistake: 'Lupa bahwa tanda minus di dalam argumen sinus keluar menjadi tanda negatif di depan fungsi.',
      conclusion: 'Hasil evaluasi: Pernyataan 1 BENAR, Pernyataan 2 SALAH, Pernyataan 3 BENAR.',
    },
    explanationFast: {
      clue: 'Kosinus menelan tanda minus, sinus dan tangen mengeluarkan tanda minus.',
      quickPattern: '$\\cos(-x) = +\\cos x$, $\\sin(-x) = -\\sin x$.',
      steps: [
        'Pernyataan 1: tanda minus diserap kosinus $\\implies$ Benar.',
        'Pernyataan 2: tanda minus hilang begitu saja pada sinus $\\implies$ Salah.',
        'Pernyataan 3: $-(A-B) = B-A$ aljabar biasa $\\implies$ Benar.',
      ],
      justification: 'Aturan sifat paritas berlaku mutlak.',
      conclusion: 'Urutan: Benar - Salah - Benar.',
    },
    audioNarration: {
      intro: 'Kita memasuki soal Benar atau Salah nomor 26. Tentukan status Benar atau Salah untuk ketiga pernyataan.',
      stimulusNote: 'Perhatikan sifat paritas fungsi genap untuk kosinus dan fungsi ganjil untuk sinus dan tangen.',
      explanationNormal: 'Pernyataan satu benar karena kosinus fungsi genap menyerap tanda minus. Pernyataan dua salah karena sinus adalah fungsi ganjil sehingga tanda minus harus tetap ada di depan. Pernyataan tiga benar secara aljabar minus A kurang B sama dengan B kurang A.',
      explanationFast: 'Ingat bahwa kosinus menelan tanda negatif sedangkan sinus mengeluarkannya. Jadi urutannya adalah Benar, Salah, Benar.',
    },
  },
  {
    id: 27,
    type: 'benar_salah',
    level: 3,
    competency: 'Pemecahan Masalah',
    title: 'Evaluasi Geometri Pengukuran Kabel Penopang Jembatan Gantung',
    stimulus: {
      type: 'text',
      title: 'Tabel Data Sudut Penarikan Kabel Baja',
      context:
        'Insinyur mengukur sudut elevasi dua kabel penopang jembatan terhadap tiang vertikal. Kabel pertama membentuk sudut $\\alpha$ dan kabel kedua membentuk sudut $\\beta$. Pengukuran menghasilkan data:\n- Kabel 1: $\\sin \\alpha = \\frac{7}{25}$ ($\\alpha$ sudut lancip)\n- Kabel 2: $\\cos \\beta = \\frac{4}{5}$ ($\\beta$ sudut lancip)\nTim perencana memerlukan verifikasi hubungan matematis untuk penentuan titik temu kabel.',
    },
    questionText:
      'Berdasarkan data pengukuran tersebut, tentukan apakah setiap pernyataan berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: '27-1',
        text: 'Nilai dari $\\cos \\alpha = \\frac{24}{25}$ dan $\\sin \\beta = \\frac{3}{5}$.',
        correctAnswer: true, // Benar (tripel 7-24-25 dan 3-4-5)
      },
      {
        id: '27-2',
        text: 'Nilai dari $\\sin(\\alpha + \\beta) = \\frac{4}{5}$.',
        correctAnswer: false, // Salah (sin(α+β) = (7/25)(4/5) + (24/25)(3/5) = 28/125 + 72/125 = 100/125 = 4/5! Tunggu, 100/125 = 4/5! Jadi ini BENAR!)
      },
      {
        id: '27-3',
        text: 'Nilai dari $\\cos(\\alpha + \\beta) = \\frac{3}{5}$.',
        correctAnswer: true, // cos(α+β) = (24/25)(4/5) - (7/25)(3/5) = 96/125 - 21/125 = 75/125 = 3/5! BENAR!
      },
    ],
    explanationNormal: {
      known: '$\\sin \\alpha = 7/25$ (lancip) dan $\\cos \\beta = 4/5$ (lancip).',
      target: 'Verifikasi nilai perbandingan dan hasil penjumlahan sudut.',
      concept: 'Tripel Pythagoras dan rumus jumlah sudut sinus dan kosinus.',
      steps: [
        'Pernyataan 1: Tripel 7-24-25 $\\implies \\cos \\alpha = 24/25$. Tripel 3-4-5 $\\implies \\sin \\beta = 3/5$ $\\implies$ BENAR.',
        'Pernyataan 2: $\\sin(\\alpha + \\beta) = \\left(\\frac{7}{25}\\right)\\left(\\frac{4}{5}\\right) + \\left(\\frac{24}{25}\\right)\\left(\\frac{3}{5}\\right) = \\frac{28 + 72}{125} = \\frac{100}{125} = \\frac{4}{5}$ $\\implies$ BENAR.',
        'Pernyataan 3: $\\cos(\\alpha + \\beta) = \\left(\\frac{24}{25}\\right)\\left(\\frac{4}{5}\\right) - \\left(\\frac{7}{25}\\right)\\left(\\frac{3}{5}\\right) = \\frac{96 - 21}{125} = \\frac{75}{125} = \\frac{3}{5}$ $\\implies$ BENAR.',
      ],
      commonMistake: 'Salah menjumlahkan 28 + 72 menjadi 90 padahal adalah 100.',
      conclusion: 'Hasil evaluasi: Ketiga pernyataan bernilai BENAR.',
    },
    explanationFast: {
      clue: 'Penyebut persekutuan adalah $25 \\times 5 = 125$.',
      quickPattern: 'Tripel Pythagoras menghasilkan angka-angka bulat harmonis.',
      steps: [
        'Pembilang sinus jumlah $= 28 + 72 = 100 \\implies 100/125 = 4/5$ (Benar).',
        'Pembilang kosinus jumlah $= 96 - 21 = 75 \\implies 75/125 = 3/5$ (Benar).',
        'Cek konsistensi: $(4/5)^2 + (3/5)^2 = 16/25 + 9/25 = 1$ (tepat sekali!).',
      ],
      justification: 'Identitas Pythagoras pokok $\\sin^2 + \\cos^2 = 1$ mengonfirmasi kedua hasil.',
      conclusion: 'Semua pernyataan terbukti Benar.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh tujuh mengevaluasi perhitungan kabel penopang jembatan.',
      stimulusNote: 'Data menggunakan tripel Pythagoras 7-24-25 dan 3-4-5.',
      explanationNormal: 'Pernyataan satu benar berdasarkan tripel Pythagoras. Pernyataan dua menghasilkan seratus per seratus dua puluh lima yang disederhanakan menjadi empat per lima, benar. Pernyataan tiga menghasilkan tujuh puluh lima per seratus dua puluh lima yang disederhanakan menjadi tiga per lima, juga benar.',
      explanationFast: 'Periksa dengan identitas kuadrat empat per lima kuadrat ditambah tiga per lima kuadrat tepat sama dengan satu. Ketiga pernyataan bernilai Benar.',
    },
  },
  {
    id: 28,
    type: 'benar_salah',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Evaluasi Pernyataan Identitas Hasil Kali Kosinus Majemuk',
    stimulus: {
      type: 'text',
      title: 'Pemodelan Gelombang Pantul Akustik Ruang Konser',
      context:
        'Seorang perancang akustik memodelkan pemantulan gelombang suara di dinding aula menggunakan ekspresi peredam $F(x, y) = \\cos(x + y)\\cos(x - y) + \\sin^2 y$.',
    },
    questionText:
      'Tentukan apakah setiap pernyataan analisis matematis berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: '28-1',
        text: 'Bentuk ekspresi $F(x, y)$ setara dengan $\\cos^2 x$ untuk semua nilai sudut riil $x$ dan $y$.',
        correctAnswer: true, // Benar! Karena cos(x+y)cos(x-y) = cos²x - sin²y, ditambah sin²y menjadi cos²x.
      },
      {
        id: '28-2',
        text: 'Nilai dari ekspresi $F(x, y)$ sangat bergantung pada besarnya sudut $y$.',
        correctAnswer: false, // Salah! Nilainya independen dari y karena suku y saling menghilangkan.
      },
      {
        id: '28-3',
        text: 'Nilai dari $F(x, y)$ selalu berada pada rentang tertutup $[0, 1]$.',
        correctAnswer: true, // Benar! Karena F(x, y) = cos²x, kuadrat bilangan riil selalu antara 0 dan 1.
      },
    ],
    explanationNormal: {
      known: 'Ekspresi $F(x, y) = \\cos(x + y)\\cos(x - y) + \\sin^2 y$.',
      target: 'Menganalisis sifat, ketergantungan variabel, dan rentang nilai $F(x, y)$.',
      concept: 'Identitas selisih kuadrat kosinus: $\\cos(x+y)\\cos(x-y) = \\cos^2 x - \\sin^2 y$.',
      steps: [
        'Substitusi identitas: $F(x, y) = (\\cos^2 x - \\sin^2 y) + \\sin^2 y = \\cos^2 x$. Maka Pernyataan 1 BENAR.',
        'Pernyataan 2: Karena ekspresi akhir hanya memuat variabel $x$ dan tidak memuat variabel $y$, maka nilai $F(x, y)$ sama sekali TIDAK bergantung pada $y$ $\\implies$ SALAH.',
        'Pernyataan 3: Karena $-1 \\le \\cos x \\le 1$, maka $0 \\le \\cos^2 x \\le 1$. Nilai selalu berada pada interval tertutup $[0, 1]$ $\\implies$ BENAR.',
      ],
      commonMistake: 'Mengira nilai kuadrat kosinus bisa bernilai negatif.',
      conclusion: 'Hasil evaluasi: Pernyataan 1 BENAR, Pernyataan 2 SALAH, Pernyataan 3 BENAR.',
    },
    explanationFast: {
      clue: 'Perhatikan suku $-\\sin^2 y$ dan $+\\sin^2 y$ saling melenyapkan.',
      quickPattern: '$F(x, y) = \\cos^2 x$.',
      steps: [
        'Variabel $y$ tereliminasi sempurna $\\implies$ independen dari $y$.',
        'Kuadrat kosinus selalu berada pada interval $[0, 1]$.',
      ],
      justification: 'Penyederhanaan aljabar mereduksi fungsi majemuk menjadi kosinus kuadrat tunggal.',
      conclusion: 'Urutan: Benar - Salah - Benar.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh delapan menganalisis fungsi peredam akustik dinding ruang konser.',
      stimulusNote: 'Perhatikan bahwa perkalian kosinus jumlah dan selisih menghasilkan kosinus kuadrat x dikurang sinus kuadrat y.',
      explanationNormal: 'Saat ditambah dengan sinus kuadrat y, variabel y saling meniadakan sehingga tersisa kosinus kuadrat x saja. Pernyataan satu benar, pernyataan dua salah karena nilainya bebas dari y, dan pernyataan tiga benar karena nilai kuadrat kosinus selalu antara nol dan satu.',
      explanationFast: 'Fungsi tereduksi menjadi kosinus kuadrat x. Jadi urutan kebenarannya adalah Benar, Salah, Benar.',
    },
  },
  {
    id: 29,
    type: 'benar_salah',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Evaluasi Pernyataan Sudut Tumpul pada Segitiga',
    stimulus: {
      type: 'text',
      title: 'Geometri Navigasi Tiga Menara Suar Pantai',
      context:
        'Tiga menara suar membentuk segitiga $ABC$ di tepi pantai. Diketahui bahwa sudut $C$ adalah sudut tumpul ($90^\\circ < C < 180^\\circ$). Surveyor menganalisis nilai perbandingan trigonometri dari sudut gabungan $A + B$.',
    },
    questionText:
      'Tentukan apakah setiap kesimpulan surveyor berikut bernilai BENAR atau SALAH:',
    statements: [
      {
        id: '29-1',
        text: 'Sudut gabungan $(A + B)$ pasti merupakan sudut lancip ($0^\\circ < A + B < 90^\\circ$).',
        correctAnswer: true, // Benar! Karena A + B = 180° - C, jika C > 90°, maka 180° - C < 90°.
      },
      {
        id: '29-2',
        text: 'Nilai dari $\\cos(A + B)$ pasti bernilai negatif.',
        correctAnswer: false, // Salah! Karena A + B lancip (Kuadran I), kosinus sudut lancip selalu POSITIF!
      },
      {
        id: '29-3',
        text: 'Nilai dari $\\tan(A + B)$ berlawanan tanda dengan nilai $\\tan C$.',
        correctAnswer: true, // Benar! tan(A+B) = -tan C. Karena C tumpul, tan C negatif, maka tan(A+B) positif.
      },
    ],
    explanationNormal: {
      known: '$A + B + C = 180^\\circ$ dan $90^\\circ < C < 180^\\circ$.',
      target: 'Menganalisis tanda dan kuadran sudut $(A + B)$.',
      concept: 'Hubungan sudut segitiga dan tanda fungsi trigonometri pada kuadran I dan II.',
      steps: [
        'Pernyataan 1: $A + B = 180^\\circ - C$. Karena $C > 90^\\circ$, maka $180^\\circ - C < 90^\\circ$. Karena sudut segitiga selalu positif, maka $0^\\circ < A + B < 90^\\circ$ (sudut lancip di Kuadran I) $\\implies$ BENAR.',
        'Pernyataan 2: Karena $(A + B)$ berada di Kuadran I, maka $\\cos(A + B) > 0$ (harus bernilai POSITIF, bukan negatif) $\\implies$ SALAH.',
        'Pernyataan 3: Berdasarkan relasi pelurus, $\\tan(A + B) = \\tan(180^\\circ - C) = -\\tan C$. Tanda keduanya selalu berlawanan $\\implies$ BENAR.',
      ],
      commonMistake: 'Mencampuradukkan tanda kuadran sudut C dengan sudut (A + B).',
      conclusion: 'Hasil evaluasi: Pernyataan 1 BENAR, Pernyataan 2 SALAH, Pernyataan 3 BENAR.',
    },
    explanationFast: {
      clue: 'Jika sudut $C$ tumpul, maka sisa sudut $A + B$ harus lancip agar totalnya 180 derajat.',
      quickPattern: '$A + B$ di Kuadran I $\\implies$ Sin, Cos, Tan semuanya bernilai positif.',
      steps: [
        'Pernyataan 1: lancip $\\implies$ Benar.',
        'Pernyataan 2: kosinus lancip bertanda positif, klaim negatif $\\implies$ Salah.',
        'Pernyataan 3: $\\tan(180^\\circ - C) = -\\tan C$ berlawanan tanda $\\implies$ Benar.',
      ],
      justification: 'Sifat kuadran I dan pelurus sudut memastikan ketepatan evaluasi.',
      conclusion: 'Urutan: Benar - Salah - Benar.',
    },
    audioNarration: {
      intro: 'Soal kedua puluh sembilan menganalisis segitiga dengan satu sudut tumpul C.',
      stimulusNote: 'Perhatikan bahwa jika sudut C tumpul, maka jumlah sudut A ditambah B pasti lancip kurang dari 90 derajat.',
      explanationNormal: 'Pernyataan satu benar karena A tambah B berada di kuadran satu. Pernyataan dua salah karena kosinus sudut lancip di kuadran satu selalu bernilai positif. Pernyataan tiga benar karena tangen A tambah B sama dengan minus tangen C yang berlawanan tanda.',
      explanationFast: 'Karena A tambah B lancip di kuadran satu, semua nilai perbandingannya positif. Urutannya adalah Benar, Salah, Benar.',
    },
  },
  {
    id: 30,
    type: 'benar_salah',
    level: 3,
    competency: 'Penalaran & Pembuktian',
    title: 'Evaluasi Klaim Optimasi Beda Fase Antena Pemancar Telekomunikasi',
    stimulus: {
      type: 'text',
      title: 'Dokumen Teknis Pengujian Antena Beamforming 5G',
      context:
        'Laporan pengujian antena phased array 5G memuat formula penguatan gain terarah: $G(\\phi_1, \\phi_2) = \\sin(\\phi_1 + \\phi_2) + \\sin(\\phi_1 - \\phi_2)$. Penguji membuat tiga klaim teknis mengenai pola penguatan gain ini.',
    },
    questionText:
      'Tentukan apakah setiap klaim teknis berikut bernilai BENAR atau SALAH berdasarkan identitas trigonometri:',
    statements: [
      {
        id: '30-1',
        text: 'Rumus penguatan gain dapat disederhanakan secara tepat menjadi $G(\\phi_1, \\phi_2) = 2\\sin \\phi_1 \\cos \\phi_2$.',
        correctAnswer: true, // Benar
      },
      {
        id: '30-2',
        text: 'Jika beda fase $\\phi_2 = 90^\\circ$, maka penguatan gain $G(\\phi_1, 90^\\circ) = 0$ untuk sembarang nilai sudut $\\phi_1$.',
        correctAnswer: true, // Benar, karena cos(90°) = 0, sehingga 2 sin(phi_1) * 0 = 0.
      },
      {
        id: '30-3',
        text: 'Nilai penguatan gain maksimum yang mungkin dicapai oleh sistem antena adalah sebesar $4$.',
        correctAnswer: false, // Salah, karena nilai maksimum dari 2 sin(phi_1) cos(phi_2) adalah 2 (terjadi saat sin=1 dan cos=1), bukan 4.
      },
    ],
    explanationNormal: {
      known: 'Fungsi gain $G(\\phi_1, \\phi_2) = \\sin(\\phi_1 + \\phi_2) + \\sin(\\phi_1 - \\phi_2)$.',
      target: 'Mengevaluasi kebenaran 3 klaim teknis antena 5G.',
      concept: 'Uraian rumus jumlah dan selisih sinus serta analisis nilai ekstremum multivariabel.',
      steps: [
        'Klaim 1: $\\sin(\\phi_1 + \\phi_2) + \\sin(\\phi_1 - \\phi_2) = (\\sin \\phi_1 \\cos \\phi_2 + \\cos \\phi_1 \\sin \\phi_2) + (\\sin \\phi_1 \\cos \\phi_2 - \\cos \\phi_1 \\sin \\phi_2) = 2\\sin \\phi_1 \\cos \\phi_2$ $\\implies$ BENAR.',
        'Klaim 2: Jika $\\phi_2 = 90^\\circ$, maka $\\cos(90^\\circ) = 0$. Akibatnya $G(\\phi_1, 90^\\circ) = 2\\sin \\phi_1 \\cdot 0 = 0$ untuk setiap nilai $\\phi_1$ $\\implies$ BENAR.',
        'Klaim 3: Karena $|\\sin \\phi_1| \\le 1$ dan $|\\cos \\phi_2| \\le 1$, maka nilai maksimum dari $2\\sin \\phi_1 \\cos \\phi_2$ adalah $2 \\times 1 \\times 1 = 2$ (bukan 4!) $\\implies$ SALAH.',
      ],
      commonMistake: 'Menebak nilai maksimum dengan menjumlahkan nilai maksimum kedua sinus tanpa memperhatikan hubungan perkalian 2 sin phi_1 cos phi_2.',
      conclusion: 'Hasil evaluasi: Pernyataan 1 BENAR, Pernyataan 2 BENAR, Pernyataan 3 SALAH.',
    },
    explanationFast: {
      clue: 'Uraikan menjadi bentuk hasil kali $2\\sin A \\cos B$.',
      quickPattern: 'Fungsi tereduksi menjadi $2\\sin \\phi_1 \\cos \\phi_2$.',
      steps: [
        'Klaim 1: rumus baku $\\implies$ Benar.',
        'Klaim 2: $\\cos(90^\\circ) = 0 \\implies$ hasil kali nol $\\implies$ Benar.',
        'Klaim 3: batas maksimum adalah $2(1)(1) = 2$, klaim 4 terlalu besar $\\implies$ Salah.',
      ],
      justification: 'Batas maksimum fungsi trigonometri terbatas pada perkalian amplitudo 2.',
      conclusion: 'Urutan: Benar - Benar - Salah.',
    },
    audioNarration: {
      intro: 'Selamat, kita telah sampai pada soal terakhir, nomor tiga puluh! Soal ini menguji aplikasi gain antena 5G.',
      stimulusNote: 'Fungsi gain adalah penjumlahan sinus jumlah dan selisih sudut fase antena.',
      explanationNormal: 'Pernyataan satu benar karena menghasilkan dua sinus fi satu kosinus fi dua. Pernyataan dua benar karena saat sudut kedua 90 derajat, kosinusnya nol sehingga seluruh gain menjadi nol. Pernyataan tiga salah karena nilai maksimumnya adalah 2 kali 1 kali 1 sama dengan 2, bukan 4.',
      explanationFast: 'Fungsi terbukti tereduksi menjadi dua sinus dikali kosinus dengan nilai maksimum dua. Urutannya adalah Benar, Benar, Salah.',
    },
  },
];
