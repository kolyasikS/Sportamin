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
    async get(postId, limit, skip) {
        let repliedOn = {$exists: false};
        let comments = await CommentModel.find({courseId: postId, repliedOn})
            .limit(limit)
            .skip(skip)

        let repliesComments = [];
        for (let i = 0; i < comments.length; i++) {
            let res = await CommentModel.find({courseId: postId, repliedOn: comments[i]._id});
            repliesComments.push(res);
        }
        let totalComments = await CommentModel.countDocuments({courseId: postId});
        return {
            comments,
            repliesComments,
            totalComments
        };
    }
    async getReplies(postId, repliedCommentId) {
        let comments = await CommentModel.find({courseId: postId, repliedOn: repliedCommentId});
        if (comments.length) {
            for (let i = 0; i < comments.length; i++) {
                let newComments = await this.getReplies(postId, comments[i]._id);
                if (newComments && newComments.length) {
                    comments.push(...newComments);
                }
            }
            return comments;
        } else {
            return comments;
        }
    }
}

export default new CommentService();
