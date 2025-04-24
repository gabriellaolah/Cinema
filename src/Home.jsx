import React from 'react';

export default function Home() {
  return (
    <main className="bg-black text-white font-alt min-h-screen relative overflow-hidden z-10">

      {/* Background static + grain + flicker layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0 bg-[url('/public/images/paper-texture.jpg')] mix-blend-overlay opacity-10"
      />
      <div
        className="absolute inset-0 bg-[url('/static-lines.png')] mix-blend-overlay opacity-10 animate-flicker"
      />
      </div>

      {/* Fake Timestamp HUD */}
      <div className="absolute top-6 left-6 text-green-400 font-mono text-xs opacity-70 z-50">
        ▶ PLAY&nbsp;&nbsp;&nbsp;00:00:17&nbsp;&nbsp;&nbsp;SP
      </div>

      {/* Now Showing */}
      <section className="px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-800 border-b border-gray-700">
        <h2 className="text-5xl glitch text-center text-red-500 tracking-widest drop-shadow-[2px_2px_2px_#000] mb-4" data-text="Now Showing">
          Now Showing
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-base mt-2 tracking-wide glitch" data-text="A glitchy haven for cult cinema misfits.">
          A glitchy haven for cult cinema misfits.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-gray-900/90 border border-pink-500 shadow-[0_0_25px_#ff69b4aa] p-4 rounded-md transform hover:scale-[1.03] hover:rotate-[-1deg] transition duration-300 font-alt tracking-wide uppercase"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-400">Movie Title {num}</h3>
              <p className="text-sm text-gray-300">
                A mind-bending underground classic from the vaults of VHS.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-black border-t border-b border-gray-700">
  <h2 className="text-4xl font-bold text-white text-center mb-8 glitch" data-text="Cult Hall of Fame">
    Cult Hall of Fame
  </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    
    {/* Lebowski */}
    <div className="bg-gray-900 border border-yellow-300 p-4 rounded-md shadow-md hover:scale-[1.03] transition duration-300">
      <img src="/images/lebowski.jpeg" alt="The Big Lebowski" className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-sm font-bold uppercase tracking-wide text-yellow-300">🍻 The Big Lebowski Drink-Along</h3>
      <p className="text-xs text-gray-400 mt-1 italic">White Russians included.</p>
    </div>

    {/* The Room */}
    <div className="bg-gray-900 border border-pink-400 p-4 rounded-md shadow-md hover:scale-[1.03] transition duration-300">
      <img src="/images/room.webp" alt="The Room" className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-sm font-bold uppercase tracking-wide text-pink-400">🔊 The Room</h3>
      <p className="text-xs text-gray-400 mt-1 italic">Oh hi Mark!</p>
    </div>

    {/* Rocky Horror */}
    <div className="bg-gray-900 border border-red-400 p-4 rounded-md shadow-md hover:scale-[1.03] transition duration-300">
      <img src="/images/rocky.jpg" alt="Rocky Horror" className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-sm font-bold uppercase tracking-wide text-red-400"> Rocky Horror Picture Show</h3>
      <p className="text-xs text-gray-400 mt-1 italic">Sing-alongs & fishnets welcome.</p>
    </div>

    {/* Bad Movie Club */}
    <div className="bg-gray-900 border border-green-400 p-4 rounded-md shadow-md hover:scale-[1.03] transition duration-300">
      <img src="/images/bad.jpg" alt="Bad Movie Club" className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-sm font-bold uppercase tracking-wide text-green-400">📼 Bad Movie Club</h3>
      <p className="text-xs text-gray-400 mt-1 italic">It’s so bad... it’s perfect.</p>
    </div>

  </div>
</section>


      {/* Upcoming Events */}
      <section className="px-6 py-16 bg-black border-b border-gray-700">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-6 tracking-wider drop-shadow-[1px_1px_0_#000] glitch" data-text="Upcoming Events">
          Upcoming Events
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-300 font-alt text-sm tracking-wide">
          <p className="border-l-4 border-yellow-500 pl-4">📼 Bad Movie Club: <span className="text-white italic">Showgirls</span> — Apr 26</p>
          <p className="border-l-4 border-yellow-500 pl-4">🔊 <span className="text-white italic">The Room</span> — May 3</p>
          <p className="border-l-4 border-yellow-500 pl-4">🎬 Den Fantastiske Kultfilm Quiz — May 17</p>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 bg-gradient-to-b from-gray-800 to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 text-center mb-6 tracking-wide glitch" data-text="About Husets Biograf">
          About Husets Biograf
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-300 leading-relaxed font-alt tracking-wide">
          Copenhagen’s only cinema still projecting movies on 16mm film and screening gems on VHS. Expect cult classics,
          blaxploitation, erotic film relics, surreal sci-fi, and cinematic chaos. We're cozy, dusty, and weird in all the right ways.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-sm text-gray-500 border-t border-gray-700 font-mono tracking-widest">
        © {new Date().getFullYear()} Husets Biograf — Copenhagen's oldest underground cinema
      </footer>
    </main>
  );
}
