// @flow
import React, { type Element as ReactElement} from 'react'
import { renderToString } from 'react-dom/server'
import ReactHTMLEmail from 'react-html-email'
import inlineCss from 'inline-css'
import { send, type SendEmailProps } from './mailer'

// Email templates:
import AlertTemplate from './templates/alert'
import TestTemplate from './templates/test'
import CustomTemplate from './templates/custom'

export { default as Main } from './templates/main'
export { default as Header } from './templates/header'
export { default as Footer } from './templates/footer'

ReactHTMLEmail.configStyleValidator({
  // When strict, incompatible style properties will result in an error.
  strict: true,
  // Whether to warn when compatibility notes for a style property exist.
  warn: true,
  // Platforms to consider for compatibility checks.
  platforms: [
    'gmail',
    'gmail-android',
    'apple-mail',
    'apple-ios',
    'yahoo-mail',
    // 'outlook',
    // 'outlook-legacy',
    // 'outlook-web'
  ]
})

export const renderEmail = (props: EmailProps): string => {
  // Render the email template according to the type:
  const template = renderTemplate(props)

  // Converting the tree in a string DOM alike elements:
  const stringTemplate = renderToString(template)

  // Inline the CSS properties into the `style` attribute of each DOM element.
  const finalTemplate: string = inlineCss(stringTemplate, {
    preserveMediaQueries: true,
    url: ' '
  })

  return finalTemplate
}

export const sendEmail = (props: SendEmailProps) => {
  return send(props)
}

function renderTemplate({ type, ...data }: EmailProps): ReactElement<*> {
  switch (type) {
    case 'ALERT':
      return <AlertTemplate {...data} />
    case 'TEST':
      return <TestTemplate {...data} />
    case 'CUSTOM':
      return <CustomTemplate {...data} />
    default:
      throw new Error(`Invalid template type ${type}`)
  }
}
