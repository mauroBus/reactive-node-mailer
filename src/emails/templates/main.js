// @flow
import React, { type Element as ReactElement } from 'react'
import { Email, Item, Box } from 'react-html-email'
import styles from './main.css'

type Props = {
  children?: ReactElement<*>,
  className?: string,
  footer?: ReactElement<*>,
  headCSS?: string,
  header?: ReactElement<*>,
  subject: string
}

export default function Main({
  subject,
  footer,
  header,
  children,
  className,
  ...emailProps
}: Props) {
  const headCSS = emailProps.headCSS ? `${styles}\n${emailProps.headCSS}` : styles

  return (
    <Email title={subject} headCSS={headCSS} {...emailProps}>
      <Box className={className}>
        <Item>
          {header}
          {children}
          {footer}
        </Item>
      </Box>
    </Email>
  )
}
