import $api from "@/app/lib/http";

export default class CourseService {
    static async create(course, trainerID) {
        return $api.post('/course/create', {course, trainerID});
    }
}

