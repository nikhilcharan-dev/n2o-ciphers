import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'));
const Navbar = lazy(() => import('./components/NavBar/Navbar.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Register = lazy(() => import('./pages/Register/Register.jsx'));
const ChangePassword = lazy(() => import('./pages/ChangePassword/ChangePassword.jsx'));
const LearningPath = lazy(() => import('./pages/LearningPath/LearningPath.jsx'));
const Explore = lazy(() => import('./pages/Explore/Explore.jsx'));
const GIGTrack = lazy(() => import('./pages/GIGTrack/GIGTrack.jsx'));
const Test = lazy(() => import('./pages/Test/Test.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));

const router = createBrowserRouter([
    { path: '/',
        element: <Navbar />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'explore', element: <div> Explore </div> },
            { path: 'gig-track', element: <div> GIG Track </div> },
            { path: 'test', element: <div> TEST </div> },
            { path: 'about', element: <div> About </div> },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/user/register',
        element: <Register />,
    },
    {
        path: '/user/change-password',
        element: <ChangePassword />,
    },
    {
        path: '/learning-path',
        element: <LearningPath />,
    },
    {
        path: '/explore',
        element: <Explore />,
    },
    {
        path: '/gig-track',
        element: <GIGTrack />,
    },
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '*',
        element:
            <div style={{ textAlign: 'center', paddingTop: '5%' }}>
                Under Construction!!!
            </div>
    }
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;