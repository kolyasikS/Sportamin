import $api from "@/app/lib/http";

export default class UserService {
    static getTrainers(query, sort) {
        const res = $api.post('/trainers', {
            query,
            sort
        });
        return res;
    }
    static updateUser(email, image) {
        return $api.put('/user/edit', {
            email,
            image
        });
    }
}