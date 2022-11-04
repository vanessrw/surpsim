import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Toaster} from 'react-hot-toast';
import '../styles/Button.css';
import '../styles/Event.css';
import '../styles/EventTitle.css';
import '../styles/Footer.css';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Hero.css';
import '../styles/Navbar.css';
import '../styles/SubHeader.css';
import '../styles/Benefit.css';
import '../styles/Uni.css';
import '../styles/Hs.css';
import '../styles/Gz.css';
import '../styles/style.css';
import "../styles/countdown.css"
import "../styles/EventHs.css"
function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>HBD SIMON!</title>
        <meta
          name=""
          content="Simon's 19th bday"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster toastOptions={{position: 'bottom-center'}} />
    </>
  );
}

export default MyApp;
