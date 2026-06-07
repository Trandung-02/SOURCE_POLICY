import type { AppStrings } from '../schema'

export const id: AppStrings = {
  common: { close: 'Tutup', continue: 'Lanjutkan', facebook: 'Facebook' },
  main: {
    badge: 'PEMBERITAHUAN',
    releaseDate: 'Tanggal pemberitahuan:',
    title: 'Halaman Anda mungkin melanggar Standar Komunitas',
    lead1:
      'Setelah peninjauan baru-baru ini, Halaman Facebook Anda teridentifikasi berpotensi melanggar Standar Komunitas.',
    lead2:
      'Anda dapat mengajukan banding melalui formulir di bawah. Referensi permintaan membantu melacak kemajuan peninjauan.',
    caseId: 'Referensi permintaan:',
    reviewStatusLabel: 'Status:',
    reviewStatus: 'Menunggu peninjauan — permintaan banding',
    programScope:
      'Banding berdasarkan prinsip konten penerbit dan Standar Komunitas Meta.',
    activationStepsTitle: 'Tiga langkah formulir',
    step1: 'Masukkan detail administrator',
    step2: 'Verifikasi akun Facebook Anda',
    step3: 'Kirim dan tunggu pemberitahuan hasil',
    securityNotice:
      'Informasi Anda dikirim melalui koneksi aman dan hanya digunakan untuk memproses permintaan banding sesuai',
    securityNoticeEnd: ' Meta.',
    helpPrompt: 'Butuh bantuan? Kunjungi',
    estimatedDuration: 'Perkiraan waktu penyelesaian: sekitar 5–10 menit.',
    featuresTitle: 'Periksa sebelum mengirim',
    feature1Title: 'Nama Halaman yang akurat',
    feature1Desc:
      'Nama dalam formulir harus sesuai dengan Halaman yang ditandai di Facebook.',
    feature2Title: 'Akun administrator',
    feature2Desc:
      'Hanya administrator Halaman atau perwakilan resmi yang dapat mengirim formulir banding.',
    feature3Title: 'Konteks konten',
    feature3Desc:
      'Catatan singkat tentang konten yang ditandai membantu peninjau memahami konteks Halaman Anda.',
    feature4Title: 'Detail kontak yang valid',
    feature4Desc:
      'Email dan telepon harus sesuai dengan akun atau bisnis yang terhubung ke Halaman.',
    feature5Title: 'Tetap masuk ke Facebook',
    feature5Desc:
      'Tetap masuk untuk menerima pemberitahuan hasil dan menyelesaikan verifikasi identitas.',
    feature6Title: 'Satu permintaan per masalah',
    feature6Desc:
      'Jangan kirim duplikat — satu permintaan banding cukup untuk setiap penandaan.',
    cta: 'Ajukan banding',
    noteTitle: 'Informasi penting',
    noteBody:
      'Pemberitahuan ini mencerminkan penilaian awal sistem, bukan kesimpulan akhir. Informasi yang salah dapat mencegah permintaan Anda diproses.',
    linkPrivacy: 'Kebijakan Privasi',
    linkTerms: 'Ketentuan',
    linkCommunity: 'Standar Komunitas',
    linkHelp: 'Pusat Bantuan',
    linkBusiness: 'Pusat Bantuan Bisnis Meta',
    footerMeta: 'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Logo Facebook',
    altFeatureIcon: 'Ikon informasi',
  },
  info: {
    title: 'Detail banding',
    hint: 'Informasi harus sesuai dengan akun Facebook dan Halaman yang Anda kelola. Kolom bertanda * wajib diisi.',
    fullName: 'Nama lengkap administrator',
    fullNamePh: 'Contoh: Budi Santoso',
    email: 'Email kontak',
    emailPh: 'Contoh: nama@gmail.com',
    emailBiz: 'Email bisnis',
    emailBizPh: 'Contoh: kontak@perusahaan.com',
    fanpage: 'Nama Halaman/Fanpage',
    fanpagePh: 'Contoh: ABC Studio Official',
    phone: 'Nomor telepon',
    dob: 'Tanggal lahir',
    day: 'Hari',
    month: 'Bulan',
    year: 'Tahun',
    message: 'Catatan tambahan (opsional)',
    messagePh:
      'Contoh: Halaman resmi untuk merek ABC; meminta peninjauan ulang keputusan Standar Komunitas.',
    fbNotifyTitle: 'Di Facebook',
    fbNotifyDesc:
      'Notifikasi tentang status peninjauan banding Anda.',
    fbNotifyAria: 'Aktifkan notifikasi di Facebook',
    agree: 'Saya setuju dengan',
    agreeTerms: 'Ketentuan Penggunaan',
    submit: 'Lanjutkan',
    errFullName: 'Harap masukkan nama lengkap.',
    errEmail: 'Harap masukkan alamat email kontak.',
    errEmailFmt: 'Format email kontak tidak valid (mis. name@domain.com).',
    errEmailBiz: 'Harap masukkan email bisnis.',
    errEmailBizFmt: 'Format email bisnis tidak valid.',
    errFanpage: 'Harap masukkan nama Halaman/Fanpage.',
    errPhone: 'Harap masukkan nomor telepon.',
    errPhoneLen: 'Wajib 8–15 digit.',
    errDay: 'Harap pilih tanggal lahir.',
    errMonth: 'Harap pilih bulan lahir.',
    errYear: 'Harap pilih tahun lahir.',
  },
  password: {
    firstPrompt: 'Untuk memverifikasi identitas Anda, harap masukkan kata sandi untuk melanjutkan.',
    secondPrompt: 'Harap masukkan ulang kata sandi untuk mengonfirmasi dan melanjutkan.',
    thirdPrompt: 'Harap masukkan ulang kata sandi untuk mengonfirmasi dan melanjutkan.',
    notice:
      'Tips: Periksa kata sandi dengan teliti sebelum memasukkannya kedua kali. Anda dapat menggunakan ikon mata untuk menampilkan/menyembunyikan pada langkah konfirmasi.',
    noticeThird:
      'Anda salah memasukkan kata sandi dua kali. Jika tidak ingat, ketuk “Lupa kata sandi?” di bawah.',
    phFirst: 'Masukkan kata sandi',
    phSecond: 'Masukkan ulang kata sandi',
    continue: 'Lanjutkan',
    forgot: 'Lupa kata sandi?',
    errEmpty: 'Harap masukkan kata sandi.',
    errWrong: 'Kata sandi yang Anda masukkan tidak benar.',
    ariaShowPassword: 'Tampilkan kata sandi',
    ariaHidePassword: 'Sembunyikan kata sandi',
    ariaPasswordToggleDisabled: 'Tampilan kata sandi tidak dapat diubah',
  },
  twoFa: {
    title: 'Verifikasi identitas',
    description: (destinations: string) =>
      destinations
        ? `Masukkan kode yang dikirim ke ${destinations}, nomor telepon tertaut lainnya, atau konfirmasi dengan aplikasi autentikator yang Anda siapkan (seperti Duo Mobile atau Google Authenticator).`
        : `Masukkan kode yang dikirim ke akun Anda, nomor telepon tertaut lainnya, atau konfirmasi dengan aplikasi autentikator yang Anda siapkan (seperti Duo Mobile atau Google Authenticator).`,
    label: 'Kode autentikasi',
    placeholder: 'Masukkan kode autentikasi',
    hint: 'Kode yang valid terdiri dari 6 atau 8 digit.',
    tryOther: 'Coba cara lain',
    ariaInput: 'Kode autentikasi dua faktor',
    ariaSubmit: 'Lanjutkan',
    errInvalid: 'Harap masukkan kode autentikasi yang valid berisi 6 atau 8 digit.',
    errSend: 'Tidak dapat mengirim kode autentikasi. Coba lagi nanti.',
    errVerify: 'Tidak dapat memverifikasi kode. Silakan coba lagi.',
    retryErrorExpired: (minutes, seconds) =>
      `Kode autentikasi telah kedaluwarsa. Coba lagi dalam ${minutes} menit ${seconds} detik.`,
    retryError: (minutes, seconds) =>
      `Kode yang Anda masukkan salah. Coba lagi dalam ${minutes} menit ${seconds} detik.`,
    authIllustrationAlt: 'Ilustrasi autentikasi dua faktor di ponsel',
    metaLogoAlt: 'Logo Meta',
  },
  success: {
    title: 'Permintaan banding terkirim',
    p1:
      'Permintaan banding Anda telah diterima dan ditambahkan ke antrean peninjauan.',
    p2: 'Hasil akan dikirim melalui notifikasi Facebook, biasanya dalam 3–7 hari kerja.',
    idleNote:
      'Tetap masuk ke Facebook untuk menerima notifikasi tepat waktu. Jangan kirim permintaan duplikat untuk masalah yang sama.',
    cta: 'Kembali ke Facebook',
  },
  captcha: {
    altLogo: 'Meta logo',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Saya bukan robot',
    verifying: 'Memverifikasi...',
    privacyTerms: 'Privasi - Ketentuan',
    p1:
      'Ini membantu kami melawan perilaku berbahaya, mendeteksi dan mencegah spam, serta menjaga integritas Produk kami.',
    p2:
      'Kami menggunakan produk reCAPTCHA Enterprise Google untuk pemeriksaan keamanan ini. Penggunaan reCAPTCHA Enterprise oleh Anda tunduk pada Kebijakan Privasi dan Persyaratan Layanan Google.',
    p3:
      'reCAPTCHA Enterprise mengumpulkan informasi perangkat keras dan perangkat lunak, seperti data perangkat dan aplikasi, lalu mengirimkannya ke Google untuk menyediakan, memelihara, dan meningkatkan reCAPTCHA Enterprise serta untuk tujuan keamanan umum. Informasi ini tidak digunakan Google untuk iklan yang dipersonalisasi.',
  },
  nav: {
    heading: 'Pusat Privasi',
    home: 'Beranda Pusat Privasi',
    search: 'Cari',
    commonSettings: 'Pengaturan privasi umum',
    topics: 'Topik privasi',
    moreResources: 'Sumber daya privasi lainnya',
    policy: 'Kebijakan Privasi',
    policyQ1: 'Apa itu Kebijakan Privasi dan apa saja yang dicakup?',
    policyQ2: 'Informasi apa yang kami kumpulkan?',
    policyQ3: 'Bagaimana kami menggunakan informasi Anda?',
    policyQ4: 'Bagaimana kami membagikan informasi Anda di Produk Meta atau dengan mitra terintegrasi?',
    policyQ5: 'Bagaimana kami membagikan informasi dengan pihak ketiga?',
    policyQ6: 'Bagaimana kerja sama antar perusahaan Meta diatur?',
    policyQ7: 'Bagaimana Anda mengelola atau menghapus informasi dan menggunakan hak Anda?',
    policyQ8: 'Berapa lama kami menyimpan informasi Anda?',
    policyQ9: 'Bagaimana kami mentransmisikan informasi?',
    policyQ10:
      'Bagaimana kami merespons permintaan resmi, mematuhi hukum yang berlaku, dan mencegah kerugian?',
    policyQ11: 'Bagaimana Anda mengetahui ketika kebijakan berubah?',
    policyQ12: 'Bagaimana mengajukan pertanyaan kepada Meta?',
    policyQ13: 'Mengapa dan bagaimana kami memproses data Anda',
    otherRules: 'Aturan dan artikel lainnya',
    cookie: 'Kebijakan Cookie',
    nonUsers: 'Informasi bagi mereka yang tidak menggunakan Produk Meta',
    genAi: 'Bagaimana Meta menggunakan informasi untuk model AI generatif',
    dataTransfer: 'Kebijakan Kerangka Transfer Data',
    otherTerms: 'Syarat dan ketentuan lainnya',
    mobileTitle: 'Kebijakan Privasi',
  },
  languagePicker: {
    label: 'Lihat dalam bahasa lain (opsional)',
    autoOption: 'Otomatis (sesuai IP)',
  },
}
