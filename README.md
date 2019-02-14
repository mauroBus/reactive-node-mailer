# Build & send emails server side using React.

## Getting Started

```bash
git clone https://github.com/mauroBus/reactive-node-mailer
cd reactive-node-mailer
yarn install
yarn start
```

## Motivation

Most of the modern HTML emails are generated with a tangle of archaic HTML and inline styles.
In the last years, the front-end tooling have been evolving to a point were building a complex SPA is quite simple. Nowadays we can rely on React to build HTML server side. The common question is why not to take advantage of these technologies to build email templates.
This project takes advantage of the modern front-end tooling to build email templates on server side in a much clean & delightful way.
This approach has important [advantages](#advantages) as well as a few [disadvantages](#disadvantages) listed below.

## Usage

This project is an exploration about the possibilities. It uses React for the component definitions. The templates are divided in types. Each type of template inherit the basic layout from `src/emails/templates/main.js`. The main layout instantiates three custom elements: header, main content and footer. The different types of templates instantiates different content for those parts.
The templates can contain CSS for styles definitions. Once the DOM representation is obtained, the CSS properties are injected into the `style` attribute of each DOM element, replacing the CSS classes.
A few examples are placed under the `src/emails` folder.

### Run

`yarn start` runs the server on `http://localhost:3000`.
To have access to the results, a couple of endpoints are exposed:
* GET `/email` with a set of query params (ie: ?subject=Hello ✔&type=CUSTOM&toName=Billy&to=billy@thekid.com).
  The GET returns the final HTML of the email. It can be rendered in the browser.
* POST `/email` with a set of body params (ie: subject: Hello, type: TEST, toName: Billy, to: billy@thekid.com, ...).
  In the Node console, you will eventually get a link to open the email on the browser.

### Debug

`yarn debug` runs the server listening for debuggers on port `5858`.
* You can configure this port on your IDE.
* Or use the dedicated DevTools in Chrome: Open `chrome://inspect/#devices` and click `Open dedicated DevTools for Node` link.

### Use of react-html-email
The project uses [react-html-email](https://github.com/chromakode/react-html-email) which provides a set of components `Email`, `Box`, `Item`, `Span`, `A` and `Image`. This utilities facilitate the development. `react-html-email` validates the inline styles passed to the `style` against [Campaign Monitor's CSS Support Guide](https://www.campaignmonitor.com/css/).
### Head CSS and Media Queries
A `headCSS` prop can be passed to the `<Email>` component for defining general styles (ie: media queries).

## Advantages

  * By using React, we rely on a technology widely used and developed. This allows to build emails with complex markup composition in an easy way. With a ton of React documentation and tutorials everywhere, we don't reinvent the wheel with yet another template system.
  * Front-end developers are used to write code in React, they can immediately start creating email templates.
  * Back-end developers no longer need to write tangled code in HTML & CSS, technologies they don't usually use and feel comfortable. This work can rely on front-end folks, improving the productivity.
  * It relies on the same translations system (i18n) used in the front-end ([format-message](https://github.com/format-message/format-message) in this case). We don't need to find a new way to do the same thing on server side.
  * Reuse the styled components of the UI (buttons, texts, tables, etc). If the UI was built in React, it's possible to reuse much of them. If the UI is not built with React, it could reuse specific styles.
  * The Node server is quite simple and quick, front-end developers can tweak it according to their need. The configuration uses Webpack, ESLint, etc, it can be easily tweaked according to the team preferences.
  * When building a new email's template, the partial result can be seeing in the browser and inspected with devTools.
  * The CSS is placed in `.css` files and the markup is written in React `JSX`. This separation of concerns makes the code clearer and more maintainable. No inline styles required, the app automatically injects the styles in the specific DOM elements.

## Disadvantages

* If your server is not written in Node, it requires to spin-up a Node server. If your application has a heavy workload, this could not be a problem since you probably already need to move the emails to a separated microservice.
* The performance of building a template with React is worse than when using a simpler template system.
React creates a nodes representation (~DOM) that is parsed with `react-dom`. Additionally, React has many other features, like updating the nodes when something change. These features add a bit of extra computational cost when building the template.
However, the complexity of the emails templates is very low, and React was built with performance in mind, so I don't thing the performance impact is noticeable in the practice.

## Technology

  * [Node](https://nodejs.org)
  * [Express](https://expressjs.com)
  * [React](https://reactjs.org)
  * [Webpack](https://webpack.js.org)
  * [ES6 (Babel)](https://babeljs.io)
  * [Format Message](https://github.com/format-message/format-message)  (Internationalization)
  * [react-html-email](https://github.com/chromakode/react-html-email)
  * [Nodemailer](https://nodemailer.com)
  * [FlowType](https://flow.org)

## Test

TBD.

Some useful commands:
  * `yarn eslint`
  * `flow:status`
  * `yarn test` -> `yarn eslint && yarn flow:status`

## Internationalization

This project is based on [Format Message](https://github.com/format-message/format-message).
By running `yarn extract`, all translations are put in the `translations/en.json` by default. You should generate and include in the same folder the different JSONs with translations for each language you want to support.

## @TODO

  * Tests.
  * Validations / Errors.
  * Serve a static html page using hot module replacement (HMR).
  * Improve API.
  * Queue for requests.
  * Add prettier.
  * Add a CSS pre-processor (PostCSS ?)
  * Make it production ready (build system, security, etc).

## License

[MIT](https://github.com/mauroBus/reactive-node-mailer/blob/master/LICENSE.md)
