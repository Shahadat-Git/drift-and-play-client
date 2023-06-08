import React, { useContext, useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import Spinner from '../../shared/Spinner/Spinner';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/toys?limit=20`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })

    }, [])

    const handleViweDetails = (id) => {
        // console.log(id)
        if (!user) {
            toast.error('You have to log in first to view details')
        }
        navigate(`/toy/${id}`)
    }

    const handleSearch = event => {
        event.preventDefault();

        const form = event.target;
        const search = form.search.value;

        fetch(`http://localhost:5000/toys?name=${search}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }
    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-center text-2xl font-semibold mb-5'>Total Toys : {toys.length}</h2>
            <form onSubmit={handleSearch} className='bg-base-200 p-2 flex items-center rounded'>
                <input type="text" name='search' placeholder="Search toy" className="block w-full h-10 pl-5 focus:outline-success my-2 rounded-l-lg" />
                <input className='btn btn-primary btn-sm h-10 rounded-r-lg rounded-l-none' type="submit" value="Search" />
            </form>
            <div className="overflow-x-auto">
                {
                    toys.length > 0 ? <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys?.map(toy => <AllToysRow
                                    key={toy._id}
                                    toy={toy}
                                    handleViweDetails={handleViweDetails}
                                ></AllToysRow>)
                            }
                        </tbody>

                    </table> :
                        <Spinner></Spinner>
                }

            </div>
        </div>
    );
};

export default AllToys;