console.log("Cinema Frontend working!");

// Example: alert when clicking "Buy tickets"
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Redirect to Billetlugen for ticket purchase");
    });
});

document.addEventListener("DOMContentLoaded", async function () {
    const programmeContainer = document.getElementById("programme-container");

    // Fetch movies from Sanity CMS
    async function fetchProgramme() {
        try {
            const response = await fetch("https://your-sanity-endpoint/query");  // Replace with Sanity API URL
            const data = await response.json();

            programmeContainer.innerHTML = "";  // Clear previous content

            data.movies.forEach(movie => {
                const movieHTML = `
                    <div class="vhs-container bg-black rounded-lg shadow-lg p-4">
                        <img src="${movie.poster}" alt="${movie.title}" class="w-full rounded-lg vhs-glitch">
                        <p class="mt-2 text-lg font-bold">${movie.title} - ${movie.time}</p>
                        <p>${movie.description}</p>
                        <a href="${movie.ticketLink}" target="_blank" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Buy Tickets 🎟️</a>
                    </div>
                `;
                programmeContainer.innerHTML += movieHTML;
            });
        } catch (error) {
            console.error("Error fetching programme:", error);
        }
    }

    fetchProgramme();
});


