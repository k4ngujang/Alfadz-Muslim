export const render = () => `
<div id="wudhu-main-screen" class="transition-all duration-300 relative z-20">
    <div class="bg-white px-6 py-4 sticky top-0 z-[100] flex items-center justify-between border-b border-gray-100">
        <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0">
            <i data-lucide="arrow-left" class="w-5 h-5 text-gray-700"></i>
            <span class="text-sm font-bold text-gray-700">Kembali</span>
        </a>
        <div class="flex flex-col text-right">
            <h1 class="text-xl font-bold text-gray-800">Menu Wudhu</h1>
            <p class="text-xs text-gray-500">Panduan Lengkap & Doa</p>
        </div>
        <div class="w-10 h-10 rounded-full bg-secondary border border-primary/10 flex items-center justify-center text-primary ">
            <i data-lucide="droplets" class="w-5 h-5"></i>
        </div>
    </div>

    <div class="container mx-auto px-5 py-8 pb-32 w-full space-y-4">
        <!-- Bacaan & Tata Cara Berwudhu -->
        <button onclick="openWudhuTab('cara')" class="w-full text-left bg-gradient-to-r from-sky-500 to-sky-600 p-6 rounded-2xl border border-sky-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="user-check" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">Bacaan & Tata Cara Berwudhu</h3>
                <p class="text-xs text-sky-100 mt-1 opacity-90">Urutan gerakan disertai bacaan doa lengkap & arti.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Sunnah Wudhu -->
        <button onclick="openWudhuTab('sunnah')" class="w-full text-left bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 rounded-2xl border border-indigo-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="sparkles" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">9 Sunnah Wudhu</h3>
                <p class="text-xs text-indigo-100 mt-1 opacity-90">Amalan sunnah untuk menyempurnakan wudhu.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>

        <!-- Rukun Wudhu -->
        <button onclick="openWudhuTab('rukun')" class="w-full text-left bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl border border-purple-400 hover: transition-all group overflow-hidden flex items-center gap-5">
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="list-checks" class="w-7 h-7"></i>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-white text-lg">6 Rukun Wudhu</h3>
                <p class="text-xs text-purple-100 mt-1 opacity-90">Perkara wajib dalam berwudhu.</p>
            </div>
            <i data-lucide="chevron-right" class="w-7 h-7 text-white/50 group-hover:text-white transition-colors flex-shrink-0"></i>
        </button>
    </div>
</div>

<div id="wudhu-detail-screen" class="hidden bg-[#F8F9FB] min-h-screen fixed inset-0 z-[60] transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[110] flex items-center justify-between border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-sky-50 hover:text-sky-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col text-right">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="wudhu-detail-title">Detail</h1>
        </div>
    </div>
    <div class="container mx-auto px-4 py-6 pb-32 w-full flex-1 overflow-y-auto" id="wudhu-detail-content">
    </div>
</div>
`;

export const init = () => {
    const wudhuSteps = [
        {
            title: "1. Membaca Basmalah & Cuci Tangan",
            rukun: false,
            desc: "Membaca Basmalah sambil mencuci kedua telapak tangan hingga sela-sela jari sebanyak 3 kali.",
            arab: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ . اَلْحَمْدُ لِلّٰهِ الَّذِيْ جَعَلَ الْمَاءَ طَهُوْرًا",
            latin: "Bismillaahir rahmaanir rahiim. Alhamdulillaahilladzii ja'alal maa-a thahuuraa.",
            arti: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah yang telah menjadikan air ini suci dan menyucikan."
        },
        {
            title: "2. Berkumur-kumur",
            rukun: false,
            desc: "Berkumur 3 kali untuk membersihkan sisa makanan di mulut, sambil membaca doa:",
            arab: "اَللّٰهُمَّ أَعِنِّيْ عَلَى تِلَاوَةِ الْقُرْآنِ وَذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            latin: "Allaahumma a'innii 'alaa tilaawatil qur'aani wa dzikrika wa syukrika wa husni 'ibaadatik.",
            arti: "Ya Allah, tolonglah aku untuk membaca Al-Quran, berdzikir (mengingat-Mu), bersyukur kepada-Mu, dan beribadah dengan baik kepada-Mu."
        },
        {
            title: "3. Membasuh Hidung",
            rukun: false,
            desc: "Menghirup air ke hidung (Istinsyaq) dan mengeluarkannya 3 kali sambil membaca doa:",
            arab: "اَللّٰهُمَّ أَرِحْنِيْ رَائِحَةَ الْجَنَّةِ وَأَنْتَ عَنِّيْ رَاضٍ",
            latin: "Allaahumma arihnii raa-ihatal jannati wa anta 'annii raadhin.",
            arti: "Ya Allah, berilah aku penciuman wangi surga, dan Engkau ridha kepadaku."
        },
        {
            title: "4. Niat & Membasuh Wajah",
            rukun: true, 
            desc: "Lafalkan Niat (Lisan) saat mengambil air. Saat air menyentuh wajah, <strong>niatkan di dalam hati</strong> (Rukun) dan basuh wajah secara merata 3 kali.",
            multiBlock: [
                {
                    label: "LAFAL NIAT (WAJIB)",
                    arab: "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
                    latin: "Nawaitul wudhuu-a liraf'il hadatsil ashghari fardhal lillaahi ta'aalaa.",
                    arti: "Saya niat berwudhu untuk menghilangkan hadats kecil fardu karena Allah Ta'ala."
                },
                {
                    label: "DOA MEMBASUH WAJAH (SUNNAH)",
                    arab: "اَللّٰهُمَّ بَيِّضْ وَجْهِيْ يَوْمَ تَبْيَضُّ وُجُوْهٌ وَتَسْوَدُّ وُجُوْهٌ",
                    latin: "Allaahumma bayyidh wajhii yauma tabyadh-dhu wujuuhun wa taswaddu wujuuh.",
                    arti: "Ya Allah, putihkanlah wajahku pada hari di mana wajah-wajah memutih dan wajah-wajah menghitam."
                }
            ]
        },
        {
            title: "5. Membasuh Tangan Kanan",
            rukun: true, 
            desc: "Membasuh tangan kanan hingga siku 3 kali sambil membaca:",
            arab: "اَللّٰهُمَّ أَعْطِنِيْ كِتَابِيْ بِيَمِيْنِيْ وَحَاسِبْنِيْ حِسَابًا يَسِيْرًا",
            latin: "Allaahumma a'thinii kitaabii bi yamiinii wa haasibnii hisaaban yasiiraa.",
            arti: "Ya Allah, berikanlah kitab amalku dari arah kananku dan hisablah aku dengan hisab yang mudah."
        },
        {
            title: "6. Membasuh Tangan Kiri",
            rukun: true, 
            desc: "Membasuh tangan kiri hingga siku 3 kali sambil membaca:",
            arab: "اَللّٰهُمَّ لَا تُعْطِنِيْ كِتَابِيْ بِشِمَالِيْ وَلَا مِنْ وَرَاءِ ظَهْرِيْ",
            latin: "Allaahumma laa tu'thinii kitaabii bi syimaalii wa laa min waraa-i dzahrii.",
            arti: "Ya Allah, janganlah Engkau berikan kitab amalku dari arah kiriku dan jangan pula dari arah belakang punggungku."
        },
        {
            title: "7. Mengusap Kepala",
            rukun: true, 
            desc: "Mengusap seluruh atau sebagian kepala 3 kali sambil membaca:",
            arab: "اَللّٰهُمَّ حَرِّمْ شَعْرِيْ وَبَشَرِيْ عَلَى النَّارِ",
            latin: "Allaahumma harrim sya'rii wa basyarii 'alan naar.",
            arti: "Ya Allah, haramkanlah rambutku dan kulitku tersentuh api neraka."
        },
        {
            title: "8. Mengusap Telinga",
            rukun: false,
            desc: "Mengusap kedua telinga (luar & dalam) 3 kali secara bersamaan, sambil membaca:",
            arab: "اَللّٰهُمَّ اجْعَلْنِيْ مِنَ الَّذِيْنَ يَسْتَمِعُوْنَ الْقَوْلَ فَيَتَّبِعُوْنَ أَحْسَنَهُ",
            latin: "Allaahummaj'alnii minal ladziina yastami'uunal qaula fayattabi'uuna ahsanah.",
            arti: "Ya Allah, jadikanlah aku termasuk orang-orang yang mendengarkan perkataan lalu mengikuti yang terbaik darinya."
        },
        {
            title: "9. Membasuh Kaki",
            rukun: true, 
            desc: "Membasuh kaki hingga mata kaki (pastikan sela-sela jari terkena air) 3 kali. Kanan lalu kiri, sambil membaca:",
            arab: "اَللّٰهُمَّ ثَبِّتْ قَدَمَيَّ عَلَى الصِّرَاطِ يَوْمَ تَزِلُّ الْأَقْدَامُ",
            latin: "Allaahumma tsabbit qadamayya 'alash shiraathi yauma tazillul aqdaam.",
            arti: "Ya Allah, tetapkanlah kedua kakiku di atas titian shiraath pada hari di mana kaki-kaki tergelincir."
        },
        {
            title: "10. Doa Setelah Wudhu",
            rukun: false,
            desc: "Menghadap kiblat mengangkat tangan dan berdoa dengan khusyuk:",
            arab: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِيْ مِنَ التَّوَّابِيْنَ، وَاجْعَلْنِيْ مِنَ الْمُتَطَهِّرِيْنَ. سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ",
            latin: "Asyhadu allaa ilaaha illallaah wahdahu laa syariika lahu, wa asyhadu anna muhammadan 'abduhu wa rasuuluhu. Allaahummaj'alnii minat tawwaabiina waj'alnii minal mutathahhiriin. Subhaanaka allaahumma wa bihamdika asyhadu allaa ilaaha illaa anta astaghfiruka wa atuubu ilaik.",
            arti: "Aku bersaksi bahwa tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Nabi Muhammad adalah hamba dan utusan-Nya. Ya Allah, jadikanlah aku termasuk orang-orang yang bertaubat dan jadikanlah aku termasuk orang-orang yang bersuci. Maha Suci Engkau Ya Allah dan dengan memuji-Mu, aku bersaksi bahwa tiada Tuhan selain Engkau, aku memohon ampunan dan bertaubat kepada-Mu."
        }
    ];

    const rukunWudhu = [
        { title: "1. Niat", desc: "Niat dilakukan di dalam hati pada saat pertama kali membasuh anggota wudhu (wajah)."},
        { title: "2. Membasuh Wajah", desc: "Membasuh seluruh bagian wajah secara merata."},
        { title: "3. Membasuh Kedua Tangan", desc: "Membasuh tangan hingga ke siku."},
        { title: "4. Mengusap Sebagian Kepala", desc: "Mengusap air ke sebagian rambut atau kulit kepala."},
        { title: "5. Membasuh Kedua Kaki", desc: "Membasuh kaki beserta kedua mata kaki."},
        { title: "6. Tertib", desc: "Melakukan urutan wudhu di atas sesuai dengan urutannya."}
    ];

    const sunnahWudhu = [
        { title: "Membaca Basmalah", desc: "Dibaca pada permulaan berwudhu."},
        { title: "Mencuci Telapak Tangan", desc: "Mencuci tangan hingga pergelangan tangan sebelum membasuh wajah."},
        { title: "Berkumur-kumur", desc: "Membersihkan mulut dengan air."},
        { title: "Membersihkan Lubang Hidung", desc: "Menghirup air ke hidung lalu mengeluarkannya."},
        { title: "Mengusap Seluruh Kepala", desc: "Membasahi seluruh bagian rambut kepala."},
        { title: "Mengusap Kedua Telinga", desc: "Membersihkan bagian luar dan dalam telinga."},
        { title: "Mendahulukan Anggota Kanan", desc: "Selalu memulai dari bagian tubuh sebelah kanan."},
        { title: "Mengulang Sebanyak 3 Kali", desc: "Setiap gerakan sunnah diulang tiga kali."},
        { title: "Membaca Doa Sesudah Wudhu", desc: "Berdoa sambil menghadap kiblat setelah selesai."}
    ];

    window.openWudhuTab = function(type) {
        const titleEl = document.getElementById('wudhu-detail-title');
        const contentEl = document.getElementById('wudhu-detail-content');
        let html = '';

        if (type === 'cara') {
            titleEl.textContent = "Bacaan & Tata Cara Wudhu";
            html = wudhuSteps.map((step, idx) => {
                let blockHtml = '';
                if (step.multiBlock) {
                    blockHtml = step.multiBlock.map(block => `
                        <div class="bg-secondary/40 p-4 rounded-xl border border-primary/5 mb-3 last:mb-0">
                            <p class="text-[10px] font-bold text-gray-400 mb-2 uppercase">${block.label}</p>
                            <p class="font-quran text-2xl text-right text-gray-800 mb-4 mt-4 leading-[3]" dir="rtl">${block.arab}</p>
                            <p class="text-primary font-bold text-xs mb-1">${block.latin}</p>
                            <p class="text-gray-500 text-[10px] italic leading-relaxed">"${block.arti}"</p>
                        </div>
                    `).join('');
                } else {
                    blockHtml = `
                        <div class="bg-secondary/40 p-4 rounded-xl border border-primary/5">
                            <p class="font-quran text-2xl text-right text-gray-800 mb-4 mt-4 leading-[3]" dir="rtl">${step.arab}</p>
                            <p class="text-primary font-bold text-xs mb-1">${step.latin}</p>
                            <p class="text-gray-500 text-[10px] italic leading-relaxed">"${step.arti}"</p>
                        </div>
                    `;
                }

                return `
                <div class="bg-white rounded-2xl  border border-gray-100 p-5 relative mb-6">
                    ${step.rukun ? '<div class="absolute top-0 right-0 bg-orange-100 text-orange-700 text-[9px] font-extrabold px-3 py-1 rounded-bl-xl">RUKUN</div>' : ''}
                    <div class="flex items-center mb-3">
                        <span class="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 text-xs ">${idx + 1}</span>
                        <h3 class="font-bold text-gray-800 text-sm">${step.title}</h3>
                    </div>
                    <p class="text-gray-600 text-xs mb-4 leading-relaxed">${step.desc}</p>
                    ${blockHtml}
                </div>
                `;
            }).join('');
        }
        else if (type === 'rukun') {
            titleEl.textContent = "6 Rukun Wudhu";
            html = `
                <div class="bg-purple-50 p-5 rounded-2xl border border-purple-100 mb-6">
                    <p class="text-xs text-purple-800 leading-relaxed font-medium">Rukun wudhu adalah hal-hal wajib yang harus dilakukan saat berwudhu. Jika salah satu ditinggalkan secara sengaja maupun tidak, maka wudhu dianggap tidak sah.</p>
                </div>
                <div class="grid gap-4">
                    ${rukunWudhu.map((r, i) => `
                        <div class="bg-white p-5 rounded-2xl  border border-gray-100 flex gap-4 items-start">
                            <div class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold shrink-0 text-sm ">${i+1}</div>
                            <div>
                                <h3 class="font-bold text-gray-800 mb-1">${r.title}</h3>
                                <p class="text-xs text-gray-500 leading-relaxed">${r.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        else if (type === 'sunnah') {
            titleEl.textContent = "9 Sunnah Wudhu";
            html = `
                <div class="bg-indigo-50 p-5 rounded-2xl border border-indigo-100 mb-6">
                    <p class="text-xs text-indigo-800 leading-relaxed font-medium">Sunnah wudhu adalah amalan-amalan yang dianjurkan oleh Rasulullah Shallallahu 'alaihi wa sallam untuk menambah pahala dan menyempurnakan kesucian wudhu kita.</p>
                </div>
                <div class="grid gap-3">
                    ${sunnahWudhu.map((s) => `
                        <div class="bg-white p-4 rounded-xl  border border-gray-100 flex items-center gap-4">
                            <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                            <div>
                                <h3 class="font-bold text-gray-800 text-sm">${s.title}</h3>
                                <p class="text-[11px] text-gray-500">${s.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        contentEl.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        const screen = document.getElementById('wudhu-detail-screen');
        screen.classList.remove('hidden');
        void screen.offsetWidth;
        screen.classList.remove('translate-x-full');
        
        if (typeof App !== 'undefined' && App.pushModal) {
            App.pushModal(closeWudhuTab);
        }
    };

    window.closeWudhuTab = function(shouldPopHistory = true) {
        const screen = document.getElementById('wudhu-detail-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => screen.classList.add('hidden'), 300);
    };

    if (typeof lucide !== 'undefined') lucide.createIcons();
};
