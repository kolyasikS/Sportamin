import $api from "@/app/lib/http";

export default class UserService {
    static getUsers(query, sort) {
        const res = $api.post('/users', {
            query,
            sort
        });
        return res;
    }
    static getTrainer(id) {
        const res = $api.post('/trainer', {
            id,
        });
        return res;
    }
    static updateUser(query, updatedUser) {
        return $api.put('/user/edit', {
            query,
            updatedUser
        });
    }
}