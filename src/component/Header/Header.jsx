/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-blue-100 fixed top-0 left-0 right-0 z-10'>
            <div className='w-11/12 mx-auto flex justify-between h-16 md:h-14 items-center'>
                <Link to="/"><h3 className='text-3xl font-bold'><span className=' text-pink-600 '>Dream</span><span className='text-blue-800'>Job</span></h3></Link>
                {/* humburger menu  */}
                <span className='md:hidden' onClick={() => setOpen(!open)}> {
                    open === true ? <XMarkIcon className="h-6 w-6 cursor-pointer"></XMarkIcon> : <Bars3Icon className="h-6 w-6 cursor-pointer"></Bars3Icon>
                }</span>
                <ul className={`flex ml-0 bg-blue-100 w-full md:w-fit flex-col md:flex-row md:static duration-500 absolute ${open ? 'top-16' : '-top-36'}`}>
                    <li>
                        <NavLink to="/statistic" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Statistic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appliedJob" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Applied Job</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'defult')}>Blogs</NavLink>
                    </li>
                </ul>
                <Link to="/"><button className='all-btn'>Start Applying</button></Link>
            </div>
        </div>
    );
};

export default Header;