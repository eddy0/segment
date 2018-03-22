import React from 'react'
import './login.scss'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)


class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <form action="#" id="login-form">
                    <div className="heading">Login</div>
                    <div className="left">
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="password" name="password" id="pass" placeholder='Password' />
                        <input type="submit" value="Login" />
                        <a href='#'> forgot password?</a>
                    </div>
                    <div className='sign-up'>
                        <span> not a member? <a href=""> sign up </a></span>

                    </div>
                    <div className="right">
                        <div className="connect">login with</div>
                        <a href="" className="facebook">
                            <FontAwesomeIcon icon={["fab","facebook"]} aria-hidden="true" />
                            LOGIN WITH FACEBOOK
                        </a>
                        <br />
                        <a href="" className="twitter">
                            <FontAwesomeIcon icon={["fab","twitter"]} aria-hidden="true" />
                            LOGIN WITH TWITTER
                        </a> <br />
                        <a href="" className="google-plus">
                            <FontAwesomeIcon icon={["fab","google"]} aria-hidden="true" />
                            LOGIN WITH GOOGLE
                        </a>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login