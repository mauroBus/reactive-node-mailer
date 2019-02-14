// @flow
import React, { type Element as ReactElement } from 'react'
import { A } from 'react-html-email'
import classnames from 'classnames'

type Props = {|
  children?: ReactElement<*> | string,
  className?: string,
  href: string
|}

export default function Footer({ href, className, children }: Props) {
  return (
    <A
      className={classnames('btn-primary', className)}
      href={href}
      style={{
        background: "#ffffff",
        backgroundColor: "#ff5a5f",
        border: "1px solid",
        borderRadius: "2px",
        borderTopWidth: "1px",
        color: "#ffffff",
        display: "block",
        fontWeight: "bold",
        margin: "3rem 0",
        padding: "10px 16px",
        textAlign: "center",
        textDecoration: "none",
        verticalAlign: "middle",
        whiteSpace: "nowrap"
      }}
      target="_blank"
    >
      {children}
    </A>
  )
}
