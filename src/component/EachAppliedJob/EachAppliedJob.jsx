/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const EachAppliedJob = ({ job }) => {
    const { id, companyLogo, jobTitle, remoteOrOnsite, location, contactInformation, fullTimeOrPartTime, companayName, salary } = job;
    return (
        <div className='border-2 p-3 flex flex-col lg:flex-row items-center gap-2'>
            <div className='flex flex-col lg:flex-row gap-5'>
                <img className='w-1/2 lg:w-1/4' src={companyLogo} alt="" />
                <div>
                    <h3 className='font-bold'>{jobTitle}</h3>
                    <h3 className='text-sm font-medium text-gray-500'>{companayName}</h3>
                    <p className='flex gap-6 my-2'><span className='border-2 border-pink-500 p-0.5 rounded-sm'>{remoteOrOnsite}</span><span className='border-2 border-pink-500 p-0.5 rounded-sm'>{fullTimeOrPartTime}</span></p>
                    <div className='flex flex-col lg:flex-row gap-3 lg:gap-7'>
                        <p><span><FontAwesomeIcon icon={faLocationDot} /></span> <span> {location}</span></p>
                        <p> <span><FontAwesomeIcon icon={faDollar} />Salary: </span><span> {salary}</span></p>
                    </div>
                </div>
            </div>
            <Link to={`/${id}`}><button className='all-btn'>View Details</button></Link>
        </div>
    );
};

export default EachAppliedJob;