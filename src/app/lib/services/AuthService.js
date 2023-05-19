import $api from "@/app/lib/http";

export default class AuthService {
    static async login(email, auth) {
        return $api.post('/user/login', {email, auth});
    }
    static async sendActivationLink(email) {
        return $api.post('/email/activation', {
           email
        });
    }
    static async registration(user) {
        return $api.post('/user/registration', {
            ...user
        });
    }
    static async logout() {
        return $api.post('/user/logout');
    }
}