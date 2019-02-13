import React from 'react'
import t from 'format-message'
import Button from '../../common/button'
import { Item, Box } from 'react-html-email'

const Body = ({ userName }) => (
  <Item>
    <div className="section">
      <Box
        className="row"
        style={{ borderSpacing: "0", lineHeight: "150%", width: "100%" }}
      >
        <Item className="container">
          <div>
            <div className="p">
              {t('Hey {userName}:', { userName })}
            </div>

            <div
              className="p"
              style={{ marginTop: "1em" }}
            >
              {t('Good news! You have the option to add a very custom template.')}
            </div>

            <div
              className="p"
              style={{ marginTop: "1em" }}
              translate="yes"
            >
              This is a custom test with some <b>bold</b> inline text.
            </div>

            <div
              className="p"
              style={{ marginTop: "1em" }}
            ></div>
          </div>
        </Item>
      </Box>

      <div className="timestamp">
        {t.date(new Date('2019-02-07 02:41:32 +0000'), 'MMM d')}
      </div>
    </div>

    <Box className="row" style={{ width: "100%" }}>
      <Item className="section container">
        <div className="p">
          <Button href="https://www.instructure.com" className="button">
            {t('Go see more!')}
          </Button>
        </div>
        <div className="timestamp">
          {t.date(new Date('2019-02-07 02:41:32 +0000'), 'MMM d')}
        </div>
      </Item>
    </Box>
  </Item>
)

export default Body