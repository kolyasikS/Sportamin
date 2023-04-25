import dbConnect from "@/app/server/DB/dbConnect";
import apiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import courseService from "@/app/server/services/course-service";
async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    switch (method) {
        case 'DELETE':
            const {id} = req.body;
            await courseService.delete(id);
            res.status(200).json({isSuccess: true});
    }
}

export default async (req, res) => await apiErrorMiddleware(req, res, handler);

