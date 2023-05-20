import React, { useContext, useEffect, useState } from 'react';
import { UserToContext } from '../../provider/UserContext';
import Singletoy from './Singletoy';

const Mytoys = () => {
    const [mytoys, settoys] = useState([]);
    const { user } = useContext(UserToContext);
    console.log(user?.email)

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                settoys(data);
            })
    }, [user])

    // sort
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {

        fetch(`http://localhost:5000/mytoys/${user?.email}/data?sortOrder=${sortOrder}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                settoys(data);
            })
    }, [sortOrder]);

    const handleSortOrderChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };


    return (

        <div>
            <div>
                Sort Order:
                <button onClick={handleSortOrderChange}>
                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                </button>
            </div>
            <div className="overflow-x-auto w-full container mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(toy => (<Singletoy
                                key={toy._id}
                                toy={toy}
                            ></Singletoy>))
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