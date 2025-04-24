import React from 'react';

const mockProgramme = [
  {
    date: 'Tuesday, April 23',
    title: 'The Big Lebowski Drink-Along',
    description: 'Comedy Classic',
  },
  {
    date: 'Thursday, April 25',
    title: 'Czech Cinema Night',
    description: '1960s Drama',
  },
  {
    date: 'Friday, April 26',
    title: 'Bad Movie Club: Showgirls',
    description: 'Cult Trash',
  },
  {
    date: 'Sunday, April 28',
    title: 'Sci-Fi Sunday: Solaris',
    description: 'Soviet Masterpiece',
  },
  {
    date: 'Friday, May 3',
    title: 'The Rocky Horror Picture Show',
    description: 'Midnight Movie',
  },
];

export default function Programme() {
  return (
    <main
      className="min-h-screen font-serif text-black px-6 py-16"
      style={{
        backgroundColor: '#e5dcc5',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="max-w-2xl mx-auto">

        {/* Poster-style Header */}
        <div className="mb-12 text-center relative">
          <img
            src="/public/images/film-reel.jpg"
            alt="Film Reel"
            className="mx-auto h-14 w-auto mb-3 opacity-70"
          />
          <h1 className="text-5xl font-black uppercase tracking-[0.2em] text-[#111] drop-shadow-[2px_2px_0_#d8c8a1]">
            Programme
          </h1>
        </div>

        {/* Programme Listings */}
        <div className="space-y-12">
          {mockProgramme.map((event, index) => (
            <div key={index}>
              <p className="text-sm uppercase tracking-[0.15em] text-[#333] font-mono mb-1">
                {event.date}
              </p>
              <h2 className="text-2xl font-black uppercase text-[#111] tracking-tight leading-snug">
                {event.title}
              </h2>
              <p className="text-md text-[#444] font-medium italic mt-1">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-16 text-[#666] tracking-wider italic">
          Copenhagen’s old-school projector cinema — Est. on film.
        </p>
      </div>
    </main>
  );
}
