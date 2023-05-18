import React from 'react';
import logo from '../../../assets/logo/logo.png'

const Navigationbar = () => {

    const navli = <>
        <li><a>Home</a></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Add A Toy</a></li>
        <li><a>Blogs</a></li>
        <li><a>Blogs</a></li>
    </>
    return (
        <div className='bg-primary'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navli}
                        </ul>
                    </div>
                    <a href=""><img src={logo} alt="" className='h-10 w-10'/></a>
                    <a className="btn btn-ghost normal-case text-xl text-white">DisneyToy<span className='text-secondary'>world</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navli}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <a className="btn btn-primary">Login</a>
                    <a className="btn btn-primary">Log out</a>
                </div>
            </div>
        </div>
    );
};

export default Navigationbar;