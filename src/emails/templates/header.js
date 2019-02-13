import React from 'react'
import t from 'format-message'
import { Item, Span } from 'react-html-email'

export default function Header({ toName }) {
  return (
    <Item align="center">
      <Span fontSize={32}>
        {t('Hi { name }', { name: toName })}
      </Span>
    </Item>
  )
}
