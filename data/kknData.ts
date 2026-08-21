export interface TeamMember {
  id: string;
  name: string;
  nim: string;
  major: string;
  faculty?: string;
  role: string;
  divisi: string;
  avatar: string;
  instagram?: string;
}

export interface DocumentationPhoto {
  url: string;
  caption: string;
}

export interface ProkerItem {
  id: string;
  slug: string;
  title: string;
  category: 'Utama Kelompok' | 'Utama Individu' | 'Pendukung';
  shortDesc: string;
  background: string | string[];
  implementation: string | string[];
  fullDesc?: string;
  pj: string;
  pjNIM?: string;
  pjRole?: string;
  image: string;
  gallery: DocumentationPhoto[];
  date: string;
  time?: string;
  location: string;
  objectives: string[];
  output: string;
  targetBeneficiaries: string;
  driveLink?: string;
  videoUrl?: string;
  youtubeEmbedUrl?: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  day: string;
  title: string;
  desc: string;
  category: 'Penerjunan' | 'Proker Utama' | 'Penarikan';
  location?: string;
  status: 'Selesai';
}

export interface KKNStats {
  prokerUtamaCount: number;
  prokerIndividuCount: number;
  prokerPendukungCount: number;
  totalMahasiswa: number;
  totalHariPengabdian: number;
  totalWargaTerdampak: string;
}

export const KKN_INFO = {
  name: "KKN Kelompok 229 UPN 'Veteran' Yogyakarta",
  unitCode: "AD.84.229",
  tagline: "Mengabdi dengan Hati, Membangun Kendalsari",
  subheading: "Dokumentasi resmi laporan & pengabdian KKN Kelompok 229 UPN 'Veteran' Yogyakarta di Padukuhan Kendalsari III, Desa Kendalsari, Kec. Kemalang, Kab. Klaten.",
  period: "1 Juli – 30 Juli 2026",
  dpl: {
    name: "Ir. Aditya Pandu Wicaksono, S.Si., M.Sc.",
    nip: "19850412 201903 1 009",
    role: "Dosen Pembimbing Lapangan"
  },
  dukuh: {
    name: "Wahyudi Nugroho, S.Th.I",
    role: "Dukuh Kendalsari III"
  },
  kapusKKN: {
    name: "Dr. Ir. Eni Muryani, S.Si, M.Sc.",
    nip: "198207222021212005",
    role: "Kapus KKN dan TTG"
  },
  location: {
    padukuhan: "Padukuhan Kendalsari III (Kadus 3)",
    desa: "Desa Kendalsari",
    kecamatan: "Kecamatan Kemalang",
    kabupaten: "Kabupaten Klaten",
    provinsi: "Jawa Tengah",
    geographicDesc: "Kawasan perbukitan dataran tinggi lereng tenggara Gunung Merapi yang berhawa sejuk, subur, serta kaya potensi pertanian, peternakan, dan kegotongroyongan warga.",
    gmapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.353381665476!2d110.478952!3d-7.619894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a60d6919db45b%3A0x6e0e0921477aa2bd!2sKendalsari%2C%20Kemalang%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    gmapsUrl: "https://maps.google.com/?q=Kendalsari+Kemalang+Klaten"
  },
  socials: {
    instagram: "https://www.instagram.com/kelanadikendalsari?igsh=YXVrZzQzcTNyOHd0",
    instagramHandle: "@kelanadikendalsari",
    tiktok: "https://www.tiktok.com/@kelanadikendalsari?_r=1&_t=ZS-98PC5rKSbhI",
    tiktokHandle: "@kelanadikendalsari",
    email: "kkn229.kendalsari@upnyk.ac.id"
  }
};

export const KKN_STATS: KKNStats = {
  prokerUtamaCount: 3,
  prokerIndividuCount: 10,
  prokerPendukungCount: 5,
  totalMahasiswa: 10,
  totalHariPengabdian: 30,
  totalWargaTerdampak: "4.000+ Jiwa"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "m1",
    name: "Sebastian George De Caesar",
    nim: "112230067",
    major: "Teknik Pertambangan",
    faculty: "Fakultas Teknologi Mineral",
    role: "Ketua",
    divisi: "Ketua",
    avatar: "/profil/sebastian.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m2",
    name: "Zhafira Anggun Nurraiza",
    nim: "111230028",
    major: "Teknik Geologi",
    faculty: "Fakultas Teknologi Mineral",
    role: "Sekretaris",
    divisi: "Sekretaris",
    avatar: "/profil/vivi.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m3",
    name: "Julius",
    nim: "113230042",
    major: "Teknik Perminyakan",
    faculty: "Fakultas Teknologi Mineral",
    role: "Perkap",
    divisi: "Perkap",
    avatar: "/profil/julius.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m4",
    name: "Restu Raidatul Hilal",
    nim: "114230134",
    major: "Teknik Lingkungan",
    faculty: "Fakultas Teknologi Mineral",
    role: "Perkap",
    divisi: "Perkap",
    avatar: "/profil/restu.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m5",
    name: "Frista Asmara Senja",
    nim: "121220130",
    major: "Teknik Kimia",
    faculty: "Fakultas Teknik Industri",
    role: "Bendahara",
    divisi: "Bendahara",
    avatar: "/profil/senja.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m6",
    name: "Mohammad Atilla Danadyaksa",
    nim: "123230134",
    major: "Informatika",
    faculty: "Fakultas Teknik Industri",
    role: "PDD",
    divisi: "PDD",
    avatar: "/profil/aksa.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m7",
    name: "Dyan Agustina",
    nim: "134230123",
    major: "Agroteknologi",
    faculty: "Fakultas Pertanian",
    role: "Humas",
    divisi: "Humas",
    avatar: "/profil/dyan.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m8",
    name: "Wahdatul Fuadiyah Yatalaththof",
    nim: "141230477",
    major: "Manajemen",
    faculty: "Fakultas Ekonomi dan Bisnis",
    role: "PDD",
    divisi: "PDD",
    avatar: "/profil/wahda.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m9",
    name: "Cherina Ravalona Rahman",
    nim: "142230467",
    major: "Akuntansi",
    faculty: "Fakultas Ekonomi dan Bisnis",
    role: "Bendahara",
    divisi: "Bendahara",
    avatar: "/profil/erin.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  },
  {
    id: "m10",
    name: "Salsabila Rahma",
    nim: "153230068",
    major: "Ilmu Komunikasi",
    faculty: "Fakultas Ilmu Sosial dan Ilmu Politik",
    role: "Humas",
    divisi: "Humas",
    avatar: "/profil/caca.jpg",
    instagram: "https://www.instagram.com/kelanadikendalsari"
  }
];

export const PROKER_LIST: ProkerItem[] = [
  // ==========================================
  // PROGRAM KERJA UTAMA KELOMPOK (3 ITEMS)
  // ==========================================
  {
    id: "p-utama-1",
    slug: "kesehatan-masyarakat",
    title: "Kesehatan Masyarakat",
    category: "Utama Kelompok",
    shortDesc: "Pemeriksaan kesehatan dasar (tensi, gula darah) serta konsultasi dan edukasi pola hidup sehat kolaborasi bersama Posyandu & nakes.",
    background: [
      "Menjaga kesehatan tidak selalu harus dimulai dari hal yang besar. Salah satunya bisa dengan rutin melakukan pemeriksaan kesehatan dan mulai lebih peduli dengan kondisi tubuh sendiri. Hal inilah yang menjadi salah satu tujuan mahasiswa KKN AD.84.229 UPN “Veteran” Yogyakarta melalui program kerja Kesehatan Masyarakat di Padukuhan Kendalsari III, Kecamatan Kemalang, Kabupaten Klaten.",
      "Melalui pemeriksaan sederhana seperti tekanan darah dan kadar gula darah, warga diharapkan bisa lebih mengetahui kondisi kesehatan mereka. Pemeriksaan ini juga menjadi salah satu langkah awal untuk mengenali faktor risiko penyakit seperti hipertensi dan diabetes.",
      "Selain pemeriksaan kesehatan, mahasiswa juga memberikan edukasi mengenai pentingnya menjaga pola hidup sehat dan melakukan pemeriksaan secara rutin. Edukasi ini diharapkan dapat membuat masyarakat semakin sadar bahwa menjaga kesehatan bukan hanya dilakukan ketika sedang sakit, tetapi juga perlu dilakukan sebagai kebiasaan sehari-hari."
    ],
    implementation: [
      "Kegiatan ini dilaksanakan di Posyandu RT 14 dan RT 20 pada 6 dan 10 Juli 2026. Dalam kegiatan tersebut, warga mendapatkan pemeriksaan kesehatan dasar berupa pengukuran tekanan darah dan pengecekan kadar gula darah. Setelah pemeriksaan, warga juga dapat berkonsultasi secara sederhana mengenai hasil yang diperoleh dan mendapatkan informasi tentang pentingnya menjaga pola hidup sehat.",
      "Kegiatan ini diikuti oleh masyarakat dengan berbagai kelompok usia, mulai dari anak-anak hingga lansia. Karena itu, mahasiswa tidak hanya membantu proses pemeriksaan, tetapi juga berusaha membangun suasana yang nyaman agar warga dapat mengikuti kegiatan dengan baik.",
      "Pelaksanaan kegiatan ini tentunya tidak dilakukan oleh mahasiswa sendiri. Mahasiswa KKN bekerja sama dengan Bidan Desa dan Kader Posyandu dalam proses pelaksanaan kegiatan. Dukungan dari masyarakat juga menjadi bagian penting sehingga kegiatan dapat berjalan dengan lancar.",
      "Bagi mahasiswa, kegiatan ini tidak hanya menjadi salah satu program kerja selama KKN, tetapi juga menjadi kesempatan untuk berinteraksi langsung dengan masyarakat. Dari kegiatan tersebut, mahasiswa dapat melihat secara langsung bagaimana pentingnya peran masyarakat dalam menjaga kesehatan bersama."
    ],
    pj: "Zhafira Anggun Nurraiza & Salsabila Rahma",
    pjNIM: "111230028 & 153230068",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Utama/Kesmas/cover.JPG",
    gallery: [
      { url: "/Utama/Kesmas/cover.JPG", caption: "Pemeriksaan kesehatan rutin bersama Posyandu Kadus 3" },
      { url: "/Utama/Kesmas/DSC_0127.JPG", caption: "Pemeriksaan kesehatan dan tensi darah warga oleh mahasiswa KKN" },
      { url: "/Utama/Kesmas/DSC_0831.JPG", caption: "Poster Edukatif yang dibuat oleh Mahasiswa KKN" },
      { url: "/Utama/Kesmas/DSC_0845.JPG", caption: "Pengecekan kadar gula darah oleh Bidan Desa" }
    ],
    date: "Senin, 6 Juli 2026 & Jumat, 10 Juli 2026",
    time: "09.00 – 12.00 WIB",
    location: "Posyandu RT 14 dan Posyandu RT 20",
    objectives: [
      "Meningkatkan kesadaran masyarakat Dusun Kendalsari III mengenai pentingnya menjaga kesehatan melalui pemeriksaan kesehatan secara berkala.",
      "Membantu masyarakat mengetahui kondisi kesehatan dasar, seperti tekanan darah dan kadar gula darah, serta memberikan edukasi mengenai bahaya debu.",
      "Mendeteksi secara dini faktor risiko penyakit tidak menular, seperti hipertensi dan diabetes melitus."
    ],
    output: "Melalui program Kesehatan Masyarakat ini, mahasiswa KKN AD.84.229 berharap kegiatan sederhana yang dilakukan dapat memberikan manfaat bagi warga Kendalsari III. Lebih dari sekadar pemeriksaan, kegiatan ini diharapkan dapat mendorong masyarakat untuk semakin peduli terhadap kesehatan dan membiasakan diri melakukan pemeriksaan secara berkala.",
    targetBeneficiaries: "Masyarakat Padukuhan Kendalsari 3",
    driveLink: "https://drive.google.com/drive/folders/16sxEmXqmf42WxCkYmn_AE4rfVEWDtzD6?usp=sharing"
  },
  {
    id: "p-utama-2",
    slug: "festival-hari-anak",
    title: "Festival Hari Anak",
    category: "Utama Kelompok",
    shortDesc: "Peringatan Hari Anak Nasional dengan jalan santai sehat, senam bersama, aneka games interaktif, serta pembagian doorprize ceria.",
    background: [
      "Anak merupakan generasi penerus yang memiliki peran penting dalam pembangunan masyarakat di masa mendatang. Masa kanak-kanak merupakan periode penting dalam perkembangan kemampuan kognitif, sosial, emosional, serta kreativitas. Oleh karena itu, diperlukan ruang yang dapat mendukung anak untuk belajar, berekspresi, bermain, dan berinteraksi secara positif.",
      "Dalam rangka memperingati Hari Anak, mahasiswa KKN menginisiasi Festival Hari Anak sebagai wadah bagi anak-anak di Kadus III untuk menikmati kegiatan yang edukatif, kreatif, dan menyenangkan. Kegiatan ini dirancang tidak hanya sebagai bentuk perayaan, tetapi juga sebagai sarana untuk mengembangkan keberanian, kreativitas, kerja sama, dan rasa percaya diri anak."
    ],
    implementation: [
      "Festival dikemas dengan pendekatan edutainment, yaitu menggabungkan unsur edukasi dan hiburan melalui permainan, perlombaan, aktivitas seni, serta kegiatan kelompok. Dengan konsep tersebut, anak-anak tidak hanya menjadi peserta, tetapi juga diberikan ruang untuk berpartisipasi aktif, bekerja sama, dan menunjukkan kreativitas mereka.",
      "Rangkaian kegiatan berupa sambutan dari ketua KKN dan tokoh desa seperti Kepala Kadus III, berbarengan dengan kegiatan tersebut dilaksanakan registrasi peserta dan pemberian snack. Setelah registrasi peserta selesai dilanjutkan pembagian kelompok, lalu perlombaan dimulai sesuai dengan pembagian kelompok, pendataan juara, pembagian doorprize, pembagian hadiah untuk juara-juara perlombaan, serta diakhiri dengan foto bersama.",
      "Konsep kegiatan dapat diadaptasi dan dilaksanakan kembali oleh masyarakat atau organisasi kepemudaan setempat pada kegiatan anak di masa mendatang. Permainan dan aktivitas edukatif yang digunakan juga dapat diterapkan dalam kegiatan belajar maupun kegiatan masyarakat lainnya."
    ],
    pj: "Frista Asmara Senja, Dyan Agustina, Cherina Ravalona Rahman",
    pjNIM: "121220130, 134230123, 142230467",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Utama/Harianak/cover.JPG",
    gallery: [
      { url: "/Utama/Harianak/cover.JPG", caption: "Kemeriahan Festival Hari Anak di Desa Kendalsari" },
      { url: "/Utama/Harianak/DSC_1952.JPG", caption: "Antusiasme anak-anak saat registrasi dan pembagian snack" },
      { url: "/Utama/Harianak/DSC_1964.JPG", caption: "Senam ceria bersama mahasiswa KKN di lapangan samping SDN 1 Kendalsari" },
      { url: "/Utama/Harianak/DSC_2077(1).JPG", caption: "Keseruan perlombaan games interaktif dan ketangkasan kelompok" },
      { url: "/Utama/Harianak/DSC_2195.JPG", caption: "Penyerahan hadiah pemenang lomba dan pembagian doorprize" },
      { url: "/Utama/Harianak/DSC_2274.JPG", caption: "Foto bersama seluruh peserta anak-anak Kadus 3 Kendalsari" }
    ],
    date: "Minggu, 26 Juli 2026",
    time: "09.00 – 13.00 WIB",
    location: "Lapangan samping SDN 1 Kendalsari",
    objectives: [
      "Menciptakan ruang bermain dan belajar yang aman, positif, serta menyenangkan bagi anak.",
      "Mendorong perkembangan kreativitas dan keberanian anak dalam mengekspresikan diri.",
      "Meningkatkan kemampuan kerja sama dan interaksi sosial antaranak melalui kegiatan yang bersifat partisipatif.",
      "Memberikan pengalaman edukatif melalui permainan dan kegiatan kreatif yang melatih disiplin, sportivitas, dan tanggung jawab.",
      "Mempererat hubungan antara mahasiswa KKN, anak-anak, orang tua, dan masyarakat sekitar."
    ],
    output: "Pelaksanaan Festival Hari Anak memberikan pengalaman positif bagi anak-anak melalui kegiatan yang menyenangkan sekaligus edukatif, meningkatkan keberanian anak tampil di depan umum, menumbuhkan kreativitas berekspresi, serta mempererat tali keakraban antarwarga.",
    targetBeneficiaries: "Semua anak-anak di Kadus 3 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1YNKNFWdx1_vtOkyfmtkjTXtOU_UkO9vR"
  },
  {
    id: "p-utama-3",
    slug: "renovasi-pos-kamling",
    title: "Renovasi Pos Kamling",
    category: "Utama Kelompok",
    shortDesc: "Pengecatan, pembersihan, perbaikan fasilitas siskamling, serta pemasangan hiasan dan foto kenang-kenangan bersama warga.",
    background: [
      "Poskamling merupakan salah satu fasilitas masyarakat yang memiliki peran penting dalam mendukung keamanan dan kebersamaan warga di lingkungan sekitar. Selain digunakan sebagai tempat untuk melaksanakan kegiatan ronda dan menjaga keamanan lingkungan, Poskamling juga dapat menjadi ruang berkumpul dan berinteraksi bagi masyarakat. Oleh karena itu, kondisi Poskamling yang bersih, rapi, dan layak digunakan perlu diperhatikan agar dapat memberikan kenyamanan bagi warga.",
      "Dalam rangka meningkatkan kepedulian terhadap fasilitas umum sekaligus memeriahkan peringatan Hari Kemerdekaan Republik Indonesia, mahasiswa KKN menginisiasi kegiatan renovasi Poskamling RT 14 dan RT 18 di Desa Kendalsari. Kegiatan ini dilaksanakan melalui pembersihan, pengecatan, serta pemasangan hiasan bertema 17 Agustus pada Poskamling. Kegiatan tersebut tidak hanya bertujuan untuk memperbaiki tampilan Poskamling, tetapi juga menjadi sarana untuk membangun semangat gotong royong antara mahasiswa KKN dan masyarakat."
    ],
    implementation: [
      "Kegiatan renovasi dilaksanakan dengan pendekatan gotong royong yang melibatkan mahasiswa KKN dan masyarakat sekitar. Tahapan kegiatan diawali dengan koordinasi bersama warga dan peninjauan kondisi Poskamling untuk menentukan bagian yang perlu dibersihkan dan diperbaiki.",
      "Selanjutnya dilakukan pembersihan area Poskamling, persiapan alat dan bahan, serta pengecatan pada bagian-bagian yang diperlukan. Setelah proses pengecatan selesai, dilakukan pemasangan berbagai hiasan bertema Hari Kemerdekaan untuk memberikan suasana yang lebih semarak. Seluruh rangkaian kegiatan dilaksanakan secara bersama-sama agar proses renovasi dapat berjalan dengan efektif.",
      "Kegiatan renovasi Poskamling diharapkan dapat menjadi contoh sederhana mengenai pentingnya menjaga dan merawat fasilitas umum secara bersama-sama. Pemeliharaan kebersihan, pengecatan, dan penghiasan Poskamling juga dapat dilanjutkan secara mandiri oleh masyarakat sehingga fasilitas tersebut tetap terawat dan dapat dimanfaatkan dengan baik dalam jangka panjang."
    ],
    pj: "Julius & Restu Raidatul Hilal",
    pjNIM: "113230042 & 114230134",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Utama/Poskamling/cover.JPG",
    gallery: [
      { url: "/Utama/Poskamling/cover.JPG", caption: "Renovasi dan pengecatan pos kamling RT 14 & RT 18" },
      { url: "/Utama/Poskamling/DSC_0351.JPG", caption: "Peninjauan kondisi pos kamling dan persiapan peralatan renovasi" },
      { url: "/Utama/Poskamling/DSC_0367.JPG", caption: "Proses pengecatan dinding dan pembersihan pos ronda bersama warga" },
      { url: "/Utama/Poskamling/DSC_0668.JPG", caption: "Gotong royong mahasiswa KKN dan warga merapikan fasilitas poskamling" },
      { url: "/Utama/Poskamling/DSC_0678.JPG", caption: "Pemasangan hiasan dan umbul-umbul semarak HUT RI ke-81" },
      { url: "/Utama/Poskamling/DSC_0699.JPG", caption: "Istirahat sejenak dengan sepotong es krim" }
    ],
    date: "Minggu, 12 Juli 2026 & Rabu, 15 Juli 2026",
    time: "09.00 – 13.00 WIB",
    location: "Poskamling RT 14 dan Poskamling RT 18",
    objectives: [
      "Menciptakan fasilitas Poskamling yang lebih bersih, rapi, nyaman, dan menarik bagi masyarakat.",
      "Meningkatkan kepedulian warga terhadap kebersihan dan pemeliharaan fasilitas umum.",
      "Memeriahkan peringatan Hari Kemerdekaan Republik Indonesia melalui pemasangan hiasan 17 Agustus.",
      "Mempererat hubungan dan kerja sama gotong royong antara mahasiswa KKN dengan masyarakat Desa Kendalsari."
    ],
    output: "Terciptanya Poskamling yang lebih bersih, rapi, dan nyaman digunakan oleh masyarakat di RT 14 dan RT 18, meningkatnya kepedulian pemeliharaan fasilitas umum, suasana lingkungan yang semarak untuk menyambut 17 Agustus, serta terjalinnya hubungan yang semakin erat antara mahasiswa dan warga desa.",
    targetBeneficiaries: "Warga RT 14 dan RT 18 Padukuhan Kendalsari III",
    driveLink: "https://drive.google.com/drive/folders/1lVdAQf2bV7Q-K6QP_Us84hoRqiFTOZ1a"
  },

  // ==========================================
  // PROGRAM KERJA UTAMA INDIVIDU (10 ITEMS)
  // ==========================================
  {
    id: "p-indiv-1",
    slug: "pupuk-organik-padat",
    title: "Pupuk Organik Padat (POP)",
    category: "Utama Individu",
    shortDesc: "Pemanfaatan kotoran sapi menjadi pupuk organik padat ramah lingkungan melalui teknik fermentasi sederhana bagi kelompok tani.",
    background: [
      "Kadus III Kendalsari memiliki potensi peternakan yang dapat dimanfaatkan untuk mendukung kegiatan pertanian, salah satunya berupa kotoran sapi. Kotoran sapi yang umumnya hanya menjadi limbah dapat diolah menjadi Pupuk Organik Padat (POP) sehingga memiliki nilai guna dan dapat dimanfaatkan kembali dalam kegiatan budidaya tanaman.",
      "Melihat potensi tersebut, mahasiswa KKN menginisiasi kegiatan pembuatan POP sebagai upaya pemanfaatan limbah peternakan sekaligus mendukung pengelolaan lingkungan yang lebih berkelanjutan."
    ],
    implementation: [
      "Kegiatan dilakukan melalui penyampaian materi singkat dan praktik secara langsung bersama masyarakat. Bahan yang digunakan meliputi kotoran sapi, EM4 sebagai aktivator, molase sebagai sumber energi bagi mikroorganisme, serta bahan pendukung lainnya.",
      "Bahan dicampurkan hingga merata, kemudian ditumpuk pada tempat yang telah disiapkan dan ditutup menggunakan terpal untuk menjaga kondisi selama proses penguraian atau fermentasi berlangsung.",
      "Melalui kegiatan ini, masyarakat memperoleh pengalaman dalam mengolah kotoran sapi menjadi bahan yang lebih bermanfaat bagi pertanian. Pemanfaatan kotoran sapi sebagai POP juga dapat membantu mengurangi limbah peternakan yang berpotensi menimbulkan permasalahan lingkungan apabila tidak dikelola dengan baik.",
      "Program POP memiliki potensi untuk dilanjutkan secara mandiri oleh masyarakat karena bahan bakunya mudah diperoleh dari aktivitas peternakan setempat dan proses pembuatannya relatif sederhana. Dengan demikian, limbah peternakan tidak hanya menjadi permasalahan lingkungan, tetapi dapat diubah menjadi sumber daya yang kembali memberikan manfaat bagi masyarakat dan kegiatan pertanian."
    ],
    pj: "Dyan Agustina",
    pjNIM: "134230123",
    pjRole: "Humas / Agroteknologi",
    image: "/Individu/POP/cover.JPG",
    gallery: [
      { url: "/Individu/POP/cover.JPG", caption: "Praktik pembuatan Pupuk Organik Padat (POP) bersama kelompok tani" },
      { url: "/Individu/POP/DSC_0341.JPG", caption: "Persiapan bahan baku kotoran ternak dan EM4" },
      { url: "/Individu/POP/DSC_0344.JPG", caption: "Praktik pembuatan Pupuk Organik Padat (POP) bersama kelompok tani" },
      { url: "/Individu/POP/DSC_0363.JPG", caption: "Pencampuran larutan aktivator fermentasi secara merata" }
    ],
    date: "Selasa, 7 Juli 2026",
    time: "16.00 – 17.30 WIB",
    location: "Kelompok Usaha Bersama (KUB) Berkah Mandiri",
    objectives: [
      "Mengedukasi dan mengajak warga dalam pembuatan pupuk organik padat yang ramah lingkungan dan mudah dibuat menggunakan bahan-bahan yang tersedia di lingkungan sekitar.",
      "Memaksimalkan potensi kotoran sapi yang sebelumnya masih digunakan dalam bentuk mentah menjadi produk fermentasi yang siap diaplikasikan ke tanah maupun tanaman.",
      "Meningkatkan kemandirian petani lokal dalam penyediaan pupuk pembenah tanah berkualitas dan meminimalkan penggunaan pupuk anorganik."
    ],
    output: "Masyarakat memperoleh pengalaman praktis dalam mengolah limbah kotoran sapi menjadi pupuk organik padat siap aplikasi, mengurangi limbah peternakan, serta mendorong pengelolaan pertanian desa yang mandiri dan berkelanjutan.",
    targetBeneficiaries: "Warga Kadus 3 dan Anggota Kelompok Tani Ngudi Rahayu",
    driveLink: "https://drive.google.com/drive/folders/16IA0rrO0YbX2re37viDb6uaOdvfz7fND?usp=sharing"
  },
  {
    id: "p-indiv-2",
    slug: "stop-plastik-pakai-reusable-bag",
    title: "Stop Plastik, Pakai Reusable Bag",
    category: "Utama Individu",
    shortDesc: "Edukasi lingkungan bagi ibu rumah tangga untuk mengurangi plastik sekali pakai disertai pembagian reusable bag dan monitoring berkala.",
    background: [
      "Penggunaan plastik sekali pakai masih menjadi kebiasaan yang umum di kalangan masyarakat, khususnya ibu rumah tangga, dalam kegiatan berbelanja sehari-hari. Kebiasaan ini apabila terus dibiarkan berpotensi menimbulkan permasalahan lingkungan akibat penumpukan sampah plastik yang sulit terurai.",
      "Melihat kondisi tersebut, mahasiswa KKN menginisiasi program edukasi lingkungan bagi ibu-ibu RT 18 sebagai upaya mengurangi penggunaan plastik sekali pakai melalui sosialisasi penggunaan plastik yang bertanggung jawab serta pengenalan reusable bag sebagai alternatif yang lebih ramah lingkungan."
    ],
    implementation: [
      "Kegiatan diawali dengan perancangan materi pembelajaran interaktif mengenai dampak sampah plastik dan pentingnya beralih ke reusable bag. Selanjutnya, mahasiswa membuat dan membagikan reusable bag kepada masyarakat sasaran sebagai langkah konkret dalam mendorong perubahan kebiasaan.",
      "Kegiatan dilanjutkan dengan sosialisasi mengenai tujuan penggunaan plastik secara bertanggung jawab dan manfaat beralih ke reusable bag dalam kehidupan sehari-hari. Untuk memastikan keberlanjutan perubahan perilaku, dilakukan monitoring mingguan secara bersama guna memantau konsistensi penggunaan reusable bag oleh masyarakat.",
      "Program ini memiliki potensi untuk terus berjalan secara mandiri karena reusable bag yang telah dibagikan dapat langsung digunakan dalam aktivitas berbelanja sehari-hari, serta pemahaman yang telah terbentuk melalui sosialisasi dapat menjadi dasar bagi masyarakat untuk mempertahankan kebiasaan tersebut. Dengan demikian, penggunaan plastik sekali pakai yang semula menjadi kebiasaan dapat berangsur digantikan dengan kebiasaan baru yang lebih berkelanjutan dan ramah lingkungan."
    ],
    pj: "Wahdatul Fuadiyah Yatalaththof",
    pjNIM: "141230477",
    pjRole: "Humas / Manajemen",
    image: "/Individu/StopPlastik/cover.JPG",
    gallery: [
      { url: "/Individu/StopPlastik/cover.JPG", caption: "Sosialisasi penggunaan reusable bag ramah lingkungan di RT 18" },
      { url: "/Individu/StopPlastik/DSC_0879.JPG", caption: "Pemaparan materi dampak sampah plastik bagi lingkungan" },
      { url: "/Individu/StopPlastik/DSC_0891.JPG", caption: "Antusiasme ibu-ibu RT 18 dalam sesi tanya jawab" },
      { url: "/Individu/StopPlastik/DSC_0927.JPG", caption: "Pembagian reusable bag secara simbolis kepada warga" },
      { url: "/Individu/StopPlastik/DSC_0965.JPG", caption: "Foto bersama seluruh peserta sosialisasi ramah lingkungan" }
    ],
    date: "Sabtu, 4 Juli 2026",
    time: "13.00 – 15.00 WIB",
    location: "Rumah Ibu Indri di RT 18 Dusun 3 Kendalsari",
    objectives: [
      "Mengurangi penggunaan plastik sekali pakai di kalangan masyarakat khususnya ibu rumah tangga melalui sosialisasi penggunaan plastik yang bertanggung jawab.",
      "Mengenalkan reusable bag sebagai alternatif kemasan yang lebih ramah lingkungan.",
      "Mendorong perubahan kebiasaan masyarakat dalam kehidupan sehari-hari melalui pembagian reusable bag secara langsung.",
      "Memastikan keberlanjutan perubahan perilaku masyarakat melalui monitoring mingguan terhadap konsistensi penggunaan reusable bag."
    ],
    output: "Dihasilkannya materi edukasi tentang dampak sampah plastik, reusable bag yang dibagikan kepada masyarakat, serta peningkatan pemahaman ibu-ibu RT 18 mengenai pentingnya mengurangi penggunaan plastik sekali pakai yang terpantau melalui data monitoring mingguan.",
    targetBeneficiaries: "Ibu-ibu RT 18 Dusun 3 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1SK44Uk6P9DTWrOQC4ZFimmH1Z61ePjBn?usp=drive_link"
  },
  {
    id: "p-indiv-3",
    slug: "ai-untuk-semua",
    title: "AI untuk Semua",
    category: "Utama Individu",
    shortDesc: "Sosialisasi literasi digital dan pelatihan pemanfaatan AI (ChatGPT, Gemini, Gamma) serta prompt engineering bagi guru sekolah dasar.",
    background: [
      "Perkembangan teknologi Artificial Intelligence (AI) telah membawa transformasi pesat dalam berbagai sektor, termasuk dalam dunia pendidikan. Namun, pemanfaatan AI di tingkat sekolah dasar masih relatif terbatas akibat kurangnya literasi digital dan pemahaman teknis dalam mengoperasikan platform berbasis AI.",
      "Menurut Verawati dkk. (2024), pemanfaatan teknologi AI di tingkat sekolah dasar memiliki potensi besar untuk mempersonalisasi pembelajaran, meningkatkan keterlibatan siswa, serta membantu tenaga pendidik dalam memberikan umpan balik dan menyusun materi pembelajaran secara lebih cepat dan efektif.",
      "Berdasarkan kondisi tersebut, mahasiswa KKN menginisiasi program 'AI untuk Semua: Pemanfaatan Artificial Intelligence dalam Kehidupan Sehari-hari' yang ditujukan khusus bagi para guru di SD Negeri 1 Kendalsari."
    ],
    implementation: [
      "Pelaksanaan program sosialisasi dan pelatihan ini dilaksanakan pada Selasa, 21 Juli 2026 bertempat di SD Negeri 1 Kendalsari dengan 4 tahapan kegiatan terstruktur:",
      "1. Pemaparan Konsep Dasar dan Etika AI: Menyampaikan edukasi mengenai pengertian dasar AI, manfaatnya dalam dunia pendidikan, serta pentingnya etika dan tanggung jawab dalam menggunakan AI agar tidak menimbulkan ketergantungan atau misinformasi.",
      "2. Identifikasi Konten AI: Mengajak para guru mengikuti sesi interaktif untuk membedakan antara media visual/gambar asli dengan media hasil generasi AI melalui pengamatan ciri-ciri fisik dan detail visual khas buatan AI.",
      "3. Demonstrasi Pemanfaatan ChatGPT untuk Pembelajaran: Mempraktikkan secara langsung penggunaan ChatGPT sebagai asisten digital dalam merancang modul ajar, menyusun materi pembelajaran, membuat variasi soal latihan, hingga merancang ide presentasi interaktif.",
      "4. Pelatihan Penyusunan Prompt Efektif: Memberikan panduan teknis mengenai penyusunan instruksi (prompt engineering) yang terstruktur agar platform AI dapat menghasilkan luaran teks dan materi yang presisi sesuai kebutuhan kurikulum sekolah dasar."
    ],
    pj: "Mohammad Atilla Danadyaksa",
    pjNIM: "123230134",
    pjRole: "PDD / Informatika",
    image: "/Individu/Ai/cover.JPG",
    gallery: [
      { url: "/Individu/Ai/cover.JPG", caption: "Sosialisasi dan pelatihan AI untuk guru di SDN 1 Kendalsari" },
      { url: "/Individu/Ai/DSC_1306.JPG", caption: "Pemaparan konsep dasar kecerdasan buatan dalam pendidikan" },
      { url: "/Individu/Ai/DSC_1327(1).JPG", caption: "Praktik langsung pembuatan prompt modul ajar menggunakan ChatGPT" },
      { url: "/Individu/Ai/DSC_1337.JPG", caption: "Sesi tanya jawab interaktif seputar pemanfaatan AI" },
      { url: "/Individu/Ai/DSC_1349.JPG", caption: "Praktik langsung pembuatan prompt modul ajar menggunakan ChatGPT" }
    ],
    date: "Selasa, 21 Juli 2026",
    time: "12.00 – 13.30 WIB",
    location: "SDN 1 Kendalsari",
    objectives: [
      "Meningkatkan literasi digital para guru SD Negeri 1 Kendalsari mengenai konsep dasar AI dan penerapannya dalam dunia pendidikan.",
      "Mengenalkan berbagai platform berbasis AI (seperti ChatGPT, Gemini, dan Gamma) sebagai media pendukung pembelajaran.",
      "Melatih identifikasi konten hasil sintesis AI untuk mencegah penyebaran misinformasi.",
      "Memberikan pemahaman teknik penyusunan prompt yang efektif dan terstruktur agar AI menghasilkan konten yang presisi dan relevan."
    ],
    output: "Peningkatan pemahaman dan keterampilan para guru SD Negeri 1 Kendalsari dalam mengoperasikan platform AI sebagai alat bantu efisiensi penyusunan bahan ajar dan administrasi kelas secara mandiri, bijak, dan berkesinambungan.",
    targetBeneficiaries: "Guru SD Negeri 1 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1BABt5wVJXM1vHTKNiLx_epMyIpkoZ3jt?usp=sharing"
  },
  {
    id: "p-indiv-4",
    slug: "wash-water-sanitation-hygiene",
    title: "WASH (Water, Sanitation, and Hygiene)",
    category: "Utama Individu",
    shortDesc: "Penyuluhan perilaku hidup bersih dan sehat (PHBS), pentingnya air bersih, serta demonstrasi praktik cuci tangan pakai sabun (CTPS).",
    background: [
      "Kebersihan diri dan lingkungan merupakan salah satu aspek penting dalam menjaga kesehatan, terutama bagi anak-anak yang memiliki aktivitas tinggi dan sering berinteraksi dengan lingkungan di sekitarnya. Berbagai jenis kuman dapat ditemukan di tangan, benda yang sering disentuh, maupun lingkungan sekitar.",
      "Kebiasaan menjaga kebersihan, khususnya mencuci tangan dengan baik dan benar, menjadi salah satu langkah sederhana yang dapat dilakukan untuk membantu mencegah penyebaran kuman dan menjaga kesehatan.",
      "Dalam upaya meningkatkan kesadaran anak-anak mengenai pentingnya kebersihan diri, mahasiswa KKN melaksanakan program WASH (Water, Sanitation, and Hygiene) di SDN 1 Kendalsari. Kegiatan ini dirancang sebagai sarana edukasi bagi siswa mengenai pentingnya menjaga kebersihan diri dan lingkungan serta membiasakan perilaku hidup bersih dan sehat dalam kehidupan sehari-hari."
    ],
    implementation: [
      "Kegiatan dilaksanakan dengan pendekatan edukatif dan interaktif agar materi lebih mudah dipahami oleh siswa. Kegiatan diawali dengan pengenalan mengenai kuman dan berbagai tempat yang dapat menjadi sumber kuman dalam kehidupan sehari-hari.",
      "Selanjutnya, mahasiswa KKN menjelaskan pentingnya mencuci tangan serta waktu-waktu yang tepat untuk mencuci tangan, seperti sebelum makan, setelah menggunakan toilet, dan setelah melakukan aktivitas yang menyebabkan tangan menjadi kotor.",
      "Siswa kemudian diberikan contoh mengenai tahapan mencuci tangan yang baik dan benar menggunakan sabun dan air mengalir, kemudian mempraktikkannya secara langsung dengan didampingi oleh mahasiswa KKN.",
      "Program WASH diharapkan dapat menjadi langkah sederhana dalam membangun kesadaran mengenai pentingnya kebersihan sejak usia dini. Pengetahuan dan kebiasaan yang diperoleh melalui kegiatan ini dapat terus diterapkan oleh siswa di sekolah, rumah, maupun lingkungan masyarakat sehingga tercipta perilaku hidup bersih dan sehat yang berkelanjutan."
    ],
    pj: "Restu Raidatul Hilal",
    pjNIM: "114230134",
    pjRole: "Perkap / Teknik Lingkungan",
    image: "/Individu/WASH/cover.JPG",
    gallery: [
      { url: "/Individu/WASH/cover.JPG", caption: "Praktek langsung mencuci tangan yang baik dan benar bersama SDN 1 Kendalsari" },
      { url: "/Individu/WASH/DSC_1373.JPG", caption: "Penyampaian materi 6 langkah cuci tangan pakai sabun" },
      { url: "/Individu/WASH/DSC_1382.JPG", caption: "Memperagakan cara mencuci tangan dengan air mengalir bersama siswa" },
      { url: "/Individu/WASH/DSC_1395.JPG", caption: "Praktek langsung mencuci tangan yang baik dan benar bersama SDN 1 Kendalsari" },
      { url: "/Individu/WASH/DSC_1413.JPG", caption: "Praktek langsung mencuci tangan yang baik dan benar bersama SDN 1 Kendalsari" }
    ],
    date: "Rabu, 22 Juli 2026",
    time: "09.00 – 12.00 WIB",
    location: "SDN 1 Kendalsari",
    objectives: [
      "Meningkatkan pemahaman siswa mengenai pentingnya menjaga kebersihan diri dan lingkungan.",
      "Mengenalkan dan melatih siswa cara mencuci tangan yang baik dan benar menggunakan sabun dan air mengalir.",
      "Meningkatkan kesadaran siswa mengenai keberadaan dan penyebaran kuman di lingkungan sekitar.",
      "Membentuk kebiasaan hidup bersih dan sehat (PHBS) sejak usia sekolah baik di sekolah, rumah, maupun lingkungan."
    ],
    output: "Meningkatnya pengetahuan dan keterampilan praktis siswa SDN 1 Kendalsari dalam mempraktikkan cuci tangan pakai sabun standar kesehatan, serta terbentuknya pembiasaan PHBS secara berkesinambungan.",
    targetBeneficiaries: "Siswa SDN 1 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1rg9IJ6o7Uig-cNRO6hQIDe_-sgbF4_rt?usp=drive_link"
  },
  {
    id: "p-indiv-5",
    slug: "literasi-keuangan",
    title: "Literasi Keuangan",
    category: "Utama Individu",
    shortDesc: "Edukasi pengenalan dasar menabung dan pengelolaan uang saku bijak bagi anak SD yang dipadukan dengan kreasi celengan botol bekas.",
    background: [
      "Literasi keuangan merupakan salah satu pengetahuan dasar yang penting untuk dikenalkan kepada anak sejak dini. Anak-anak perlu mulai memahami bagaimana cara menggunakan uang dengan baik, salah satunya melalui kebiasaan menabung.",
      "Selain itu, pemahaman mengenai perbedaan antara kebutuhan dan keinginan juga penting agar anak dapat belajar menentukan mana yang lebih perlu didahulukan ketika menggunakan uang yang dimiliki.",
      "Berdasarkan hal tersebut, mahasiswa KKN melaksanakan program Literasi Keuangan yang ditujukan kepada anak-anak sekolah dasar di Padukuhan Kendalsari III. Kegiatan ini berfokus pada pengenalan kebiasaan menabung dan cara sederhana dalam mengatur uang saku."
    ],
    implementation: [
      "Dalam pelaksanaannya, kegiatan dibuat dengan suasana yang santai agar anak-anak tidak merasa seperti sedang mengikuti pembelajaran di kelas. Sebelum masuk ke materi, mahasiswa mengajak anak-anak melakukan ice breaking terlebih dahulu. Setelah itu, materi disampaikan menggunakan gambar, contoh sederhana, tanya jawab, dan permainan edukatif.",
      "Tidak hanya mendapatkan materi, anak-anak juga diajak untuk membuat celengan menggunakan botol bekas. Kegiatan ini dilakukan sebagai bentuk praktik sederhana dari kebiasaan menabung yang telah dijelaskan sebelumnya. Anak-anak dapat menghias celengan mereka masing-masing sehingga kegiatan menjadi lebih menarik dan tidak hanya berisi penyampaian materi. Pemanfaatan botol bekas juga sekaligus mengajarkan bahwa barang yang sudah tidak digunakan masih dapat dimanfaatkan kembali menjadi sesuatu yang berguna.",
      "Setelah kegiatan selesai, mahasiswa memberikan kuis dan pertanyaan singkat kepada anak-anak mengenai materi yang telah disampaikan. Dari kegiatan tersebut, anak-anak terlihat cukup antusias dalam mengikuti materi dan permainan yang diberikan."
    ],
    pj: "Cherina Ravalona Rahman",
    pjNIM: "142230467",
    pjRole: "Bendahara / Akuntansi",
    image: "/Individu/Menabung/cover.JPG",
    gallery: [
      { url: "/Individu/Menabung/cover.JPG", caption: "Edukasi literasi keuangan dan budaya menabung sejak usia dini" },
      { url: "/Individu/Menabung/DSC_1210.JPG", caption: "Aktivitas menghias celengan sesuai kreativitas masing-masing" },
      { url: "/Individu/Menabung/DSC_1213.JPG", caption: "Pembagian celengan target edukatif kepada anak-anak" },
      { url: "/Individu/Menabung/DSC_1238.JPG", caption: "Aktivitas menghias celengan sesuai kreativitas masing-masing" },
      { url: "/Individu/Menabung/DSC_1281.JPG", caption: "Foto bersama peserta edukasi menabung ceria" },
      
    ],
    date: "Selasa, 21 Juli 2026",
    time: "08.00 – 10.00 WIB",
    location: "SDN 1 Kendalsari",
    objectives: [
      "Memberikan pemahaman kepada anak-anak mengenai pentingnya menabung dan cara menyisihkan sebagian uang saku.",
      "Mengedukasi anak-anak dalam membedakan antara kebutuhan dan keinginan dalam kehidupan sehari-hari.",
      "Meningkatkan kreativitas dan kepedulian lingkungan melalui daur ulang botol bekas menjadi celengan hias edukatif.",
      "Menumbuhkan sikap disiplin, hemat, dan bertanggung jawab sejak usia dini."
    ],
    output: "Anak-anak di Padukuhan Kendalsari III mulai menerapkan kebiasaan menabung dalam kehidupan sehari-hari, lebih bijak dalam menggunakan uang saku, serta memiliki pemahaman yang baik mengenai pengelolaan keuangan keluarga sejak dini.",
    targetBeneficiaries: "Siswa SDN 1 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/11znRvt5SgEMKk5fGoSxPvNzFC0Tp4qAq?usp=sharing"
  },
  {
    id: "p-indiv-6",
    slug: "workshop-briket",
    title: "Workshop Briket",
    category: "Utama Individu",
    shortDesc: "Pelatihan pengolahan limbah organik pertanian (sekam, tempurung kelapa) menjadi briket biomassa bernilai jual dan ramah lingkungan.",
    background: [
      "Kadus III Kendalsari memiliki potensi pertanian, salah satunya berupa rumput, bongkol jagung, dan tempurung kelapa yang menghasilkan limbah dalam jumlah cukup besar. Tempurung kelapa, bongkol jagung, dan daun-daun kering yang belum dimanfaatkan secara optimal berpotensi menjadi limbah dan menimbulkan permasalahan lingkungan apabila dibiarkan menumpuk atau dibakar secara terbuka.",
      "Melihat potensi tersebut, mahasiswa KKN menginisiasi Workshop Briket sebagai upaya mengubah limbah pertanian menjadi produk yang memiliki nilai guna. Briket dapat dimanfaatkan sebagai salah satu alternatif bahan bakar padat sekaligus menjadi bentuk penerapan prinsip pemanfaatan kembali limbah dan pengembangan potensi sumber daya lokal."
    ],
    implementation: [
      "Workshop dilaksanakan melalui pendekatan edukatif dan partisipatif, sehingga masyarakat tidak hanya memperoleh materi tetapi juga terlibat langsung dalam proses pembuatan melalui tahapan:",
      "1. Menyiapkan limbah organik seperti bongkol jagung, tempurung kelapa, bahan perekat tapioka, alat pencampur, cetakan, dan perlengkapan pendukung.",
      "2. Pemaparan mengenai karakteristik limbah organik, potensi pemanfaatannya, prinsip pembuatan briket, serta manfaat penggunaan bahan bakar alternatif.",
      "3. Peserta melakukan proses pencampuran arang sekam dengan perekat hingga diperoleh adonan dengan konsistensi yang sesuai.",
      "4. Adonan dimasukkan ke dalam cetakan dan dipadatkan untuk membentuk briket dengan ukuran yang seragam.",
      "5. Briket yang telah dicetak dikeringkan hingga kadar airnya berkurang dan briket memiliki kondisi yang lebih sesuai untuk digunakan.",
      "Program ini memiliki potensi dampak dalam aspek lingkungan, sosial, dan ekonomi, seperti mendorong pemanfaatan sekam padi sehingga jumlah limbah dapat dikurangi, serta membuka peluang rintisan usaha briket bernilai ekonomis."
    ],
    pj: "Frista Asmara Senja",
    pjNIM: "121220130",
    pjRole: "Bendahara / Teknik Kimia",
    image: "/Individu/Briket/cover.JPG",
    gallery: [
      { url: "/Individu/Briket/cover.JPG", caption: "Antusiasme Bapak-Bapak yang mengikuti sosialisasi briket" },
      { url: "/Individu/Briket/DSC_1699.JPG", caption: "Pemaparan materi tentang Briket" },
      { url: "/Individu/Briket/DSC_1746.JPG", caption: "Pemaparan materi tentang Briket" }
    ],
    date: "Jumat, 24 Juli 2026",
    time: "19.00 – 21.00 WIB",
    location: "Rumah Pak Sumadi (RT 18)",
    objectives: [
      "Meningkatkan pemahaman masyarakat mengenai potensi pemanfaatan limbah organik pertanian.",
      "Memberikan keterampilan praktis dalam pembuatan briket berbahan dasar limbah organik lokal.",
      "Memperkenalkan alternatif bahan bakar padat terbarukan berbasis sumber daya desa.",
      "Menumbuhkan kesadaran masyarakat terhadap pengelolaan lingkungan yang lebih berkelanjutan."
    ],
    output: "Dihasilkannya produk briket berbahan dasar limbah organik, bertambahnya keterampilan teknis warga dalam pembuatan briket biomassa, serta terbukanya peluang usaha bahan bakar alternatif ramah lingkungan.",
    targetBeneficiaries: "Anggota Kelompok Tani Kadus 3",
    driveLink: "https://drive.google.com/drive/folders/1e6VjvBJ80W82Hm2AHPnvylubqoYo9Q8U?usp=drive_link"
  },
  {
    id: "p-indiv-7",
    slug: "digitalisasi-jalan-rt-google-maps",
    title: "Digitalisasi Jalan RT Melalui Google Maps",
    category: "Utama Individu",
    shortDesc: "Pemetaan rute lorong gang dan pengunggahan koordinat jalan RT ke Google Maps serta pemasangan rambu informasi jalan fisik.",
    background: [
      "Menurut Rahman (2022), digitalisasi data spasial dapat memberikan manfaat berupa perluasan jangkauan, memiliki nilai multi efisiensi dan membantu mengolah data pertimbangan keputusan yang lebih baik. Pada perluasan jangkauan mampu memberikan pengenalan dan pemasaran produk unggulan yang lebih luas ke berbagai daerah karena kemampuan fleksibilitasnya melalui jangkauan jaringan internet.",
      "RT 23 Dukuh Kaligentong Kadus III, yang terletak di Kemalang, Klaten, sebelumnya masih menghadapi kendala dalam hal aksesibilitas digital. Terdapat ruas jalan di wilayah ini yang belum terdata dalam peta digital, khususnya Google Maps. Kondisi ini tentu menyulitkan berbagai pihak, baik warga setempat maupun pendatang yang ingin mencari lokasi tertentu. Tidak hanya itu, akses terhadap layanan darurat seperti ambulans dan pemadam kebakaran, pengiriman barang, hingga promosi potensi desa juga ikut terdampak akibat ketiadaan informasi lokasi yang akurat.",
      "Melihat permasalahan tersebut, mahasiswa Kuliah Kerja Nyata (KKN) tergerak untuk mengambil inisiatif mendigitalisasikan akses jalan di wilayah tersebut melalui Program Digitalisasi Jalan RT Melalui Google Maps."
    ],
    implementation: [
      "Tahapan pelaksanaan program kerja ini dilakukan secara sistematis melalui:",
      "1. Mahasiswa bersama warga berkeliling mengambil titik koordinat GPS pada setiap ruas jalan dan gang yang belum terdata.",
      "2. Menyusun informasi nama jalan dan data pendukung sesuai standar verifikasi Google Maps.",
      "3. Data yang telah disusun rapi diunggah secara sistematis melalui platform Google Maps.",
      "4. Membuat rambu fisik papan informasi jalan.",
      "5. Memasang rambu di titik-titik strategis untuk memastikan keberlanjutan navigasi di lapangan, baik secara fisik maupun digital.",
      "Pada akhirnya, program digitalisasi ini merupakan bentuk kepedulian nyata mahasiswa KKN dalam menjawab kebutuhan masyarakat akan akses informasi yang akurat dan modern, sekaligus mendukung pengembangan potensi desa di era digital yang semakin terhubung."
    ],
    pj: "Sebastian George De Caesar",
    pjNIM: "112230067",
    pjRole: "Ketua / Teknik Pertambangan",
    image: "/Individu/Digitalisasi/cover.JPG",
    gallery: [
      { url: "/Individu/Digitalisasi/cover.JPG", caption: "Pemasangan rambu-rambu jalan" },
      { url: "/Individu/Digitalisasi/3. Gmail Road Edit Accepted(1).jpg", caption: "Verifikasi titik lokasi dan akses jalan pada Google Maps" },
      { url: "/Individu/Digitalisasi/DSC_1663(1).JPG", caption: "Pemasangan rambu-rambu jalan" },
      { url: "/Individu/Digitalisasi/DSC_1683(1).JPG", caption: "Pemasangan rambu-rambu jalan" },
      { url: "/Individu/Digitalisasi/DSC_1692.JPG", caption: "Pemasangan rambu-rambu jalan" }
    ],
    date: "Jumat, 24 Juli 2026",
    time: "13.00 – 15.00 WIB",
    location: "RT 23 Dukuh Kaligentong, Kendalsari, Kemalang",
    objectives: [
      "Memetakan ruas jalan yang belum terdaftar dan mengajukannya ke Google Maps agar RT 23 teridentifikasi secara digital.",
      "Meningkatkan kemudahan navigasi bagi warga, pendatang, kurir ekspedisi, dan layanan darurat.",
      "Membuat dan memasang rambu informasi penunjuk jalan fisik di titik strategis wilayah desa."
    ],
    output: "Resmi terdaftarnya ruas jalan RT 23 di Google Maps serta terpasangnya rambu informasi fisik jalan, memberikan kemudahan aksesibilitas transportasi dan membuka peluang promosi UMKM desa secara luas.",
    targetBeneficiaries: "Warga RT 23 Kendalsari, Kemalang, Klaten",
    driveLink: "https://drive.google.com/drive/folders/1N86Tz09qKVAOgOtImPV9c_uSludHptOO?usp=drive_link"
  },
  {
    id: "p-indiv-8",
    slug: "peta-rawan-bencana",
    title: "Peta Rawan Bencana",
    category: "Utama Individu",
    shortDesc: "Survei spasial lereng Merapi dan penyusunan peta cetak zonasi rawan longsor/bencana untuk mitigasi dan kesiapsiagaan warga desa.",
    background: [
      "Bencana tanah longsor merupakan salah satu bencana alam yang dapat menimbulkan kerugian besar bagi masyarakat, baik berupa kerusakan rumah dan fasilitas umum maupun terganggunya aktivitas dan mata pencaharian warga. Kondisi geografis, curah hujan yang tinggi, kemiringan lereng, penggunaan lahan, serta berkurangnya vegetasi dapat meningkatkan potensi terjadinya tanah longsor.",
      "Oleh karena itu, diperlukan upaya mitigasi yang dapat membantu masyarakat mengenali wilayah yang memiliki tingkat kerawanan terhadap bencana tersebut. Salah satu upaya yang dapat dilakukan adalah melalui pembuatan Peta Rawan Bencana Longsor. Peta ini merupakan media informasi yang menggambarkan wilayah berdasarkan tingkat potensi terjadinya tanah longsor."
    ],
    implementation: [
      "Tahapan pelaksanaan program dimulai dengan melakukan pengumpulan data mengenai kondisi wilayah. Selanjutnya dilakukan pengamatan lapangan untuk mengetahui kondisi lereng, penggunaan lahan, drainase, serta titik-titik yang memiliki indikasi kerawanan.",
      "Lalu dengan data spasial yang tersedia digunakan untuk menentukan dan mengelompokkan wilayah berdasarkan tingkat kerawanannya. Setelah proses pengolahan selesai, hasilnya divisualisasikan dalam bentuk peta dengan penggunaan warna atau simbol yang berbeda sehingga informasi dapat dipahami dengan lebih mudah.",
      "Pembuatan peta rawan bencana longsor tidak hanya bertujuan menghasilkan sebuah produk peta, tetapi juga menjadi sarana edukasi bagi masyarakat. Informasi yang terdapat pada peta dapat digunakan sebagai bahan untuk meningkatkan kewaspadaan, menjaga kelestarian drainase, serta menjadi informasi pendukung bagi pemerintah desa dalam merencanakan jalur dan titik evakuasi aman."
    ],
    pj: "Zhafira Anggun Nurraiza",
    pjNIM: "111230028",
    pjRole: "Sekretaris / Teknik Geologi",
    image: "/Individu/PetaBencana/cover.jpg",
    gallery: [
      { url: "/Individu/PetaBencana/cover.jpg", caption: "Pemasangan Peta Rawan Bencana Tanah Longsor di Poskamling tiap RT" },
      { url: "/Individu/PetaBencana/PETA KERAWANAN LONGSOR_pages-to-jpg-0001.jpg", caption: "Peta Rawan Bencana Tanah Longsor Desa Kendalsari" },
      { url: "/Individu/PetaBencana/IMG_7173.JPG", caption: "Sosialisasi Peta Rawan Bencana Tanah Longsor kepada seluruh Ketua R" }
    ],
    date: "Selasa, 21 Juli 2026",
    time: "09.00 – 16.00 WIB",
    location: "Poskamling RT 14, 15, 16, 17, 18, 19, 20, 21, 22, dan 23",
    objectives: [
      "Menyusun peta zonasi rawan bencana tanah longsor di Kendalsari sebagai media edukasi kebencanaan.",
      "Memberikan informasi spasial akurat bagi pemerintah desa sebagai acuan kesiapsiagaan dan mitigasi bencana.",
      "Menyediakan data pendukung perencanaan jalur evakuasi aman bagi warga padukuhan."
    ],
    output: "Tersusun dan terpasangnya peta cetak rawan bencana longsor di poskamling RT 14 sampai RT 23 yang meningkatkan kewaspadaan, kesiapsiagaan, dan mitigasi bencana mandiri bagi masyarakat.",
    targetBeneficiaries: "Masyarakat dan Perangkat Padukuhan Kendalsari 3",
    driveLink: "https://drive.google.com/drive/folders/1zwfclrgXzMJrH0LONi32lY2RF7pURBPU?usp=drive_link"
  },
  {
    id: "p-indiv-9",
    slug: "membaca-menulis-dan-berhitung-calistung",
    title: "Membaca, Menulis, dan Berhitung (Calistung)",
    category: "Utama Individu",
    shortDesc: "Pendampingan interaktif literasi dan numerasi dasar bagi murid kelas 2 SDN 1 Kendalsari melalui buku bacaan dan tes berhitung ceria.",
    background: [
      "Kemampuan membaca, menulis, dan berhitung merupakan keterampilan dasar yang sangat penting dalam menunjang proses pembelajaran anak di sekolah. Penguasaan kemampuan tersebut menjadi salah satu fondasi bagi siswa untuk memahami berbagai materi pembelajaran dan mengembangkan kemampuan akademiknya.",
      "Oleh karena itu, diperlukan pendampingan belajar yang dapat membantu siswa dalam meningkatkan kemampuan dasar tersebut secara bertahap dan sesuai dengan tingkat kemampuan masing-masing.",
      "Dalam rangka mendukung peningkatan kemampuan literasi dan numerasi dasar, mahasiswa KKN menginisiasi program Membaca, Menulis, dan Berhitung (Calistung) yang ditujukan kepada siswa kelas 2 SDN 1 Kendalsari. Kegiatan ini dilaksanakan sebagai bentuk pendampingan belajar bagi siswa, khususnya bagi beberapa siswa yang masih mengalami kesulitan dalam membaca. Pembelajaran dilakukan dengan pendekatan yang sederhana, interaktif, dan menyenangkan agar siswa lebih mudah memahami materi serta memiliki motivasi untuk belajar."
    ],
    implementation: [
      "Pelaksanaan kegiatan diawali dengan koordinasi bersama pihak sekolah dan guru kelas untuk menentukan waktu serta teknis pelaksanaan. Selanjutnya, mahasiswa KKN mempersiapkan materi dan media pembelajaran yang akan digunakan.",
      "Kegiatan Calistung dilaksanakan melalui pembelajaran dan pendampingan secara langsung kepada siswa kelas 2 SDN 1 Kendalsari. Materi membaca diberikan melalui latihan mengenal dan membaca huruf, kata, hingga kalimat sederhana. Pada materi menulis, siswa diberikan latihan menulis huruf, kata, dan kalimat dengan memperhatikan kerapian tulisan.",
      "Sementara itu, materi berhitung diberikan melalui latihan operasi hitung dasar yang disesuaikan dengan kemampuan siswa kelas 2. Selama kegiatan berlangsung, mahasiswa KKN memberikan bimbingan secara bertahap kepada siswa yang membutuhkan pendampingan lebih.",
      "Metode pembelajaran dan media yang digunakan selama kegiatan juga dapat dikembangkan dan diterapkan kembali oleh guru maupun pihak sekolah sebagai salah satu alternatif kegiatan pendampingan belajar bagi siswa yang membutuhkan."
    ],
    pj: "Julius",
    pjNIM: "113230042",
    pjRole: "Perkap / Teknik Perminyakan",
    image: "/Individu/Calistung/cover.JPG",
    gallery: [
      { url: "/Individu/Calistung/cover.JPG", caption: "Suasana belajar yang ceria dan penuh semangat" },
      { url: "/Individu/Calistung/DSC_1129.JPG", caption: "Bimbingan pengenalan huruf dan kata dengan media visual" },
      { url: "/Individu/Calistung/DSC_1183.JPG", caption: "Siswa-Siswi bersemangat untuk menjawab kuis dari Mahasiswa KKN" },
      { url: "/Individu/Calistung/DSC_1185.JPG", caption: "Pendampingan belajar membaca, menulis, dan berhitung ceria" },
      { url: "/Individu/Calistung/DSC_1205.JPG", caption: "Suasana belajar yang ceria dan penuh semangat" }
    ],
    date: "Selasa, 21 Juli 2026",
    time: "09.35 – 10.45 WIB",
    location: "SDN 1 Kendalsari",
    objectives: [
      "Meningkatkan kemampuan dasar siswa dalam membaca, menulis, dan berhitung.",
      "Membantu siswa yang masih mengalami kesulitan dalam membaca agar dapat berkembang secara bertahap.",
      "Meningkatkan minat, rasa percaya diri, dan motivasi belajar siswa dalam mengikuti pembelajaran sekolah."
    ],
    output: "Meningkatnya kemampuan membaca lancar, kerapian menulis, dan keterampilan berhitung dasar murid kelas 2 SDN 1 Kendalsari serta tumbuhnya antusiasme belajar siswa.",
    targetBeneficiaries: "Murid kelas 2 SDN 1 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1TjYBa3xaG22Ak_xm6GNElMRfuBpMtZH6"
  },
  {
    id: "p-indiv-10",
    slug: "sosialisasi-pemanfaatan-potensi-lokal",
    title: "Sosialisasi Pemanfaatan Potensi Lokal (Selai Pisang)",
    category: "Utama Individu",
    shortDesc: "Sosialisasi inovasi pengolahan panen pisang menjadi selai pisang bernilai jual tinggi, teknik packaging menarik, dan strategi pemasaran UMKM.",
    background: [
      "Desa Kendalsari memiliki berbagai potensi lokal yang dapat dikembangkan menjadi produk bernilai guna dan bernilai ekonomi bagi masyarakat. Salah satu potensi yang cukup mudah ditemukan adalah tanaman pisang yang banyak dibudidayakan oleh warga.",
      "Ketersediaan bahan baku tersebut dapat menjadi peluang untuk menghasilkan produk olahan yang lebih beragam sehingga tidak hanya dikonsumsi secara langsung, tetapi juga memiliki potensi untuk dikembangkan sebagai produk usaha masyarakat.",
      "Dalam upaya meningkatkan pengetahuan dan keterampilan masyarakat dalam memanfaatkan potensi yang ada di desa, mahasiswa KKN melaksanakan program Sosialisasi Pemanfaatan Potensi Lokal yang ditujukan terutama kepada ibu-ibu di Desa Kendalsari. Kegiatan ini berfokus pada pengenalan potensi lokal, pemanfaatan pisang menjadi produk olahan berupa selai pisang, serta pengenalan dasar-dasar pengemasan produk yang baik dan menarik."
    ],
    implementation: [
      "Kegiatan dilaksanakan melalui penyampaian materi dan praktik secara langsung agar peserta dapat memahami proses dari awal hingga produk siap dikemas.",
      "Kegiatan diawali dengan pengenalan mengenai potensi lokal yang terdapat di Desa Kendalsari serta peluang pemanfaatannya sebagai produk yang memiliki nilai tambah. Selanjutnya, peserta diberikan penjelasan mengenai pembuatan selai pisang, mulai dari persiapan bahan hingga proses pengolahan.",
      "Setelah selai selesai dibuat, kegiatan dilanjutkan dengan pengenalan teknik pengemasan yang baik, menarik, dan sesuai untuk produk pangan, termasuk pemilihan kemasan food grade serta pentingnya tampilan kemasan dalam meningkatkan daya tarik produk.",
      "Program Sosialisasi Pemanfaatan Potensi Lokal diharapkan dapat menjadi langkah awal bagi masyarakat, khususnya ibu-ibu Desa Kendalsari, untuk lebih mengenali dan mengembangkan sumber daya yang tersedia di lingkungan sekitar. Dengan kreativitas, keterampilan pengolahan, dan pengemasan yang baik, potensi lokal seperti pisang dapat dikembangkan menjadi produk yang memiliki nilai tambah serta berpotensi mendukung kegiatan ekonomi masyarakat secara berkelanjutan."
    ],
    pj: "Salsabila Rahma",
    pjNIM: "153230068",
    pjRole: "Humas / Ilmu Komunikasi",
    image: "/Individu/PotensiLokal/cover.JPG",
    gallery: [
      { url: "/Individu/PotensiLokal/cover.JPG", caption: "Pelatihan pembuatan produk olahan selai pisang bersama PKK RT 21" },
      { url: "/Individu/PotensiLokal/DSC_0172.JPG", caption: "Foto bersama Ibu-Ibu yang mengikuti sosialisasi pemanfaatan potensi lokal" },
      { url: "/Individu/PotensiLokal/DSC_1205(1).JPG", caption: "Pelatihan pembuatan produk olahan selai pisang bersama PKK RT 21" },
      { url: "/Individu/PotensiLokal/DSC_1283.JPG", caption: "Pembagian flyer cara membuat selai pisang" }
    ],
    date: "Sabtu, 11 Juli 2026",
    time: "15.30 – 17.00 WIB",
    location: "Rumah Ibu Nur Anis (RT 21)",
    objectives: [
      "Meningkatkan pemahaman masyarakat mengenai potensi lokal pisang yang dapat dikembangkan menjadi produk bernilai tambah.",
      "Memberikan keterampilan praktis kepada ibu-ibu PKK dalam mengolah panen pisang menjadi selai lezat dan higienis.",
      "Mengedukasi teknik pemilihan kemasan food grade dan pelabelan produk yang menarik untuk pemasaran UMKM desa."
    ],
    output: "Ibu-ibu PKK RT 21 mampu mempraktikkan pembuatan selai pisang bernilai jual, memahami standar pengemasan pangan food grade, serta terbukanya peluang rintisan usaha pangan lokal mandiri.",
    targetBeneficiaries: "Ibu-ibu PKK RT 21 Padukuhan Kendalsari III",
    driveLink: "https://drive.google.com/drive/folders/1uDSfCmtgEz7niSxDnEg0uobv1_AkGlPp?usp=drive_link"
  },

  // ==========================================
  // PROGRAM KERJA PENDUKUNG (5 ITEMS)
  // ==========================================
  {
    id: "p-pendukung-1",
    slug: "nobar-piala-dunia",
    title: "Nobar Piala Dunia",
    category: "Pendukung",
    shortDesc: "Nonton bersama tayangan sepak bola dan voli layar proyektor untuk mempererat silaturahmi, kebersamaan, dan interaksi hangat bersama warga.",
    background: [
      "Sepak bola merupakan salah satu olahraga yang memiliki daya tarik besar dan mampu mempertemukan masyarakat dari berbagai latar belakang. Pertandingan sepak bola tidak hanya menjadi sarana hiburan, tetapi juga dapat menjadi media untuk mempererat interaksi sosial dan membangun kebersamaan. Momen Piala Dunia menjadi salah satu kesempatan bagi masyarakat untuk berkumpul dan menikmati pertandingan secara bersama-sama dalam suasana yang meriah.",
      "Dalam rangka meningkatkan kebersamaan dan interaksi sosial masyarakat, mahasiswa KKN menginisiasi kegiatan Nonton Bareng (Nobar) Piala Dunia bersama warga Desa Kendalsari. Kegiatan ini dirancang sebagai sarana hiburan sekaligus wadah untuk mempererat hubungan antara mahasiswa KKN dan masyarakat melalui kegiatan yang santai, positif, dan menyenangkan."
    ],
    implementation: [
      "Kegiatan nobar dilaksanakan dengan mempersiapkan tempat, peralatan penunjang seperti layar dan perangkat pemutar pertandingan, serta menginformasikan waktu pelaksanaan kepada masyarakat.",
      "Kegiatan dilaksanakan pada dini hari menyesuaikan dengan jadwal pertandingan Piala Dunia. Sebelum pertandingan dimulai, warga berkumpul di lokasi yang telah disiapkan dan melakukan persiapan bersama. Selain menayangkan pertandingan sepak bola, tim KKN juga menayangkan siaran pertandingan voli sesuai permintaan warga setempat yang meminati olahraga voli.",
      "Selanjutnya, pertandingan disaksikan bersama hingga selesai dalam suasana yang santai dan penuh antusiasme. Setelah pertandingan selesai, kegiatan ditutup dengan merapikan tempat dan peralatan yang telah digunakan.",
      "Kegiatan Nonton Bareng Piala Dunia diharapkan dapat menjadi salah satu kegiatan sederhana yang mampu mempererat hubungan sosial di masyarakat. Konsep kegiatan ini juga dapat dilaksanakan kembali oleh masyarakat atau organisasi kepemudaan setempat pada berbagai pertandingan olahraga maupun kegiatan bersama lainnya di masa mendatang."
    ],
    pj: "Restu Raidatul Hilal & Julius",
    pjNIM: "114230134 & 113230042",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Pendukung/Nobar/cover.JPG",
    gallery: [
      { url: "/Pendukung/Nobar/cover.JPG", caption: "Kemeriahan Nonton Bareng bersama pemuda dan warga di KUB" },
      { url: "/Pendukung/Nobar/pildun(1).png", caption: "Poster Publikasi Nonton Bareng KKN Kelompok 229" },
      { url: "/Pendukung/Nobar/DSC_1059.JPG", caption: "Dinginnya Kendalsari ditambah hangatnya indomie buatan warga" },
      { url: "/Pendukung/Nobar/DSC_1063.JPG", caption: "Antusiasme warga menyaksikan pertandingan final antara Argentina melawan Spanyol" },
      { url: "/Pendukung/Nobar/DSC_1076.JPG", caption: "Suasana keakraban dan interaksi hangat bersama masyarakat" }
    ],
    date: "Senin, 20 Juli 2026",
    time: "02.00 – 04.30 WIB",
    location: "KUB (Kelompok Usaha Bersama)",
    objectives: [
      "Menyediakan sarana hiburan yang positif dan menyenangkan bagi masyarakat.",
      "Mempererat hubungan dan silaturahmi antara mahasiswa KKN dengan pemuda dan warga desa.",
      "Meningkatkan interaksi serta rasa kebersamaan dan persaudaraan antarwarga lingkungan dusun."
    ],
    output: "Tersedianya sarana hiburan yang hangat, terjalinnya kedekatan emosional dan interaksi sosial yang harmonis antara mahasiswa KKN dan para pemuda serta masyarakat pecinta olahraga di Kadus III.",
    targetBeneficiaries: "Warga dan pemuda yang ikut nonton bersama di KUB",
    driveLink: "https://drive.google.com/drive/folders/1q0UyjZZ1tZ-t8q6oXYkbCCGyyrWB5FNo"
  },
  {
    id: "p-pendukung-2",
    slug: "bugar-ceria-bersama",
    title: "Bugar Ceria Bersama",
    category: "Pendukung",
    shortDesc: "Aktivitas senam kebugaran jasmani ringan dan berirama yang diintegrasikan setelah Posyandu bagi para lansia dan ibu-ibu dusun.",
    background: [
      "Lanjut usia (lansia) merupakan kelompok masyarakat yang perlu mendapatkan perhatian dalam upaya mempertahankan kebugaran dan kualitas hidup. Seiring bertambahnya usia, aktivitas fisik cenderung mengalami penurunan sehingga diperlukan kegiatan yang dapat membantu menjaga kebugaran tubuh, mobilitas, serta semangat untuk tetap aktif dalam kehidupan bermasyarakat.",
      "Sebagai bentuk dukungan terhadap kesehatan lansia, mahasiswa KKN menginisiasi program 'Bugar Ceria Bersama', yaitu kegiatan aktivitas fisik ringan yang dilaksanakan setelah kegiatan Posyandu. Integrasi kegiatan ini diharapkan dapat menjadi rangkaian aktivitas yang berkesinambungan, sehingga setelah memperoleh pelayanan kesehatan di Posyandu, lansia dapat melanjutkan kegiatan dengan aktivitas fisik yang sederhana, menyenangkan, dan sesuai dengan kemampuan masing-masing."
    ],
    implementation: [
      "Kegiatan dilaksanakan setelah rangkaian Posyandu selesai. Peserta diarahkan untuk mengikuti aktivitas secara bersama-sama dengan pendampingan mahasiswa KKN atau kader Posyandu melalui tahapan:",
      "1. Menyiapkan lokasi yang aman dan nyaman serta memastikan peserta berada dalam kondisi yang memungkinkan untuk mengikuti aktivitas fisik ringan.",
      "2. Memberikan pengarahan singkat mengenai tujuan kegiatan dan mengingatkan peserta untuk mengikuti gerakan sesuai kemampuan masing-masing.",
      "3. Melakukan gerakan pemanasan ringan untuk mempersiapkan tubuh sebelum memasuki aktivitas utama.",
      "4. Melakukan rangkaian gerakan sederhana yang berfokus pada mobilitas dan kelenturan tubuh, koordinasi, serta keseimbangan.",
      "Program Bugar Ceria Bersama dirancang agar dapat dilanjutkan oleh kader Posyandu dan masyarakat setelah kegiatan KKN berakhir. Pelaksanaan setelah Posyandu memungkinkan kegiatan ini menjadi bagian dari rangkaian aktivitas rutin masyarakat tanpa memerlukan waktu dan tempat tambahan."
    ],
    pj: "Frista Asmara Senja",
    pjNIM: "121220130",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Pendukung/Senam/cover.JPG",
    gallery: [
      { url: "/Pendukung/Senam/cover.JPG", caption: "Senam Bugar Ceria Bersama lansia dan kader Posyandu" },
      { url: "/Pendukung/Senam/DSC_0762.JPG", caption: "Pemanasan gerakan tubuh bersama instruktur mahasiswa KKN" },
      { url: "/Pendukung/Senam/DSC_0767.JPG", caption: "Gerakan senam kelenturan dan koordinasi motorik lansia" },
      { url: "/Pendukung/Senam/DSC_0771.JPG", caption: "Keceriaan ibu-ibu dan lansia saat senam berirama" },
      { url: "/Pendukung/Senam/DSC_0778.JPG", caption: "Gerakan pendinginan relaksasi otot setelah senam" },
      { url: "/Pendukung/Senam/DSC_0780.JPG", caption: "Senam Bugar Ceria Bersama lansia dan kader Posyandu" },
      { url: "/Pendukung/Senam/DSC_0781.JPG", caption: "Kebersamaan kader posyandu, nakes, dan mahasiswa KKN" }
    ],
    date: "Senin, 6 Juli 2026 & Jumat, 10 Juli 2026",
    time: "11.00 – 12.00 WIB",
    location: "Posyandu RT 14 dan Posyandu RT 20",
    objectives: [
      "Mendorong lansia agar tetap aktif melakukan aktivitas fisik secara rutin dan menyenangkan.",
      "Membantu mempertahankan kebugaran, kelenturan, koordinasi gerak, dan mobilitas tubuh lansia.",
      "Meningkatkan kesadaran lansia mengenai pentingnya olahraga ringan dalam menjaga kualitas hidup dan mencegah penyakit degeneratif.",
      "Membangun interaksi sosial dan suasana gembira antarlansia."
    ],
    output: "Terlaksananya kegiatan senam kebugaran lansia secara rutin yang berkesinambungan dengan Posyandu, meningkatnya kebugaran jasmani dan semangat hidup para lansia di Padukuhan Kendalsari III.",
    targetBeneficiaries: "Lansia dan Ibu-ibu Posyandu Padukuhan Kendalsari III",
    driveLink: "https://drive.google.com/file/d/1FfmgOXNd70bkCz2wCwgdrs-S72l_71qk/view?usp=sharing"
  },
  {
    id: "p-pendukung-3",
    slug: "video-profil-desa",
    title: "Video Profil Desa",
    category: "Pendukung",
    shortDesc: "Produksi video profil sinematik mencakup potensi agrowisata Merapi, fasilitas umum, dan kehidupan sosial budaya Desa Kendalsari.",
    background: [
      "Kadus III Desa Kendalsari memiliki beragam potensi alam, agrowisata lereng Merapi, budaya agraris, serta kelembagaan lokal yang kuat. Namun, penyampaian informasi dan promosi mengenai keunggulan kawasan ini masih terbatas akibat belum tersedianya media publikasi berbasis audio-visual yang representatif.",
      "Menurut Fahlevi dkk. (2022), penyusunan video profil desa merupakan media promosi yang efektif dan efisien untuk menampilkan daya tarik, kebudayaan, serta potensi lokal suatu wilayah kepada publik yang lebih luas melalui integrasi elemen visual dan narasi.",
      "Oleh karena itu, mahasiswa KKN menginisiasi pembuatan Video Profil Desa sebagai media branding digital dan sumber informasi publik yang tepercaya bagi Desa Kendalsari."
    ],
    implementation: [
      "Tahapan pelaksanaan program pembuatan video profil desa meliputi:",
      "1. Pra-Produksi (Observasi dan Penyusunan Naskah): Melakukan wawancara dengan tokoh masyarakat dan perangkat desa, dilanjutkan dengan penyusunan alur cerita (storyboard) serta penulisan naskah narasi.",
      "2. Produksi (Pengambilan Gambar): Melakukan perekaman video (shooting) di titik-titik strategis Kadus III Kendalsari, mencakup pemandangan alam perbukitan, kegiatan pertanian-peternakan, fasilitas desa, serta aktivitas sosial warga.",
      "3. Pasca-Produksi (Editing dan Dubbing): Mengolah potongan video, menambahkan musik latar (backsound), pengisian suara (voice-over), serta menyisipkan teks keterangan pendukung.",
      "4. Penyerahan dan Publikasi: Menyerahkan berkas video final kepada pihak perangkat desa serta mengunggahnya pada platform media sosial dan kanal digital agar dapat diakses oleh publik secara bebas.",
      "Kehadiran video profil ini menjadi aset digital jangka panjang yang dapat digunakan oleh pemerintah desa dan pemuda setempat untuk memperluas jangkauan promosi desa secara berkelanjutan di era digital."
    ],
    pj: "Mohammad Atilla Danadyaksa",
    pjNIM: "123230134",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Pendukung/Vidprof/vidprof1.png",
    videoUrl: "https://youtu.be/oW2mzLiFdEI",
    youtubeEmbedUrl: "https://www.youtube.com/embed/oW2mzLiFdEI",
    gallery: [
      { url: "/Pendukung/Vidprof/vidprof1.png", caption: "Take video dengan Bapak Kepala Desa" }
    ],
    date: "Sabtu, 18 Juli 2026 – Selasa, 28 Juli 2026",
    time: "09.00 – 17.00 WIB",
    location: "Desa Kendalsari, Kecamatan Kemalang, Kabupaten Klaten",
    objectives: [
      "Mendokumentasikan gambaran umum desa, infrastruktur, mata pencaharian warga, serta produk inovasi lokal ke dalam format audio-visual yang menarik dan dinamis.",
      "Menyediakan sarana marketing tools desa dalam menarik perhatian wisatawan, mitra pembangunan, maupun instansi terkait.",
      "Menciptakan aset dokumentasi visual digital jangka panjang bagi pemerintah desa."
    ],
    output: "Dihasilkannya satu berkas video profil sinematik Desa Kendalsari berdurasi proporsional yang memvisualisasikan keunggulan agrowisata, tradisi gotong royong warga, dan potensi pembangunan padukuhan.",
    targetBeneficiaries: "Pemerintah Desa Kendalsari dan masyarakat umum",
    driveLink: "https://drive.google.com/drive/folders/1-30HHTFTBc3cBfY-9jRwmIJRySECUl9J?usp=sharing"
  },
  {
    id: "p-pendukung-4",
    slug: "bimbel-ke-posko",
    title: "Bimbel Ke Posko",
    category: "Pendukung",
    shortDesc: "Penyediaan ruang belajar alternatif dan pendampingan mengerjakan PR serta penguatan materi pelajaran bagi siswa SD di Posko KKN.",
    background: [
      "Pendidikan merupakan fondasi utama dalam membangun sumber daya manusia yang berkualitas. Proses pembelajaran pada anak usia dini hendaknya dilakukan dengan tujuan memberikan konsep-konsep dasar yang memiliki kebermaknaan bagi anak melalui pengalaman nyata yang memungkinkan anak untuk menunjukkan aktivitas dan rasa ingin tahu (curiosity) secara optimal (Yusuf, 2024).",
      "Melihat kondisi tersebut, mahasiswa Kuliah Kerja Nyata (KKN) tergerak untuk menghadirkan solusi nyata melalui Program Bimbel ke Posko. Program ini merupakan inisiatif yang menyediakan ruang belajar alternatif bagi anak-anak sekolah dasar di Desa Kendalsari. Kegiatan ini dilaksanakan di posko KKN sebagai wadah bagi siswa untuk memperoleh pendampingan belajar dari mahasiswa dalam suasana yang menyenangkan dan interaktif."
    ],
    implementation: [
      "Tahapan pelaksanaan program bimbingan belajar ini dilakukan melalui:",
      "1. Mahasiswa menyiapkan ruang belajar yang nyaman, perlengkapan alat tulis, dan referensi materi pelajaran di posko KKN.",
      "2. Mahasiswa menyambut anak-anak dengan ramah dan melakukan sesi perkenalan untuk mencairkan suasana agar anak-anak merasa nyaman.",
      "3. Mahasiswa mendampingi anak-anak dalam mendalami materi pelajaran sekolah serta membantu menyelesaikan tugas-tugas PR.",
      "4. Mahasiswa menyisipkan permainan edukatif untuk menjaga semangat belajar agar proses belajar tidak membosankan.",
      "Program Bimbel ke Posko merupakan bentuk kepedulian nyata mahasiswa KKN terhadap dunia pendidikan di Desa Kendalsari. Kegiatan ini bukan sekadar bimbingan belajar biasa, melainkan upaya untuk menciptakan lingkungan belajar yang menyenangkan, membangun motivasi, dan membuka akses pendidikan yang lebih luas bagi anak-anak desa."
    ],
    pj: "Sebastian George De Caesar & Mohammad Atilla Danadyaksa",
    pjNIM: "112230067 & 123230134",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Pendukung/Bimbel/cover.JPG",
    gallery: [
      { url: "/Pendukung/Bimbel/cover.JPG", caption: "Pendampingan belajar dan bimbel ceria di Posko KKN 229" },
      { url: "/Pendukung/Bimbel/DSC_1512.JPG", caption: "Permainan edukatif mengasah logika dan kreativitas anak" },
      { url: "/Pendukung/Bimbel/DSC_1526.JPG", caption: "Pemberian hadiah kepada adik-adik yang berhasil menjawab pertanyaan dari Mahasiswa KKN" },
      { url: "/Pendukung/Bimbel/DSC_1546.JPG", caption: "Permainan edukatif mengasah logika dan kreativitas anak" },
      { url: "/Pendukung/Bimbel/DSC_1604.JPG", caption: "Foto bersama adik-adik peserta Bimbel ke Posko" },
      { url: "/Pendukung/Bimbel/DSC_1915.JPG", caption: "Eksperimen menggunakan telur dan air garam" }
    ],
    date: "Kamis, 23 Juli 2026 & Sabtu, 25 Juli 2026",
    time: "14.00 – 16.00 WIB",
    location: "Posko KKN UPN Kelompok 229",
    objectives: [
      "Meningkatkan pemahaman siswa terhadap materi pelajaran sekolah dan membantu penyelesaian tugas PR.",
      "Menumbuhkan semangat, motivasi, dan rasa percaya diri anak-anak dalam belajar.",
      "Membangun hubungan akrab, saling percaya, dan kepedulian antara mahasiswa KKN dan anak-anak warga sekitar.",
      "Menyediakan fasilitas ruang belajar alternatif yang aman, nyaman, dan mudah diakses anak-anak desa."
    ],
    output: "Meningkatnya pemahaman akademis siswa sekolah dasar, tumbuhnya semangat belajar anak-anak di luar jam sekolah, serta terwujudnya wadah belajar komunitas yang ramah anak di Padukuhan Kendalsari III.",
    targetBeneficiaries: "Anak-anak Dusun III Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1IjfgQF4YGhPnaYyYJU68PEcKZ8Gt_8M7?usp=drive_link"
  },
  {
    id: "p-pendukung-5",
    slug: "mengaji-ceria-berbagi-mulia",
    title: "Mengaji Ceria, Berbagi Mulia",
    category: "Pendukung",
    shortDesc: "Pendampingan belajar membaca Al-Qur'an secara bergilir di 10 mushola disertai aksi berbagi penyerahan Al-Qur'an bagi santri TPA.",
    background: [
      "Padukuhan Kendalsari III memiliki banyak Taman Pendidikan Al-Qur'an (TPA) yang menjadi wadah bagi anak-anak untuk belajar mengaji, namun kegiatan belajar mengaji seringkali dirasa kurang menarik apabila dilakukan dengan metode yang monoton. Selain itu, ketersediaan Al-Qur'an di beberapa mushola masih perlu didukung agar kegiatan keagamaan dapat berjalan secara berkelanjutan.",
      "Melihat kondisi tersebut, mahasiswa KKN menginisiasi program Mengaji Ceria sebagai upaya menghadirkan suasana belajar Al-Qur'an yang lebih interaktif dan menyenangkan bagi anak-anak, sekaligus memberikan dukungan sarana belajar bagi mushola setempat."
    ],
    implementation: [
      "Kegiatan dilakukan dengan mengunjungi 10 TPA yang tersebar di Padukuhan Kendalsari III (RT 14 sampai RT 23). Di setiap lokasi, mahasiswa KKN mendampingi anak-anak belajar mengaji menggunakan metode interaktif agar proses belajar terasa lebih hidup dan tidak membosankan.",
      "Sebagai bentuk dukungan terhadap keberlangsungan kegiatan keagamaan, mahasiswa KKN turut menyerahkan mushaf Al-Qur'an kepada setiap mushola yang menjadi lokasi kegiatan.",
      "Melalui program ini, anak-anak memperoleh pengalaman belajar mengaji yang lebih menyenangkan sehingga diharapkan dapat menumbuhkan semangat mereka untuk terus belajar Al-Qur'an. Penyerahan Al-Qur'an juga memberikan manfaat langsung bagi mushola berupa tersedianya sarana belajar yang dapat digunakan secara berkelanjutan, tidak hanya oleh anak-anak yang mengikuti kegiatan, tetapi juga oleh jamaah dan generasi berikutnya."
    ],
    pj: "Wahdatul Fuadiyah Yatalaththof",
    pjNIM: "141230477",
    pjRole: "Pelaksana: Semua Anggota Kelompok",
    image: "/Pendukung/Mengaji/cover.JPG",
    gallery: [
      { url: "/Pendukung/Mengaji/cover.JPG", caption: "Kegiatan Mengaji Ceria dan bimbingan tajwid bersama santri TPA" },
      { url: "/Pendukung/Mengaji/DSC_2168.JPG", caption: "Pemberian hadiah kepada adik-adik yang berhasil menjawab kuis" },
      { url: "/Pendukung/Mengaji/DSC_2191.JPG", caption: "Kegiatan Mengaji Ceria dan bimbingan tajwid bersama santri TPA" },
      { url: "/Pendukung/Mengaji/DSC_2211.JPG", caption: "Penyerahan mushaf Al-Qur'an kepada pengurus mushola" }
    ],
    date: "6, 8, 9, 10, 13, 14, 15, 17 Juli 2026",
    time: "15.30 – 17.00 WIB",
    location: "Musholla RT 14, 15, 16, 17, 18, 19, 20, 21, 22, dan 23",
    objectives: [
      "Menghadirkan suasana belajar Al-Qur'an yang interaktif dan menyenangkan bagi santri anak-anak di 10 mushola.",
      "Memberikan bimbingan tajwid dan makharijul huruf yang efektif dan ceria.",
      "Menyerahkan mushaf Al-Qur'an untuk mendukung sarana belajar mengaji berkelanjutan di setiap mushola.",
      "Mempererat silaturahmi keagamaan antara mahasiswa, pengurus mushola, dan warga padukuhan."
    ],
    output: "Terlaksananya bimbingan mengaji ceria di 10 mushola RT 14 s/d 23, penyerahan mushaf Al-Qur'an sebagai sarana wakaf ibadah jangka panjang, serta meningkatnya kecintaan anak-anak dalam belajar membaca Al-Qur'an.",
    targetBeneficiaries: "Anak-anak di TPA Kadus 3 Kendalsari",
    driveLink: "https://drive.google.com/drive/folders/1d7IwOIv42JN1gOW2PGqcUYZP3Up7L25u?usp=drive_link"
  }
];

// ==========================================
// LINI MASA KEGIATAN KHUSUS (PENERJUNAN, PROKER UTAMA, PENARIKAN)
// ==========================================
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "tl-penerjunan",
    date: "01 Juli 2026",
    day: "Rabu",
    title: "Penerjunan Resmi KKN Angkatan 84",
    desc: "Upacara penerjunan resmi mahasiswa KKN UPN 'Veteran' Yogyakarta Angkatan 84 Kelompok 229 di Balai Desa Kendalsari dan koordinasi awal bersama Kepala Padukuhan Kendalsari III.",
    category: "Penerjunan",
    location: "Balai Desa Kendalsari",
    status: "Selesai"
  },
  {
    id: "tl-proker-kesehatan",
    date: "06 & 10 Juli 2026",
    day: "Senin & Jumat",
    title: "Pelaksanaan Proker Utama: Kesehatan Masyarakat",
    desc: "Pelayanan pemeriksaan kesehatan dasar (tekanan darah/tensi dan kadar gula darah) serta konsultasi dan edukasi pola hidup sehat kolaborasi bersama Posyandu.",
    category: "Proker Utama",
    location: "Posyandu RT 14 & Posyandu RT 20",
    status: "Selesai"
  },
  {
    id: "tl-proker-poskamling",
    date: "12 & 15 Juli 2026",
    day: "Minggu & Rabu",
    title: "Pelaksanaan Proker Utama: Renovasi Pos Kamling",
    desc: "Perbaikan fasilitas fisik pos ronda siskamling bersama warga melalui pengecatan, pembersihan, penataan dekorasi 17 Agustus, serta pemasangan bingkai kenang-kenangan.",
    category: "Proker Utama",
    location: "Poskamling RT 14 & Poskamling RT 18",
    status: "Selesai"
  },
  {
    id: "tl-proker-hari-anak",
    date: "26 Juli 2026",
    day: "Minggu",
    title: "Pelaksanaan Proker Utama: Festival Hari Anak",
    desc: "Peringatan Hari Anak Nasional yang dimeriahkan dengan jalan santai, senam bersama, aneka perlombaan games edukatif interaktif, dan pembagian doorprize ceria.",
    category: "Proker Utama",
    location: "Lapangan samping SDN 1 Kendalsari",
    status: "Selesai"
  },
  {
    id: "tl-penarikan",
    date: "30 Juli 2026",
    day: "Kamis",
    title: "Penarikan Resmi Mahasiswa KKN AD.84.229",
    desc: "Penutupan masa pengabdian dan penarikan resmi mahasiswa KKN Kelompok 229 oleh DPL (Ir. Aditya Pandu Wicaksono, S.Si., M.Sc.) serta pamitan kepada seluruh jajaran perangkat desa dan masyarakat Kendalsari III.",
    category: "Penarikan",
    location: "Kantor Kelurahan / Balai Desa Kendalsari",
    status: "Selesai"
  }
];
