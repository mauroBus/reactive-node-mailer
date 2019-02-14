// @flow
import React from 'react'
import t from 'format-message'
import { Item, Span } from 'react-html-email'

type Props = {|
  toName: string
|}

export default function Header({ toName }: Props) {
  return (
    <Item align="center">
      <Span fontSize={32}>
        {t('Hi { name }', { name: toName })}
      </Span>
    </Item>
  )
}
