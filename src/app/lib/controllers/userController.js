import axios from "axios";
import {API_URL} from "@/app/lib/http";
import UserService from "@/app/lib/services/UserService";
import {setUser} from "@/app/lib/store/actions/authActions";
import {checkAuth} from "@/app/lib/controllers/authController";

export async function getUsers(query, sort) {
    try {
        const res = await UserService.getUsers(query, sort).then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);

    }
}
export async function getTrainer(id) {
    try {
        const res = await UserService.getTrainer(id).then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}

export async function updateUser(query, updatedUser) {
    try {
        await UserService.updateUser(query, updatedUser);
    } catch (e) {
        console.log(e?.response?.data);
    }
}

export async function buyCourse(dispatch, userId, courseId) {
    try {
        await UserService.buyCourse(userId, courseId);
        await checkAuth(dispatch);
    } catch (e) {
        console.log(e?.response?.data);
    }
}