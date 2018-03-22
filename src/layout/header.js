import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginContainer from './component/login'
import Logo from './component/logo'
import Nav from './component/nav'



class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className='navbar navbar-expand-lg'>
                <div className="container">
                    <Logo />
                    <Nav />
                    <div className="user-info">
                        <MuiThemeProvider>
                            <LoginContainer />
                        </MuiThemeProvider>
                    </div>
                </div>

            </header>
        )
    }
}

export default Header