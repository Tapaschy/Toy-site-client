import React from 'react';

const Singletoy = ({toy}) => {
    console.log(toy);
    const{_id,category,description,email,photo,price,quantity,rating,toyname,seller}=toy;
    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{toyname}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {seller}
                    <br />
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
                <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </>
    );
};

export default Singletoy;