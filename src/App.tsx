import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import FeaturedCars from './components/FeaturedCars';
import GetStarted from './components/GetStarted';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <article>
          <Hero />
          <AboutUs />
          <FeaturedCars />
          <GetStarted />
          <Blog />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
