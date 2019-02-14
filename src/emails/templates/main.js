// @flow
import React, { type Element as ReactElement } from 'react'
import { Email, Item, Box } from 'react-html-email'

const css = `image { margin: 0.5rem; border: 0.0625rem solid blue; border-radius: 0.1rem; }`.trim()

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
  const headCSS = emailProps.headCSS ? `${css}\n${emailProps.headCSS}` : css

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
