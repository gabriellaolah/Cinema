function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <header className="bg-black py-4 text-center">
        <h1 className="text-4xl font-bold glitch-text">🎞️ Husets Biograf</h1>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="hover:text-red-500">Now Showing</a></li>
            <li><a href="#" className="hover:text-red-500">Cult Classics</a></li>
            <li><a href="#" className="hover:text-red-500">The Vault</a></li>
            <li><a href="#" className="hover:text-red-500">Wanna Hang?</a></li>
          </ul>
        </nav>
      </header>

      <main className="text-center mt-12">
        <h2 className="text-3xl font-bold">If you see this, Tailwind is working ❤️</h2>
      </main>

      <footer className="bg-black text-center py-6 mt-12">
        <p>© 2025 Husets Biograf | Copenhagen's oldest underground cinema</p>
      </footer>
    </div>
  );
}

export default App;

