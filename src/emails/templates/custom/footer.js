// @flow
import React from 'react'
import t from 'format-message'
import {
  Box,
  Image,
  Item,
  Span,
  A
} from 'react-html-email'

const Footer = () => (
  <Item className="container no-max-width">
    <div className="section footer">
      <div
        className="content center text-center"
        style={{ color: "#9ca299", fontSize: "14px" }}
      >
        <Box
          className="row"
          style={{ borderSpacing: "0",
            lineHeight: "150%",
            width: "100%" }}
        >
          <Item className="container">
            <div
              className="content center text-center"
              style={{ color: "#9ca299", fontSize: "14px" }}
              translate="yes"
            >
              Sent with <Span style={{ margin: "0 2px -2px 2px" }}>
                <Image
                  alt={t('Love')}
                  className="image"
                  height={10}
                  src="http://www.transparentpng.com/download/instagram-heart/th39g0-heart-photos.png"
                  style={{ maxWidth: "100%", display: "inline" }}
                  width={12}
                /> </Span> from Instructure
              <br />
              Using <A className="muted" href="https://github.com/mauroBus/reactive-node-mailer">reactive-node-mailer</A>
            </div>
          </Item>
        </Box>
      </div>

      <div className="timestamp">
        {t.date(new Date('2019-02-07 02:41:32 +0000'),
          'MMM d')}
      </div>
    </div>
  </Item>
)

export default Footer
