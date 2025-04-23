import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;