import axios from "axios";

export const API_URL = 'http://localhost:3000/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    switch (config.url) {
        case '/course/create':
        case '/user/buy':
        case '/user/updateStatus':
        case '/comment/rate':
        case '/comment/create':
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    if (config.url.startsWith(`/comment/delete`) ||
        config.url.startsWith(`/course/delete`)) {
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    console.log(config);
    return config;
});

export default $api;