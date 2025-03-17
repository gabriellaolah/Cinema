import { createClient } from "https://esm.sh/@sanity/client";
import imageUrlBuilder from "../node_modules/@sanity/image-url/lib/index.js";


const sanity = createClient({
  projectId: "4ggeo8s8",  // ✅ Your actual Sanity project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-25",
});

export async function fetchMovies() {
  try {
    const movies = await sanity.fetch('*[_type == "movie"] | order(date asc) {title, date}');
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
const builder = imageUrlBuilder(sanity);

export function urlFor(source) {
  return builder.image(source).url();
}
