import React from 'react'
import Header from './header'
import Main from './main'
import 'bootstrap'
import './bootswatch.css'
import './layout.scss'


class Layout extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default Layout