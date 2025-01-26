// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Modal Logic
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close");

contactBtn.onclick = function() {
    contactModal.style.display = "block";
}

closeBtn.onclick = function() {
    contactModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

// Particles effect
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        move: { speed: 2 },
        line_linked: { enable: true }
    }
});
