import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../Footer/Footer';

export const Context = React.createContext()

const Root = () => {
    const data = useLoaderData()
    return (
        <Context.Provider value={data}>
        <div className='max-w-8xl mx-auto  bg-[#f7f7f7]'>    
            <Navbar></Navbar>
            <div className=''>
            <Outlet data={data}></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </Context.Provider>
    );
};

export default Root;