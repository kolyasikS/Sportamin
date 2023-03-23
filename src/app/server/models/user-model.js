import {Schema, model, models} from 'mongoose';
const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
});
export default models.User || model('User', UserSchema);