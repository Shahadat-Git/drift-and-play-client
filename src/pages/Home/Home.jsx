import React from 'react';
import Banner from './Banner';
import ShopByCategory from './ShopByCategory';
import Gallery from './Gallery';
import { TbTruckDelivery } from "react-icons/tb";
import { BiDownload } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';
import Blogs from './Blogs';
import NewsLetter from './NewsLetter';
import Advice from './Advice';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Drift & Play | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>


            {/* extra section 1 */}
            <div data-aos="zoom-in" data-aos-duration="1000" className='container mx-auto bg-slate-200 rounded-lg my-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center justify-items-center gap-10  p-10'>
                    <div className='w-full'>
                        <img className='opacity-90  w-full rounded' src="/assets/banner2.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold'>Discover a World of Wonder at Our Toy Shop Wonderland!</h3>
                        <br />
                        <p>At our toy shop, the world of imagination awaits. Discover a delightful assortment of toys that will ignite joy and endless play. From cuddly companions to brain-teasing puzzles, our carefully curated collection ensures there's something for every child. Explore the wonderland of toys and create cherished memories with our quality products. Let the magic of play come alive at our toy shop, where every visit promises smiles, laughter, and pure childhood delight.</p>
                    </div>
                </div>
            </div>
            <Blogs></Blogs>
            <Advice></Advice>
            <NewsLetter></NewsLetter>
            {/* extra section 2 */}
            <div data-aos="zoom-in" data-aos-duration="1000" className='bg-info-content my-5'>
                <div className='container mx-auto grid lg:divide-x-2 grid-cols-1 lg:grid-cols-4 justify-center items-center  py-5 gap-2'>
                    <div className='flex gap-3 px-2'>
                        <TbTruckDelivery className='text-6xl text-white'></TbTruckDelivery>
                        <div>
                            <h4 className='text-lg font-semibold text-white uppercase'>Fast Shipping</h4>
                            <p className='text-white'>Fast Shipping</p>
                        </div>
                    </div>
                    <div className='flex gap-3 px-2'>
                        <BiDownload className='text-6xl text-white'></BiDownload>
                        <div>
                            <h4 className='text-lg font-semibold text-white uppercase'>ONLINE PAYMENT</h4>
                            <p className='text-white'>Payment methods </p>
                        </div>
                    </div>
                    <div className='flex gap-3 px-2'>
                        <BsFillTelephoneFill className='text-5xl text-white'></BsFillTelephoneFill>
                        <div>
                            <h4 className='text-lg font-semibold text-white uppercase'>24/7 SUPPORT</h4>
                            <p className='text-white'>Unlimited help desk</p>
                        </div>
                    </div>
                    <div className='flex gap-3 px-2'>
                        <TbTruckDelivery className='text-6xl text-white'></TbTruckDelivery>
                        <div>
                            <h4 className='text-lg font-semibold text-white uppercase'>On time Delivery</h4>
                            <p className='text-white'>On time Delivery</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;