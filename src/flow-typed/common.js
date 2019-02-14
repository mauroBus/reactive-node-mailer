// @flow

declare var module: {
  hot: {
    accept: (string, Function) => void
  }
}

// @flow
declare type TemplateType = 'ALERT' | 'CUSTOM' | 'TEST'

declare type EmailProps = {|
  from: string,
  subject: string,
  to: string,
  toName: string,
  type: TemplateType
|}

declare type TemplateProps = {|
  from: string,
  subject: string,
  to: string,
  toName: string
|}
