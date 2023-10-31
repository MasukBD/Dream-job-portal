/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Catagory from './Catagory';

const JobCatagory = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(() => {
        fetch('catagory.json')
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, []);
    return (
        <div className='w-11/12 mx-auto my-6'>
            <h2 className='text-3xl font-bold text-center'>Job Category List</h2>
            <p className='text-center'>Explore your dream job and build a sustainable world and better future..</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 py-3 my-3 gap-4 lg:gap-9'>
                {
                    catagory.map((item, index) => <Catagory item={item} key={index}></Catagory>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;