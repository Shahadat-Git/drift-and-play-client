import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <h3>This is main layout</h3>
        </div>
    );
};

export default Main;