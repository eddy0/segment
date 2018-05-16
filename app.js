const express = require('express')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const path = require('path')
// webpack setting
const webpack = require('webpack');
const webpackConfig  = require('./webpack.config')
const middleware = require('webpack-dev-middleware');
const config = Object.assign({mode: 'development' }, webpackConfig)
const compiler = webpack(config)
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('dist', {
    autoscape: true,
    express: app,
    noCache: true,
})


const configApp = () => {

    app.use(middleware(compiler, {
        // webpack-dev-middleware options
    }))

    app.use(bodyParser.urlencoded({
            extended: true,
        }
    ))

    app.use(bodyParser.json())

    // app.use(session({
    //
    // }))

     app.use(express.static(path.join(__dirname, 'dist')));


    registerRoute()
}

const registerRoute = () => {
    const index = require('./route/index')
    app.use('/', index)
}

const run = (port=3000, host='') => {
    const server = app.listen( port, host, () => {
        const address = server.address()
        console.log(`listening server at http://${address.address}:${address.port}`)
    })
}

if (require.main === module) {
    configApp()
    const port = 5000
    const host = '0.0.0.0'
    run(port,  host)
}