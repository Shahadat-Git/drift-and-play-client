import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1, HiX } from "react-icons/hi";
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png'
import { AuthContext } from '../../providers/AuthProvider';
const Header = () => {
    const [menu, setMenu] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className=' bg-info-content  py-4 px-4'>
            <div className="flex justify-between items-center container mx-auto">
                <div className="">
                    <Link to='/'>
                        <img className='w-24' src={logo} alt="" />
                    </Link>
                </div>
                <div className="lg:flex gap-5 hidden">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'font-semibold text-success text-xl' : 'font-semibold text-white text-xl hover:text-success'}>Home</NavLink>
                    <NavLink to='/all-toys' className={({ isActive }) => isActive ? 'font-semibold text-success text-xl' : 'font-semibold text-white text-xl hover:text-success'}> All Toys</NavLink>
                    {
                        user &&
                        <>
                            <NavLink to='/my-toys' className={({ isActive }) => isActive ? 'font-semibold text-success text-xl' : 'font-semibold text-white text-xl hover:text-success'}>My Toys</NavLink>
                            <NavLink to='/add-toy' className={({ isActive }) => isActive ? 'font-semibold text-success text-xl' : 'font-semibold text-white text-xl hover:text-success'}>Add A Toy</NavLink></>
                    }
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'font-semibold text-success text-xl' : 'font-semibold text-white text-xl hover:text-success'}>Blog</NavLink>

                </div>
                {
                    user ? <div className="hidden lg:block dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user.displayName && user.displayName} src={user.photoURL ? user.photoURL : profile} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li onClick={handleLogOut}><p>Logout</p></li>
                        </ul>
                    </div>

                        :
                        <div>
                            <Link to="/login" className='hidden lg:flex btn btn-success '>login</Link>
                        </div>
                }





                {/* for phone */}
                <div className='lg:hidden'>
                    {
                        menu ? <HiX onClick={() => setMenu(!menu)} className='text-white text-4xl'></HiX> : <HiMenuAlt1 onClick={() => setMenu(!menu)} className='text-white text-4xl'></HiMenuAlt1>
                    }
                </div>
            </div>
            {
                menu && <div className='lg:hidden flex flex-col gap-4 pt-5'>
                    <div className=" lg:hidden flex flex-col gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold text-success text-xl ' : 'font-semibold text-white text-xl '}>Home</NavLink>
                        <NavLink to="/all-toys" className={({ isActive }) => isActive ? 'font-semibold text-success text-xl ' : 'font-semibold text-white text-xl '}> All Toys</NavLink>
                        {
                            user && <>
                                <NavLink to="/my-toys" className={({ isActive }) => isActive ? 'font-semibold text-success text-xl ' : 'font-semibold text-white text-xl '}>My Toys</NavLink>
                                <NavLink to="/add-toy" className={({ isActive }) => isActive ? 'font-semibold text-success text-xl ' : 'font-semibold text-white text-xl '}>Add A Toy</NavLink>
                            </>
                        }
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'font-semibold text-success text-xl ' : 'font-semibold text-white text-xl '}>Blog</NavLink>
                        {
                            user ? <div className="dropdown dropdown-content">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img title={user.displayName && user.displayName} src={user.photoURL ? user.photoURL : profile} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li onClick={handleLogOut}><p>Logout</p></li>
                                </ul>
                            </div>

                                :
                                <div>
                                    <Link to="/login" className=' lg:hidden btn btn-success '>login</Link>
                                </div>
                        }

                    </div>

                </div>
            }
        </div >
    );
};

export default Header;