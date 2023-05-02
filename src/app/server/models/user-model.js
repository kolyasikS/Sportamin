import {Schema, model, models} from 'mongoose';
const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    name: {type: String, default: 'New'},
    surname: {type: String, default: 'user'},
    avatar: {type: Buffer},
    trainer: {
        isTrainer: {type: Boolean, default: false},
        title: {type: String, default: ''},
        description: {type: String, default: ''},
        rating: {
            type: Number,
            default: 0.0
        },
        students: {
            type: Number,
            default: 0.0
        },
        courses: {
            type: Number,
            default: 0.0
        },
        languages: [{type: String}],
        links: [{
            title: {type: String},
            username: {type: String},
            link: {type: String}
        }]
    }
});
export default models.User || model('User', UserSchema);