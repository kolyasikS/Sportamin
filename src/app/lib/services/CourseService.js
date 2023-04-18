import $api from "@/app/lib/http";

export default class CourseService {
    static async create(course, trainerID) {
        return $api.post('/course/create', {course, trainerID});
    }
    static async get(query, sort) {
        console.log('sort', sort);
        let newQuery = {};
        if (query.title) {
            newQuery = {
                regex: query.title.$regex,
                options: query.title.$options,
            }
        }
        if (sort) {
            newQuery.sort = sort
        }
        return $api.get('/course', {
            params: {
                ...newQuery
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

