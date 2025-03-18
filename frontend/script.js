document.addEventListener("DOMContentLoaded", async function () {
  console.log("🎬 Cinema Frontend Running with Strapi!");

  const programmeContainer = document.getElementById("programme-container");

  try {
    // Fetch movies from Strapi API
    const response = await fetch("http://localhost:1337/api/movies?populate=*");
    const data = await response.json();
    const movies = data.data; // Extract the movie array

    programmeContainer.innerHTML = ""; // Clear old content

    if (!movies || !movies.length) {
      console.warn("⚠ No movies found in Strapi dataset.");
      programmeContainer.innerHTML = "<p>No movies scheduled.</p>";
      return;
    }

    movies.forEach((movie) => {
      console.log("🎞️ Movie Object:", movie); // ✅ Debugging log

      const title = movie.Title || "Untitled Movie";
      const date = movie.Date
        ? new Date(movie.Date).toLocaleString()
        : "Date TBA";
      const description = movie.Description?.[0]?.children?.[0]?.text || "No description available.";
      const ticketLink = movie.TicketLink || "#";

      // Fix the image URL structure
      const imageUrl = movie.Poster?.url
        ? `http://localhost:1337${movie.Poster.url}`
        : "./pictures/default-movie.jpg";

      console.log(`🎬 Adding movie: ${title} - Poster URL: ${imageUrl}`);

      // Create movie element
      const movieElement = document.createElement("div");
      movieElement.className = "vhs-container bg-black rounded-lg shadow-lg p-4";

      movieElement.innerHTML = `
        <img src="${imageUrl}" alt="${title}" class="w-full rounded-lg vhs-glitch">
        <p class="mt-2 text-lg font-bold">${title} - ${date}</p>
        <p>${description}</p>
        <a href="${ticketLink}" target="_blank" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Buy Tickets 🎟️</a>
      `;

      programmeContainer.appendChild(movieElement);
    });

  } catch (error) {
    console.error("❌ Error fetching programme:", error);
  }
});
