import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import courseService from "@/app/server/services/course-service";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'POST':
                const {query, sort} = req.body;
                const courses = await courseService.getCourses(query, sort);
                res.status(200).json(courses);
        }
    });
}


