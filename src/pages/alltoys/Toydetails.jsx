import React from 'react';

const Toydetails = ({ toy }) => {
    const { _id, category, description, email, photo, price, quantity, rating, toyname, seller } = toy;
    console.log(toy);
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor={_id} className="btn btn-secondary">View Details</label>
            <div className='w-full'>
                
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor={_id} className="btn btn-sm btn-circle right-2 top-2">✕</label>
                    
                    <div className="hero min-h-screen bg-primary bg-opacity-90 rounded-xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='text-white'>
                                <h1 className="text-3xl font-bold">{toyname}</h1>
                                <div className='flex'><p className="py-6 pr-3">Seller name: {seller}</p>
                                <p className="py-6">Seller Email: {email}</p></div>
                                <div className='flex'>
                                <p className="py-6 pr-3">Price: ${price}</p>
                                <p className="py-6">Rating: {rating}</p>
                                </div>
                                <p className="py-6">Quantity: {quantity}</p>
                                <p className="py-6">Details About Product: <br />{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Toydetails;