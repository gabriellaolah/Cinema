import React from 'react';

const mockProgramme = [
  {
    date: 'April 26, 2025',
    title: 'Bad Movie Club: Showgirls',
    description: 'So bad it’s genius. Come revel in the trash.',
    poster: '/images/showgirls.jpg',
  },
  {
    date: 'May 3, 2025',
    title: 'The Room',
    description: 'Oh hi Mark! Our monthly screening returns.',
    poster: '/images/the-room.jpg',
  },
  {
    date: 'May 17, 2025',
    title: 'Den Fantastiske Kultfilm Kviz',
    description: 'A mind-bending cult quiz night — prizes, chaos, and deep cuts.',
    poster: '/images/quiz.jpg',
  },
];

export default function Programme() {
  return (
    <main className="bg-black text-white font-alt min-h-screen px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-12">
        Programme
      </h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {mockProgramme.map((event, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-6 bg-gray-900 border border-gray-700 p-4 rounded-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-yellow-300/20 transition"
          >
            <img
              src={event.poster}
              alt={event.title}
              className="w-full sm:w-40 h-auto object-cover rounded shadow-md"
            />
            <div>
              <p className="text-sm text-yellow-400 uppercase mb-1 tracking-wide">{event.date}</p>
              <h2 className="text-xl font-bold text-white">{event.title}</h2>
              <p className="text-sm text-gray-300 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
