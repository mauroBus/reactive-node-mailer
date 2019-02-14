// @flow
import React, { type Element as ReactElement } from 'react'
import { Item } from 'react-html-email'
import Main from '../main'
import Header from '../header'
import Footer from '../footer'
import styles from './styles.css'

export default function AlertTemplate(props: TemplateProps): ReactElement<typeof Main> {
  const footer = (
    <Footer to={props.toName} />
  )
  const header = (<Header toName={props.toName} />)

  return (
    <Main
      {...props}
      header={header}
      footer={footer}
      headCSS={styles.toString()}
    >
      <Item align="center">
        Alert email template...
      </Item>
    </Main>
  )
}
