import React from 'react';
import './Break.css'
import Marquee from "react-fast-marquee";
const Break = () => {
    return (
        <>
            <div className="break">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className='text-white'>
               Bangladesh complete historic Test win over New Zealand.
               Taijul Islam completed a 10-wicket-haul as Bangladesh brought up their maiden home Test victory over New Zealand, defeating the Kiwis by 150 runs on the fifth day of the first Test at the Sylhet International Cricket Stadium today.
            </Marquee>
            </div>
        </>
    );
};

export default Break;