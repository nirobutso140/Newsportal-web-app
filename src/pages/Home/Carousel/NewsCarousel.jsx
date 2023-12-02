import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const NewsCarousel = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://c.ndtvimg.com/2023-12/smus4ceg_devon-conway-afp_625x300_01_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" />
                    <p className="legend">Bangladesh vs New Zealand test series</p>
                </div>
                <div>
                    <img src="/image/business.jpg" />
                    <p className="legend">Market Movers: Navigating Trends and Opportunities in Stocks</p>
                </div>
                <div>
                    <img src="/image/health.jpg" />
                    <p className="legend">Zen Chronicles: Latest Developments in the World of Yoga</p>
                </div>
                <div>
                    <img src="/image/ai.jpg" />
                    <p className="legend">Future Frontiers: AI and Robot Breakthroughs in the Headlines</p>
                </div>
                <div>
                    <img src="/image/edu.jpg" />
                    <p className="legend">Higher Learning Headlines: Breaking News from Universities</p>
                </div>
                <div>
                    <img src="https://www.tripsavvy.com/thmb/sw4XwSeR4qLYUR0G12f5QtsEP10=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rural-scene-with-mountains-behind--kaikoura--gisborne--new-zealand-1016324114-19380fe292d94029932c37d19b82bda9.jpg" />
                    <p className="legend">Kiwi Chronicles: Exploring New Zealand's Natural Wonders</p>
                </div>
            </Carousel>
        </div>
    );
};

export default NewsCarousel;