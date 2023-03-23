import ApiError from "@/app/server/exceptions/api-error";
import stackMiddlewares from "@/app/server/middlewares/stackMiddlewares";
import withAuthMiddleware from "@/app/server/middlewares/authMiddleware";

async function withApiErrorMiddleware(req, res, handler, middlewares) {
    try {
        //await withAuthMiddleware(req, res);
        await stackMiddlewares(req, res, middlewares);
        await handler(req, res);
    } catch (err) {
        console.log(err);
        if (err instanceof ApiError) {
            return res.status(err.status).json({message: err.message, errors: err.errors});
        }
        return res.status(500).json({message: 'Internal server error'});
    }
}
export default withApiErrorMiddleware;