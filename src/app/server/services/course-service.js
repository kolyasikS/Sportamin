
import CourseModel from "@/app/server/models/course-model";
import UserService from "@/app/server/services/user-service";
import {Schema} from "mongoose";
import {ObjectId} from "mongodb";
import {updateCourse} from "@/app/lib/controllers/courseController";
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

        let pipeline = [{
                $match: query
            }, {
                $addFields: {
                    'content_count': {$size: "$content" },
                }
            },
        ];
        if (sort) {
            pipeline.push(sort);
        }
        if (reqQuery.limit && reqQuery.skip) {
            pipeline.push({
                $limit: +reqQuery.limit + +reqQuery.skip,
            });
            pipeline.push({
                $skip: +reqQuery.skip,
            });
        }
        let courses = await CourseModel
            .aggregate(pipeline);
        let count = await CourseModel.countDocuments(query);
        return {
            items: courses,
            count
        };
    }
    async update(id, updatedCourse) {
        await CourseModel.updateOne({_id: id}, updatedCourse);
    }
    async subscribe(id) {
        await this.update(id, {$inc: {students: 1}});
    }
    async delete(id) {
        await CourseModel.deleteOne({_id: new ObjectId(id)});
    }
}

function getQueryFromReq(reqQuery) {
    const query = {};
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
    if (reqQuery.trainer) {
        query.trainer = new ObjectId(reqQuery.trainer);
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
