const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details </h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li> Email: ${req.body.email}</li>
        <ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host:'smtp.ethereal.email',
            port: 587,
            auth: {
                user:"chaya54@ethereal.email",
                pass: 'Fy26US5n9tWqNty23e'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'chaya54@ethereal.email',
            replyTo: "test@testaccount.com",
            subject: req.body.message,
            html:htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

module.exports = router;

