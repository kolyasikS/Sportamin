import axios from "axios";
import {API_URL} from "@/app/lib/http";
import UserService from "@/app/lib/services/UserService";
import {setUser} from "@/app/lib/store/actions/authActions";
import {checkAuth} from "@/app/lib/controllers/authController";
import {newSubscriber, updateCourse} from "@/app/lib/controllers/courseController";

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
export async function updateBoughtCourseStatus(userId, courseId, status) {
    try {
        await UserService.updateBoughtCourseStatus(userId, courseId, status);
    } catch (e) {
        console.log(e?.response?.data);
    }
}

export async function buyCourse(dispatch, trainerId, userId, courseId) {
    try {
        await UserService.buyCourse(trainerId, userId, courseId);
        await newSubscriber(courseId);
        await checkAuth(dispatch);
    } catch (e) {
        console.log(e?.response?.data);
    }
}