import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserToContext } from '../../provider/UserContext';
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {singIn}=useContext(UserToContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'
    const handleLogin=event=>{

        event.preventDefault();

        const form =event.target;
        const email=form.email.value;
        const password =form.password.value;
        console.log(email,password);
        
        setError('');
        setSuccess('');
        if ((password.length < 6)) {
            setError('Please add at 6 character');
            return
        }

        singIn(email,password)
            .then(result=>{
                const loggedInUser=result.user;
                console.log(loggedInUser);
                navigate(from,{replace:true});
                setError('');
            })
            .catch(error=>{
                setError(error.message);
            })
    };
    const [user,setUser]=useState('');
    const auth =getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{
       signInWithPopup(auth,provider)
       .then(result=>{
           const googleUser =result.user;
           setUser(googleUser)
           navigate(from,{replace:true})
       })
       .catch(error=>{
           console.log(error);
       })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn btn-primary' />
                            </div>
                            <p>No account ? please signup</p>
                            <button onSubmit={handleGoogleSignIn} className='btn'>login with Google</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;