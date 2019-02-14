// @flow
import 'babel-polyfill'
import React from 'react'
import express from 'express'
import bodyParser from 'body-parser'
import { loadTranslations } from './languages'
import { renderEmail, sendEmailTemplate } from './emails'
import { renderToString } from 'react-dom/server'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

export function init() {
  loadTranslations()

  // Returns the HTML content of the email.
  app.get('/email', async (req, res) => {
    const {
      from = '"Fred Foo 👻" <foo@example.com>',
      subject = 'No subject',
      to = 'bar@example.com, baz@example.com',
      toName,
      type = 'TEST',
    } = req.query
    const data = {
      from,
      subject,
      to,
      toName,
      type
    }

    try {
      const email = await renderEmail(data)
      res.send(email)
    } catch (error) {
      console.error(error)
      res.send(renderToString(<h2>Unexpected server error</h2>))
    }
  })

  // Sends an email
  app.post('/email', async (req, res) => {
    const {
      from = '"Fred Foo 👻" <foo@example.com>',
      subject = 'No subject',
      to = 'bar@example.com, baz@example.com',
      toName,
      type = 'TEST'
    } = req.body
    const emailInfo: EmailProps = {
      from,
      subject,
      to: 'some@email.com',
      toName,
      type
    }

    try {
      const email = await renderEmail(emailInfo)
      const link: string = await sendEmailTemplate({
        from,
        html: email,
        subject,
        to
      })

      res
        .status(200)
        .json({
          message: `Email successfully sent to: ${to}`,
          status: 200,
          link
        })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ message: 'Unexpected server error. Email not sent', status: 500 })
    }
  })
}

export default app
