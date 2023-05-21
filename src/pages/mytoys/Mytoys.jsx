import React, { useContext, useEffect, useState } from 'react';
import { UserToContext } from '../../provider/UserContext';
import Updatetoys from './Updatetoys';

const Mytoys = () => {
    const [mytoys, settoys] = useState([]);
    const { user } = useContext(UserToContext);
    const [control, setControl] = useState(false);
    console.log(user?.email)

    useEffect(() => {
        fetch(`https://disney-toy-world-production.up.railway.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                settoys(data);
            })
    }, [user, control])

    // sort
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {

        fetch(`https://disney-toy-world-production.up.railway.app/mytoys/${user?.email}/data?sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                settoys(data);
            })
    }, [sortOrder, user]);

    const handleSortOrderChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    // for update
    const handletoyUpdate = (data) => {
        fetch(`https://disney-toy-world-production.up.railway.app/toys/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    alert('Updated successful');
                    setControl(!control);
                }
                console.log(result);
            });
    };


    //   delete
    const handleDelete = (id) => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://disney-toy-world-production.up.railway.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        settoys(remaining);
                    }
                })
        }
    }


    return (

        <div>

            <div className="overflow-x-auto w-full container mx-auto mt-5 ">
                <div className='flex mb-5 items-center align-middle' >
                    <p className='text-lg font-semibold text-secondary pr-3'>Sort Order By price:</p>
                    <button onClick={handleSortOrderChange} className='btn-primary btn'>
                        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                    </button>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>Rating</th>
                            <th>description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(toy => (

                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy.photo} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{toy.toyname}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {toy.seller}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{toy.email}</span>
                                    </td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>{toy.rating}</td>
                                    <td>{toy.description}</td>
                                    <th>
                                        {/* <button className="btn btn-ghost btn-xs">Edit</button> */}
                                        {/* The button to open modal */}
                                        <Updatetoys
                                            key={toy._id}
                                            toy={toy}
                                            handletoyUpdate={handletoyUpdate}
                                        ></Updatetoys>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-secondary">Delete</button>
                                    </th>
                                </tr>

                            ))
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Mytoys;