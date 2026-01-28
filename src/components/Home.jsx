import Hero from './Hero';
import Services from './Services';
import Work from './Work';
import Testimonials from './Testimonials';
import Protection from './Protection';
import Teams from './Teams';
import FAQs from './FAQs';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Teams variant="home" />
      <Testimonials />
      <Protection />
      <FAQs />
    </main>
  );
};

export default Home;
