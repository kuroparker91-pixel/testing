// Mengatur posisi video secara melingkar (3D Carousel)
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel video");
    const totalItems = items.length;
    const radius = 250; // Jarak putar carousel

    items.forEach((item, index) => {
        const angle = (index / totalItems) * 360;
        item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
});