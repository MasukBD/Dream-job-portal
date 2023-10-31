/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AllJobsDataContext } from '../LayOut/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faBriefcase, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilites/localDB';
import toast from 'react-hot-toast';

const JobDetails = () => {
    const getId = useLoaderData();
    const getData = useContext(AllJobsDataContext);
    const aData = getData.find(job => job.id == getId)
    const { companyLogo, id, jobTitle, companayName, contactInformation, educationalRequirement, experience, fullTimeOrPartTime, jobDescription, jobResponsibility
        , location, remoteOrOnsite, salary } = aData;

    const handleDb = (id) => {
        addToDb(id);
        toast.success('Applied Job Successfully!')
    }

    return (

        <div className='mt-14'>
            <h1 className='text-3xl font-semibold text-center bg-blue-100 py-14'>Job Details</h1>
            <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 my-16 gap-7'>
                <div className='col-span-2'>
                    <p className='my-5'><span className='font-semibold'>Job Description: </span> {jobDescription}</p>
                    <p className='my-5'><span className='font-semibold'>Job Responsibility: </span>{jobResponsibility}</p>
                    <p className='my-5'><span className='font-semibold'>Educational Requirement: </span> <br />{educationalRequirement}</p>
                    <p className='my-5'><span className='font-semibold'>Experience: </span> <br />{experience}</p>
                    <p className='my-5'><span className='font-semibold'>Company: </span> <br />{companayName}</p>
                </div>
                <div className='bg-blue-100 py-5 px-3 flex flex-col'>
                    <h3 className='font-semibold mb-2'>Job Details</h3>
                    <hr className='border border-black mb-2' />
                    <p> <span> <FontAwesomeIcon icon={faDollar} /> </span> <span className='font-semibold'>Salary: </span> {salary}</p>
                    <p className='my-1'><span><FontAwesomeIcon icon={faBriefcase} /></span> <span className='font-semibold'>Job Title: </span>{jobTitle}</p>
                    <h4 className='font-semibold my-2'>Contact Information</h4>
                    <p><span><FontAwesomeIcon icon={faPhone} /></span> <span className='font-semibold'>Phone: </span>{contactInformation.phoneNumber}</p>
                    <p className='my-2'><span><FontAwesomeIcon icon={faEnvelope} /></span> <span className='font-semibold'>Email: </span>{contactInformation.email}</p>
                    <p className='my-2'><span><FontAwesomeIcon icon={faLocationDot} /></span> <span className='font-semibold'>Address: </span>{contactInformation.address.city}, {contactInformation.address.country}</p>
                    <p className='mt-auto'><Link to="/"><button onClick={() => handleDb(id)} className='all-btn w-full'>Apply Now</button></Link></p>
                </div>
            </div>
            <p className='text-center'><Link to="/"><button className='all-btn mx-auto'>Back To Main Page</button></Link></p>
        </div>
    );
};

export default JobDetails;