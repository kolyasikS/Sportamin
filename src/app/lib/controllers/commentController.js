import CommentService from "@/app/lib/services/CommentService";

export async function getComments(postId, repliedCommentId, limit, skip) {
    try {
        const res = await CommentService.get(postId, repliedCommentId, limit, skip)
            .then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}
export async function rateComment(userId, postId, commentId, rating) {
    try {
        const res = await CommentService.rate(userId, postId, commentId, rating)
            .then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}
export async function createComment(userId, postId, message, repliedCommentId, initCommId) {
    try {
        const res = await CommentService.create(userId, postId, message, repliedCommentId, initCommId)
            .then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}
export async function deleteComment(id, initCommId) {
    try {
        const res = await CommentService.delete(id, initCommId)
            .then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
        return {
            error: e
        };
    }
}
