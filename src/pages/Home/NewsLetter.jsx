import React from 'react';
import img from '../../assets/logo.png'
import Tilt from 'react-parallax-tilt';


const NewsLetter = () => {
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="hero mb-20 rounded-lg">
                <div className="hero-content flex flex-col gap-10 lg:flex-row">
                    <div className=" w-full lg:text-left">
                        <h1 className="md:text-5xl text-3xl font-bold text-info-content">Subscribe To Our NewsLetter</h1>
                        <p className="py-6">We will send you updates about our new collection of toys. </p>
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-md btn-neutral text-info-content btn-outline">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <Tilt className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 hidden lg:block">
                        <img src={img} className='lg:w-full' alt="" />
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;