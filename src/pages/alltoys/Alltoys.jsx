import React, { useContext, useEffect, useState } from 'react';
import Toydetails from './Toydetails';
import { UserToContext } from '../../provider/UserContext';
import { Link, useLocation } from 'react-router-dom';

const Alltoys = () => {
    const [alltoys, setalltoy] = useState([]);
    const {user, loading} = useContext(UserToContext);
    const location = useLocation()
    // const alltoys=useLoaderData();
    console.log(alltoys)






    useEffect(() => {
        fetch(`https://disney-toy-world-production.up.railway.app/toys`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setalltoy(result);
            });
    }, []);
    return (
        <div>

            <div className="overflow-x-auto w-full container mx-auto mt-5 ">
                {/* <div className='flex mb-5 items-center align-middle' >
                    <p className='text-lg font-semibold text-secondary pr-3'>Sort Order By price:</p>
                    <button onClick={handleSortOrderChange} className='btn-primary btn'>
                        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                    </button>
                </div> */}
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>View details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.map(toy => (

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
                                    </td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <th>
                                    {user?<>  <label htmlFor={toy._id} className="btn btn-secondary">View Details</label>
                                        
                                            <Toydetails
                                            key={toy._id}
                                            toy={toy}>
                                        </Toydetails>
                                        </>:<><Link to={"/login"} state={{from: location}} replace><a className="btn btn-secondary">View Details</a></Link></>}
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

export default Alltoys;