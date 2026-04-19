document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor interaction on links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2.5)';
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });

    // Scroll reveal logic
    const revealElements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Copy to clipboard
    const copyBtn = document.querySelector('.copy-btn');
    const ca = document.querySelector('.ca-address');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const temp = document.createElement('textarea');
            temp.value = ca.innerText;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
            
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'COPIED!';
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        });
    }

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg img');
        if (heroBg) {
            heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.5}px)`;
        }
    });

    // Glitch effect randomization (Optional)
    const glitchText = document.querySelector('.glitchText');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.textShadow = Math.random() > 0.95 ? 
                `${Math.random()*10}px 0 rgba(0, 242, 255, 0.7)` : 'none';
        }, 100);
    }
});
