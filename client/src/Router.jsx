import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    { path: '/', element: <h1>HOME</h1> },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;