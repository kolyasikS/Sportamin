import ApiError from "@/app/server/exceptions/api-error";
import tokenService from "@/app/server/services/token-service";

export default async function withAuthMiddleware(req) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        throw ApiError.UnauthorizedError();
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
        throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
        throw ApiError.UnauthorizedError();
    }
    req.user = userData;
}