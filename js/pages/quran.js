export const render = () => `
<div class="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100 mb-4">
        <div class="container mx-auto px-4 py-3 w-full flex items-center justify-between">
            <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0 mr-4">
                <i data-lucide="arrow-left" class="w-5 h-5 text-primary"></i>
                <span class="text-sm font-bold text-primary">Kembali</span>
            </a>
            <h1 class="text-lg font-bold text-gray-800 text-right">Al-Quran Digital</h1>
        </div>
    </div>

    <div class="container mx-auto px-4 w-full">
        <div class="bg-primary rounded-2xl p-6 mb-4 relative overflow-hidden  ">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4=')] opacity-10"></div>
            <h1 class="text-white text-2xl text-center mb-2 font-quran">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h1>
            <p class="text-white text-center text-sm opacity-90" id="current-date"></p>
        </div>

        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-800">Daftar Surat</h2>
            <a href="bookmark" class="text-primary flex items-center group text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
                Tersimpan
            </a>
        </div>

        <div class="flex mb-6 bg-white p-1.5 rounded-full  border border-gray-200">
            <button onclick="switchTab('surah')" id="tabSurah" class="flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white transform tab-active">Surat</button>
            <button onclick="switchTab('juz')" id="tabJuz" class="flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300 tab-inactive">Juz</button>
        </div>

        <div class="relative mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input type="text" id="searchInput" placeholder="Cari surat..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white ">
        </div>

        <div id="loadingState" class="text-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p class="text-gray-500 mt-2">Memuat daftar...</p>
        </div>

        <div id="errorState" class="text-center py-8 hidden">
            <p class="text-red-500">Gagal memuat data. Silakan periksa koneksi internet.</p>
            <button onclick="fetchSurahList()" class="mt-2 text-primary hover:underline">Coba lagi</button>
        </div>

        <div id="surahList" class="space-y-3"></div>
        <div id="juzList" class="space-y-3 hidden"></div>
    </div>
`;

export const init = () => {

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').textContent = new Date().toLocaleDateString('id-ID', options);

        const surahListEl = document.getElementById('surahList');
        const juzListEl = document.getElementById('juzList');
        const loadingState = document.getElementById('loadingState');
        const errorState = document.getElementById('errorState');
        const searchInput = document.getElementById('searchInput');
        let allSurahs = [];
        let currentTab = 'surah';

        const juzMapping = [
            { id: 1, surah: 1, verse: 1, text: "Al-Fatihah 1 - Al-Baqarah 141" },
            { id: 2, surah: 2, verse: 142, text: "Al-Baqarah 142 - Al-Baqarah 252" },
            { id: 3, surah: 2, verse: 253, text: "Al-Baqarah 253 - Ali 'Imran 92" },
            { id: 4, surah: 3, verse: 93, text: "Ali 'Imran 93 - An-Nisa' 23" },
            { id: 5, surah: 4, verse: 24, text: "An-Nisa' 24 - An-Nisa' 147" },
            { id: 6, surah: 4, verse: 148, text: "An-Nisa' 148 - Al-Ma'idah 81" },
            { id: 7, surah: 5, verse: 82, text: "Al-Ma'idah 82 - Al-An'am 110" },
            { id: 8, surah: 6, verse: 111, text: "Al-An'am 111 - Al-A'raf 87" },
            { id: 9, surah: 7, verse: 88, text: "Al-A'raf 88 - Al-Anfal 40" },
            { id: 10, surah: 8, verse: 41, text: "Al-Anfal 41 - At-Taubah 92" },
            { id: 11, surah: 9, verse: 93, text: "At-Taubah 93 - Hud 5" },
            { id: 12, surah: 11, verse: 6, text: "Hud 6 - Yusuf 52" },
            { id: 13, surah: 12, verse: 53, text: "Yusuf 53 - Ibrahim 52" },
            { id: 14, surah: 15, verse: 1, text: "Al-Hijr 1 - An-Nahl 128" },
            { id: 15, surah: 17, verse: 1, text: "Al-Isra' 1 - Al-Kahf 74" },
            { id: 16, surah: 18, verse: 75, text: "Al-Kahf 75 - Ta-Ha 135" },
            { id: 17, surah: 21, verse: 1, text: "Al-Anbiya' 1 - Al-Hajj 78" },
            { id: 18, surah: 23, verse: 1, text: "Al-Mu'minun 1 - Al-Furqan 20" },
            { id: 19, surah: 25, verse: 21, text: "Al-Furqan 21 - An-Naml 55" },
            { id: 20, surah: 27, verse: 56, text: "An-Naml 56 - Al-Ankabut 45" },
            { id: 21, surah: 29, verse: 46, text: "Al-Ankabut 46 - Al-Ahzab 30" },
            { id: 22, surah: 33, verse: 31, text: "Al-Ahzab 31 - Ya-Sin 27" },
            { id: 23, surah: 36, verse: 28, text: "Ya-Sin 28 - Az-Zumar 31" },
            { id: 24, surah: 39, verse: 32, text: "Az-Zumar 32 - Fussilat 46" },
            { id: 25, surah: 41, verse: 47, text: "Fussilat 47 - Al-Jasiyah 37" },
            { id: 26, surah: 46, verse: 1, text: "Al-Ahqaf 1 - Az-Zariyat 30" },
            { id: 27, surah: 51, verse: 31, text: "Az-Zariyat 31 - Al-Hadid 29" },
            { id: 28, surah: 58, verse: 1, text: "Al-Mujadilah 1 - At-Tahrim 12" },
            { id: 29, surah: 67, verse: 1, text: "Al-Mulk 1 - Al-Mursalat 50" },
            { id: 30, surah: 78, verse: 1, text: "An-Naba' 1 - An-Nas 6" }
        ];

        window.fetchSurahList = async function() {
            try {
                loadingState.classList.remove('hidden');
                errorState.classList.add('hidden');
                surahListEl.classList.add('hidden');
                surahListEl.innerHTML = '';

                const response = await fetch('https://equran.id/api/v2/surat');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                allSurahs = data.data;
                
                renderSurahs(allSurahs);
                renderJuzs(); 
                
                loadingState.classList.add('hidden');
                if(currentTab === 'surah') surahListEl.classList.remove('hidden');
                else juzListEl.classList.remove('hidden');
                
            } catch (error) {
                console.error('Error fetching surah list:', error);
                loadingState.classList.add('hidden');
                errorState.classList.remove('hidden');
            }
        }

        window.renderSurahs = function(surahs) {
            surahListEl.innerHTML = surahs.map(surah => {
                const displayName = surah.namaLatin.replace(/^(Al-|Al )/i, '');
                return `
                <a href="surah-detail?id=${surah.nomor}" 
                   class="bg-white p-4 rounded-xl  flex justify-between items-center border border-gray-100 hover:transition-shadow duration-200 group">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-semibold mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            ${surah.nomor}
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800">${displayName}</h3>
                            <p class="text-sm text-gray-500">${surah.arti}</p>
                            <p class="text-xs text-primary">${surah.tempatTurun}</p>
                        </div>
                    </div>
                    <div class="text-end">
                        <p class="text-xl font-quran mb-1">${surah.nama}</p>
                        <p class="text-sm text-primary">${surah.jumlahAyat} ayat</p>
                    </div>
                </a>
            `}).join('');
        }

        window.renderJuzs = function() {
            juzListEl.innerHTML = juzMapping.map(juz => `
                <a href="surah-detail?id=${juz.surah}&verse=${juz.verse}&juz=${juz.id}" 
                   class="bg-white p-4 rounded-xl  flex justify-between items-center border border-gray-100 hover:transition-shadow duration-200 group">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-xl mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            ${juz.id}
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800">Juz ${juz.id}</h3>
                            <p class="text-sm text-gray-500 line-clamp-1">${juz.text}</p>
                        </div>
                    </div>
                    <div class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </a>
            `).join('');
        }

        window.switchTab = function(tab) {
            currentTab = tab;
            const tabSurah = document.getElementById('tabSurah');
            const tabJuz = document.getElementById('tabJuz');
            if (tab === 'surah') {
                tabSurah.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white transform tab-active";
                tabJuz.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300 tab-inactive";
                surahListEl.classList.remove('hidden');
                juzListEl.classList.add('hidden');
                searchInput.placeholder = "Cari surat...";
                searchInput.value = '';
                renderSurahs(allSurahs); 
            } else {
                tabJuz.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white transform tab-active";
                tabSurah.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300 tab-inactive";
                surahListEl.classList.add('hidden');
                juzListEl.classList.remove('hidden');
                searchInput.placeholder = "Cari nomor juz (1-30)...";
                searchInput.value = '';
                renderJuzs(); 
            }
        }

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            if (currentTab === 'surah') {
                const filteredSurahs = allSurahs.filter(surah => 
                    surah.namaLatin.toLowerCase().includes(searchTerm) ||
                    surah.arti.toLowerCase().includes(searchTerm) ||
                    surah.nama.includes(searchTerm)
                );
                renderSurahs(filteredSurahs);
            } else {
                const filteredJuz = juzMapping.filter(juz => 
                    juz.id.toString().includes(searchTerm) || 
                    juz.text.toLowerCase().includes(searchTerm)
                );
                juzListEl.innerHTML = filteredJuz.map(juz => `
                <a href="surah-detail?id=${juz.surah}&verse=${juz.verse}&juz=${juz.id}" 
                   class="bg-white p-4 rounded-xl  flex justify-between items-center border border-gray-100 hover:transition-shadow duration-200 group">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-xl mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            ${juz.id}
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800">Juz ${juz.id}</h3>
                            <p class="text-sm text-gray-500 line-clamp-1">${juz.text}</p>
                        </div>
                    </div>
                    <div class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </a>
                `).join('');
            }
        });

        fetchSurahList();
};
