import joi from 'joi';
export const registrationSchema = joi.object({
    password: joi.string().optional()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .pattern(/\d/),
    email: joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'ua']}}),
})
