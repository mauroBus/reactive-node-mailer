// @flow
import React, { type Element as ReactElement } from 'react'
import Main from '../main'
import Footer from '../footer'
import { Span } from 'react-html-email'

export default function TestTemplate(
  props: TemplateProps
): ReactElement<typeof Main> {
  const footer = (
    <Footer to={props.toName} />
  )

  return (
    <Main
      {...props}
      footer={footer}
    >
      <Span>Body as children</Span>
    </Main>
  )
}
