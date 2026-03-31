export const render = () => `
<div id="keislaman-main-screen" class="transition-all duration-300 relative z-20">
    <div class="bg-white px-6 py-4 sticky top-0 z-[100] flex items-center justify-between border-b border-gray-100">
        <a href="./" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-xl transition-colors border border-gray-100 shrink-0">
             <i data-lucide="arrow-left" class="w-5 h-5 text-gray-700"></i>
             <span class="text-sm font-bold text-gray-700">Kembali</span>
        </a>
        <div class="flex flex-col text-right">
            <h1 class="text-xl font-extrabold text-primary tracking-tight">Wawasan Islam</h1>
            <p class="text-xs text-gray-400 font-medium">Pelajari Dasar Agama</p>
        </div>
    </div>

    <div class="container mx-auto px-5 py-8 pb-32 w-full space-y-4">
        <!-- Asmaul Husna Pindah ke Atas -->
        <button onclick="openWawasanDetail('asmaul_husna')" class="w-full text-left bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-2xl  border border-rose-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="heart" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">Asmaul Husna</h3>
                <p class="text-xs text-rose-50 mt-1 opacity-90">99 Nama-Nama Allah Yang Indah</p>
            </div>
        </button>

        <button onclick="openWawasanDetail('rukun_islam')" class="w-full text-left bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl  border border-emerald-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="info" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">Rukun Islam</h3>
                <p class="text-xs text-emerald-50 mt-1 opacity-90">5 Pilar Utama Dasar Agama Islam</p>
            </div>
        </button>

        <button onclick="openWawasanDetail('rukun_iman')" class="w-full text-left bg-gradient-to-br from-sky-500 to-blue-600 p-6 rounded-2xl  border border-sky-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="shield-check" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">Rukun Iman</h3>
                <p class="text-xs text-sky-50 mt-1 opacity-90">6 Pilar Keyakinan Umat Muslim</p>
            </div>
        </button>

        <button onclick="openWawasanDetail('malaikat')" class="w-full text-left bg-gradient-to-br from-indigo-500 to-violet-600 p-6 rounded-2xl  border border-indigo-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="feather" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">10 Malaikat</h3>
                <p class="text-xs text-indigo-50 mt-1 opacity-90">Malaikat Allah & Tugas-tugasnya</p>
            </div>
        </button>

        <button onclick="openWawasanDetail('nabi')" class="w-full text-left bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl  border border-amber-400 group relative overflow-hidden flex items-center gap-5 transition-all active:scale-95">
            <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform flex-shrink-0">
                <i data-lucide="users" class="w-7 h-7"></i>
            </div>
            <div class="flex-1 relative">
                <h3 class="font-bold text-white text-lg">25 Nabi & Rasul</h3>
                <p class="text-xs text-amber-50 mt-1 opacity-90">Utusan Allah Yang Wajib Diketahui</p>
            </div>
        </button>
    </div>
</div>

<div id="keislaman-detail-screen" class="hidden bg-[#F0F2F5] min-h-screen fixed inset-0 z-50 transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[110] flex items-center gap-4 border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col flex-1 overflow-hidden">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="wawasan-detail-title">Detail</h1>
        </div>
    </div>
    <div class="container mx-auto px-4 py-6 pb-32 w-full flex-1 overflow-y-auto" id="wawasan-detail-content">
    </div>
</div>

<div id="nabi-history-screen" class="hidden bg-white min-h-screen fixed inset-0 z-[110] transform translate-x-full transition-transform duration-300 flex flex-col pt-safe">
    <div class="bg-white px-4 py-4 sticky top-0 z-[120] flex items-center gap-4 border-b border-gray-100">
        <button onclick="App.popModal()" class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-amber-50 hover:text-amber-600 transition-colors border border-gray-200 shrink-0 ">
             <i data-lucide="arrow-left" class="w-5 h-5"></i>
             <span class="text-sm font-bold">Kembali</span>
        </button>
        <div class="flex flex-col flex-1 overflow-hidden">
            <h1 class="text-lg font-bold text-gray-800 truncate" id="nabi-history-title">Sejarah Nabi</h1>
        </div>
    </div>
    <div class="container mx-auto px-5 py-8 pb-32 w-full flex-1 overflow-y-auto" id="nabi-history-content">
    </div>
</div>
`;

export const init = () => {
    const contentData = {
        rukun_islam: {
            title: 'Rukun Islam',
            items: [
                { no: 1, title: 'Syahadat', desc: 'Bersaksi bahwa tidak ada Tuhan selain Allah dan Nabi Muhammad adalah utusan Allah.' },
                { no: 2, title: 'Sholat', desc: 'Mendirikan sholat lima waktu sehari semalam.' },
                { no: 3, title: 'Zakat', desc: 'Mengeluarkan sebagian harta untuk diberikan kepada yang berhak menerima.' },
                { no: 4, title: 'Puasa', desc: 'Menahan diri dari makan, minum, dan hal yang membatalkan dari terbit fajar hingga terbenam matahari di bulan Ramadhan.' },
                { no: 5, title: 'Haji', desc: 'Melaksanakan ibadah ke Baitullah di Mekkah bagi yang mampu secara fisik dan finansial.' }
            ]
        },
        rukun_iman: {
            title: 'Rukun Iman',
            items: [
                { no: 1, title: 'Iman kepada Allah', desc: 'Meyakini dengan sepenuh hati bahwa Allah itu ada dan satu-satunya Tuhan.' },
                { no: 2, title: 'Iman kepada Malaikat', desc: 'Meyakini adanya makhluk gaib bernama Malaikat yang selalu taat kepada Allah.' },
                { no: 3, title: 'Iman kepada Kitab Allah', desc: 'Meyakini bahwa Allah menurunkan kitab-kitab suci kepada para Rasul-Nya (Taurat, Zabur, Injil, Al-Quran).' },
                { no: 4, title: 'Iman kepada Rasul Allah', desc: 'Meyakini bahwa Allah memilih utusan-utusan-Nya untuk membawa petunjuk bagi manusia.' },
                { no: 5, title: 'Iman kepada Hari Kiamat', desc: 'Meyakini adanya hari akhir ketika dunia hancur dan manusia dibangkitkan.' },
                { no: 6, title: 'Iman kepada Qada & Qadar', desc: 'Meyakini bahwa segala sesuatu yang terjadi adalah atas ketetapan dan takdir Allah.' }
            ]
        },
        malaikat: {
            title: '10 Malaikat & Tugasnya',
            items: [
                { no: 1, title: 'Jibril', desc: 'Menyampaikan wahyu kepada Nabi dan Rasul.' },
                { no: 2, title: 'Mikail', desc: 'Membagikan rezeki dan mengatur fenomena alam (seperti hujan).' },
                { no: 3, title: 'Israfil', desc: 'Meniup sangkakala pada hari kiamat.' },
                { no: 4, title: 'Izrail', desc: 'Mencabut nyawa seluruh makhluk hidup.' },
                { no: 5, title: 'Munkar', desc: 'Bertanya kepada manusia di dalam kubur tentang amal perbuatannya.' },
                { no: 6, title: 'Nakir', desc: 'Membantu Munkar bertanya kepada manusia di dalam kubur.' },
                { no: 7, title: 'Raqib', desc: 'Mencatat segala amal baik manusia selama hidup.' },
                { no: 8, title: 'Atid', desc: 'Mencatat segala amal buruk manusia selama hidup.' },
                { no: 9, title: 'Ridwan', desc: 'Menjaga pintu surga.' },
                { no: 10, title: 'Malik', desc: 'Menjaga pintu neraka.' }
            ]
        },
        nabi: {
            title: '25 Nabi & Rasul',
            type: 'list_nabi',
            items: [
                { 
                    no: 1, 
                    title: 'Nabi Adam Alaihis Salam', 
                    desc: 'Manusia pertama ciptaan Allah Subhanahu wa Ta\'ala.',
                    history: 'Nabi Adam Alaihis Salam adalah manusia pertama sekaligus nabi pertama yang diciptakan Allah Subhanahu wa Ta\'ala langsung dari tanah pilihan. Allah meniupkan ruh-Nya ke dalam tubuh Adam dan memberikan pengetahuan tentang segala nama benda di alam semesta yang tidak diketahui oleh malaikat. Adam kemudian ditempatkan di surga bersama pasangannya, Hawa. Namun, karena godaan Iblis, mereka memakan buah Khuldi yang dilarang, sehingga akhirnya diturunkan ke bumi untuk menjalankan amanah sebagai khalifah pertama. Selama ratusan tahun di bumi, mereka bertaubat hingga akhirnya dipertemukan kembali di Jabal Rahmah.',
                    miracles: 'Penciptaannya dari tanah tanpa ibu dan bapak, serta diberikan kecerdasan luar biasa untuk memahami seluruh nama benda di alam semesta yang menjadi keunggulan atas para malaikat.',
                    source: 'Al-Quran & Qashashul Anbiya'
                },
                { 
                    no: 2, 
                    title: 'Nabi Idris Alaihis Salam', 
                    desc: 'Manusia pertama yang mahir menulis dan menjahit.',
                    history: 'Nabi Idris Alaihis Salam adalah keturunan keenam dari Nabi Adam. Beliau dikenal sebagai sosok yang sangat tekun dalam beribadah dan memiliki ilmu pengetahuan yang sangat luas. Idris adalah manusia pertama yang diberikan kemampuan oleh Allah untuk menulis menggunakan pena dan menguasai ilmu menjahit pakaian, di mana saat itu manusia masih menggunakan kulit binatang. Beliau juga dikenal ahli dalam ilmu perbintangan (astronomi) dan matematika. Karena kesalehannya yang luar biasa, Allah mengangkat derajatnya ke tempat yang tinggi dan beliau sempat diperlihatkan suasana Surga serta Neraka.',
                    miracles: 'Memiliki kecerdasan luar biasa dalam berbagai ilmu pengetahuan serta diberikan kesempatan oleh Allah untuk melihat keajaiban alam akhirat semasa hidupnya.',
                    source: 'Tarikh Al-Tabari'
                },
                { 
                    no: 3, 
                    title: 'Nabi Nuh Alaihis Salam', 
                    desc: 'Rasul Pertama & Pembuat Bahtera Raksasa.',
                    history: 'Nabi Nuh Alaihis Salam diutus Allah kepada kaumnya yang gemar menyembah berhala. Beliau berdakwah dengan penuh kesabaran selama sekitar 950 tahun, namun tantangan yang dihadapi sangat berat, bahkan istri dan salah satu anaknya (Kan\'an) termasuk yang membangkang. Setelah sekian lama dakwahnya selalu ditolak, Allah memerintahkan Nuh untuk membangun sebuah bahtera (kapal) yang sangat besar di atas bukit. Kaumnya mengejek beliau sebagai orang gila, namun saat bahtera selesai, banjir besar yang dahsyat menenggelamkan seluruh bumi, kecuali mereka yang berada di atas bahtera bersama Nabi Nuh.',
                    miracles: 'Mampu membangun bahtera raksasa atas petunjuk Allah yang selamat dari terjangan ombak setinggi gunung dalam banjir besar global.',
                    source: 'Al-Quran Surat Nuh & Huud'
                },
                { 
                    no: 4, 
                    title: 'Nabi Hud Alaihis Salam', 
                    desc: 'Diutus kepada Kaum \'Ad yang Sombong.',
                    history: 'Nabi Hud Alaihis Salam diutus kepada Kaum \'Ad, bangsa yang diberkahi Allah dengan kekuatan fisik yang luar biasa dan keahlian membangun arsitektur megah di atas bukit-bukit. Namun, mereka menjadi sombong dan mengingkari nikmat Allah. Nabi Hud mengajak mereka untuk menyembah Allah saja, tetapi mereka justru menantang datangnya azab. Akhirnya, Allah mengirimkan bencana berupa kekeringan panjang diikuti oleh badai angin dingin yang sangat dahsyat selama tujuh malam delapan hari, yang menghancurkan seluruh kaum tersebut hingga tak tersisa, kecuali Nabi Hud dan para pengikutnya yang beriman.',
                    miracles: 'Mampu selamat bersama orang beriman dari amukan badai angin yang menghancurkan bangunan-bangunan kokoh Kaum \'Ad.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 5, 
                    title: 'Nabi Shaleh Alaihis Salam', 
                    desc: 'Mukjizat Unta Betina dari Balik Batu.',
                    history: 'Nabi Shaleh Alaihis Salam diutus kepada Kaum Tsamud yang mewarisi kemajuan peradaban Kaum \'Ad, tetapi mereka juga jatuh ke dalam kesyirikan. Untuk membuktikan kenabiannya, kaumnya menantang beliau mengeluarkan seekor unta dari sebuah batu besar. Atas izin Allah, muncullah unta betina yang ajaib. Nabi Shaleh berpesan agar unta tersebut tidak diganggu, namun mereka justru menyembelih unta itu karena keserakahan. Akibatnya, Allah menghukum Kaum Tsamud dengan petir yang menyambar disertai gempa dahsyat yang menghancurkan tempat tinggal mereka dalam seketika.',
                    miracles: 'Mengeluarkan seekor unta betina hamil yang sangat besar dari dalam bongkahan batu atas izin Allah.',
                    source: 'Al-Quran Surat Al-A\'raf'
                },
                { 
                    no: 6, 
                    title: 'Nabi Ibrahim alaihis salam', 
                    desc: 'Abul Anbiya (Bapak Para Nabi).',
                    history: 'Nabi Ibrahim alaihis salam atau dikenal sebagai Khalilullah (Kekasih Allah) adalah tokoh sentral dalam sejarah para nabi. Beliau hidup di masa Raja Namrud yang zalim dan penyembah berhala. Setelah menghancurkan berhala-berhala di kuil, beliau dihukum bakar oleh Namrud, namun api menjadi dingin atas perintah Allah. Beliau juga yang membangun kembali Ka\'bah di Mekkah bersama putranya, Ismail. Beliau diuji dengan perintah menyembelih Ismail, yang kemudian digantikan dengan domba, sebagai awal mula ibadah Qurban. Keteguhan imannya menjadikannya teladan bagi umat manusia hingga akhir zaman.',
                    miracles: 'Tubuhnya tidak hangus sedikitpun saat dibakar dalam api besar oleh Raja Namrud serta dianugerahi keturunan nabi-nabi dari kedua putranya, Ismail dan Ishaq.',
                    source: 'Al-Quran & Qashashul Anbiya'
                },
                { 
                    no: 7, 
                    title: 'Nabi Luth alaihis salam', 
                    desc: 'Berjuang Melawan Kemerosotan Moral Kaum Sodom.',
                    history: 'Nabi Luth alaihis salam adalah keponakan Nabi Ibrahim yang diutus ke Kota Sodom. Penduduknya dikenal memiliki perilaku yang sangat melimpah secara materi namun sangat buruk secara moral, yaitu mempraktikkan hubungan sesama jenis yang belum pernah dilakukan sebelumnya. Meskipun Nabi Luth telah memperingatkan berkali-kali, mereka justru mengancam mengusirnya. Allah kemudian mengirimkan malaikat untuk menyelamatkan Luth dan keluarganya, kecuali istrinya yang berkhianat. Kota Sodom akhirnya dijungkirbalikkan dan dihujani batu belerang panas hingga musnah.',
                    miracles: 'Mendapat perlindungan langsung dari Allah saat ribuan penduduk mengepung rumahnya serta selamat dari kehancuran dahsyat kota Sodom.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 8, 
                    title: 'Nabi Ismail alaihis salam', 
                    desc: 'Putra yang Sabar & Asal Mula Air Zamzam.',
                    history: 'Nabi Ismail alaihis salam adalah putra pertama Nabi Ibrahim dari Siti Hajar. Saat masih bayi, beliau ditinggalkan di lembah Mekkah yang tandus atas perintah Allah. Di tempat itulah muncul mata air Zamzam lewat hentakan kakinya saat ibunya mencari air. Ujian terbesar Ismail adalah ketika ayahnya bermimpi diperintahkan Allah untuk menyembelihnya, dan dengan penuh ketaatan ia menyetujuinya sebelum Allah menggantinya dengan seekor domba besar. Bersama ayahnya, Ismail membangun kembali Ka\'bah yang menjadi pusat kiblat umat Islam di seluruh dunia.',
                    miracles: 'Munculnya mata air Zamzam di daerah tandus serta selamat dari penyembelihan karena digantikan dengan domba dari surga.',
                    source: 'Tarikh Al-Islam'
                },
                { 
                    no: 9, 
                    title: 'Nabi Ishaq alaihis salam', 
                    desc: 'Adik Nabi Ismail, Leluhur Bani Israil.',
                    history: 'Nabi Ishaq alaihis salam lahir dari pasangan Nabi Ibrahim dan Siti Sarah saat keduanya sudah berusia sangat lanjut. Kelahirannya merupakan kabar gembira yang disampaikan langsung oleh para malaikat. Ishaq dikenal sebagai sosok yang sangat saleh, berilmu, dan penyabar. Beliau meneruskan dakwah ayahnya di wilayah Syam (Palestina). Dari keturunan beliaulah lahir banyak nabi-nabi besar di kemudian hari, termasuk putranya Nabi Ya\'qub dan cucunya Nabi Yusuf, yang menjadi awal dari silsilah panjang Bani Israil.',
                    miracles: 'Lahir sebagai mukjizat dari seorang ibu yang sudah tua dan divonis mandul serta memiliki kebijaksanaan luar biasa dalam memimpin umat.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 10, 
                    title: 'Nabi Ya\'qub alaihis salam', 
                    desc: 'Kesabaran Seorang Ayah & Gelar Israil.',
                    history: 'Nabi Ya\'qub alaihis salam adalah putra Nabi Ishaq yang sangat mencintai anak-anaknya. Beliau memiliki 12 putra, di mana yang paling beliau sayangi adalah Yusuf. Beliau mengalami ujian berat berupa kehilangan Yusuf selama puluhan tahun akibat perbuatan saudara-saudaranya. Meskipun begitu, beliau tidak pernah putus asa dari rahmat Allah hingga matanya memutih karena tangisan, sampai akhirnya Allah mempertemukannya kembali dengan Yusuf yang telah menjadi penguasa di Mesir. Beliau dijuluki "Israil" yang artinya Hamba Allah, yang menjadi nama bagi keturunannya.',
                    miracles: 'Memiliki firasat yang sangat tajam serta kesembuhan matanya setelah mengusapkan pakaian Yusuf ke wajahnya.',
                    source: 'Al-Quran Surat Yusuf'
                },
                { 
                    no: 11, 
                    title: 'Nabi Yusuf alaihis salam', 
                    desc: 'Ketampanan Luar Biasa & Penafsir Mimpi.',
                    history: 'Nabi Yusuf alaihis salam adalah prototipe kesabaran dan kemuliaan akhlak. Sejak kecil dibuang ke sumur oleh saudaranya, lalu menjadi budak di Mesir, difitnah oleh istri majikannya zulaikha hingga dipenjara. Di dalam penjara, beliau dikenal sebagai penafsir mimpi yang sangat akurat. Berkat kemampuan menafsirkan mimpi Raja Mesir tentang masa paceklik, beliau diangkat menjadi bendahara negara. Yusuf akhirnya mampu menyelamatkan rakyat Mesir dan keluarganya dari kelaparan, serta memaafkan semua kesalahan saudara-saudaranya di masa lalu tanpa ada rasa dendam.',
                    miracles: 'Diberikan separuh ketampanan manusia di bumi serta kemampuan istimewa dalam menakwilkan atau menafsirkan mimpi menjadi kenyataan.',
                    source: 'Al-Quran Surat Yusuf'
                },
                { 
                    no: 12, 
                    title: 'Nabi Ayyub alaihis salam', 
                    desc: 'Teladan Kesabaran dalam Menghadapi Ujian Fisik.',
                    history: 'Nabi Ayyub alaihis salam awalnya adalah seorang nabi yang sangat kaya raya, memiliki banyak anak, dan kesehatan yang prima. Allah mengujinya dengan mencabut semua kekayaannya, wafatnya anak-anaknya satu per satu, hingga penyakit kulit yang parah selama 18 tahun yang membuat orang-orang menjauhinya kecuali istrinya yang setia. Nabi Ayyub tetap berdzikir dan bersyukur tanpa mengeluh sedikitpun. Setelah lulus ujian kesabaran yang luar biasa ini, Allah memerintahkannya menghentakkan kaki ke bumi, muncul air untuk mandi dan minum, sehingga seketika kesehatan dan kekayaannya dikembalikan berlipat ganda.',
                    miracles: 'Kesembuhan seketika dari penyakit menahun setelah mandi dengan air yang memancar dari hentakan kakinya ke bumi.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 13, 
                    title: 'Nabi Syu\'aib alaihis salam', 
                    desc: 'Khatibul Anbiya (Penyambung Lidah Para Nabi).',
                    history: 'Nabi Syu\'aib alaihis salam diutus kepada penduduk Madyan yang memiliki kebiasaan buruk dalam berdagang, yakni suka mengurangi timbangan dan menipu. Beliau dikenal sangat fasih dan manis tutur katanya dalam berdakwah, sehingga dijuluki sebagai juru bicara para nabi. Beliau memperingatkan mereka akan azab seperti yang menimpa Kaum Nuh dan Hud, namun mereka tetap angkuh. Akhirnya, Allah mengirimkan azab berupa hawa panas yang membakar diikuti oleh suara gemuruh dahsyat dari langit serta gempa yang membinasakan mereka di dalam rumah masing-masing.',
                    miracles: 'Fasihan bicaranya yang luar biasa dalam menyampaikan kebenaran serta selamat dari bencana awan api yang memusnahkan kaumnya.',
                    source: 'Tarikh Al-Rusul'
                },
                { 
                    no: 14, 
                    title: 'Nabi Musa alaihis salam', 
                    desc: 'Kalaamullah & Pembebas Bani Israil dari Fir\'aun.',
                    history: 'Nabi Musa alaihis salam lahir saat Raja Fir\'aun Mesir memerintahkan pembunuhan setiap bayi laki-laki. Beliau diselamatkan oleh asiyah istri Fir\'aun dan tumbuh di istana. Setelah mendapatkan wahyu di Bukit Sinai, Musa bersama saudaranya Harun menantang Fir\'aun untuk membebaskan Bani Israil. Puncak perjuangannya adalah saat dikejar bala tentara Fir\'aun hingga ke tepi laut, di mana Allah memerintahkan Musa membelah laut dengan tongkatnya. Musa juga menerima Kitab Taurat sebagai pedoman hukum bagi kaumnya. Beliau termasuk nabi Ulul Azmi yang memiliki keteguhan hati sangat tinggi.',
                    miracles: 'Tongkat yang bisa berubah menjadi ular besar dan mampu membelah Laut Merah menjadi jalan yang kering.',
                    source: 'Al-Quran & Qashashul Anbiya'
                },
                { 
                    no: 15, 
                    title: 'Nabi Harun alaihis salam', 
                    desc: 'Pendamping Setia Nabi Musa yang Fasih.',
                    history: 'Nabi Harun alaihis salam adalah saudara kandung Nabi Musa yang diberikan kelebihan berupa kefasihan berbicara dan ketenangan dalam berdiplomasi. Musa memohon kepada Allah agar Harun diangkat menjadi nabi untuk mendampinginya menghadapi Fir\'aun yang kejam. Harun berperan penting sebagai penasihat dan pendamping setia dalam memimpin Bani Israil selama di padang pasir. Beliau sosok yang sangat lembut namun tegas dalam menjaga kemurnian agama saat Musa sedang bermunajat di Bukit Sinai menerima wahyu Allah.',
                    miracles: 'Kemampuan orasi dan diplomasi yang sangat menyentuh hati serta dukungan penuh dalam mukjizat-mukjizat yang dialami bersama Nabi Musa.',
                    source: 'Al-Quran'
                },
                { 
                    no: 16, 
                    title: 'Nabi Dzulkifli alaihis salam', 
                    desc: 'Raja yang Sangat Teguh Menjalankan Amanah.',
                    history: 'Nabi Dzulkifli alaihis salam adalah putra Nabi Ayyub. Namanya berarti "Yang Memiliki Kesanggupan". Beliau terpilih menjadi pemimpin atau raja setelah menyanggupi syarat untuk berpuasa di siang hari, melakukan shalat malam, dan tidak pernah marah dalam memutuskan perkara rakyatnya. Beliau memegang amanah tersebut dengan sangat luar biasa meski Iblis mencoba berkali-kali menggoda amarahnya. Dzulkifli dikenang sebagai pemimpin yang adil, penyabar, dan sosok yang sangat disiplin dalam membagi waktu antara ibadah dan urusan kenegaraan.',
                    miracles: 'Kesabaran yang tak tergoyahkan dan kemampuan memimpin yang sangat adil tanpa pernah tersulut emosi sedikitpun.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 17, 
                    title: 'Nabi Daud alaihis salam', 
                    desc: 'Pahlawan Muda, Raja & Penerima Kitab Zabur.',
                    history: 'Nabi Daud alaihis salam dikenal sejak muda saat berhasil mengalahkan raksasa Jalut (Goliath) hanya dengan umban (ketapel). Beliau kemudian diangkat menjadi raja Bani Israil yang sangat dicintai. Allah menurunkan Kitab Zabur kepadanya yang berisi puji-pujian. Daud memiliki suara yang sangat merdu; ketika beliau bertasbih, gunung-gunung dan burung-burung pun ikut menyahut. Beliau juga dikenal sebagai nabi yang mahir dalam membuat baju besi untuk keperluan perang dengan teknik yang belum pernah ada sebelumnya. Daud juga dikenal dengan ibadah puasanya yang istimewa (Puasa Daud).',
                    miracles: 'Mampu melunakkan besi dengan tangan kosong tanpa bantuan api serta memiliki suara merdu yang membuat alam ikut bertasbih bersamanya.',
                    source: 'Tarikh Ibnu Katsir'
                },
                { 
                    no: 18, 
                    title: 'Nabi Sulaiman alaihis salam', 
                    desc: 'Raja Terbesar yang Menguasai Manusia, Jin & Hewan.',
                    history: 'Nabi Sulaiman alaihis salam merupakan putra Nabi Daud yang mewarisi kerajaannya. Allah menganugerahinya kekuasaan yang tidak pernah diberikan kepada manusia lain sebelumnya, yaitu memerintah jin, hewan, bahkan angin. Beliau memimpin kerajaan yang sangat megah dengan teknologi transportasi angin yang sangat cepat. Kisahnya yang paling terkenal adalah pertemuan dengan Ratu Balqis dari Kerajaan Saba yang kemudian masuk Islam. Meskipun memiliki kekuasaan yang tak terbatas, Nabi Sulaiman tetap rendah hati dan selalu bersyukur bahwa semua itu hanyalah titipan dari Allah semata.',
                    miracles: 'Bisa berbicara dengan hewan (seperti semut dan burung hud-hud), memerintah pasukan jin, serta menundukkan angin sebagai kendaraannya.',
                    source: 'Al-Quran & Sejarah Para Nabi'
                },
                { 
                    no: 19, 
                    title: 'Nabi Ilyas alaihis salam', 
                    desc: 'Pejuang Tauhid Melawan Penyembah Berhala Baal.',
                    history: 'Nabi Ilyas Alaihis Salam diutus untuk kaum Bani Israil di negeri Ba\'labak (Lebanon) yang tersesat dengan menyembah patung berhala besar bernama Baal. Beliau mengajak mereka kembali ke jalan Allah, namun mereka terus mendurhakai sang Nabi. Kekeringan panjang melanda negeri itu sebagai peringatan, hingga akhirnya mereka memohon kepada Ilyas agar mendoakan hujan. Setelah hujan turun, mereka kembali lagi menyembah berhala. Nabi Ilyas menghabiskan hidupnya dengan berdakwah di hutan dan pegunungan demi menjaga kemurnian iman para pengikutnya dari gangguan raja yang zalim.',
                    miracles: 'Mampu mendatangkan hujan setelah kekeringan panjang atas izin Allah serta selamat dari berbagai kejaran bala tentara musuh.',
                    source: 'Tarikh Al-Tabari'
                },
                { 
                    no: 20, 
                    title: 'Nabi Ilyasa Alaihis Salam', 
                    desc: 'Penerus Dakwah Nabi Ilyas.',
                    history: 'Nabi Ilyasa Alaihis Salam adalah putra paman Nabi Ilyas. Beliau meneruskan perjuangan dakwah Nabi Ilyas di kalangan Bani Israil untuk tetap menyembah Allah dan menjauhi berhala. Selama masa kepemimpinannya, kaumnya hidup dalam kedamaian dan kemakmuran karena keteguhan mereka dalam mengikuti ajaran Allah. Namun, setelah wafatnya Nabi Ilyasa, mereka kembali berpaling dan melakukan banyak kemaksiatan sehingga Allah mencabut nikmat tersebut.',
                    miracles: 'Mampu menghidupkan kembali orang yang sudah mati atas izin Allah serta menjaga umatnya tetap dalam jalan kebenaran di tengah tantangan zaman.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 21, 
                    title: 'Nabi Yunus Alaihis Salam', 
                    desc: 'Dzu Nuun (Pemilik Ikan Paus) & Teladan Tobat.',
                    history: 'Nabi Yunus Alaihis Salam diutus kepada penduduk Ninawa yang sangat keras kepala. Merasa berputus asa karena kaumnya tidak mau beriman, beliau meninggalkan mereka dan naik ke kapal. Allah menegurnya dengan badai besar, dan setelah diundi, Yunus dilemparkan ke laut lalu ditelan oleh ikan paus raksasa. Di dalam perut ikan yang gelap, beliau terus bertasbih memohon ampunan Allah. Akhirnya beliau dikeluarkan dengan selamat dan kembali ke Ninawa, di mana ternyata seluruh penduduknya telah bertaubat dan beriman kepada Allah.',
                    miracles: 'Selamat setelah berada di dalam perut ikan paus raksasa selama tiga hari tiga malam berkat doa dan tasbihnya yang tulus kepada Allah.',
                    source: 'Al-Quran Surat Yunus'
                },
                { 
                    no: 22, 
                    title: 'Nabi Zakaria Alaihis Salam', 
                    desc: 'Ayah Nabi Yahya & Pengasuh Maryam.',
                    history: 'Nabi Zakaria Alaihis Salam adalah nabi yang sangat lembut hatinya dan bertugas menjaga Baitul Maqdis. Beliau adalah pengasuh Maryam binti Imran. Ujian terbesar dalam hidupnya adalah belum dikaruniai anak hingga usianya mencapai 90 tahun lebih dan istrinya mandul. Namun, beliau tetap berdoa dengan penuh keyakinan dan kelembutan. Akhirnya Allah mengabulkan doanya dengan lahirnya Yahya. Beliau adalah sosok yang sangat sabar menghadapi berbagai ujian politik dan agama di kalangan Bani Israil saat itu demi menjaga kesucian rumah ibadah.',
                    miracles: 'Bisa mendapatkan keturunan nabi di usia yang sangat senja dari seorang istri yang secara medis dinyatakan mandul.',
                    source: 'Al-Quran Surat Maryam'
                },
                { 
                    no: 23, 
                    title: 'Nabi Yahya Alaihis Salam', 
                    desc: 'Nabi yang Sangat Zuhud & Penegak Kebenaran.',
                    history: 'Nabi Yahya Alaihis Salam adalah putra Nabi Zakaria. Sejak kecil beliau sudah menunjukkan kecerdasan luar biasa dan ketertarikan yang mendalam pada Kitab Allah. Beliau hidup dengan sangat sederhana (zuhud), sering menghabiskan waktu di padang pasir untuk beribadah dan menjauhi kemewahan dunia. Beliau dikenal sangat berani dalam menyuarakan kebenaran, bahkan di depan raja yang zalim sekalipun mengenai hukum-hukum Allah. Kelembutan hatinya membuatnya sangat dicintai tidak hanya oleh manusia, tapi juga oleh makhluk lainnya di alam bebas.',
                    miracles: 'Dianugerahi hikmah (ilmu agama) yang mendalam sejak masih kanak-kanak serta memiliki kemampuan memahami Taurat dengan sempurna.',
                    source: 'Qashashul Anbiya'
                },
                { 
                    no: 24, 
                    title: 'Nabi Isa Alaihis Salam', 
                    desc: 'Rasul Ulul Azmi & Pembawa Kitab Injil.',
                    history: 'Nabi Isa Alaihis Salam lahir dari Maryam tanpa perantara seorang ayah sebagai bukti kebesaran Allah. Sejak bayi beliau sudah bisa berbicara untuk membela kehormatan ibunya. Beliau diutus kepada Bani Israil untuk memperbarui ajaran Taurat dan membawa Kitab Injil yang menekankan cinta kasih dan penyucian jiwa. Perjalanannya penuh dengan mukjizat yang menakjubkan untuk melawan paham materialisme saat itu. Ketika musuh-musuhnya hendak menyalibnya, Allah mengangkatnya ke langit dan menyerupakan orang lain sebagai Isa. Beliau akan turun kembali ke bumi sebelum hari kiamat.',
                    miracles: 'Bisa berbicara saat masih bayi, menghidupkan orang mati, menyembuhkan orang buta sejak lahir, dan menurunkan hidangan dari langit atas izin Allah.',
                    source: 'Al-Quran & Sejarah Kristen/Islam'
                },
                { 
                    no: 25, 
                    title: 'Nabi Muhammad Shallallahu \'alaihi wa sallam', 
                    desc: 'Khatamul Anbiya (Penutup Para Nabi & Rasul).',
                    history: 'Nabi Muhammad Shallallahu \'alaihi wa sallam adalah nabi terakhir yang diutus untuk seluruh alam semesta. Lahir di Mekkah sebagai anak yatim, beliau dikenal dengan gelar Al-Amin karena kejujurannya. Pada usia 40 tahun, beliau menerima wahyu pertama di Gua Hira melalui malaikat Jibril. Perjuangan beliau selama 23 tahun telah mengubah peradaban gelap Jahiliyah menjadi terang benderang dengan cahaya Islam. Beliau melakukan Hijrah ke Madinah dan membangun negara yang adil serta beradab. Al-Quran yang beliau bawa adalah mukjizat abadi bagi seluruh umat manusia hingga akhir zaman.',
                    miracles: 'Al-Quran sebagai mukjizat intelektual terbesar, peristiwa Isra Mi\'raj menuju Sidratul Muntaha, membelah bulan, serta air yang mengalir dari sela-sela jari beliau.',
                    source: 'Sirah Nabawiyah & Al-Quran'
                }
            ]
        },
        asmaul_husna: {
            title: 'Asmaul Husna',
            type: 'grid',
            items: [
                { no: 1, title: 'Ar-Rahman', desc: 'Maha Pengasih', arabic: 'الرَّحْمَنُ' },
                { no: 2, title: 'Ar-Rahim', desc: 'Maha Penyayang', arabic: 'الرَّحِيمُ' },
                { no: 3, title: 'Al-Malik', desc: 'Maha Raja', arabic: 'الْمَلِكُ' },
                { no: 4, title: 'Al-Quddus', desc: 'Maha Suci', arabic: 'الْقُدُّوسُ' },
                { no: 5, title: 'As-Salam', desc: 'Maha Sejahtera', arabic: 'السَّلَامُ' },
                { no: 6, title: 'Al-Mu\'min', desc: 'Maha Memberi Keamanan', arabic: 'الْمُؤْمِنُ' },
                { no: 7, title: 'Al-Muhaimin', desc: 'Maha Memelihara', arabic: 'الْمُهَيْمِنُ' },
                { no: 8, title: 'Al-Aziz', desc: 'Maha Perkasa', arabic: 'الْعَزِيزُ' },
                { no: 9, title: 'Al-Jabbar', desc: 'Maha Memaksa', arabic: 'الْجَبَّارُ' },
                { no: 10, title: 'Al-Mutakabbir', desc: 'Maha Megah / Sombong', arabic: 'الْمُتَكَبِّرُ' },
                { no: 11, title: 'Al-Khaliq', desc: 'Maha Pencipta', arabic: 'الْخَالِقُ' },
                { no: 12, title: 'Al-Bari', desc: 'Maha Melepaskan', arabic: 'الْبَارِئُ' },
                { no: 13, title: 'Al-Mushawwir', desc: 'Maha Membentuk Rupa', arabic: 'الْمُصَوِّرُ' },
                { no: 14, title: 'Al-Ghaffar', desc: 'Maha Pengampun', arabic: 'الْغَفَّارُ' },
                { no: 15, title: 'Al-Qahhar', desc: 'Maha Menaklukkan', arabic: 'الْقَهَّارُ' },
                { no: 16, title: 'Al-Wahhab', desc: 'Maha Pemberi Karunia', arabic: 'الْوَهَّابُ' },
                { no: 17, title: 'Ar-Razzaq', desc: 'Maha Pemberi Rezeki', arabic: 'الرَّزَّاقُ' },
                { no: 18, title: 'Al-Fattah', desc: 'Maha Pembuka Rahmat', arabic: 'الْفَتَّاحُ' },
                { no: 19, title: 'Al-Alim', desc: 'Maha Mengetahui', arabic: 'الْعَلِيمُ' },
                { no: 20, title: 'Al-Qabidh', desc: 'Maha Menyempitkan', arabic: 'الْقَابِضُ' },
                { no: 21, title: 'Al-Basit', desc: 'Maha Melapangkan', arabic: 'الْبَاسِطُ' },
                { no: 22, title: 'Al-Khafidh', desc: 'Maha Merendahkan', arabic: 'الْخَافِضُ' },
                { no: 23, title: 'Ar-Rafi', desc: 'Maha Meninggikan', arabic: 'الرَّافِعُ' },
                { no: 24, title: 'Al-Muizz', desc: 'Maha Memuliakan', arabic: 'الْمُعِزُّ' },
                { no: 25, title: 'Al-Mudzill', desc: 'Maha Menghinakan', arabic: 'الْمُذِلُّ' },
                { no: 26, title: 'As-Sami', desc: 'Maha Mendengar', arabic: 'السَّمِيعُ' },
                { no: 27, title: 'Al-Bashir', desc: 'Maha Melihat', arabic: 'الْبَصِيرُ' },
                { no: 28, title: 'Al-Hakam', desc: 'Maha Menetapkan Hukum', arabic: 'الْحَكَمُ' },
                { no: 29, title: 'Al-Adl', desc: 'Maha Adil', arabic: 'الْعَدْلُ' },
                { no: 30, title: 'Al-Lathif', desc: 'Maha Lembut', arabic: 'اللَّطِيفُ' },
                { no: 31, title: 'Al-Khabir', desc: 'Maha Mengenal', arabic: 'الْخَبِيرُ' },
                { no: 32, title: 'Al-Halim', desc: 'Maha Penyantun', arabic: 'الْحَلِيمُ' },
                { no: 33, title: 'Al-Azhim', desc: 'Maha Agung', arabic: 'الْعَظِيمُ' },
                { no: 34, title: 'Al-Ghafur', desc: 'Maha Pengampun', arabic: 'الْغَفُورُ' },
                { no: 35, title: 'Asy-Syakur', desc: 'Maha Pembalas Budi', arabic: 'الشَّكُورُ' },
                { no: 36, title: 'Al-Aliyy', desc: 'Maha Tinggi', arabic: 'الْعَلِيُّ' },
                { no: 37, title: 'Al-Kabir', desc: 'Maha Besar', arabic: 'الْكَبِيرُ' },
                { no: 38, title: 'Al-Hafizh', desc: 'Maha Memelihara', arabic: 'الْحَفِيظُ' },
                { no: 39, title: 'Al-Muqit', desc: 'Maha Memberi Kecukupan', arabic: 'الْمُقِيتُ' },
                { no: 40, title: 'Al-Hasib', desc: 'Maha Membuat Perhitungan', arabic: 'الْحَسِيبُ' },
                { no: 41, title: 'Al-Jalil', desc: 'Maha Mulia', arabic: 'الْجَلِيلُ' },
                { no: 42, title: 'Al-Karim', desc: 'Maha Pemurah', arabic: 'الْكَرِيمُ' },
                { no: 43, title: 'Ar-Raqib', desc: 'Maha Mengawasi', arabic: 'الرَّقِيبُ' },
                { no: 44, title: 'Al-Mujib', desc: 'Maha Mengabulkan', arabic: 'الْمُجِيبُ' },
                { no: 45, title: 'Al-Wasi', desc: 'Maha Luas', arabic: 'الْوَاسِعُ' },
                { no: 46, title: 'Al-Hakim', desc: 'Maha Bijaksana', arabic: 'الْحَكِيمُ' },
                { no: 47, title: 'Al-Wadud', desc: 'Maha Mengasihi', arabic: 'الْوَدُودُ' },
                { no: 48, title: 'Al-Majid', desc: 'Maha Mulia', arabic: 'الْمَجِيدُ' },
                { no: 49, title: 'Al-Baits', desc: 'Maha Membangkitkan', arabic: 'الْبَاعِثُ' },
                { no: 50, title: 'Asy-Syahid', desc: 'Maha Menyaksikan', arabic: 'الشَّهِيدُ' },
                { no: 51, title: 'Al-Haqq', desc: 'Maha Benar', arabic: 'الْحَقُّ' },
                { no: 52, title: 'Al-Wakil', desc: 'Maha Memelihara', arabic: 'الْوَكِيلُ' },
                { no: 53, title: 'Al-Qawiyy', desc: 'Maha Kuat', arabic: 'الْقَوِيُّ' },
                { no: 54, title: 'Al-Matin', desc: 'Maha Kokoh', arabic: 'الْمَتِينُ' },
                { no: 55, title: 'Al-Waliyy', desc: 'Maha Melindungi', arabic: 'الْوَلِيُّ' },
                { no: 56, title: 'Al-Hamid', desc: 'Maha Terpuji', arabic: 'الْحَمِيدُ' },
                { no: 57, title: 'Al-Muhshi', desc: 'Maha Mengkalkulasi', arabic: 'الْمُحْصِي' },
                { no: 58, title: 'Al-Mubdi', desc: 'Maha Memulai', arabic: 'الْمُبْدِئُ' },
                { no: 59, title: 'Al-Muid', desc: 'Maha Mengembalikan Kehidupan', arabic: 'الْمُعِيدُ' },
                { no: 60, title: 'Al-Muhyi', desc: 'Maha Menghidupkan', arabic: 'الْمُحْيِي' },
                { no: 61, title: 'Al-Mumit', desc: 'Maha Mematikan', arabic: 'الْمُمِيتُ' },
                { no: 62, title: 'Al-Hayyu', desc: 'Maha Hidup', arabic: 'الْحَيُّ' },
                { no: 63, title: 'Al-Qayyum', desc: 'Maha Mandiri', arabic: 'الْقَيُّومُ' },
                { no: 64, title: 'Al-Wajid', desc: 'Maha Penemu', arabic: 'الْوَاجِدُ' },
                { no: 65, title: 'Al-Majid', desc: 'Maha Mulia', arabic: 'الْمَاجِدُ' },
                { no: 66, title: 'Al-Wahid', desc: 'Maha Tunggal', arabic: 'الْوَاحِدُ' },
                { no: 67, title: 'Al-Ahad', desc: 'Maha Esa', arabic: 'الْأَحَدُ' },
                { no: 68, title: 'As-Samad', desc: 'Maha Dibutuhkan', arabic: 'الصَّمَدُ' },
                { no: 69, title: 'Al-Qadir', desc: 'Maha Menentukan', arabic: 'الْقَادِرُ' },
                { no: 70, title: 'Al-Muqtadir', desc: 'Maha Berkuasa', arabic: 'الْمُقْتَدِرُ' },
                { no: 71, title: 'Al-Muqaddim', desc: 'Maha Mendahulukan', arabic: 'الْمُقَدِّمُ' },
                { no: 72, title: 'Al-Muakhkhir', desc: 'Maha Mengakhirkan', arabic: 'الْمُؤَخِّرُ' },
                { no: 73, title: 'Al-Awwal', desc: 'Maha Awal', arabic: 'الْأَوَّلُ' },
                { no: 74, title: 'Al-Akhir', desc: 'Maha Akhir', arabic: 'الْآخِرُ' },
                { no: 75, title: 'Adh-Dhahir', desc: 'Maha Nyata', arabic: 'الظَّاهِرُ' },
                { no: 76, title: 'Al-Bathin', desc: 'Maha Ghaib', arabic: 'الْبَاطِنُ' },
                { no: 77, title: 'Al-Wali', desc: 'Maha Memerintah', arabic: 'الْوَالِي' },
                { no: 78, title: 'Al-Mutaali', desc: 'Maha Tinggi', arabic: 'الْمُتَعَالِي' },
                { no: 79, title: 'Al-Barr', desc: 'Maha Penderma / Baik', arabic: 'الْبَرُّ' },
                { no: 80, title: 'At-Tawwab', desc: 'Maha Penerima Tobat', arabic: 'التَّوَّابُ' },
                { no: 81, title: 'Al-Muntaqim', desc: 'Maha Pemberi Balasan', arabic: 'الْمُنْتَقِمُ' },
                { no: 82, title: 'Al-Afuww', desc: 'Maha Pemaaf', arabic: 'الْعَفُوُّ' },
                { no: 83, title: 'Ar-Rauf', desc: 'Maha Pengasuh', arabic: 'الرَّؤُوفُ' },
                { no: 84, title: 'Malikul-Mulk', desc: 'Pemilik Kebesaran', arabic: 'مَالِكُ الْمُلْكِ' },
                { no: 85, title: 'Dzul-Jalali wal-Ikram', desc: 'Pemilik Keagungan & Kemuliaan', arabic: 'ذُو الْجَلَالِ وَالْإِكْرَامِ' },
                { no: 86, title: 'Al-Muqsit', desc: 'Maha Pemberi Keadilan', arabic: 'الْمُقْسِطُ' },
                { no: 87, title: 'Al-Jami', desc: 'Maha Mengumpulkan', arabic: 'الْجَامِعُ' },
                { no: 88, title: 'Al-Ghaniyy', desc: 'Maha Kaya', arabic: 'الْغَنِيُّ' },
                { no: 89, title: 'Al-Mughni', desc: 'Maha Pemberi Kekayaan', arabic: 'الْمُغْنِي' },
                { no: 90, title: 'Al-Mani', desc: 'Maha Mencegah', arabic: 'الْمَانِعُ' },
                { no: 91, title: 'Ad-Dharr', desc: 'Maha Penimpa Kemudharatan', arabic: 'الضَّارُّ' },
                { no: 92, title: 'An-Nafi', desc: 'Maha Pemberi Manfaat', arabic: 'النَّافِعُ' },
                { no: 93, title: 'An-Nur', desc: 'Maha Bercahaya', arabic: 'النُّورُ' },
                { no: 94, title: 'Al-Hadi', desc: 'Maha Pemberi Petunjuk', arabic: 'الْهَادِي' },
                { no: 95, title: 'Al-Badi', desc: 'Maha Pencipta Indah', arabic: 'الْبَدِيعُ' },
                { no: 96, title: 'Al-Baqi', desc: 'Maha Kekal', arabic: 'الْبَاقِي' },
                { no: 97, title: 'Al-Warits', desc: 'Maha Pewaris', arabic: 'الْوَارِثُ' },
                { no: 98, title: 'Ar-Rasyid', desc: 'Maha Pandai', arabic: 'الرَّشِيدُ' },
                { no: 99, title: 'Ash-Shabur', desc: 'Maha Sabar', arabic: 'الصَّبُورُ' }
            ]
        }
    };

    window.openWawasanDetail = function(id) {
        const data = contentData[id];
        if(!data) return;

        document.getElementById('wawasan-detail-title').textContent = data.title;
        
        let html = '';
        if(data.type === 'grid') {
            html = `<div class="grid grid-cols-2 gap-4">` + data.items.map(item => `
                <div class="bg-white p-5 pt-8 rounded-2xl  border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:border-emerald-200 transition-all">
                    <span class="absolute top-2 right-3 text-[10px] text-emerald-600/30 font-bold">#${item.no}</span>
                    <h3 class="font-quran text-3xl mb-3 text-gray-800 group-hover:scale-110 transition-transform">${item.arabic}</h3>
                    <h4 class="font-bold text-gray-800 text-sm">${item.title}</h4>
                    <p class="text-[10px] text-gray-400 mt-1.5 leading-tight">${item.desc}</p>
                </div>
            `).join('') + `</div>`;
        } else if(data.type === 'list_nabi') {
            html = data.items.map(item => `
                <button onclick="openNabiHistory(${JSON.stringify(item).replace(/"/g, '&quot;')})" class="w-full bg-white p-5 rounded-2xl  border border-gray-100 flex gap-4 items-center mb-4 text-left group hover:border-emerald-200 transition-all">
                    <div class="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 font-bold shrink-0 group-hover:bg-amber-100">
                        ${item.no}
                    </div>
                    <div class="flex-1">
                        <h3 class="font-bold text-gray-800 text-base">${item.title}</h3>
                        <p class="text-xs text-gray-400 mt-0.5">${item.desc}</p>
                    </div>
                    <i data-lucide="chevron-right" class="w-5 h-5 text-gray-300 group-hover:text-amber-500"></i>
                </button>
            `).join('');
        } else {
            html = data.items.map(item => `
                <div class="bg-white p-5 rounded-2xl  border border-gray-100 flex gap-4 items-start mb-4 text-justify">
                    <div class="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                        ${item.no}
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-800 text-base">${item.title}</h3>
                        <p class="text-xs text-gray-500 mt-1 leading-relaxed">${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        document.getElementById('wawasan-detail-content').innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        const screen = document.getElementById('keislaman-detail-screen');
        screen.classList.remove('hidden');
        void screen.offsetWidth;
        screen.classList.remove('translate-x-full');
        document.getElementById('wawasan-detail-content').scrollTop = 0;

        if (typeof App !== 'undefined' && App.pushModal) {
            App.pushModal(window.closeWawasanDetail);
        }
    };

    window.openNabiHistory = function(item) {
        document.getElementById('nabi-history-title').textContent = item.title;
        document.getElementById('nabi-history-content').innerHTML = `
            <div class="bg-amber-50 p-6 rounded-3xl mb-8 border border-amber-100 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center  mb-4 border-2 border-amber-200">
                    <i data-lucide="user" class="w-10 h-10 text-amber-500"></i>
                </div>
                <h2 class="text-2xl font-bold text-gray-800 mb-1">${item.title}</h2>
                <p class="text-amber-700 text-sm font-medium italic">${item.desc}</p>
            </div>

            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <i data-lucide="book-open" class="w-4 h-4"></i>
                        </div>
                        <h3 class="font-bold text-gray-800">Sejarah & Kisah</h3>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed text-justify bg-white p-5 rounded-2xl border border-gray-100 ">
                        ${item.history}
                    </p>
                </section>

                <section>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <i data-lucide="sparkles" class="w-4 h-4"></i>
                        </div>
                        <h3 class="font-bold text-gray-800">Mukjizat</h3>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed text-justify bg-white p-5 rounded-2xl border border-gray-100 ">
                        ${item.miracles}
                    </p>
                </section>

                <section>
                    <div class="flex items-center gap-3 mb-4 border-t border-gray-100 pt-6">
                        <div class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                            <i data-lucide="link" class="w-4 h-4"></i>
                        </div>
                        <h3 class="font-bold text-gray-800">Sumber Referensi</h3>
                    </div>
                    <div class="text-xs text-gray-400 bg-gray-50 p-4 rounded-xl italic">
                        Sumber: ${item.source}
                    </div>
                </section>
            </div>
        `;

        if (typeof lucide !== 'undefined') lucide.createIcons();

        const screen = document.getElementById('nabi-history-screen');
        screen.classList.remove('hidden');
        void screen.offsetWidth;
        screen.classList.remove('translate-x-full');
        document.getElementById('nabi-history-content').scrollTop = 0;

        if (typeof App !== 'undefined' && App.pushModal) {
            App.pushModal(window.closeNabiHistory);
        }
    };

    window.closeNabiHistory = function() {
        const screen = document.getElementById('nabi-history-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => {
            screen.classList.add('hidden');
        }, 300);
    };

    window.closeWawasanDetail = function() {
        const screen = document.getElementById('keislaman-detail-screen');
        screen.classList.add('translate-x-full');
        setTimeout(() => {
            screen.classList.add('hidden');
        }, 300);
    };

    if (typeof lucide !== 'undefined') lucide.createIcons();
};
