import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Programme from './Programme'; // Create this soon
// import Vault from './Vault'; 
// import Contact from './Contact'; 

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-retro">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          {/* <Route path="/vault" element={<Vault />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

