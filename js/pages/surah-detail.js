export const render = () => {
    console.log("Surah Detail Module Load Check");
    return `
<div class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300" id="topBar">
        <div class="container mx-auto px-4 py-3 w-full">
            <div class="flex items-center justify-between">
                <a href="quran" class="flex items-center gap-2 px-3 py-2 text-primary hover:bg-primary/10 rounded-xl transition-colors relative z-50 border border-transparent hover:border-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span class="text-sm font-bold">Kembali</span>
                </a>
                
                <h1 id="headerTitle" class="font-bold text-gray-800 text-base md:text-lg absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 pointer-events-none text-center w-full">
                    Nama Surat
                </h1>

                <button id="settingsToggleBtn" onclick="toggleSettings()" class="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative z-50 border border-transparent hover:border-gray-200">
                    <span class="text-sm font-medium hidden sm:inline-block">Tampilan</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
            <div id="settingsPanel" class="settings-panel hidden flex-col gap-4 border-t border-gray-100 mt-2">
                <div class="px-2">
                    <div class="flex justify-between items-center mb-3">
                        <label class="text-sm text-gray-700 font-bold">Ukuran Font Arab</label>
                        <span id="fontSizeLabel" class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">24px</span>
                    </div>
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-gray-400 text-sm font-medium">A<span class="text-[10px] block -mt-1">Kecil</span></span>
                        <input type="range" min="18" max="48" value="24" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" id="fontSizeRange" oninput="changeFontSize(this.value)">
                        <span class="text-gray-600 text-xl font-bold">A<span class="text-[10px] font-normal block -mt-1 text-center">Besar</span></span>
                    </div>
                </div>
                <hr class="border-gray-100">
                <div class="px-2">
                    <div class="flex justify-between items-center mb-3">
                        <label class="text-sm text-gray-700 font-bold">Spasi Antar Ayat</label>
                        <span id="lineHeightLabel" class="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">2.5</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="text-gray-400 text-[10px] text-center w-8 font-medium">Rapat</span>
                        <input type="range" min="1.0" max="5.0" step="0.5" value="2.5" class="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" id="lineHeightRange" oninput="changeLineHeight(this.value)">
                        <span class="text-gray-600 text-[10px] text-center w-8 font-bold">Renggang</span>
                    </div>
                </div>
                <hr class="border-gray-100">
                <div id="toggleContainer" class="flex gap-2">
                    <div class="flex-1 flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 cursor-pointer" onclick="document.getElementById('toggleLatin').click()">
                        <span class="text-sm text-gray-700 font-medium">Latin</span>
                        <div class="relative inline-block w-10 align-middle select-none pointer-events-none">
                            <input type="checkbox" id="toggleLatin" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none transition-all duration-300 right-0 border-[#0E6251]" checked onclick="event.stopPropagation(); toggleVisibility('latin')"/>
                            <label for="toggleLatin" class="toggle-label block overflow-hidden h-5 rounded-full bg-primary transition-colors duration-300"></label>
                        </div>
                    </div>
                    <div class="flex-1 flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 cursor-pointer" onclick="document.getElementById('toggleTrans').click()">
                        <span class="text-sm text-gray-700 font-medium">Arti</span>
                        <div class="relative inline-block w-10 align-middle select-none pointer-events-none">
                            <input type="checkbox" id="toggleTrans" class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none transition-all duration-300 right-0 border-[#0E6251]" checked onclick="event.stopPropagation(); toggleVisibility('translation')"/>
                            <label for="toggleTrans" class="toggle-label block overflow-hidden h-5 rounded-full bg-primary transition-colors duration-300"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 py-4 w-full pt-4">
        <div class="relative overflow-hidden rounded-3xl bg-primary  p-6 text-white mb-6">
            <div class="absolute inset-0 pattern-bg opacity-20"></div>
            <div class="relative z-10 text-center">
                <h2 class="text-2xl font-bold mb-1 tracking-wide" id="surahTitle">Loading...</h2>
                <p class="text-sm opacity-90 mb-4 font-medium tracking-wide" id="surahInfo">...</p>
                <div class="w-full h-px bg-white/30 my-4 mx-auto"></div>
                <div class="mb-8 mt-6">
                    <p class="font-quran text-4xl leading-loose" id="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-auto">
                    <button onclick="showSurahInfo()" class="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3.5 rounded-xl transition-colors border border-white/10  group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/90 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span class="text-xs font-bold tracking-wider uppercase text-white">Lihat Tafsir</span>
                    </button>
                    <button id="headerPlayBtn" class="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3.5 rounded-xl transition-colors border border-white/10  group">
                        <svg id="headerPlayIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/90 group-hover:text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        <svg id="headerPauseIcon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/90 group-hover:text-white fill-none hidden" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6v12m4-12v12" /></svg>
                        <span id="headerPlayText" class="text-xs font-bold tracking-wider uppercase text-white">Play Audio</span>
                        <div id="miniVisualizer" class="hidden h-3 items-end gap-0.5 ml-1"><div class="mini-bar"></div><div class="mini-bar"></div><div class="mini-bar"></div></div>
                    </button>
                </div>
                <div id="resetButtonContainer" class="hidden mt-4">
                    <button id="resetButton" class="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20 mx-auto text-white/90 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        <span class="text-xs font-medium">Reset Audio</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="flex justify-center mb-8 scroll-mt-24" id="viewModeContainer">
            <div class="bg-white p-1.5 rounded-full border border-gray-200 flex w-full relative">
                <button onclick="changeViewMode('list')" id="btnViewList" class="flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white transform">Per Ayat</button>
                <button onclick="changeViewMode('mushaf')" id="btnViewMushaf" class="flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300">Mushaf</button>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-3 w-full mx-auto mb-8">
            <button onclick="openVerseModal()" class="flex items-center justify-between w-full bg-white rounded-xl  border border-gray-200 py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <span id="verseBtnText" class="truncate">Pilih Ayat</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <button onclick="openQariModal()" class="flex items-center justify-between w-full bg-white rounded-xl  border border-gray-200 py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <span id="qariBtnText" class="truncate">Misyari Rasyid</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
        </div>

        <div id="loadingState" class="text-center py-12">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto"></div>
            <p class="text-gray-500 mt-3 font-medium">Memuat data...</p>
        </div>

        <div id="versesContainer" class="hidden pb-10"></div>
    </div>

    <div id="tafsirModal" class="fixed inset-0 z-[100] hidden items-end sm:items-center justify-center">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity opacity-0" id="tafsirBackdrop" onclick="App.popModal()"></div>
        <div id="tafsirContainer" class="relative w-full sm:w-full bg-white rounded-t-3xl sm:rounded-3xl  transform transition-all duration-300 translate-y-full sm:translate-y-8 sm:scale-95 sm:opacity-0 max-h-[85vh] flex flex-col z-10 overflow-hidden">
            <div class="w-full flex justify-center pt-3 pb-1 sm:hidden cursor-pointer" onclick="App.popModal()">
                <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
            <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-white sm:rounded-t-3xl sticky top-0 z-20">
                <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
                     <i data-lucide="arrow-left" class="w-5 h-5"></i>
                     <span class="text-sm font-bold">Kembali</span>
                </button>
                <div class="flex flex-col text-right">
                    <h3 class="text-lg font-bold text-gray-800 truncate" id="tafsirModalTitle">Info</h3>
                </div>
            </div>
            <div class="p-6 overflow-y-auto flex-1 min-h-0 bg-gray-50" id="tafsirContent"></div>
        </div>
    </div>

    <!-- Verse Selector Modal -->
    <div id="verseModal" class="fixed inset-0 z-[100] hidden items-end sm:items-center justify-center">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity opacity-0" id="verseBackdrop" onclick="App.popModal()"></div>
        <div id="verseContainer" class="relative w-full sm:w-full bg-white rounded-t-3xl sm:rounded-3xl  transform transition-all duration-300 translate-y-full sm:translate-y-8 sm:scale-95 sm:opacity-0 max-h-[75vh] flex flex-col z-10 overflow-hidden">
            <div class="w-full flex justify-center pt-3 pb-1 sm:hidden cursor-pointer" onclick="App.popModal()">
                <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
            <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
                     <i data-lucide="arrow-left" class="w-5 h-5"></i>
                     <span class="text-sm font-bold">Kembali</span>
                </button>
                <div class="flex flex-col text-right">
                    <h3 class="text-lg font-bold text-gray-800">Pilih Ayat</h3>
                </div>
            </div>
            <div class="p-2 overflow-y-auto flex-1 min-h-0">
                <div class="flex flex-col gap-2 p-2" id="verseGrid">
                    <!-- Verse buttons will be rendered here -->
                </div>
            </div>
        </div>
    </div>

    <!-- Qari Selector Modal -->
    <div id="qariModal" class="fixed inset-0 z-[100] hidden items-end sm:items-center justify-center">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity opacity-0" id="qariBackdrop" onclick="App.popModal()"></div>
        <div id="qariContainer" class="relative w-full sm:w-full bg-white rounded-t-3xl sm:rounded-3xl  transform transition-all duration-300 translate-y-full sm:translate-y-8 sm:scale-95 sm:opacity-0 max-h-[70vh] flex flex-col z-10 overflow-hidden">
            <div class="w-full flex justify-center pt-3 pb-1 sm:hidden cursor-pointer" onclick="App.popModal()">
                <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
            <div class="p-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
                     <i data-lucide="arrow-left" class="w-5 h-5"></i>
                     <span class="text-sm font-bold">Kembali</span>
                </button>
                <div class="flex flex-col text-right">
                    <h3 class="text-lg font-bold text-gray-800">Pilih Qari</h3>
                </div>
            </div>
            <div class="p-2 overflow-y-auto flex-1 min-h-0">
                <div class="flex flex-col gap-1 p-2" id="qariList">
                    <button onclick="selectQari('05', 'Misyari Rasyid')" class="qari-btn flex items-center justify-between p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent text-left group">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-emerald-100/50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-200/50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </div>
                            <div><span class="font-bold text-gray-800 block">Misyari Rasyid</span></div>
                        </div>
                    </button>
                    <button onclick="selectQari('01', 'Abdullah Al-Juhany')" class="qari-btn flex items-center justify-between p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent text-left group">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-emerald-100/50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-200/50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </div>
                            <div><span class="font-bold text-gray-800 block">Abdullah Al-Juhany</span></div>
                        </div>
                    </button>
                    <button onclick="selectQari('02', 'Abdul Muhsin')" class="qari-btn flex items-center justify-between p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent text-left group">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-emerald-100/50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-200/50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </div>
                            <div><span class="font-bold text-gray-800 block">Abdul Muhsin</span></div>
                        </div>
                    </button>
                    <button onclick="selectQari('03', 'Abdurrahman Sudais')" class="qari-btn flex items-center justify-between p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent text-left group">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-emerald-100/50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-200/50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </div>
                            <div><span class="font-bold text-gray-800 block">Abdurrahman Sudais</span></div>
                        </div>
                    </button>
                    <button onclick="selectQari('04', 'Ibrahim Al-Dossari')" class="qari-btn flex items-center justify-between p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent text-left group">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-emerald-100/50 text-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-200/50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                            </div>
                            <div><span class="font-bold text-gray-800 block">Ibrahim Al-Dossari</span></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div id="toast" class="toast"></div>
    <audio id="audioPlayer" preload="auto"></audio>
    `;
};

export const init = () => {
 // Sekarang aman karena script sudah diload

        let currentSurah = null; let tafsirData = []; let currentVerseAudio = null; let selectedQari = '05'; 
        let viewMode = 'list'; let mushafPage = 0; const VERSES_PER_PAGE = 10; let currentlyPlayingVerse = null;
        let currentFontSize = localStorage.getItem('quranFontSize') || 24;
        let currentLineHeight = localStorage.getItem('quranLineHeight') || 2.5;
        
        const audioPlayer = document.getElementById('audioPlayer');
        const versesContainer = document.getElementById('versesContainer');
        const loadingState = document.getElementById('loadingState');
        const headerTitle = document.getElementById('headerTitle');
        const bismillahElement = document.getElementById('bismillah');
        const headerPlayBtn = document.getElementById('headerPlayBtn');
        const headerPlayIcon = document.getElementById('headerPlayIcon');
        const headerPauseIcon = document.getElementById('headerPauseIcon');
        const headerPlayText = document.getElementById('headerPlayText');
        const miniVisualizer = document.getElementById('miniVisualizer');
        const resetButtonContainer = document.getElementById('resetButtonContainer');
        const resetButton = document.getElementById('resetButton');
        const fontSizeRange = document.getElementById('fontSizeRange');
        const fontSizeLabel = document.getElementById('fontSizeLabel');
        const lineHeightRange = document.getElementById('lineHeightRange');
        const lineHeightLabel = document.getElementById('lineHeightLabel');

        const urlParams = new URLSearchParams(window.location.search);
        const surahId = urlParams.get('id') || 1;
        const juzId = urlParams.get('juz');

        window.getSurahsInJuz = function(juz) {
             const mapping = {
                1: [{id: 1, name: "Al-Fatihah"}, {id: 2, name: "Al-Baqarah"}],
                2: [{id: 2, name: "Al-Baqarah"}],
                3: [{id: 2, name: "Al-Baqarah"}, {id: 3, name: "Ali 'Imran"}],
                4: [{id: 3, name: "Ali 'Imran"}, {id: 4, name: "An-Nisa'"}],
                5: [{id: 4, name: "An-Nisa'"}],
                6: [{id: 4, name: "An-Nisa'"}, {id: 5, name: "Al-Ma'idah"}],
                7: [{id: 5, name: "Al-Ma'idah"}, {id: 6, name: "Al-An'am"}],
                8: [{id: 6, name: "Al-An'am"}, {id: 7, name: "Al-A'raf"}],
                9: [{id: 7, name: "Al-A'raf"}, {id: 8, name: "Al-Anfal"}],
                10: [{id: 8, name: "Al-Anfal"}, {id: 9, name: "At-Taubah"}],
                11: [{id: 9, name: "At-Taubah"}, {id: 10, name: "Yunus"}, {id: 11, name: "Hud"}],
                12: [{id: 11, name: "Hud"}, {id: 12, name: "Yusuf"}],
                13: [{id: 12, name: "Yusuf"}, {id: 13, name: "Ar-Ra'd"}, {id: 14, name: "Ibrahim"}],
                14: [{id: 15, name: "Al-Hijr"}, {id: 16, name: "An-Nahl"}],
                15: [{id: 17, name: "Al-Isra'"}, {id: 18, name: "Al-Kahf"}],
                16: [{id: 18, name: "Al-Kahf"}, {id: 19, name: "Maryam"}, {id: 20, name: "Ta-Ha"}],
                17: [{id: 21, name: "Al-Anbiya'"}, {id: 22, name: "Al-Hajj"}],
                18: [{id: 23, name: "Al-Mu'minun"}, {id: 24, name: "An-Nur"}, {id: 25, name: "Al-Furqan"}],
                19: [{id: 25, name: "Al-Furqan"}, {id: 26, name: "Asy-Syu'ara'"}, {id: 27, name: "An-Naml"}],
                20: [{id: 27, name: "An-Naml"}, {id: 28, name: "Al-Qasas"}, {id: 29, name: "Al-Ankabut"}],
                21: [{id: 29, name: "Al-Ankabut"}, {id: 30, name: "Ar-Rum"}, {id: 31, name: "Luqman"}, {id: 32, name: "As-Sajdah"}, {id: 33, name: "Al-Ahzab"}],
                22: [{id: 33, name: "Al-Ahzab"}, {id: 34, name: "Saba'"}, {id: 35, name: "Fatir"}, {id: 36, name: "Ya-Sin"}],
                23: [{id: 36, name: "Ya-Sin"}, {id: 37, name: "As-Saffat"}, {id: 38, name: "Sad"}, {id: 39, name: "Az-Zumar"}],
                24: [{id: 39, name: "Az-Zumar"}, {id: 40, name: "Ghafir"}, {id: 41, name: "Fussilat"}],
                25: [{id: 41, name: "Fussilat"}, {id: 42, name: "Asy-Syura"}, {id: 43, name: "Az-Zukhruf"}, {id: 44, name: "Ad-Dukhan"}, {id: 45, name: "Al-Jasiyah"}],
                26: [{id: 46, name: "Al-Ahqaf"}, {id: 47, name: "Muhammad"}, {id: 48, name: "Al-Fath"}, {id: 49, name: "Al-Hujurat"}, {id: 50, name: "Qaf"}, {id: 51, name: "Az-Zariyat"}],
                27: [{id: 51, name: "Az-Zariyat"}, {id: 52, name: "At-Tur"}, {id: 53, name: "An-Najm"}, {id: 54, name: "Al-Qamar"}, {id: 55, name: "Ar-Rahman"}, {id: 56, name: "Al-Waqi'ah"}, {id: 57, name: "Al-Hadid"}],
                28: [{id: 58, name: "Al-Mujadilah"}, {id: 59, name: "Al-Hasyr"}, {id: 60, name: "Al-Mumtahanah"}, {id: 61, name: "As-Saff"}, {id: 62, name: "Al-Jumu'ah"}, {id: 63, name: "Al-Munafiqun"}, {id: 64, name: "At-Tagabun"}, {id: 65, name: "At-Talaq"}, {id: 66, name: "At-Tahrim"}],
                29: [{id: 67, name: "Al-Mulk"}, {id: 68, name: "Al-Qalam"}, {id: 69, name: "Al-Haqqah"}, {id: 70, name: "Al-Ma'arij"}, {id: 71, name: "Nuh"}, {id: 72, name: "Al-Jinn"}, {id: 73, name: "Al-Muzzammil"}, {id: 74, name: "Al-Muddassir"}, {id: 75, name: "Al-Qiyamah"}, {id: 76, name: "Al-Insan"}, {id: 77, name: "Al-Mursalat"}],
                30: [{id: 78, name: "An-Naba'"}, {id: 79, name: "An-Nazi'at"}, {id: 80, name: "'Abasa"}, {id: 81, name: "At-Takwir"}, {id: 82, name: "Al-Infitar"}, {id: 83, name: "Al-Mutaffifin"}, {id: 84, name: "Al-Insyiqaq"}, {id: 85, name: "Al-Buruj"}, {id: 86, name: "At-Tariq"}, {id: 87, name: "Al-A'la"}, {id: 88, name: "Al-Ghasyiyah"}, {id: 89, name: "Al-Fajr"}, {id: 90, name: "Al-Balad"}, {id: 91, name: "Asy-Syams"}, {id: 92, name: "Al-Lail"}, {id: 93, name: "Ad-Duha"}, {id: 94, name: "Asy-Syarh"}, {id: 95, name: "At-Tin"}, {id: 96, name: "Al-'Alaq"}, {id: 97, name: "Al-Qadr"}, {id: 98, name: "Al-Bayyinah"}, {id: 99, name: "Az-Zalzalah"}, {id: 100, name: "Al-'Adiyat"}, {id: 101, name: "Al-Qari'ah"}, {id: 102, name: "At-Takasur"}, {id: 103, name: "Al-'Asr"}, {id: 104, name: "Al-Humazah"}, {id: 105, name: "Al-Fil"}, {id: 106, name: "Quraisy"}, {id: 107, name: "Al-Ma'un"}, {id: 108, name: "Al-Kausar"}, {id: 109, name: "Al-Kafirun"}, {id: 110, name: "An-Nasr"}, {id: 111, name: "Al-Lahab"}, {id: 112, name: "Al-Ikhlas"}, {id: 113, name: "Al-Falaq"}, {id: 114, name: "An-Nas"}]
            };
            return mapping[juz] || [];
        }

        window.initSurahDetail = async function() {
            try {
                if(fontSizeRange) { fontSizeRange.value = currentFontSize; fontSizeLabel.textContent = currentFontSize + 'px'; }
                if(lineHeightRange) { lineHeightRange.value = currentLineHeight; lineHeightLabel.textContent = currentLineHeight; }
                const [surahRes, tafsirRes] = await Promise.all([
                    fetch(`https://equran.id/api/v2/surat/${surahId}`), fetch(`https://equran.id/api/v2/tafsir/${surahId}`)
                ]);
                if (!surahRes.ok || !tafsirRes.ok) throw new Error("Gagal memuat data");
                const surahJson = await surahRes.json();
                const tafsirJson = await tafsirRes.json();
                currentSurah = surahJson.data;
                tafsirData = tafsirJson.data.tafsir; 
                const initialAudio = currentSurah.audioFull[selectedQari] || currentSurah.audioFull['05'];
                if(initialAudio) { audioPlayer.src = initialAudio; audioPlayer.load(); }
                const autoPlayParam = urlParams.get('autoplay');
                const verseParam = urlParams.get('verse'); 
                const modeParam = urlParams.get('mode'); 
                const markType = urlParams.get('mark_type'); 
                renderUI();
                if (verseParam) {
                    const verseNum = parseInt(verseParam);
                    if (!juzId && verseSelector) verseSelector.value = verseNum;
                    if (modeParam === 'mushaf' || viewMode === 'mushaf') {
                        viewMode = 'mushaf'; document.getElementById('btnViewMushaf').click(); mushafPage = Math.floor((verseNum - 1) / VERSES_PER_PAGE);
                    }
                }
                renderVerses(); 
                loadingState.classList.add('hidden'); versesContainer.classList.remove('hidden');
                if (verseParam) {
                    setTimeout(() => {
                        if (markType === 'page') {
                            const container = document.getElementById('versesContainer');
                            if (container) {
                                container.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                container.classList.add('page-highlight');
                                setTimeout(() => container.classList.remove('page-highlight'), 3000);
                            }
                        } else { scrollToSelectedVerse(); }
                    }, 500);
                }
                if (autoPlayParam === 'true') { setTimeout(() => { playVerse(1); showNotification(`Memulai Surat ${currentSurah.namaLatin}`); }, 800); }
            } catch (error) {
                console.error(error); loadingState.innerHTML = `<p class="text-red-500 font-medium">Gagal memuat data. Periksa koneksi internet.</p><button onclick="location.reload()" class="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold ">Coba Lagi</button>`;
            }
        }
        window.changeFontSize = function(val) {
            currentFontSize = val; document.getElementById('fontSizeLabel').textContent = val + 'px'; localStorage.setItem('quranFontSize', val);
            document.querySelectorAll('.font-quran').forEach(el => el.style.fontSize = val + 'px');
            document.querySelectorAll('.font-mushaf').forEach(el => el.style.fontSize = (parseInt(val) + 4) + 'px'); 
        }
        window.changeLineHeight = function(val) {
            currentLineHeight = val;
            if(lineHeightLabel) lineHeightLabel.textContent = val;
            localStorage.setItem('quranLineHeight', val);
            document.querySelectorAll('.verse-card').forEach(el => {
                el.style.marginBottom = val + 'rem';
            });
        }
        headerPlayBtn.addEventListener('click', () => {
            if(currentVerseAudio) { currentVerseAudio.pause(); currentVerseAudio = null; resetAllVerseIcons(); hideAllProgressBars(); currentlyPlayingVerse = null; }
            if (audioPlayer.paused) { audioPlayer.play(); updatePlayerUI(true); } else { audioPlayer.pause(); updatePlayerUI(false); }
        });
        resetButton.addEventListener('click', () => {
            audioPlayer.pause(); audioPlayer.currentTime = 0; updatePlayerUI(false); resetButtonContainer.classList.add('hidden');
            if(currentVerseAudio) { currentVerseAudio.pause(); currentVerseAudio = null; resetAllVerseIcons(); hideAllProgressBars(); }
        });
        window.updatePlayerUI = function(isPlaying) {
            if(isPlaying) {
                headerPlayIcon.classList.add('hidden'); headerPauseIcon.classList.remove('hidden'); headerPlayText.textContent = "Pause";
                miniVisualizer.classList.remove('hidden'); miniVisualizer.classList.add('flex'); resetButtonContainer.classList.remove('hidden'); 
            } else {
                headerPlayIcon.classList.remove('hidden'); headerPauseIcon.classList.add('hidden'); headerPlayText.textContent = "Play Audio";
                miniVisualizer.classList.add('hidden'); miniVisualizer.classList.remove('flex');
            }
        }
        audioPlayer.onended = () => { updatePlayerUI(false); audioPlayer.currentTime = 0; resetButtonContainer.classList.add('hidden'); };
        window.playVerse = function(verseNumber) {
            const verseIndex = verseNumber - 1; if (!currentSurah || !currentSurah.ayat[verseIndex]) return;
            const verse = currentSurah.ayat[verseIndex]; const audioSrc = verse.audio[selectedQari] || verse.audio['05'];
            if (!audioPlayer.paused) { audioPlayer.pause(); updatePlayerUI(false); }
            if (currentlyPlayingVerse !== null && currentlyPlayingVerse !== verseNumber) {
                if (currentVerseAudio) { currentVerseAudio.pause(); currentVerseAudio = null; } resetAllVerseIcons(); hideAllProgressBars();
            }
            if (currentlyPlayingVerse === verseNumber && currentVerseAudio) {
                if (currentVerseAudio.paused) { currentVerseAudio.play(); setVerseBtnState(verseNumber, 'playing'); } else { currentVerseAudio.pause(); setVerseBtnState(verseNumber, 'paused'); } return;
            }
            currentVerseAudio = new Audio(audioSrc); currentlyPlayingVerse = verseNumber; setVerseBtnState(verseNumber, 'playing'); showProgressBar(verseNumber); scrollToVerse(verseNumber);
            const playPromise = currentVerseAudio.play(); if (playPromise !== undefined) { playPromise.catch(error => console.error("Playback error:", error)); }
            currentVerseAudio.ontimeupdate = () => { if(currentVerseAudio) { const percent = (currentVerseAudio.currentTime / currentVerseAudio.duration) * 100; updateProgressBar(verseNumber, percent); } };
            currentVerseAudio.onended = () => {
                hideProgressBar(verseNumber); const nextVerseNum = verseNumber + 1;
                if (nextVerseNum <= currentSurah.jumlahAyat) {
                    if (viewMode === 'mushaf') {
                        const newPage = Math.floor((nextVerseNum - 1) / VERSES_PER_PAGE);
                        if (newPage !== mushafPage) { mushafPage = newPage; renderMushafMode(); setTimeout(() => playVerse(nextVerseNum), 500); } else { playVerse(nextVerseNum); }
                    } else { resetAllVerseIcons(); playVerse(nextVerseNum); }
                } else {
                    resetAllVerseIcons(); hideAllProgressBars(); currentlyPlayingVerse = null; currentVerseAudio = null;
                    const nextSurahId = parseInt(surahId) + 1;
                    if (nextSurahId <= 114) { showNotification("Melanjutkan ke surat berikutnya..."); setTimeout(() => { window.location.href = `surah-detail.html?id=${nextSurahId}&autoplay=true`; }, 1500); } else { showNotification("Alhamdulillah, Khatam Al-Quran!"); }
                }
            };
        }
        window.setVerseBtnState = function(verseNum, state) {
            const btn = document.getElementById(`btn-play-${verseNum}`); if (!btn) return;
            if (state === 'playing') {
                btn.className = "p-2 text-white bg-primary rounded-full transition-all btn-verse-active";
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
                const card = document.getElementById(`verse-${verseNum}`); if(card) card.classList.add('verse-card-active');
            } else if (state === 'paused') {
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`; btn.classList.add('opacity-75');
            }
        }
        window.resetAllVerseIcons = function() {
            document.querySelectorAll('[id^="btn-play-"]').forEach(btn => {
                btn.className = "p-2 text-gray-500 hover:text-primary hover:bg-white rounded-full transition-all btn-verse-default";
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
            });
            document.querySelectorAll('[id^="verse-"]').forEach(card => card.classList.remove('verse-card-active'));
        }
        window.showProgressBar = function(verseNum) {
            const container = document.getElementById(`progress-container-${verseNum}`);
            if(container) container.classList.add('visible');
        }
        window.hideProgressBar = function(verseNum) {
            const container = document.getElementById(`progress-container-${verseNum}`);
            if(container) container.classList.remove('visible');
        }
        window.hideAllProgressBars = function() {
            document.querySelectorAll('.verse-progress-container').forEach(c => c.classList.remove('visible'));
        }
        window.updateProgressBar = function(verseNum, percent) {
            const bar = document.getElementById(`progress-fill-${verseNum}`);
            if(bar) bar.style.width = `${percent}%`;
        }
        window.scrollToVerse = function(verseNum) {
            const element = document.getElementById(`verse-${verseNum}`);
            if(element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.toggleSettings = function() {
            const panel = document.getElementById('settingsPanel'); 
            const btn = document.getElementById('settingsToggleBtn');
            const isOpening = panel.classList.contains('hidden');

            if (isOpening) {
                panel.classList.remove('hidden');
                panel.classList.add('flex');
                btn.classList.add('bg-gray-100', 'text-primary');
                if (typeof App !== 'undefined' && App.pushModal) {
                    App.pushModal(() => {
                        panel.classList.add('hidden');
                        panel.classList.remove('flex');
                        btn.classList.remove('bg-gray-100', 'text-primary');
                    });
                }
            } else {
                if (typeof App !== 'undefined' && App.popModal) {
                    App.popModal();
                } else {
                    panel.classList.add('hidden');
                    panel.classList.remove('flex');
                    btn.classList.remove('bg-gray-100', 'text-primary');
                }
            }
        }
        window.changeViewMode = function(mode) {
            viewMode = mode; const btnList = document.getElementById('btnViewList'); const btnMushaf = document.getElementById('btnViewMushaf'); const toggleContainer = document.getElementById('toggleContainer');
            if (mode === 'list') {
                btnList.classList.add('bg-primary', 'text-white', 'font-bold'); btnList.classList.remove('text-gray-500', 'hover:bg-gray-50', 'font-semibold');
                btnMushaf.classList.remove('bg-primary', 'text-white', 'font-bold'); btnMushaf.classList.add('text-gray-500', 'hover:bg-gray-50', 'font-semibold'); toggleContainer.classList.remove('hidden'); 
            } else {
                btnMushaf.classList.add('bg-primary', 'text-white', 'font-bold'); btnMushaf.classList.remove('text-gray-500', 'hover:bg-gray-50', 'font-semibold');
                btnList.classList.remove('bg-primary', 'text-white', 'font-bold'); btnList.classList.add('text-gray-500', 'hover:bg-gray-50', 'font-semibold'); toggleContainer.classList.add('hidden'); mushafPage = 0;
            }
            renderVerses();
        }
        window.renderUI = function() {
            document.getElementById('surahTitle').textContent = currentSurah.namaLatin; document.getElementById('surahInfo').textContent = `${currentSurah.tempatTurun} • ${currentSurah.jumlahAyat} Ayat • ${currentSurah.arti}`;
            headerTitle.textContent = currentSurah.namaLatin;
            window.addEventListener('scroll', () => { if (window.scrollY > 200) { headerTitle.classList.remove('opacity-0'); } else { headerTitle.classList.add('opacity-0'); } });
            if (currentSurah.nomor === 1 || currentSurah.nomor === 9) { if(currentSurah.nomor === 1) bismillahElement.style.display = 'none'; }
            if (juzId) {
                const surahList = getSurahsInJuz(juzId);
                const grid = document.getElementById('verseGrid');
                grid.innerHTML = '';
                document.getElementById('verseBtnText').textContent = 'Pilih Surat';
                surahList.forEach(s => {
                    const btn = document.createElement('button');
                    const isActive = s.id == surahId;
                    const activeClasses = 'bg-primary text-white border-primary';
                    const inactiveClasses = 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:border-gray-200';
                    btn.className = `p-4 rounded-xl border font-bold transition-all text-left flex justify-between items-center ${isActive ? activeClasses : inactiveClasses}`;
                    btn.innerHTML = `<span class="truncate">${s.name}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'} flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`;
                    btn.onclick = () => { closeVerseModal(); window.location.href = `surah-detail.html?id=${s.id}&juz=${juzId}`; };
                    grid.appendChild(btn);
                });
            } else {
                const grid = document.getElementById('verseGrid');
                grid.innerHTML = '';
                currentSurah.ayat.forEach(verse => {
                    const btn = document.createElement('button');
                    btn.className = 'p-4 rounded-xl border bg-gray-50 text-gray-700 hover:bg-gray-100 hover:border-gray-200 font-bold transition-all text-left flex justify-between items-center';
                    btn.innerHTML = `<span>Ayat ${verse.nomorAyat}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`;
                    btn.onclick = () => { closeVerseModal(); scrollToVerseNum(verse.nomorAyat); };
                    grid.appendChild(btn);
                });
            }
        }
        window.scrollToVerseNum = function(verseNum) {
            document.getElementById('verseBtnText').textContent = `Ayat ${verseNum}`;
            scrollToSelectedVerse(verseNum);
        }
        window.renderVerses = function() {
            if (viewMode === 'list') {
                renderListMode();
            } else {
                renderMushafMode();
            }
        }
        window.renderListMode = function() {
            versesContainer.className = "space-y-4 pb-10";
            versesContainer.innerHTML = currentSurah.ayat.map(verse => {
                const isBookmarked = checkIfBookmarked(currentSurah.nomor, verse.nomorAyat);
                return `
                <div id="verse-${verse.nomorAyat}" class="bg-white p-5 rounded-xl  border border-gray-100 transition-all hover:scroll-mt-48 group verse-card" style="margin-bottom: ${currentLineHeight}rem;">
                    <div class="flex items-center justify-between mb-6 bg-gray-50/80 p-2 rounded-lg border border-gray-100">
                        <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg  border border-primary/20">${verse.nomorAyat}</div>
                        <div class="flex gap-1">
                            <button onclick="playVerse(${verse.nomorAyat})" id="btn-play-${verse.nomorAyat}" class="p-2 text-gray-500 hover:text-primary hover:bg-white rounded-full transition-all btn-verse-default" title="Putar Audio"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                            <button onclick="showVerseTafsir(${verse.nomorAyat})" class="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all" title="Baca Tafsir">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </button>
                            <button onclick="toggleBookmark(${currentSurah.nomor}, ${verse.nomorAyat})" class="p-2 text-gray-500 hover:text-primary hover:bg-white rounded-full transition-all" id="btn-bookmark-${verse.nomorAyat}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="${isBookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg></button>
                        </div>
                    </div>
                    <div class="text-right font-quran text-gray-800 mb-8 font-auto-resize leading-[4.5rem]" dir="rtl" style="font-size: ${currentFontSize}px;">${verse.teksArab}</div>
                    <div class="latin-text text-primary font-medium mb-3 text-sm leading-relaxed tracking-wide ${document.getElementById('toggleLatin').checked ? '' : 'hidden'}">${verse.teksLatin}</div>
                    <div class="translation-text text-gray-600 text-sm leading-relaxed border-l-4 border-secondary pl-3 ${document.getElementById('toggleTrans').checked ? '' : 'hidden'}">${verse.teksIndonesia}</div>
                    <div id="progress-container-${verse.nomorAyat}" class="verse-progress-container"><div id="progress-fill-${verse.nomorAyat}" class="verse-progress-bar"></div></div>
                </div>`;
            }).join('');
        }
        window.renderMushafMode = function() {
            versesContainer.className = "bg-white p-6 md:p-10 rounded-xl  border border-gray-100 pb-12 text-center relative";
            const totalVerses = currentSurah.ayat.length; const start = mushafPage * VERSES_PER_PAGE; const end = Math.min(start + VERSES_PER_PAGE, totalVerses); const versesToShow = currentSurah.ayat.slice(start, end);
            const isPageBookmarked = checkIfPageBookmarked(currentSurah.nomor, mushafPage); const pageBookmarkColor = isPageBookmarked ? "text-primary" : "text-gray-400";
            let html = `<div class="font-mushaf text-justify text-gray-800 mb-10 font-auto-resize leading-[4.5rem]" dir="rtl" style="font-size: ${parseInt(currentFontSize) + 4}px;">`;
            versesToShow.forEach(verse => {
                const isBookmarked = checkIfBookmarked(currentSurah.nomor, verse.nomorAyat); const numberClass = isBookmarked ? "ayat-number-symbol ayat-bookmarked" : "ayat-number-symbol";
                html += `<span id="verse-${verse.nomorAyat}" class="hover:bg-secondary/50 rounded transition-colors select-text inline scroll-mt-48" onclick="event.stopPropagation();">${verse.teksArab}<span class="${numberClass} cursor-pointer hover:bg-primary hover:text-white transition-colors" onclick="event.stopPropagation(); toggleBookmark(${currentSurah.nomor}, ${verse.nomorAyat})" title="${isBookmarked ? 'Hapus dari simpanan' : 'Simpan ayat ini'}">${toArabicNumeral(verse.nomorAyat)}</span></span>`;
            });
            html += `</div>`;
            html += `<div class="flex flex-col items-center mt-8 space-y-4">
                <div class="inline-flex items-center bg-gray-50 rounded-full p-1.5  border border-gray-200">
                    <button onclick="changeMushafPage(-1)" class="w-10 h-10 flex items-center justify-center rounded-full transition-all ${mushafPage === 0 ? 'text-gray-300 cursor-not-allowed' : 'bg-white text-primary  hover:bg-gray-100'}" ${mushafPage === 0 ? 'disabled' : ''}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg></button>
                    <div class="px-6 flex flex-col items-center"><span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Halaman ${mushafPage + 1}</span><span class="text-sm font-bold text-primary">Ayat ${start + 1} - ${end}</span></div>
                    <button onclick="changeMushafPage(1)" class="w-10 h-10 flex items-center justify-center rounded-full transition-all ${end >= totalVerses ? 'text-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/90'}" ${end >= totalVerses ? 'disabled' : ''}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></button>
                </div>
                <button onclick="togglePageBookmark(${mushafPage}, ${start+1}, ${end})" class="flex items-center space-x-2 text-sm font-medium ${pageBookmarkColor} hover:text-primary transition-colors py-2 px-4 rounded-full hover:bg-secondary/30"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="${isPageBookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg><span>${isPageBookmarked ? 'Halaman Tersimpan' : 'Simpan Halaman'}</span></button>
            </div>`;
            versesContainer.innerHTML = html;
        }
        window.changeMushafPage = function(delta) {
            mushafPage += delta;
            renderMushafMode();
        }
        window.toArabicNumeral = function(n) {
            return n.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
        }
        window.openVerseModal = function() {
            const el = document.getElementById('verseModal');
            const cont = document.getElementById('verseContainer');
            el.classList.remove('hidden'); el.classList.add('flex');
            setTimeout(() => {
                document.getElementById('verseBackdrop').classList.remove('opacity-0');
                cont.classList.remove('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0');
                cont.classList.add('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
                
                if (typeof App !== 'undefined' && App.pushModal) {
                    App.pushModal(closeVerseModal);
                }
            }, 10);
        }
        window.closeVerseModal = function(shouldPopHistory = true) {
            document.getElementById('verseBackdrop').classList.add('opacity-0');
            const cont = document.getElementById('verseContainer');
            cont.classList.remove('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
            cont.classList.add('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0');
            setTimeout(() => { document.getElementById('verseModal').classList.add('hidden'); document.getElementById('verseModal').classList.remove('flex'); }, 300);
        }

        window.openQariModal = function() {
            const el = document.getElementById('qariModal');
            const cont = document.getElementById('qariContainer');
            // update highlighting
            document.querySelectorAll('.qari-btn').forEach(btn => btn.classList.remove('bg-emerald-50', 'border-emerald-200'));
            const activeBtn = Array.from(document.querySelectorAll('.qari-btn')).find(b => b.getAttribute('onclick').includes(selectedQari));
            if(activeBtn) activeBtn.classList.add('bg-emerald-50', 'border-emerald-200');

            el.classList.remove('hidden'); el.classList.add('flex');
            setTimeout(() => {
                document.getElementById('qariBackdrop').classList.remove('opacity-0');
                cont.classList.remove('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0');
                cont.classList.add('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
                
                if (typeof App !== 'undefined' && App.pushModal) {
                    App.pushModal(closeQariModal);
                }
            }, 10);
        }
        window.closeQariModal = function(shouldPopHistory = true) {
            document.getElementById('qariBackdrop').classList.add('opacity-0');
            const cont = document.getElementById('qariContainer');
            cont.classList.remove('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
            cont.classList.add('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0');
            setTimeout(() => { document.getElementById('qariModal').classList.add('hidden'); document.getElementById('qariModal').classList.remove('flex'); }, 300);
        }

        window.selectQari = function(code, title) {
            document.getElementById('qariBtnText').textContent = title;
            closeQariModal();
            selectedQari = code;
            if(!audioPlayer.paused && !currentVerseAudio) { const audioFull = currentSurah.audioFull[selectedQari] || currentSurah.audioFull['05']; audioPlayer.src = audioFull; audioPlayer.currentTime = 0; audioPlayer.play(); }
            if(currentVerseAudio && !currentVerseAudio.paused && currentlyPlayingVerse) { currentVerseAudio.pause(); const verseNum = currentlyPlayingVerse; currentlyPlayingVerse = null; playVerse(verseNum); }
        }

        window.scrollToSelectedVerse = function(verseNum) {
            if (!verseNum) return;
            document.getElementById('settingsPanel').classList.add('hidden'); document.getElementById('settingsPanel').classList.remove('flex'); document.getElementById('settingsToggleBtn').classList.remove('bg-gray-100', 'text-primary');
            if (viewMode === 'mushaf') {
                mushafPage = Math.floor((verseNum - 1) / VERSES_PER_PAGE); renderMushafMode();
                setTimeout(() => { 
                    const element = document.getElementById(`verse-${verseNum}`); 
                    if(element) { 
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                        element.style.transition = 'all 0.5s'; 
                        element.classList.add('ring-2', 'ring-primary'); 
                        setTimeout(() => element.classList.remove('ring-2', 'ring-primary'), 3000); 
                    } 
                }, 100);
            } else {
                const element = document.getElementById(`verse-${verseNum}`); 
                if (element) { 
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                    element.style.transition = 'all 0.5s'; 
                    element.classList.add('ring-2', 'ring-primary'); 
                    setTimeout(() => element.classList.remove('ring-2', 'ring-primary'), 3000); 
                }
            }
        }
        window.toggleVisibility = function(type) {
            if (viewMode === 'list') {
                const elements = document.querySelectorAll(`.${type}-text`); const checkbox = type === 'latin' ? document.getElementById('toggleLatin') : document.getElementById('toggleTrans'); const label = checkbox.nextElementSibling;
                if (checkbox.checked) { label.classList.add('bg-primary'); label.classList.remove('bg-gray-300'); checkbox.style.right = '0'; checkbox.style.borderColor = '#0E6251'; } else { label.classList.remove('bg-primary'); label.classList.add('bg-gray-300'); checkbox.style.right = '1.25rem'; checkbox.style.borderColor = '#fff'; }
                elements.forEach(el => { el.classList.toggle('hidden', !checkbox.checked); });
            }
        }

        window.changeLineHeight = function(value) {
            currentLineHeight = value;
            localStorage.setItem('quranLineHeight', value);
            document.querySelectorAll('.verse-card').forEach(card => {
                card.style.marginBottom = `${value}rem`;
            });
        }

        window.formatTextToHTML = function(text) {
            return text ? text.replace(/\n/g, '<br/>') : '';
        }
        window.prepareModalView = function() {
            const content = document.getElementById('tafsirContent');
            if(content) content.innerHTML = '';
        }
        window.showSurahInfo = function() {
            const modal = document.getElementById('tafsirModal'); const content = document.getElementById('tafsirContent'); const title = document.getElementById('tafsirModalTitle');
            const cont = document.getElementById('tafsirContainer');
            prepareModalView(); title.textContent = `Info Surat ${currentSurah.namaLatin}`;
            content.innerHTML = `<div class="tafsir-text text-gray-700 text-sm md:text-base"><h4 class="font-bold text-lg mb-4 text-primary text-center sticky top-0 bg-white py-2">${currentSurah.namaLatin} (${currentSurah.arti})</h4><div class="bg-emerald-50 p-4 rounded-xl mb-6 text-sm border border-emerald-100"><p class="mb-2"><strong>Jumlah Ayat:</strong> ${currentSurah.jumlahAyat}</p><p><strong>Tempat Turun:</strong> ${currentSurah.tempatTurun}</p></div><div class="leading-relaxed whitespace-pre-line">${formatTextToHTML(currentSurah.deskripsi)}</div></div>`;
            modal.classList.remove('hidden'); modal.classList.add('flex');
            setTimeout(() => { 
                document.getElementById('tafsirBackdrop').classList.remove('opacity-0');
                cont.classList.remove('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0'); 
                cont.classList.add('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
                
                if (typeof App !== 'undefined' && App.pushModal) {
                    App.pushModal(closeTafsir);
                }
            }, 10);
        }
        window.showVerseTafsir = function(verseNumber) {
            const modal = document.getElementById('tafsirModal'); const content = document.getElementById('tafsirContent'); const title = document.getElementById('tafsirModalTitle'); const verseTafsir = tafsirData[verseNumber - 1];
            prepareModalView(); title.textContent = `Tafsir Ayat ${verseNumber}`;
            if (verseTafsir) { content.innerHTML = `<div class="text-right font-quran text-3xl mb-6 p-6 bg-emerald-50 rounded-xl border border-emerald-100 leading-[4.5rem]">${currentSurah.ayat[verseNumber-1].teksArab}</div><div class="tafsir-text text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">${formatTextToHTML(verseTafsir.teks)}</div><div class="mt-8 text-xs text-emerald-600 font-bold bg-emerald-50 p-3 rounded-lg text-center border-t border-emerald-100">Sumber: Kemenag RI</div>`; } else { content.innerHTML = '<p class="text-center text-gray-500 my-10">Data tafsir tidak ditemukan.</p>'; }
            modal.classList.remove('hidden'); modal.classList.add('flex');
            setTimeout(() => { 
                document.getElementById('tafsirBackdrop').classList.remove('opacity-0');
                const cont = document.getElementById('tafsirContainer');
                cont.classList.remove('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0'); 
                cont.classList.add('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
                
                if (typeof App !== 'undefined' && App.pushModal) {
                    App.pushModal(closeTafsir);
                }
            }, 10);
        }
        window.closeTafsir = function(shouldPopHistory = true) {
            const modal = document.getElementById('tafsirModal');
            if(modal) {
                document.getElementById('tafsirBackdrop').classList.add('opacity-0');
                const cont = document.getElementById('tafsirContainer');
                cont.classList.remove('translate-y-0', 'sm:translate-y-0', 'sm:scale-100', 'sm:opacity-100');
                cont.classList.add('translate-y-full', 'sm:translate-y-8', 'sm:scale-95', 'sm:opacity-0');
                setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); }, 300);
            }
        }
        window.showNotification = function(message) {
            const toast = document.getElementById('toast');
            if(!toast) return;
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        }
        window.checkIfBookmarked = function(surah, verse) {
            let bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
            return bookmarks.some(b => b.bookmarkKey === `${surah}-verse-${verse}`);
        }
        window.toggleBookmark = function(surah, verseNum) {
            let bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]'); const key = `${surah}-verse-${verseNum}`; const idx = bookmarks.findIndex(b => b.bookmarkKey === key);
            const btnList = document.getElementById(`btn-bookmark-${verseNum}`); const verseData = currentSurah.ayat[verseNum-1];
            if (idx !== -1) { bookmarks.splice(idx, 1); showNotification("Ayat dihapus dari simpanan"); if(btnList) btnList.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>`; } else { bookmarks.push({ bookmarkKey: key, surahNumber: surah, verseNumber: verseNum, surahName: currentSurah.namaLatin, arabicText: verseData.teksArab, translation: verseData.teksIndonesia, type: 'verse' }); showNotification("Ayat berhasil disimpan"); if(btnList) btnList.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>`; }
            localStorage.setItem('quranBookmarks', JSON.stringify(bookmarks)); if (viewMode === 'mushaf') { renderMushafMode(); }
        }
        window.checkIfPageBookmarked = function(surah, pageIdx) {
            let bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
            return bookmarks.some(b => b.bookmarkKey === `${surah}-page-${pageIdx}`);
        }
        window.togglePageBookmark = function(pageIdx, firstVerse, lastVerse) {
            let bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]'); const key = `${currentSurah.nomor}-page-${pageIdx}`; const idx = bookmarks.findIndex(b => b.bookmarkKey === key);
            const representativeVerse = currentSurah.ayat[firstVerse - 1]; const arabicText = representativeVerse ? representativeVerse.teksArab : ";
            if (idx !== -1) { bookmarks.splice(idx, 1); showNotification("Halaman dihapus dari simpanan"); } else { bookmarks.push({ bookmarkKey: key, surahNumber: currentSurah.nomor, surahName: currentSurah.namaLatin, pageIndex: pageIdx, pageNumber: pageIdx + 1, firstVerseNumber: firstVerse, lastVerseNumber: lastVerse, arabicText: arabicText, type: 'page' }); showNotification("Halaman berhasil disimpan"); }
            localStorage.setItem('quranBookmarks', JSON.stringify(bookmarks)); renderMushafMode(); 
        }
        window.initSurahDetail();
};
