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
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })

    }, [])

    const handleViweDetails = (id) => {
        console.log(id)
        if (!user) {
            toast.error('You have to log in first to view details')
        }
        navigate(`/toy/${id}`)
    }
    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-center text-2xl font-semibold mb-5'>Total Toys : {toys.length}</h2>
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