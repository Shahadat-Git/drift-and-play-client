import React from 'react';
import Banner from './Banner';
import ShopByCategory from './ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3 className='text-center my-5 text-4xl'>Gallery Section</h3>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;