import React from 'react'
import t from 'format-message'
import {
  Box,
  Image,
  Item,
  Span
} from 'react-html-email'

const Footer = () => (
  <Item className="container no-max-width">
    <div className="section footer">
      <div
        className="content center text-center"
        style={{
          color: "#9ca299",
          display: "block",
          fontSize: "14px",
          margin: "0 auto",
          maxWidth: "600px",
          padding: "15px",
          paddingBottom: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingTop: "0px",
          textAlign: "center",
        }}
      >
        <Box
          className="row"
          style={{ borderSpacing: "0",
            lineHeight: "150%",
            width: "100%" }}
        >
          <Item className="container">
            <div
              className="content"
              style={{
                color: "#9ca299",
                display: "block",
                fontSize: "14px",
                margin: "0 auto",
                maxWidth: "600px",
                padding: "15px",
                paddingBottom: "5px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "0px",
                textAlign: "center"
              }}
              translate="yes"
            >
              Sent with <Span style={{ margin: "0 2px -2px 2px" }}>
                <Image
                  alt={t('Love')}
                  className="image"
                  height={10}
                  src="http://www.transparentpng.com/download/instagram-heart/th39g0-heart-photos.png"
                  style={{ maxWidth: "100%" }}
                  width={12}
                /> </Span> from Instructure
              <br />
              Using plain <a className="muted" href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>
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
