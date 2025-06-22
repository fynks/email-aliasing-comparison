// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.benefit-card, .provider-card, .comparison-card, .decision-card').forEach(el => {
        observer.observe(el);
    });

    // Table responsive scroll indicator
    function addScrollIndicators() {
        const tables = document.querySelectorAll('.table-responsive');
        tables.forEach(tableContainer => {
            const table = tableContainer.querySelector('table');
            if (table.offsetWidth > tableContainer.offsetWidth) {
                tableContainer.classList.add('scrollable');
                
                // Add scroll indicator
                if (!tableContainer.querySelector('.scroll-indicator')) {
                    const indicator = document.createElement('div');
                    indicator.className = 'scroll-indicator';
                    indicator.innerHTML = '← Scroll to see more →';
                    tableContainer.appendChild(indicator);
                }
            }
        });
    }

    // Check for scroll indicators on load and resize
    addScrollIndicators();
    window.addEventListener('resize', addScrollIndicators);

    // Enhanced table hover effects
    document.querySelectorAll('.comparison-table tbody tr, .pricing-table tbody tr, .feature-table tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Copy to clipboard functionality for links
    function addCopyToClipboard() {
        const resourceLinks = document.querySelectorAll('.resource-links a, .footer-links a');
        resourceLinks.forEach(link => {
            link.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                navigator.clipboard.writeText(this.href).then(() => {
                    showToast('Link copied to clipboard!');
                });
            });
        });
    }

    // Toast notification function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #2563eb;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            z-index: 10000;
            animation: toastSlideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastSlideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Add toast animations to CSS
    const toastCSS = `
        @keyframes toastSlideIn {
            from { opacity: 0; transform: translateX(-50%) translateY(100%); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes toastSlideOut {
            from { opacity: 1; transform: translateX(-50%) translateY(0); }
            to { opacity: 0; transform: translateX(-50%) translateY(100%); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = toastCSS;
    document.head.appendChild(styleSheet);

    addCopyToClipboard();

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Alt + M to toggle mobile menu
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            navToggle.click();
        }
        
        // Alt + T to go to top
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            backToTopButton.click();
        }
    });

    // Search functionality (if search input exists)
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(searchTerm) || searchTerm === '') {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }

    // Performance optimization: Lazy load images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Add loading state to external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            this.textContent += ' (Loading...)';
        });
    });

    // Print functionality
    function addPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '🖨️ Print Guide';
        printButton.className = 'btn btn-outline';
        printButton.style.cssText = 'position: fixed; top: 100px; right: 20px; z-index: 999; display: none;';
        printButton.id = 'printButton';
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
        
        // Show print button on larger screens
        if (window.innerWidth > 768) {
            printButton.style.display = 'block';
        }
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                printButton.style.display = 'block';
            } else {
                printButton.style.display = 'none';
            }
        });
    }

    addPrintButton();

    // Analytics events (if analytics is implemented)
    function trackAnalytics(action, category, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    }

    // Track important interactions
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            trackAnalytics('click', 'CTA', this.textContent.trim());
        });
    });

    document.querySelectorAll('.provider-card').forEach(card => {
        card.addEventListener('click', function() {
            const provider = this.querySelector('h4').textContent;
            trackAnalytics('view', 'Provider', provider);
        });
    });

    // Page visibility API for performance
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Pause any ongoing animations when tab is not visible
            document.querySelectorAll('.fade-in-up').forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        } else {
            // Resume animations when tab becomes visible
            document.querySelectorAll('.fade-in-up').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });

    // Service Worker registration for offline functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }

    // Dark mode toggle (optional feature)
    function initializeDarkMode() {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.innerHTML = '🌙';
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.style.cssText = `
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            background: #2563eb;
            border: none;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 999;
            font-size: 1.5rem;
            display: none;
        `;
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        document.body.appendChild(darkModeToggle);
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        }
        
        // Show dark mode toggle on larger screens
        if (window.innerWidth > 768) {
            darkModeToggle.style.display = 'block';
        }
    }

    // Initialize dark mode (uncomment if needed)
    // initializeDarkMode();

    console.log('Awesome Email Aliasing website loaded successfully! 🚀');
});
