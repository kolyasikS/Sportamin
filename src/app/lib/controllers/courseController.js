import AuthService from "@/app/lib/services/AuthService";
import {setAuth, setUser} from "@/app/lib/store/actions/authActions";
import axios from "axios";
import {API_URL} from "@/app/lib/http";
import {setStatus} from "@/app/lib/store/actions/courseActions";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import CourseService from "@/app/lib/services/CourseService";
import UserService from "@/app/lib/services/UserService";
import {checkAuth} from "@/app/lib/controllers/authController";

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
export async function getCourses(query, sort, limit, skip) {
    try {
        console.log('query', query);
        const res = await CourseService.get(query, sort, limit, skip)
            .then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}

export async function updateCourse(dispatch, id, updatedCourse) {
    try {
        await CourseService.update(id, updatedCourse);
        dispatch(setStatus(statuses.CREATING));
    } catch (e) {
        console.log(e?.response?.data);
    }
}
export async function rateCourse(dispatch, id, rating, newRating) {
    try {
        rating = {
            avgValue: (rating.count * rating.avgValue + newRating) / (rating.count + 1),
            count: rating.count + 1
        }
        await CourseService.update(id, {$set: {rating}});
        return {isSuccess: true};
    } catch (e) {
        console.log(e?.response?.data);
        console.log(e);
        return {isSuccess: false};
    }
}

export async function deleteCourse(id) {
    try {
        await CourseService.delete(id);
    } catch (e) {
        console.log(e?.response?.data);
    }
}