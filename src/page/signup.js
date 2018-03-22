import React from 'react'
import './signup.scss'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)


class Signup extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <form action="#" id="signup-form">
                    <div className="heading">Sign Up</div>
                    <div className="left">
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="password" name="password" id="pass" placeholder='Password' />
                        <input type="password" name="password" id="pass" placeholder='Confirm Password' />
                        <input type="submit" value="Sign up" />
                    </div>
                    <div className='login'>
                        <span> Already Signed Up <a href=""> Login </a></span>

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

export default Signup