import React, { useContext } from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { UserToContext } from '../../../provider/UserContext';

const Navigationbar = () => {

    const { user, logOut } = useContext(UserToContext);
    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

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
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 text-white rounded-box w-52">
                            {navli}
                        </ul>
                    </div>
                    <a href=""><img src={logo} alt="" className='h-10 w-10' /></a>
                    <a className="btn btn-ghost normal-case text-xl text-white">DisneyToy<span className='text-secondary'>world</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navli}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?<><label className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-secondary" data-tip={user?.displayName}>
                        <div className="w-12 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label><Link onClick={handleLogout}><a className="btn btn-primary">Log out</a></Link></>:<Link to={"/login"}><a className="btn btn-primary">Login</a></Link>
                    }
                    
                    
                    
                
                </div>

            </div>
        </div>
    );
};

export default Navigationbar;