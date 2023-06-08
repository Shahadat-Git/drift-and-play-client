import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, editUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/';


    const handleRegister = (event) => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // update data

        const updateData = {
            displayName: name,
            photoURL: photo
        }

        // validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password At least one uppercase character')
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password At least one lowercase character')
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('Password At least one digit')
            return;
        }
        else if (password.length < 6) {
            setError('Password Minimum 6 characters')
            return;
        }

        createUser(email, password)
            .then((result) => {
                editUser(updateData)
                    .then(() => {
                        // console.log('successfully updated')
                    })
                    .catch((error) => {
                        setError(error.message)
                        // console.log(error.message)
                    })
                // console.log(result)
                navigate(from, { replace: true });
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError('This email already used');
                }
                else {
                    setError(error.message);
                }
            })


        // console.log(name, email, password, photo)

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
                <h3 className='text-center text-4xl font-semibold'>Please Register</h3>
                {
                    error && <p className='text-center text-xl my-4 text-error font-semibold'>{error}</p>
                }
                <form onSubmit={handleRegister} className='mt-10'>
                    <label className='block text-2xl font-semibold'>Name : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='name' placeholder='Your Name' required />

                    <label className='block text-2xl font-semibold'>Email : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="email" name='email' placeholder='Your Email' required />

                    <label className='block text-2xl font-semibold'>Password : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="password" name='password' placeholder='Your Password' required />

                    <label className='block text-2xl font-semibold'>Photo URL : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-success my-2 rounded-lg' type="text" name='photo' placeholder='Your Photo URL' />

                    <div className='flex justify-between'>
                        <Link to='/login' className='text-xl text-success font-semibold underline  block hover:text-green-500'>Already have an account ?</Link>
                    </div>

                    <input className='btn btn-success block w-full h-16 text-2xl mt-5 hover:bg-green-500' type="submit" value='Register' id="" />

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

export default Register;