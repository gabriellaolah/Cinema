console.log("Cinema Frontend working!");

// Example: alert when clicking "Buy tickets"
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Redirect to Billetlugen for ticket purchase");
    });
});

    /* Auto-highlight today's movie on page load
    updateCarousel();

    setInterval(function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 8000); //  Auto-slide every 5 seconds*/

