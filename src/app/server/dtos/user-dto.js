export default class UserDto {
    email;
    name;
    surname;
    trainer;
    avatar;
    id;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.name = model.name;
        this.surname = model.surname;
        this.trainer = model.trainer;
        this.avatar = model.avatar;
    }

}