import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MyToysRow = ({ toy, handleDelete, handleEdit }) => {
    const { _id, picture, name, quantity, price } = toy;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={picture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>                                <div className="font-bold">{name}</div>
            </td>
            <td>
                {quantity}
            </td>
            <td>${price}</td>
            <th>
                <div className='flex gap-2'>
                    <button onClick={() => handleEdit(_id)} className='btn btn-xs btn-ghost'><AiFillEdit className='text-xl'></AiFillEdit></button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-ghost'><AiFillDelete className='text-xl'></AiFillDelete></button>
                </div>
            </th>
        </tr>
    );
};

export default MyToysRow;