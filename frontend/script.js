import { sanity } from "./sanityClient.js";  //  Import the Sanity client
import imageUrlBuilder from "../node_modules/@sanity/image-url";


const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return source ? builder.image(source).url() : "./pictures/default-movie.jpg";
}

console.log("Cinema Frontend working!");

// Alert for clicking "Buy Tickets"
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href")?.includes("billetlugen")) {
      e.preventDefault();
      alert("Redirecting to Billetto for ticket purchase");
      window.open(link.href, "_blank");
    }
  });
});

document.addEventListener("DOMContentLoaded", async function () {
  const programmeContainer = document.getElementById("programme-container");

  try {
    console.log("✅ Movies fetched from Sanity:", movies);
    const movies = await sanity.fetch(
      `*[_type == "movie"] | order(date asc) {
        title, 
        date, 
        poster, 
        ticketLink, 
        description
      }`
    );

    console.log("✅ Movies fetched from Sanity:", movies);

    programmeContainer.innerHTML = ""; //  Clear previous content

    if (!movies.length) {
      console.warn("⚠ No movies found in Sanity dataset.");
      programmeContainer.innerHTML = "<p>No movies scheduled.</p>";
      return;
    }

    movies.forEach((movie) => {
      const imageUrl = movie.poster ? urlFor(movie.poster) : "./frontend/pictures/default-movie.jpg"; // 🛠 Fallback image

      console.log(`🎬 Adding movie: ${movie.title} - Poster URL: ${imageUrl}`);

      const movieElement = document.createElement("div");
      movieElement.className = "vhs-container bg-black rounded-lg shadow-lg p-4";

      movieElement.innerHTML = `
        <img src="${imageUrl}" alt="${movie.title}" class="w-full rounded-lg vhs-glitch">
        <p class="mt-2 text-lg font-bold">${movie.title} - ${
        movie.date ? new Date(movie.date).toLocaleString() : "Date TBA"
      }</p>
        <p>${movie.description || "No description available."}</p>
        <a href="${
          movie.ticketLink || "#"
        }" target="_blank" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Buy Tickets 🎟️</a>
      `;

      programmeContainer.appendChild(movieElement);
    });

  } catch (error) {
    console.error("Error fetching programme:", error);
  }
});
