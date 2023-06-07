import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <h3>This is main layout</h3>
        </div>
    );
};

export default Main;