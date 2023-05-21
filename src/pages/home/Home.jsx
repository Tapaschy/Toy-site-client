import React from 'react';
import Banner from './Banner';
import Category from './category/Category';
import Gallery from './Gallery';
import Latestblog from './Latestblog';
import useTitle from '../../hooks/useTItle';

const Home = () => {
    useTitle('HOME')
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