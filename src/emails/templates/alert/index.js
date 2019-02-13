import React from 'react'
import { Item } from 'react-html-email'
import Main from '../main'
import Header from '../header'
import Footer from '../footer'
import styles from './styles.css'

export default function AlertTemplate(data) {
  const footer = (
    <Footer to={data.toName} />
  )
  const header = (<Header toName={data.toName} />)

  return (
    <Main
      {...data}
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
