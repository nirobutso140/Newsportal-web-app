import React from 'react';
import Marquee from "react-fast-marquee";
import './BreakingNews.css'
import Title from '../../components/Title';
const BreakingNews = () => {

    return (
        <>
           <br /><br />
           <div className="breaking">
            <Title>sponsored by</Title>
           <Marquee className='text-white'>
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world3.png" alt="" />
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world5.png" alt="" />
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world4.jpg" alt="" />
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world9.png" alt="" />
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world2.png" alt="" />
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world1.png" alt="" />
               
            </Marquee>
           </div>
        </>
    );
};

export default BreakingNews;