// script.js

// 1. Animasi Scroll (Animate On Scroll - AOS Manual)
document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua elemen yang memiliki class 'animate-on-scroll'
    const elements = document.querySelectorAll('.animate-on-scroll');

    // Buat Observer untuk memantau apakah elemen sudah terlihat di viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ketika elemen masuk viewport
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Hentikan pemantauan setelah animasi selesai
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // threshold: 0.1 artinya animasi akan mulai ketika 10% elemen terlihat
        threshold: 0.1
    });

    // Mulai memantau setiap elemen
    elements.forEach(element => {
        observer.observe(element);
    });

    // 2. Efek Scroll Smoothing (Opsional, sudah ada di CSS body: scroll-behavior)
    // 3. Efek Navigasi Transparan (Jika perlu)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Ubah warna latar belakang header saat di-scroll
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    });

});
