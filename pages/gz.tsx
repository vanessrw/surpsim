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
import EventHs from 'components/organism/EventGz';

export default function uni() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="gz">
        <Navbar />
        <Header title="wishes-gz" />
        <div className="gambarAtas">
          <span id="bg_biru">
          <Image src="/foto/gz.jpg" alt="" width={450} height={350}></Image>
          </span>
        </div>
        <Event
        title="CELLO"
        subtitle=""
        description='Happy Birthday Momonnn!!! 🎉🥳 Wish you all the best 
        buat kuliahnya di German... Jangan males"an disana dan 
        jangan lupa balik cok ke Indo, bawa oleh" HAHAHA jkjk'
        illustrationPath="/foto/gz2.jpg"
        anchorTarget="_blank"
        />
        <Event
        title="CHACHA"
        subtitle=""
        description='hello bopung jermannn!!! masi oren ga rambut lo HAHAHAHAHA 
        happy birthday bapak momon sultan puspit 🙏🏻 semakin sejahtera panjang 
        umur sehat selalu semakin dewasa dan kembalilah ke jalan yang benar 
        (read: jgn rambut oren lagi y kea kocing oren🙏🏻) semakin sayang ben dan
        semakin baik ke gue ya jgn bully gue trs

        semoga umur 29 ini ya lebih bermakna yah taun depan udh lebi tua 👴🏻 
        semoga juga dipertemukan dengan pendamping hidup yang acihuy aduhai deh HAHAHAH
        lancar lancar kuliahnya dan tbh gue gatau lo kuliah apa tp semoga pas lo 
        balik indo bisa bikinin gue helikopter yah soalnya semua tmn gue yg ke jerman 
        gue titipin helikopter 🙏🏻🙏🏻 atoga balik balik jd sugar daddy gue gaksih????
        
        enjoy 19 mon!1!1!1!1!1'
        illustrationPath="/foto/gz3.jpg"
        anchorTarget="_blank"
        />
        <Event
        title="CHIKA"
        subtitle=""
        description="happy birthday simon!! wish u all the best!! have fun eating 
        bratwurst and getting drunk during the oktoberfest (ironic maap udh bulan 
        november LOL) HAHAHA sukses selalu sekolahnya!!
        kapan2 gua lempar fishball ke jerman"
        illustrationPath="/foto/gz4.jpg"
        anchorTarget="_blank"
        />
        <EventHs />
        <Footer />
    </div>
  );
}