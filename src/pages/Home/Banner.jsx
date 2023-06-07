import React from 'react';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ "backgroundImage": "url(/assets/banner-img.jpg)" }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md lg:max-w-full">
                        <h1 className="mb-5 text-5xl font-bold">Rev Up the Fun with Our Exciting Car Toy Shop</h1>
                        <p className="mb-5"> Welcome to our car toy shop, where the joy of play meets the thrill of the open road! Immerse yourself in a world of miniature vehicles, where imagination takes the driver's seat. Discover a wide range of meticulously crafted cars, trucks, and race cars that will ignite your child's passion for exploration and adventure. From classic roadsters to sleek sports cars, our collection offers something for every young car enthusiast. Watch as their eyes light up with delight as they race their favorite cars along imaginary tracks and create unforgettable moments of joy. At our car toy shop, we believe that playtime should be as exciting as a fast-paced race, and that's why we bring you the finest selection of high-quality, durable toys that guarantee hours of fun. Let your child's imagination hit top gear and embark on endless imaginative journeys with our car toys. Buckle up, start your engines, and experience the joy of play with us!</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;