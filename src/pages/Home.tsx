import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import About from '../components/home/About';
import Services from '../components/home/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <Services />
    </main>
  );
}