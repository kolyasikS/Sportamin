import {registrationSchema} from "@/app/server/validations/schemas";
import ValidError from "@/app/server/exceptions/valid-error";

export function validateRegistration(email, password, clientId) {
    if (!password) {
        if (clientId !== process.env.CLIENT_ID || !clientId) {
            throw ValidError.MismatchedData('Insecure registration. Received client ID is invalid.');
        }
    }
    let res = registrationSchema.validate({email, password});
    if (res.error) {
        throw ValidError.MismatchedData(res.error);
    } else {
        return res.value;
    }
}
