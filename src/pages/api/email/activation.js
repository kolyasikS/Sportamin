/* eslint-disable no-case-declarations */
import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import mailService from "@/app/server/services/mail-service";
export default async function handler(req, res) {
    return withApiErrorMiddleware(req, res, async () => {
        const { method } = req;
        switch (method) {
            case 'POST':
                const {email} = req.body;
                await mailService.sendActivationMail(email);
                res.status(200).json({isSuccess: true});
        }
    });
}
