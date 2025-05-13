import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
    {
        path: '/home', element: <h1>HOME</h1>
    }
]

const App = () => {

    return (
        <Suspense fallback={null}>
            <RouterProvider router={createBrowserRouter(routes)} >
            </RouterProvider>
        </Suspense>
    );
}

export default App;
// add loading element in suspense