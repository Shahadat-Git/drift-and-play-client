import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import Spinner from '../../shared/Spinner/Spinner';
import { Helmet } from 'react-helmet-async';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [toy, setToy] = useState({});
    const { user } = useContext(AuthContext);
    const formRef = useRef(null);

    useEffect(() => {
        fetch(`https://drift-and-play-server.vercel.app/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })

    }, [toy])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://drift-and-play-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })

            }
        })
    }

    const handleEdit = (id) => {
        fetch(`https://drift-and-play-server.vercel.app/toys/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data._id) {
                    setToy(data);
                    window.edidToy.showModal();
                }
            })

    }

    const handleFinalEdit = () => {

        const form = formRef.current;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {
            price,
            quantity,
            description
        }

        fetch(`https://drift-and-play-server.vercel.app/toys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    setToy({ ...toy })
                    toast.success('Successfully Updated!')
                }
            })
        form.reset();

    }
    return (
        <div className='container mx-auto my-20'>
            <Helmet>
                <title>Drift & Play | My Toys</title>
            </Helmet>
            <h2 className='text-center text-2xl font-semibold mb-5'>My Total Toys : {toys.length}</h2>
            <div className="overflow-x-auto">
                {
                    toys.length > 0 ? <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys?.map(toy => <MyToysRow
                                    key={toy._id}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                ></MyToysRow>)
                            }
                        </tbody>

                    </table> :
                        <Spinner></Spinner>
                }

                {/* modal */}
                {
                    toy &&
                    <dialog id="edidToy" className="modal">
                        <form ref={formRef} method="dialog" className="modal-box">
                            <button htmlFor="edidToy" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg text-center">Update This Toy</h3>
                            <div>
                                <label className='block'>Price : </label>
                                <input className='block w-full h-10 pl-2 outline outline-1 focus:outline-success my-2 rounded-lg' defaultValue={toy.price} type="text" name='price' placeholder=' Price' />

                                <label className='block'>Available quantity : </label>
                                <input className='block w-full h-10 pl-2 outline outline-1 focus:outline-success my-2 rounded-lg' defaultValue={toy.quantity} type="text" name='quantity' placeholder=' Quantity' />

                                <label className='block'> Toy description : </label>
                                <textarea className="textarea w-full h-32 outline outline-1 focus:outline-success my-2 rounded-lg" defaultValue={toy.description} type="text" name='description' placeholder='Detail description'></textarea>
                                <div className='flex justify-center'>
                                    <input onClick={handleFinalEdit} className='btn btn-success' type="submit" value='Update' />
                                </div>
                            </div>
                        </form>
                    </dialog>
                }
            </div>
        </div>
    );
};

export default MyToys;