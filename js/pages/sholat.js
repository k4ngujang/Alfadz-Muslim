export const render = () => `
<div id="sholat-main-screen" class="transition-all duration-300 relative z-20">
    <div class="bg-white px-6 py-4 sticky top-0 z-[100] flex items-center justify-between border-b border-gray-100">
        <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0">
             <i data-lucide="arrow-left" class="w-5 h-5 text-gray-700"></i>
             <span class="text-sm font-bold text-gray-700">Kembali</span>
        </a>
        <div class="flex flex-col text-right">
            <h1 class="text-xl font-bold text-gray-800">Panduan Sholat</h1>
            <p class="text-xs text-gray-500">Niat & Tata Cara Lengkap</p>
        </div>
    </div>
    
    <div class="container mx-auto px-5 py-8 pb-32 w-full space-y-4">
        <!-- Sholat Wajib Card -->
        <button onclick="openSholatCategory('wajib')" class="w-full text-left bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-2xl border border-emerald-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="shield-check" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Sholat Wajib</h3>
                <p class="text-xs text-emerald-100 mt-1 opacity-90">Niat & Tata Cara Sholat Fardhu 5 Waktu.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Sholat Sunnah Card -->
        <button onclick="openSholatCategory('sunnah')" class="w-full text-left bg-gradient-to-r from-sky-500 to-sky-600 p-6 rounded-2xl border border-sky-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="star" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Sholat Sunnah</h3>
                <p class="text-xs text-sky-100 mt-1 opacity-90">Niat Tahajjud, Dhuha, Qobliyah & Ba'diyah.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Sholat Jama' & Qashar Card -->
        <button onclick="openSholatCategory('jama')" class="w-full text-left bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-2xl border border-amber-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="map-pin" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Jama' & Qashar</h3>
                <p class="text-xs text-amber-100 mt-1 opacity-90">Panduan Lengkap Ta'dim & Ta'khir.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Sholat Hari Raya Card -->
        <button onclick="openSholatCategory('hari-raya')" class="w-full text-left bg-gradient-to-r from-rose-500 to-rose-600 p-6 rounded-2xl border border-rose-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="calendar" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Sholat Hari Raya</h3>
                <p class="text-xs text-rose-100 mt-1 opacity-90">Niat & Tata Cara Idul Fitri & Idul Adha.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>
    </div>
</div>

<div id="sholat-category-screen" class="hidden bg-[#F8F9FB] min-h-screen fixed inset-0 z-[60] transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[110] flex items-center gap-4 border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col flex-1 overflow-hidden">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="sholat-category-title">Panduan</h1>
        </div>
    </div>
    
    <div id="niat-tabs-container" class="px-4 py-4 sticky top-[72px] z-40 bg-[#F8F9FB]">
        <div class="flex bg-white p-1 rounded-xl border border-gray-200 ">
            <button onclick="switchSholatTab('niat')" id="btnSholatNiat" class="flex-1 py-2.5 rounded-lg text-sm font-bold bg-primary text-white  transition-all">Niat</button>
            <button onclick="switchSholatTab('tata-cara')" id="btnSholatCara" class="flex-1 py-2.5 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all">Tata Cara</button>
        </div>
    </div>

    <div class="container mx-auto px-4 py-2 pb-32 w-full flex-1 overflow-y-auto" id="sholat-list-container">
    </div>
</div>
`;

export const init = () => {
    let activeCategory = 'wajib';
    let activeTab = 'niat';

    const niatWajib = [
        { name: "Niat Sholat Subuh (2 Rakaat)", arab: "أُصَلِّيْ فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", latin: "Ushalli fardhash shubhi rak'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala.", arti: "Saya berniat sholat fardu subuh dua rakaat menghadap kiblat karena Allah Ta'ala." },
        { name: "Niat Sholat Dzuhur (4 Rakaat)", arab: "أُصَلِّيْ فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", latin: "Ushalli fardhadzh dzhuhri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.", arti: "Saya berniat sholat fardu dzuhur empat rakaat menghadap kiblat karena Allah Ta'ala." },
        { name: "Niat Sholat Ashar (4 Rakaat)", arab: "أُصَلِّيْ فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", latin: "Ushalli fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.", arti: "Saya berniat sholat fardu ashar empat rakaat menghadap kiblat karena Allah Ta'ala." },
        { name: "Niat Sholat Maghrib (3 Rakaat)", arab: "أُصَلِّيْ فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", latin: "Ushalli fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.", arti: "Saya berniat sholat fardu maghrib tiga rakaat menghadap kiblat karena Allah Ta'ala." },
        { name: "Niat Sholat Isya (4 Rakaat)", arab: "أُصَلِّيْ فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى", latin: "Ushalli fardhal 'isyaa-i arba'a raka'aatin mustaqbilal qiblati adaa-an lillaahi ta'aala.", arti: "Saya berniat sholat fardu isya empat rakaat menghadap kiblat karena Allah Ta'ala." },
    ];

    const niatSunnah = [
        { 
            name: "Sunnah Qobliyah Subuh (Fajar)", 
            arab: "أُصَلِّيْ سُنَّةَ الصُّبْحِ رَكْعَتَيْنِ قَبْلِيَّةً مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatash shubhi rak'ataini qabliyyatan mustaqbilal qiblati lillaahi ta'aala.", 
            arti: "Saya berniat sholat sunnah sebelum subuh dua rakaat menghadap kiblat karena Allah Ta'ala.",
            desc: "Dikerjakan 2 rakaat sebelum sholat fardu Subuh. Memiliki keutamaan lebih baik dari dunia dan seisinya."
        },
        { 
            name: "Sunnah Qobliyah Dzuhur", 
            arab: "أُصَلِّيْ سُنَّةَ الظُّهْرِ رَكْعَتَيْنِ قَبْلِيَّةً مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatadh dzhuhri rak'ataini qabliyyatan mustaqbilal qiblati lillaahi ta'aala.", 
            arti: "Saya berniat sholat sunnah sebelum dzuhur dua rakaat menghadap kiblat karena Allah Ta'ala.",
            desc: "Dikerjakan sebelum sholat fardu Dzuhur. Bisa dilakukan 2 atau 4 rakaat."
        },
        { 
            name: "Sunnah Ba'diyah Dzuhur", 
            arab: "أُصَلِّيْ سُنَّةَ الظُّهْرِ رَكْعَتَيْنِ بَعْدِيَّةً مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatadh dzhuhri rak'ataini ba'diyyatan mustaqbilal qiblati lillaahi ta'aala.", 
            arti: "Saya berniat sholat sunnah sesudah dzuhur dua rakaat menghadap kiblat karena Allah Ta'ala.",
            desc: "Dikerjakan setelah sholat fardu Dzuhur. Bisa dilakukan 2 atau 4 rakaat."
        },
        { 
            name: "Sunnah Ba'diyah Maghrib", 
            arab: "أُصَلِّيْ سُنَّةَ الْمَغْرِبِ رَكْعَتَيْنِ بَعْدِيَّةً مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatal maghribi rak'ataini ba'diyyatan mustaqbilal qiblati lillaahi ta'aala.", 
            arti: "Saya berniat sholat sunnah sesudah maghrib dua rakaat menghadap kiblat karena Allah Ta'ala.",
            desc: "Dikerjakan setelah sholat fardu Maghrib."
        },
        { 
            name: "Sunnah Ba'diyah Isya", 
            arab: "أُصَلِّيْ سُنَّةَ الْعِشَاءِ رَكْعَتَيْنِ بَعْدِيَّةً مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatal 'isyaa-i rak'ataini ba'diyyatan mustaqbilal qiblati lillaahi ta'aala.", 
            arti: "Saya berniat sholat sunnah sesudah isya dua rakaat menghadap kiblat karena Allah Ta'ala.",
            desc: "Dikerjakan setelah sholat fardu Isya."
        },
        { name: "Niat Sholat Tahajjud", arab: "أُصَلِّيْ سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", latin: "Ushalli sunnatat tahajjudi rak'ataini mustaqbilal qiblati lillaahi ta'aala.", arti: "Saya berniat sholat sunnah tahajjud dua rakaat menghadap kiblat karena Allah Ta'ala.", desc: "Dikukuhkan (sunnah muakkad) dikerjakan di waktu malam hari setelah tidur." },
        { name: "Niat Sholat Dhuha", arab: "أُصَلِّيْ سُنَّةَ الضُّحَى رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", latin: "Ushalli sunnatadh dhuhaa rak'ataini mustaqbilal qiblati lillaahi ta'aala.", arti: "Saya berniat sholat sunnah dhuha dua rakaat menghadap kiblat karena Allah Ta'ala.", desc: "Dikerjakan pagi hari saat matahari mulai meninggi (sekitar pukul 07.00 - 11.00)." },
        { name: "Niat Sholat Hajat", arab: "أُصَلِّيْ سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", latin: "Ushalli sunnatal haajati rak'ataini lillaahi ta'aala.", arti: "Saya berniat sholat sunnah hajat dua rakaat karena Allah Ta'ala.", desc: "Dikerjakan ketika memiliki keinginan atau hajat khusus kepada Allah." },
        { name: "Niat Sholat Witir", arab: "أُصَلِّيْ سُنَّةَ الْوِتْرِ رَكْعَةً مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", latin: "Ushalli sunnatal witri rak'atan mustaqbilal qiblati lillaahi ta'aala.", arti: "Saya berniat sholat sunnah witir satu rakaat menghadap kiblat karena Allah Ta'ala.", desc: "Sholat penutup yang jumlah rakaatnya ganjil. Dikerjakan setelah Isya atau Tahajjud." },
        { name: "Niat Sholat Tobat", arab: "أُصَلِّيْ سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ لِلّٰهِ تَعَالَى", latin: "Ushalli sunnatat taubati rak'ataini mustaqbilal qiblati lillaahi ta'aala.", arti: "Saya berniat sholat sunnah tobat dua rakaat menghadap kiblat karena Allah Ta'ala.", desc: "Dikerjakan untuk memohon ampunan atas dosa-dosa yang telah dilakukan." },
        { name: "Niat Sholat Istikharah", arab: "أُصَلِّيْ سُنَّةَ الْاِسْتِخَارَةِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى", latin: "Ushalli sunnatal istikhaarati rak'ataini lillaahi ta'aala.", arti: "Saya berniat sholat sunnah istikharah dua rakaat karena Allah Ta'ala.", desc: "Dikerjakan ketika memohon petunjuk pilihan terbaik kepada Allah." },
    ];

    const niatHariRaya = [
        { 
            name: "Niat Sholat Idul Fitri", 
            arab: "أُصَلِّي سُنَّةً لِعِيْدِ الْفِطْرِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ (مَأْمُوْمًا/إِمَامًا) لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatal li'iidil fithri rak'ataini mustaqbilal qiblati (ma'muuman/imaaman) lillaahi ta'aala.", 
            arti: "Saya niat sholat sunnah Idul Fitri dua rakaat menghadap kiblat (menjadi makmum/imam) karena Allah Ta'ala.",
            desc: "Dikerjakan pada tanggal 1 Syawal sebanyak 2 rakaat secara berjamaah." 
        },
        { 
            name: "Niat Sholat Idul Adha", 
            arab: "أُصَلِّي سُنَّةً لِعِيْدِ الْأَضْحَى رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ (مَأْمُوْمًا/إِمَامًا) لِلّٰهِ تَعَالَى", 
            latin: "Ushalli sunnatal li'iidil adhaa rak'ataini mustaqbilal qiblati (ma'muuman/imaaman) lillaahi ta'aala.", 
            arti: "Saya niat sholat sunnah Idul Adha dua rakaat menghadap kiblat (menjadi makmum/imam) karena Allah Ta'ala.",
            desc: "Dikerjakan pada tanggal 10 Dzulhijjah sebanyak 2 rakaat secara berjamaah." 
        }
    ];

    const niatJama = [
        { name: "Jama' Ta'dim Dzuhur & Ashar", arab: "أُصَلِّي فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مَجْمُوْعًا إِلَيْهِ الْعَصْرُ جَمْعَ تَقْدِيْمٍ لِلّٰهِ تَعَالَى", latin: "Ushalli fardhadh dhuhri arba'a raka'aatin majmuu'an ilaihil 'ashru jam'a taqdiimin lillaahi ta'aala.", arti: "Saya berniat sholat dzuhur empat rakaat digabungkan dengan ashar, jama' ta'dim karena Allah Ta'ala.", desc: "Mengumpulkan dua sholat di waktu sholat pertama." },
        { name: "Jama' Ta'khir Ashar & Dzuhur", arab: "أُصَلِّي فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مَجْمُوْعًا إِلَيْهِ الظُّهْرُ جَمْعَ تَأْخِيْرٍ لِلّٰهِ تَعَالَى", latin: "Ushalli fardhal 'ashri arba'a raka'aatin majmuu'an ilaihidh dhuhru jam'a ta-khiirin lillaahi ta'aala.", arti: "Saya berniat sholat ashar empat rakaat digabungkan dengan dzuhur, jama' ta'khir karena Allah Ta'ala.", desc: "Mengumpulkan dua sholat di waktu sholat kedua." },
        { name: "Jama' Ta'dim Maghrib & Isya", arab: "أُصَلِّي fَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مَجْمُوْعًا إِلَيْهِ الْعِشَاءُ جَمْعَ تَقْدِيْمٍ لِلّٰهِ تَعَالَى", latin: "Ushalli fardhal maghribi tsalaatsa raka'aatin majmuu'an ilaihil 'isyaa-u jam'a taqdiimin lillaahi ta'aala.", arti: "Saya berniat sholat maghrib tiga rakaat digabungkan dengan isya, jama' ta'dim karena Allah Ta'ala.", desc: "Mengumpulkan Maghrib dan Isya di waktu Maghrib." },
        { name: "Jama' Ta'khir Isya & Maghrib", arab: "أُصَلِّي فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مَجْمُوْعًا إِلَيْهِ الْمَغْرِبُ جَمْعَ تَأْخِيْرٍ لِلّٰهِ تَعَالَى", latin: "Ushalli fardhal 'isyaa-i arba'a raka'aatin majmuu'an ilaihil maghribu jam'a ta-khiirin lillaahi ta'aala.", arti: "Saya berniat sholat isya empat rakaat digabungkan dengan maghrib, jama' ta'khir karena Allah Ta'ala.", desc: "Mengumpulkan Isya dan Maghrib di waktu Isya." },
        { name: "Qashar Dzuhur (2 Rakaat)", arab: "أُصَلِّي فَرْضَ الظُّهْرِ رَكْعَتَيْنِ قَصْرًا لِلّٰهِ تَعَالَى", latin: "Ushalli fardhadh dhuhri rak'ataini qashran lillaahi ta'aala.", arti: "Saya berniat sholat dzuhur dua rakaat qashar karena Allah Ta'ala.", desc: "Meringkas rakaat sholat dari 4 menjadi 2 rakaat." },
    ];

    const stepsBase = [
        { type: "header", text: "1. Takbiratul Ihram" },
        { type: "arab", text: "اَللّٰهُ أَكْبَرُ", latin: "Allaahu Akbar", arti: "Allah Maha Besar" },
    ];

    const iftitahStep = [
        { type: "header", text: "2. Doa Iftitah (Sunnah)" },
        { type: "arab", text: "اَللّٰهُ أَكْبَرُ كَبِيْرًا وَالْحَمْدُ لِلّٰهِ كَثِيْرًا وَسُبْحَانَ اللّٰهِ بُكْرَةً وَأَصِيْلًا. إِنِّيْ وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَ السَّمَوَاتِ وَالْأَرْضَ حَنِيْفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِيْنَ. إِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلّٰهِ رَبِّ الْعَالَمِيْنَ. لَا شَرِيْكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِيْنَ", latin: "Allaahu akbar kabiiraw walhamdu lillaahi katsiiraa wa subhaanallaahi bukrataw wa ashiilaa. Innii wajjahtu wajhiya lilladzii fatharas samaawaati wal ardha haniifam muslimaw wa maa ana minal musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil 'aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana minal muslimiin.", arti: "Allah Maha Besar lagi sempurna kebesaran-Nya, segala puji bagi-Nya dan Maha Suci Allah sepanjang pagi dan petang. Sesungguhnya aku hadapkan wajahku kepada Allah yang menciptakan langit dan bumi, dengan penuh kepasrahan (mengikuti agama yang benar) dan aku bukanlah termasuk orang-orang yang musyrik. Sesungguhnya sholatku, ibadahku, hidupku dan matiku hanyalah untuk Allah, Tuhan semesta alam. Tidak ada sekutu bagi-Nya dan demikianlah aku diperintahkan, dan aku termasuk orang-orang muslim." },
    ];

    const stepsCommon = [
        { type: "header", text: "3. Membaca Al-Fatihah" },
        { type: "arab", text: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلَّهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمَنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ", latin: "Bismillaahir rahmaanir rahiim. Alhamdulillaahi rabbil 'aalamiin. Ar-rahmaanir rahiim. Maaliki yaumid diin. Iyyaaka na'budu wa iyyaaka nasta'iin. Ihdinash shiraathal mustaqiim. Shiraathal ladziina an'amta 'alaihim ghairil maghdhuubi 'alaihim waladh-dhaalliin.", arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam. Yang Maha Pengasih, Maha Penyayang. Pemilik hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. Tunjukilah kami jalan yang lurus. (Yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat." },
        { type: "header", text: "4. Membaca Surat Pendek" },
        { type: "header", text: "5. Ruku'" },
        { type: "arab", text: "سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ", latin: "Subhaana rabbiyal 'adziimi wa bihamdih", arti: "Maha Suci Tuhanku yang Maha Agung dengan segala puji bagi-Nya." },
        { type: "header", text: "6. I'tidal" },
        { type: "arab", text: "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ", latin: "Sami'allaahu liman hamidah", arti: "Allah Maha Mendengar orang yang memuji-Nya." },
        { type: "header", text: "7. Sujud" },
        { type: "arab", text: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ", latin: "Subhaana rabbiyal a'laa wa bihamdih", arti: "Maha Suci Tuhanku yang Maha Tinggi dengan segala puji bagi-Nya." },
        { type: "header", text: "8. Duduk Antara Dua Sujud" },
        { type: "arab", text: "رَبِّ اغْفِرْ لِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ", latin: "Rabbighfirlii warhamnii wajburnii warfa'nii warzuqnii wahdinii wa 'aafinii wa'fu 'annii.", arti: "Ya Allah ampunilah dosaku, belas kasihanilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, berilah aku kesehatan, dan maafkanlah aku." },
        { type: "header", text: "9. Tahiyat Akhir" },
        { type: "arab", text: "اَالتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلّٰهِ. اَلسَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ. اَلسَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنْ نَّمُحَمَّدًا رَسُولُ اللهِ. اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ.", latin: "Attahiyyaatul mubaarakaatush shalawaatuth thayyibaatu lillaah. Assalaamu 'alaika ayyuhan nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alainaa wa 'alaa 'ibaadillaahish shaalihiin. Asyhadu allaa ilaaha illallaah, wa asyhadu anna muhammadar rasuulullaah. Allaahumma shalli 'alaa sayyidinaa muhammad wa 'alaa aali sayyidinaa muhammad. Kamaa shallaita 'alaa sayyidinaa ibraahiim wa 'alaa aali sayyidinaa ibraahiim. Wa baarik 'alaa sayyidinaa muhammad wa 'alaa aali sayyidinaa muhammad. Kamaa baarakta 'alaa sayyidinaa ibraahiim wa 'alaa aali sayyidinaa ibraahiim. Fil 'aalamiina innaka hamiidum majiid.", arti: "Segala kehormatan, keberkahan, kebahagiaan dan kebaikan bagi Allah. Salam, rahmat dan berkah-Nya kupanjatkan kepadamu wahai Nabi (Muhammad). Salam (keselamatan) semoga tetap untuk kami seluruh hamba yang shaleh-shaleh. Aku bersaksi bahwa tiada Tuhan selain Allah dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah. Ya Allah limpahkanlah rahmat kepada Nabi Muhammad dan kepada keluarga Nabi Muhammad. Sebagaimana telah Engkau limpahkan rahmat kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Dan limpahkanlah keberkahan kepada Nabi Muhammad dan keluarga Nabi Muhammad. Sebagaimana telah Engkau limpahkan keberkahan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Sungguh di alam semesta ini, Engkau Maha Terpuji lagi Maha Mulia." },
        { type: "header", text: "10. Salam" },
        { type: "arab", text: "اَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ", latin: "Assalaamu'alaikum wa rahmatullaah", arti: "Semoga keselamatan dan rahmat Allah terlimpah kepadamu." },
    ];

    const guideHariRaya = [
        { type: "header", text: "Tata Cara Sholat Hari Raya" },
        { type: "instruction", text: "Sholat Idul Fitri dan Idul Adha masing-masing berjumlah dua rakaat and dilakukan secara berjamaah. Terdapat tambahan takbir pada rakaat pertama dan kedua." },
        { type: "header", text: "1. Niat & Takbiratul Ihram" },
        { type: "instruction", text: "Lakukan niat (di dalam hati) dan Takbiratul Ihram sebagaimana shalat biasa." },
        { type: "header", text: "2. Takbir 7 Kali (Rakaat Pertama)" },
        { type: "instruction", text: "Setelah membaca doa iftitah, lakukan takbir sebanyak 7 kali." },
        { type: "instruction", text: "Di sela-sela setiap takbir, sunnah membaca kalimat tasbih:" },
        { type: "arab", text: "سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ", latin: "Subhaanallaahi wal hamdu lillaahi wa laa ilaaha illallaahu wallaahu akbar.", arti: "Maha Suci Allah, segala puji bagi Allah, tiada Tuhan selain Allah, and Allah Maha Besar." },
        { type: "header", text: "3. Membaca Al-Fatihah & Surat" },
        { type: "instruction", text: "Lanjutkan shalat seperti biasa hingga sujud kedua and berdiri kembali untuk rakaat kedua." },
        { type: "header", text: "4. Takbir 5 Kali (Rakaat Kedua)" },
        { type: "instruction", text: "Pada rakaat kedua, setelah berdiri (takbir intiqal), lakukan takbir sebanyak 5 kali." },
        { type: "instruction", text: "Di sela-sela setiap takbir, sunnah membaca tasbih yang sama seperti pada rakaat pertama." },
        { type: "header", text: "5. Lanjut Hingga Salam" },
        { type: "instruction", text: "Lanjutkan shalat hingga selesai (tahiyat akhir and salam)." },
        { type: "header", text: "6. Mendengarkan Khutbah" },
        { type: "instruction", text: "Setelah salam, jamaah disunnahkan untuk tetap duduk and mendengarkan khutbah Idul Fitri/Idul Adha hingga selesai." },
    ];

    const guideJama = [
        { type: "header", text: "Pengertian Jama' & Qashar" },
        { type: "instruction", text: "Jama' artinya mengumpulkan dua shalat fardhu dalam satu waktu. Qashar artinya meringkas shalat yang empat rakaat menjadi dua rakaat. Keduanya merupakan rukhshah (keringanan) dari Allah Subhanahu wa ta'ala bagi orang yang sedang menempuh perjalanan (musafir)." },
        { type: "header", text: "Syarat Sah Qashar" },
        { type: "instruction", text: "1. Jarak perjalanan minimal 2 Marhalah (sekitar 81-89 km).\n2. Perjalanan bukan bertujuan untuk maksiat.\n3. Shalat yang diringkas harus memiliki 4 rakaat (Dzuhur, Ashar, Isya).\n4. Niat qashar pada saat Takbiratul Ihram.\n5. Tidak bermakmum kepada imam yang menyempurnakan shalat (Muqim)." },
        { type: "header", text: "Syarat Sah Jama'" },
        { type: "instruction", text: "1. Niat Jama' (untuk Ta'dim dilakukan pada shalat pertama).\n2. Memulai dengan shalat pertama baru kemudian shalat kedua (Tertib).\n3. Berurutan tanpa jeda waktu yang lama (Muwalat).\n4. Masih dalam status musafir hingga selesai shalat kedua." },
        { type: "header", text: "Referensi Fiqih" },
        { type: "instruction", text: "Berdasarkan Kitab Fathul Qadir, Matn al-Ghayah wa al-Taqrib (Fiqih Syafi'i), dan Fatwa MUI tentang panduan ibadah bagi musafir." },
    ];

    window.openSholatCategory = function(cat) {
        activeCategory = cat;
        activeTab = 'niat';
        
        const tabsContainer = document.getElementById('niat-tabs-container');
        const titleEl = document.getElementById('sholat-category-title');
        const caraBtn = document.getElementById('btnSholatCara');

        if(cat === 'jama') {
            titleEl.textContent = "Jama' & Qashar";
            tabsContainer.classList.remove('hidden');
            caraBtn.textContent = "Panduan";
        } else if(cat === 'hari-raya') {
            titleEl.textContent = "Sholat Hari Raya";
            tabsContainer.classList.remove('hidden');
            caraBtn.textContent = "Panduan";
        } else {
            titleEl.textContent = cat === 'wajib' ? 'Sholat Wajib' : 'Sholat Sunnah';
            tabsContainer.classList.remove('hidden');
            caraBtn.textContent = "Tata Cara";
        }
        
        const screen = document.getElementById('sholat-category-screen');
        screen.classList.remove('hidden');
        void screen.offsetWidth;
        screen.classList.remove('translate-x-full');
        
        if (typeof App !== 'undefined' && App.pushModal) {
            App.pushModal(closeSholatCategory);
        }
        
        switchSholatTab('niat');
    };

    window.closeSholatCategory = function(shouldPopHistory = true) {
        const screen = document.getElementById('sholat-category-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => screen.classList.add('hidden'), 300);
    };

    window.switchSholatTab = function(tab) {
        activeTab = tab;
        const btnNiat = document.getElementById('btnSholatNiat');
        const btnCara = document.getElementById('btnSholatCara');
        
        if(tab === 'niat') {
            btnNiat.className = "flex-1 py-2.5 rounded-lg text-sm font-bold bg-primary text-white  transition-all";
            btnCara.className = "flex-1 py-2.5 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all";
        } else {
            btnCara.className = "flex-1 py-2.5 rounded-lg text-sm font-bold bg-primary text-white  transition-all";
            btnNiat.className = "flex-1 py-2.5 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 transition-all";
        }
        renderSholatList();
    };

    window.renderSholatList = function() {
        const container = document.getElementById('sholat-list-container');
        if(activeTab === 'niat') {
            let list = [];
            if(activeCategory === 'wajib') list = niatWajib;
            else if(activeCategory === 'sunnah') list = niatSunnah;
            else if(activeCategory === 'hari-raya') list = niatHariRaya;
            else list = niatJama;

            container.innerHTML = list.map(item => `
                <div class="bg-white p-5 rounded-2xl  border border-gray-100 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 class="font-bold text-emerald-900 mb-2 text-lg uppercase tracking-tight">${item.name}</h3>
                    <p class="font-quran text-right text-gray-800 mb-4 leading-loose text-2xl" dir="rtl">${item.arab}</p>
                    <div class="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/30">
                        <p class="text-emerald-800 text-sm font-bold mb-2">${item.latin}</p>
                        <p class="text-xs text-gray-600 italic leading-relaxed text-justify mb-3">"${item.arti}"</p>
                        ${item.desc ? `<div class="mt-3 pt-3 border-t border-emerald-100/50"><p class="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1">Keterangan:</p><p class="text-xs text-gray-500 leading-relaxed">${item.desc}</p></div>` : ''}
                    </div>
                </div>
            `).join('');
        } else {
            let steps = [];
            if(activeCategory === 'wajib') {
                steps = [...stepsBase, ...iftitahStep, ...stepsCommon];
            } else if(activeCategory === 'sunnah') {
                steps = [...stepsBase, ...stepsCommon];
                // Renumber headers for sunnah steps correctly
                steps = steps.map((s, idx) => s.type === 'header' ? {...s, text: `${idx+1}. ${s.text.split('. ')[1] || s.text}`} : s);
            } else if(activeCategory === 'hari-raya') {
                steps = guideHariRaya;
            } else {
                steps = guideJama;
            }
            
            container.innerHTML = steps.map(item => {
                if(item.type === 'header') return `<div class="mt-8 mb-3 animate-in fade-in duration-300"><h3 class="font-bold text-gray-800 text-lg bg-white px-4 py-2 rounded-lg border border-gray-100  inline-block">${item.text}</h3></div>`;
                if(item.type === 'instruction') return `<div class="bg-white p-5 rounded-2xl  border border-gray-100 mb-2 border-l-4 border-l-amber-500 animate-in fade-in duration-300"><p class="text-gray-600 text-sm leading-relaxed">${item.text}</p></div>`;
                return `
                    <div class="bg-white p-5 rounded-2xl  border border-gray-100 mb-2 animate-in fade-in slide-in-from-right-2 duration-300">
                        <p class="font-quran text-right text-gray-800 mb-4 leading-loose text-2xl" dir="rtl">${item.text}</p>
                        <div class="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/30">
                            <p class="text-emerald-800 text-sm font-bold mb-2">${item.latin}</p>
                            <p class="text-xs text-gray-600 italic leading-relaxed text-justify">"${item.arti}"</p>
                        </div>
                    </div>`;
            }).join('');
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    if (typeof lucide !== 'undefined') lucide.createIcons();
};

