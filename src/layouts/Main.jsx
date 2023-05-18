import React from 'react';
import Navigationbar from '../pages/shared/navbar/Navigationbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;