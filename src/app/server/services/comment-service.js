import {Schema} from "mongoose";
import CommentModel from "@/app/server/models/comment-model";
import {ObjectId} from "mongodb";

class CommentService {
    async create(trainerId, postId, message, repliedCommentId, initCommId) {
        const currentDate = new Date();
        let comment;
        await CommentModel.create({trainerId, courseId: postId, message,
            publishedTime: currentDate, repliedOn: repliedCommentId}).then((res) => {
                comment = res
        });
        if (initCommId) {
            await CommentModel.updateOne(
                {_id: new ObjectId(initCommId)},
                {$inc: {amountReplies: 1}}
            );
        }
        return comment;
    }
    async rate(userId, postId, commentId, rating) {
        let comment = await CommentModel.findOne({courseId: postId, _id: new ObjectId(commentId)});
        let update;
        if (rating >= 0) {
            if (comment.liked.includes(userId)) {
                update = {$pull: {liked: userId}};
            } else {
                update = {$push: {liked: userId}};
            }
        } else {
            if (comment.disliked.includes(userId)) {
                update = {$pull: {disliked: userId}};
            } else {
                update = {$push: {disliked: userId}};
            }
        }
        await CommentModel.updateOne(
            {courseId: postId, _id: new ObjectId(commentId)},
            update);
    }
    async delete(ids) {
        if (ids[1]) {
            await CommentModel.deleteOne({_id: new ObjectId(ids[0])});
            await CommentModel.updateOne({_id: new ObjectId(ids[1])},
                {$inc: {amountReplies: -1}});
        } else {
            await this.deleteReplies(ids[0]);
        }
    }
    async deleteReplies(id) {
        await CommentModel.deleteOne({_id: new ObjectId(id)});
        let replies = await CommentModel.find({repliedOn: new ObjectId(id)});
        for (let i = 0; i < replies.length; i++) {
            await this.deleteReplies(replies[i]._id);
        }
    }
    async get(postId, limit, skip) {
        let repliedOn = {$exists: false};
        let comments = await CommentModel.find({courseId: postId, repliedOn})
            .limit(limit)
            .skip(skip)

        let totalComments = await CommentModel.countDocuments({courseId: postId});
        return {
            comments,
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
