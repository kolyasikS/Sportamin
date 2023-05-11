import dbConnect from "@/app/server/DB/dbConnect";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import courseService from "@/app/server/services/course-service";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";

async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'DELETE':
                const {id} = req.query;
                await courseService.delete(id);
                res.status(200).json({isSuccess: true});
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