import axios from "axios";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const API_URL = `${publicRuntimeConfig.API_URL}/api`;

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
    return config;
});

export default $api;