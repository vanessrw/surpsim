import Image from 'next/image';

import Button from "components/atoms/Button";

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-wrapper wrapper">
            <div className="content-wrapper">
            <div className="content-wrapper-relative">
                <div className="content">
                    <h3>7 NOVEMBER 2022</h3>
                    <h1 className='text-gradient-vertical'>SAINT SIMON SAMPURNA</h1>
                    <h2>TURNS 19</h2>
                    <p>*scroll down*</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}