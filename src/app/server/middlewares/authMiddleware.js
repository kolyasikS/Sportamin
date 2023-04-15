import ApiError from "@/app/server/exceptions/api-error";
import tokenService from "@/app/server/services/token-service";

export default async function withAuthMiddleware(req, res) {
    const authorizationHeader = req.headers.authorization;
    console.log(authorizationHeader);
    if (!authorizationHeader) {
        throw ApiError.UnauthorizedError();
    }

    const accessToken = authorizationHeader.split(' ')[1];
    console.log(accessToken);
    if (!accessToken) {
        throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateAccessToken(accessToken);
    console.log(userData);
    if (!userData) {
        throw ApiError.UnauthorizedError();
    }
    req.user = userData;
}