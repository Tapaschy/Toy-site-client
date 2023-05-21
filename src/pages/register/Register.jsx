import React, { useContext, useState } from 'react';
import { UserToContext } from '../../provider/UserContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register } = useContext(UserToContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name,email,password)
        setError('');
        setSuccess('');
        if ((password.length < 6)) {
            setError('Please add at least 6 character.');
            return
        }
        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photo,
                });
                // setSuccess('User created successfully.');
                Swal.fire('User created successfully')
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-primary">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Submit" className='btn btn-primary' />
                            </div>
                            <Link to={"/login"}><p>Have acount Please login.</p></Link>
                        </form>
                    </div>
                    <div>
                        <h1 className='text-center text-red-700'>{error}</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;