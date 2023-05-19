import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";
import commentService from "@/app/server/services/comment-service";
async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'PATCH':
                const {userId, postId, commentId, rating} = req.body;
                const result = await commentService.rate(userId, postId, commentId, rating);
                res.status(200).json(result);
        }
    });
}

export default async (req, res) => {
    const middlewares = [withAuthMiddleware];
    return withApiErrorMiddleware(req, res,
        handler,
        middlewares,
    );
};