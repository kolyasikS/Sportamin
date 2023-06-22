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

function runMiddleware(req, res, fn) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
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
