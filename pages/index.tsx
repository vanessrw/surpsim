import type {NextPage} from 'next';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from 'components/organism/Navbar';
import Footer from 'components/organism/Footer';
import Hero from 'components/organism/Hero';
import Benefit from 'components/organism/Benefit';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Benefit />
      <Footer />
    </div>
  );
};

export default Home;
