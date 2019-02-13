# Build & send emails server side using React & Node.

## Getting Started

```bash
git clone https://github.com/mauroBus/reactive-node-mailer
cd reactive-node-mailer
npm install
npm start # runs the node server.
```

## Motivation

Most of the modern HTML emails are generated with a tangle of archaic HTML and inline styles.
In the last years, the front-end tooling have been evolving to a point were building a complex SPA is quite simple. Nowadays we can rely on React to build HTML server side. The common question is why not to take advantage of these technologies to build email templates.
This project takes advantage of the modern front-end tooling to build email templates on server side in a much clean & delightful way.
There are important advantages as well as a few disadvantages in doing this.

## Usage

There are a few examples that are mainly explorations about the possibilities. They are placed under the `src/emails` folder.

### react-html-email
By default, inline styles passed to the `style` prop will be validated against [Campaign Monitor's CSS Support Guide](https://www.campaignmonitor.com/css/).
### Head CSS and Media Queries
You can pass a string prop `headCSS` to your `<Email>` component. You can see it in our [kitchenSink.jsx](https://github.com/chromakode/react-html-email/blob/master/examples/kitchenSink.jsx) example.

## Advantages

  * By using React, we rely on a very good and used technology, this allows to build complex markup composition. With tons of documentation and tutorials, we don't reinvent the wheel with yet another template system.
  * Front-end developers are used to write React code, so they can immediately start working on email templates.
  * The backend developers no longer need to write tangled code in HTML & CSS, technologies that they don't usually use and like.
  * We rely on the same translations system (i18n) used in the front-end. We don't need a new way to do the same thing.
  * Setup the Node is quite simple and quickly, FE developers can tweak it according to their need.
  * You can easily test the final result of the email template by loading a page on the browser.

## Disadvantages

You need to spin up a Node server if your server is not built in Node. If your application has a heavy workload, this could not be a problem since you probably already need to move the emails sending to a microservice.

## Technology

  * [Node](https://nodejs.org)
  * [Express](https://expressjs.com)
  * [React](https://reactjs.org)
  * [Webpack](https://webpack.js.org)
  * [ES6 (Babel)](https://babeljs.io)
  * [Format Message](https://github.com/format-message/format-message)  (Internationalization)
  * [react-html-email](https://github.com/chromakode/react-html-email)
  * [Nodemailer](https://nodemailer.com)

## @TODO

  * Tests.
  * FlowType/Typescript.
  * Validations / Errors.
  * Improve API.
  * Serve a static html page using hot module replacement (HMR).
  * Queue for requests.
  * Add prettier.

## License

[MIT](https://github.com/mauroBus/reactive-node-mailer/blob/master/LICENSE)
