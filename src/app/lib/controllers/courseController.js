import AuthService from "@/app/lib/services/AuthService";
import {setAuth, setUser} from "@/app/lib/store/actions/authActions";
import axios from "axios";
import {API_URL} from "@/app/lib/http";
import {setStatus} from "@/app/lib/store/actions/courseActions";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import CourseService from "@/app/lib/services/CourseService";
import UserService from "@/app/lib/services/UserService";

export async function createCourse(dispatch, course, trainerID) {
    try {
        const response = await CourseService.create(course, trainerID);
        dispatch(setStatus(statuses.CREATING));
        return response;
    } catch (e) {
        console.log(e?.response?.data);
        return null;
    }
}
export async function getCourses(query, sort) {
    try {
        const res = await CourseService.get(query, sort).then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}

export async function updateCourse(id, updatedCourse) {
    try {
        await CourseService.update(id, updatedCourse);
    } catch (e) {
        console.log(e?.response?.data);
    }
}