/* eslint-disable no-unused-vars */
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statictic.css'

const Statistics = () => {
    // The assignment mark is just for showing Chart not any actual value 
    const jobStatictis = [
        { id: 1, years: '2017', getJobs: 588, totalJobs: 1200 },
        { id: 1, years: '2018', getJobs: 680, totalJobs: 1200 },
        { id: 1, years: '2019', getJobs: 655, totalJobs: 1200 },
        { id: 1, years: '2020', getJobs: 722, totalJobs: 1200 },
        { id: 1, years: '2021', getJobs: 812, totalJobs: 1200 },
        { id: 1, years: '2022', getJobs: 877, totalJobs: 1200 },
        { id: 1, years: '2023', getJobs: 999, totalJobs: 1200 },
    ];

    return (
        <>
            <div className='statictics'>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={jobStatictis}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="assignmentNumber" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="getJobs" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <p className='my-6 font-semibold text-center px-3'>Figure: Simple Implemetation of Area Chart for Our Portal Data Using Rechart</p>
        </>
    );
};

export default Statistics;