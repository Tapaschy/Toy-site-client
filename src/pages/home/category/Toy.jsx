import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Toy = ({toy}) => {
    return (
        
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
                <figure><img src={toy.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">{toy.toyname}</h2>
                    <p>{toy.description}</p>
                    <p>{toy.rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Toy;