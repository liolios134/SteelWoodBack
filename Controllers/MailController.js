const mailSend = require("nodemailer/lib/mailer")

const sendMail = async (req, res) =>{
    await Mail.sendMail({
        form:"Brogrammer <test@develobird.gr>",
        to: "liolios1993@gmail.com",
        subject: "Test email subject",
        html: "<h1>Eisai Teleios !!!</h1>"
    });
    res.json({
        success: true,
        message: "Email sent!"
    });
}




module.exports = {
    mailSend
};