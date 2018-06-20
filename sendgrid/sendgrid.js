const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('API_KEY');

module.exports = function (context, params) {
    const msg = {
        to: 'zaction@sk.com',
        from: 'rokakjw@sk.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
}