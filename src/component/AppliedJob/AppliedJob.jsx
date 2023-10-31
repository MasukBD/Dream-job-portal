/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { getappliedJob } from '../../utilites/localDB';
import { AllJobsDataContext } from '../LayOut/Main';
import EachAppliedJob from '../EachAppliedJob/EachAppliedJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const AppliedJob = () => {
    const [applied, setApplied] = useState([]);
    const localData = getappliedJob();
    const allJobData = useContext(AllJobsDataContext);
    useEffect(() => {
        let storedJob = [];
        for (const id in localData) {
            const allAppliedJob = allJobData.find(job => job.id == id);
            storedJob.push(allAppliedJob);
        }
        setApplied(storedJob);
    }, []);
    return (
        <div className='mt-14 mb-7'>
            <h1 className='text-3xl font-semibold text-center bg-blue-100 py-14'>Applied <span className='text-pink-600'>Jobs</span></h1>
            <p className=' flex w-11/12'><button className='border px-1 my-7 ml-auto'>Filter by <FontAwesomeIcon icon={faAngleDown} /></button></p>
            {
                applied.length === 0 && <p className='text-center text-2xl font-bold my-20'>No Applied Jobs!</p>
            }
            <div className='w-11/12 lg:w-2/3 mx-auto flex flex-col gap-7 my-3'>
                {
                    applied.map(job => <EachAppliedJob job={job} key={job.id}></EachAppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;