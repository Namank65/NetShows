import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import VideoFullInfo from './VideoFullInfo';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/videoInfo",
            element: <VideoFullInfo />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default Body;