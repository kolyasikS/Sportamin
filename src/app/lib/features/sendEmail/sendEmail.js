import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});
const sendEmail = async (name, text) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'Feedback',
        text: '',
        html: `
        <div>
            <h1>${name}</h1>
            <p>${text}</p>
        </div>
    `
    });
}

export default sendEmail;