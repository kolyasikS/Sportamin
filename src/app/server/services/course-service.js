import CourseModel from "@/app/server/models/course-model";
import UserService from "@/app/server/services/user-service";
class CourseService {
    async create({title, subtitle, language,
                 price, providingItems, content,
                 requirements, description}, trainerID) {

        const course = await CourseModel.create({title, subtitle, language,
            price,
            providedItems: providingItems.map(item => item.title),
            requirements: requirements.map(item => item.title),
            description,
            content,
            trainer: trainerID,
        });

        return course;
    }
    async getCourses(query, sort) {
        const courses = await CourseModel.find({...query}).sort(sort);
        return courses;
    }
    async update(id, title) {
        await CourseModel.updateOne({_id: id}, {title});
    }
}
export default new CourseService();
