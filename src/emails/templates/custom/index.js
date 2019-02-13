import React from 'react'
import Main from '../main'
import Body from './body'
import Header from './header'
import Footer from './footer'

import styles from './styles.css'

export default function CustomTemplate({ toName, subject }) {
  return (
    <Main
      className="body-wrap"
      footer={<Footer toName={toName} />}
      headCSS={styles.toString()}
      header={<Header toName={toName} />}
      subject={subject}
    >
      <Body userName={toName} />
    </Main>
  )
}
