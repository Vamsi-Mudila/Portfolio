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

// Interactive background effect
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#5cb85c';
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, 20, 0, Math.PI * 2);
    ctx.fill();
});
