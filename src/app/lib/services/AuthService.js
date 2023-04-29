import $api from "@/app/lib/http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/user/login', {email, password});
    }
    static async sendActivationLink(email) {
        return $api.post('/email/activation', {
           email
        });
    }
    static async registration(email, password) {
        return $api.post('/user/registration', {email, password});
    }
    static async logout() {
        return $api.post('/user/logout');
    }
}