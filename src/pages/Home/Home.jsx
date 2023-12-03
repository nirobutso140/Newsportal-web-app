

import AllPublisher from './AllPublisher/AllPublisher';
import BreakingNews from './BreakingNews';

import NewsCarousel from './Carousel/NewsCarousel';
import Plans from './Plans/Plans';

const Home = () => {
    return (
        <>
            
            <NewsCarousel/>
            <BreakingNews/>
            <AllPublisher/>
            <Plans/>

           
        </>
    );
};

export default Home;