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

export default function uni() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <div className="uni">
        <Navbar />
        <Header title="wishes-uni" />
        <div className="gambarAtas">
          <span id="bg_biru">
          <Image src="/image/image_icon.png" alt="" width={500} height={400}></Image>
          </span>
        </div>

        <Event
        title="BLABLABLA"
        subtitle="ORANG 1"
        description='QWERTYUIOP ASDFG HJKL ZXC VBNM'
        illustrationPath="/image/image_icon.png"
        anchorTarget="_blank"
        />
        <Event
        title="ASDF"
        subtitle="ORANG 2"
        description='QWERTYUIOP ASDFG HJKL ZXC VBNM'
        illustrationPath="/image/image_icon.png"
        anchorTarget="_blank"
        />
        <Event
        title="XCVBN"
        subtitle="ORANG 3"
        description='QWERTYUIOP ASDFG HJKL ZXC VBNM'
        illustrationPath="/image/image_icon.png"
        anchorTarget="_blank"
        />
        <Footer />
    </div>
  );
}