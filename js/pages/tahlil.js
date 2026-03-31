export const render = () => `
    <div class="bg-white sticky top-0 z-[100] border-b border-gray-100">
        <div class="px-5 py-4 flex items-center justify-between w-full mx-auto">
            <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0">
                <i data-lucide="arrow-left" class="w-5 h-5 text-gray-700"></i>
                <span class="text-sm font-bold text-gray-700">Kembali</span>
            </a>
            <div class="text-right">
                <h1 class="text-lg font-extrabold text-gray-800 tracking-tight">Tahlil Lengkap</h1>
                <p class="text-xs text-gray-500 font-medium">Full Teks & Terjemahan</p>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-5 py-6 pb-32 w-full">

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-6">
                <div class="step-badge">1</div>
                <h3 class="font-bold text-gray-800 text-lg">Hadrah Nabi</h3>
            </div>
            
            <p class="font-quran text-2xl text-right text-gray-800 mb-2 leading-loose" dir="rtl">
                إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَاٰلِهِ وَصَحْبِهِ وَاَزْوَاجِهِ وَذُرِّيَّتِهِ وَاَهْلِ بَيْتِهِ الْكِرَامِ، شَيْءٌ لِلّٰهِ لَهُمُ الْفَاتِحَةُ
            </p>

            <div class="latin-box">
                <p class="text-primary font-bold text-sm mb-2 leading-relaxed">Ilaa hadhrotin nabiyyil mushthofaa muhammadin shallallaahu 'alaihi wa sallama wa aalihii wa shahbihii wa azwaajihii wa dzurriyyatihii wa ahli baitihil kiraam, syai-un lillaahi lahumul faatihah.</p>
                <span class="translation-text">"Kepada yang terhormat Nabi Muhammad Shallallahu 'alaihi wa sallam, segenap keluarga, para sahabat, para istri, keturunan, dan ahli baitnya yang mulia, semoga Allah melimpahkan segala kebaikan kepada mereka. Al-Fatihah."</span>
            </div>
            
            <div class="mt-4 text-center">
                <span class="badge-instruction mb-0">Membaca Al-Fatihah 1x</span>
            </div>
        </div>

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-6">
                <div class="step-badge">2</div>
                <h3 class="font-bold text-gray-800 text-lg">Khususon</h3>
            </div>
            
            <div class="mb-8">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">A. Untuk Para Wali & Ulama</p>
                <p class="font-quran text-2xl text-right text-gray-800 mb-2 leading-loose" dir="rtl">
                    ثُمَّ إِلَى حَضْرَةِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، شَيْءٌ لِلّٰهِ لَهُمُ الْفَاتِحَةُ
                </p>
                <div class="latin-box mt-2">
                    <p class="text-primary font-bold text-sm mb-2 leading-relaxed">Thumma ilaa hadhroti ikhwaanihi minal anbiyaa-i wal mursaliin wal auliyaa-i wasy syuhadaa-i wash shoolihiin wash shohaabati wat taabi'iin wal 'ulamaa-il 'aamiliin wal mushonnifiinal mukhlishiin wa jamii'il malaa-ikatil muqorrobiin, syai-un lillaahi lahumul faatihah.</p>
                    <span class="translation-text">"Kemudian kepada para handai taulan dari para nabi dan rasul, para wali, para syuhada, orang-orang saleh, para sahabat, para tabiin, para ulama yang mengamalkan ilmunya... Al-Fatihah."</span>
                </div>
            </div>

            <div class="mb-4 pt-6 border-t border-gray-100">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">B. Untuk Almarhum/ah (Sebut Nama)</p>
                <p class="font-quran text-2xl text-right text-gray-800 mb-4 leading-loose" dir="rtl">
                    خُصُوْصًا إِلَى رُوْحِ ... <span class="bg-yellow-100 rounded px-1 text-base border border-yellow-200">(فُلَانْ ابْنِ فُلَانْ)</span> ... وَأُصُوْلِهِ وَفُرُوْعِهِ وَذَوِى الْحُقُوْقِ عَلَيْهِ أَجْمَعِيْنَ، شَيْءٌ لِلّٰهِ لَهُمُ الْفَاتِحَةُ
                </p>
                <div class="latin-box">
                    <p class="text-primary font-bold text-sm leading-relaxed">Khushuushon ilaa ruuhi <span class="text-accent bg-yellow-50 px-1 rounded font-extrabold">...(Sebut Nama)...</span> wa ushuulihi wa furuu'ihi wa dzawil huquuqi 'alaihi ajma'iin, syai-un lillaahi lahumul faatihah.</p>
                    <span class="translation-text">"Khususnya kepada ruh (sebutkan nama) beserta para leluhur dan keturunannya, serta orang-orang yang memiliki hak atasnya secara keseluruhan... Al-Fatihah."</span>
                </div>
            </div>
        </div>

        <div class="card-tahlil bg-secondary/20 border-primary/20">
            <div class="flex items-center gap-4 mb-6">
                <div class="step-badge">3</div>
                <h3 class="font-bold text-gray-800 text-lg">Surat Al-Fatihah</h3>
            </div>

            <p class="font-quran text-3xl text-right text-gray-800 mb-2 leading-[4.5rem]" dir="rtl">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <span class="ayat-marker">﴿١﴾</span> اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ <span class="ayat-marker">﴿٢﴾</span> الرَّحْمٰنِ الرَّحِيْمِ <span class="ayat-marker">﴿٣﴾</span> مٰلِكِ يَوْمِ الدِّيْنِ <span class="ayat-marker">﴿٤﴾</span> اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ <span class="ayat-marker">﴿٥﴾</span> اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ <span class="ayat-marker">﴿٦﴾</span> صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ <span class="ayat-marker">﴿٧﴾</span>
            </p>

            <div class="latin-box bg-white">
                <p class="text-primary font-bold text-sm leading-relaxed">
                    1. Bismillaahir rahmaanir rahiim.<br>
                    2. Alhamdulillaahi rabbil 'aalamiin.<br>
                    3. Arrahmaanir rahiim.<br>
                    4. Maaliki yaumiddiin.<br>
                    5. Iyyaaka na'budu wa iyyaaka nasta'iin.<br>
                    6. Ihdinash shiraathal mustaqiim.<br>
                    7. Shiraathal ladziina an'amta 'alaihim ghairil maghdhuubi 'alaihim waladh-dhaalliin.
                </p>
                <span class="translation-text">"Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Segala puji bagi Allah, Tuhan seluruh alam. Yang Maha Pengasih, Maha Penyayang. Pemilik hari pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan. Tunjukilah kami jalan yang lurus. (Yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat."</span>
            </div>
            
            <div class="mt-4 text-center">
                <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Aamiin.</span>
            </div>
        </div>

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">4</div>
                <h3 class="font-bold text-gray-800 text-lg">Tiga Surat Pendek</h3>
            </div>
            
            <div class="mb-10">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Al-Ikhlas</span>
                    <span class="badge-instruction">DIBACA 3X</span>
                </div>
                <p class="font-quran text-3xl text-right text-gray-800 mb-4 leading-[4.5rem]" dir="rtl">
                    قُلْ هُوَ اللّٰهُ اَحَدٌ <span class="ayat-marker">﴿١﴾</span> اَللّٰهُ الصَّمَدُ <span class="ayat-marker">﴿٢﴾</span> لَمْ يَلِدْ وَلَمْ يُوْلَدْ <span class="ayat-marker">﴿٣﴾</span> وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ <span class="ayat-marker">﴿٤﴾</span>
                </p>
                
                <div class="latin-box mt-0">
                    <p class="text-primary font-bold text-sm leading-relaxed">Qul huwallaahu ahad. Allaahush shamad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad.</p>
                    <span class="translation-text">"Katakanlah (Muhammad), Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu..."</span>
                </div>

                <div class="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 my-6 ">
                    <p class="font-quran text-2xl text-gray-800 mb-1" dir="rtl">لَا اِلٰهَ اِلَّا اللّٰهُ وَاللّٰهُ اَكْبَرُ</p>
                    <p class="text-[10px] font-bold text-primary uppercase">Laa ilaaha illallaahu wallaahu akbar</p>
                </div>
            </div>

            <div class="mb-10 pt-6 border-t border-gray-100">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Al-Falaq</span>
                    <span class="badge-instruction">DIBACA 1X</span>
                </div>
                <p class="font-quran text-3xl text-right text-gray-800 mb-4 leading-[4.5rem]" dir="rtl">
                    قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِ <span class="ayat-marker">﴿١﴾</span> مِنْ شَرِّ مَا خَلَقَ <span class="ayat-marker">﴿٢﴾</span> وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَ <span class="ayat-marker">﴿٣﴾</span> وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِ <span class="ayat-marker">﴿٤﴾</span> وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ <span class="ayat-marker">﴿٥﴾</span>
                </p>
                <div class="latin-box mt-0">
                    <p class="text-primary font-bold text-sm leading-relaxed">Qul a'uudzu birabbil falaq. Min syarri maa khalaq. Wa min syarri ghaasiqin idzaa waqab. Wa min syarrin naffaatsaati fil 'uqad. Wa min syarri haasidin idzaa hasad.</p>
                    <span class="translation-text">"Katakanlah, Aku berlindung kepada Tuhan yang menguasai subuh (fajar)..."</span>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 my-6 ">
                    <p class="font-quran text-2xl text-gray-800 mb-1" dir="rtl">لَا اِلٰهَ اِلَّا اللّٰهُ وَاللّٰهُ اَكْبَرُ</p>
                </div>
            </div>

            <div class="pt-6 border-t border-gray-100">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xs font-extrabold text-gray-400 uppercase tracking-widest">An-Nas</span>
                    <span class="badge-instruction">DIBACA 1X</span>
                </div>
                <p class="font-quran text-3xl text-right text-gray-800 mb-4 leading-[4.5rem]" dir="rtl">
                    قُلْ اَعُوْذُ بِرَبِّ النَّاسِ <span class="ayat-marker">﴿١﴾</span> مَلِكِ النَّاسِ <span class="ayat-marker">﴿٢﴾</span> اِلٰهِ النَّاسِ <span class="ayat-marker">﴿٣﴾</span> مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِ <span class="ayat-marker">﴿٤﴾</span> الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِ <span class="ayat-marker">﴿٥﴾</span> مِنَ الْجِنَّةِ وَالنَّاسِ <span class="ayat-marker">﴿٦﴾</span>
                </p>
                <div class="latin-box mt-0">
                    <p class="text-primary font-bold text-sm leading-relaxed">Qul a'uudzu birabbin naas. Malikin naas. Ilaahin naas. Min syarril waswaasil khannaas. Alladzii yuwaswisu fii shuduurin naas. Minal jinnati wan naas.</p>
                    <span class="translation-text">"Katakanlah, Aku berlindung kepada Tuhannya manusia, Raja manusia..."</span>
                </div>
                <div class="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 my-6 ">
                    <p class="font-quran text-2xl text-gray-800 mb-1" dir="rtl">لَا اِلٰهَ اِلَّا اللّٰهُ وَاللّٰهُ اَكْبَرُ</p>
                </div>
            </div>
        </div>

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">5</div>
                <h3 class="font-bold text-gray-800 text-lg">Awal Al-Baqarah</h3>
            </div>

            <p class="font-quran text-3xl text-right text-gray-800 mb-2 leading-[4.5rem]" dir="rtl">
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ <span class="ayat-marker">﴿١﴾</span> الۤمّۤ <span class="ayat-marker">﴿١﴾</span> ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ <span class="ayat-marker">﴿٢﴾</span> الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ <span class="ayat-marker">﴿٣﴾</span> وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَ <span class="ayat-marker">﴿٤﴾</span> اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ <span class="ayat-marker">﴿٥﴾</span>
            </p>
            
            <div class="latin-box">
                <p class="text-primary font-bold text-sm leading-relaxed">Bismillaahir rahmaanir rahiim. Alif Laam Miim. Dzaalikal kitaabu laa raiba fiihi hudan lil muttaqiin. Alladziina yu'minuuna bil ghaibi wa yuqiimuunash shalaata wa mimmaa razaqnaahum yunfiquun. Walladziina yu'minuuna bimaa unzila ilaika wa maa unzila min qablika wa bil aakhirati hum yuuqinuun. Ulaa-ika 'alaa hudan mirrabbihim wa ulaa-ika humul muflihuun.</p>
                <span class="translation-text">"Alif Lam Mim. Kitab (Al-Quran) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa..."</span>
            </div>

            <div class="mb-4 pt-8 border-t border-gray-100"></div>

            <p class="font-quran text-3xl text-right text-gray-800 mb-2 leading-[4.5rem]" dir="rtl">
                وَاِلٰهُكُمْ اِلٰهٌ وَّاحِدٌۚ لَآ اِلٰهَ اِلَّا هُوَ الرَّحْمٰنُ الرَّحِيْمُ <span class="ayat-marker">﴿١٦٣﴾</span>
            </p>
            <div class="latin-box">
                <p class="text-primary font-bold text-sm leading-relaxed mb-2">Wa ilaahukum ilaahuw waahid, laa ilaaha illaa huwar rahmaanur rahiim.</p>
                <span class="translation-text">"Dan Tuhanmu adalah Tuhan Yang Maha Esa; tidak ada tuhan selain Dia, Yang Maha Pengasih, Maha Penyayang."</span>
            </div>
        </div>

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">6</div>
                <h3 class="font-bold text-gray-800 text-lg">Ayat Kursi (255)</h3>
            </div>

            <p class="font-quran text-3xl text-right text-gray-800 mb-2 leading-[4.5rem]" dir="rtl">
                اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ <span class="ayat-marker">﴿٢٥٥﴾</span>
            </p>
            <div class="latin-box">
                <p class="text-primary font-bold text-sm leading-relaxed">Allaahu laa ilaaha illaa huwal hayyul qayyuum. Laa ta'khudzuhuu sinatuw wa laa naum. Lahuu maa fis samaawaati wa maa fil ardh. Man dzal ladzii yasyfa'u 'indahuu illaa bi idznih. Ya'lamu maa baina aidiihim wa maa khalfahum. Wa laa yuhiithuuna bi syai-im min 'ilmihii illaa bimaa syaa'. Wasi'a kursiyyuhus samaawaati wal ardh. Wa laa ya-uuduhuu hifzhuhumaa wa huwal 'aliyyul 'azhiim.</p>
                <span class="translation-text">"Allah, tidak ada tuhan selain Dia. Yang Maha Hidup, Yang terus menerus mengurus (makhluk-Nya)..."</span>
            </div>
        </div>

        <div class="card-tahlil border-l-4 border-primary pl-5 py-2">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">7</div>
                <h3 class="font-bold text-gray-800 text-lg">Akhir Al-Baqarah</h3>
            </div>

            <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100 mb-6">
                <p class="text-xs text-yellow-800 font-bold flex items-center gap-2">
                    <i data-lucide="alert-circle" class="w-4 h-4"></i>
                    Ayat 284-286 (Lengkap tanpa singkatan)
                </p>
            </div>

            <p class="font-quran text-3xl text-right text-gray-800 mb-6 leading-[4.5rem]" dir="rtl">
                لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاِنْ تُبْدُوْا مَا فِيْٓ اَنْفُسِكُمْ اَوْ تُخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللّٰهُ ۗ فَيَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ <span class="ayat-marker">﴿٢٨٤﴾</span>
            </p>
            <div class="latin-box mt-0 mb-8">
                <p class="text-primary font-bold text-sm leading-relaxed">Lillaahi maa fis samaawaati wa maa fil ardh. Wa in tubduu maa fii anfusikum au tukhfuuhu yuhaasibkum bihillah. Fayaghfiru liman yasyaa-u wa yu'adz-dzibu man yasyaa'. Wallaahu 'alaa kulli syai-in qadiir.</p>
            </div>
            
            <p class="font-quran text-3xl text-right text-gray-800 mb-6 leading-[4.5rem]" dir="rtl">
                اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۗ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ <span class="ayat-marker">﴿٢٨٥﴾</span>
            </p>
             <div class="latin-box mt-0 mb-8">
                <p class="text-primary font-bold text-sm leading-relaxed">Aamanar rasuulu bimaa unzila ilaihi mir rabbihii wal mu'minuun. Kullun aamana billaahi wa malaa-ikatihii wa kutubihii wa rusulih. Laa nufarriqu baina ahadim mir rusulih. Wa qaaluu sami'naa wa atha'naa ghufraanaka rabbanaa wa ilaikal mashiir.</p>
            </div>

            <p class="font-quran text-3xl text-right text-gray-800 mb-4 leading-[4.5rem]" dir="rtl">
                لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَا ۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ اَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهٖۚ وَاعْفُ عَنَّاۗ وَاغْفِرْ لَنَاۗ وَارْحَمْنَاۗ اَنْتَ مَوْلٰىنَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ <span class="ayat-marker">﴿٢٨٦﴾</span>
            </p>
            <div class="latin-box">
                <p class="text-primary font-bold text-sm leading-relaxed mb-4">
                    Laa yukallifullaahu nafsan illaa wus'ahaa. Lahaa maa kasabat wa 'alaihaa maktasabat. Rabbanaa laa tu-aakhidznaa in nasiinaa au akhtha'naa. Rabbanaa wa laa tahmil 'alainaa ishran kamaa hamaltahuu 'alal ladziina min qablinaa. Rabbanaa wa laa tuhammilnaa maa laa thaaqata lanaa bih. <br><br>
                    <strong>Wa'fu 'annaa waghfir lanaa warhamnaa anta maulaanaa fanshurnaa 'alal qaumil kaafiriin.</strong>
                </p>
                <span class="translation-text">
                    "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya... Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah Pelindung kami, maka tolonglah kami menghadapi orang-orang kafir."
                </span>
            </div>
        </div>

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">8</div>
                <h3 class="font-bold text-gray-800 text-lg">Pengantar Dzikir</h3>
            </div>
            
            <div class="mb-8 text-center border-b border-gray-100 pb-8">
                <p class="font-quran text-3xl text-gray-800 mb-3" dir="rtl">اِرْحَمْنَا يَاأَرْحَمَ الرَّاحِمِيْنَ</p>
                <span class="badge-instruction">DIBACA 7X</span>
                <p class="text-primary text-xs font-bold mt-2 uppercase tracking-wide">Irhamnaa yaa arhamar raahimiin</p>
            </div>

            <div>
                <p class="font-quran text-3xl text-right text-gray-800 mb-4 leading-loose" dir="rtl">
                    رَحْمَةُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ إِنَّهُ حَمِيْدٌ مَجِيْدٌ ۝ إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّوْنَ عَلَى النَّبِيِّ، يَاأَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوْا تَسْلِيْمًا ۝
                </p>
                <div class="latin-box mt-0">
                    <p class="text-primary font-bold text-sm leading-relaxed">Rahmatullaahi wa barakaatuhuu 'alaikum ahlal baiti innahuu hamiidum majiid. Innallaaha wa malaa-ikatahuu yushalluuna 'alan nabiyy. Yaa ayyuhal ladziina aamanuu shalluu 'alaihi wa sallimuu tasliimaa.</p>
                </div>

                <div class="bg-primary/5 p-5 rounded-2xl mt-4 text-center border border-primary/10">
                    <p class="font-quran text-3xl text-primary font-bold" dir="rtl">اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ</p>
                    <p class="text-primary text-xs font-bold mt-2 uppercase">Allaahumma shalli 'alaa sayyidinaa muhammad</p>
                </div>
            </div>
        </div>

        <div class="card-tahlil">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">9</div>
                <h3 class="font-bold text-gray-800 text-lg">Dzikir Tahlil</h3>
            </div>

            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Istighfar</span>
                    <span class="badge-instruction">3X</span>
                </div>
                <p class="font-quran text-4xl text-right text-gray-800 mb-4 leading-loose" dir="rtl">أَسْتَغْفِرُ اللهَ الْعَظِيْمَ</p>
                <p class="text-primary font-bold text-sm">Astaghfirullahal 'adzim</p>
            </div>

            <div class="bg-secondary/30 p-8 rounded-3xl border border-primary/10 text-center relative overflow-hidden ">
                <p class="font-quran text-2xl text-gray-600 mb-6" dir="rtl">أَفْضَلُ الذِّكْرِ فَاعْلَمْ أَنَّهُ</p>
                
                <div class="py-8 border-t border-b border-primary/10 my-4 bg-white rounded-2xl ">
                    <p class="font-quran text-5xl text-primary font-bold mb-4 drop- leading-relaxed" dir="rtl">لَااِلٰهَ اِلَّا اللهُ</p>
                    <p class="text-sm font-bold text-gray-700">Laa ilaaha illallah</p>
                </div>
                
                <div class="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Dibaca 33 Kali
                </div>
            </div>
        </div>

        <div class="card-tahlil border-l-4 border-l-primary  bg-gradient-to-br from-white to-green-50/50 pl-5 py-2">
            <div class="flex items-center gap-4 mb-8">
                <div class="step-badge">10</div>
                <h3 class="font-bold text-gray-800 text-lg">Doa Arwah</h3>
            </div>

            <div class="mb-8">
                <span class="badge-instruction mb-4">Al-Fatihah 1x</span>
                <p class="font-quran text-2xl text-right text-gray-800 mb-4 leading-loose" dir="rtl">
                    اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ وَالْاٰفَاتِ، وَتَقْضِيْ لَنَا بِهَا جَمِيْعَ الْحَاجَاتِ ۝
                </p>
                <div class="latin-box mt-2">
                     <p class="text-primary font-bold text-sm mb-2">Allaahumma shalli 'alaa sayyidinaa muhammadin shalaatan tunjiinaa bihaa min jamii'il ahwaali wal aafaat, wa taqdhii lanaa bihaa jamii'al haajaat.</p>
                     <span class="translation-text">"Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad, yang dengan rahmat itu Engkau selamatkan kami dari segala mara bahaya dan musibah, dan Engkau penuhi segala hajat kami."</span>
                </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-green-100  relative mb-6">
                <div class="absolute top-0 right-0 p-3 opacity-10">
                    <i data-lucide="flower-2" class="w-16 h-16 text-green-700"></i>
                </div>
                <p class="text-xs font-bold text-green-700 uppercase tracking-widest mb-4">Doa Inti (Wajib Dibaca)</p>
                <p class="font-quran text-3xl text-right text-gray-800 mb-6 leading-[4rem]" dir="rtl">
                    اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ ۝ اَللّٰهُمَّ اَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ وَالشَّفَاعَةَ عَلَى اَهْلِ الْقُبُوْرِ مِنْ اَهْلِ لَااِلٰهَ اِلَّا اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ ۝
                </p>
                <div class="latin-box mt-0 border-l-green-600 bg-green-50">
                    <p class="text-primary font-bold text-sm mb-2">Allaahummaghfir lahum warhamhum wa 'aafihim wa'fu 'anhum. Allaahumma anzilir rahmata wal maghfirata wasy syafaa'ata 'alaa ahlil qubuuri min ahli laa ilaaha illallaahu muhammadur rasuulullaah.</p>
                    <span class="translation-text text-green-800 border-green-200">
                       "Ya Allah, ampunilah mereka, kasihanilah mereka... Turunkanlah rahmat dan ampunan kepada ahli kubur dari ahli Laa ilaaha illallah."
                    </span>
                </div>
            </div>

            <div>
                <p class="font-quran text-2xl text-right text-gray-800 mb-4 leading-loose" dir="rtl">
                    رَبَّنَا اٰتِنَا فِى الدُّنْيَا حَسَنَةً وَفِى الْاٰخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ ۝ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ ۝
                </p>
                 <div class="latin-box mt-2">
                     <p class="text-primary font-bold text-sm mb-2">Rabbanaa aatinaa fid dunyaa hasanah, wa fil aakhirati hasanah, wa qinaa 'adzaaban naar. Wal hamdu lillaahi rabbil 'aalamiin.</p>
                     <span class="translation-text">"Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari siksa neraka. Dan segala puji bagi Allah Tuhan semesta alam."</span>
                </div>
            </div>
        </div>

    </div>
`;

export const init = () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
};
