const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');

const {EMAIL, PASSWORD} = require('../env.js')

//sending email from sending account to (ETHEREAL)
const signup = async (req, res) => {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Omair Yahya👻" <omairyahya@.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hellow from Omair.", // plain text body
        html: "<b>Hello from Omair</b>", // html body
      }


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "you should receive an email",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("Signup Successfully...!");
}


//send emial from real account(GMAIL)
const getbill = (req, res) => {

    const { userEmail } = req.body;

    let config =  {
        service : "gmail",
        auth : {
            user : EMAIL,
            pass : PASSWORD,
        }
    }
    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Testing Email From Omair Yahya",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Omair Yahya",
            intro: "Testing software",
            table : {
                data : [
                    {
                        item : "email through nodemailer",
                        description: "in a backend application",
                        price : "$10.99",
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : EMAIL,
        to : userEmail,
        subject: "Place Order",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Successfully...!");
}
module.exports = {
  signup,
  getbill,
};
