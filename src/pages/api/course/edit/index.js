import userService from "@/app/server/services/user-service";
import dbConnect from "@/app/server/DB/dbConnect";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import courseService from "@/app/server/services/course-service";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'PUT':
            const {id, updatedCourse} = req.body;
            await courseService.update(id, updatedCourse);
            res.status(200).json({isSuccess: true});
    }
}

export default async (req, res) => await apiErrorMiddleware(req, res, handler);

