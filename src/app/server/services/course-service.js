import CourseModel from "@/app/server/models/course-model";
import UserService from "@/app/server/services/user-service";
import {Schema} from "mongoose";
class CourseService {
    async create({title, subtitle, language,
                 price, providedItems, content,
                 requirements, description}, trainerID) {
        const course = await CourseModel.create({title, subtitle, language,
            price,
            providedItems: providedItems,
            requirements: requirements,
            description,
            content,
            trainer: trainerID,
        });

        return course;
    }
    async getCourses(reqQuery) {
        console.log(reqQuery);
        const query = getQueryFromReq(reqQuery);
        const sort = getSortFromReq(reqQuery);
        let courses = await CourseModel
            .aggregate([
                {
                    $match: query
                },
                {
                    $addFields: {
                        'content_count': {$size: "$content" },
                    }
                },
                {
                    $sort: sort.duration
                        ? {"content_count": sort.duration}
                        : {...sort}
                }
            ]);
        return courses;
    }
    async update(id, updatedCourse) {
        if (!id) {
            await CourseModel.updateMany({}, {$set: {previewImage: updatedCourse.previewImage}});
        } else {
            await CourseModel.updateOne({_id: id}, updatedCourse);
        }
    }
}

function getQueryFromReq(reqQuery) {
    const query = {};
    console.log(reqQuery);
    if (reqQuery.regex) {
        query.title = {$regex: reqQuery.regex}
    }
    if (reqQuery.options) {
        query.title.$options = reqQuery.options;
    }
    if (reqQuery.rating) {
        query.rating = {$gte: +reqQuery.rating};
    }
    if (reqQuery.languages) {
        query.language = {$in: reqQuery.languages.split(',')};
    }
    return query;
}
function getSortFromReq(reqQuery) {
    const sort = {};
    if (reqQuery['sort[rating]']) {
        sort.rating = +reqQuery['sort[rating]'];
    } else if (reqQuery['sort[price]']) {
        sort.price = +reqQuery['sort[price]'];
    } else if (reqQuery['sort[duration]']) {
        sort.duration = +reqQuery['sort[duration]'];
    }
    return sort;
}

export default new CourseService();
