import React from 'react';
import Navbar from '../Nav/Navbar';
import { Outlet, useLoaderData } from 'react-router';

export const Context = React.createContext()

const Root = () => {
    const data = useLoaderData()
    return (
        <Context.Provider value={data}>
        <div className='container mx-auto md:p-4 '>    
            <Navbar></Navbar>
            <Outlet data={data}></Outlet>
        </div>
        </Context.Provider>
    );
};

export default Root;