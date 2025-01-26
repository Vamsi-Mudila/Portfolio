// Load required Vanta.js libraries
const script1 = document.createElement('script');
script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
document.head.appendChild(script1);

const script2 = document.createElement('script');
script2.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.birds.min.js";
document.head.appendChild(script2);

script2.onload = function () {
    VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff, 
        color1: 0xff0000, 
        color2: 0x1d1fff,
        birdSize: 1.00,
        wingSpan: 30,
        speedLimit: 5,
        separation: 20,
        alignment: 20,
        cohesion: 20
    });
};
