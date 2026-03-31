export const render = () => `
<div id="doa-main-screen" class="transition-all duration-300 relative z-20">
    <div class="bg-white px-6 py-4 sticky top-0 z-[100] flex items-center justify-between border-b border-gray-100">
        <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0">
             <i data-lucide="arrow-left" class="w-5 h-5 text-gray-700"></i>
             <span class="text-sm font-bold text-gray-700">Kembali</span>
        </a>
        <div class="flex flex-col text-right">
            <h1 class="text-xl font-extrabold text-primary tracking-tight">Doa & Wirid</h1>
            <p class="text-xs text-gray-400 font-medium">Kumpulan Doa Pilihan</p>
        </div>
    </div>
    <div class="container mx-auto px-5 py-8 pb-32 w-full space-y-4">
        <!-- Doa Harian -->
        <button onclick="openDoaCategory('harian')" class="w-full text-left bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-2xl border border-emerald-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="sun" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Doa Harian</h3>
                <p class="text-xs text-emerald-100 mt-1 opacity-90">50 Kumpulan doa sehari-hari Lengkap.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Doa Sholat & Sunnah -->
        <button onclick="openDoaCategory('sholat')" class="w-full text-left bg-gradient-to-r from-sky-500 to-sky-600 p-6 rounded-2xl border border-sky-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="moon-star" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Doa Sholat & Sunnah</h3>
                <p class="text-xs text-sky-100 mt-1 opacity-90">Tahajjud, Hajat, Witir, Tobat, Qunut, dll.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Wirid Bakda Sholat -->
        <button onclick="openDoaCategory('wirid')" class="w-full text-left bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl border border-purple-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="layers" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Wirid Bakda Sholat</h3>
                <p class="text-xs text-purple-100 mt-1 opacity-90">Dzikir & Wirid Lengkap Sesudah Sholat Fardhu.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>
    </div>
</div>

<div id="doa-category-screen" class="hidden bg-white min-h-screen fixed inset-0 z-[60] transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[110] flex items-center justify-between border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col flex-1 overflow-hidden text-right">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="doa-category-title">Daftar Doa</h1>
        </div>
    </div>
    <div class="container mx-auto px-4 py-6 pb-32 w-full flex-1 overflow-y-auto" id="doa-list-container">
    </div>
</div>

<!-- Modal Detail Doa (Bottom Sheet Scrollable) - HANYA UNTUK DOA HARIAN -->
<div id="doa-detail-modal" class="hidden fixed inset-0 z-[100] transition-opacity duration-300">
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="App.popModal()"></div>
    <div id="doa-modal-sheet" class="absolute bottom-0 left-0 right-0 bg-[#F8F9FB] rounded-t-3xl max-h-[85vh] flex flex-col transform translate-y-full transition-transform duration-300 ">
        <div class="h-1.5 w-12 bg-gray-300 rounded-full mx-auto my-3 shrink-0"></div>
        <div class="px-6 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0">
            <h1 class="text-xl font-bold text-gray-800 truncate" id="doa-detail-title">Detail Doa</h1>
            <button onclick="App.popModal()" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                 <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
        <div class="flex-1 overflow-y-auto p-6 pb-32 space-y-6 no-scrollbar" id="doa-detail-content">
        </div>
    </div>
</div>

<!-- Screen Detail Doa (Full Screen) - UNTUK DOA SHOLAT & WIRID -->
<div id="doa-detail-screen" class="hidden bg-[#F8F9FB] min-h-screen fixed inset-0 z-[100] transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[120] flex items-center justify-between border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col flex-1 overflow-hidden text-right">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="doa-full-title">Detail</h1>
        </div>
    </div>
    <div class="container mx-auto px-4 py-8 pb-32 w-full flex-1 overflow-y-auto space-y-6" id="doa-full-content">
    </div>
</div>
`;

export const init = () => {
    const pembuka = {
        arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. وَالصَّلَاةُ وَالسَّلَامُ عَلَى أَشْرَفِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ، سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ.",
        latin: "Bismillaahir rahmaanir rahiim. Alhamdulillaahi rabbil 'aalamiin. Wash-shalaatu was-salaamu 'alaa asyrafil anbiyaa-i wal mursaliin, sayyidinaa muhammadin wa 'alaa aalihi wa shahbihii ajma'iin.",
        arti: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah Tuhan semesta alam. Sholawat dan salam semoga tercurah kepada rasul paling mulia, junjungan kami Nabi Muhammad Shallallahu 'alaihi wa sallam, beserta keluarga dan para sahabatnya."
    };

    const penutup = {
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ. وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ. وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ.",
        latin: "Rabbana aatina fid-dunya hasanatan wa fil-aakhirati hasanatan wa qinaa 'adzaaban-naar. Wa shallallaahu 'alaa sayyidinaa muhammadin wa 'alaa aalihi wa shahbihii wa sallam. Walhamdulillaahi rabbil 'aalamiin.",
        arti: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka. Dan semoga Allah melimpahkan rahmat serta salam kepada junjungan kami Nabi Muhammad Shallallahu 'alaihi wa sallam, keluarga, dan para sahabatnya. Segala puji bagi Allah, Tuhan semesta alam."
    };

    const doas = [
        // --- HARIAN CATEGORY (Exactly 50 Doa) ---
        { id: 'h1', category: 'harian', title: 'Doa Bangun Tidur', items: [{ arabic: 'الْحَمْدُ لِلَّه الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', latin: 'Alhamdulillaahil ladzii ahyaanaa ba\'da maa amaatanaa wa ilaihin-nusyuur.', arti: 'Segala puji bagi Allah yang telah menghidupkan kami kembali setelah mematikan kami (tidur) dan hanya kepada-Nya kami kembali.' }] },
        { id: 'h2', category: 'harian', title: 'Doa Sebelum Tidur', items: [{ arabic: 'بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ', latin: 'Bismika allaahumma ahyaa wa amuutu.', arti: 'Dengan nama-Mu ya Allah aku hidup dan aku mati.' }] },
        { id: 'h3', category: 'harian', title: 'Doa Masuk Kamar Mandi', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', latin: 'Allaahumma innii a\'udzu bika minal khubutsi wal khabaa-its.', arti: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.' }] },
        { id: 'h4', category: 'harian', title: 'Doa Keluar Kamar Mandi', items: [{ arabic: 'غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي', latin: 'Ghufraanaka, alhamdulillaahil ladzii adzhaba \'annil adzaa wa \'aafaanii.', arti: 'Aku memohon ampunan-Mu. Segala puji bagi Allah yang telah menghilangkan kotoran dari tubuhku dan menyehatkan aku.' }] },
        { id: 'h5', category: 'harian', title: 'Doa Sebelum Makan', items: [{ arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ', latin: 'Allaahumma baarik lanaa fiimaa razaqtanaa wa qinaa \'adzaaban-naar.', arti: 'Ya Allah, berkahilah rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa neraka.' }] },
        { id: 'h6', category: 'harian', title: 'Doa Sesudah Makan', items: [{ arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ', latin: 'Alhamdulillaahil ladzii ath\'amanaa wa saqaanaa wa ja\'alanaa muslimiin.', arti: 'Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami orang-orang muslim.' }] },
        { id: 'h7', category: 'harian', title: 'Doa Memakai Pakaian', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا هُوَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا هُوَ لَهُ', latin: 'Allaahumma innii as-aluka min khairihii wa khairi maa huwa lahu, wa a\'udzu bika min syarrihii wa syarri maa huwa lahu.', arti: 'Ya Allah, aku memohon kepada-Mu kebaikannya dan kebaikan apa yang ada padanya. Dan aku berlindung kepada-Mu dari keburukannya dan keburukan apa yang ada padanya.' }] },
        { id: 'h8', category: 'harian', title: 'Doa Melepas Pakaian', items: [{ arabic: 'بِسْمِ اللهِ الَّذِي لاَ إِلَهَ إِلاَّ هُوَ', latin: 'Bismillaahil-ladzii laa ilaaha illaa huwa.', arti: 'Dengan nama Allah yang tiada Tuhan selain-Nya.' }] },
        { id: 'h9', category: 'harian', title: 'Doa Bercermin', items: [{ arabic: 'اللَّهُمَّ كَمَا حَسَّنتَ خَلْقِي فَحَسِّنْ خُلُقِي', latin: 'Allaahumma kamaa hassanta khalqii fa hassin khuluqii.', arti: 'Ya Allah, sebagaimana Engkau telah membaguskan penciptaanku, maka baguskanlah pula akhlakku.' }] },
        { id: 'h10', category: 'harian', title: 'Doa Masuk Rumah', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ المَوْلِجِ وَخَيْرَ المَخْرَجِ، بِسْمِ اللهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى اللهِ رَبِّنَا تَوَكَّلْنَا', latin: 'Allaahumma innii as-aluka khairal mauliji wa khairal makhraji, bismillaahi walajnaa, wa bismillaahi kharajnaa, wa \'alallaahi rabbinaa tawakkalnaa.', arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikan tempat masuk dan kebaikan tempat keluar. Dengan nama Allah kami masuk, dan dengan nama Allah kami keluar, dan kepada Allah Tuhan kami, kami berserah diri.' }] },
        { id: 'h11', category: 'harian', title: 'Doa Keluar Rumah', items: [{ arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', latin: 'Bismillaahi tawakkaltu \'alallaahi laa haula wa laa quwwata illaa billaah.', arti: 'Dengan nama Allah, aku berserah diri kepada Allah, tiada daya dan kekuatan melainkan dengan pertolongan Allah.' }] },
        { id: 'h12', category: 'harian', title: 'Doa Naik Kendaraan', items: [{ arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ', latin: 'Subhaanal-ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahuu muqriniin, wa innaa ilaa rabbinaa lamunqalibuun.', arti: 'Mahasuci Allah yang telah menundukkan kendaraan ini bagi kami, padahal kami sebelumnya tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami.' }] },
        { id: 'h13', category: 'harian', title: 'Doa Masuk Masjid', items: [{ arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', latin: 'Allaahummaftah-lii abwaaba rahmatik.', arti: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.' }] },
        { id: 'h14', category: 'harian', title: 'Doa Keluar Masjid', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ', latin: 'Allaahumma innii as-aluka min fadhlik.', arti: 'Ya Allah, sesungguhnya aku memohon keutamaan dari-Mu.' }] },
        { id: 'h15', category: 'harian', title: 'Doa Setelah Wudhu', items: [{ arabic: 'أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ، وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّالِحِينَ', latin: 'Asyhadu an laa ilaaha illallaahu wahdahu laa syariika lahu wa asyhadu anna muhammadan \'abduhu wa rasuuluhu. Allaahummaj-\'alnii minat-tawwaabiina waj-\'alnii minal-mutathah-hiriina waj-\'alnii min \'ibaadikash-shaalihiin.', arti: 'Aku bersaksi tiada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa nabi Muhammad adalah hamba dan utusan-Nya. Ya Allah, jadikanlah aku termasuk orang yang bertaubat dan jadikanlah aku termasuk orang yang menyucikan diri, serta jadikanlah aku pemimpin di antara hamba-hamba-Mu yang saleh.' }] },
        { id: 'h16', category: 'harian', title: 'Doa Sebelum Belajar', items: [{ arabic: 'رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي فَهْمًا', latin: 'Rabbi zidnii \'ilman warzuqnii fahman.', arti: 'Ya Tuhanku, tambahkanlah ilmu kepadaku dan berilah aku pemahaman.' }] },
        { id: 'h17', category: 'harian', title: 'Doa Setelah Belajar', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَسْتَوْدِعُكَ مَا عَلَّمْتَنِي فَارْدُدْهُ إِلَيَّ عِنْدَ حَاجَتِي إِلَيْهِ ولاَ تَنْسَنِيْهِ يَا رَبَّ الْعَالَمِيْنَ', latin: 'Allaahumma innii astaudi\'uka maa \'allamtanii fardudhu ilayya \'inda haajatii ilaihi wa laa tunsanii-hi yaa rabbal \'aalamiin.', arti: 'Ya Allah, sesungguhnya aku menitipkan pada-Mu apa yang telah Engkau ajarkan kepadaku, maka kembalikanlah ia kepadaku di saat aku membutuhkannya. Janganlah Engkau jadikan aku lupa padanya, wahai Tuhan semesta alam.' }] },
        { id: 'h18', category: 'harian', title: 'Doa Mohon Kecerdasan', items: [{ arabic: 'اللَّهُمَّ أَلْهِمْنِي رُشْدِي وَأَعِذْنِي مِنْ شَرِّ نَفْسِي', latin: 'Allaahumma alhimnii rusydii wa a\'idznii min syarri nafsii.', arti: 'Ya Allah, ilhamkanlah kepadaku kecerdasan dan lindungilah aku dari kejahatan diriku sendiri.' }] },
        { id: 'h19', category: 'harian', title: 'Doa Ketika Mimpi Buruk', items: [{ arabic: 'اللَّهُمَّ إِنِّى أَعُوْذُ بِكَ مِنْ عَمَلِ الشَّيْطَانِ وَسَيِّئَاتِ الْأَحْلَامِ', latin: 'Allaahumma innii a\'udzu bika min \'amalisy-syaythaani wa sayyi-aatil ahlaam.', arti: 'Ya Allah, aku berlindung kepada-Mu dari perbuatan setan dan mimpi-mimpi yang buruk.' }] },
        { id: 'h20', category: 'harian', title: 'Doa Ketika Hujan', items: [{ arabic: 'اللَّهُمَّ صَيِّبًا نَافِعًا', latin: 'Allaahumma shayyiban naafi\'an.', arti: 'Ya Allah, turunkanlah hujan yang bermanfaat.' }] },
        { id: 'h21', category: 'harian', title: 'Doa Mendengar Petir', items: [{ arabic: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ', latin: 'Subhaanal ladzii yusabbihur-ra\'du bihamdihii wal malaaikatu min khiifatih.', arti: 'Mahasuci Allah yang petir bertasbih dengan memuji-Nya, begitu juga para malaikat karena takut kepada-Nya.' }] },
        { id: 'h22', category: 'harian', title: 'Doa Ketika Ada Angin Kencang', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ', latin: 'Allaahumma innii as-aluka khairahaa wa khaira maa fiihaa wa khaira maa ursilat bihi, wa a\'udzu bika min syarrihaa wa syarri maa fiihaa wa syarri maa ursilat bih.', arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikannya, kebaikan apa yang ada di dalamnya, dan kebaikan apa yang diutus bersamanya. Dan aku berlindung kepada-Mu dari keburukannya, keburukan apa yang ada di dalamnya, dan keburukan apa yang diutus bersamanya.' }] },
        { id: 'h23', category: 'harian', title: 'Doa Kedua Orang Tua', items: [{ arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صِغَارًا', latin: 'Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shagiiraa.', arti: 'Ya Tuhanku, ampunilah dosaku dan dosa kedua orang tuaku, dan kasihilah mereka keduanya sebagaimana mereka telah mendidikku di waktu kecil.' }] },
        { id: 'h24', category: 'harian', title: 'Doa Mohon Kemudahan Urusan', items: [{ arabic: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا', latin: 'Allaahumma laa sahla illaa maa ja\'altahu sahlan, wa anta taj\'alul hazna idzaa syi\'ta sahlan.', arti: 'Ya Allah, tidak ada kemudahan kecuali apa yang Engkau jadikan mudah. Dan Engkau menjadikan kesedihan (kesulitan) jika Engkau kehendaki menjadi mudah.' }] },
        { id: 'h25', category: 'harian', title: 'Doa Sapu Jagad', items: [{ arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', latin: 'Rabbanaa aatinaa fid dunyaa hasanatan wa fil aakhirati hasanatan wa qinaa \'adzaaban-naar.', arti: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.' }] },
        { id: 'h26', category: 'harian', title: 'Doa Memulai Pekerjaan', items: [{ arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا', latin: 'Rabbanaa aatinaa min ladunka rahmatan wa hayyi\' lanaa min amrinaa rasyadaa.', arti: 'Ya Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah bagi kami petunjuk yang lurus dalam urusan kami.' }] },
        { id: 'h27', category: 'harian', title: 'Doa Menjenguk Orang Sakit', items: [{ arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفاؤُكَ، شِفاءً لَا يُغَادِرُ سَقَمًا', latin: 'Allaahumma rabban-naasi adzhibil ba-sa, isyfi antasy-syaafii, laa syifaa-a illaa syifaa-uka, syifaa-an laa yughaadiru saqamaa.', arti: 'Ya Allah, Tuhan seluruh manusia, hilangkanlah penyakit ini. Sembuhkanlah, Engkau-lah Yang Maha Menyembuhkan. Tidak ada kesembuhan melainkan kesembuhan dari-Mu.' }] },
        { id: 'h28', category: 'harian', title: 'Doa Tertimpa Musibah', items: [{ arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا', latin: 'Innaa lillaahi wa innaa ilaihi raaji\'uun. Allaahumma-jurnii fii mushiibatii wa akhlif lii khairan minhaa.', arti: 'Sesungguhnya kami milik Allah dan kepada-Nyalah kami kembali. Ya Allah, berilah pahala kepadaku dalam musibahku ini dan gantilah untukku dengan yang lebih baik darinya.' }] },
        { id: 'h29', category: 'harian', title: 'Doa Mohon Ketetapan Iman', items: [{ arabic: 'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ', latin: 'Yaa muqallibal quluubi tsabbit qalbii \'alaa diinik.', arti: 'Wahai Dzat yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu.' }] },
        { id: 'h30', category: 'harian', title: 'Doa Mohon Perlindungan dari Malas', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْهَرَمِ وَالْبُخْلِ', latin: 'Allaahumma innii a\'udzu bika minal \'ajzi wal kasali, wal jubni wal harami wal bukhli.', arti: 'Ya Allah, aku berlindung kepada-Mu dari rasa lemah, malas, penakut, pikun dan kikir.' }] },
        { id: 'h31', category: 'harian', title: 'Doa Berpakaian Baru', items: [{ arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ', latin: 'Allaahumma lakal hamdu anta kasautaniihi, as-asluka min khairihi wa khaira maa suni\'a lahu.', arti: 'Ya Allah, segala puji bagi-Mu, Engkau yang telah memberikan pakaian ini kepadaku.' }] },
        { id: 'h32', category: 'harian', title: 'Doa Mohon Husnul Khatimah', items: [{ arabic: 'اللَّهُمَّ اخْتِمْ لَنَا بِالْإِسْلَامِ، وَاخْتِمْ لَنَا بِالْإِيمَانِ، وَاخْتِمْ لَنَا بِحُسْنِ الْخَاتِمَةِ', latin: 'Allaahummakhtim lanaa bil islaam, wakhtim lanaa bil iimaan, wakhtim lanaa bi husnil khaatimah.', arti: 'Ya Allah, akhirilah hidup kami dengan Islam, akhirilah hidup kami dengan iman, dan akhirilah hidup kami dengan husnul khatimah.' }] },
        { id: 'h33', category: 'harian', title: 'Doa Perlindungan Fitnah Dajjal', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ', latin: 'Allaahumma innii a\'udzu bika min fitnatil mahyaa wal mamaat, wa min syarri fitnatil masiihidh-dajjaal.', arti: 'Ya Allah, aku berlindung kepada-Mu dari fitnah kehidupan dan kematian, dan dari keburukan fitnah Dajjal.' }] },
        { id: 'h34', category: 'harian', title: 'Doa Ketika Marah', items: [{ arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', latin: 'A\'udzu billaahi minasy-syaythaanir rajiim.', arti: 'Aku berlindung kepada Allah dari setan yang terkutuk.' }] },
        { id: 'h35', category: 'harian', title: 'Doa Pagi (Allahumma Bika Asbahna)', items: [{ arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ', latin: 'Allaahumma bika asbahnaa, wa bika amsainaa, wa bika nahyaa, wa bika namuutu wa ilaikannusyuur.', arti: 'Ya Allah, karena Engkau kami memasuki waktu pagi, karena Engkau kami memasuki waktu sore, karena Engkau kami hidup, karena Engkau kami mati, dan kepada-Mulah kami akan dibangkitkan.' }] },
        { id: 'h36', category: 'harian', title: 'Doa Sore (Allahumma Bika Amsaina)', items: [{ arabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيْرُ', latin: 'Allaahumma bika amsainaa, wa bika asbahnaa, wa bika nahyaa, wa bika namuutu wa ilaikal masiir.', arti: 'Ya Allah, karena Engkau kami memasuki waktu sore, karena Engkau kami memasuki waktu pagi, karena Engkau kami hidup, karena Engkau kami mati, dan kepada-Mulah tempat kembali.' }] },
        { id: 'h37', category: 'harian', title: 'Doa Lupa Basmalah Saat Makan', items: [{ arabic: 'بِسْمِ اللهِ فِي أَوَّلِهِ وَآخِرِهِ', latin: 'Bismillaahi fii awwalihi wa aakhirihi.', arti: 'Dengan nama Allah di awal dan di akhirnya.' }] },
        { id: 'h38', category: 'harian', title: 'Doa Selesai Bekerja', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ', latin: 'Allaahumma innii as-aluka khaira maa fii haadzal yaumi wa khaira maa ba\'dahu.', arti: 'Ya Allah, aku memohon kepada-Mu kebaikan hari ini dan kebaikan setelahnya.' }] },
        { id: 'h39', category: 'harian', title: 'Doa Tempat Baru', items: [{ arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', latin: 'A\'udzu bikalimaatillaahit-taammaati min syarri maa khalaq.', arti: 'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.' }] },
        { id: 'h40', category: 'harian', title: 'Doa Masuk Pasar', items: [{ arabic: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', latin: 'Laa ilaaha illallaahu wahdahu laa syariika lahu, lahul mulku wa lahul hamdu yuhyii wa yumiitu wa huwa hayyun laa yamuutu, bi yadihil khairu wa huwa \'alaa kulli syai-in qadiir.', arti: 'Tiada Tuhan yang berhak disembah selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya segala puji. Dia-lah yang menghidupkan dan yang mematikan. Dia-lah Yang Maha Hidup dan tidak akan mati. Di tangan-Nyalah segala kebaikan dan Dia-lah yang Maha Kuasa atas segala sesuatu.' }] },
        { id: 'h41', category: 'harian', title: 'Doa Setelah Adzan', items: [{ arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِي وَعَدْتَهُ', latin: 'Allaahumma rabba haadzihid-da\'watit-taammah, wash-shalaatil qaa-imah, aati muhammadanil wasiilata wal fadhiilah, wab\'atshu maqaamam mahmuudanil-ladzii wa\'adtah.', arti: 'Ya Allah, Tuhan pemilik panggilan yang sempurna ini dan shalat yang tetap didirikan, berilah kepada junjungan kami Nabi Muhammad wasilah (kedudukan yang tinggi) dan fadhilah (keutamaan), serta bangkitkanlah beliau pada kedudukan terpuji yang telah Engkau janjikan.' }] },
        { id: 'h42', category: 'harian', title: 'Doa Ketika Bersin', items: [{ arabic: 'الْحَمْدُ لِلَّهِ', latin: 'Alhamdulillaah.', arti: 'Segala puji bagi Allah.' }] },
        { id: 'h43', category: 'harian', title: 'Doa Mendengar Orang Bersin', items: [{ arabic: 'يَرْحَمُكَ اللَّهُ', latin: 'Yarhamukallaah.', arti: 'Semoga Allah memberimu rahmat.' }] },
        { id: 'h44', category: 'harian', title: 'Doa Memohon Kelunasan Hutang', items: [{ arabic: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ', latin: 'Allaahummak-finii bi-halaalika \'an haraamika, wa aghninii bi-fadhlika \'amman siwaak.', arti: 'Ya Allah, cukupkanlah aku dengan rezeki-Mu yang halal hingga aku terhindar dari yang haram, dan perkaya lah aku dengan karunia-Mu sehingga aku tidak bergantung kepada selain-Mu.' }] },
        { id: 'h45', category: 'harian', title: 'Doa Selamat dari Siksa Kubur', items: [{ arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ', latin: 'Allaahumma innii a\'udzu bika min \'adzaabil qabri.', arti: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari siksa kubur.' }] },
        { id: 'h46', category: 'harian', title: 'Doa Mohon Kelapangan Dada', items: [{ arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي، يَفْقَهُوا قَوْلِي', latin: 'Rabbisy-rah lii shadrii, wa yassir lii amrii, wahlul \'uqdatam min lisaanii yafqahuu qaulii.', arti: 'Ya Tuhanku, lapangkanlah dadaku, dan mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, agar mereka mengerti perkataanku.' }] },
        { id: 'h47', category: 'harian', title: 'Doa Mohon Keturunan Shaleh', items: [{ arabic: 'رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً، إِنَّكَ سَمِيعُ الدُّعَاءِ', latin: 'Rabbi hab lii min ladunka dzurriyyatan thayyibah, innaka samii\'ud-du\'aa.', arti: 'Ya Tuhanku, berilah aku keturunan yang baik dari sisi-Mu, sesungguhnya Engkau Maha Mendengar doa.' }] },
        { id: 'h48', category: 'harian', title: 'Doa Keteguhan Hati (Robbana La Tuzigh)', items: [{ arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً، إِنَّكَ أَنْتَ الْوَهَّابُ', latin: 'Rabbanaa laa tuzigh quluubanaa ba\'da idz hadaitanaa wa hab lanaa min ladunka rahmatan, innaka antal wahhaab.', arti: 'Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan sesudah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi-Mu; karena sesungguhnya Engkau-lah Maha Pemberi (karunia).' }] },
        { id: 'h49', category: 'harian', title: 'Doa Penutup Majelis', items: [{ arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ', latin: 'Subhaanakallaahumma wa bihamdika, asyhadu an laa ilaaha illaa anta, astaghfiruka wa atuubu ilaik.', arti: 'Maha Suci Engkau, ya Allah, dan dengan memuji-Mu, aku bersaksi bahwa tiada Tuhan yang berhak disembah melainkan Engkau, aku memohon ampunan-Mu dan aku bertaubat kepada-Mu.' }] },
        { id: 'h50', category: 'harian', title: 'Doa Nabi Yunus (Keluar dari Kesulitan)', items: [{ arabic: 'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ', latin: 'Laa ilaaha illaa anta subhaanaka innii kuntu minadh-dhaalimiin.', arti: 'Tiada Tuhan selain Engkau, Mahasuci Engkau, sesungguhnya aku termasuk orang-orang yang zhalim.' }] },

        // --- SHOLAT CATEGORY (LENGKAP TANPA RINGKASAN) ---
        {
            id: 's1', category: 'sholat', title: 'Doa Setelah Sholat Subuh', items: [
                pembuka,
                { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا', latin: 'Allaahumma innii as-aluka \'ilman naafi\'an, wa rizqan thayyiban, wa \'amalan mutaqabbalan.', arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amalan yang diterima.' },
                { arabic: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ', latin: 'Allaahumma ajirnii minan-naar.', arti: 'Ya Allah, lindungilah aku dari azab api neraka.' },
                { arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', latin: 'Allaahumma a\'innii \'alaa dzikrika wa syukrika wa husni \'ibaadatik.', arti: 'Ya Allah, bantulah aku untuk selalu mengingat-Mu, bersyukur kepada-Mu, dan beribadah dengan baik kepada-Mu.' },
                { arabic: 'أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ', latin: 'Asbahnaa \'alaa fithratil islaam, wa \'alaa kalimatil ikhlaas, wa \'alaa diini nabiyyinaa muhammadin shallallaahu \'alaihi wa sallam, wa \'alaa millati abiinaa ibraahiima haniifam muslimaw wa maa kaana minal musyrikiin.', arti: 'Kami memasuki pagi dalam keadaan fitrah Islam, di atas kalimat ikhlas, di atas agama Nabi kami Muhammad Shallallahu \'alaihi wa sallam, dan di atas millah bapak kami Ibrahim yang hanif lagi berserah diri kepada Allah, dan ia bukanlah termasuk golongan orang-orang musyrik.' },
                penutup
            ]
        },
        {
            id: 's2', category: 'sholat', title: 'Doa Qunut Subuh', items: [
                { arabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، وَأَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ، وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ', latin: 'Allaahummah-dinii fiiman hadait, wa \'aafinii fiiman \'aafait, wa tawallanii fiiman tawallait, wa baariklii fiimaa a\'thait, wa qinii syarra maa qadhait, fa innaka taqdhii wa laa yuqdhaa \'alaik, wa innahu laa yadzillu man waalait, wa laa ya\'izzu man \'aadait, tabaarakta rabbanaa wa ta\'aalait, fa lakal hamdu \'alaa maa qadhait, wa astaghfiruka wa atuubu ilaik, wa shallallaahu \'alaa sayyidinaa muhammadinn-nabiyyil ummiyyi wa \'alaa aalihii wa shahbihii wa sallam.', arti: 'Ya Allah, berilah aku petunjuk sebagaimana orang-orang yang telah Engkau beri petunjuk. Berilah aku kesehatan sebagaimana orang-orang yang telah Engkau beri kesehatan. Palingkanlah aku dari bahaya sebagaimana orang-orang yang telah Engkau palingkan dari bahaya. Berkahilah bagiku pada apa yang telah Engkau berikan. Lindungilah aku dari keburukan apa yang telah Engkau tetapkan. Sesungguhnya Engkau-lah yang menetapkan dan tidak ada yang menetapkan atas-Mu. Sesungguhnya tidak akan hina orang yang Engkau mudahkan, dan tidak akan mulia orang yang Engkau musuhi. Maha Berkah Engkau Wahai Tuhan kami dan Maha Tinggi Engkau. Maka bagi-Mu segala puji atas apa yang telah Engkau tetapkan. Aku memohon ampunan-Mu dan bertaubat kepada-Mu. Dan semoga Allah melimpahkan rahmat dan salam atas junjungan kami Nabi Muhammad yang ummi, beserta keluarga dan para sahabatnya.' }
            ]
        },
        {
            id: 's3', category: 'sholat', title: 'Doa Sholat Tahajjud', items: [
                { arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ وَوَعْدُكَ الْحَقُّ وَلِقَاؤُكَ حَقٌّ وَقَوْلُكَ حقٌّ وَالْجَنَّةُ حَقٌّ وَالنَّارُ حَقٌّ وَالنَّبِيُّونَ حَقٌّ وَمُحَمَّدٌ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ حَقٌّ وَالسَّاعَةُ حَقٌّ. اللَّهُمَّ لَكَ أَسْلَمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَإِلَيْكَ أَنَبْتُ وَبِكَ خَاصَمْتُ وَإِلَيْكَ حَاكَمْتُ، فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ، أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ، لَا إِلَهَ إِلَّا أَنْتَ', latin: 'Allaahumma lakal hamdu anta nuurus-samaawaati wal ardhi wa man fiihinna, wa lakal hamdu anta qayyimus-samaawaati wal ardhi wa man fiihinna, wa lakal hamdu antal haqqu wa wa\'dukal haqqu wa liqaa-uka haqqu wa qauluka haqqun wal jannatu haqqun wann-naaru haqqun wan-nabiyyuuna haqqun wa muhammadun shallallaahu \'alaihi wa sallam haqqun was-saa\'atu haqqun. Allaahumma laka aslamtu wa bika aamantu wa \'alaika tawakkaltu wa ilaika anabtu wa bika khaashamtu wa ilaika haakamtu, faghfirlii maa qaddamtu wa maa akhkhartu wa maa asrartu wa maa a\'lantu, antal muqaddimu wa antal mu-akhkhiru, laa ilaaha illaa anta.', arti: 'Ya Allah, bagi-Mu segala puji, Engkaulah cahaya langit dan bumi serta apa yang ada di dalamnya. Bagi-Mu segala puji, Engkaulah penguasa langit dan bumi serta apa yang ada di dalamnya. Bagi-Mu segala puji, Engkaulah Yang Maha Benar, janji-Mu benar, pertemuan dengan-Mu benar, firman-Mu benar, surga itu benar, neraka itu benar, para nabi itu benar, Muhammad SAW itu benar, dan hari kiamat itu benar. Ya Allah, hanya kepada-Mu aku berserah diri, kepada-Mu aku beriman, kepada-Mu aku bertawakal, kepada-Mu aku kembali, dengan pertolongan-Mu aku berdebat, dan kepada-Mu aku memohon keputusan. Maka ampunilah dosa-dosaku yang telah lalu dan yang akan datang, yang aku sembunyikan dan yang aku nampakkan. Engkaulah Yang Maha Mendahulukan dan Engkaulah Yang Maha Mengakhirkan, tidak ada Tuhan selain Engkau.' }
            ]
        },
        {
             id: 's4', category: 'sholat', title: 'Doa Sholat Dhuha', items: [
                 pembuka,
                 { arabic: 'اللَّهُمَّ إِنَّ الضُّحَاءَ ضُحاؤُكَ، وَالْبَهَاءَ بَهَاؤُكَ، وَالْجَمَالَ جَمَالُكَ، وَالْقُوَّةَ قُوَّتُكَ، وَالْقُدْرَةَ قُدْرَتُكَ، وَالْعِصْمَةَ عِصْمَتُكَ. اللَّهُمَّ إِنْ كَانَ رِزْقِي فِي السَّمَاءِ فَأَنْزِلْهُ، وَإِنْ كَانَ فِي الْأَرْضِ فَأَخْرِجْهُ، وَإِنْ كَانَ مُعَسَّرًا فَيَسِّرْهُ، وَإِنْ كَانَ حَرَامًا فَطَهِّرْهُ، وَإِنْ كَانَ بَعِيدًا فَقَرِّبْهُ بِحَقِّ ضُحَائِكَ وَبَهَائِكَ وَجَمَالِكَ وَقُوَّتِكَ وَقُدْرَتِكَ، آتِنِي مَا آتَيْتَ عِبَادَكَ الصَّالِحِينَ', latin: 'Allaahumma innadh-dhuhaa-a dhuhaa-uka, wal bahaa-a bahaa-uka, wal jamaala jamaaluka, wal quwwata quwwatuka, wal qudrata qudratuka, wal \'ishmata \'ishmatuka. Allaahumma in kaana rizqii fis-samaa-i fa anzilhu, wa in kaana fil ardhi fa akhrijhu, wa in kaana mu\'assaran fa yassirhu, wa in kaana haraaman fa thahhirhu, wa in kaana ba\'iidan fa qarribhu bihaqqi dhuhaa-ika wa bahaa-ika wa jamaalika wa quwwatika wa qudratika, aatinii maa a\'taita \'ibaadakash-shaalihiin.', arti: 'Ya Allah, waktu dhuha adalah waktu dhuha-Mu, keagungan adalah keagungan-Mu, keindahan adalah keindahan-Mu, kekuatan adalah kekuatan-Mu, kekuasaan adalah kekuasaan-Mu, dan perlindungan adalah perlindungan-Mu. Ya Allah, jika rezekiku ada di langit maka turunkanlah, jika ada di bumi maka keluarkanlah, jika sulit maka mudahkanlah, jika haram maka sucikanlah, jika jauh maka dekatkanlah, dengan hak dhuha-Mu, keagungan-Mu, keindahan-Mu, kekuatan-Mu, dan kekuasaan-Mu, berikanlah kepadaku apa yang Engkau berikan kepada hamba-hamba-Mu yang saleh.' },
                 penutup
             ]
        },
        { id: 's5', category: 'sholat', title: 'Doa Sholat Hajat', items: [pembuka, { arabic: 'لَا إِلَهَ إِلَّا اللهُ الْحَلِيمُ الْكَرِيمُ، سُبْحَانَ اللهِ رَبِّ الْعَرْشِ الْعَظِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَالْغَنِيمَةَ مِنْ كُلِّ بِرٍّ، وَالسَّلَامَةَ مِنْ كُلِّ إِثْمٍ، لَا تَدَعْ لِي ذَنْبًا إِلَّا غَفَرْتَهُ، وَلَا هَمًّا إِلَّا فَرَّجْتَهُ، وَلَا حَاجَةً هِيَ لَكَ رِضًا إِلَّا قَضَيْتَهَا يَا أَرْحَمَ الرَّحمِينَ', latin: 'Laa ilaaha illallaahul haliimul kariim, subhaanallaahi rabbil \'arsyil \'azhiim, alhamdulillaahi rabbil \'aalamiin, as-aluka muujibaati rahmatik, wa \'azaa-ima maghfiratik, wal ghaniimata min kulli birrin, was-salaamata min kulli itsmin, laa tada\' lii dzanban illaa ghafartah, wa laa hamman illaa farrajtah, wa laa haajatan hiya laka ridhan illaa qadhaitahaa yaa arhamar-raahimiin.', arti: 'Tiada Tuhan selain Allah yang Maha Lembut lagi Maha Mulia, Maha Suci Allah, Tuhan penguasa Arasy yang agung. Segala puji bagi Allah, Tuhan semesta alam. Aku memohon kepada-Mu sesuatu yang mendatangkan rahmat-Mu, dan ketetapan ampunan-Mu, dan keberuntungan dari segala kebaikan, dan keselamatan dari segala dosa. Janganlah Engkau biarkan dosa ada pada diriku melainkan Engkau ampuni, janganlah Engkau biarkan keresahan ada pada diriku melainkan Engkau beri jalan keluar, dan janganlah pula Engkau biarkan suatu kebutuhan yang Engkau ridhai melainkan Engkau penuhi, wahai Tuhan Yang Maha Pengasih.' }] },
        { id: 's6', category: 'sholat', title: 'Doa Sholat Witir', items: [pembuka, { arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ إِيمَانًا دَائِمًا، وَنَسْأَلُكَ قَلْبًا خَاشِعًا، وَنَسْأَلُكَ عِلْمًا نَافِعًا، وَنَسْأَلُكَ يَقِينًا صَادِقًا، وَنَسْأَلُكَ عَمَلًا صَالِحًا، وَنَسْأَلُكَ دِينًا قَيِّمًا، وَنَسْأَلُكَ خَيْرًا كَثِيرًا، وَنَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ، وَنَسْأَلُكَ تَمَامَ الْعَافِيَةِ، وَنَسْأَلُكَ الشُّكْرَ عَلَى الْعَافِيَةِ، وَنَسْأَلُكَ الْغِنَاءَ عَنِ النَّاسِ. اللَّهُمَّ رَبَّنَا تَقَبَّلْ مِنَّا صَلَاتَنَا وَصِيَامَنَا وَقِيَامَنَا وَتَخَشُّعَنَا وَتَضَرُّعَنَا وَتَعَبُّدَنَا وَتَمِّمْ تَقْصِيرَنَا يَا أَللهُ يَا أَرْحَمَ الرَّاحِمِينَ', latin: 'Allaahumma innaa nas-aluka iimaanan daa-iman, wa nas-aluka qalban khaasyi\'an, wa nas-aluka \'ilman naafi\'an, wa nas-aluka yaqiinan shaadiqan, wa nas-aluka \'amalan shaalihan, wa nas-aluka diinan qayyiman, wa nas-aluka khairan katsiiran, wa nas-aluka \'afwa wal \'aafiyah, wa nas-aluka tamaamal \'aafiyah, wa nas-aluka syukra \'alal \'aafiyah, wa nas-aluka ghinaa-a \'anin-naas. Allaahumma rabbanaa taqabbal minnaa shalaatanaa wa shiyaamanaa wa qiyaamanaa wa takhasysyu\'anaa wa tadharru\'anaa wa ta\'abbudanaa wa tammim taqshiiranaa yaa allaahu yaa arhamar-raahimiin.', arti: 'Ya Allah, sesungguhnya kami memohon kepada-Mu iman yang tetap, kami memohon kepada-Mu hati yang khusyuk, kami memohon kepada-Mu ilmu yang bermanfaat, kami memohon kepada-Mu keyakinan yang benar, kami memohon kepada-Mu amal yang saleh, kami memohon kepada-Mu agama yang lurus, kami memohon kepada-Mu kebaikan yang banyak, kami memohon kepada-Mu ampunan dan kesehatan, kami memohon kepada-Mu kesehatan yang sempurna, kami memohon kepada-Mu rasa syukur atas kesehatan, dan kami memohon kepada-Mu kecukupan dari bantuan manusia. Ya Allah, Tuhan kami, terimalah shalat kami, puasa kami, ruku\' kami, sujud kami, kekhusyukan kami, pengabdian kami, dan sempurnakanlah segala kekurangan kami, ya Allah, wahai Tuhan semesta alam.' }, penutup] },
        { id: 's7', category: 'sholat', title: 'Doa Sholat Tobat', items: [{ arabic: 'اَللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ', latin: 'Allaahumma anta rabbii laa ilaaha illaa anta, khalaqtanii wa ana \'abduka, wa ana \'alaa \'ahdika wa wa\'dika mastatha\'tu, a\'udzu bika min syarri maa shana\'tu, abuu-u laka bi ni\'matika \'alayya, wa abuu-u laka bi dzanbii faghfirlii fa innahu laa yaghfirudh-dzunuuba illaa anta.', arti: 'Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak disembah kecuali Engkau. Engkaulah yang menciptakan aku dan aku adalah hamba-Mu. Aku akan setia pada janji-Mu semampuku. Aku berlindung kepada-Mu dari keburukan apa yang telah aku perbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sesungguhnya tidak ada yang dapat mengampuni dosa kecuali Engkau.' }] },

        {
            id: 's8', category: 'sholat', title: 'Takbiran Hari Raya (Idul Fitri & Adha)', items: [
                {
                    arabic: "اَللهُ أَكْبَرُ اَللهُ أَكْبَرُ اَللهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ اَللهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ",
                    latin: "Allaahu akbar, Allaahu akbar, Allaahu akbar. Laa ilaaha illallaahu wallaahu akbar. Allaahu akbar walillaahil hamd.",
                    arti: "Allah Maha Besar, Allah Maha Besar, Allah Maha Besar. Tiada Tuhan selain Allah dan Allah Maha Besar. Allah Maha Besar dan segala puji bagi Allah."
                },
                {
                    arabic: "اَللهُ أَكْبَرُ كَبِيْرًا وَالْحَمْدُ لِلَّهِ كَثِيْرًا وَسُبْحَانَ اللهِ بُكْرَةً وَأَصِيْلًا لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ صَدَقَ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَأَعَزَّ جُنْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ لَا إِلَهَ إِلَّا اللهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ مُخْلِصِيْنَ لَهُ الدِّيْنَ وَلَوْ كَرِهَ الْكَافِرُوْنَ لَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ اَللهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ",
                    latin: "Allaahu akbar kabiiraa, walhamdulillaahi katsiiraa, wa subhaanallaahi bukrataw wa asyiilaa. Laa ilaaha illallaahu wahdah, shadaqa wa'dah, wa nashara 'abdah, wa a'azza jundahu wa hazamal ahzaaba wahdah. Laa ilaaha illallaahu wa laa na'budu illaa iyyaahu mukhlishiina lahud-diina walau karihal kaafiruun. Laa ilaaha illallaahu wallaahu akbar. Allaahu akbar walillaahil hamd.",
                    arti: "Allah Maha Besar dengan segala kebesaran-Nya. Segala puji bagi Allah sebanyak-banyaknya. Dan Maha Suci Allah sepanjang pagi dan sore. Tiada Tuhan selain Allah yang Maha Esa, yang menepati janji-Nya, membantu hamba-Nya, memuliakan tentara-Nya, dan mengalahkan musuh-musuh sendirian. Tiada Tuhan selain Allah dan kami tidak menyembah kecuali kepada-Nya dengan ikhlas menjalankan agama-Nya meskipun orang-orang kafir membencinya. Tiada Tuhan selain Allah dan Allah Maha Besar. Allah Maha Besar dan segala puji bagi Allah."
                }
            ]
        },

        // --- WIRID CATEGORY ---
        {
            id: 'w1', category: 'wirid', title: 'Wirid Bakda Sholat Fardhu', items: [
                { arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ (٣٠)', latin: 'Astaghfirullaahal \'azhiim (3x)', arti: 'Aku memohon ampun kepada Allah Yang Maha Agung.' },
                { arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', latin: 'Laa ilaaha illallaahu wahdahu laa syariika lahu, lahul mulku wa lahul hamdu yuhyii wa yumiitu wa huwa \'alaa kulli syai-in qadiir.', arti: 'Tiada Tuhan selain Allah Yang Esa, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya segala puji. Dia-lah yang menghidupkan dan yang mematikan, dan Dia-lah yang Maha Kuasa atas segala sesuatu.' },
                { arabic: 'سُبْحَانَ اللَّهِ (٣٣٠) اَلْحَمْدُ لِلَّهِ (٣٣٠) اَللَّهُ أَكْبَرُ (٣٣٠)', latin: 'Subhaanallaah (33x), Alhamdulillaah (33x), Allaahu Akbar (33x)', arti: 'Maha Suci Allah, Segala Puji bagi Allah, Allah Maha Besar.' },
                { arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ', latin: 'Laa ilaaha illallaahu... Wa laa haula wa laa quwwata illaa billaah.', arti: 'Penutup Dzikir.' }
            ]
        },
        {
            id: 'w2', category: 'wirid', title: 'Doa Keridhaan & Kebaikan', items: [pembuka, { arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', latin: 'Rabbana aatina fid dunyaa hasanatan...', arti: 'Ya Tuhan kami, berilah kami kebaikan...' }, penutup] }
    ];

    window.openDoaCategory = function(catId) {
        const titleMap = { harian: 'Doa Harian Sehari-hari', sholat: 'Doa Sholat & Sunnah', wirid: 'Wirid Bakda Sholat' };
        document.getElementById('doa-category-title').textContent = titleMap[catId];
        
        const listCont = document.getElementById('doa-list-container');
        const selectedList = doas.filter(d => d.category === catId);
        
        listCont.innerHTML = selectedList.map((item, index) => `
            <button onclick="openDoaDetail('${item.id}')" class="w-full bg-white p-5 rounded-2xl  border border-gray-100 flex gap-4 items-center mb-4 text-left group hover:border-emerald-200 transition-all">
                <div class="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                    <span class="text-sm">${index + 1}</span>
                </div>
                <div class="flex-1">
                    <h3 class="font-bold text-gray-800 text-base">${item.title}</h3>
                </div>
                <i data-lucide="chevron-right" class="w-5 h-5 text-gray-300 group-hover:text-emerald-500"></i>
            </button>
        `).join('');

        if (typeof lucide !== 'undefined') lucide.createIcons();
        const screen = document.getElementById('doa-category-screen');
        screen.classList.remove('hidden');
        void screen.offsetWidth;
        screen.classList.remove('translate-x-full');
        
        if (typeof App !== 'undefined' && App.pushModal) {
            App.pushModal(closeDoaCategory);
        }
    };

    window.closeDoaCategory = function(shouldPopHistory = true) {
        const screen = document.getElementById('doa-category-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => screen.classList.add('hidden'), 300);
    };

    window.openDoaDetail = function(id) {
        const item = doas.find(d => d.id === id);
        if(!item) return;

        const isHarian = item.category === 'harian';
        const titleEl = document.getElementById(isHarian ? 'doa-detail-title' : 'doa-full-title');
        const contentEl = document.getElementById(isHarian ? 'doa-detail-content' : 'doa-full-content');

        titleEl.textContent = item.title;

        let html = item.items.map(part => `
            <div class="bg-white p-6 rounded-2xl  border border-gray-100">
                <p class="font-quran text-right text-gray-800 mb-6 leading-loose text-2xl" dir="rtl">${part.arabic}</p>
                <div class="bg-emerald-50 p-4 rounded-xl">
                    <p class="text-sm font-bold text-emerald-700 mb-2">${part.latin}</p>
                    <p class="text-xs text-gray-600 italic leading-relaxed text-justify">"${part.arti}"</p>
                </div>
            </div>
        `).join('');

        contentEl.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        if (isHarian) {
            const modal = document.getElementById('doa-detail-modal');
            const sheet = document.getElementById('doa-modal-sheet');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.style.opacity = '1';
                sheet.classList.remove('translate-y-full');
                if (typeof App !== 'undefined' && App.pushModal) {
                    App.pushModal(closeDoaDetail);
                }
            }, 10);
        } else {
            const screen = document.getElementById('doa-detail-screen');
            screen.classList.remove('hidden');
            void screen.offsetWidth;
            screen.classList.remove('translate-x-full');
            if (typeof App !== 'undefined' && App.pushModal) {
                App.pushModal(closeDoaFullDetail);
            }
        }
    };

    window.closeDoaDetail = function(shouldPopHistory = true) {
        const modal = document.getElementById('doa-detail-modal');
        const sheet = document.getElementById('doa-modal-sheet');
        sheet.classList.add('translate-y-full');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.add('hidden');
            if (shouldPopHistory && typeof App !== 'undefined') {
                // Modals are tricky with popstate if they don't use pushModal
            }
        }, 300);
    };

    window.closeDoaFullDetail = function(shouldPopHistory = true) {
        const screen = document.getElementById('doa-detail-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => screen.classList.add('hidden'), 300);
    };

    if (typeof lucide !== 'undefined') lucide.createIcons();
};
