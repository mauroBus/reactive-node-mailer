// @flow
import React from 'react'
import { Item, A, Box, Image } from 'react-html-email'

const Header = () => (
  <Item>
    <Box
      className="head-wrap"
      style={{ lineHeight: "150%", borderSpacing: "0", marginBottom: "10px", marginTop: "10px", width: "100%" }}
    >
      <Item className="container">
        <div className="content">
          <Box
            style={{
              borderSpacing: "0",
              lineHeight: "150%",
              width: "100%"
            }}
          >
            <Item style={{ textAlign: "center"}} cellPadding={20}>
              <A
                href="https://www.instructure.com"
                title="Instructure"
                target="_blank"
                data-saferedirecturl="https://www.instructure.com"
              >
                <Image
                  src="https://www.instructure.com/themes/instructure_blog/images/logo.svg"
                  border="0"
                  alt="Instructure"
                  width={200}
                  height={80}
                  className="image"
                />
              </A>
            </Item>
          </Box>
        </div>
      </Item>
    </Box>
  </Item>
)

export default Header
