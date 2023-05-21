import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <img src="https://i.ibb.co/NLMDXrC/error-page-not-found-website-banner-confused-duck-cartoon-can-t-find-internet-88749143.jpg" alt="" />
            </div>

            <div className='text-center'>

                <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                    <span className='sr-only'>Error</span>
                    {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn'>
                    Back to <span className='text-primary'>home</span>
                </Link>
            </div>
        </div>
    );
};

export default Errorpage;