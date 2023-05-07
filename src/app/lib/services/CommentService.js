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
}

