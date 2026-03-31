window.App = {
    cacheVersion: new Date().getTime(),
    contentArea: null,
    homeContent: null,
    modalStack: [], // Stack to track open modals/sub-screens
    
    init() {
        this.contentArea = document.getElementById('app-content');
        if (!this.contentArea) {
            console.error("App content area not found!");
            return;
        }
        this.homeContent = this.contentArea.innerHTML;

        // Push initial state so first back doesn't close app
        if (window.history.state === null) {
            let initialPath = window.location.pathname.split('/').pop() || 'index';
            if (initialPath.endsWith('.html')) initialPath = initialPath.replace('.html', '');
            window.history.replaceState({ path: initialPath }, '', initialPath === 'index' ? './' : initialPath);
        }

        // Handle hardware back button for Android
        document.addEventListener('backbutton', (e) => {
            e.preventDefault();
            this.handleBack();
        }, false);

        // Intercept all link clicks
        document.body.addEventListener('click', e => {
            const link = e.target.closest('a');
            if (!link) return;
            
            let href = link.getAttribute('href');
            // If it's an external link or anchor, ignore
            if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;

            e.preventDefault();
            
            // Clean up href for navigation
            if (href.endsWith('.html')) href = href.replace('.html', '');
            if (href === 'index' || href === './') href = '';

            this.navigate(href || '');
        });

        // Handle back/forward buttons
        window.addEventListener('popstate', (e) => {
            console.log("Popstate triggered", e.state);
            
            // First check if a modal was open and needs to be closed
            if (this.modalStack.length > 0) {
                const closeFn = this.modalStack.pop();
                if (typeof closeFn === 'function') {
                    closeFn(false); // Modal just closed via history.back()
                }
                // Don't navigate to a new page, just closing the modal was enough
                return;
            }

            // Normal page back button
            // If e.state is null, we might be going back to the very first entry
            let path = e.state?.path;
            if (path === undefined) {
                 // Try to guess from URL
                 path = window.location.pathname.split('/').pop() || 'index';
            }
            
            if (path.endsWith('.html')) path = path.replace('.html', '');
            this.loadPage(path, false);
        });

        // Initialize icons
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        // Initial setup for current page
        let initialPath = window.location.pathname.split('/').pop() || 'index';
        if (initialPath.endsWith('.html')) initialPath = initialPath.replace('.html', '');
        this.updateActiveNav(initialPath);
        
        // If the starting URL is not index, load its module directly (SPA initial load logic)
        let pageName = initialPath.split('?')[0];
        if (pageName && pageName !== 'index') {
            this.loadPage(initialPath + window.location.search, false);
        }
    },

    async navigate(path) {
        let cleanPath = path;
        if (cleanPath.endsWith('.html')) cleanPath = cleanPath.replace('.html', '');
        
        const currentPath = window.location.pathname.split('/').pop() || 'index';
        if (cleanPath === currentPath || (cleanPath === '' && currentPath === 'index')) return; 

        const pushPath = cleanPath === '' ? './' : cleanPath;
        window.history.pushState({ path: cleanPath }, '', pushPath);
        await this.loadPage(cleanPath, true);
    },

    async loadPage(path, animate = true) {
        if (animate) {
            this.contentArea.style.opacity = '0';
            this.contentArea.style.transform = 'translateX(-20px)';
            this.contentArea.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            await new Promise(r => setTimeout(r, 300));
        }

        try {
            const [basePath, queryString] = path.split('?');
            let moduleName = basePath.split('/').pop().replace('.html', '');
            
            if (!moduleName || moduleName === 'index' || moduleName === '') {
                this.contentArea.innerHTML = this.homeContent;
                this.updateActiveNav('index');
                if (window.initHomeScripts) window.initHomeScripts();
            } else {
                const baseDir = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
                // Ensure import script path is correct
                const importUrl = `${window.location.origin}${baseDir}js/pages/${moduleName}.js?v=${this.cacheVersion}`;
                const pageModule = await import(importUrl);
                this.contentArea.innerHTML = pageModule.render();
                if (pageModule.init) {
                    try { pageModule.init(); } catch (initErr) { console.error("Error initializing module", initErr); }
                }
            }
            
            // Ensure icons are created for new content
            if (typeof lucide !== 'undefined') lucide.createIcons();
            
            // Update active nav state
            this.updateActiveNav(path);
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (err) {
            console.error(err);
            this.contentArea.innerHTML = `<div class="text-center py-20 text-gray-500">
                <i data-lucide="info" class="w-10 h-10 mx-auto mb-4 text-gray-400"></i>
                <p>Gagal memuat halaman: ${path}</p>
                <div class="text-xs text-red-400 mt-2 p-2 bg-red-50 text-left overflow-auto max-h-32">${err.stack || err.message || err}</div>
                <button onclick="App.loadPage('${path}')" class="mt-4 px-4 py-2 bg-primary text-white text-sm rounded-lg font-bold">Coba Lagi</button>
            </div>`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }

        if (animate) {
            this.contentArea.style.transform = 'translateX(20px)';
            requestAnimationFrame(() => {
                setTimeout(() => {
                    this.contentArea.style.opacity = '1';
                    this.contentArea.style.transform = 'translateX(0)';
                }, 10);
                
                setTimeout(() => {
                    this.contentArea.style.transform = 'none';
                    this.contentArea.style.transition = 'none';
                }, 310);
            });
        }
    },
    
    updateActiveNav(currentPath) {
        document.querySelectorAll('.glass-nav a').forEach(link => {
            const href = link.getAttribute('href');
            
            // Reset styles
            const icon = link.querySelector('i') || link.querySelector('svg');
            const tooltip = link.querySelector('span');
            
            // Check if active
            const isActive = currentPath.includes(href) || (currentPath === '' && href === './');
            
            if (isActive) {
                if (link.parentElement.classList.contains('group-center')) {
                    // Center floating button handling if needed
                } else {
                    if (icon) {
                        icon.classList.remove('text-gray-400');
                        icon.classList.add('text-primary', 'stroke-[2.5]', 'fill-primary/10');
                    }
                    if (tooltip) {
                        tooltip.classList.remove('text-gray-400', 'font-medium');
                        tooltip.classList.add('text-primary', 'font-bold');
                    }
                }
            } else {
                if (!link.parentElement.classList.contains('group-center')) {
                    if (icon) {
                        icon.classList.remove('text-primary', 'stroke-[2.5]', 'fill-primary/10');
                        icon.classList.add('text-gray-400', 'stroke-[2]');
                    }
                    if (tooltip) {
                        tooltip.classList.remove('text-primary', 'font-bold');
                        tooltip.classList.add('text-gray-400', 'font-medium');
                    }
                }
            }
        });
    },

    // Global helper for opening sub-screens/modals with back-button support
    pushModal(closeFn) {
        this.modalStack.push(closeFn);
        // Push a state so the back button can be intercepted
        window.history.pushState({ modal: true }, '');
    },

    // Helper to remove from stack when closed manually (via X button)
    popModal() {
        if (this.modalStack.length > 0) {
            window.history.back(); // This will trigger popstate which calls the close function
        }
    },

    handleBack() {
        if (this.modalStack.length > 0) {
            window.history.back();
            return;
        }

        const currentPath = window.location.pathname.split('/').pop() || 'index';
        if (currentPath === 'index' || currentPath === '' || currentPath === 'index.html') {
            // On home page, maybe show toast or just ignore to prevent app close
            console.log("On home page, back button ignored");
            if (this.showToast) this.showToast("Tekan sekali lagi untuk keluar"); // Optional
            // For Capacitor/Cordova, we might want to actually let it exit if they press again
            // But usually keeping them in the app is preferred by users like this
            return;
        }

        // Just trigger standard history back
        window.history.back();
    },

    showToast(message) {
        let toast = document.getElementById('global-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'global-toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
