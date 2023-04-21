import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import userService from "@/app/server/services/user-service";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        await dbConnect();
        switch (method) {
            case 'POST':
                const {query, sort} = req.body;
                const trainers = await userService.getTrainers(query, sort);
                res.status(200).json(trainers);
        }
    });
}

