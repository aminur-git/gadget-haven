import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        </div>
    );
};

export default Home;