import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/dashboard', element: <div>DashBoard</div>}
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;