import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (

        <div className='container mx-auto'>
            <div className='p-4  bg-[#9538E2] m-2 rounded-2xl'> 
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Root;