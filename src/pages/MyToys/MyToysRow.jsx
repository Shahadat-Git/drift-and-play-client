import React from 'react';

const MyToysRow = ({ toy }) => {
    const { picture, name, quantity, price } = toy;
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
            <td>{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyToysRow;