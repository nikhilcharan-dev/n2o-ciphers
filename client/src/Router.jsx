import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.jsx';
import Navbar from "./components/NavBar/Navbar.jsx";
import Login from './pages/login/Login.jsx';
const router = createBrowserRouter([
    { path: '/',
        element: <Navbar />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'explore', element: <div> Explore </div> },
            { path: 'gig-track', element: <div> GIG Track </div> },
            { path: 'test', element: <div> TEST </div> },
            { path: 'about', element: <div> About </div> },
            { path: 'login', element: <Login/> },
            
        ]
    }
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Router;