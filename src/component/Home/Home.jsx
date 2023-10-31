/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import bannerAnimation from '../../banneranimation.json'
import JobCatagory from '../JobCatagory/JobCatagory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <>
            <div className='my-14 bg-blue-100 pt-3'>
                <div className='w-11/12 mx-auto flex flex-col gap-7 lg:flex-row items-center'>
                    {/* banner section  */}
                    <div className='w-11/12 mx-auto lg:w-1/3'>
                        <h1 className='text-4xl lg:text-5xl font-bold tracking-wide'>One Step <br />Closer To Your <br /><span className=' text-pink-600 '>Dream</span><span className='text-blue-800'>Job</span></h1>
                        <p className='my-2'>Explore thousend of job opertunities and informations. Make a Good CV and drop it to your dream job position. To learn how build a modern CV press the button below.</p>
                        <button className='all-btn my-1'>Get Started</button>
                    </div>
                    <div className='w-11/12 mx-auto lg:w-1/2'>
                        <Lottie animationData={bannerAnimation} loop={true} />
                    </div>
                </div>
            </div>
            <JobCatagory></JobCatagory>
            <FeaturedJob></FeaturedJob>
        </>
    );
};

export default Home;