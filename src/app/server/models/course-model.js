import {Schema, model, models} from 'mongoose';
const CourseSchema = new Schema({
    trainer: {type: Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    rating: {type: Number, default: 0},
    students: {type: Number, default: 0},
    language: {type: String, required: true},
    price: {type: Number, required: true},
    providedItems: [{type: String}],
    requirements: [{type: String}],
    description: {type: String, required: true},
    content: [{
        days: [{
            dayOfWeek: {type: String},
            exercises: [{
                muscles: [{type: String}],
                title: {type: String},
                technique: {type: String},
            }],
        }]
    }],
});

export default models.Course || model('Course', CourseSchema);