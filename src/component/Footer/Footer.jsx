/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-blue-950 text-white py-8 mt-7 foot-er'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 w-11/12 mx-auto'>
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold mb-2'>DreemJob</h2>
                    <p className='mb-3'>Empower Yourself and Choose the best future with Dream Job.</p>
                    <a href=""><img className='w-1/2' src="/footer-social.png" alt="" /></a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-semibold mb-2'>Company</h3>
                    <a target='_blank' href="https://en.wikipedia.org/wiki/Google">About Us</a>
                    <a href="">Work Flow</a>
                    <a href="">Career</a>
                    <a href="">Links</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-semibold mb-2'>Product</h3>
                    <a href="">Product</a>
                    <a href="">Plans & Pricing</a>
                    <a href="">Integration</a>
                    <a href="">Customers</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-semibold mb-2'>Support</h3>
                    <a href="">Help Desk</a>
                    <a href="">Sales</a>
                    <a href="">Membarship</a>
                    <a href="">Developer</a>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-semibold mb-2'>Contact</h3>
                    <p>Sher-E-Bangla Nagar, Dhaka</p>
                    <p>+880-154-1256</p>
                </div>
            </div>
            <hr className='w-11/12 mx-auto my-4' />
            <div className='flex justify-between w-11/12 mx-auto my-2'>
                <p>© All Right Reserved. ILius MaHfuZ</p>
                <p>DreemJob LLC</p>
            </div>
        </div>
    );
};

export default Footer;