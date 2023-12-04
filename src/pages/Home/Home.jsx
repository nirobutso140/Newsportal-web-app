

import AllPublisher from './AllPublisher/AllPublisher';
import Break from './Break/Break';
import BreakingNews from './BreakingNews';

import NewsCarousel from './Carousel/NewsCarousel';
import Plans from './Plans/Plans';

const Home = () => {
    return (
        <>
            <Break/>
            <NewsCarousel/>
            <BreakingNews/>
            <AllPublisher/>
            <Plans/>

           
        </>
    );
};

export default Home;