// Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    
    document.querySelectorAll(`[data-lang="${currentLang}"]`).forEach(el => el.classList.add('hidden'));
    document.querySelectorAll(`[data-lang="${newLang}"]`).forEach(el => el.classList.remove('hidden'));
    
    document.documentElement.lang = newLang;
    document.getElementById('langToggle').textContent = newLang.toUpperCase();
});

// Phone Number Formatting
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    const number = link.getAttribute('href').replace('tel:', '');
    const formatted = number.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    link.textContent = formatted;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});