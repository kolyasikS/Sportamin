import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import sendEmail from "@/app/lib/features/sendEmail/sendEmail";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        switch (method) {
            case 'POST':
                const {name, message} = req.body;
                await sendEmail(name, message);
                res.status(200).json({isSuccess: true});
        }
    });
}
