import React from 'react'
import t from 'format-message'
import { Item, Span, A, Image } from 'react-html-email'

export default function Footer() {
  return (
    <Item align="center">
      <Span fontSize={20}>
        {t('This is an example email made with love using:')}
      </Span>
      <A href="https://reactjs.org" >
        <Image
          alt="React"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
          width={130}
          height={100}
        />
      </A>
      +
      <A href="https://nodejs.org">
        <Image
          alt="Node.js"
          src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
          width={200}
          height={100}
        />
      </A>
    </Item>
  )
}
