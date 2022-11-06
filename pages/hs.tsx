/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from 'components/organism/Footer';
import Navbar from 'components/organism/Navbar';
//import Event from 'components/organism/Event';
import Header from 'components/organism/EventHeader';
import Image from 'next/image';
//import EventTitle from 'components/organism/EventTitle';
import EventHs from 'components/organism/EventHs';

export default function hs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="hs">
        <Navbar />
        <Header title="wishes-hs" />
        <EventHs />
        <Footer />
    </div>
  );
}

/*        
<div className="gambarAtas">
  <span id="bg_biru">
    <Image src="/image/image_icon.png" alt="" width={450} height={350}></Image>
  </span> 
</div>
*/