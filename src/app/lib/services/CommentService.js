import $api from "@/app/lib/http";

export default class CourseService {
    static async get(postId, repliedCommentId, limit, skip) {
        return $api.get('/comment/get', {
            params: {
                postId,
                limit,
                skip,
                repliedCommentId
            }
        });
    }
    static async rate(userId, postId, commentId, rating) {
        return $api.patch('/comment/rate', {
            userId, postId, commentId, rating
        });
    }
    static async create(trainerId, courseId, message, repliedCommentId, initCommId) {
        return $api.post('/comment/create', {
            trainerId, courseId, message, repliedCommentId, initCommId
        });
    }
    static async delete(id, initCommId) {
        if (initCommId) {
            return $api.delete(`/comment/delete/${id}/${initCommId}`);
        } else {
            return $api.delete(`/comment/delete/${id}`);
        }
    }
}

