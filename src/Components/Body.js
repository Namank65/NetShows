import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
// import VideoFullInfo from './VideoFullInfo';
import Loader from './Loader/Loader';
// import Login from './Login';
// import Browse from './Browse';



const Login = lazy(() => import('./Login'));
const Browse = lazy(() => import('./Browse'));
const VideoFullInfo = lazy(() => import('./VideoFullInfo'));


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
            <Suspense fallback={<Loader/>}>
            <RouterProvider router={appRouter} />
            </Suspense>
        </div>
    )
};

export default Body;