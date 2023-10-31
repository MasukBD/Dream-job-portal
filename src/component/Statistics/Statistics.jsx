/* eslint-disable no-unused-vars */
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Statictic.css'

const Statistics = () => {
    // The assignment mark is just for showing Chart not any actual value 
    const studentAssignments = [
        { id: 1, assignmentNumber: 'Assignment 1', obtainedMark: 58, totalMark: 60 },
        { id: 1, assignmentNumber: 'Assignment 2', obtainedMark: 60, totalMark: 60 },
        { id: 1, assignmentNumber: 'Assignment 3', obtainedMark: 46, totalMark: 60 },
        { id: 1, assignmentNumber: 'Assignment 4', obtainedMark: 60, totalMark: 60 },
        { id: 1, assignmentNumber: 'Assignment 5', obtainedMark: 56, totalMark: 60 },
        { id: 1, assignmentNumber: 'Assignment 6', obtainedMark: 50, totalMark: 60 },
        { id: 1, assignmentNumber: 'Assignment 7', obtainedMark: 60, totalMark: 60 },
    ];

    return (
        <>
            <div className='statictics'>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={studentAssignments}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="assignmentNumber" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="obtainedMark" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <p className='my-6 font-semibold text-center px-3'>Figure: Simple Implemetation of Area Chart for Obtained Marks Using Rechart</p>
        </>
    );
};

export default Statistics;