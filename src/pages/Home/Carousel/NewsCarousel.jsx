import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousel = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src="https://c.ndtvimg.com/2023-12/smus4ceg_devon-conway-afp_625x300_01_December_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    );
};

export default Carousel;