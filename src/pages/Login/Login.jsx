import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, googleSignIn,  } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)
            .then((result) => {
                // console.log(result)
                navigate(from, { replace: true });
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/wrong-password).") {
                    setError('Wrong Password');
                }
                else if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setError("Email doesn't match");
                }
                else {
                    setError(error.message);
                }
                // console.log(error)
            })



    }

    const handleGoogleLogin = () => {
        setError('')

        googleSignIn()
            .then((result) => {
                // console.log(result)
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='container px-1 mx-auto my-10 lg:w-6/12'>
            <div className='bg-base-200  rounded-lg px-5 py-10 lg:px-10 lg:py-20'>
                <h3 className='text-center text-4xl font-semibold'>Please Login</h3>
                {
                    error && <p className='text-center text-xl my-4 text-error font-semibold'>{error}</p>
                }
                <form onSubmit={handleLogin} className='mt-10'>
                    <label className='block text-2xl font-semibold'>Email : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="email" name='email' placeholder='Your Email' required />

                    <label className='block text-2xl font-semibold'>Password : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="password" name='password' placeholder='Your Password' required />

                    <div className='flex justify-between'>
                        <Link state={location.state && { from: location.state?.from }} to='/register' className='text-xl text-success font-semibold underline  block hover:text-green-500'>Don't have an account ?</Link>

                        <Link className='text-xl text-success font-semibold underline block hover:text-green-500'>Forgot password ?</Link>
                    </div>

                    <input className='btn btn-success block w-full h-16 text-2xl mt-5 hover:bg-green-500' type="submit" value='Login' id="" />

                </form>
                <div className=' flex items-center'>
                    <hr className=' border-black w-full' />
                    <h2 className='m-5 text-xl font-semibold'>Or</h2>
                    <hr className=' border-black w-full' />
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-5'>
                    <button onClick={handleGoogleLogin} className='btn btn-outline hover:btn-neutral flex-1 h-20 text-2xl flex items-center gap-2'>
                        <FaGoogle className='text-4xl' />
                        <p>google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;