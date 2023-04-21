import CourseModel from "@/app/server/models/course-model";
import UserService from "@/app/server/services/user-service";
import {Schema} from "mongoose";
import {ObjectId} from "mongodb";
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
        const query = getQueryFromReq(reqQuery);
        const sort = getSortFromReq(reqQuery);
        console.log('query', query);
        let pipeline = [
            {
                $match: query
            },
            {
                $addFields: {
                    'content_count': {$size: "$content" },
                }
            }
        ];
        if (sort) {
            pipeline.push(sort);
        }
        let courses = await CourseModel
            .aggregate(pipeline);
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
    if (reqQuery.id) {
        query._id = new ObjectId(reqQuery.id);
    }
    if (reqQuery.range) {
        let range = reqQuery.range.split(',');
        query.$and = [{price: {$gte: +range[0]}}, {price: {$lte: +range[1]}}];
    }
    return query;
}
function getSortFromReq(reqQuery) {
    let sort = {};
    if (reqQuery['sort[rating]']) {
        sort.rating = +reqQuery['sort[rating]'];
    } else if (reqQuery['sort[price]']) {
        sort.price = +reqQuery['sort[price]'];
    } else if (reqQuery['sort[duration]']) {
        sort.duration = +reqQuery['sort[duration]'];
    }
    if (Object.keys(sort).length) {
        sort = {
            $sort: sort.duration
                ? {"content_count": sort.duration}
                : {...sort}
        }
        return sort;
    } else {
        return null;
    }
}

export default new CourseService();