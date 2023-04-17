import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import CourseService from "@/app/server/services/course-service";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'GET':
                /*const {query, sort} = req.body;*/
                const courses = await CourseService.getCourses();
                res.status(200).json(courses);
                break;
            default:
                break;
        }
    });
}

