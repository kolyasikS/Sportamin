import {Schema, model, models} from 'mongoose';

const CommentSchema = new Schema({
    trainerId: {type: Schema.Types.ObjectId, ref: 'User'},
    courseId: {type: Schema.Types.ObjectId, ref: 'Course'},
    repliedOn: {type: Schema.Types.ObjectId, ref: 'Comment'},
    disliked: [{type: Schema.Types.ObjectId, ref: 'User'}],
    liked: [{type: Schema.Types.ObjectId, ref: 'User'}],
    amountReplies: {type: Number, default: 0},
    message: {type: String},
    publishedTime: {type: Date},
});
export default models.Comment || model('Comment', CommentSchema);