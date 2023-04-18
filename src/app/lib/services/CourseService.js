import $api from "@/app/lib/http";

export default class CourseService {
    static async create(course, trainerID) {
        return $api.post('/course/create', {course, trainerID});
    }
    static async get(query, sort) {
        console.log('sort', query);
        let newQuery = {};
        if (query.title) {
            newQuery = {
                regex: query.title.$regex,
                options: query.title.$options,
            }
        }
        if (query.rating) {
            newQuery.rating = query.rating.$gte;
        }
        if (query.languages) {
            newQuery.languages = query.languages.$all.join(',');
        }
        if (sort) {
            newQuery.sort = sort
        }
        console.log('newQuery', newQuery);
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

