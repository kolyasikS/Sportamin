import {Schema} from "mongoose";

class CommentService {
    async create(trainerId, courseId, message) {
        const currentDate = new Date();
    }
    async rate(rating) {
        if (rating >= 0) {

        } else {

        }
    }
    async delete(id) {

    }
}

export default new CommentService();
