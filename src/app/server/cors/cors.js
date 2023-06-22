/*
import Cors from 'cors'

const whitelist = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
})*/
import Cors from "cors";

export const cors = Cors({
    methods: ['POST', 'GET', 'HEAD', 'DELETE', 'PATCH', 'PUT'],
    origin: (origin, callback) => {
        // eslint-disable-next-line no-constant-condition
        if (true) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
})
export function runMiddleware(req, res) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        cors(req, res, (result) => {
            console.log(result);
            if (result instanceof Error) {
                console.log(result);
                return reject(result)
            }
            return resolve(result)
        });
    });
}

export default runMiddleware;
// export default async function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
