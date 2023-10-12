import React from 'react';
import coffeeBeans from '@assets/img/coffee-beans.png';
import './videoSection.scss';

const VideoSection = () => {
    return (
        <section className='video-section'>
                <img className='video-section-img' src={coffeeBeans} alt="coffee-beans" />
                <iframe 
                    className='video-section-item'
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/ezMaCrzWkAs?si=l6Ms6PdjCJTpCILm" 
                    title="Coffee advertising" 
                    allow="accelerometer;   
                    autoplay; clipboard-write; 
                    encrypted-media; 
                    picture-in-picture; 
                    web-share">
                </iframe>
        </section>
    );
}

export default VideoSection;
