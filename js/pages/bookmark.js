export const render = () => `
<div class="bg-white px-6 py-4 sticky top-0 z-[100] flex items-center justify-between border-b border-gray-100">
    <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0">
         <i data-lucide="arrow-left" class="w-5 h-5 text-gray-700"></i>
         <span class="text-sm font-bold text-gray-700">Kembali</span>
    </a>
    <div class="flex flex-col text-right">
        <h1 class="text-xl font-bold text-gray-800">Tersimpan</h1>
    </div>
</div>

    <div class="container mx-auto px-4 py-6 w-full">
        <div class="bg-primary rounded-2xl p-6 mb-6 relative overflow-hidden pattern-bg  text-white">
            <div class="relative z-10">
                <h2 class="text-2xl font-bold mb-1">Bookmark Saya</h2>
                <p class="text-white/80 text-sm" id="bookmarkCount">0 Item Tersimpan</p>
            </div>
            <div class="absolute right-[-10px] bottom-[-20px] opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="currentColor" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
            </div>
        </div>

        <div class="flex mb-6 bg-white p-1.5 rounded-full  border border-gray-200">
            <button onclick="switchTab('verse')" id="tabVerse" class="flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white  transform tab-active">Ayat</button>
            <button onclick="switchTab('page')" id="tabPage" class="flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300 tab-inactive">Halaman</button>
        </div>

        <div id="bookmarksList" class="space-y-4 min-h-[300px]"></div>

        <div id="emptyState" class="hidden flex-col items-center justify-center py-12 text-center">
            <div class="bg-gray-100 p-6 rounded-full mb-4">
                <i data-lucide="bookmark" class="w-12 h-12 text-gray-400"></i>
            </div>
            <h3 class="text-gray-800 font-bold text-lg mb-1">Belum ada simpanan</h3>
            <p class="text-gray-500 text-sm w-full">Tandai ayat atau halaman favoritmu agar mudah ditemukan kembali.</p>
            <a href="quran" class="mt-6 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-colors ">Mulai Membaca</a>
        </div>
    </div>

    <div id="deleteModal" class="confirm-modal fixed inset-y-0 left-1/2 -translate-x-1/2 w-full w-full z-[60] flex items-end justify-center hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="App.popModal()"></div>
        <div class="confirm-sheet bg-white w-full rounded-t-2xl  relative z-10 p-6 pb-8 transform translate-y-full transition-transform duration-300">
            <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="trash-2" class="w-8 h-8"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">Hapus Bookmark?</h3>
                <p class="text-gray-500 text-sm">Item ini akan dihapus permanen dari daftar simpanan Anda.</p>
            </div>
            <div class="flex gap-3">
                <button onclick="App.popModal()" class="flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors">Batal</button>
                <button onclick="confirmDeleteAction()" class="flex-1 py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-colors  ">Ya, Hapus</button>
            </div>
        </div>
    </div>

    <div id="toast" class="toast"></div>
`;

export const init = () => {

        let currentTab = 'verse'; 
        let itemToDelete = null; 
        
        window.loadBookmarks = function() {
            const bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
            const container = document.getElementById('bookmarksList');
            const emptyState = document.getElementById('emptyState');
            const countLabel = document.getElementById('bookmarkCount');

            const filteredBookmarks = bookmarks.filter(b => {
                const type = b.type || 'verse';
                return type === currentTab;
            });

            countLabel.textContent = `${filteredBookmarks.length} Item Tersimpan`;

            if (filteredBookmarks.length === 0) {
                container.classList.add('hidden');
                emptyState.classList.remove('hidden');
                emptyState.classList.add('flex');
                return;
            }

            container.classList.remove('hidden');
            emptyState.classList.add('hidden');
            emptyState.classList.remove('flex');

            container.innerHTML = filteredBookmarks.map((item) => {
                let linkUrl, title, subtitle, arabicPreview, badge;
                
                if (item.type === 'page') {
                    linkUrl = `surah-detail.html?id=${item.surahNumber}&verse=${item.firstVerseNumber}&mode=mushaf&mark_type=page`; 
                    title = `${item.surahName}`;
                    subtitle = `Halaman ${item.pageNumber} • Ayat ${item.firstVerseNumber}-${item.lastVerseNumber}`;
                    arabicPreview = item.arabicText || `<span class="text-gray-400 text-base">Halaman ${item.pageNumber}</span>`;
                    badge = "HALAMAN";
                } else {
                    linkUrl = `surah-detail.html?id=${item.surahNumber}&verse=${item.verseNumber}`;
                    title = `${item.surahName} : ${item.verseNumber}`;
                    subtitle = "Ketuk untuk membuka";
                    arabicPreview = item.arabicText || ";
                    badge = "AYAT";
                }

                return `
                <div class="bg-white p-5 rounded-2xl  border border-gray-100 hover:transition-all group relative overflow-hidden" id="item-${item.bookmarkKey}">
                    <div class="absolute top-4 left-4">
                         <span class="px-2 py-0.5 bg-secondary text-primary text-[10px] font-bold rounded uppercase tracking-wide">${badge}</span>
                    </div>

                    <button onclick="requestDelete('${item.bookmarkKey}')" class="absolute top-3 right-3 p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors z-20" title="Hapus">
                        <i data-lucide="trash-2" class="w-5 h-5"></i>
                    </button>

                    <a href="${linkUrl}" class="block mt-6">
                        <div class="mb-4">
                            <h3 class="font-bold text-gray-800 text-xl">${title}</h3>
                        </div>
                        <div class="text-right font-quran text-2xl text-gray-700 mb-4 leading-loose dir-rtl break-words whitespace-normal">
                            ${arabicPreview}
                        </div>
                        
                        <div class="flex items-center text-primary text-xs font-semibold mt-2 pt-3 border-t border-gray-50">
                            <span>${subtitle}</span>
                            <i data-lucide="chevron-right" class="w-3 h-3 ml-1"></i>
                        </div>
                    </a>
                </div>
                `;
            }).join('');
            
        }

        window.switchTab = function(tab) {
            currentTab = tab;
            const tabVerse = document.getElementById('tabVerse');
            const tabPage = document.getElementById('tabPage');

            if (tab === 'verse') {
                tabVerse.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white  transform tab-active";
                tabPage.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300 tab-inactive";
            } else {
                tabPage.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 bg-primary text-white  transform tab-active";
                tabVerse.className = "flex-1 px-6 py-2.5 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all duration-300 tab-inactive";
            }
            loadBookmarks();
        }

        window.requestDelete = function(key) {
            itemToDelete = key;
            const modal = document.getElementById('deleteModal');
            modal.classList.remove('hidden');
            setTimeout(() => { modal.classList.add('open'); }, 10);
            if (typeof App !== 'undefined' && App.pushModal) {
                App.pushModal(closeDeleteModal);
            }
        }

        window.closeDeleteModal = function() {
            const modal = document.getElementById('deleteModal');
            modal.classList.remove('open');
            itemToDelete = null;
            setTimeout(() => { modal.classList.add('hidden'); }, 300);
        }

        window.confirmDeleteAction = function() {
            if (!itemToDelete) return;
            
            let bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
            const updatedBookmarks = bookmarks.filter(b => {
                if(b.bookmarkKey) return b.bookmarkKey !== itemToDelete;
                return `${b.surahNumber}-verse-${b.verseNumber}` !== itemToDelete;
            });
            localStorage.setItem('quranBookmarks', JSON.stringify(updatedBookmarks));
            
            const el = document.getElementById(`item-${itemToDelete}`);
            closeDeleteModal();

            if(el) {
                el.style.transition = "all 0.3s";
                el.style.opacity = "0";
                el.style.transform = "translateX(-20px)";
                setTimeout(() => { 
                    loadBookmarks(); 
                    showNotification("Berhasil dihapus"); 
                }, 300);
            } else {
                loadBookmarks();
            }
        }

        window.showNotification = function(message) {
            const toast = document.getElementById("toast");
            toast.textContent = message;
            toast.className = "toast show";
            setTimeout(function(){ toast.className = toast.className.replace("show", "); }, 3000);
        }

        loadBookmarks();
};
