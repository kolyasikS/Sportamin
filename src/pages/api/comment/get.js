import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";
import commentService from "@/app/server/services/comment-service";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'GET':
            const {postId, repliedCommentId, limit, skip} = req.query;
            const result = await commentService.get(postId, repliedCommentId, limit, skip);

            res.status(200).json(result);
    }
}

export default async (req, res) => {
    return withApiErrorMiddleware(req, res, handler);
};