const nodemailer = require("nodemailer");
const handlebars = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9ef86e23a9ae4b",
    pass: "cc2f69023449f1",
  }
});

transporter.use('compile', handlebars({
  viewEngine:{
    extname: '.handlebars',
    defaultLayout: false
  },
  viewPath: './views'
}))
module.exports = transporter;
