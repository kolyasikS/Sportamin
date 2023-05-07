import {Schema} from "mongoose";
import CommentModel from "@/app/server/models/comment-model";

class CommentService {
    async create(trainerId, postId, message, repliedCommentId) {
        const currentDate = new Date();
        await CommentModel.create({trainerId, courseId: postId, message,
            publishedTime: currentDate, repliedOn: repliedCommentId});
    }
    async rate(rating) {
        if (rating >= 0) {

        } else {

        }
    }
    async delete(id) {

    }
    async get(postId, repliedCommentId, limit, skip) {
        let repliedOn = repliedCommentId ? repliedCommentId : {$exists: false};
        let comments = await CommentModel.find({courseId: postId, repliedOn})
            .limit(limit).skip(skip);

        return comments;
    }
}

export default new CommentService();
