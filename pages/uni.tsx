/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from 'components/organism/Footer';
import Navbar from 'components/organism/Navbar';
import Event from 'components/organism/Event';
import Header from 'components/organism/EventHeader';
import Image from 'next/image';
import EventTitle from 'components/organism/EventTitle';
import EventHs from 'components/organism/EventUni';

export default function uni() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <div className="uni">
        <Navbar />
        <Header title="wishes-uni" />
        <EventHs />
        <Footer />
    </div>
  );
}