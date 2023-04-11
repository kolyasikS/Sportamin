import AuthService from "@/app/lib/services/AuthService";
import {setAuth, setUser} from "@/app/lib/store/actions/authActions";
import axios from "axios";
import {API_URL} from "@/app/lib/http";

export async function login(dispatch, email, password) {
    try {
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));

        return true;
    } catch (e) {
        console.log(e?.response?.data);
        return false;
    }
}
export async function registration(dispatch, email, password) {
    try {
        const response = await AuthService.registration(email, password);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));

        return true;
    } catch (e) {
        console.log(e?.response?.data);
    }
}
export async function logout(dispatch) {
    try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        dispatch(setAuth(false));
        dispatch(setUser({}));
    } catch (e) {
        console.log(e?.response?.data);
    }
}
export async function checkAuth(dispatch, cb) {
    try {
        const response = await axios.get(`${API_URL}/user/refresh`, {withCredentials: true});
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e) {
        console.log(e?.response?.data);
    } finally {
        cb();
    }
}
export const authenticate = async (router) => {
    await router.push('/login').then();
}
