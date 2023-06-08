import React, { useContext } from 'react';
import { AiFillDollarCircle, AiFillStar } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CategoryCard = ({ toy }) => {
    const { _id, name, price, rating, picture } = toy;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        if (!user) {
            toast.error('You have to log in first to view details')
        }
        navigate(`/toy/${id}`)
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-72">
                <img src={picture} className="rounded-xl h-full w-full border border-success" />
            </figure>
            <div className="card-body items-center text-center">

                <div className='flex justify-between w-full'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div>
                        <button onClick={() => handleViewDetails(_id)} className="btn btn-outline">View Details</button>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div>
                        <p className='text-xl font-semibold flex items-center gap-1'><AiFillDollarCircle className='text-success'></AiFillDollarCircle> {price}</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold flex items-center gap-1'><AiFillStar className='text-success'></AiFillStar> {rating}</p>
                    </div>
                </div>
                <div className="card-actions">

                </div>
            </div>
        </div>
    );
};

export default CategoryCard;