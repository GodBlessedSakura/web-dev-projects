const express = require('express')
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')

// server used to send send emails
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5001, () => console.log('Server Running'))

const contactEmail = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '1306562902@qq.com',
    pass: 'necgdfvfhtdtjeja',
  },
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})

router.post('/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName
  const email = req.body.email
  const message = req.body.message
  const phone = req.body.phone
  const mail = {
    from: '1306562902@qq.com',
    to: '1306562902@qq.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error)
    } else {
      res.json({ code: 200, status: 'Message Sent' })
    }
  })
})
