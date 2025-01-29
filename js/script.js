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

window.onclick = function (event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
};


// Skill Filter Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.skill-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'inline-block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// Ensure all modal close buttons are functional
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


// Open Certification Modal with Correct PDF & Title
function openCertModal(certId, certTitle) {
    const certModal = document.getElementById("certModal");
    const certFrame = document.getElementById("certFrame");
    const certTitleElement = document.getElementById("certTitle");

    // Mapping Certificate IDs to Files
    const certMap = {
        cert1: "assets/certs/AMD.pdf",
        cert2: "assets/certs/DWG.pdf",
        cert3: "assets/certs/FDE.pdf",
        cert4: "assets/certs/PDE.pdf",
        cert5: "assets/certs/PDS.pdf",
        cert6: "assets/certs/WWE.pdf",
        cert7: "assets/certs/PFE.pdf"
    };

    certFrame.src = certMap[certId];   // Load the correct certificate
    certTitleElement.textContent = certTitle; // Display the certificate title
    certModal.style.display = "flex"; // Show modal
}

// Close Certification Modal
function closeCertModal() {
    document.getElementById("certModal").style.display = "none";
    document.getElementById("certFrame").src = ""; // Reset PDF
}

// Close Modal on Clicking Outside
window.onclick = function(event) {
    const certModal = document.getElementById("certModal");
    if (event.target === certModal) {
        closeCertModal();
    }
};


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

// Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

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

// Close Modal on Outside Click
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
