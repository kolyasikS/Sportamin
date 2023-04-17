import $api from "@/app/lib/http";

export default class CourseService {
    static async create(course, trainerID) {
        return $api.post('/course/create', {course, trainerID});
    }
    static async get(query, sort) {
        return $api.get('/course/get', {
            params: {
                query,
                sort
            }
        });
    }
    static update(id, updatedCourse) {
        return $api.put('/course/edit', {
            id,
            updatedCourse
        });
    }
}

