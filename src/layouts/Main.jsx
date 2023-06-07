import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Header></Header>
            <div className='lg:min-h-[calc(100vh-559px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;