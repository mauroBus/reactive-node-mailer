import React from 'react'
import Main from '../main'
import Footer from '../footer'
import { Span } from 'react-html-email'

export default function TestTemplate(data) {
  const footer = (
    <Footer to={data.toName} />
  )

  return (
    <Main
      {...data}
      footer={footer}
    >
      <Span>Body as children</Span>
    </Main>
  )
}
