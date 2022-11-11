const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const dotenv = require("dotenv");
dotenv.config();
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

// send mail
const sendEmail = (to, url, name, txt) => {
  console.log("send mail");
  oauth2Client.setCredentials({
    // access_token : MAILING_SERVICE_CLIENT_SECRET,
    refresh_token: `1//04kYwCqVxCzImCgYIARAAGAQSNwF-L9IrQL3wwbnpLiCJ5l5lDaUHYw2ZnnS_JxaEjNbVsKqTsr-xmroq0NCQ0i51KvFYSpcd7hM`,
  });

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: `eduspace4reply@gmail.com`,
      clientId:  `406743098508-3kucpc3tkfloeqnv7tftff0gp8hmn0ru.apps.googleusercontent.com`,
      clientSecret: `f381ppWoIrGGDOhNPbo8pCc_`,
      refreshToken: `1//04kYwCqVxCzImCgYIARAAGAQSNwF-L9IrQL3wwbnpLiCJ5l5lDaUHYw2ZnnS_JxaEjNbVsKqTsr-xmroq0NCQ0i51KvFYSpcd7hM`,
      accessToken,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "EduSpace Activation mail",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <img src="https://i.imgur.com/4jq68uE.png" alt style="display: block; margin:auto;" width="205"; >
            <h2 style="text-align: center; text-transform: uppercase;color: rgb(37, 132, 214);">Welcome to EduSpace.</h2>
            Hey <strong> ${name},</strong>
            Thanks for signing up at EduSpace.   
            To complete your registration, please confirm your email <strong>${to}</strong> by clicking the following button:
            
            <div style="text-align:center">   
            <a href=${url} style="background: rgb(37, 132, 214); text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
            </div>
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    console.log(err);
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
