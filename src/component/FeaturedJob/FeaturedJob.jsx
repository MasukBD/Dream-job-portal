/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AllJobsDataContext } from '../LayOut/Main';
import EachJob from '../EachJob/EachJob';

const FeaturedJob = () => {
    const jobData = useContext(AllJobsDataContext);
    const [show, setShow] = useState(false);
    return (
        <div className='my-8'>
            <h2 className='text-3xl font-bold text-center'>Featured Jobs</h2>
            <p className='w-11/12 mx-auto text-center'>Here is the List of your dream job. See details and drop your CV..</p>
            <div className='w-11/12 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 my-10'>
                {
                    show ? jobData.map(job => <EachJob job={job} key={job.id}></EachJob>) : jobData.slice(0, 4).map(job => <EachJob job={job} key={job.id}></EachJob>)
                }
            </div>
            {
                show ? '' : <p onClick={() => setShow(!show)} className='text-center my-5'><button className='all-btn'>Show All</button></p>
            }
        </div>
    );
};

export default FeaturedJob;