export const render = () => `
<div id="sholawat-main-screen" class="transition-all duration-300">
    <div class="bg-white px-6 py-4 sticky top-0 z-50  flex items-center justify-between border-b border-gray-100">
        <a href="./" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors border border-gray-100 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </a>
        <div class="flex flex-col text-right">
            <h1 class="text-xl font-bold text-gray-800">Sholawat</h1>
            <p class="text-xs text-gray-500">Kumpulan Pujian kepada Nabi</p>
        </div>
    </div>
    <div class="container mx-auto px-4 py-4 pb-32 w-full" id="sholawat-list-container">
    </div>
</div>

<div id="sholawat-detail-screen" class="hidden bg-[#F0F2F5] min-h-screen fixed inset-0 z-50 transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-50  flex items-center justify-between border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-rose-50 hover:text-rose-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col flex-1 overflow-hidden text-right">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="sholawat-detail-title">Sholawat</h1>
        </div>
    </div>
    <div class="container mx-auto px-4 py-6 pb-32 w-full flex-1 overflow-y-auto" id="sholawat-detail-content">
    </div>
</div>
`;

export const init = () => {
    const sholawats = [
        {
            id: 'nariyah',
            title: 'Sholawat Nariyah',
            desc: 'Pujian untuk memohon kemudahan & menghilangkan kesusahan',
            arabic: 'اَللّٰهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدِ الَّذِيْ تَنْحَلُّ بِهِ الْعُقَدُ وَتَنْفَرِجُ بِهِ الْكُرَبُ وَتُقْضَى بِهِ الْحَوَائِجُ وَتُنَالُ بِهِ الرَّغَائِبُ وَحُسْنُ الْخَوَاتِمِ وَيُسْتَسْقَى الْغَمَامُ بِوَجْهِهِ الْكَرِيْمِ وَعَلَى آلِهِ وَصَحْبِهِ فِيْ كُلِّ لَمْحَةٍ وَنَفَسٍ بِعَدَدِ كُلِّ مَعْلُوْمٍ لَكَ',
            latin: "Allaahumma shalli shalaatan kaamilatan wa sallim salaaman taamman 'alaa sayyidinaa Muhammadinilladzi tanhallu bihil 'uqadu wa tanfariju bihil kurabu wa tuqdhaa bihil hawaa-iju wa tunaalu bihir raghaa-ibu wa husnul khawaatimi wa yustasqal ghamaamu bi wajhihil kariimi wa 'alaa aalihi wa shahbihi fii kulli lamhatin wa nafasin bi 'adadi kulli ma'luumin lak.",
            arti: "Ya Allah, limpahkanlah shalawat yang sempurna dan curahkanlah salam kesejahteraan yang penuh kepada junjungan kami Nabi Muhammad, yang dengan sebab beliau semua kesulitan dapat terpecahkan, semua kesusahan dapat lenyap, semua keperluan dapat terpenuhi, dan semua yang didambakan serta husnul khatimah dapat diraih... (hingga akhir).",
            faedah: "Barangsiapa yang membacanya dengan rutin, maka Allah akan melepaskan kesulitannya, menghilangkan kesedihannya, dan mempermudah segala urusannya yang buntu."
        },
        {
            id: 'fatih',
            title: 'Sholawat Fatih',
            desc: 'Pembuka pintu kebaikan dan pelerai kebuntuan',
            arabic: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ وَالْخَاتِمِ لِمَا سَبَقَ، نَاصِرِ الْحَقِّ بِالْحَقِّ، وَالْهَادِيْ إِلَى صِرَاطِكَ الْمُسْتَقِيْمِ، وَعَلَى آلِهِ حَقَّ قَدْرِهِ وَمِقْدَارِهِ الْعَظِيْمِ',
            latin: "Allaahumma shalli 'alaa sayyidinaa Muhammadinil faatihi limaa ughliqa wal khaatimi limaa sabaqa, naashiril haqqi bil haqqi, wal haadii ilaa shiraathikal mustaqiimi, wa 'alaa aalihi haqqa qadrihi wa miqdaarihil 'azhiim.",
            arti: "Ya Allah, limpahkanlah shalawat kepada junjungan kami Nabi Muhammad, sang pembuka atas apa yang terkunci, sang penutup atas apa yang lalu, sang pembela kebenaran dengan kebenaran, dan sang petunjuk ke jalan-Mu yang lurus. Serta kepada keluarganya sesuai dengan hak kedudukan dan derajatnya yang agung.",
            faedah: "Syekh Ahmad Tijani menyebutkan bahwa selawat ini dapat menghapus dosa-dosa dan ibarat membaca Al-Qur'an mengkhatamkannya berkali-kali bagi yang mengamalkannya dengan tulus."
        },
        {
            id: 'thibbil_qulub',
            title: 'Sholawat Thibbil Qulub',
            desc: 'Penyembuh penyakit jiwa dan raga',
            arabic: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوْبِ وَدَوَائِهَا، وَعَافِيَةِ الْأَبْدَانِ وَشِفَائِهَا، وَنُوْرِ الْأَبْصَارِ وَضِيَائِهَا، وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ',
            latin: "Allaahumma shalli 'alaa sayyidinaa Muhammadin thibbil quluubi wa dawaa-ihaa, wa 'aafiyatil abdaani wa syifaa-ihaa, wa nuuril abshaari wa dhiyaa-ihaa, wa 'alaa aalihi wa shahbihi wa sallim.",
            arti: "Ya Allah, limpahkanlah shalawat kepada junjungan kami Nabi Muhammad, sebagai pengobat hati dan penyembuhnya, penyehat badan dan kesembuhannya, serta cahaya penglihatan dan sinarnya. Serta persatukanlah pula kepada keluarga dan para sahabatnya, lalu berilah keselamatan.",
            faedah: "Dipercaya sebagai obat penawar (syifa) bagi segala penyakit baik penyakit dzahir (tubuh) maupun batin (qalbu/pikiran)."
        },
        {
            id: 'munjiyat',
            title: 'Sholawat Munjiyat',
            desc: 'Penyelamat dari musibah dan terpenuhinya hajat',
            arabic: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ وَالْآفَاتِ، وَتَقْضِيْ لَنَا بِهَا جَمِيْعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِيْ الْحَيَاةِ وَبَعْدَ الْمَمَاتِ',
            latin: "Allaahumma shalli 'alaa sayyidinaa Muhammadin shalaatan tunjiinaa bihaa min jamii'il ahwaali wal aafaati, wa taqdhii lanaa bihaa jamii'al haajaati, wa tuthahhirunaa bihaa min jamii'is sayyi-aati, wa tarfa'unaa bihaa 'indaka a'lad darajaati, wa tuballighunaa bihaa aqshal ghaayaati min jamii'il khairaati fil hayaati wa ba'dal mamaati.",
            arti: "Ya Allah, limpahkanlah shalawat atas junjungan kami Nabi Muhammad... Yang dengannya Engkau selamatkan kami dari semua ketakutan. Yang dengannya Engkau penuhi semua hajat kami... (hingga akhir).",
            faedah: "Barangsiapa membacanya di kala ada wabah penyakit, bencana, kesengsaraan, dan kesulitan, niscaya Allah Subhanahu wa ta'ala akan menyelamatkannya dan memenuhi segala hajatnya yang mendesak."
        },
        {
            id: 'badar',
            title: 'Sholawat Badar',
            desc: 'Pujian serta doa perantara pahlawan Badar',
            arabic: 'صَـلاَةُ اللّٰهِ سَـلاَمُ اللّٰهِ، عَـلَى طـٰهَ رَسُـوْلِ اللّٰهِ\nصَـلاَةُ اللّٰهِ سَـلاَمُ اللّٰهِ، عَـلَى يٰـسٓ حَبِيْـبِ اللّٰهِ',
            latin: "Shalaatullah salaamullah, 'alaa Thaaha rasuulillah,\nShalaatullah salaamullah, 'alaa Yaasiin habiibillah",
            arti: "Rahmat Allah dan keselamatan Allah, semoga tetap kepada Nabi Thaha utusan Allah,\nRahmat Allah dan keselamatan Allah, semoga tetap kepada Nabi Yasin kekasih Allah.",
            faedah: "Dipergunakan untuk memperoleh keselamatan, dan juga sebagai perlindungan (benteng diri) dari berbagai gangguan, bala dan musibah."
        },
        {
            id: 'asyghil',
            title: 'Sholawat Asyghil',
            desc: 'Perlindungan dari orang berbuat zalim',
            arabic: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ، وَأَشْغِلِ الظَّالِمِيْنَ بِالظَّالِمِيْنَ، وَأَخْرِجْنَا مِنْ بَيْنِهِمْ سَالِمِيْنَ، وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِيْنَ',
            latin: "Allaahumma shalli 'alaa sayyidinaa muhammadin, wa asyghilidz dzoolimiina bidz-dzoolimiin, wa akhrijnaa min baynihim saalimiin, wa 'alaa aalihi wa shahbihi ajma'iin.",
            arti: "Ya Allah, limpahkanlah shalawat kepada junjungan kami Nabi Muhammad. Sibukkanlah orang-orang zalim dengan (menghukum) orang-orang zalim lainnya, dan keluarkanlah kami dari (kepungan) mereka dalam keadaan selamat. Serta bersalawatlah atas keluarganya dan sahabat-sahabatnya semuanya.",
            faedah: "Sholawat ini sangat masyhur diamalkan agar diri, keluarga, dan bangsa senantiasa dilindungi Allah dari para pendengki yang berniat buruk dan orang-orang zalim."
        },
        {
            id: 'ibrahimiyah',
            title: 'Sholawat Ibrahimiyah',
            desc: 'Sholawat yang dibaca ketika Tasyahud Akhir',
            arabic: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ فِيْ الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ',
            latin: "Allaahumma shalli 'alaa sayyidinaa Muhammadin wa 'alaa aali sayyidinaa Muhammadin, kamaa shallaita 'alaa sayyidinaa Ibraahiima wa 'alaa aali sayyidinaa Ibraahiima, wa baarik 'alaa sayyidinaa Muhammadin wa 'alaa aali sayyidinaa Muhammadin, kamaa baarakta 'alaa sayyidinaa Ibraahiima wa 'alaa aali sayyidinaa Ibraahiima, fil 'aalamiina innaka hamiidun majiid.",
            arti: "Ya Allah, limpahkanlah shalawat kepada Nabi Muhammad dan keluarganya, sebagaimana Engkau telah melimpahkan shalawat kepada Nabi Ibrahim dan keluarganya. Dan limpahkanlah berkah kepada Nabi Muhammad dan keluarganya, sebagaimana Engkau telah melimpahkan berkah kepada Nabi Ibrahim dan keluarganya. Di seluruh alam semesta, sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
            faedah: "Sholawat ini memiliki riwayat mutawatir (paling kuat jaminan keshahihannya karena langsung diajarkan Nabi Shallallahu 'alaihi wa sallam). Fadhilahnya sangat besar dan merupakan syariat di dalam ibadah Sholat."
        },
        {
            id: 'jibril',
            title: 'Sholawat Jibril',
            desc: 'Sholawat singkat penarik rezeki dari segala penjuru',
            arabic: 'صَلَّى اللّٰهُ عَلَى مُحَمَّدٍ',
            latin: 'Shallallaahu \'alaa Muhammad',
            arti: 'Semoga Allah memberikan rahmat-Nya kepada Nabi Muhammad.',
            faedah: 'Dikenal sebagai sholawat penarik rezeki. Dibaca sebanyak-banyaknya (biasanya 1000x atau lebih) untuk melancarkan pintu rezeki dan keberkahan hidup.'
        },
        {
            id: 'busyra',
            title: 'Sholawat Busyra',
            desc: 'Sholawat kabar gembira dari Rasulullah',
            arabic: 'اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ صَا حِبِ الْبُشْرَى صَلَاةً تُبَشِّرُنَا بِهَا وَأَهْلَنَا وَأَوْلَادَنَا وَجَمِيْعَ مَشَايِخِنَا وَمُعَلِّمِيْنَا وَطَلَبَتَنَا وَطَالِبَاتِنَا مِنْ يَوْمِنَا هَذَا إِلَى يَوْمِ الْآخِرَةِ',
            latin: 'Allaahumma shalli wa sallim \'alaa sayyidinaa Muhammadin shaahibil busyraa shalaatan tubasysyirunaa bihaa wa ahlanaa wa awlaadanaa wa jamii\'a masyaayikhinaa wa mu\'allimiinaa wa thalabatanaa wa thaalibaatinaa min yauminaa haadzaa ilaa yaumil aakhirah.',
            arti: 'Ya Allah, berikanlah sholawat dan salam kepada junjungan kami Nabi Muhammad, sang pembawa kabar gembira, dengan sholawat yang memberikan kabar gembira kepada kami, keluarga kami, anak-anak kami, guru-guru kami, murid-murid kami, sejak hari ini hingga hari kiamat.',
            faedah: 'Barangsiapa membacanya 41 kali setelah sholat Subuh, maka ia akan mendapatkan kabar gembira, kemudahan hajat, dan ketenangan hati.'
        },
        {
            id: 'nuridzati',
            title: 'Sholawat Nuridzati',
            desc: 'Sholawat untuk benteng diri dan cahaya hati',
            arabic: 'اَللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ اَلنُّوْرِ الذَّاتِيْ وَالسِّرِّ السَّارِيْ فِيْ سَائِرِ الْأَسْمَاءِ وَالصِّفَاتِ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ',
            latin: 'Allaahumma shalli wa sallim wa baarik \'alaa sayyidinaa Muhammadinin-nuuridz-dzaatii was-sirris-saarii fii saa-iril asmaa-i wash-shifaati wa \'alaa aalihi wa shahbihi wa sallim.',
            arti: 'Ya Allah, limpahkanlah sholawat, salam, dan berkah kepada junjungan kami Nabi Muhammad, cahaya Dzat-Nya dan rahasia yang mengalir pada seluruh nama dan sifat, juga kepada segenap keluarga dan sahabatnya.',
            faedah: 'Berguna untuk memohon perlindungan dari mara bahaya, menerangi hati yang gelap, dan membuka pintu sirr (rahasia ilahi).'
        }
    ];

    const listCont = document.getElementById('sholawat-list-container');
    listCont.innerHTML = sholawats.map(s => `
        <button onclick="openSholawatDetail('${s.id}')" class="w-full text-left bg-white p-4 sm:p-5 rounded-2xl  border border-gray-100 mb-4 hover:border-rose-300 hover:transition-all group relative overflow-hidden flex items-center gap-4">
            <div class="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 border border-rose-100 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="sparkles" class="w-5 h-5 group-hover:text-rose-600 transition-colors"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-gray-800 text-base">${s.title}</h3>
                <p class="text-[11px] sm:text-xs text-gray-400 mt-1 line-clamp-1">${s.desc}</p>
            </div>
            <div class="text-gray-300 group-hover:text-rose-400 transition-colors flex-shrink-0">
                <i data-lucide="chevron-right" class="w-5 h-5"></i>
            </div>
        </button>
    `).join('');

    window.openSholawatDetail = function(id) {
        const item = sholawats.find(s => s.id === id);
        if(!item) return;
        
        document.getElementById('sholawat-detail-title').textContent = item.title;
        document.getElementById('sholawat-detail-content').innerHTML = `
        <div class="bg-white rounded-2xl  border border-gray-100 p-6 relative overflow-hidden mb-8">
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-rose-50 rounded-full opacity-50"></div>
            
            <p class="font-quran text-2xl md:text-3xl text-right text-gray-800 mb-8 leading-loose font-auto-resize relative z-10" dir="rtl" style="line-height: 2.2;">
                ${item.arabic.replace(/\n/g, '<br/>')}
            </p>
            
            <div class="bg-rose-50/50 p-5 rounded-xl border border-rose-100 relative z-10">
                <h4 class="text-rose-800 font-bold mb-2">Latin:</h4>
                <p class="text-rose-700 font-medium text-sm md:text-base mb-4 leading-relaxed text-justify italic">
                    ${item.latin.replace(/\n/g, '<br/>')}
                </p>
                <div class="border-t border-rose-200/60 my-4"></div>
                <h4 class="text-gray-700 font-bold mb-2">Terjemahan:</h4>
                <p class="text-gray-600 text-xs md:text-sm leading-relaxed text-justify mb-4">
                    "${item.arti.replace(/\n/g, '<br/>')}"
                </p>
                <div class="border-t border-rose-200/60 my-4"></div>
                <h4 class="flex items-center gap-2 text-rose-600 font-bold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Faedah Manfaat:
                </h4>
                <p class="text-gray-600 text-xs md:text-sm leading-relaxed text-justify">
                    ${item.faedah}
                </p>
            </div>
        </div>
        `;
        
        const screen = document.getElementById('sholawat-detail-screen');
        screen.classList.remove('hidden');
        // force reflow
        void screen.offsetWidth;
        
        const contentDiv = document.getElementById('sholawat-detail-content');
        if (contentDiv) {
            contentDiv.scrollTop = 0;
        }
        window.scrollTo(0, 0);
        
        screen.classList.remove('translate-x-full');

        if (typeof App !== 'undefined' && App.pushModal) {
            App.pushModal(closeSholawatDetail);
        }
    };

    window.closeSholawatDetail = function() {
        const screen = document.getElementById('sholawat-detail-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => {
            screen.classList.add('hidden');
            document.getElementById('sholawat-detail-content').innerHTML = '';
        }, 300);
    };

    if (typeof lucide !== 'undefined') lucide.createIcons();
};
