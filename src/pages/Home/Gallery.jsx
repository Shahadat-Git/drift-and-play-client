import React, { useEffect, useState } from 'react';
import Spinner from '../../shared/Spinner/Spinner';
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
    const [toys, setToys] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/gallery?limit=8')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, []);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div data-aos="fade-up"
            data-aos-duration="1000" className='container mx-auto my-10'>
            <h3 className='text-center mb-10 text-4xl font-semibold bg-info-content py-5 text-white rounded-tl-full rounded-br-full shadow-lg'>Exclusive Cars</h3>
            {
                toys ?
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 px-1 lg:px-0'>
                        {
                            toys.map(toy => <div style={{ background: `url(${toy.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                className='rounded h-96 lg:h-[250px] w-full shadow-lg relative bg-no-repeat'
                                key={toy._id}
                            >
                                <h3 className='absolute top-2 ml-2  font-bold text-slate-300 text-4xl w-full'>{toy.name}</h3>
                            </div>
                            )
                        }
                    </div> :
                    <Spinner></Spinner>
            }
        </div>
    );
};

export default Gallery;

{/* <img
    className=' rounded h-96 lg:h-[250px] w-full shadow-lg'
    src={toy.picture}
    key={toy._id}
    alt="" /> */}