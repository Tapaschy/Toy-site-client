import React from 'react';
import Banner from './Banner';
import Category from './category/Category';
import Gallery from './Gallery';
import Latestblog from './Latestblog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Latestblog></Latestblog>
        </div>
    );
};

export default Home;