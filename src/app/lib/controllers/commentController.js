import CommentService from "@/app/lib/services/CommentService";

export async function getComments(postId, repliedCommentId, limit, skip) {
    try {
        console.log(repliedCommentId);
        const res = await CommentService.get(postId, repliedCommentId, limit, skip)
            .then(res => res.data);
        return res;
    } catch (e) {
        console.log(e?.response?.data);
    }
}
