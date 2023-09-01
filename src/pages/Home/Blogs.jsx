import React from 'react';
const Blogs = () => {
    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className='container mx-auto my-10'>
            <h3 className='text-center mb-10 text-4xl font-semibold bg-info-content py-5 text-white rounded-tl-full rounded-br-full shadow-lg'>Blogs</h3>

            <div className="section grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/4.jpg?v=1651562657" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Love between mother and daughter</h2>
                        <p>Mother and girl play with toy cars, sharing laughter and creating imaginary roads. Their bond grows stronger with each fun-filled moment, forming cherished memories.</p>
                        <div className="card-actions justify-start mt-7">
                            <button className="py-3 px-7 text-center bg-info-content text-white btn btn-outline font-[700] cursor-pointer rounded-full  border-none w-full">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src='https://images.unsplash.com/photo-1447931958677-954446df5f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New Toy School Bus looks stunning</h2>
                        <p>The new toy school bus sparks imagination with its vibrant colors and interactive features, offering endless fun for little adventurers.</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-info-content text-white btn btn-outline border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/1.jpg?v=1651562604" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New play tool that helps learn Math</h2>
                        <p>The new math play tool engages young minds, making learning enjoyable. With interactive features, it fosters a deeper understanding of math concepts.</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-info-content text-white btn btn-outline border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src='https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Beautiful new toy car for you</h2>
                        <p>The new toy car thrills young minds with its sleek design and exciting features, igniting endless playtime adventures and creativity.</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-info-content text-white btn btn-outline  border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;