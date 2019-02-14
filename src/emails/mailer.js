// @flow
import 'babel-polyfill'
import nodemailer from 'nodemailer'

export type SendEmailProps = {|
  from: string,
  html: string,
  subject: string,
  to: string
|}

export async function sendEmail(mailOptions: SendEmailProps) {
  // Generate test SMTP service account from ethereal.email.
  // Only needed for this example as I don't have a real mail account for testing.
  const account = await nodemailer.createTestAccount()

  // Create reusable transporter object using the default SMTP transport.
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  })

  // send mail with defined transport object
  const info = await transporter.sendMail(mailOptions)
  const link: string = nodemailer.getTestMessageUrl(info)

  console.log('Message sent: %s', info.messageId)
  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', link)

  return link
}
