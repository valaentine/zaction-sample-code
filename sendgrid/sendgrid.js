const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("API KEY Here");

module.exports = function (context, params) {
    // const msg = {
    //     to: 'gomanhera@naver.com',
    //     from: 'rokakjw@sk.com',
    //     subject: 'SendingTest01',
    //     text: 'Success!!'
    // };
    const msg = {
        to: params.to,
        from: params.from,
        subject: params.subject,
        text: params.text
    };    

    return new Promise(function(resolve, reject){
        sgMail.send(msg).then(arg => {
            // console.log('email send successfully!');
            // console.log(JSON.stringify(arg))
            resolve({status:200, data: arg});
        })
        .catch(err => {
            // console.log('email send error')
            // console.log(JSON.stringify(err))
            resolve({status:500, data: err});
        })
    })

}