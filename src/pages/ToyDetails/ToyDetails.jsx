import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../shared/Spinner/Spinner';
import { Helmet } from 'react-helmet-async';

const ToyDetails = () => {
    const [toy, setToy] = useState({});
    if (!toy) {
        return <Spinner></Spinner>
    }
    const { _id, sellerName, sellerEmail, name, quantity, price, subCategory, picture, rating, description } = toy;
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/toys/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])

    return (
        <div className='container mx-auto bg-base-200  lg:my-10 rounded-lg mb-5'>
            <Helmet>
                <title>Drift & Play | {`${name}`}</title>
            </Helmet>
            <h3 className='text-center text-2xl font-semibold  border bg-info-content text-white py-2 rounded'>Toy Details</h3>
            <div>
                <img className='shadow-lg w-full lg:w-80 h-80 mx-auto rounded-lg border border-white my-5' src={picture} alt="" />
                <div className='bg-info-content rounded-lg flex flex-col gap-2 p-2 lg:p-10 text-base-300'>
                    <p className='text-xl'>Toy Name : {name}</p>
                    <p className='text-xl'>Seller Name : {sellerName && sellerName}</p>
                    <p className='text-xl'>Seller Email : {sellerEmail && sellerEmail}</p>
                    <p className='text-xl'>Sub-category : {subCategory}</p>
                    <p className='text-xl'>Price : ${price}</p>
                    <p className='text-xl'>Rating : {rating}</p>
                    <p className='text-xl'>Available quantity : {quantity}</p>
                    <p className='text-xl'>Detail description : {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;