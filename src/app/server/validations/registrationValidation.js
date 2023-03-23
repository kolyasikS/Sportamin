import {registrationSchema} from "@/app/server/validations/schemas";

export function validateRegistration(email, password) {
    return registrationSchema.validate({email, password});
}
