import $api from "@/app/lib/http";
import {updateBoughtCourseStatus} from "@/app/lib/controllers/userController";

export default class UserService {
    static getUsers(query, sort) {
        const res = $api.post('/users', {
            query,
            sort
        });
        return res;
    }
    static getTrainer(id) {
        const res = $api.post('/trainer', {
            id,
        });
        return res;
    }
    static updateUser(query, updatedUser) {
        return $api.put('/user/edit', {
            query,
            updatedUser
        });
    }
    static updateBoughtCourseStatus(userId, courseId, status) {
        return $api.put('/user/updateStatus', {
            userId,
            courseId,
            status
        });
    }
    static buyCourse(trainerId, userId, courseId) {
        return $api.put('/user/buy', {
            trainerId,
            userId,
            courseId
        });
    }
}