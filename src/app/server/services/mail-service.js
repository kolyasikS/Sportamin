import nodemailer from 'nodemailer';
class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
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
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation an account on' + process.env.API_URL,
            text: '',
            html: `
                <div>
                    <h1>Follow the link for activation</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }
}

export default new MailService();
