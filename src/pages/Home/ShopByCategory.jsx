import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
import Spinner from '../../shared/Spinner/Spinner';
import AOS from "aos";

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys?category=sports`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const handleSelect = (index) => {
        let category;
        if (index === 0) {
            category = 'sports'
        }
        else if (index === 1) {
            category = 'truck';
        }

        else if (index === 2) {
            category = 'police';
        }

        fetch(`http://localhost:5000/toys?category=${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }



    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className='container mx-auto'>
            <div className='px-2 lg:px-0 my-5  rounded-lg'>
                <Tabs defaultIndex={0} onSelect={(index) => handleSelect(index)}>
                    <TabList className='bg-base-300 rounded-lg text-xl'>
                        <Tab>Sports Cars</Tab>
                        <Tab>Truck</Tab>
                        <Tab>Police Cars
                        </Tab>
                    </TabList>

                    <TabPanel>
                        {
                            toys.length > 0 ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                                {
                                    toys.map(toy => <CategoryCard
                                        key={toy._id}
                                        toy={toy}
                                    ></CategoryCard>)
                                }
                            </div> : <Spinner></Spinner>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            toys.length > 0 ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                                {
                                    toys.map(toy => <CategoryCard
                                        key={toy._id}
                                        toy={toy}
                                    ></CategoryCard>)
                                }
                            </div> : <Spinner></Spinner>
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            toys.length > 0 ? <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                                {
                                    toys.map(toy => <CategoryCard
                                        key={toy._id}
                                        toy={toy}
                                    ></CategoryCard>)
                                }
                            </div> : <Spinner></Spinner>
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;