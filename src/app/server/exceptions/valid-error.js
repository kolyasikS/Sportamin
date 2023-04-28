export default class ValidError extends Error {
    status;
    errors;
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static MismatchedData(message) {
        return new ValidError(412, message);
    }
}