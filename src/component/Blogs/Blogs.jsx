/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-14 mb-7'>
            <h1 className='text-3xl font-semibold text-center bg-blue-100 py-14'>Frequently Interview Asked <span className='text-pink-600'>Questions</span></h1>
            <div className='w-11/12 mx-auto my-5'>
                <h3 className='font-semibold mt-3 mb-1 hover:text-pink-500'>Q1: When should you use context API?</h3>
                <div><span className='font-semibold'>Answer: </span>
                    The Context API in React is primarily used when you need to share state or data between multiple components without explicitly passing it through props at every level. It provides a way to manage global state and allows components to access that state without having to pass it down through every level of the component tree.

                    Here are some scenarios where you might consider using the Context API:

                    <ol>
                        <li><span className='font-semibold'>Theme or Styling:</span> If you have a theme or styling configuration that needs to be accessed by multiple components, you can use the Context API to provide the theme data to all the components in your application.</li>
                        <li>
                            <span className='font-semibold'>Localization:</span> When you have an application that needs to support multiple languages or locales, you can use the Context API to provide the current language or locale to the components that need it.
                        </li>
                        <li>
                            <span className='font-semibold'>User Authentication:</span> If you have an application with user authentication, you can use the Context API to store the users authentication status and provide it to components that need to know if the user is authenticated.
                        </li>
                        <li>
                            <span className='font-semibold'>Data Fetching:</span> When fetching data from an API, you can use the Context API to manage the state of the data and provide it to components that need to display or manipulate that data.
                        </li>
                        <li>
                            <span className='font-semibold'>Navigation:</span> If you have a navigation component or a menu that needs to know the currently active route or page, you can use the Context API to provide that information to the relevant components.
                        </li>
                    </ol>
                </div>
                <h3 className='font-semibold mt-3 mb-1 hover:text-pink-500'>Q2: What is a custom hook?</h3>
                <p>
                    <span className='font-semibold'>Answer: </span>
                    A custom hook in React is a JavaScript function that allows you to reuse logic across different components. Custom hooks are created by extracting reusable logic from components and placing it into a separate function. They enable you to share stateful logic, side effects, or any other functionality between multiple components without duplicating code.
                </p>
                <h3 className='font-semibold mt-3 mb-1 hover:text-pink-500'>Q3: What is useRef?</h3>
                <p><span className='font-semibold'>Answer: </span> useRef is a built-in hook in React that allows you to create a mutable value that persists across renders of a component. Unlike state variables (useState), the value stored in a useRef does not trigger a re-render when it changes. It provides a way to access and store references to DOM elements or any other mutable value within a functional component.</p>
                <h3 className='font-semibold mt-3 mb-1 hover:text-pink-500'>Q4: What is useMemo?</h3>
                <p><span className='font-semibold'>Answer: </span>
                    useMemo is a built-in hook in React that allows you to memoize the result of a function call and cache it so that it is only recomputed when the dependencies change. It helps optimize the performance of your React components by avoiding unnecessary re-computations of expensive calculations or complex operations.
                </p>
            </div>
        </div>
    );
};

export default Blogs;