const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 22525
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: META_PASSWORD,
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "hayot71019@fom8.com",
    from: "bogdan.lyamzin.d@meta.ua",
    subject: "Verify email",
    html: "<p>Verify email</p>"
}

transport.sendMail(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))