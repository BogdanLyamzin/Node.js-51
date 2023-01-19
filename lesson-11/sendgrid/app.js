const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "hayot71019@fom8.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Verify email",
    html: "<p>Verify email</p>"
}

sgMail.send(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))