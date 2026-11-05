import { MaterialSection } from '../types';

export const materialsData: MaterialSection[] = [
  {
    id: 1,
    title: 'Bagian 1: Pengantar Trigonometri & Lingkaran Satuan',
    subtitle: 'Fondasi sudut, radian, perbandingan trigonometri, dan koordinat lingkaran satuan',
    iconName: 'Compass',
    subsections: [
      {
        id: '1-1',
        title: '1.1 Pengertian Sudut, Derajat, dan Radian',
        narration:
          'Halo para pejuang TKA! Mari kita mulai dari fondasi paling kokoh, yaitu memahami hakikat sudut dan dua satuan pengukurannya: derajat dan radian. Satu putaran penuh lingkaran adalah 360 derajat, atau setara dengan 2 pi radian. Ingat, sudut dalam trigonometri tingkat lanjut dipandang sebagai rotasi dari sumbu X positif.',
        content: `
Sudut dalam geometri analitik dan trigonometri didefinisikan sebagai besaran rotasi suatu sinar garis dari posisi awal (*initial side*, yaitu sumbu $X$ positif) menuju posisi akhir (*terminal side*) dengan pusat putaran di titik asal $O(0,0)$.

### Konversi Satuan Derajat dan Radian
- Satu putaran lingkaran penuh $= 360^\\circ = 2\\pi \\text{ rad}$.
- Setengah putaran $= 180^\\circ = \\pi \\text{ rad}$.
- Konversi dari derajat ke radian:
$$\\theta \\text{ (rad)} = \\theta^\\circ \\times \\frac{\\pi}{180^\\circ}$$
- Konversi dari radian ke derajat:
$$\\theta^\\circ = \\theta \\text{ (rad)} \\times \\frac{180^\\circ}{\\pi}$$

*Mengapa radian sangat penting di TKA?*
Radian menghubungkan panjang busur lingkaran ($s$) dengan jari-jari ($r$) melalui relasi murni: $s = r\\theta$. Hal ini mempermudah pemodelan gerak rotasi, getaran harmonis, dan rekayasa gelombang.
        `,
        formulaBox: {
          title: 'Hubungan Satuan Sudut Penting',
          formulas: [
            '180^\\circ = \\pi \\text{ rad}',
            '30^\\circ = \\frac{\\pi}{6} \\text{ rad}, \\quad 45^\\circ = \\frac{\\pi}{4} \\text{ rad}',
            '60^\\circ = \\frac{\\pi}{3} \\text{ rad}, \\quad 90^\\circ = \\frac{\\pi}{2} \\text{ rad}',
          ],
          notes: 'Sudut bernilai positif bila diputar berlawanan arah jarum jam, dan bernilai negatif bila diputar searah jarum jam.',
          dictationScript: 'Perhatian, sistem dikte karakter untuk hubungan satuan sudut penting. Rumus pertama: angka seratus delapan puluh simbol derajat, tanda sama dengan, huruf Yunani pi, satuan radian. Rumus kedua: angka tiga puluh simbol derajat, tanda sama dengan, garis pecahan pembilang huruf Yunani pi per penyebut angka enam, satuan radian; dan angka empat puluh lima simbol derajat, tanda sama dengan, garis pecahan pembilang huruf Yunani pi per penyebut angka empat, satuan radian. Rumus ketiga: angka enam puluh simbol derajat, tanda sama dengan, garis pecahan pembilang huruf Yunani pi per penyebut angka tiga, satuan radian; dan angka sembilan puluh simbol derajat, tanda sama dengan, garis pecahan pembilang huruf Yunani pi per penyebut angka dua, satuan radian. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Ubahlah sudut $105^\\circ$ ke dalam bentuk radian dan sebaliknya tentukan besar sudut $\\frac{7\\pi}{12} \\text{ rad}$ dalam derajat.',
          solutionNormal: '1. Kalikan $105^\\circ$ dengan $\\frac{\\pi}{180^\\circ}$: $105 \\times \\frac{\\pi}{180} = \\frac{105}{180}\\pi = \\frac{7\\pi}{12} \\text{ rad}$.\n2. Sebaliknya, $\\frac{7\\pi}{12} \\times \\frac{180^\\circ}{\\pi} = 7 \\times 15^\\circ = 105^\\circ$.',
          solutionFast: 'Faktorkan: $105^\\circ = 7 \\times 15^\\circ$. Karena $15^\\circ = \\frac{\\pi}{12}$, maka langsung didapat $\\frac{7\\pi}{12} \\text{ rad}$.',
          keyTakeaway: 'Kuasai kelipatan sudut dasar $15^\\circ = \\frac{\\pi}{12}$ untuk mempercepat kalkulasi di TKA.',
        },
        commonMistakes: [
          'Lupa menyederhanakan pecahan saat mengalikan dengan pi per 180.',
          'Mencampuradukkan arah putaran searah jarum jam (negatif) dan berlawanan arah jarum jam (positif).',
        ],
        summary: [
          'Rotasi berlawanan jarum jam bernilai positif; searah jarum jam bernilai negatif.',
          '180 derajat setara dengan pi radian.',
          'Kuasai sudut kelipatan 15 derajat sebagai pecahan dari pi per 12.',
        ],
      },
      {
        id: '1-2',
        title: '1.2 Lingkaran Satuan dan Definisi Perbandingan',
        narration:
          'Perhatikan lingkaran satuan berpusat di nol koma nol dengan jari-jari satu satuan. Setiap titik P pada lingkaran tersebut mempunyai koordinat x koma y, di mana x adalah kosinus teta dan y adalah sinus teta. Inilah kunci ajaib yang menghubungkan aljabar, koordinat, dan trigonometri!',
        content: `
Lingkaran satuan (*unit circle*) adalah lingkaran berpusat di titik asal $O(0, 0)$ dengan jari-jari $r = 1$. Persamaannya adalah:
$$x^2 + y^2 = 1$$

Jika suatu sudut $\\theta$ dibentuk oleh sumbu $X$ positif dan sinar garis menuju titik $P(x, y)$ pada lingkaran satuan:
- **Kosinus sudut** adalah absis titik $P$:
$$\\cos \\theta = x$$
- **Sinus sudut** adalah ordinat titik $P$:
$$\\sin \\theta = y$$
- **Tangen sudut** adalah rasio ordinat terhadap absis:
$$\\tan \\theta = \\frac{y}{x} = \\frac{\\sin \\theta}{\\cos \\theta} \\quad (x \\neq 0)$$

Dengan mensubstitusi $x = \\cos \\theta$ dan $y = \\sin \\theta$ ke persamaan lingkaran $x^2 + y^2 = 1$, kita peroleh **Identitas Pythagoras Pokok**:
$$\\sin^2 \\theta + \\cos^2 \\theta = 1$$
        `,
        interactiveType: 'unit_circle',
        formulaBox: {
          title: 'Koordinat Trigonometri Lingkaran Satuan',
          formulas: [
            'P(x, y) = P(\\cos \\theta, \\sin \\theta)',
            '\\sin^2 \\theta + \\cos^2 \\theta = 1',
            '\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}, \\quad \\sec \\theta = \\frac{1}{\\cos \\theta}',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter koordinat trigonometri lingkaran satuan. Rumus pertama: titik koordinat huruf kapital P, buka kurung, huruf x, koma, huruf y, tutup kurung, tanda sama dengan, titik koordinat huruf kapital P, buka kurung, fungsi kosinus huruf Yunani teta, koma, fungsi sinus huruf Yunani teta, tutup kurung. Rumus kedua: identitas pokok Pythagoras: fungsi sinus pangkat dua dari huruf Yunani teta, tanda tambah, fungsi kosinus pangkat dua dari huruf Yunani teta, tanda sama dengan, angka satu. Rumus ketiga: fungsi tangen huruf Yunani teta, tanda sama dengan, garis pecahan pembilang fungsi sinus huruf Yunani teta per penyebut fungsi kosinus huruf Yunani teta; koma, fungsi sekan huruf Yunani teta, tanda sama dengan, garis pecahan pembilang angka satu per penyebut fungsi kosinus huruf Yunani teta. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Sebuah titik $P$ pada lingkaran satuan terletak di kuadran II dan memiliki ordinat $y = \\frac{3}{5}$. Tentukan nilai $\\cos \\theta$ dan $\\tan \\theta$.',
          solutionNormal: 'Gunakan $x^2 + y^2 = 1$. Karena $y = \\frac{3}{5}$, maka $x^2 + (3/5)^2 = 1 \\implies x^2 = 1 - 9/25 = 16/25$. Karena di Kuadran II, absis $x$ negatif, sehingga $x = -\\frac{4}{5}$. Jadi $\\cos \\theta = -\\frac{4}{5}$ dan $\\tan \\theta = \\frac{y}{x} = \\frac{3/5}{-4/5} = -\\frac{3}{4}$.',
          solutionFast: 'Ingat tripel Pythagoras 3-4-5. Karena di kuadran II, cosinus dan tangen bertanda negatif. Langsung didapat $\\cos = -4/5$ dan $\\tan = -3/4$.',
          keyTakeaway: 'Tanda perbandingan trigonometri ditentukan oleh posisi kuadran absis x dan ordinat y.',
        },
        commonMistakes: [
          'Mengambil akar kuadrat tanpa memperhatikan tanda negatif pada kuadran II atau III.',
          'Terbalik antara absis (cosinus) dan ordinat (sinus).',
        ],
        summary: [
          'Pada lingkaran satuan r = 1, koordinat titik adalah (cos θ, sin θ).',
          'Identitas Pythagoras sin²θ + cos²θ = 1 berlaku untuk semua sudut riil.',
        ],
      },
      {
        id: '1-3',
        title: '1.3 Kuadran, Tanda, dan Sudut Istimewa',
        narration:
          'Ingat jembatan keledai tanda trigonometri di empat kuadran: Semua Positif di kuadran satu, Sinus Positif di kuadran dua, Tangen Positif di kuadran tiga, dan Kosinus Positif di kuadran empat. Singkatannya: Semua Sindikat Tangan Kosong.',
        content: `
Bidang koordinat terbagi menjadi empat kuadran dengan tanda perbandingan sebagai berikut:

| Kuadran | Rentang Sudut | Tanda Absis $x$ | Tanda Ordinat $y$ | Perbandingan Bernilai Positif |
| :--- | :--- | :--- | :--- | :--- |
| **I** | $0^\\circ < \\theta < 90^\\circ$ | Positif $(+)$ | Positif $(+)$ | **Semua** (Sin, Cos, Tan) |
| **II** | $90^\\circ < \\theta < 180^\\circ$ | Negatif $(-)$ | Positif $(+)$ | **Sinus** (dan Cosec) |
| **III** | $180^\\circ < \\theta < 270^\\circ$ | Negatif $(-)$ | Negatif $(-)$ | **Tangen** (dan Cotan) |
| **IV** | $270^\\circ < \\theta < 360^\\circ$ | Positif $(+)$ | Negatif $(-)$ | **Kosinus** (dan Sec) |

### Nilai Perbandingan Sudut Istimewa
| Sudut $\\theta$ | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $\\sin \\theta$ | $0$ | $\\frac{1}{2}$ | $\\frac{1}{2}\\sqrt{2}$ | $\\frac{1}{2}\\sqrt{3}$ | $1$ |
| $\\cos \\theta$ | $1$ | $\\frac{1}{2}\\sqrt{3}$ | $\\frac{1}{2}\\sqrt{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\tan \\theta$ | $0$ | $\\frac{1}{3}\\sqrt{3}$ | $1$ | $\\sqrt{3}$ | Tak terdefinisi |
        `,
        formulaBox: {
          title: 'Sifat Paritas (Fungsi Genap / Ganjil)',
          formulas: [
            '\\cos(-\\theta) = \\cos \\theta \\quad (\\text{Fungsi Genap})',
            '\\sin(-\\theta) = -\\sin \\theta \\quad (\\text{Fungsi Ganjil})',
            '\\tan(-\\theta) = -\\tan \\theta \\quad (\\text{Fungsi Ganjil})',
          ],
          notes: 'Sifat paritas ini menjadi landasan pembuktian rumus selisih sudut dari rumus jumlah sudut!',
          dictationScript: 'Perhatian, sistem dikte karakter sifat paritas fungsi trigonometri. Rumus pertama: fungsi kosinus, buka kurung, tanda minus, huruf Yunani teta, tutup kurung, tanda sama dengan, positif fungsi kosinus huruf Yunani teta, karena kosinus adalah fungsi genap simetris. Rumus kedua: fungsi sinus, buka kurung, tanda minus, huruf Yunani teta, tutup kurung, tanda sama dengan, tanda minus di depan fungsi sinus huruf Yunani teta, karena sinus adalah fungsi ganjil. Rumus ketiga: fungsi tangen, buka kurung, tanda minus, huruf Yunani teta, tutup kurung, tanda sama dengan, tanda minus di depan fungsi tangen huruf Yunani teta, karena tangen adalah fungsi ganjil. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Tentukan nilai dari $\\cos(150^\\circ)$ dan $\\sin(225^\\circ)$.',
          solutionNormal: '1. $150^\\circ$ di Kuadran II: $\\cos(180^\\circ - 30^\\circ) = -\\cos(30^\\circ) = -\\frac{1}{2}\\sqrt{3}$.\n2. $225^\\circ$ di Kuadran III: $\\sin(180^\\circ + 45^\\circ) = -\\sin(45^\\circ) = -\\frac{1}{2}\\sqrt{2}$.',
          solutionFast: 'Relasi kuadran II: cosinus selalu negatif. Relasi kuadran III: sinus selalu negatif.',
          keyTakeaway: 'Periksa tanda kuadran terlebih dahulu sebelum menghitung nilai perbandingan sudut dasar.',
        },
        commonMistakes: [
          'Lupa tanda minus pada cosinus di kuadran II atau sinus di kuadran III.',
          'Mengira cos(-θ) bernilai -cos θ, padahal fungsi kosinus bersifat genap simetris.',
        ],
        summary: [
          'Jembatan keledai: Semua Sindikat Tangan Kosong (Kuadran I: Semua, II: Sin, III: Tan, IV: Cos).',
          'Fungsi kosinus adalah fungsi genap: cos(-x) = cos x.',
          'Fungsi sinus dan tangen adalah fungsi ganjil: sin(-x) = -sin x, tan(-x) = -tan x.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Bagian 2: Konsep Jumlah dan Selisih Sudut',
    subtitle: 'Penurunan geometris, rumus sinus, kosinus, tangen, dan analisis perbedaan tanda',
    iconName: 'Calculator',
    subsections: [
      {
        id: '2-1',
        title: '2.1 Penurunan Geometris Rumus Kosinus Selisih',
        narration:
          'Mengapa cosinus A kurang B tidak sama dengan cosinus A dikurangi cosinus B? Ini kesalahan fatal paling populer! Mari kita buktikan secara geometris menggunakan invariant panjang tali busur pada lingkaran satuan.',
        content: `
Kesalahan paling mendasar siswa adalah menerapkan sifat distributif: $\\cos(A - B) \\neq \\cos A - \\cos B$. Trigonometri adalah fungsi non-linear!

### Bukti Geometri Menggunakan Jarak Dua Titik
Ambil dua sudut $A$ dan $B$ pada lingkaran satuan dengan $A > B$.
1. Titik $P$ berada pada sudut $A$ dengan koordinat $(\\cos A, \\sin A)$.
2. Titik $Q$ berada pada sudut $B$ dengan koordinat $(\\cos B, \\sin B)$.
3. Kuadrat jarak tali busur $PQ$ menurut rumus jarak Euklides adalah:
$$d(P, Q)^2 = (\\cos A - \\cos B)^2 + (\\sin A - \\sin B)^2$$
$$= \\cos^2 A - 2\\cos A\\cos B + \\cos^2 B + \\sin^2 A - 2\\sin A\\sin B + \\sin^2 B$$
Karena $\\cos^2 A + \\sin^2 A = 1$ dan $\\cos^2 B + \\sin^2 B = 1$:
$$d(P, Q)^2 = 2 - 2(\\cos A \\cos B + \\sin A \\sin B)$$

Sekarang, putar seluruh sistem sebesar sudut $-B$ sehingga titik $Q$ berimpit dengan $(1, 0)$ dan titik $P$ berpindah ke titik $P'$ dengan sudut $(A - B)$ dan koordinat $(\\cos(A-B), \\sin(A-B))$.
Kuadrat jarak antara $P'$ dan $(1, 0)$ adalah:
$$d(P', (1,0))^2 = (\\cos(A-B) - 1)^2 + (\\sin(A-B) - 0)^2$$
$$= \\cos^2(A-B) - 2\\cos(A-B) + 1 + \\sin^2(A-B)$$
$$= 2 - 2\\cos(A - B)$$

Karena rotasi mempertahankan jarak, maka $d(P, Q)^2 = d(P', (1,0))^2$:
$$2 - 2(\\cos A \\cos B + \\sin A \\sin B) = 2 - 2\\cos(A - B)$$
Eliminasi angka 2 dan bagi dengan $-2$, kita peroleh rumus induk:
$$\\mathbf{\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B}$$
        `,
        interactiveType: 'proof',
        formulaBox: {
          title: 'Rumus Induk Kosinus Selisih Sudut',
          formulas: [
            '\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B',
            '\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B',
          ],
          notes: 'Perhatikan tanda: Pada kosinus selisih (A - B), tandanya adalah POSITIF (+). Pada kosinus jumlah (A + B), tandanya adalah NEGATIF (-).',
          dictationScript: 'Perhatian, sistem dikte karakter rumus induk kosinus selisih dan jumlah sudut. Rumus pertama: fungsi kosinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung, tanda sama dengan, fungsi kosinus huruf kapital A, dikali, fungsi kosinus huruf kapital B, tanda tambah, fungsi sinus huruf kapital A, dikali, fungsi sinus huruf kapital B. Rumus kedua: fungsi kosinus, buka kurung, huruf kapital A, tanda tambah, huruf kapital B, tutup kurung, tanda sama dengan, fungsi kosinus huruf kapital A, dikali, fungsi kosinus huruf kapital B, tanda kurang, fungsi sinus huruf kapital A, dikali, fungsi sinus huruf kapital B. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Buktikan bahwa $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$ menggunakan sifat paritas fungsi.',
          solutionNormal: 'Gantikan sudut $B$ dengan $-B$ pada rumus $\\cos(A - B)$:\n$$\\cos(A - (-B)) = \\cos A \\cos(-B) + \\sin A \\sin(-B)$$\nKarena $\\cos(-B) = \\cos B$ (genap) dan $\\sin(-B) = -\\sin B$ (ganjil):\n$$\\cos(A + B) = \\cos A (\\cos B) + \\sin A (-\\sin B) = \\cos A \\cos B - \\sin A \\sin B$$.\nTerbukti!',
          solutionFast: 'Substitusi $B \\to -B$, ubah tanda pada bagian sinus karena sinus bersifat ganjil.',
          keyTakeaway: 'Sifat paritas fungsi genap-ganjil memungkinkan penurunan seluruh rumus dari satu rumus induk.',
        },
        commonMistakes: [
          'Menulis cos(A+B) = cos A + cos B (distributif terlarang).',
          'Tertukar tanda plus dan minus pada rumus kosinus.',
        ],
        summary: [
          'Trigonometri bersifat non-linear: f(A+B) ≠ f(A) + f(B).',
          'cos(A - B) = cos A cos B + sin A sin B.',
          'cos(A + B) = cos A cos B - sin A sin B (tanda berlawanan).',
        ],
      },
      {
        id: '2-2',
        title: '2.2 Rumus Sinus Jumlah dan Selisih Sudut',
        narration:
          'Untuk menurunkan rumus sinus jumlah dan selisih, kita gunakan sifat sudut berelasi komplementer sembilan puluh derajat. Rumus sinus memiliki pola harmonis: sinus A kosinus B ditambah kosinus A sinus B. Tandanya konsisten, plus tetap plus, minus tetap minus.',
        content: `
### Penurunan Melalui Sudut Komplemen
Kita tahu bahwa $\\sin \\theta = \\cos(90^\\circ - \\theta)$.
Oleh karena itu:
$$\\sin(A + B) = \\cos(90^\\circ - (A + B)) = \\cos((90^\\circ - A) - B)$$
Gunakan rumus kosinus selisih dengan memperlakukan $(90^\\circ - A)$ sebagai sudut pertama:
$$\\sin(A + B) = \\cos(90^\\circ - A)\\cos B + \\sin(90^\\circ - A)\\sin B$$
Karena $\\cos(90^\\circ - A) = \\sin A$ dan $\\sin(90^\\circ - A) = \\cos A$:
$$\\mathbf{\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B}$$

Dengan mengganti $B$ menjadi $-B$:
$$\\mathbf{\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B}$$

### Cara Mengingat Harmonis (Jembatan Keledai)
- **Sinus (S)**: *Selingan* (Sin-Cos, Cos-Sin) dan *Sama Tanda* (tambah tetap tambah, kurang tetap kurang).
- **Kosinus (C)**: *Kembar* (Cos-Cos, Sin-Sin) dan *Cilaka Tanda* (tanda terbalik: tambah jadi kurang, kurang jadi tambah).
        `,
        formulaBox: {
          title: 'Pasangan Rumus Sinus Lengkap',
          formulas: [
            '\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B',
            '\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter pasangan rumus sinus lengkap. Rumus pertama: fungsi sinus, buka kurung, huruf kapital A, tanda tambah, huruf kapital B, tutup kurung, tanda sama dengan, fungsi sinus huruf kapital A, dikali, fungsi kosinus huruf kapital B, tanda tambah, fungsi kosinus huruf kapital A, dikali, fungsi sinus huruf kapital B. Rumus kedua: fungsi sinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung, tanda sama dengan, fungsi sinus huruf kapital A, dikali, fungsi kosinus huruf kapital B, tanda kurang, fungsi kosinus huruf kapital A, dikali, fungsi sinus huruf kapital B. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Jika $\\sin A = \\frac{3}{5}$ ($A$ lancip) dan $\\cos B = \\frac{12}{13}$ ($B$ lancip), hitunglah nilai $\\sin(A + B)$ dan $\\sin(A - B)$.',
          solutionNormal: '1. Dari $\\sin A = 3/5$, didapat $\\cos A = \\sqrt{1 - (3/5)^2} = 4/5$.\n2. Dari $\\cos B = 12/13$, didapat $\\sin B = \\sqrt{1 - (12/13)^2} = 5/13$.\n3. $\\sin(A + B) = (3/5)(12/13) + (4/5)(5/13) = \\frac{36}{65} + \\frac{20}{65} = \\frac{56}{65}$.\n4. $\\sin(A - B) = (3/5)(12/13) - (4/5)(5/13) = \\frac{36}{65} - \\frac{20}{65} = \\frac{16}{65}$.',
          solutionFast: 'Gunakan tripel Pythagoras (3,4,5) dan (5,12,13). Penyebut persekutuan adalah $5 \\times 13 = 65$. Pembilang jumlah: $3(12) + 4(5) = 36 + 20 = 56$. Pembilang selisih: $36 - 20 = 16$.',
          keyTakeaway: 'Kalikan pembilang secara silang dan jumlahkan/kurangkan dengan penyebut gabungan yang sama.',
        },
        commonMistakes: [
          'Menukar posisi sin A cos B menjadi sin A sin B pada rumus sinus.',
          'Mengubah tanda minus menjadi plus pada sin(A - B).',
        ],
        summary: [
          'sin(A + B) = sin A cos B + cos A sin B (tanda tetap seirama).',
          'sin(A - B) = sin A cos B - cos A sin B.',
          'Selalu cari nilai sinus dan kosinus kedua sudut sebelum memasukkannya ke rumus.',
        ],
      },
      {
        id: '2-3',
        title: '2.3 Rumus Tangen Jumlah dan Selisih serta Syarat Keabsahan',
        narration:
          'Sekarang kita pelajari tangen jumlah dan selisih sudut. Rumus tangen diturunkan dari perbandingan sinus per kosinus. Hati-hati! Penyebutnya tidak boleh sama dengan nol, sehingga ada syarat bahwa tangen A dikali tangen B tidak boleh sama dengan satu.',
        content: `
### Penurunan Rumus Tangen
Berdasarkan identitas dasar $\\tan(A + B) = \\frac{\\sin(A + B)}{\\cos(A + B)}$:
$$\\tan(A + B) = \\frac{\\sin A \\cos B + \\cos A \\sin B}{\\cos A \\cos B - \\sin A \\sin B}$$
Bagi pembilang dan penyebut dengan $\\cos A \\cos B$ (dengan asumsi $\\cos A \\neq 0$ dan $\\cos B \\neq 0$):
$$\\tan(A + B) = \\frac{\\frac{\\sin A \\cos B}{\\cos A \\cos B} + \\frac{\\cos A \\sin B}{\\cos A \\cos B}}{\\frac{\\cos A \\cos B}{\\cos A \\cos B} - \\frac{\\sin A \\sin B}{\\cos A \\cos B}}$$
$$\\mathbf{\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}}$$

Dengan mengganti $B$ menjadi $-B$ dan mengingat $\\tan(-B) = -\\tan B$:
$$\\mathbf{\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}}$$

### Syarat Keabsahan (Domain Restriction)
Rumus di atas sah jika dan hanya jika:
1. $A \\neq 90^\\circ + k \\cdot 180^\\circ$ dan $B \\neq 90^\\circ + k \\cdot 180^\\circ$ (agar $\\tan A$ dan $\\tan B$ terdefinisi).
2. Untuk $\\tan(A + B)$: penyebut $1 - \\tan A \\tan B \\neq 0 \\iff \\mathbf{\\tan A \\tan B \\neq 1}$.
3. Untuk $\\tan(A - B)$: penyebut $1 + \\tan A \\tan B \\neq 0 \\iff \\mathbf{\\tan A \\tan B \\neq -1}$.
        `,
        formulaBox: {
          title: 'Rumus Tangen dan Tanda',
          formulas: [
            '\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}',
            '\\tan(A - B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}',
          ],
          notes: 'Tanda pada pembilang mengikuti tanda operasi sudut (atas sama), tanda pada penyebut adalah kebalikannya (bawah lawan tanda).',
          dictationScript: 'Perhatian, sistem dikte karakter rumus tangen jumlah dan selisih sudut. Rumus pertama: fungsi tangen, buka kurung, huruf kapital A, tanda tambah, huruf kapital B, tutup kurung, tanda sama dengan, garis pecahan: pembilang, fungsi tangen huruf kapital A, tanda tambah, fungsi tangen huruf kapital B; per, penyebut, angka satu, tanda kurang, fungsi tangen huruf kapital A, dikali, fungsi tangen huruf kapital B. Rumus kedua: fungsi tangen, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung, tanda sama dengan, garis pecahan: pembilang, fungsi tangen huruf kapital A, tanda kurang, fungsi tangen huruf kapital B; per, penyebut, angka satu, tanda tambah, fungsi tangen huruf kapital A, dikali, fungsi tangen huruf kapital B. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Jika $\\tan A = \\frac{1}{2}$ dan $\\tan B = \\frac{1}{3}$, buktikan bahwa besar sudut $(A + B) = 45^\\circ$ (asumsikan $A, B$ lancip).',
          solutionNormal: 'Gunakan rumus $\\tan(A + B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$:\n$$\\tan(A + B) = \\frac{1/2 + 1/3}{1 - (1/2)(1/3)} = \\frac{5/6}{1 - 1/6} = \\frac{5/6}{5/6} = 1$$\nKarena $A, B$ lancip dan $\\tan(A + B) = 1$, maka $A + B = 45^\\circ$. Terbukti!',
          solutionFast: 'Operasi pecahan cepat: $(1/2 + 1/3) = 5/6$, dan penyebut $1 - 1/6 = 5/6$. Nilai perbandingan $1 \\implies 45^\\circ$.',
          keyTakeaway: 'Kombinasi tan A = 1/2 dan tan B = 1/3 adalah identitas klasik Euler yang sering muncul di TKA!',
        },
        commonMistakes: [
          'Mengabaikan tanda minus pada penyebut rumus tan(A + B).',
          'Menggunakan rumus tangen ketika salah satu sudut adalah 90 derajat.',
        ],
        summary: [
          'tan(A + B) = (tan A + tan B) / (1 - tan A tan B).',
          'Penyebut tidak boleh nol, syarat: tan A tan B ≠ 1 untuk jumlah.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Bagian 3: Menentukan Nilai Eksak Sudut Gabungan',
    subtitle: 'Kalkulasi eksak 15°, 75°, 105°, 165° dan manipulasi bentuk akar irasional',
    iconName: 'Shapes',
    subsections: [
      {
        id: '3-1',
        title: '3.1 Nilai Eksak Sudut 75° dan 15°',
        narration:
          'Sudut 75 derajat dapat dipecah menjadi 45 derajat ditambah 30 derajat, sedangkan sudut 15 derajat adalah 45 derajat dikurangi 30 derajat. Hasilnya selalu berbentuk kombinasi akar 6 dan akar 2 per 4. Mari kita telusuri langkah demi langkah.',
        content: `
Sudut $75^\\circ$ dan $15^\\circ$ bukan sudut segitiga siku-siku tunggal standar, namun merupakan kombinasi dua sudut istimewa $45^\\circ$ dan $30^\\circ$.

### Menghitung $\\sin 75^\\circ$ dan $\\cos 75^\\circ$
$$\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ$$
$$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) + \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right) = \\mathbf{\\frac{\\sqrt{6} + \\sqrt{2}}{4}}$$

$$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ$$
$$= \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\sqrt{3}\\right) - \\left(\\frac{1}{2}\\sqrt{2}\\right)\\left(\\frac{1}{2}\\right) = \\mathbf{\\frac{\\sqrt{6} - \\sqrt{2}}{4}}$$

### Menghitung Nilai $15^\\circ$ dengan Hubungan Komplemen
Berdasarkan prinsip relasi komplemen $\\sin(90^\\circ - \\theta) = \\cos \\theta$:
- $\\sin 15^\\circ = \\cos(90^\\circ - 15^\\circ) = \\cos 75^\\circ = \\mathbf{\\frac{\\sqrt{6} - \\sqrt{2}}{4}}$
- $\\cos 15^\\circ = \\sin(90^\\circ - 15^\\circ) = \\sin 75^\\circ = \\mathbf{\\frac{\\sqrt{6} + \\sqrt{2}}{4}}$
        `,
        formulaBox: {
          title: 'Tabel Ringkas Nilai Eksak 15° dan 75°',
          formulas: [
            '\\sin 75^\\circ = \\cos 15^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}',
            '\\cos 75^\\circ = \\sin 15^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}',
            '\\tan 75^\\circ = 2 + \\sqrt{3}, \\quad \\tan 15^\\circ = 2 - \\sqrt{3}',
          ],
          notes: 'Perhatikan bahwa perkalian (2 + √3)(2 - √3) = 4 - 3 = 1, membuktikan tan 75° × tan 15° = 1 (karena sudut saling berkomplemen).',
          dictationScript: 'Perhatian, sistem dikte karakter nilai eksak sudut 15 derajat dan 75 derajat. Rumus pertama: fungsi sinus tujuh puluh lima derajat, tanda sama dengan, fungsi kosinus lima belas derajat, tanda sama dengan, garis pecahan: pembilang akar kuadrat dari angka enam, tanda tambah, akar kuadrat dari angka dua; per, penyebut angka empat. Rumus kedua: fungsi kosinus tujuh puluh lima derajat, tanda sama dengan, fungsi sinus lima belas derajat, tanda sama dengan, garis pecahan: pembilang akar kuadrat dari angka enam, tanda kurang, akar kuadrat dari angka dua; per, penyebut angka empat. Rumus ketiga: fungsi tangen tujuh puluh lima derajat, tanda sama dengan, angka dua, tanda tambah, akar kuadrat dari angka tiga; koma, fungsi tangen lima belas derajat, tanda sama dengan, angka dua, tanda kurang, akar kuadrat dari angka tiga. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Tentukan nilai eksak dari $\\tan 75^\\circ$ dalam bentuk akar paling sederhana.',
          solutionNormal: 'Gunakan $\\tan(45^\\circ + 30^\\circ) = \\frac{\\tan 45^\\circ + \\tan 30^\\circ}{1 - \\tan 45^\\circ \\tan 30^\\circ} = \\frac{1 + \\frac{1}{\\sqrt{3}}}{1 - 1 \\cdot \\frac{1}{\\sqrt{3}}} = \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}$. Rasionalkan penyebut dengan mengalikan $\\frac{\\sqrt{3}+1}{\\sqrt{3}+1}$: $\\frac{(\\sqrt{3}+1)^2}{3 - 1} = \\frac{3 + 2\\sqrt{3} + 1}{2} = \\frac{4 + 2\\sqrt{3}}{2} = 2 + \\sqrt{3}$.',
          solutionFast: 'Gunakan rasio $\\frac{\\sin 75^\\circ}{\\cos 75^\\circ} = \\frac{\\sqrt{6} + \\sqrt{2}}{\\sqrt{6} - \\sqrt{2}}$. Bagi pembilang & penyebut dengan $\\sqrt{2} \\implies \\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1} = 2 + \\sqrt{3}$.',
          keyTakeaway: 'Nilai tan 75° adalah 2 + √3, dan tan 15° adalah 2 - √3. Angka ini sering menjadi kunci eliminasi di soal TKA.',
        },
        commonMistakes: [
          'Salah mengalikan penyebut rasional sehingga menghasilkan tanda akar terbalik.',
          'Mengira pembagi pada sin 75° adalah 2, padahal adalah 4 (karena 2 × 2 pada penyebut).',
        ],
        summary: [
          'sin 75° = cos 15° = (√6 + √2) / 4.',
          'cos 75° = sin 15° = (√6 - √2) / 4.',
          'tan 75° = 2 + √3 dan tan 15° = 2 - √3.',
        ],
      },
      {
        id: '3-2',
        title: '3.2 Nilai Eksak Sudut 105° dan 165° (Kuadran II)',
        narration:
          'Bagaimana dengan sudut 105 derajat dan 165 derajat? Kedua sudut ini berada di kuadran dua! Ingat, di kuadran dua, nilai kosinus harus bernilai negatif, sedangkan nilai sinus bernilai positif. Jangan sampai tanda negatif terlewatkan.',
        content: `
### Menghitung $\\sin 105^\\circ$ dan $\\cos 105^\\circ$
Pecah $105^\\circ = 60^\\circ + 45^\\circ$:
$$\\sin 105^\\circ = \\sin(60^\\circ + 45^\\circ) = \\sin 60^\\circ \\cos 45^\\circ + \\cos 60^\\circ \\sin 45^\\circ$$
$$= \\left(\\frac{1}{2}\\sqrt{3}\\right)\\left(\\frac{1}{2}\\sqrt{2}\\right) + \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\sqrt{2}\\right) = \\mathbf{\\frac{\\sqrt{6} + \\sqrt{2}}{4}}$$
*Perhatikan:* $\\sin 105^\\circ = \\sin(180^\\circ - 75^\\circ) = \\sin 75^\\circ$!

Sedangkan untuk kosinus:
$$\\cos 105^\\circ = \\cos(60^\\circ + 45^\\circ) = \\cos 60^\\circ \\cos 45^\\circ - \\sin 60^\\circ \\sin 45^\\circ$$
$$= \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\sqrt{2}\\right) - \\left(\\frac{1}{2}\\sqrt{3}\\right)\\left(\\frac{1}{2}\\sqrt{2}\\right) = \\mathbf{\\frac{\\sqrt{2} - \\sqrt{6}}{4}} = -\\left(\\frac{\\sqrt{6} - \\sqrt{2}}{4}\\right)$$
Hasilnya bernilai **negatif**, sesuai letak sudut $105^\\circ$ di Kuadran II.

### Menghitung $\\cos 165^\\circ$
Pecah $165^\\circ = 120^\\circ + 45^\\circ$ atau gunakan relasi kuadran:
$$\\cos 165^\\circ = \\cos(180^\\circ - 15^\\circ) = -\\cos 15^\\circ = -\\mathbf{\\left(\\frac{\\sqrt{6} + \\sqrt{2}}{4}\\right)}$$
        `,
        formulaBox: {
          title: 'Relasi Simetri Kuadran untuk Sudut Gabungan',
          formulas: [
            '\\sin(180^\\circ - \\theta) = \\sin \\theta',
            '\\cos(180^\\circ - \\theta) = -\\cos \\theta',
            '\\tan(180^\\circ - \\theta) = -\\tan \\theta',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter relasi simetri kuadran dua untuk sudut berpelurus. Rumus pertama: fungsi sinus, buka kurung, angka seratus delapan puluh derajat, tanda kurang, huruf Yunani teta, tutup kurung, tanda sama dengan, positif fungsi sinus huruf Yunani teta. Rumus kedua: fungsi kosinus, buka kurung, angka seratus delapan puluh derajat, tanda kurang, huruf Yunani teta, tutup kurung, tanda sama dengan, tanda minus di depan fungsi kosinus huruf Yunani teta. Rumus ketiga: fungsi tangen, buka kurung, angka seratus delapan puluh derajat, tanda kurang, huruf Yunani teta, tutup kurung, tanda sama dengan, tanda minus di depan fungsi tangen huruf Yunani teta. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Hitung nilai dari ekspresi $E = \\frac{\\sin 105^\\circ + \\sin 15^\\circ}{\\cos 105^\\circ + \\cos 15^\\circ}$.',
          solutionNormal: '1. Substitusi nilai eksak:\n$\\sin 105^\\circ + \\sin 15^\\circ = \\frac{\\sqrt{6}+\\sqrt{2}}{4} + \\frac{\\sqrt{6}-\\sqrt{2}}{4} = \\frac{2\\sqrt{6}}{4} = \\frac{\\sqrt{6}}{2}$.\n2. $\\cos 105^\\circ + \\cos 15^\\circ = \\frac{\\sqrt{2}-\\sqrt{6}}{4} + \\frac{\\sqrt{6}+\\sqrt{2}}{4} = \\frac{2\\sqrt{2}}{4} = \\frac{\\sqrt{2}}{2}$.\n3. Bagi keduanya: $E = \\frac{\\sqrt{6}/2}{\\sqrt{2}/2} = \\frac{\\sqrt{6}}{\\sqrt{2}} = \\sqrt{3}$.',
          solutionFast: 'Gunakan transformasi jumlah ke perkalian: $\\frac{\\sin A + \\sin B}{\\cos A + \\cos B} = \\tan\\left(\\frac{A + B}{2}\\right) = \\tan\\left(\\frac{105^\\circ + 15^\\circ}{2}\\right) = \\tan(60^\\circ) = \\sqrt{3}$. Selesai dalam 5 detik!',
          keyTakeaway: 'Soal TKA sering menguji apakah siswa melihat pola rumus transformasi atau terjebak menghitung akar panjang.',
        },
        commonMistakes: [
          'Lupa memberi tanda negatif pada nilai cos 105°.',
          'Terjebak menghitung pecahan akar yang rumit padahal ada rumus transformasi cepat.',
        ],
        summary: [
          'sin 105° = sin 75° (simetri Kuadran II).',
          'cos 105° = -cos 75° bernilai negatif.',
          'Gunakan rumus transformasi jumlah ke hasil kali untuk menyederhanakan pecahan trigonometri secara kilat.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Bagian 4: Penerapan, Penalaran, & Pembuktian',
    subtitle: 'Menentukan nilai tanpa sudut langsung, manipulasi aljabar, dan pemodelan kontekstual',
    iconName: 'Brain',
    subsections: [
      {
        id: '4-1',
        title: '4.1 Menentukan Nilai dari Informasi Perbandingan Lain',
        narration:
          'Di soal TKA, kamu hampir tidak pernah diberi tahu besar sudutnya secara langsung! Yang diberikan biasanya nilai perbandingan seperti sinus alfa sama dengan tiga per lima dan informasi kuadran. Kuncinya: buat sketsa segitiga siku-siku bantuan dan tentukan tanda sesuai kuadran.',
        content: `
Karakteristik utama soal TKA adalah menyembunyikan sudut eksak dan hanya memberikan relasi perbandingan.

### Langkah Strategis Standar (3 Langkah Pasti)
1. **Langkah 1: Tentukan Sisi Segitiga Siku-siku**
   Jika $\\sin \\alpha = \\frac{a}{c}$, maka sisi depan $= a$, sisi miring $= c$.
   Sisi samping diperoleh via Pythagoras: $b = \\sqrt{c^2 - a^2}$.
2. **Langkah 2: Terapkan Aturan Tanda Kuadran**
   Periksa kuadran sudut:
   - Kuadran I: semua $(+)$.
   - Kuadran II: $\\sin (+)$, $\\cos (-)$, $\\tan (-)$.
   - Kuadran III: $\\sin (-)$, $\\cos (-)$, $\\tan (+)$.
   - Kuadran IV: $\\sin (-)$, $\\cos (+)$, $\\tan (-)$.
3. **Langkah 3: Substitusikan ke Rumus Jumlah / Selisih**
   Masukkan ke $\\sin(\\alpha \\pm \\beta)$, $\\cos(\\alpha \\pm \\beta)$, atau $\\tan(\\alpha \\pm \\beta)$.
        `,
        formulaBox: {
          title: 'Tripel Pythagoras yang Sering Muncul di TKA',
          formulas: [
            '(3, 4, 5) \\implies \\text{kelipatan: } (6, 8, 10), (9, 12, 15)',
            '(5, 12, 13) \\implies \\text{kelipatan: } (10, 24, 26)',
            '(7, 24, 25), \\quad (8, 15, 17), \\quad (9, 40, 41)',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter tripel Pythagoras andalan TKA. Kelompok pertama: buka kurung, angka tiga, koma, angka empat, koma, angka lima, tutup kurung; menghasilkan kelipatan: buka kurung, angka enam, koma, angka delapan, koma, angka sepuluh, tutup kurung; dan buka kurung, angka sembilan, koma, angka dua belas, koma, angka lima belas, tutup kurung. Kelompok kedua: buka kurung, angka lima, koma, angka dua belas, koma, angka tiga belas, tutup kurung; menghasilkan kelipatan: buka kurung, angka sepuluh, koma, angka dua puluh empat, koma, angka dua puluh enam, tutup kurung. Kelompok ketiga: buka kurung, angka tujuh, koma, angka dua puluh empat, koma, angka dua puluh lima, tutup kurung; buka kurung, angka delapan, koma, angka lima belas, koma, angka tujuh belas, tutup kurung; dan buka kurung, angka sembilan, koma, angka empat puluh, koma, angka empat puluh satu, tutup kurung. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Diketahui $\\cos A = -\\frac{5}{13}$ dengan $A$ tumpul (Kuadran II), dan $\\sin B = -\\frac{3}{5}$ dengan $B$ di Kuadran IV. Tentukan nilai $\\cos(A - B)$.',
          solutionNormal: '1. Sudut $A$ (Kuadran II): $\\cos A = -\\frac{5}{13}$. Sisi depan $= \\sqrt{13^2 - 5^2} = 12$. Karena kuadran II, $\\sin A = +\\frac{12}{13}$.\n2. Sudut $B$ (Kuadran IV): $\\sin B = -\\frac{3}{5}$. Sisi samping $= \\sqrt{5^2 - 3^2} = 4$. Karena kuadran IV, $\\cos B = +\\frac{4}{5}$.\n3. Masukkan ke rumus: $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$\n$= \\left(-\\frac{5}{13}\\right)\\left(\\frac{4}{5}\\right) + \\left(\\frac{12}{13}\\right)\\left(-\\frac{3}{5}\\right) = \\frac{-20 - 36}{65} = -\\frac{56}{65}$.',
          solutionFast: 'Penyebut $= 13 \\times 5 = 65$. Pembilang: $(-5)(4) + (12)(-3) = -20 - 36 = -56$. Hasil $= -\\frac{56}{65}$.',
          keyTakeaway: 'Hati-hati dengan perkalian dua bilangan bertanda negatif atau positif; tulis tanda dalam kurung agar tidak terselip.',
        },
        commonMistakes: [
          'Menganggap sin A bertanda negatif padahal sudut A berada di kuadran II.',
          'Mengira cos B bertanda negatif di kuadran IV.',
        ],
        summary: [
          'Sketsa segitiga siku-siku bantuan untuk mencari sisi yang belum diketahui.',
          'Tetapkan tanda positif/negatif sebelum mensubstitusi ke rumus jumlah/selisih.',
        ],
      },
      {
        id: '4-2',
        title: '4.2 Membuktikan Identitas dan Menyederhanakan Ekspresi',
        narration:
          'Membuktikan identitas adalah puncak penalaran matematika. Jangan pernah mengutak-atik kedua ruas sekaligus seperti persamaan aljabar biasa. Mulailah dari ruas yang lebih rumit, terapkan identitas jumlah dan selisih, lalu sederhanakan hingga menjadi bentuk ruas lainnya.',
        content: `
### Prinsip Pembuktian Identitas Matematis
1. **Pilih Ruas yang Lebih Kompleks:**
   Lebih mudah menguraikan bentuk penjumlahan/perkalian majemuk menjadi bentuk sederhana daripada sebaliknya.
2. **Kembangkan dengan Identitas:**
   Uraikan $\\sin(A \\pm B)$ atau $\\cos(A \\pm B)$.
3. **Faktorisasi dan Eliminasi Suku Sejenis:**
   Kumpulkan suku-suku berfaktor sama atau manfaatkan identitas Pythagoras $\\sin^2 \\theta + \\cos^2 \\theta = 1$.
4. **Bentuk Hasil Akhir:**
   Pastikan tepat sesuai dengan ruas lawan.

### Contoh Identitas Penting Hasil Kali:
$$\\sin(A + B) \\sin(A - B) = \\sin^2 A - \\sin^2 B$$
$$\\cos(A + B) \\cos(A - B) = \\cos^2 A - \\sin^2 B$$
Dua identitas ini sangat sering keluar sebagai soal HOTS karena menyederhanakan perhitungan kuadrat.
        `,
        formulaBox: {
          title: 'Identitas Selisih Kuadrat Trigonometri',
          formulas: [
            '\\sin(A + B)\\sin(A - B) = \\sin^2 A - \\sin^2 B = \\cos^2 B - \\cos^2 A',
            '\\cos(A + B)\\cos(A - B) = \\cos^2 A - \\sin^2 B = \\cos^2 B - \\sin^2 A',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter identitas selisih kuadrat trigonometri. Rumus pertama: fungsi sinus, buka kurung, huruf kapital A, tanda tambah, huruf kapital B, tutup kurung; dikali, fungsi sinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung; tanda sama dengan, fungsi sinus kuadrat huruf kapital A, tanda kurang, fungsi sinus kuadrat huruf kapital B; sama dengan, fungsi kosinus kuadrat huruf kapital B, tanda kurang, fungsi kosinus kuadrat huruf kapital A. Rumus kedua: fungsi kosinus, buka kurung, huruf kapital A, tanda tambah, huruf kapital B, tutup kurung; dikali, fungsi kosinus, buka kurung, huruf kapital A, tanda kurang, huruf kapital B, tutup kurung; tanda sama dengan, fungsi kosinus kuadrat huruf kapital A, tanda kurang, fungsi sinus kuadrat huruf kapital B; sama dengan, fungsi kosinus kuadrat huruf kapital B, tanda kurang, fungsi sinus kuadrat huruf kapital A. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Buktikan bahwa $\\frac{\\sin(A + B) - \\sin(A - B)}{\\cos(A + B) + \\cos(A - B)} = \\tan B$.',
          solutionNormal: 'Ruas Kiri:\nPembilang: $(\\sin A \\cos B + \\cos A \\sin B) - (\\sin A \\cos B - \\cos A \\sin B) = 2\\cos A \\sin B$.\nPenyebut: $(\\cos A \\cos B - \\sin A \\sin B) + (\\cos A \\cos B + \\sin A \\sin B) = 2\\cos A \\cos B$.\nBagi pembilang dengan penyebut: $\\frac{2\\cos A \\sin B}{2\\cos A \\cos B} = \\frac{\\sin B}{\\cos B} = \\tan B$.\nRuas Kiri = Ruas Kanan. Terbukti!',
          solutionFast: 'Gunakan transformasi langsung: selisih sinus $= 2\\cos\\left(\\frac{2A}{2}\\right)\\sin\\left(\\frac{2B}{2}\\right) = 2\\cos A \\sin B$. Jumlah kosinus $= 2\\cos A \\cos B$. Coret $2\\cos A$, tersisa $\\tan B$.',
          keyTakeaway: 'Pembuktian identitas melatih daya manipulasi simbolik dan efisiensi penalaran matematis.',
        },
        commonMistakes: [
          'Mencoret variabel di dalam argumen sinus (misal mencoret A dari sin A).',
          'Mengoperasikan kedua ruas persamaan secara bersamaan.',
        ],
        summary: [
          'Uraikan dari ruas yang lebih rumit.',
          'Gunakan identitas selisih kuadrat sin(A+B)sin(A-B) = sin²A - sin²B untuk mempercepat eliminasi.',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Bagian 5: Strategi Menghadapi Soal TKA',
    subtitle: 'Analisis stimulus kritis, pemodelan kontekstual, eliminasi opsi, dan manajemen waktu',
    iconName: 'Trophy',
    subsections: [
      {
        id: '5-1',
        title: '5.1 Karakteristik TKA Matematika Tingkat Lanjut',
        narration:
          'Berdasarkan kerangka asesmen BSKAP Nomor 045 tahun 2025, TKA Matematika Tingkat Lanjut menuntut penalaran HOTS dan pemecahan masalah non-rutin. Soal tidak lagi sekadar menanyakan hitungan rumus, tetapi disajikan dalam bentuk stimulus kontekstual, tabel, grafik, atau evaluasi argumentasi.',
        content: `
### Kerangka Asesmen TKA BSKAP No. 045/H/AN/2025
TKA Matematika Tingkat Lanjut mengukur 5 domain kompetensi:
1. **Pengetahuan Matematika (Knowing):** Mengingat definisi, sifat lingkaran satuan, kuadran, dan identitas dasar.
2. **Representasi Matematis:** Menerjemahkan visual geometri/grafik fungsi ke persamaan aljabar dan sebaliknya.
3. **Penalaran & Pembuktian:** Membuktikan keabsahan pernyataan matematis, mengevaluasi argumen, dan menyusun deduksi logis.
4. **Pemecahan Masalah:** Merumuskan model matematika dari situasi kontekstual (navigasi, gelombang, teknik sipil).
5. **Koneksi Matematis:** Menghubungkan trigonometri dengan aljabar kuadrat, geometri analitik, dan kalkulus.

### Tiga Bentuk Soal dalam Aplikasi Ini:
- **Pilihan Ganda Biasa (15 Soal):** Termasuk 6 soal model **Kecukupan Data (Data Sufficiency)** dengan evaluasi Pernyataan (1) dan (2).
- **Pilihan Ganda Kompleks (10 Soal):** Memilih semua opsi yang bernilai benar (bisa lebih dari satu jawaban benar).
- **Benar atau Salah (5 Soal):** Mengevaluasi kebenaran 3 butir pernyataan berdasarkan stimulus matematis yang disajikan.
        `,
        formulaBox: {
          title: 'Logika Model Kecukupan Data (Data Sufficiency)',
          formulas: [
            'Opsi A: Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup.',
            'Opsi B: Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup.',
            'Opsi C: KEDUA pernyataan BERSAMA-SAMA cukup, tetapi masing-masing sendiri tidak cukup.',
            'Opsi D: Masing-masing pernyataan SECARA TERPISAH sudah cukup.',
            'Opsi E: Kedua pernyataan bersama-sama TIDAK CUKUP.',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter logika lima opsi kecukupan data TKA. Opsi huruf kapital A: pernyataan nomor satu saja cukup, tetapi pernyataan nomor dua saja tidak cukup. Opsi huruf kapital B: pernyataan nomor dua saja cukup, tetapi pernyataan nomor satu saja tidak cukup. Opsi huruf kapital C: kedua pernyataan bersama-sama cukup, tetapi masing-masing pernyataan tidak cukup. Opsi huruf kapital D: masing-masing pernyataan secara terpisah sudah cukup. Opsi huruf kapital E: kedua pernyataan bersama-sama tidak cukup. Selesai dikte karakter.',
          notes: 'Pada soal kecukupan data, tugasmu BUKAN mencari angka akhir, melainkan MEMASTIKAN apakah informasi yang ada menghasilkan jawaban yang UNIK dan TUNGGAL!',
        },
        workedExample: {
          problem: 'Berapakah nilai dari $\\cos(A - B)$?\nPernyataan (1): $\\cos(A + B) = \\frac{1}{3}$.\nPernyataan (2): $\\cos A \\cos B = \\frac{1}{2}$.',
          solutionNormal: 'Kita tahu $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$ dan $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$.\nJumlahkan kedua rumus: $\\cos(A - B) + \\cos(A + B) = 2\\cos A \\cos B$.\nSehingga: $\\cos(A - B) = 2\\cos A \\cos B - \\cos(A + B)$.\n- Pernyataan (1) saja: hanya memberikan $\\cos(A + B) = 1/3$, nilai $\\cos A \\cos B$ belum diketahui $\\to$ TIDAK CUKUP.\n- Pernyataan (2) saja: hanya memberikan $\\cos A \\cos B = 1/2$, nilai $\\cos(A+B)$ belum diketahui $\\to$ TIDAK CUKUP.\n- Bersama-sama: $\\cos(A - B) = 2(1/2) - 1/3 = 1 - 1/3 = 2/3$ (nilai unik ditemukan!).\nMaka kedua pernyataan bersama-sama CUKUP (Opsi C).',
          solutionFast: 'Ada 2 variabel tak tentu: $\\cos A \\cos B$ dan $\\sin A \\sin B$. Butuh 2 persamaan independen untuk menemukan nilai unik. Karena (1) dan (2) memberikan kedua informasi tersebut secara terpisah, maka keduanya bersama-sama cukup (C).',
          keyTakeaway: 'Analisis derajat kebebasan: hitung jumlah variabel bebas dan jumlah persamaan independen.',
        },
        commonMistakes: [
          'Menghitung sampai selesai padahal cukup memeriksa apakah informasinya konsisten dan unik.',
          'Menggabungkan pernyataan (1) dan (2) sebelum menguji masing-masing pernyataan secara terpisah.',
        ],
        summary: [
          'Uji Pernyataan (1) sendirian, lalu uji Pernyataan (2) sendirian.',
          'Jika keduanya gagal mandiri, baru uji kombinasi keduanya.',
          'Fokus pada: Apakah jawabannya bernilai TUNGGAL?',
        ],
      },
      {
        id: '5-2',
        title: '5.2 Taktik Eliminasi, Verifikasi Batas Nilai, dan Cara Cepat',
        narration:
          'Dalam ujian TKA yang berpacu dengan waktu, kamu harus cerdas memilih kapan menggunakan Cara Normal dan kapan menggunakan Cara Cepat. Manfaatkan batas nilai sinus dan kosinus antara minus satu dan satu, serta uji nilai sudut khusus untuk mengeliminasi opsi yang salah.',
        content: `
### Taktik Emas Menghemat Waktu di TKA
1. **Verifikasi Batas Nilai (Bounding Check):**
   Nilai fungsi sinus dan kosinus untuk sudut riil **selalu berada pada rentang**:
   $$-1 \\le \\sin \\theta \\le 1 \\quad \\text{dan} \\quad -1 \\le \\cos \\theta \\le 1$$
   Jika ada opsi bernilai $\\frac{7}{5}$ atau $-\\sqrt{2} \\approx -1.414$, langsung eliminasi opsi tersebut tanpa ragu!

2. **Uji Kasus Khusus (Testing Special Cases / Degenerate Values):**
   Jika soal menanyakan identitas yang berlaku untuk semua sudut $A$ dan $B$, substitusikan sudut sederhana yang tidak membuat penyebut nol, misalnya:
   - $A = 45^\\circ, B = 45^\\circ$
   - $A = 60^\\circ, B = 30^\\circ$
   - $A = 0^\\circ, B = 30^\\circ$
   Hitung nilai numerik ruas kiri, lalu cocokkan dengan opsi jawaban!

3. **Analisis Paritas dan Tanda Kuadran:**
   Periksa tanda hasil perkalian sebelum menghitung pembilang secara detail. Jika dua sudut berada di kuadran di mana hasilnya pasti positif, buang semua opsi bertanda negatif.
        `,
        formulaBox: {
          title: 'Aturan Verifikasi Batas Nilai',
          formulas: [
            '|\\sin(A \\pm B)| \\le 1, \\quad |\\cos(A \\pm B)| \\le 1',
            '\\tan(A + B) \\in (-\\infty, +\\infty)',
          ],
          dictationScript: 'Perhatian, sistem dikte karakter aturan verifikasi batas nilai fungsi. Rumus pertama: garis nilai mutlak, fungsi sinus, buka kurung, huruf kapital A, tanda plus minus, huruf kapital B, tutup kurung, garis nilai mutlak, tanda kurang dari atau sama dengan, angka satu. Selanjutnya, garis nilai mutlak, fungsi kosinus, buka kurung, huruf kapital A, tanda plus minus, huruf kapital B, tutup kurung, garis nilai mutlak, tanda kurang dari atau sama dengan, angka satu. Rumus kedua: fungsi tangen, buka kurung, huruf kapital A, tanda tambah, huruf kapital B, tutup kurung, elemen himpunan interval terbuka minus tak hingga sampai positif tak hingga. Selesai dikte karakter.',
        },
        workedExample: {
          problem: 'Manakah bentuk sederhana dari $\\frac{\\sin(A + B) + \\sin(A - B)}{\\cos(A + B) + \\cos(A - B)}$?\nA. $\\tan A$\nB. $\\tan B$\nC. $\\cot A$\nD. $\\sin A$\nE. $1$',
          solutionNormal: 'Gunakan uraian rumus:\nPembilang $= 2\\sin A \\cos B$.\nPenyebut $= 2\\cos A \\cos B$.\nBagi keduanya: $\\frac{2\\sin A \\cos B}{2\\cos A \\cos B} = \\frac{\\sin A}{\\cos A} = \\tan A$. Jawaban: A.',
          solutionFast: 'Trik substitusi khusus: Ambil $B = 0^\\circ$.\nPembilang $= \\sin A + \\sin A = 2\\sin A$.\nPenyebut $= \\cos A + \\cos A = 2\\cos A$.\nNilai $= \\frac{2\\sin A}{2\\cos A} = \\tan A$. Cocokkan dengan opsi $\\implies$ langsung pilih A!',
          keyTakeaway: 'Substitusi sudut B = 0° mereduksi soal rumit menjadi bentuk sekejap mata.',
        },
        commonMistakes: [
          'Memilih nilai uji yang membuat penyebut bernilai nol (misal memilih A = 90° pada fungsi tangen).',
          'Lupa memeriksa batas nilai sinus dan kosinus pada hasil perhitungan.',
        ],
        summary: [
          'Gunakan eliminasi batas nilai [-1, 1] untuk sinus dan kosinus.',
          'Substitusi nilai khusus (misal B = 0°) untuk menyederhanakan identitas majemuk secara instan.',
          'Kombinasikan Cara Normal untuk ketelitian dan Cara Cepat untuk efisiensi waktu.',
        ],
      },
    ],
  },
];
