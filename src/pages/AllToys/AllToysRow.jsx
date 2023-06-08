import React from 'react';

const AllToysRow = ({ toy, handleViweDetails }) => {
    const { _id, sellerName, name, quantity, price, subCategory } = toy;

    return (
        <tr>
            <td>
                {sellerName && sellerName}
            </td>
            <td>
                {name}
            </td>
            <td>
                {subCategory}
            </td>
            <td>${price}</td>
            <td>
                {quantity}
            </td>
            <td>
                <button onClick={() => handleViweDetails(_id)} className='btn btn-sm'>View Details</button>
            </td>
        </tr>
    );
};

export default AllToysRow;