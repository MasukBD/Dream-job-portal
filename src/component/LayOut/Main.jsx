/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

export const AllJobsDataContext = createContext([]);

const Main = () => {
    const { jobData } = useLoaderData();
    return (
        <AllJobsDataContext.Provider value={jobData}>
            <Header></Header>
            <Toaster></Toaster>
            <Outlet></Outlet>
            <Footer></Footer>
        </AllJobsDataContext.Provider>
    );
};

export default Main;