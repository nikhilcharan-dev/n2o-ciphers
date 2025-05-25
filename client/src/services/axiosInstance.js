import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const Axios = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    timeout: 5000,
});

// Request interceptor
Axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    }, (err) => {
        return Promise.reject(err);
    }
);

// Response interceptor
Axios.interceptors.response.use(
    (response) => {
        return response;
    }, (err) => {
        if (err.response.status === 401) {
            alert('Your session has expired. Please log in again.');
            localStorage.removeItem('accessToken');
            window.location.href = '/Login';
        } else {
            alert('An error occurred. Please try again later.');
        }
        return Promise.reject(err);
    }
);


export default Axios;