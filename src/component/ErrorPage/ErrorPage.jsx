/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const errors = useRouteError();
    const { status, statusText, data } = errors;
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <h1 className='text-8xl font-semibold text-orange-500'>{status}</h1>
            <h3 className='text-3xl font-medium'>{statusText}</h3>
            <p className='text-xl font-medium'>Message: {data}</p>
        </div>
    );
};

export default ErrorPage;