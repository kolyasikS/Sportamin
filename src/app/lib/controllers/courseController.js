import {setStatus} from "@/app/lib/store/actions/courseActions";
import {statuses} from "@/app/lib/store/constants/generalConstants";
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
export async function getCourses(query, sort, limit, skip) {
    try {
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
        if (dispatch) {
            dispatch(setStatus(statuses.CREATING));
        }
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
export async function newSubscriber(courseId) {
    try {
        await CourseService.newSubscriber(courseId);
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