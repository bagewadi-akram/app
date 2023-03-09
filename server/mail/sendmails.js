require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

// These id's and secrets should come from .env file.
const CLIENT_ID =
  "741493752633-ema2rkmv1f3s9ehkkq0mc8ii4erburaj.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "4/0AWtgzh5-LOOYOikZJ6qbomRmduusxI00QlATLCngMI3OtApmGQw9SXd7o9QBccvM7XF1xw";

const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://oauth2.googleapis.com/token"],
});


async function sendMail() {
  console.log('authUrl :>> ', authUrl);
  // const { tokens } = await oAuth2Client.getToken(authUrl);
  const oauth2 = google.oauth2({
    auth: oAuth2Client,
    version: "v2",
  });
  const { data } = await  oAuth2Client.getAccessToken();
console.log('data :>> ', data);
  try {
    const accessToken = data;
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "akram.webdevelopr@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
        // accessToken:
        //   "ya29.a0AVvZVsrCoUxcC3NImfqFQcSqobFQSrCoOJ2h3KJSr7u2Nd9vGFLnmJDg_mK_TARJZELRjrecMZwGgljPueoZQv39aoR42XXrcwb24TjyTsL8nk_T_n5QCv4J3LPOpgshnm9mJNqNOI0b4hOzLw9UwJR9LtjFaCgYKAcsSARESFQGbdwaITDBHaYUsp0AFQ3H5MNtzyg0163",
      },
    });

    const mailOptions = {
      from: `Store <${process.env.MAIL_USERNAME}>`,
      to: "akwaseem24@gmail.com",
      subject: "Hello from gmail using API",
      text: "Hello from gmail email using API",
      html: "<h1>Hello from gmail email using API</h1>",
    };

    transport.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    console.log("error :>> ", error);
  }
}

module.exports = sendMail;
