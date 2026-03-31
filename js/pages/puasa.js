export const render = () => `
<div id="puasa-main-screen" class="transition-all duration-300 relative z-20">
    <div class="bg-white px-6 py-4 sticky top-0 z-[60] flex items-center justify-between border-b border-gray-100">
        <a href="./" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </a>
        <div class="flex flex-col text-right">
            <h1 class="text-xl font-extrabold text-primary tracking-tight">Panduan Puasa</h1>
            <p class="text-xs text-gray-400 font-medium">Ibadah Menahan Diri</p>
        </div>
    </div>

    <div class="container mx-auto px-5 py-8 pb-32 w-full space-y-4">
        <button onclick="openPuasaDetail('ramadhan')" class="w-full text-left bg-gradient-to-br from-orange-500 to-amber-600 p-6 rounded-2xl  border border-orange-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="moon" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">Puasa Ramadhan</h3>
                <p class="text-xs text-orange-50 mt-1 opacity-90">Kewajiban Puasa Sebulan Penuh</p>
            </div>
            <i data-lucide="chevron-right" class="w-6 h-6 text-white/50 group-hover:text-white transition-colors"></i>
        </button>

        <button onclick="openPuasaDetail('sunnah')" class="w-full text-left bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl  border border-emerald-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="sparkles" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">Puasa Sunnah</h3>
                <p class="text-xs text-emerald-50 mt-1 opacity-90">Kumpulan Jenis Puasa Sunnah</p>
            </div>
            <i data-lucide="chevron-right" class="w-6 h-6 text-white/50 group-hover:text-white transition-colors"></i>
        </button>
    </div>
</div>

<div id="puasa-detail-screen" class="hidden bg-[#F0F2F5] min-h-screen fixed inset-0 z-50 transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[100] flex items-center justify-between border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col text-right">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="puasa-detail-title">Detail</h1>
        </div>
    </div>
    <div class="container mx-auto px-4 py-6 pb-32 w-full flex-1 overflow-y-auto" id="puasa-detail-content">
    </div>
</div>

<div id="puasa-item-screen" class="hidden bg-white min-h-screen fixed inset-0 z-[110] transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[120] flex items-center justify-between border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col text-right">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="puasa-item-title">Detail Puasa</h1>
        </div>
    </div>
    <div class="container mx-auto px-5 py-8 pb-32 w-full flex-1 overflow-y-auto" id="puasa-item-content">
    </div>
</div>
`;

export const init = () => {
    const fastingData = {
        ramadhan: {
            title: 'Puasa Ramadhan',
            content: {
                niat: 'نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ السَّنَةِ لِلَّهِ تَعَالَى',
                latin: "Nawaitu shauma ghadin 'an ada'i fardhi syahri Ramadhana hadzihis sanati lillahi ta'ala.",
                meaning: 'Aku niat berpuasa esok hari untuk menunaikan kewajiban bulan Ramadhan tahun ini karena Allah Ta\'ala.',
                explanation: 'Puasa Ramadhan adalah salah satu dari lima rukun Islam yang wajib dilaksanakan oleh setiap Muslim yang telah memenuhi syarat (baligh, berakal, sehat, dan mukim). Puasa ini dilakukan selama sebulan penuh pada bulan ke-9 dalam kalender Hijriah. Selama berpuasa, umat Islam menahan diri dari makan, minum, hubungan suami istri, dan segala hal yang membatalkan puasa mulai dari terbit fajar hingga terbenam matahari.',
                keutamaan: 'Puasa Ramadhan memiliki keutamaan yang sangat agung, di antaranya adalah sebagai penghapus dosa-dosa yang telah lalu bagi siapa saja yang melaksanakannya dengan penuh iman dan mengharap rida Allah Subhanahu wa ta\'ala. Selain itu, pintu-pintu surga dibuka, pintu neraka ditutup, dan setan-setan dibelenggu. Di dalamnya juga terdapat satu malam yang lebih baik dari seribu bulan, yaitu malam Lailatul Qadar.',
                reference: 'Al-Quran Surat Al-Baqarah ayat 183: "Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa."'
            }
        },
        sunnah: {
            title: 'Puasa Sunnah',
            items: [
                {
                    id: 'senin_kamis',
                    title: 'Puasa Senin & Kamis',
                    desc: 'Puasa rutin mingguan yang sangat dianjurkan oleh Rasulullah.',
                    content: {
                        niat: 'Senin: نَوَيْتُ صَوْمَ يَوْمِ الِاثْنَيْنِ سُنَّةً لِلَّهِ تَعَالَى<br>Kamis: نَوَيْتُ صَوْمَ يَوْمِ الْخَمِيْسِ سُنَّةً لِلَّهِ تَعَالَى',
                        latin: 'Senin: Nawaitu shauma yaumil itsnaini sunnatan lillahi ta\'ala.<br>Kamis: Nawaitu shauma yaumil khamisi sunnatan lillahi ta\'ala.',
                        meaning: 'Senin: "Aku niat puasa sunnah hari Senin karena Allah Ta\'ala."<br>Kamis: "Aku niat puasa sunnah hari Kamis karena Allah Ta\'ala."',
                        explanation: 'Puasa Senin dan Kamis merupakan amalan sunnah yang sangat istimewa karena pada kedua hari tersebut, seluruh catatan amal manusia selama sepekan diangkat dan dilaporkan ke hadirat Allah Subhanahu wa ta\'ala. Nabi Shallallahu \'alaihi wa sallam bersabda: "Amal-amal manusia diperiksa pada hari Senin dan Kamis, maka aku menyukai amal perbuatanku diperiksa sedangkan aku dalam keadaan berpuasa." (HR. Tirmidzi). <br><br>Selain dimensi spiritual, puasa ini melatih kedisiplinan diri dan memberikan waktu istirahat secara periodik bagi organ pencernaan. Hari Senin juga bertepatan dengan hari kelahiran dan hari diutusnya Nabi Muhammad Shallallahu \'alaihi wa sallam sebagai Rasul, sehingga berpuasa di hari tersebut juga merupakan bentuk syukur atas nikmat kenabian.',
                        keutamaan: 'Keutamaan utamanya adalah bahwa hari Senin dan Kamis adalah hari di mana amal-amal diperlihatkan di hadapan Allah Subhanahu wa ta\'ala. Dengan berpuasa, kita berharap amal kita dilaporkan saat kita sedang dalam kondisi ketaatan yang tinggi. Selain itu, ini adalah bentuk meneladani kebiasaan rutin Nabi Shallallahu \'alaihi wa sallam.',
                        reference: 'Hadits Riwayat At-Tirmidzi No. 747, An-Nasa\'i No. 2360, dan Muslim No. 1162.'
                    }
                },
                {
                    id: 'arafah',
                    title: 'Puasa Arafah',
                    desc: 'Puasa pada tanggal 9 Dzulhijjah dengan keutamaan luar biasa.',
                    content: {
                        niat: 'نَوَيْتُ صَوْمَ عَرَفَةَ سُنَّةً لِلَّهِ تَعَالَى',
                        latin: 'Nawaitu shauma arafata sunnatan lillahi ta\'ala.',
                        meaning: 'Aku niat puasa sunnah Arafah karena Allah Ta\'ala.',
                        explanation: 'Puasa Arafah dilaksanakan pada tanggal 9 Dzulhijjah, bertepatan dengan momen wukuf para jamaah haji di Padang Arafah. Ini adalah hari yang sangat mulia di mana Allah Subhanahu wa ta\'ala membanggakan hamba-Nya di hadapan para malaikat. Nabi Shallallahu \'alaihi wa sallam menegaskan keutamaan puasa ini dapat menghapuskan dosa setahun yang telah lalu dan setahun yang akan datang (HR. Muslim). <br><br>Puasa ini disunnahkan bagi mereka yang tidak sedang melaksanakan ibadah haji. Selain penggugur dosa, hari Arafah juga merupakan waktu yang paling mustajab untuk berdoa. Dengan berpuasa, seorang Muslim dapat lebih fokus berzikir dan memohon ampunan di hari yang penuh berkah tersebut.',
                        keutamaan: 'Dapat menghapuskan dosa dua tahun, yakni setahun yang telah lalu dan setahun yang akan datang. Ini merupakan salah satu anugerah besar dari Allah Subhanahu wa ta\'ala kepada umat Nabi Muhammad Shallallahu \'alaihi wa sallam untuk meraih ampunan dengan amalan yang singkat.',
                        reference: 'Hadits Riwayat Muslim No. 1162, At-Tirmidzi No. 749, dan Abu Dawud No. 2425.'
                    }
                },
                {
                    id: 'asyura',
                    title: 'Puasa Asyura & Tasu\'a',
                    desc: 'Puasa Muharram untuk menghapus dosa setahun.',
                    content: {
                        niat: 'نَوَيْتُ صَوْمَ عَاشُوْرَاءَ سُنَّةً لِلَّهِ تَعَالَى',
                        latin: 'Nawaitu shauma \'asyura-a sunnatan lillahi ta\'ala.',
                        meaning: 'Aku niat puasa sunnah Asyura karena Allah Ta\'ala.',
                        explanation: 'Puasa Asyura dilaksanakan pada tanggal 10 Muharram untuk memperingati hari kemenangan Nabi Musa AS dan Bani Israil atas Fir\'aun. Nabi Shallallahu \'alaihi wa sallam bersabda bahwa puasa ini dapat menghapus dosa setahun yang telah lalu. <br><br>Untuk membedakan dengan tradisi kaum Yahudi, Nabi Shallallahu \'alaihi wa sallam juga merencanakan puasa Tasu\'a (tanggal 9 Muharram), sebagaimana sabda beliau: "Jika aku masih hidup hingga tahun depan, pasti aku akan berpuasa pada hari kesembilan (Tasu\'a)." (HR. Muslim). Oleh karena itu, sangat dianjurkan untuk menggabungkan puasa tanggal 9 dan 10 Muharram agar memperoleh pahala yang sempurna dan mengikuti sunnah Nabi secara utuh.',
                        keutamaan: 'Dapat menghapuskan dosa setahun yang telah lalu. Puasa ini juga merupakan bentuk rasa syukur atas kemenangan kebenaran (Nabi Musa AS) atas kebatilan (Fir\'aun), serta menunjukkan kemuliaan bulan Muharram sebagai salah satu bulan yang disucikan.',
                        reference: 'Hadits Riwayat Muslim No. 1162 (Keutamaan) dan Bukhari No. 2004 (Latar Belakang).'
                    }
                },
                {
                    id: 'syawal',
                    title: 'Puasa Syawal',
                    desc: 'Puasa 6 hari setelah Idul Fitri laksana puasa setahun penuh.',
                    content: {
                        niat: 'نَوَيْتُ صَوْمَ شَهْرِ شَوَّالٍ سُنَّةً لِلَّهِ تَعَالَى',
                        latin: 'Nawaitu shauma syahri syawwalin sunnatan lillahi ta\'ala.',
                        meaning: 'Aku niat puasa sunnah Syawal karena Allah Ta\'ala.',
                        explanation: 'Puasa Syawal adalah puasa 6 hari yang dilakukan setelah hari raya Idul Fitri. Amalan ini merupakan pelengkap dari puasa Ramadhan. Nabi Shallallahu \'alaihi wa sallam bersabda: "Barangsiapa yang berpuasa Ramadhan kemudian diikuti dengan puasa enam hari di bulan Syawal, maka seolah-olah dia telah berpuasa setahun penuh." (HR. Muslim). <br><br>Puasa ini boleh dilakukan berturut-turut mulai tanggal 2 Syawal hingga 7 Syawal, atau boleh juga secara terpisah selama masih di bulan Syawal. Keistimewaan setahun penuh didasarkan pada perhitungan bahwa setiap satu kebaikan dibalas dengan sepuluh kali lipat; sehingga 30 hari Ramadhan ditambah 6 hari Syawal sama dengan 36 hari yang dikalikan sepuluh menjadi 360 hari (jumlah hari dalam setahun Hijriah).',
                        keutamaan: 'Ganjaran pahalanya setara dengan berpuasa setahun penuh secara terus-menerus. Ini juga menjadi tanda bahwa amalan Ramadhan kita diterima, karena istiqomah melakukan ketaatan setelah selesainya kewajiban adalah bukti keberkahan ibadah sebelumnya.',
                        reference: 'Hadits Riwayat Muslim No. 1164, Ibnu Majah No. 1716, dan Abu Dawud No. 2433.'
                    }
                },
                {
                    id: 'ayyamul_bidh',
                    title: 'Puasa Ayyamul Bidh',
                    desc: 'Puasa hari-hari terang di pertengahan bulan Hijriah.',
                    content: {
                        niat: 'نَوَيْتُ صَوْمَ أَيَّامِ الْبِيْضِ سُنَّةً لِلَّهِ تَعَالَى',
                        latin: 'Nawaitu shauma ayyamil bidhi sunnatan lillahi ta\'ala.',
                        meaning: 'Aku niat puasa sunnah Ayyamul Bidh karena Allah Ta\'ala.',
                        explanation: 'Puasa Ayyamul Bidh dilaksanakan pada tanggal 13, 14, and 15 setiap bulan Hijriah. Dinamakan "Bidh" (Putih) karena pada malam-malam tersebut bulan bersinar penuh (purnama) sehingga langit menjadi terang benderang. Nabi Shallallahu \'alaihi wa sallam mewasiatkan puasa ini sebagai amalan yang tidak boleh ditinggalkan. <br><br>Keutamaannya sangat besar, ibarat berpuasa sepanjang tahun jika rutin dilaksanakan tiap bulan. Dari sisi medis, beberapa teori menyebutkan bahwa siklus bulan purnama mempengaruhi cairan dalam tubuh manusia, dan berpuasa pada waktu tersebut membantu menstabilkan kondisi emosional dan fisik seseorang. Amalan ini merupakan wujud syukur atas cahaya yang Allah Subhanahu wa ta\'ala berikan di tengah kegelapan malam.',
                        keutamaan: 'Pahalanya seperti berpuasa sepanjang tahun atau sepanjang masa (puasa dahr). Hal ini dikarenakan setiap hari puasa dikalikan sepuluh kebaikan, sehingga 3 hari setiap bulan setara dengan 30 hari (sebulan penuh) kebaikan pula.',
                        reference: 'Hadits Riwayat Tirmidzi No. 761, An-Nasa\'i No. 2422, dan Abu Dawud No. 2449.'
                    }
                },
                {
                    id: 'daud',
                    title: 'Puasa Daud',
                    desc: 'Puasa yang paling dicintai Allah (sehari puasa sehari tidak).',
                    content: {
                        niat: 'نَوَيْتُ صَوْمَ دَاوُدَ سُنَّةً لِلَّهِ تَعَالَى',
                        latin: 'Nawaitu shauma dawuda sunnatan lillahi ta\'ala.',
                        meaning: 'Aku niat puasa sunnah Daud karena Allah Ta\'ala.',
                        explanation: 'Puasa Daud adalah metode puasa sunnah dengan cara sehari berpuasa dan sehari berbuka secara berselang-seling. Nabi Shallallahu \'alaihi wa sallam menyatakan: "Puasa yang paling dicintai oleh Allah adalah puasa Nabi Daud." (HR. Bukhari & Muslim). Ini adalah tingkatan puasa sunnah yang paling tinggi dan paling afdhal bagi mereka yang mampu melaksanakannya. <br><br>Puasa ini melatih keseimbangan yang luar biasa antara ketaatan spiritual dan perawatan fisik. Seseorang tidak diperbolehkan berpuasa terus-menerus setiap hari tanpa jeda, karena tubuh juga memiliki hak untuk mendapatkan nutrisi dan istirahat. Dengan mengikuti pola Nabi Daud AS, seorang hamba belajar untuk konsisten dalam beribadah namun tetap menjaga kesehatan dan kekuatan tubuhnya.',
                        keutamaan: 'Inilah puasa sunnah yang paling dicintai oleh Allah Subhanahu wa ta\'ala. Puasa ini merupakan puncak dari mujahadah (perjuangan) nafsu yang sangat seimbang, karena tidak melalaikan hak tubuh namun tetap menjaga intensitas ibadah yang sangat tinggi.',
                        reference: 'Hadits Riwayat Bukhari No. 1131, Muslim No. 1159, dan An-Nasa\'i No. 2344.'
                    }
                }
            ]
        }
    };

    window.openPuasaDetail = function(id) {
        const data = fastingData[id];
        if(!data) return;

        if(id === 'ramadhan') {
            renderPuasaPage(data.title, data.content, false, id);
        } else if(id === 'sunnah') {
            renderSunnahList();
            const screen = document.getElementById('puasa-detail-screen');
            document.getElementById('puasa-detail-title').textContent = data.title;
            screen.classList.remove('hidden');
            void screen.offsetWidth;
            screen.classList.remove('translate-x-full');
            
            if (typeof App !== 'undefined' && App.pushModal) {
                App.pushModal(closePuasaDetail);
            }
        }
    };

    function renderSunnahList() {
        const container = document.getElementById('puasa-detail-content');
        const items = fastingData.sunnah.items;
        
        container.innerHTML = `
            <div class="grid grid-cols-1 gap-4">
                ${items.map(item => `
                    <button onclick="openPuasaItemDetail('${item.id}')" class="w-full text-left bg-white p-5 rounded-2xl  border border-gray-100 flex items-center justify-between group transition-all active:scale-95">
                        <div class="flex-1">
                            <h4 class="font-bold text-gray-800 group-hover:text-primary transition-colors">${item.title}</h4>
                            <p class="text-xs text-gray-500 mt-1">${item.desc}</p>
                        </div>
                        <i data-lucide="chevron-right" class="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors"></i>
                    </button>
                `).join('')}
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    window.openPuasaItemDetail = function(itemId) {
        const item = fastingData.sunnah.items.find(i => i.id === itemId);
        if (item) {
            renderPuasaPage(item.title, item.content, true);
            if (typeof App !== 'undefined' && App.pushModal) {
                App.pushModal(closePuasaItem);
            }
        }
    };

    function renderPuasaPage(title, content, isItem = false, type = '') {
        const targetTitle = isItem ? 'puasa-item-title' : 'puasa-detail-title';
        const targetContent = isItem ? 'puasa-item-content' : 'puasa-detail-content';
        const targetScreen = isItem ? 'puasa-item-screen' : 'puasa-detail-screen';

        document.getElementById(targetTitle).textContent = title;
        document.getElementById(targetContent).innerHTML = `
            <div class="space-y-6">
                <section class="bg-gradient-to-br from-emerald-500 to-teal-700 p-6 rounded-3xl text-white  overflow-hidden relative">
                    <div class="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full"></div>
                    <h3 class="flex items-center gap-2 font-bold mb-4 text-emerald-50">
                        <i data-lucide="heart" class="w-4 h-4"></i>
                        Niat Puasa
                    </h3>
                    <div class="text-right">
                        <p class="font-quran text-3xl mb-4 leading-relaxed">${content.niat}</p>
                        <p class="text-sm italic opacity-90 border-t border-white/20 pt-4 text-left leading-relaxed">
                            "${content.latin}"
                        </p>
                    </div>
                </section>

                <section class="bg-white p-6 rounded-3xl border border-gray-100 ">
                    <h3 class="flex items-center gap-2 font-bold mb-4 text-gray-800">
                        <i data-lucide="languages" class="w-4 h-4 text-emerald-500"></i>
                        Artinya
                    </h3>
                    <p class="text-sm text-gray-600 leading-relaxed italic">
                        ${content.meaning}
                    </p>
                </section>

                <section class="bg-white p-6 rounded-3xl border border-gray-100 ">
                    <h3 class="flex items-center gap-2 font-bold mb-4 text-gray-800">
                        <i data-lucide="info" class="w-4 h-4 text-emerald-500"></i>
                        Penjelasan
                    </h3>
                    <p class="text-sm text-gray-600 leading-relaxed text-justify">
                        ${content.explanation}
                    </p>
                </section>

                <section class="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 ">
                    <h3 class="flex items-center gap-2 font-bold mb-4 text-emerald-700">
                        <i data-lucide="award" class="w-4 h-4"></i>
                        Keutamaan
                    </h3>
                    <p class="text-sm text-emerald-800 leading-relaxed text-justify font-medium">
                        ${content.keutamaan}
                    </p>
                </section>

                <section class="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                    <h3 class="flex items-center gap-2 font-bold mb-3 text-gray-800">
                        <i data-lucide="bookmark" class="w-4 h-4 text-emerald-500"></i>
                        Referensi
                    </h3>
                    <p class="text-[11px] text-gray-400 italic">
                        ${content.reference}
                    </p>
                </section>
            </div>
        `;

        if (typeof lucide !== 'undefined') lucide.createIcons();

        const screen = document.getElementById(targetScreen);
        screen.classList.remove('hidden');
        void screen.offsetWidth;
        screen.classList.remove('translate-x-full');
        document.getElementById(targetContent).scrollTop = 0;
        
        if (type === 'ramadhan') {
            if (typeof App !== 'undefined' && App.pushModal) {
                App.pushModal(closePuasaDetail);
            }
        }
    }

    window.closePuasaDetail = function(shouldPopHistory = true) {
        const screen = document.getElementById('puasa-detail-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => screen.classList.add('hidden'), 300);
    };

    window.closePuasaItem = function(shouldPopHistory = true) {
        const screen = document.getElementById('puasa-item-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => screen.classList.add('hidden'), 300);
    };

    if (typeof lucide !== 'undefined') lucide.createIcons();
};
