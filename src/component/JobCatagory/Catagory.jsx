/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Catagory = ({ item }) => {
    const { title, image, job_amount } = item;
    return (
        <div className='bg-gray-100 px-5 py-10 cursor-pointer rounded-md'>
            <img src={image} alt="" />
            <h3 className='font-bold mt-4 mb-1'>{title}</h3>
            <p>{job_amount} available jobs</p>
        </div>
    );
};

export default Catagory;