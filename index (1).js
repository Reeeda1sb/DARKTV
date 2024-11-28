window.onload = function () {
    // Show the popup after 1 second
    setTimeout(() => {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
        popup.style.opacity = '1';
    }, 1000);
};

function closePopup() {
    const popup = document.getElementById('popup');
    // Fade out and then hide the popup
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Match the CSS transition duration
}

function subscribe() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    if (emailRegex.test(email)) {
        alert(`Thank you for subscribing, ${email}!`);
        closePopup();
    } else {
        alert('Please enter a valid email address.');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

window.addEventListener('scroll', () => {
    const button = document.getElementById('back-to-top');
    button.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});
