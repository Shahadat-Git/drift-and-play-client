import React from 'react';
import Lottie from "lottie-react";
import adviceAnimation from '../../assets/animation.json'


const Advice = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className='container mx-auto my-10'>
            <div className='flex flex-col lg:flex-row items-center justify-centerlg:rounded-md mt-5 py-10'>
                <div className='lg:w-6/12'>
                    <Lottie animationData={adviceAnimation} loop={true} />
                </div>
                <div className='lg:w-6/12 text-center lg:px-10'>
                    <h3 className='text-2xl font-semibold my-2'>"Where Imagination Meets Playtime"</h3>
                    <p>Your one-stop destination for all things play and wonder! Discover a world filled with enchanting toys that ignite the imagination and bring joy to children of all ages. From classic board games that create cherished family moments to the latest tech-savvy gadgets that spark innovation, we have a wide selection to satisfy every playful spirit. Our friendly and knowledgeable staff is here to assist you in finding the perfect gift for birthdays, holidays, or just because. Step into Toyland Treasures and let the magic of childhood playtime come to life!</p>
                </div>
            </div>
        </div>
    );
};

export default Advice;