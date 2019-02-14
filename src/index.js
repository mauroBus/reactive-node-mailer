// @flow
import app, { init } from './server'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

const compiler = webpack(webpackConfig)
const port = 3000

// Webpack HMR
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  logLevel: 'error'
}))

app.use(webpackHotMiddleware(compiler))

init()

let server = app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`)
})

if (module.hot) {
  module.hot.accept('./server', () => {
    server.close(() => {
      init()
      server = app.listen(port)
    })
  })
}
