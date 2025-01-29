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

contactBtn.onclick = function () {
    contactModal.style.display = "block";
};

// Ensure all modal close buttons work
document.querySelectorAll('.modal .close').forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.style.display = "none";
        }
    });
});

// Initialize particles.js with refined effect
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#5cb85c" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#5cb85c",
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    },
    retina_detect: true
});

// Filter Portfolio Items
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Open Certification Modal
function openCertModal(certId) {
    document.getElementById(certId).style.display = "block";
}

// Close Certification Modal
function closeModal(certId) {
    document.getElementById(certId).style.display = "none";
}

// Open General Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close General Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close Modals on Outside Click
window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Sort Certifications from Most Recent to Oldest
document.addEventListener("DOMContentLoaded", function () {
    const certContainer = document.querySelector('.certs-container');
    const certItems = Array.from(certContainer.children);

    certItems.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateB - dateA; // Sort descending (most recent first)
    });

    certContainer.innerHTML = ""; // Clear container
    certItems.forEach(item => certContainer.appendChild(item)); // Append sorted items
});
