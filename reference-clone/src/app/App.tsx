import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}