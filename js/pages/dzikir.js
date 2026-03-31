export const render = () => `
<div class="px-6 py-20 text-center bg-white min-h-screen">
    <div class="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6  border border-emerald-100">
        <i data-lucide="info" class="w-10 h-10"></i>
    </div>
    <h1 class="text-2xl font-bold text-gray-800 mb-3">Menu Dipindahkan</h1>
    <p class="text-gray-500 mb-8 w-full mx-auto">Menu Dzikir kini telah digabungkan ke dalam <strong>Menu Doa</strong> agar lebih mudah diakses bersama rangkaian doa lainnya.</p>
    <a href="doa" class="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-2xl font-bold   hover:bg-emerald-700 transition-all active:scale-95">
        Buka Menu Doa
        <i data-lucide="arrow-right" class="w-5 h-5"></i>
    </a>
</div>
`;

export const init = () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
};
