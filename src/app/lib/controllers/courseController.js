import AuthService from "@/app/lib/services/AuthService";
import {setAuth, setUser} from "@/app/lib/store/actions/authActions";
import axios from "axios";
import {API_URL} from "@/app/lib/http";
import {setStatus} from "@/app/lib/store/actions/courseActions";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import CourseService from "@/app/lib/services/CourseService";

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