import $api from "@/app/lib/http";

export default class CourseService {
    static async create(course, trainerID) {
        return $api.post('/course/create', {course, trainerID});
    }
    static async get(query, sort, limit, skip) {
        let newQuery = {
            limit,
            skip
        };
        if (query?.title) {
            newQuery = {
                ...newQuery,
                regex: query.title.$regex,
                options: query.title.$options,
            }
        }
        if (query?.rating) {
            newQuery.rating = query.rating.$gte;
        }
        if (query?.languages) {
            newQuery.languages = query.languages.$all.join(',');
        }
        if (query?.id) {
            newQuery.id = query.id;
        }
        if (query?.trainer) {
            newQuery.trainer = query.trainer;
        }
        if (query?.range) {
            newQuery.range = [query.range.min, query.range.max].join(',');
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
    static async update(id, updatedCourse) {
        return $api.put('/course/edit', {
            id,
            updatedCourse
        });
    }
    static async delete(id) {
        return $api.delete(`/course/delete/${id}`);
    }
    static async newSubscriber(id) {
        return $api.put('/course/subscribe', {
            id
        });
    }
}

