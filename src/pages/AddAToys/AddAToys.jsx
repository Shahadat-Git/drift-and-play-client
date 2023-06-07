import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const AddAToys = () => {
    const { user } = useContext(AuthContext);


    const handleToyAdd = (event) => {
        event.preventDefault();

        const form = event.target;

        const picture = form.toyPic.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const toy = {
            picture,
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description
        }

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    toast.success('Toy successfully added !');
                    form.reset();
                }
            })
    }

    return (
        <div className='container px-1 mx-auto my-10 lg:w-6/12'>
            <div className='bg-base-200  rounded-lg px-5 py-10 lg:px-10 lg:py-20'>
                <h3 className='text-center text-4xl font-semibold'>Add a new toy!</h3>

                <form onSubmit={handleToyAdd} className='mt-10'>
                    <label className='block text-2xl font-semibold'>Picture URL of the toy : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='toyPic' placeholder='Picture URL of the toy' required />

                    <label className='block text-2xl font-semibold'>Name : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='name' placeholder='Name' required />

                    <label className='block text-2xl font-semibold'>Seller name : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' defaultValue={user && user.displayName} type="text" name='sellerName' placeholder='Seller name' required />

                    <label className='block text-2xl font-semibold'>Seller email : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' defaultValue={user && user.email} type="text" name='sellerEmail' placeholder='Seller email' required />

                    <label className='block text-2xl font-semibold'>Sub-category : </label>
                    <select className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' name='subCategory'>
                        <option>Sports Cars</option>
                        <option>Trucks</option>
                        <option>Mini Fire Truck</option>
                        <option>Mini Police Cars</option>
                    </select>

                    <label className='block text-2xl font-semibold'>Price : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='price' placeholder='Price' required />

                    <label className='block text-2xl font-semibold'>Rating : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='rating' placeholder='Rating' required />

                    <label className='block text-2xl font-semibold'>Available quantity : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='quantity' placeholder='Available quantity' required />

                    <label className='block text-2xl font-semibold'>Detail description: </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='description' placeholder='Detail description' required />



                    <input className='btn btn-success block w-full h-16 text-2xl mt-5 hover:bg-green-500' type="submit" value='Add' id="" />

                </form>

            </div>
        </div>
    );
};

export default AddAToys;