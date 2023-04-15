import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import courseService from "@/app/server/services/course-service";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";
async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'POST':
                const {course, trainerID} = req.body;
                const result = await courseService.create(course, trainerID);
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