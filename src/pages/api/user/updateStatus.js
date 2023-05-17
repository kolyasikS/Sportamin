import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";

async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'PUT':
            const {userId, courseId, status} = req.body;
            const users = await userService.updateStatus(userId, courseId, status);
            return res.json(users);
    }
}

export default async (req, res) => {
    const middlewares = [withAuthMiddleware];
    return withApiErrorMiddleware(req, res,
        handler,
        middlewares,
    );
};
