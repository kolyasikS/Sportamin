import withApiErrorMiddleware from "@/app/server/middlewares/apiErrorMiddleware";
import dbConnect from "@/app/server/DB/dbConnect";
import userService from "@/app/server/services/user-service";
export default async function handler(req, res) {
  return withApiErrorMiddleware(req, res, async () => {
    const { method } = req;
    await dbConnect();
    switch (method) {
      case 'POST':
        const {email} = req.body;
        const user = await userService.test(email);
        const data = user[0].avatar;
        res.status(200).json(data);
    }
  });
}