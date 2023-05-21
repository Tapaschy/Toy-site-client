import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { UserToContext } from '../../../provider/UserContext';
import { Link, useLocation } from 'react-router-dom';
import Toydetails from '../../alltoys/Toydetails';

const Toy = ({ toy }) => {
    const { user, loading } = useContext(UserToContext);
    const location = useLocation()
    return (

        <div>
            <div className="card  w-96 bg-base-100 shadow-xl mb-5">
                <figure className='px-10 pt-10 w-full h-full'><img src={toy.photo} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-seondary text-primary">{toy.toyname}</h2>
                    <p>{toy.description}</p>
                    <div className='flex items-center mt-3'>
                        <p>{toy.rating}</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                            {user ? <>  <label htmlFor={toy._id} className="btn btn-secondary">View Details</label>

                                <Toydetails
                                    key={toy._id}
                                    toy={toy}>
                                </Toydetails>
                            </> : <><Link to={"/login"} state={{ from: location }} replace><a className="btn btn-secondary">View Details</a></Link></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;