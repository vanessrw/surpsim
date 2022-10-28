import React from 'react';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from 'react-player';

interface VidProps{
    link: string;
}
export default function Video(props: VidProps) {
    const {
        link
    } = props

    useEffect(() => {
      AOS.init();
    }, []);
    return (
        <div className="vid">
            <ReactPlayer width='480px' 
            height='240px'
            controls 
            url ={link} />
            
        </div>
    );
}
