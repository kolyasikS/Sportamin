import CourseModel from "@/app/server/models/course-model";
class CourseService {
    async create(title, subtitle, language,
                 price, providedItems, content,
                 requirements, description, trainerID) {

        const course = await CourseModel.create({title, subtitle,language,
            price, providedItems, content, requirements, description,
            trainer: trainerID
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
