import Hero from './components/Hero';
import Stats from './components/Stats';
import Strategy from './components/Strategy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Stats />
      <Strategy />
      <Contact />
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Crypto Trader Portfolio — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
